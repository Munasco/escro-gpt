import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop6b: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDesktop6bContainerClick = useCallback(() => {
    navigate("/desktop7b");
  }, [navigate]);

  return (
    <div
      className="relative bg-white w-full h-[833px] overflow-hidden cursor-pointer text-center text-sm text-white font-proxima-nova"
      onClick={onDesktop6bContainerClick}
    >
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
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-25.svg"
          />
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[27.94%] right-[5.74%] bottom-[0.52%] left-[61.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-32.svg"
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
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-25.svg"
          />
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[27.94%] right-[5.74%] bottom-[0.52%] left-[61.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-32.svg"
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
      <div className="absolute top-[283px] left-[380px] w-[681px] h-[198px] text-base text-black">
        <div className="absolute top-[132px] left-[38px] w-[604px] h-[66px]">
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
        <b className="absolute top-[0px] left-[calc(50%_-_340.5px)] text-xl">
          Please wait while Artificial Intelligence verifies the authenticity of
          your sale.
        </b>
        <div className="absolute h-[23.1%] w-[6.7%] top-[21.21%] right-[46.75%] bottom-[55.69%] left-[46.55%] text-[13.43px]">
          <img
            className="absolute h-[71.55%] w-[64.08%] top-[0.52%] right-[24.85%] bottom-[27.94%] left-[11.07%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-26.svg"
          />
          <img
            className="absolute h-[71.55%] w-[64.08%] top-[27.94%] right-[11.07%] bottom-[0.52%] left-[24.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-33.svg"
          />
          <div className="absolute top-[32.1%] left-[21.18%] font-extrabold">
            GPT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop6b;
