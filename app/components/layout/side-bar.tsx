import { Film, Home, Loader, Menu, Telescope, TrendingUp } from "lucide-react";
import {
  Button,
  CustomNavigationMenuLink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Spinner,
} from "~/components/ui";
import Logo from "~/assets/images/logo_loading.png";
import { NavLink } from "@remix-run/react";

type SubLink = {
  // icon: React.ReactNode;
  to: string;
  title: string;
  description: string;
};

type SideBarItem = {
  icon: React.ReactNode;
  title: string;
  to: string;
  sub?: {
    title: string;
    titleTo: string;
    imgSrc: string;
    imgTo: string;
    subLink: SubLink[];
  };
};

const sideBarLink: SideBarItem[] = [
  {
    icon: <Home />,
    title: "Home",
    to: "/",
  },
  {
    icon: <TrendingUp />,
    title: "Trending",
    to: "/trending",
  },
  {
    icon: <Telescope />,
    title: "Discover",
    to: "/discover",
  },
  {
    icon: <Film />,
    title: "Movies",
    to: "/movies",
    sub: {
      title: "Discover",
      titleTo: "/discover/movies",
      imgSrc:
        "https://image.tmdb.org/t/p/w342_filter(duotone,190235,ad47dd)/wNB551TsEb7KFU3an5LwOrgvUpn.jpg",
      imgTo: "/movies",
      subLink: [
        {
          title: "Popular",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
        {
          title: "Now Playing",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
        {
          title: "Upcoming",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
        {
          title: "Top Rated",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
      ],
    },
  },
];

export const SideBar = () => {
  return (
    <aside className="h-screen w-[250px] px-3 transition-[max-width] duration-500">
      <div className="flex h-16 w-full items-center justify-center gap-4">
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

      <NavigationMenu className="justify-start">
        <NavigationMenuList className="flex-col items-start space-x-0">
          {sideBarLink.map((sideBar) => {
            if (!sideBar.sub)
              return (
                <NavigationMenuItem key={sideBar.to}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={sideBar.to}
                      className="flex h-[56px] w-[226px] items-center justify-start gap-4 rounded-md px-4 py-2 font-medium transition-[width] duration-200 hover:bg-secondary"
                    >
                      {({ isActive, isPending }) => (
                        <>
                          {sideBar.icon}
                          {sideBar.title}
                          {isPending && <Spinner size="sm" />}
                        </>
                      )}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );

            return (
              <NavigationMenuItem key={sideBar.to}>
                <NavigationMenuTrigger className="flex h-[56px] w-[226px] items-center justify-start gap-4 rounded-md px-4 py-2 text-base transition-[width] duration-200 hover:bg-secondary">
                  {sideBar.icon}
                  {sideBar.title}
                </NavigationMenuTrigger>
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
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <CustomNavigationMenuLink href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </CustomNavigationMenuLink>
                    <CustomNavigationMenuLink
                      href="/docs/installation"
                      title="Installation"
                    >
                      How to install dependencies and structure your app.
                    </CustomNavigationMenuLink>
                    <CustomNavigationMenuLink
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </CustomNavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};
