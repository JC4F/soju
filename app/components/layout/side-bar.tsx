import { Loader, Menu } from "lucide-react";
import {
  Button,
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui";
import Logo from "~/assets/images/logo_loading.png";
import { NavLink } from "@remix-run/react";

export const SideBar = () => {
  return (
    <aside className="h-screen w-[250px] px-3 transition-[max-width] duration-500">
      <div className="flex h-16 w-full items-center justify-center gap-2">
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>

        <div className="flex items-center gap-x-3">
          <img
            width="30px"
            height="30px"
            alt="Logo"
            src={Logo}
            className="rounded-xl"
          />
          <NavLink
            to="/"
            arial-label="home-page"
            className="bg-gradient-to-tr from-secondary to-primary to-50% bg-clip-text text-3xl font-bold tracking-normal text-transparent focus:outline-none focus:ring-2 md:text-4xl"
          >
            SOJU
          </NavLink>
        </div>
      </div>

      <NavigationMenu className="left-auto right-0">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Loader className="size-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};
