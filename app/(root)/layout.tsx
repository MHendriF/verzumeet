import React from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <main>{children}</main>;
}
