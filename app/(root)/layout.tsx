import { ReactNode } from "react";

import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
  icons : {
    icon : '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
