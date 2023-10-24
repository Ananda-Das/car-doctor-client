//https://www.youtube.com/watch?v=Ojb8OQCBqFs&ab_channel=TechEnthusiast

import bg1 from "../../../assets/images/homeCarousel/1.jpg";
import bg2 from "../../../assets/images/homeCarousel/2.jpg";
import bg3 from "../../../assets/images/homeCarousel/3.jpg";
import bg4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bg1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 h-full">
          <div className="w-1/2 text-white space-y-7 ml-28">
            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn text-white btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-3 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bg2} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 h-full">
          <div className="w-1/2 text-white space-y-7 ml-28">
            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn text-white btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-3 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bg3} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 h-full">
          <div className="w-1/2 text-white space-y-7 ml-28">
            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn text-white btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-3 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bg4} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 h-full">
          <div className="w-1/2 text-white space-y-7 ml-28">
            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn text-white btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-3 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
