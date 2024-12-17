import { auth } from "@clerk/nextjs/server";
import RoomProvider from "@/components/RoomProvider";

import React from "react";

export default function DocLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  auth.protect();

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
