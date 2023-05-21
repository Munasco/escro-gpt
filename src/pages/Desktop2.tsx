import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/desktop4a");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/desktop6a");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-left text-base text-black font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden text-center text-sm text-white">
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
            src="/vector-23.svg"
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
      <img
        className="absolute top-[195px] left-[787px] w-[554px] h-[17px]"
        alt=""
        src="/group-14.svg"
      />
      <div className="absolute bottom-[0px] left-[0px] w-[1440px] h-[93px] text-center text-xs text-dark-grey font-roboto-mono">
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
      <b className="absolute top-[121px] left-[54px] text-31xl">
        Create Contract
      </b>
      <b className="absolute top-[182px] left-[55px] text-xl">{`Me <> Kelly`}</b>
      <b className="absolute top-[305px] left-[775px]">
        Click on a payment method to continue.
      </b>
      <div className="absolute top-[213px] left-[771px] w-[604px] h-[19px] text-center">
        <b className="absolute top-[0px] left-[0px]">Details</b>
        <b className="absolute top-[0px] left-[261px]">Payment</b>
        <b className="absolute top-[0px] left-[521px]">Verification</b>
      </div>
      <div className="absolute top-[213px] left-[55px] w-[371px] h-[19px]">
        <b className="absolute top-[0px] left-[calc(50%_-_185.5px)]">
          Contract ID
        </b>
        <div className="absolute top-[0px] left-[calc(50%_-_19.5px)] text-gray-200">
          jellybeansfirecomputercoffee
        </div>
      </div>
      <div className="absolute top-[305px] left-[55px] flex flex-col items-start justify-center gap-[1px]">
        <div className="relative w-[228px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_114px)]">Item</b>
          <div className="absolute top-[0px] left-[calc(50%_+_52px)] text-gray-200">
            18 USDC
          </div>
        </div>
        <div className="relative w-[219px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_109.5px)]">
            Transaction Fee
          </b>
          <div className="absolute top-[0px] left-[calc(50%_+_56.5px)] text-gray-200">
            1 USDC
          </div>
        </div>
        <div className="relative w-[254px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_127px)]">Gas Fee</b>
          <div className="absolute top-[0px] left-[calc(50%_+_39px)] text-gray-200">
            0.003 USDC
          </div>
        </div>
        <div className="relative w-[236px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_118px)]">AI Fee</b>
          <div className="absolute top-[0px] left-[calc(50%_+_48px)] text-gray-200">
            0.5 USDC
          </div>
        </div>
        <div className="relative w-[219px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_109.5px)]">
            Operation Fee
          </b>
          <div className="absolute top-[0px] left-[calc(50%_+_56.5px)] text-gray-200">
            1 USDC
          </div>
        </div>
      </div>
      <div className="absolute top-[429px] left-[55px] w-[264px] h-[19px]">
        <b className="absolute top-[0px] left-[0px]">Total</b>
        <div className="absolute top-[0px] left-[166px] text-gray-200">
          20.503 USDC
        </div>
      </div>
      <div className="absolute top-[257px] left-[41px] rounded-6xs bg-gainsboro-100 w-[571px] overflow-hidden flex flex-row py-1.5 px-[13px] box-border items-start justify-start text-xl">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/box.svg"
          />
          <b className="relative flex items-center w-64 shrink-0">
            Order Summary
          </b>
        </div>
      </div>
      <div className="absolute top-[470px] left-[41px] rounded-6xs box-border w-[174px] overflow-hidden flex flex-row py-1.5 px-[13px] items-start justify-start border-[1px] border-solid border-silver">
        <div className="flex flex-row items-center justify-center">
          <div className="relative flex items-center w-[186px] shrink-0">
            What are these fees?
          </div>
        </div>
      </div>
      <div className="absolute top-[257px] left-[770px] rounded-6xs bg-gainsboro-100 w-[571px] overflow-hidden flex flex-col py-1.5 px-[13px] box-border items-start justify-start text-xl">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/banknote02.svg"
          />
          <b className="relative">Payment</b>
        </div>
      </div>
      <div
        className="absolute top-[688px] left-[39px] flex flex-row items-center justify-center gap-[7px] cursor-pointer text-gray-200"
        onClick={onFrameContainer5Click}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="relative">Back</div>
      </div>
      <img
        className="absolute top-[166px] left-[1053px] w-6 h-6 overflow-hidden"
        alt=""
        src="/markerpin01.svg"
      />
      <img
        className="absolute top-[416.5px] left-[44px] w-[563px] h-px"
        alt=""
        src="/vector-5.svg"
      />
      <div className="absolute top-[337px] left-[772px] rounded-6xs bg-white overflow-hidden flex flex-row p-[29px] items-center justify-center gap-[29px] border-[1px] border-solid border-silver">
        <div className="flex flex-col items-start justify-start">
          <img
            className="relative w-[166px] h-11 object-cover"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrownarrowupright.svg"
        />
      </div>
      <div
        className="absolute top-[688px] left-[1308px] flex flex-row items-center justify-center gap-[7px] cursor-pointer text-right text-gray-200"
        onClick={onFrameContainer8Click}
      >
        <div className="relative">Continue</div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrownarrowright.svg"
        />
      </div>
    </div>
  );
};

export default Desktop2;
