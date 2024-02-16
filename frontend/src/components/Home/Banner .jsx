// Banner 컴포넌트
import React from 'react';

const Banner = () => {
  return (
    <section className="section banner relative">
      <div className="container">
        <div className="row items-center">
          <div className="lg:col-6">
            <h1 className="banner-title">
              재능교환 사이트입니더잉~
            </h1>
            <p className="mt-6">
              A fully integrated suite of authentication & authorization products,
              Stytch’s platform removes the headache of.
            </p>
            <a className="btn btn-white mt-8 " href="#">
              <p className='font-bold text-lg mt-1'>재능 등록하기</p>
            </a>
          </div>
          <div className="lg:col-6">
            <img
              className="w-full object-contain"
              src="./images/banner-img.png"
              width="603"
              height="396"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src="./images/banner-shape.svg"
        alt=""
      />
    </section>
  );
};

export default Banner;
