import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";
import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedTeamData } from "@library/team";
import { circleText } from "@common/utilits";
//import HeroSection from "@components/sections/Hero";
// import ServicesSection from "@components/sections/Services";
import AboutSection from "@components/sections/About";
import ShowcaseSection from "@components/sections/Showcase";
import TeamSection from "@components/sections/Team";
import FocusText from "../components/sections/FocusText";
import FocusWindow from "../components/sections/FocusWindow";
// import VideoSection from "@components/sections/Video";
import CountersSection from "@components/sections/Counters";
import RoundTeam from "../components/sections/RoundTeam";
// import CallToActionSection from "@components/sections/CallToAction";
// import LatestPostsSection from "@components/sections/LatestPosts";
// import PartnersSection from "@components/sections/Partners";
import Slidertest from "../components/sections/Slidertest";
import Companies from "../components/sections/Companies";
import WorkSlider from "../components/sections/WorkSlider";
import TeamSlider from "../components/sections/TeamSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";


const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const TickerSlider = dynamic( () => import("@components/sliders/Ticker"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <Head>
          <meta property="og:title" content="Top video content creation & production services in delhi ncr - content foundry" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.contentfoundry.in/" />
          <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
          <link rel="canonical" href="https://www.contentfoundry.in/" />
          <meta name="description" content="Upscale your business with premium video content creation and production services
          at Content Foundry. Our experts deliver high-quality, engaging videos to enhance your brand&#39;s presence." />
        </Head>
        <HeroSection />
        <AboutSection/>
        <FocusText/>
        <FocusWindow/>
        <Slidertest/>
        {/* <TickerSlider /> */}
        <ShowcaseSection projects={props.projects} />
        {/* <ServicesSection /> */}
        {/* <TeamSection team={props.team} /> */}
        {/* <RoundTeam/> */}
        <TeamSlider/>
        <WorkSlider/>
        <TestimonialSlider id='clients'/>
        {/* <VideoSection /> */}
        {/* <CountersSection /> */}
        {/* <Companies/> */}
        {/* <CallToActionSection /> */}
        {/* <LatestPostsSection posts={props.posts} /> */}
        {/* <PartnersSection /> */}
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam
    }
  }
}