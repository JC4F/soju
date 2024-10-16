import { useOutlet } from "@remix-run/react";
import { Header } from "~/components/layout/header";
import { SideBar } from "~/components/layout/side-bar";
import { Provider } from "~/components/provider";

export const LayoutWrapper = () => {
  const outlet = useOutlet();

  return (
    <Provider>
      <main className="flex h-screen w-screen">
        <SideBar />
        <div className="flex-1 bg-background shadow-md">
          <Header />
          {outlet}
        </div>
      </main>
    </Provider>
  );
};
