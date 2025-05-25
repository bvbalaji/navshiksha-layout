"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const tabRoutes = [
  { value: "create-new", label: "Create New", route: "/teacher/create-content/create-new" },
  { value: "drafts", label: "Drafts", route: "/teacher/create-content/drafts" },
  { value: "published", label: "Published", route: "/teacher/create-content/published" },
  { value: "send-to-vector-db", label: "Send to Vector DB", route: "/teacher/create-content/send-to-vector-db" },
];

export default function CreateContentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab =
    tabRoutes.find(tab => pathname.endsWith(tab.value))?.value || "create-new";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Content</h1>
        <p className="text-muted-foreground">Create and manage educational content for your courses</p>
      </div>
      <Tabs value={activeTab} onValueChange={val => {
        const tab = tabRoutes.find(t => t.value === val);
        if (tab) router.push(tab.route);
      }}>
        <TabsList>
          {tabRoutes.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div>{children}</div>
    </div>
  );
}