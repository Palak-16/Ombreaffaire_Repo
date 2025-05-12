"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from "@/components/admin/settings/account-settings"
import { SiteSettings } from "@/components/admin/settings/site-settings"
import { NotificationSettings } from "@/components/admin/settings/notification-settings"
import { SecuritySettings } from "@/components/admin/settings/security-settings"
import { IntegrationSettings } from "@/components/admin/settings/integration-settings"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and set e-commerce preferences.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="overflow-x-auto">
          <TabsList className="bg-muted w-full sm:w-auto">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="site">Site</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="account" className="space-y-4">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="site" className="space-y-4">
          <SiteSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <IntegrationSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
