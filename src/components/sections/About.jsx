import Data from "@data/sections/about.json";
import Link from "next/link";
import Side_about from '../../../public/images/team/004_pop.png'
import Likes from '../../../public/images/likes.png'
import Engage from '../../../public/images/engage.png'
import Interact from '../../../public/images/interact.png'

const AboutSection = () => {
  return (
    <>
      {/* Onovo About */}
      {/* <section className="onovo-section about-cf gap-top-140 gap-bottom-140" id='aboutcf'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-12">

                 
                  <div className="onovo-heading white-head gap-bottom-40">
                    <div className="onovo-subtitle-1">
                      <span>{Data.subtitle}</span>
                    </div>
                    <h2 className="onovo-title-2 white-head">
                      <span dangerouslySetInnerHTML={{ __html: Data.title }} />
                    </h2>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60">

                  
                  <div className="onovo-number onovo-circle-text mrg-left white-head">
                    <div className="num onovo-text-white">
                      <span>{Data.number.value}</span>
                    </div>
                    <div className="label onovo-text-black onovo-circle-text-label">
                      {Data.number.label}
                    </div>
                  </div>

                </div>
              </div>

              
              <div className="row">
                {Data.items.map((item, key) => (
                  <div key={`about-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                    <h5 className="text-uppercase white-head">{item.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    {item.button != undefined &&
                    <Link className="onovo-btn onovo-hover-btn" href={item.button.link}>
                      <i className="arrow"><span /></i>
                      <span>{item.button.label}</span>
                    </Link>
                    }
                  </div>
                ))}
              </div>

            </div>


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile">
              <img src={Side_about.src} alt="" />
              <div className="onovo-number onovo-circle-text mrg-right">
                  <div className="num onovo-text-white">
                    <span>{Data.number.value}</span>
                  </div>
                  <div className="label onovo-text-black onovo-circle-text-label white-head">
                    {Data.number.label}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="onovo-section about-cf gap-top-70" id='aboutcf'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="text-capitalize">
                <div className="onovo-subtitle-1 styletext">
                  <h1 className="Abouth1">{Data.subtitle}</h1>
                </div>
                <h2 className="onovo-title-2 white-head">
                  <span dangerouslySetInnerHTML={{ __html: Data.title }} />
                </h2>
              </div>

              <div className="row">
                {Data.items.map((item, key) => (
                  <div key={`about-item-${key}`} className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
                    <h5 className="text-uppercase white-head">{item.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
              <a className="CTA_buttons" href="#">Let's Connect</a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 side_about_img">
              {/* <img src={Side_about.src} className='w-100' alt="" /> */}
              <div className="about-stats">
                <div className="statsbox">
                    <img src={Likes.src} alt="" />
                    <div>
                      <h2 className="text-white">54%</h2>
                      <p>User Satisfaction</p>
                    </div>
                </div>
                <div className="statsbox">
                    <img src={Interact.src} alt="" />
                    <div className="">
                      <h2 className="text-white">88%</h2>
                      <p>User Interaction</p>
                    </div>
                </div>
                <div className="statsbox">
                    <img src={Engage.src} alt="" />
                    <div>
                      <h2 className="text-white">64%</h2>
                      <p>User Engagement</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;