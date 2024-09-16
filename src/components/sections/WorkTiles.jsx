import { useState } from "react";
import ThreeD from "./svgs/3d.png";
import Corporate from "./svgs/Corporatefilms.png";
import Education from "./svgs/Educational.png";
import Frame from "./svgs/updated/TECNO sparkgo.png";
import Carshoot from "./svgs/updated/Hidden Gems _ Incredible India - DVC.png";
import Audio from "./svgs/updated/tecno hi-pods.png";
import Techno from "./svgs/technologo.png";
import SocialMedia from "./svgs/social_media.png";
import Digital from "./svgs/digital.png";
import ModalWorkTiles from "./ModalWorkTiles";
import Cryptoc from './svgs/updated/Crypto Clear - Explainer Video.png'
import Surya from './svgs/updated/Surya Roshni _ Downlighter - DVC.png'
import Immunity from './svgs/updated/Immunity Ka Nuskha _ Ministry of Ayush- DVC.png'
import JCBdvc from './svgs/updated/JCB - DVC.png'
import JCB from './svgs/updated/JCB.png'

const WorkTiles = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const Toggle = () => setModal(!modal);
  const handleClick = (data) => {
    setSrc(data);
    setModal(true);
  };

  const Card = [
    {
      src: Cryptoc.src,
      alt: "Crypto Clear - AV Explainer",
      Tooltip: "https://www.youtube.com/embed/A4uxqoMIumM?autoplay=1&loop=1&mute=1&si=095JKgHwsmXHYG0C",
    },
    {
      src: Corporate.src,
      alt: "Gem and Jewellery Export Council (India) TVC",
      Tooltip: "https://www.youtube.com/embed/5OxSXKWXgUs?autoplay=1&loop=1&mute=1&si=TRUkb9OOo-fvqCBu",
    },
    {
      src: JCBdvc.src,
      alt: "JCB - DVC",
      Tooltip: "https://www.youtube.com/embed/GdWwUzoLXpI?autoplay=1&loop=1&mute=1&si=ScXOjoRMZ7HVLST1",
    },
    {
      src: Education.src,
      alt: "World One Stationery | Levera Arch File",
      Tooltip: "https://www.youtube.com/embed/uqQ7uaAs_Vc?autoplay=1&loop=1&mute=1&si=ppsjFYqi38Kn7z7i",
    },
    {
      src: Frame.src,
      alt: "Techno SparkGo - 3D Animation Film",
      Tooltip: "https://www.youtube.com/embed/sV61LynzMWE?autoplay=1&loop=1&mute=1&si=RspBQNWKvfTSzXBj",
    },
    {
      src: Immunity.src,
      alt: "Immunity Ka Nuskha | Ministry of Ayush- DVC",
      Tooltip: "https://www.youtube.com/embed/Xhdi0p39SjU?autoplay=1&loop=1&mute=1&si=345gThrFMH0KWS9t",
    },
    {
      src: Carshoot.src,
      alt: "Hidden Gems | Incredible India - DVC",
      Tooltip: "https://www.youtube.com/embed/SgrM6Sp0iQU?autoplay=1&loop=1&mute=1&si=3hgoWLRYRlZTONHb",
    },
    {
      src: Surya.src,
      alt: "Surya Roshni | Downlighter - DVC",
      Tooltip: "https://www.youtube.com/embed/iNrKaFjHn-4?autoplay=1&loop=1&mute=1&si=lEPajFiCeVs77lxB",
    },
    {
      src: Audio.src,
      alt: "Tecno Hipods H2 - 3D Animation Film",
      Tooltip: "https://www.youtube.com/embed/q_uLkYrwqW4?autoplay=1&loop=1&mute=1&si=-9vo630vqnh9iLbX",
    },
    {
      src: SocialMedia.src,
      alt: "Uno Minda Multimedia system",
      Tooltip: "https://www.youtube.com/embed/9ejZpXeAOJ4?autoplay=1&loop=1&mute=1&si=VQo2HggDpWqppY9d",
    },
    {
      src: JCB.src,
      alt: "JCB App Launch - Digiserve",
      Tooltip: "https://www.youtube.com/embed/-1T_XiGyEsw?autoplay=1&loop=1&mute=1&si=W5d6mclNqedZrehY",
    },
    {
      src: Digital.src,
      alt: "Uno Minda Multimedia System- DVC",
      Tooltip: "https://www.youtube.com/embed/A4uxqoMIumM?autoplay=1&loop=1&mute=1&si=P2DJiIHyXcv6p5v9",
    },
  ];
  return (
    <>
     
      <section className='onovo-section'>
        <div className='container-fluid'>
           <div className="onovo-heading gap-bottom-40 text-capitalize">
						<h2 className="onovo-title-2">
							<span>We Bring The Boldest To Life</span>
						</h2>
					</div>
          <div className='row d-flex'>
            {Card.map((e) => {
              return (
                <div className='col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0 ' key={e}>
                  <div className='container-custome'>
                    <img
                      src={e.src}
                      alt=''
                      onClick={() => {
                        handleClick(e.Tooltip);
                      }}
                      className='image-custome'
                    />
                    <div
                      className='overlay'
                      onClick={() => {
                        handleClick(e.Tooltip);
                      }}
                    >
                      <div className='text-custome'>{e.alt}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ModalWorkTiles show={modal} close={Toggle} Src={src} />
      </section>
    </>
  );
};

export default WorkTiles;
