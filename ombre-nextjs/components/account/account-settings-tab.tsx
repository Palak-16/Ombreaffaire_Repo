"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, AlertTriangle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function AccountSettingsTab() {
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
    rememberDevice: true,
    activityLog: true,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Account Settings
        </CardTitle>
        <CardDescription>Manage your account security and preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="twoFactorAuth" className="font-medium">
                Two-Factor Authentication
              </Label>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <Switch
              id="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onCheckedChange={() => handleToggle("twoFactorAuth")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="rememberDevice" className="font-medium">
                Remember Device
              </Label>
              <p className="text-sm text-muted-foreground">Stay logged in on this device</p>
            </div>
            <Switch
              id="rememberDevice"
              checked={settings.rememberDevice}
              onCheckedChange={() => handleToggle("rememberDevice")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="activityLog" className="font-medium">
                Activity Log
              </Label>
              <p className="text-sm text-muted-foreground">Track login activity on your account</p>
            </div>
            <Switch
              id="activityLog"
              checked={settings.activityLog}
              onCheckedChange={() => handleToggle("activityLog")}
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h3 className="font-medium">Account Actions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Change Password</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Enter your current password and a new password to update your credentials.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
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
                </div>
                <DialogFooter>
                  <Button type="submit">Update Password</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Download Personal Data</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Your Data</DialogTitle>
                  <DialogDescription>You can download a copy of your personal data in JSON format.</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    This file will contain all your personal information, order history, and account preferences.
                  </p>
                </div>
                <DialogFooter>
                  <Button type="submit">Download Data</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Your Account</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete your account? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground mb-4">Deleting your account will:</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Remove all your personal information</li>
                  <li>Delete your order history</li>
                  <li>Cancel any active subscriptions</li>
                  <li>Remove your saved payment methods</li>
                </ul>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete Account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
