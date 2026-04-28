import { type NextRequest, NextResponse } from "next/server";
import { registry } from "@/registry";

export const dynamic = "force-static";

export const GET = async (_: NextRequest) => {
	const item = registry.items.find((i) => i.name === "style");

	if (!item) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}

	return NextResponse.json({
		$schema: "https://ui.shadcn.com/schema/registry-item.json",
		...item,
	});
};
