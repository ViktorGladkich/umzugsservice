import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umzugsservice Dresden - Premium Umzüge",
  description:
    "Ihr Premium Umzugsunternehmen in Dresden & Europaweit. Sicher verpackt, entspannt bewegt.",
};

import { ViewportFix } from "@/components/ViewportFix";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>
        <ViewportFix />
        {children}
      </body>
    </html>
  );
}
