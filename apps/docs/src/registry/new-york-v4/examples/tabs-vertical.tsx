import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

export function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm font-medium">Account Settings</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account details, profile information, and connected
          services.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm font-medium">Password & Security</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Update your password and configure two-factor authentication to keep
          your account secure.
        </p>
      </TabsContent>
      <TabsContent value="notifications">
        <p className="text-sm font-medium">Notification Preferences</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose how and when you receive email, push, and in-app notifications.
        </p>
      </TabsContent>
    </Tabs>
  );
}
