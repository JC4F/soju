import {
  ArrowUpRight,
  Film,
  History,
  Home,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Telescope,
  TrendingUp,
  Tv,
  TvMinimal,
  User,
} from "lucide-react";
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
import { cn } from "~/lib/utils";

type SubLink = {
  icon: React.ReactNode;
  to: string;
  title: string;
  description?: string;
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
    icon: <Search />,
    title: "Search",
    to: "/search",
    sub: {
      subLink: [
        {
          icon: <Search className="mr-2 size-5" />,
          title: "Search Movies",
          to: "/movies/movies",
        },
        {
          icon: <Search className="mr-2 size-5" />,
          title: "Search TV Shows",
          to: "/movies/shows",
        },
        {
          icon: <Search className="mr-2 size-5" />,
          title: "Anime",
          to: "/movies/anime",
        },
        {
          icon: <Search className="mr-2 size-5" />,
          title: "People",
          to: "/movies/people",
        },
      ],
    },
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
          icon: <Telescope className="mr-2 size-5" />,
          title: "Popular",
          description: "Widely watched and buzzed-about films",
          to: "/movies/popular",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Now Playing",
          description: "Currently showing in theaters",
          to: "/movies/now-playing",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Upcoming",
          description: "Releases coming soon to theaters",
          to: "/movies/upcoming",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Top Rated",
          description:
            "Highest rated films, based on viewers ratings and critic reviews",
          to: "/movies/top-rated",
        },
      ],
    },
  },
  {
    icon: <TvMinimal />,
    title: "TV Shows",
    to: "/shows",
    sub: {
      banner: {
        title: "Discover",
        titleTo: "/discover/shows",
        imgSrc:
          "https://image.tmdb.org/t/p/w342_filter(duotone,352302,ddd147)/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        imgTo: "/shows",
      },
      subLink: [
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Popular",
          description: "Widely watched and buzzed-about shows",
          to: "/shows/popular",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Airing Today",
          description: "Currently playing on TV networks or streaming services",
          to: "/shows/now-playing",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "On TV",
          description: "Currently available to watch",
          to: "/shows/upcoming",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Top Rated",
          description:
            "Highest rated TV shows, based on viewers ratings and critic reviews",
          to: "/shows/top-rated",
        },
      ],
    },
  },
  {
    icon: <Tv />,
    title: "Anime",
    to: "/anime",
    sub: {
      banner: {
        title: "Discover",
        titleTo: "/discover/anime",
        imgSrc:
          "https://image.tmdb.org/t/p/w342_filter(duotone,070235,dd4749)/iAld03IP69UEpqQbVWoRBvjqkqX.jpg",
        imgTo: "/anime",
      },
      subLink: [
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Popular",
          description: "Widely watched and buzzed-about anime",
          to: "/anime/popular",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Trending",
          description:
            "Currently gaining popularity et attention among viewers",
          to: "/anime/trending",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Recent Episodes",
          description: "Latest episodes of ongoing anime series",
          to: "/anime/recent-episodes",
        },
        {
          icon: <Telescope className="mr-2 size-5" />,
          title: "Random Anime",
          description: "Randomly selected anime without any filters",
          to: "/anime/random-anime",
        },
      ],
    },
  },
  {
    icon: <User />,
    title: "People",
    to: "/people",
  },
  {
    icon: <LayoutDashboard />,
    title: "Featured Lists",
    to: "/featured-lists",
  },
  {
    icon: <History />,
    title: "History",
    to: "/history",
  },
  {
    icon: <Settings />,
    title: "Settings",
    to: "/settings",
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
                    <div>
                      <NavLink
                        to={sideBar.to}
                        className={({ isActive }) =>
                          cn(
                            "flex h-[56px] w-[226px] items-center justify-start gap-4 rounded-md px-4 py-2 font-medium transition-[width] duration-200 hover:bg-secondary",
                            isActive && "bg-secondary"
                          )
                        }
                      >
                        {({ isPending }) => (
                          <>
                            {sideBar.icon}
                            {sideBar.title}
                            {isPending && <Spinner size="sm" />}
                          </>
                        )}
                      </NavLink>
                    </div>
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
                      <li className="relative flex w-[215px] items-center justify-center">
                        <Link
                          className="absolute inset-x-0 top-2 z-20 mx-[10px] flex justify-between px-2 py-1 text-foreground"
                          to={sideBar.sub.banner.titleTo}
                        >
                          <span>{sideBar.sub.banner.title}</span>
                          <ArrowUpRight />
                        </Link>
                        <Link to={sideBar.sub.banner.imgTo}>
                          <img
                            alt="banner"
                            src={sideBar.sub.banner.imgSrc}
                            className="rounded-xl"
                          />
                        </Link>
                        <h4 className="absolute inset-x-0 bottom-0 z-10 cursor-pointer justify-start p-3 text-center text-2xl font-semibold backdrop-blur-sm">
                          {sideBar.sub.banner.title}
                        </h4>
                      </li>
                    )}
                    <li className="flex flex-col justify-center">
                      {sideBar.sub.subLink.map((sublink) => (
                        <NavigationMenuLink key={sublink.to} asChild>
                          <div>
                            <NavLink
                              to={sublink.to}
                              className={({ isActive }) =>
                                cn(
                                  "flex h-auto w-[215px] flex-col justify-start rounded-md p-2 hover:bg-secondary/[0.6] focus:bg-secondary/[0.6]",
                                  isActive && "bg-secondary"
                                )
                              }
                            >
                              {({ isPending }) => (
                                <>
                                  <div className="mb-2 flex w-full flex-row items-center justify-start">
                                    {sublink.icon}
                                    {sublink.title}
                                    {isPending && <Spinner size="sm" />}
                                  </div>
                                  <p className="w-full text-xs text-foreground">
                                    {sublink.description}
                                  </p>
                                </>
                              )}
                            </NavLink>
                          </div>
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
