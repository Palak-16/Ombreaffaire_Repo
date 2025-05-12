import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your password to keep your account secure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Enable Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Require a verification code in addition to your password when signing in.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>Manage your active login sessions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Current Session</h3>
                <p className="text-sm text-muted-foreground">Chrome on Windows • New York, USA • Active now</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Safari on macOS</h3>
                <p className="text-sm text-muted-foreground">Los Angeles, USA • Last active 2 days ago</p>
              </div>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Firefox on Windows</h3>
                <p className="text-sm text-muted-foreground">Chicago, USA • Last active 5 days ago</p>
              </div>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="destructive">Revoke All Other Sessions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
