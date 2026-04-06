import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/registry/new-york-v4/ui/toggle";

export default function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" aria-label="Toggle small">
        Small
      </Toggle>
      <Toggle size="default" aria-label="Toggle default">
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        Large
      </Toggle>
      <Toggle size="icon-sm" aria-label="Toggle icon small">
        <BookmarkIcon />
      </Toggle>
      <Toggle size="icon" aria-label="Toggle icon">
        <BookmarkIcon />
      </Toggle>
      <Toggle size="icon-lg" aria-label="Toggle icon large">
        <BookmarkIcon />
      </Toggle>
    </div>
  );
}
