import BlogCards from "@/components/home/BlogCards";
import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";
import TradeMarquee from "@/components/common/TradeMarquee";

export default function Home() {
  return (
    <>
      <TradeMarquee />
      <Hero />
      <BlogCards />
      <Footer />
    </>
  );
}
