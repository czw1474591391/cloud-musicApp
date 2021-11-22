import { CompCaeousel } from "./Carousel";
import { TopNav } from "./topNav";
import { Navigation_menu } from "./Navigation_menu";
import { PlayList } from "./playlist";
const Home = () => {
  return (
    <>
      <TopNav></TopNav>
      <CompCaeousel></CompCaeousel>
      <Navigation_menu></Navigation_menu>
      <PlayList></PlayList>
    </>
  );
};
export { Home };
