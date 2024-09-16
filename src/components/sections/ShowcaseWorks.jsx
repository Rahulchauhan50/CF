import Data2 from "@data/app.json";
import Infinity from './svgs/infinity.svg'
import Brandshaala from './svgs/brandshaala.svg'
import Printsmith from './svgs/Printsmith 1.svg'

const ShowcaseWorks = () => {
  return (
    <>
      {/* Onovo Numbers */}
	  	<section className="onovo-section gap-top-140">
				<div className="container-fluid">
					<div className="row d-flex">
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 infinity">
							{/* {Data2.Company.brands.map((e,i)=>{
									<img src={e.image} alt={e.alt} className={e.classn} />
							})} */}
							<img src={Infinity.src} alt="" />
							{/* {console.log(Data2.Company.brands)}
							{console.log(Infinity)} */}
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 brandshaala">
							<img src={Brandshaala.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 printsmith">
							<img src={Printsmith.src} alt="" />
						</div>
					</div>
				</div>
		</section>
    </>
  );
};

export default ShowcaseWorks;