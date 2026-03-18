import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
      <AvatarFallback>Mqd</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
}
