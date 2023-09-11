import "~/styles/globals.css";

import type { Metadata } from "next";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { siteConfig } from "~/config/site";
import { montserrat } from "~/lib/fonts";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Jalin", "NIS", "NIS Uralsk", "Жалын", "НИШ", "НИШ Уральск"],
  authors: [
    {
      name: "iboughtbed",
      url: "https://github.com/iboughtbed",
    },
  ],
  creator: "iboughtbed",
  icons: {
    icon: "/logo.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-[15px] antialiased",
          montserrat.variable
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
