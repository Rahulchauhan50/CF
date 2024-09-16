import Data2 from "@data/app.json";
import Mainlogo from './svgs/popinfinity.png'
import Brandshaala from './svgs/brandshaala.svg'
import Printsmith from './svgs/Printsmith 1.svg'

const Companies = () => {
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
							<img src={Mainlogo.src} alt="" />
							<div className="desc_text text-center text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. 
								Commodi neque fugiat tenetur vero laborum ratione voluptatem.
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 brandshaala">
							<img src={Brandshaala.src} alt="" />
							<div className="desc_text text-center text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. 
								Commodi neque fugiat tenetur vero laborum ratione voluptatem.
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 printsmith">
							<img src={Printsmith.src} alt="" />
							<div className="desc_text text-center text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. 
								Commodi neque fugiat tenetur vero laborum ratione voluptatem.
							</div>
						</div>
					</div>
				</div>
		</section>
    </>
  );
};

export default Companies;