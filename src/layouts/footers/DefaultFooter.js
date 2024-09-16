import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";
import ContentFoundrylogo from '../../../public/images/footer/cflogo.png'

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--dark pt-3">
            <div className="footer--default">
                    <div className="row connectback">
                        <div className="footer-container">
                            <div className="connect m-auto">
                                <p>Discuss over a coffee?</p>
                                 <h2>Let's Connect</h2>
                                 <div className="row locate-details align-center">
                                    <div className="col-lg-4 col-md-4 col-sm-10">
                                        <h5 className="text-white"> info@contentfoundry.in </h5>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-10">
                                        <h5 className="text-white border-text"> Get a Quote</h5>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-10">
                                        <h5 className="text-white">+91 98113 46401</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                <div className="footer-container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-10">
                            <div className="onovo-text onovo-text-white">
                                {/* <h5>Information</h5> */}
                                <img className="footer-logo" src={ContentFoundrylogo.src}/>
                            </div>

                        </div>
                        {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1">

                            <div className="onovo-text onovo-text-white">
                                <h5>Get in Touch</h5>
                                <p style={{"opacity": "0.6"}}>FBD One Corporate Park, 10th Floor, NH 44, <br />Faridabad, Haryana 121003</p>
                                <p style={{"opacity": "0.6"}}>
                                    <a href="tel:+10204302973" className="onovo-lnk lnk--white" target="_blank">+91 98113 46401</a><br />
                                    <a href="mailto:info@contentfoundry.in" className="onovo-lnk lnk--white" target="_blank">info@contentfoundry.in</a>
                                </p>
                            </div>
                        </div> */}

                        <div className="col-xs-6 col-sm-6 col-md-12 col-lg-2 pl-4">
                            <div className="row">
                                <div className="onovo-text onovo-text-white policies">
                                    {/* <h5>Get in Touch</h5> */}
                                    <p style={{"opacity": "0.6"}}>Privacy Policy</p>
                                    <p style={{"opacity": "0.6"}}>
                                        <a href="tel:+10204302973" className="onovo-lnk lnk--white" target="_blank">Terms Of Use</a><br />
                                    </p>
                                    <p style={{"opacity": "0.6"}}>
                                        <a href="mailto:info@contentfoundry.in" className="onovo-lnk lnk--white" target="_blank">Legal</a>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="separator-cf"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

                            {/* Copyright */}
                            <div className="copyright onovo-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

                            {/* Social */}
                            <div className="onovo-social-1 onovo-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
