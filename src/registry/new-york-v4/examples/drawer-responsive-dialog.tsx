"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

export default function DrawerResponsiveDialog() {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger render={<Button variant="tertiary" />}>
					Edit Profile
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DialogDescription>
					</DialogHeader>
					<ProfileForm />
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="tertiary">Edit Profile</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DrawerDescription>
				</DrawerHeader>
				<ProfileForm className="px-4" />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button className="w-full" variant="tertiary">
							Cancel
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}
			className={cn("grid items-start gap-6", className)}
		>
			<div className="grid gap-3">
				<Label htmlFor="email">Email</Label>
				<Input
					variant="secondary"
					type="email"
					id="email"
					defaultValue="maqed@example.com"
				/>
			</div>
			<div className="grid gap-3">
				<Label htmlFor="username">Username</Label>
				<Input variant="secondary" id="username" defaultValue="@0xMaqed" />
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	);
}
