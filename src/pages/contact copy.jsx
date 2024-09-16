import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import appData from "@data/app.json";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';;

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); // State for showing loader

  useEffect(() => {
    document.title = 'Contact Us - Video Production Company in Delhi NCR | Content Foundry';
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submission starts

    emailjs
      .sendForm('service_hsj3gyh', 'template_zlf6nnl', form.current, {
        publicKey: 'Bh_9DyMEo8DkVXycy',
      })
      .then(
        () => {
          setIsLoading(false); // Hide loader on success
          console.log('SUCCESS!');
        },
        (error) => {
          setIsLoading(false); // Hide loader on failure
          console.log('FAILED...', error);
        }
      );
  };

  const faqData = {
    "title": "Client’s FAQ",
    "subtitle": "Solving Business Problems <br>is An Everyday",
    "items": [
        {
            "title": "Secure Management and Workforce?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Logistics Workforce on Track?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Online Courses & Certification?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Figures and data representative of an organization's?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi."
        }
    ]
  }

  return (
    <div>
      <Head>
        <title>Contact Us - Video Production Company in Delhi NCR | Content Foundry</title>
        <meta property="og:title" content="contact us - video production company | content foundry" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.contentfoundry.in/contact " />
        <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
      </Head>
      <Layouts>
        <PageBanner pageTitle={""} pageDesc={""} />
        {/* Onovo Contact Info */}
        <section className="onovo-section gap-bottom-80">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                {/* Heading */}
                <div className="onovo-text gap-bottom-40">
                  <h4>Planned to Discuss Your Business With Us?</h4>
                  Step In And Share Your Details
                </div>

                {/* Form */}
                <div className="onovo-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>
                          <input
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            required="required"
                          />
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>
                          <input
                            placeholder="Email Address"
                            type="email"
                            name="email"
                            required="required"
                          />
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>
                          <input
                            placeholder="Phone Number"
                            type="tel"
                            name="tel"
                            required="required"
                          />
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>
                          <textarea
                            placeholder="Message"
                            name="message"
                            required="required"
                          />
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>
                          <button
                            type="submit"
                            className="onovo-btn onovo-hover-btn"
                            disabled={isLoading} // Disable the button when loading
                          >
                            {isLoading ? (
                              <img
                                src="/images/loading.gif"
                                alt="loading..."
                                style={{ width: '20px' }} // Loader image
                              />
                            ) : (
                              <span>Send Message</span>
                            )}
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                {/* Contact Info */}
                <div className="onovo-contact-info onovo-text-white">
                  <ul>
                    <li>
                      <h5>Contact Info</h5>
                      <a
                        href="tel:+919811346401"
                        className="onovo-lnk lnk--white"
                        target="_blank"
                      >
                        +91 98113 46401
                      </a>
                      <br />
                      <a
                        href="mailto:info@contentfoundry.in"
                        className="onovo-lnk lnk--white"
                        target="_blank"
                      >
                        info@contentfoundry.in
                      </a>
                      <div
                        className="onovo-social-1 onovo-social-active"
                        style={{ marginTop: '10px' }}
                      >
                        <ul>
                          {appData.social.map((item, key) => (
                            <li key={`contact-social-item-${key}`}>
                              <a
                                href={item.link}
                                target="_blank"
                                className="onovo-social-link onovo-hover-2"
                                title={item.title}
                              >
                                <i className={`icon ${item.icon}`} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h5>FBD One Corporate Park</h5>
                      <div>
                        10th Floor, NH 44,
                        <br />
                        Faridabad, Haryana 121003
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
};
export default Contact;
