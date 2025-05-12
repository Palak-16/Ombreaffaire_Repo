import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="site">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
          <TabsTrigger value="security">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Skeleton className="h-4 w-20" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Skeleton className="h-24 w-24 rounded-full" />
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
