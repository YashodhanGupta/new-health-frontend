import React from 'react';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
  <div className="about__section">
    <br /> <br />
    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
      {/* Image Section */}
      <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 lg:ml-12 xl:ml-16">
        <img src={aboutImg} alt="" className="ml-6 lg:ml-12" />

        <div
          className="absolute z-20 bottom-4 w-[200px] md:w-[300px] 
                    right-[-10%] md:right-[-3%] lg:right-[32%]"
        >
          <img src={aboutCardImg} alt="" />
        </div>
      </div>

      {/* About Content */}
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 lg:mr-12 xl:mr-16">
        <h2 className="heading text-left lg:text-left xl:text-left">
          Proud to be one of the nation's best.
        </h2>
        <br />
        <p className="text__para text-left lg:text-left xl:text-left">
          For 30 years in a row, U.S. News & World Report has recognized us as one
          of the best public hospitals in the Nation and #1 in Texas. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quos vero tempore,
          accusamus neque blanditiis dolor ratione minima repellendus quaerat unde
          commodi?
        </p>
        <p className="text__para mt-[30px] text-left lg:text-left xl:text-left">
          Our best is something we strive for each day, caring for our patients—not
          looking back at what we accomplished but towards what we can do tomorrow.
          Providing the best. Lorem ipsum dolor sit amet, aspernatur officiis quos
          illum fugit aliquam!
        </p>

        <Link to="/">
          <button className="btn">Learn More</button>
        </Link>
      </div>
    </div> <br />
  </div>
</section>

  )
}

export default About