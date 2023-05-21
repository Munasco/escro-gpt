import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/desktop3a");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/desktop3b");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-center text-[13.43px] text-black font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden text-white">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg1.svg"
        />
        <div className="absolute top-[12px] left-[28px] w-[88px] h-[45.74px]">
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-21.svg"
          />
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[27.94%] right-[5.74%] bottom-[0.52%] left-[61.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-3.svg"
          />
          <div className="absolute top-[32.1%] left-[59.11%] font-extrabold">
            GPT
          </div>
          <div className="absolute top-[32.1%] left-[0%] font-extrabold">
            Escrow
          </div>
        </div>
        <div className="absolute top-[20px] left-[839px] flex flex-row items-center justify-center gap-[50px] text-sm">
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/home03.svg"
            />
            <b className="relative flex items-center justify-center w-[38px] shrink-0">
              Home
            </b>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/filecheck03.svg"
            />
            <b className="relative flex items-center justify-center w-[103px] h-[22px] shrink-0">
              Create Contract
            </b>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/usercircle.svg"
            />
            <b className="relative flex items-center justify-center w-[87px] h-5 shrink-0">
              Your Account
            </b>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/infocircle.svg"
            />
            <b className="relative">About</b>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[1440px] h-[93px] text-xs text-dark-grey font-roboto-mono">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-grey" />
        <b className="absolute w-[61.67%] bottom-[17px] left-[17.71%] inline-block h-[25px]">
          Home | Your Account | About
        </b>
        <div className="absolute w-[95.83%] top-[27px] left-[2.08%] font-proxima-nova text-black inline-block h-16">
          <p className="m-0">
            © 2023 - EscrowGPT, Inc. All rights reserved. 200 University Ave W,
            Waterloo, ON N2L 3G1
          </p>
        </div>
      </div>
      <b className="absolute top-[121px] left-[54px] text-31xl text-left">
        Create Contract
      </b>
      <b className="absolute top-[237.5px] left-[429px] text-xl">
        Hi! We’re so glad you’re here. What are you looking to do today?
      </b>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[334px] left-[422px] flex flex-row items-end justify-between">
        <div
          className="flex flex-col items-center justify-center gap-[40px] cursor-pointer"
          onClick={onFrameContainer2Click}
        >
          <img
            className="relative w-[189.3px] h-[190.26px]"
            alt=""
            src="/icon1.svg"
          />
          <button className="cursor-pointer [border:none] py-[25px] px-[82px] bg-mediumseagreen rounded-8xs w-[271px] h-[59px] overflow-hidden shrink-0 flex flex-col box-border items-center justify-center">
            <div className="flex flex-col items-center justify-start">
              <b className="relative text-xl font-proxima-nova text-gray-300 text-left">
                I’m a buyer!
              </b>
            </div>
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-start gap-[30px] cursor-pointer"
          onClick={onFrameContainer5Click}
        >
          <img
            className="relative w-[182px] h-[182px] overflow-hidden shrink-0"
            alt=""
            src="/tag031.svg"
          />
          <div className="rounded-8xs bg-mediumseagreen w-[271px] h-[59px] overflow-hidden shrink-0 flex flex-col py-[25px] px-[82px] box-border items-center justify-center">
            <div className="flex flex-col items-center justify-start">
              <b className="relative text-xl font-proxima-nova text-gray-300 text-left">
                I’m a seller!
              </b>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Desktop5;
