import BlogCards from "@/components/blog/BlogCards";
import Hero from "@/components/blog/Hero";
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
