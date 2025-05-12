import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Gateways</CardTitle>
          <CardDescription>Configure payment gateway integrations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Stripe</h3>
                <p className="text-sm text-muted-foreground">Accept credit card payments via Stripe.</p>
              </div>
              <Switch defaultChecked />
            </div>
            {/* Stripe API Keys */}
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <div className="space-y-2">
                <Label htmlFor="stripePublicKey">Publishable Key</Label>
                <Input id="stripePublicKey" defaultValue="pk_test_..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stripeSecretKey">Secret Key</Label>
                <Input id="stripeSecretKey" defaultValue="sk_test_..." type="password" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">PayPal</h3>
                <p className="text-sm text-muted-foreground">Accept payments via PayPal.</p>
              </div>
              <Switch />
            </div>
            {/* PayPal API Keys */}
            <div className="space-y-2 pl-6 border-l-2 border-muted opacity-50">
              <div className="space-y-2">
                <Label htmlFor="paypalClientId">Client ID</Label>
                <Input id="paypalClientId" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paypalClientSecret">Client Secret</Label>
                <Input id="paypalClientSecret" type="password" disabled />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shipping Providers</CardTitle>
          <CardDescription>Configure shipping provider integrations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">ShipStation</h3>
                <p className="text-sm text-muted-foreground">Manage and track shipments via ShipStation.</p>
              </div>
              <Switch />
            </div>
            {/* ShipStation API Keys */}
            <div className="space-y-2 pl-6 border-l-2 border-muted opacity-50">
              <div className="space-y-2">
                <Label htmlFor="shipstationApiKey">API Key</Label>
                <Input id="shipstationApiKey" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipstationApiSecret">API Secret</Label>
                <Input id="shipstationApiSecret" type="password" disabled />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Marketing</CardTitle>
          <CardDescription>Configure email marketing integrations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Mailchimp</h3>
                <p className="text-sm text-muted-foreground">Sync customers and send marketing emails via Mailchimp.</p>
              </div>
              <Switch defaultChecked />
            </div>
            {/* Mailchimp API Keys */}
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <div className="space-y-2">
                <Label htmlFor="mailchimpApiKey">API Key</Label>
                <Input id="mailchimpApiKey" defaultValue="abc123..." type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mailchimpListId">List ID</Label>
                <Input id="mailchimpListId" defaultValue="def456..." />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
