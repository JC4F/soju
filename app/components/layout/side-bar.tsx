import { Film, Home, Menu, Telescope, TrendingUp } from "lucide-react";
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Spinner,
} from "~/components/ui";
import Logo from "~/assets/images/logo_loading.png";
import { Link, NavLink } from "@remix-run/react";

type SubLink = {
  // icon: React.ReactNode;
  to: string;
  title: string;
  description: string;
};

type SideBarItemBanner = {
  title: string;
  titleTo: string;
  imgSrc: string;
  imgTo: string;
};

type SideBarItem = {
  icon: React.ReactNode;
  title: string;
  to: string;
  sub?: {
    banner?: SideBarItemBanner;
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
      banner: {
        title: "Discover",
        titleTo: "/discover/movies",
        imgSrc:
          "https://image.tmdb.org/t/p/w342_filter(duotone,190235,ad47dd)/wNB551TsEb7KFU3an5LwOrgvUpn.jpg",
        imgTo: "/movies",
      },
      subLink: [
        {
          title: "Popular",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
        {
          title: "Now Playing",
          description: "Currently showing in theaters",
          to: "/movies/now-playing",
        },
        {
          title: "Upcoming",
          description: "Releases coming soon to theaters",
          to: "/movies/upcoming",
        },
        {
          title: "Top Rated",
          description:
            "Highest rated films, based on viewers ratings and critic reviews",
          to: "/movies/top-rated",
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
                  <ul className="flex w-fit gap-1.5 p-1.5">
                    {sideBar.sub.banner && (
                      <li className="relative flex w-[215px] items-center">
                        <Link
                          className="absolute top-4 z-20 mx-[10px] w-[198px] justify-between text-white after:rounded-sm hover:after:bg-white/10 data-[focus-visible=true]:z-20"
                          to={sideBar.sub.banner.titleTo}
                        >
                          {sideBar.sub.banner.title}
                        </Link>
                        <Link to={sideBar.sub.banner.imgTo}>
                          <img
                            alt="banner"
                            src={sideBar.sub.banner.imgSrc}
                            className="rounded-xl"
                          />
                        </Link>
                        <h4 className="absolute bottom-0 z-10 justify-start backdrop-blur-sm">
                          {sideBar.sub.banner.title}
                        </h4>
                      </li>
                    )}
                    <li>
                      {sideBar.sub.subLink.map((sublink) => (
                        <NavigationMenuLink key={sublink.to} asChild>
                          <NavLink
                            to={sublink.to}
                            className="flex h-auto w-[215px] flex-col justify-start rounded-md p-2 hover:bg-secondary/[0.6] focus:bg-secondary/[0.6]"
                          >
                            {({ isActive, isPending }) => (
                              <>
                                <div className="mb-2 flex w-full flex-row items-center justify-start">
                                  <Telescope className="mr-2 size-5" />
                                  {sublink.title}
                                  {isPending && <Spinner size="sm" />}
                                </div>
                                <p className="w-full text-xs text-foreground">
                                  {sublink.description}
                                </p>
                              </>
                            )}
                          </NavLink>
                        </NavigationMenuLink>
                      ))}
                    </li>
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
