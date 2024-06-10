import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import React from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
