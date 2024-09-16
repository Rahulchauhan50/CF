import React from "react";
import Slider from "react-slick";

export default function FocusWindow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div className="focuswindow2 mt-5">
        <h2 className="onovo-title-2 text-capitalize text-center">
            <span>Where You Need us</span>
				</h2>
    <Slider {...settings} className="windowtext">
      <div className="text-center">
        <h4 className="windowpeek">Shares</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Paid Ads</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Likes</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Repost</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Shares</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Traffic</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Videos</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Impacts</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Clicks</h4>
      </div>
      <div className="text-center">
        <h4 className="windowpeek">Produce</h4>
      </div>
    </Slider>

    <div className="glass_overlay">
        <div className="row blur_box">
            <div className="col-lg-5 col-sm-5">

            </div>

            <div className="col-lg-2 col-sm-2">
              
            </div>

            <div className="col-lg-5 col-sm-5">
              
            </div>
        </div>
    </div>
   
    </div>
  );
}