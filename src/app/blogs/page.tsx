import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React, { Suspense } from "react";
import Hero from "@/components/blog/Hero";
import LatestArtical from "@/components/common/LatestArtical";
import BlogCards from "@/components/blog/BlogCards";

const page = () => {
  return (
    <>
      <Suspense>
        <Hero />
        <BlogCards />
        <LatestArtical />
        <Footer />
      </Suspense>
    </>
  );
};

export default page;
