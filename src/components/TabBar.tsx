// export interface ITabBarProps {}
import { Menu } from "lucide-react";
import { Search } from "lucide-react";

export default function TabBar() {
  return (
    <div className=" flex justify-between absolute w-full h-[100px] bottom-0 left-0 items-center">
      <img
        className="rounded-3xl z-3 absolute"
        src="/src/assets/images/TabBar.png"
        alt=""
      />
      <Search color="white" size={48} className="z-4" />
      <Menu color="white" size={48} className="z-4" />
    </div>
  );
}
