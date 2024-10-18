import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { LayoutWrapper } from "~/components/layout";

import { Home } from "lucide-react";
import { BreadcrumbItem, BreadcrumbLink } from "~/components/ui";
import { Handle } from "~/types/handle";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const handle: Handle = {
  breadcrumb: () => (
    <BreadcrumbItem>
      <BreadcrumbLink href="/">
        <Home className="size-5" />
      </BreadcrumbLink>
    </BreadcrumbItem>
  ),
};

export default function App() {
  return <LayoutWrapper />;
}
