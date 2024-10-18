import { UIMatch, useMatches, useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
} from "~/components/ui";
import { Handle } from "~/types/handle";

export const ControlNavigation = () => {
  const navigate = useNavigate();
  const matches = useMatches() as UIMatch<unknown, Handle>[];
  const breadcrumbMatches = matches.filter(
    (match) => match.handle && match.handle.breadcrumb
  );

  const handleNavigationBackForward = (direction: "back" | "forward") => {
    if (direction === "back") {
      navigate(-1);
    } else if (direction === "forward") {
      navigate(1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <Button
        size="icon"
        onClick={() => handleNavigationBackForward("back")}
        className="rounded-full"
      >
        <ChevronLeft />
      </Button>

      <Button
        size="icon"
        onClick={() => handleNavigationBackForward("forward")}
        className="rounded-full"
      >
        <ChevronRight />
      </Button>

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbMatches.map((match, index) => {
            if (index === breadcrumbMatches.length - 1)
              return match.handle?.breadcrumb?.();
            return (
              <>
                {match.handle?.breadcrumb?.()} <BreadcrumbSeparator />
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb></Breadcrumb>
    </div>
  );
};
