import { ControlNavigation } from "~/components/layout/control-navigation";
import { MultiLevelDropdown } from "~/components/layout/multi-level-dropdown";

export const Header = () => {
  return (
    <div className="flex h-[64px] w-full items-center justify-between">
      <ControlNavigation />
      <MultiLevelDropdown />
    </div>
  );
};
