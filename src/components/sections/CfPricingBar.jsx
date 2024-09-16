import Data from "@data/sections/pricing.json";
import Data2 from "@data/sections/animation.json";
import Link from "next/link";
import Tick from '../../../public/images/packtick.png'

const CFPricingBar = ( { bg, hiddenHeading } ) => {
    return (
      <>
        {/* Onovo Pricing */}
        <section className={`onovo-section pricing_blocks onovo-section-${bg} gap-bottom-140`}>
          <div className="container">
            {hiddenHeading == undefined &&
            <>
              {/* Heading */}
              <div className="onovo-heading gap-bottom-40">
                <div className="onovo-subtitle-1">
                  <span>{Data.subtitle}</span>
                </div>
                <h2 className="onovo-title-2">
                  <span dangerouslySetInnerHTML={{__html: Data.title}} />
                </h2>
              </div>
            </>
            }

            {/* Pricing items */}
            <div className="onovo-heading gap-bottom-80 ">
                {/* <div className="onovo-subtitle-1 text-center">
                  <span className="text-center">{Data.subtitle}</span>
                </div> */}
                <h2 className="onovo-title-2">
                  <h3 className="text-center">Live Action</h3>
                </h2>
                <p className="text-center text-capitalize w-70 m-auto">Bring your vision to life with tailored live-action content packages designed for any project size.</p>
              </div>
            <div className="row gap-row">

              {Data.items.map((item, key) => (
              <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="onovo-pricing">
                  <div className={item.active == 1 ? "onovo-pricing-item active--default": "onovo-pricing-item"}>
                    { item.active == 1 &&
                    <div className="pricing--badge onovo-text-white">
                      <span>Recommended</span>
                    </div>
                    }
                    <div className="title">
                      <div className="name">
                        <span>{item.title}</span>
                      </div>
                      <div className="subname">
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="pricing--overlay onovo-hover-3 onovo-hover-black" />
                      <div className="image onovo-text-white">
                        <i aria-hidden="true" className={item.icon}></i>
                      </div>
                      <div className="list">
                        <div>
                          <ul>
                            {item.list.map((element, element_key) => (
                            <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                              <i className="far fa-check-square" />{element.label}
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link className="onovo-btn onovo-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                        <span>{item.button.label}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>

            <div className="onovo-heading gap-bottom-60 gap-top-100">
                {/* <div className="onovo-subtitle-1 text-center">
                  <span className="text-center">{Data.subtitle}</span>
                </div> */}
                <h2 className="onovo-title-2">
                  <h3 className="text-center">Animation</h3>
                </h2>
                <p className="text-center text-capitalize w-70 m-auto">Transform ideas into engaging animations with custom packages for all your creative projects.</p>

              </div>

            {/*Animation pAcks*/}
            <div className="row gap-row">
            {Data2.items.map((item, key) => (
            <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="onovo-pricing">
                <div className={item.active == 1 ? "onovo-pricing-item active--default": "onovo-pricing-item"}>
                  { item.active == 1 &&
                  <div className="pricing--badge onovo-text-white">
                    <span>Recommended</span>
                  </div>
                  }
                  <div className="title">
                    <div className="name">
                      <span>{item.title}</span>
                    </div>
                    <div className="subname">
                      <span>{item.subtitle}</span>
                    </div>
                    <div className="price">
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <div className="desc">
                    <div className="pricing--overlay onovo-hover-3 onovo-hover-black" />
                    <div className="image onovo-text-white">
                      <i aria-hidden="true" className={item.icon}></i>
                    </div>
                    <div className="list">
                      <div>
                        <ul>
                          {item.list.map((element, element_key) => (
                          <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                            <i className="far fa-check-square" />{element.label}
                          </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link className="onovo-btn onovo-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                      <span>{item.button.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        </section>

        <section className="onovo-section pricing_extended gap-bottom-140 gap-top-10">
            <div className="container-fluid">
              <div className="row column-gap-3 pricingtabs justify-content-center">
                  <div className="col-lg-2 col-md-2 col-sm-10">
                        <h2 className="styletext liveaction">Live Action</h2>
                        <p>Bring your vision to life with tailored live-action content packages designed for any project size.</p>
                        <div className="feature_block">
                            <p className="feature_name">Equipments</p>
                            <p className="feature_item">Camera</p>
                            <p className="feature_item">Lights</p>
                            <p className="feature_item">Mic</p>
                            <p className="feature_item">Stands</p>
                        </div>

                        <div className="feature_block">
                            <p className="feature_name">Pre Production</p>
                            <p className="feature_item">Idea</p>
                            <p className="feature_item">Visualisation</p>
                            <p className="feature_item">Referencing</p>
                            <p className="feature_item">Script/Screenplay</p>
                            <p className="feature_item">Storyboard/Moodbaord</p>
                        </div>

                        <div className="feature_block">
                            <p className="feature_name">Production</p>
                            <p className="feature_item">Planning</p>
                            <p className="feature_item">Shoot/Production</p>
                        </div>

                        <div className="feature_block">
                            <p className="feature_name">Post Production</p> 
                            <p className="feature_item">Editing</p>
                            <p className="feature_item">VFX</p>
                            <p className="feature_item">Colour Grading</p>
                            <p className="feature_item">Sound/VFX</p>
                            <p className="feature_item">Music</p>
                            <p className="feature_item">Rendering</p>
                            <p className="feature_item">Down Edits</p>
                            <p className="feature_item">Ratios</p>
                        </div>
                  </div>
                  <div className="col-lg-2 col-sm-10">
                        <h4>Standard</h4>
                        {/* <p><span className="cost">₹1,50,000</span> / mon</p> */}
                        <p><span className="cost">₹1,50,000</span> / mon</p>
                        <p id="duration">1 month / 10 minutes of content 2 Days / Full Shift</p>
                        <a className="CTA_buttons_m" href="#">Purchase</a>

                        <div className="packspacer"></div>

                        <div className="feature_block2">
                              <p className="feature_item2">1</p>
                              <p className="feature_item2">2</p>
                              <p className="feature_item2">1</p>
                              <p className="feature_item2">✔</p>
                              {/* <p className="feature_item2"><img src={Tick.src} alt="" srcset="" /></p> */}
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                        </div>
                      
                  </div>
                  <div className="col-lg-2 col-sm-10">
                        <h4>Pro</h4>
                        <p><span className="cost">₹1,50,000</span> / mon</p>
                        <p id="duration">1 month / 10 minutes of content 2 Days / Full Shift</p>
                        <a className="CTA_buttons_m" href="#">Purchase</a>

                        <div className="packspacer"></div>
                        
                        <div className="feature_block2">
                              <p className="feature_item2">2</p>
                              <p className="feature_item2">4</p>
                              <p className="feature_item2">2</p>
                              <p className="feature_item2">✔</p>
                              {/* <p className="feature_item2"><img src={Tick.src} alt="" srcset="" /></p> */}
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">-</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">-</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                  </div>
                  <div className="col-lg-2 col-sm-10">
                        <h4>Advance</h4>
                        <p><span className="cost">₹1,50,000</span> / mon</p>
                        <p id="duration">1 month / 10 minutes of content 2 Days / Full Shift</p>
                        <a className="CTA_buttons_m" href="#">Purchase</a>

                        <div className="packspacer"></div>
                        
                        <div className="feature_block2">
                              <p className="feature_item2">3</p>
                              <p className="feature_item2">6</p>
                              <p className="feature_item2">3</p>
                              <p className="feature_item2">✔</p>
                              {/* <p className="feature_item2"><img src={Tick.src} alt="" srcset="" /></p> */}
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                        <div className="feature_block2">
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                              <p className="feature_item2">✔</p>
                        </div>
                  </div>
              </div>
            </div>
        </section>
    </>
    );
};

export default CFPricingBar;