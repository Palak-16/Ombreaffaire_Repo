export function normalizeEmail(rawEmail) {
  const [localPart, domain] = rawEmail.toLowerCase().split('@');

  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    const normalizedLocal = localPart.replace(/\./g, '');
    return `${normalizedLocal}@${domain}`;
  }

  return `${localPart}@${domain}`;
}
