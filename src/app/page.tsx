import SiteHeader from "~/components/layouts/site-header";
import ParallaxContainer from "~/components/parallax-container";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="h-28 w-full"></div>
      <ParallaxContainer />
    </>
  );
}
