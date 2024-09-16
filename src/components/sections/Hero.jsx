import { useState, useEffect } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Data from "@data/sections/hero.json";

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'
import Modal from "./Modal";
import subLogo from '../../../public/images/logo-main2.png'

const HeroSection = () => {
	useEffect(() => {
		Splitting({ by: 'lines' });
		ScrollOut({targets: '[data-onovo-scroll]', once: true});
	
		const allWrap = document.querySelectorAll(".word");
		allWrap.forEach((item) => {
		  if ( !item.parentNode.classList.contains('span') ) {
			let wrapper = document.createElement('span');
			wrapper.classList.add('span');
			item.parentNode.insertBefore(wrapper, item);
			wrapper.appendChild(item);
		  }
		});
	
		const allOverlays = document.querySelectorAll("[data-onovo-overlay]");
		allOverlays.forEach((item) => {
		  let overlay = document.createElement("div");
		  overlay.classList.add('onovo-overlay');
		  item.appendChild(overlay);
		});
	}, []);

	const [mute, setMute] = useState(false);

	const clickedMuteHeroVideo = (e) => {
		e.preventDefault();
    	setMute(!mute);
	};
	
	const [modal, setModal] = useState(false);
	const Toggle = () => setModal(!modal);

    return (
        <>
            {/* Onovo Hero */}
			<section className="onovo-section onovo-hero">
				<div className="autotypecf container-fluid">
					<div className="row typing-section text-left">
						<div className="col-lg-10 col-md-10 col-sm-10">
							{/* <h6 style={}>Content Foundry</h6> */}
							<img src={subLogo.src} className="sublogo" alt="" />
							<br />
							<h3 className="text-black">
								<span className="d-flex goodbye"> Say goodbye to 
								<TypeWriterEffect
								startDelay={1000}
								cursorColor="black"
								multiText={[
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
								]}
								multiTextDelay={1000}
								typeSpeed={150}
							/></span>
								</h3>
						</div>	
						{/* <div className="col-lg-4 col-sm-6">
							<TypeWriterEffect
								startDelay={1000}
								cursorColor="black"
								multiText={[
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
								]}
								multiTextDelay={1000}
								typeSpeed={150}
							/>
						</div>	 */}
					</div>
				</div>
				<div className="image">
					<video autoPlay muted={!mute} loop playsInline id="heroVideo">
						<source src={Data.video} type="video/mp4" />
					</video>
					{/* <div className="ovrl" style={{"opacity": "0.25"}} /> */}
				</div>
				<div className="container">
					<h2 className="title onovo-text-white">
						<span data-splitting data-onovo-scroll>
                            <span dangerouslySetInnerHTML={{__html: Data.title.text}}/>
                            <span className="onovo-sep word">
								<i className="sep-img" style={{"backgroundImage": "url("+Data.title.icon+")"}} />
							</span>
						</span>
					</h2>
					<div className="text">
						<div className="subtitle onovo-text-white">
							<div data-splitting data-onovo-scroll>
                                <div dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                            </div>
						</div>
					</div>
					{/* <a href="#" className={mute ? "onovo-play-btn active" : "onovo-play-btn"} onClick={(e) => clickedMuteHeroVideo(e) }> */}
					{/* <a href="#" className="clickme onovo-play-btn" onClick={() => Toggle()}>
						<span className="play-circles" />
						<span className="play-lines">
							<span />
							<span />
							<span />
							<span />
						</span>
					</a> */}
					
					<Modal show={modal} title="My Modal" close={Toggle} >
							This is Modal content
					</Modal>

				</div>
			</section>
        </>
    );
};

export default HeroSection;