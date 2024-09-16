import React from "react";
import Member4 from '../../../public/images/team/007.webp'
import Member3 from '../../../public/images/team/010.jpg'
import Member2 from '../../../public/images/team/012.webp'
import Member1 from '../../../public/images/team/022.webp'
import Data from "@data/sections/team.json";
import Link from "next/link";

const RoundTeam = () => {
    return (
        <>
			<section className="onovo-section gap-bottom-140" id="clients">
                     <div className="onovo-heading align-center gap-bottom-40">
						{/* <div className="onovo-subtitle-1">
							<span>{Data.subtitle}</span>
						</div> */}
						<h2 className="onovo-title-2 text-capitalize">
							<span dangerouslySetInnerHTML={{__html: Data.title}} />
						</h2>
					</div>
				<div className="container">
                    <div className="row roundbase">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 p-4">
                            <img src={Member1.src} />
                            <h5 className="text-center m-3">Ajay Adlakha</h5>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 p-4">
                            <img src={Member2.src} />
                            <h5 className="text-center m-3">Harshita Adlakha</h5>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 p-4">
                            <img src={Member3.src} />
                            <h5 className="text-center m-3">Satyendra Mallik</h5>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 p-4">
                            <img src={Member4.src} />
                            <h5 className="text-center m-3">Aayush Anand</h5>
                        </div>
                    </div>
				</div>
			</section>
        </>
    );
};

export default RoundTeam;