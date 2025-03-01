import HomeHeader from "./HomeHeader";
import HomeModal from "./HomeModal";
import House from "./House";
import TabBar from "./TabBar";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

export function MainLayout() {
  return (
    <div className="bg-[url(/src/assets/images/background.png)] font-serif w-sm h-3/5 m-auto flex flex-col justify-end relative rounded-3xl">
      <ThemeToggleSwitch />
      <HomeHeader
        city={"Montreal"}
        currentDegree={"19"}
        description={"Mostly Clear"}
        high={"24"}
        low={"18"}
      />
      <House></House>
      <HomeModal />
      <TabBar></TabBar>
    </div>
  );
}
