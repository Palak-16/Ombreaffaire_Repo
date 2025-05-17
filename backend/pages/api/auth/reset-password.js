import bcrypt from 'bcryptjs';
import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
        return res.status(400).json({ error: 'Token and new password are required' });
    }

    const { data: resetData, error } = await supabase
        .from('password_resets')
        .select('*')
        .eq('token', token)
        .single();

    
    if (!resetData || error) {
        return res.status(400).json({ error: 'Invalid or expired token' });
    }

    const now = new Date();
    const expiresAt = new Date(resetData.expires_at + 'Z'); // ✅ Append 'Z' to force UTC parsing

    if (expiresAt < now) {
        return res.status(410).json({ error: 'Reset token has expired' });
    }

    // Update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const { error: updateError } = await supabase
        .from('users')
        .update({ password: hashedPassword })
        .eq('email', resetData.email);

    if (updateError) {
        return res.status(500).json({ error: 'Failed to update password' });
    }

    // Delete used token
    await supabase.from('password_resets').delete().eq('email', resetData.email);

    return res.status(200).json({ message: 'Password reset successfully' });
}
