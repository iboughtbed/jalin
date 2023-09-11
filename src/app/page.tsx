import SiteHeader from "~/components/layouts/site-header";
import ParallaxContainer from "~/components/parallax-container";
import Slogan from "~/components/slogan";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Slogan />
      <ParallaxContainer />
    </>
  );
}
