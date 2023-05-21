import { FunctionComponent } from "react";

const Desktop8: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden hidden text-center text-sm text-white font-roboto-mono">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg2.svg"
        />
        <div className="absolute top-[19px] right-[19px] w-[626px] h-[31px]">
          <b className="absolute top-[5px] right-[510px] flex items-center justify-center w-[116px] h-5">
            Home
          </b>
          <b className="absolute top-[4px] right-[335px] flex items-center justify-center w-[127px] h-[22px]">
            Create Contract
          </b>
          <b className="absolute top-[5px] right-[122px] flex items-center justify-center w-[155px] h-5">
            Your Account
          </b>
          <b className="absolute top-[5px] right-[0px] flex items-center justify-center w-[79px] h-5">
            About
          </b>
          <img
            className="absolute top-[0px] left-[0px] w-[31px] h-[31px] overflow-hidden"
            alt=""
            src="/icon2.svg"
          />
          <img
            className="absolute top-[0px] left-[122px] w-[31px] h-[31px] overflow-hidden"
            alt=""
            src="/icon2.svg"
          />
          <img
            className="absolute top-[0px] left-[523px] w-[31px] h-[31px] overflow-hidden"
            alt=""
            src="/icon2.svg"
          />
          <img
            className="absolute top-[0px] left-[334px] w-[31px] h-[31px] overflow-hidden"
            alt=""
            src="/icon2.svg"
          />
          <b className="absolute top-[5px] right-[80px] hidden items-center justify-center w-[95px] h-5">
            Item 5
          </b>
        </div>
        <div className="absolute top-[29px] left-[1260px] w-[120px] h-[25px] hidden text-dark-grey">
          <div className="absolute h-[98.68%] w-full top-[0%] right-[0%] bottom-[1.32%] left-[0%] rounded-md bg-white" />
          <b className="absolute h-[86.96%] w-[59.17%] top-[0%] left-[20.83%] leading-[13px] flex items-center justify-center">
            Log in
          </b>
        </div>
        <img
          className="absolute top-[19px] left-[30px] w-[145px] h-[31px] overflow-hidden"
          alt=""
          src="/icon3.svg"
        />
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[1440px] h-[93px] text-xs text-dark-grey">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-grey" />
        <div className="absolute w-[61.67%] bottom-[17px] left-[17.71%] inline-block h-[25px]">
          <b>Item 1</b>
          <span>{` | `}</span>
          <b>Item 2</b>
          <span>{` | `}</span>
          <b> Item 3</b>
        </div>
        <div className="absolute w-[95.83%] top-[27px] left-[2.08%] text-black inline-block h-16">
          © 2000 - Company, Inc. All rights reserved. Address Address
        </div>
      </div>
      <div className="absolute top-[123px] left-[55px] w-[516px] h-[66px] overflow-hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
      </div>
      <img
        className="absolute top-[326px] left-[275px] w-[407px] h-[278px]"
        alt=""
        src="/buyer.svg"
      />
      <img
        className="absolute top-[326px] left-[757px] w-[407px] h-[278px]"
        alt=""
        src="/seller.svg"
      />
      <div className="absolute top-[254px] left-[calc(50%_-_240px)] w-[481px] h-5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
      </div>
    </div>
  );
};

export default Desktop8;
