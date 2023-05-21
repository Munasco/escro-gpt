import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/desktop2");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-center text-sm text-white font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg.svg"
        />
        <div className="absolute top-[29px] left-[1260px] w-[120px] h-[25px] hidden text-dark-grey font-roboto-mono">
          <div className="absolute h-[98.68%] w-full top-[0%] right-[0%] bottom-[1.32%] left-[0%] rounded-md bg-white" />
          <b className="absolute h-[86.96%] w-[59.17%] top-[0%] left-[20.83%] leading-[13px] flex items-center justify-center">
            Log in
          </b>
        </div>
        <div className="absolute top-[12px] left-[28px] w-[88px] h-[45.74px] text-[13.43px]">
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-2.svg"
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
        <div className="absolute top-[20px] left-[839px] flex flex-row items-center justify-center gap-[50px]">
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
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg1.svg"
        />
        <div className="absolute top-[29px] left-[1260px] w-[120px] h-[25px] hidden text-dark-grey font-roboto-mono">
          <div className="absolute h-[98.68%] w-full top-[0%] right-[0%] bottom-[1.32%] left-[0%] rounded-md bg-white" />
          <b className="absolute h-[86.96%] w-[59.17%] top-[0%] left-[20.83%] leading-[13px] flex items-center justify-center">
            Log in
          </b>
        </div>
        <div className="absolute top-[12px] left-[28px] w-[88px] h-[45.74px] text-[13.43px]">
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-2.svg"
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
        <div className="absolute top-[20px] left-[839px] flex flex-row items-center justify-center gap-[50px]">
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
      <div className="absolute top-[203px] left-[242px] w-[957px] h-[216px] text-base text-black">
        <div className="absolute top-[150px] left-[176px] w-[604px] h-[66px]">
          <img
            className="absolute top-[29px] left-[16px] w-[554px] h-[17px]"
            alt=""
            src="/group-14.svg"
          />
          <b className="absolute top-[47px] left-[calc(50%_-_302px)]">
            Details
          </b>
          <b className="absolute top-[47px] left-[calc(50%_-_41px)]">Payment</b>
          <b className="absolute top-[47px] left-[calc(50%_+_219px)]">
            Verification
          </b>
          <img
            className="absolute top-[29px] left-[16px] w-[554px] h-[17px]"
            alt=""
            src="/group-14.svg"
          />
          <b className="absolute top-[47px] left-[calc(50%_-_302px)]">
            Details
          </b>
          <b className="absolute top-[47px] left-[calc(50%_-_41px)]">Payment</b>
          <b className="absolute top-[47px] left-[calc(50%_+_219px)]">
            Verification
          </b>
          <img
            className="absolute top-[0px] left-[550px] w-6 h-6 overflow-hidden"
            alt=""
            src="/markerpin01.svg"
          />
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_478.5px)] text-31xl">
          Congratulations! Your purchase is verified.
        </b>
      </div>
      <div
        className="absolute top-[calc(50%_+_185.5px)] left-[calc(50%_-_195px)] rounded-8xs bg-mediumseagreen w-[390px] h-[59px] overflow-hidden flex flex-col py-[25px] px-[82px] box-border items-center justify-center cursor-pointer text-left text-xl text-gray-300"
        onClick={onFrameContainer3Click}
      >
        <div className="flex flex-col items-center justify-start">
          <b className="relative">Create Another Contract</b>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
