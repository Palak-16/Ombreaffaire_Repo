import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order Notifications</CardTitle>
          <CardDescription>Configure notifications for order-related events.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">New Orders</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when new orders are placed.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Order Status Changes</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when order statuses change.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Order Cancellations</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when orders are cancelled.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Order Returns</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when customers request returns.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Notifications</CardTitle>
          <CardDescription>Configure notifications for customer-related events.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">New Registrations</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when new customers register.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Customer Reviews</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when customers leave reviews.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Contact Form Submissions</h3>
              <p className="text-sm text-muted-foreground">
                Receive notifications when customers submit contact forms.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Notifications</CardTitle>
          <CardDescription>Configure notifications for inventory-related events.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Low Stock Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Receive notifications when products reach low stock levels.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Out of Stock Alerts</h3>
              <p className="text-sm text-muted-foreground">Receive notifications when products go out of stock.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
