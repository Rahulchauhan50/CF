import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";
import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";
import Head from "next/head";
// import CountUp from 'react-countup';
import { circleText } from "@common/utilits";
// import { Helmet } from "react-helmet";
import PageBanner from "@components/PageBanner";
// import Team2Section from "@components/sections/Team2"
// import PartnersSection from "@components/sections/Partners"
// import AwardsSection from "@components/sections/Awards"
// import Services4Section from "@components/sections/Services4"
// import Companies from "../components/sections/Companies";

import WorkTiles from "../components/sections/WorkTiles";
const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const Ourwork = (props) => {
  useEffect(() => {
    circleText();
	document.title = 'Our Work | Leading Video Production Company in Delhi NCR';
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
	<div>
		<Head>
			<title>Our Work | Leading Video Production Company in Delhi NCR</title>
			<meta property="og:title" content="our work | leading video production company in delhi ncr" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.contentfoundry.in/ourwork" />
			<meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
			<link rel="canonical" href="https://www.contentfoundry.in/ourwork" />
			<meta name="description" content="Explore our portfolio showcasing creative excellence in video production, digital storytelling, 
			and corporate branding in Delhi NCR. At Content Foundry, we elevate brands with visually compelling content." />
		</Head>
    <Layouts>
    	{/* <PageBanner pageTitle={"We bring your boldest ideas to life"} pageDesc={""} /> */}
    	<PageBanner pageTitle={""} pageDesc={""} />
      	{/* Onovo About */}
	  	{/* <section className="onovo-section gap-top-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Welcome to Content Foundry </span>
							</div>
							<h2 className="onovo-title-2">
								<span> We are a digital agency, <br/>passionate about building <br/>and designing brands </span>
							</h2>
							<div className="onovo-text">
								<p>From the moment our company was founded, we have helped our clients find <strong>exceptional solutions for their businesses</strong>, creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience. </p>
							</div>
						</div>
					</div>

					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">
						<img src="/images/onovo-about-logo.png" alt="" />
					</div>
				</div>

			</div>
		</section> */}
		
		<WorkTiles/>
		{/* <Services4Section services={props.services} /> */}

		{/* <AwardsSection /> */}

      	{/* <HistorySlider /> */}

      	{/* <Team2Section team={props.team} /> */}

      	{/* <Testimonial2Slider /> */}

      	{/* <PartnersSection /> */}
      
    </Layouts>
	</div>
  );
};
export default Ourwork;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();
  console.log(allTeam,allServices,"allTeam,allServices")

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}