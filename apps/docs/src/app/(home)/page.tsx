import Link from "next/link";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center py-4">
      <h1 className="text-4xl font-bold mb-4">
        <span>HeroUI's design system.</span>
        <br />
        <span className="text-muted-foreground">shadcn's abstraction.</span>
      </h1>
      <div className="flex justify-center items-center gap-3">
        <Button
          nativeButton={false}
          render={<Link href="/docs/installation">Install</Link>}
        />
        <Button
          nativeButton={false}
          variant="secondary"
          render={<Link href="/docs/components">View components</Link>}
        />
      </div>
    </div>
  );
}
