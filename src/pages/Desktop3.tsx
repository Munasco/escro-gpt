import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/desktop3");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/desktop4");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-left text-base text-black font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden text-center text-sm text-white">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg1.svg"
        />
        <div className="absolute top-[29px] left-[1260px] w-[120px] hidden flex-col items-center justify-end text-dark-grey font-roboto-mono">
          <div className="relative rounded-md bg-white w-[120px] h-[24.67px]" />
          <b className="relative leading-[13px] flex items-center justify-center w-[71px] h-[21.74px] shrink-0 mt-[-24px]">
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
      <div className="absolute top-[213px] left-[771px] w-[604px] h-[19px] text-center">
        <b className="absolute top-[0px] left-[calc(50%_-_302px)]">Details</b>
        <b className="absolute top-[0px] left-[calc(50%_-_41px)]">Payment</b>
        <b className="absolute top-[0px] left-[calc(50%_+_219px)]">
          Verification
        </b>
      </div>
      <div className="absolute top-[213px] left-[55px] w-[371px] h-[19px] flex flex-row items-center justify-start gap-[83px]">
        <b className="relative">Contract ID</b>
        <div className="relative text-gray-200">
          jellybeansfirecomputercoffee
        </div>
      </div>
      <div className="absolute top-[299px] left-[55px] w-[223px] h-[19px] flex flex-row items-center justify-start gap-[123px]">
        <b className="relative">Name</b>
        <div className="relative text-gray-200">Allen Lu</div>
      </div>
      <div className="absolute top-[302px] left-[1081px] w-[305px] h-[19px] flex flex-row items-center justify-start gap-[77px]">
        <b className="relative">Name</b>
        <div className="relative text-gray-200">Textbook (E-Book Version)</div>
      </div>
      <div className="absolute top-[324px] left-[1081px] w-[182px] h-[19px] flex flex-row items-center justify-start gap-[83px]">
        <b className="relative">Price</b>
        <div className="relative text-gray-200">18 USDC</div>
      </div>
      <div className="absolute top-[346px] left-[1081px] w-[310px] h-[57px] flex flex-row items-start justify-start gap-[37px]">
        <b className="relative">Description</b>
        <div className="relative text-gray-200">
          <p className="m-0">Fifth edition of Chemistry</p>
          <p className="m-0">textbook. Very high quality,</p>
          <p className="m-0">{`loved by many. `}</p>
        </div>
      </div>
      <div className="absolute top-[321px] left-[55px] w-[321px] h-[19px] flex flex-row items-center justify-start gap-[86px]">
        <b className="relative">Account ID</b>
        <div className="relative text-gray-200">hipposexitlaughhappy</div>
      </div>
      <div className="absolute top-[431px] left-[55px] w-[250px] h-[19px] flex flex-row items-center justify-start gap-[123px]">
        <b className="relative">Name</b>
        <div className="relative text-gray-200">Kelly Huang</div>
      </div>
      <div className="absolute top-[453px] left-[55px] w-[296px] h-[19px] flex flex-row items-center justify-start gap-[86px]">
        <b className="relative">Account ID</b>
        <div className="relative text-gray-200">lifehellowaterchilly</div>
      </div>
      <div className="absolute top-[257px] left-[771px] rounded-6xs bg-gainsboro-100 w-[174px] overflow-hidden flex flex-col py-1.5 px-[13px] box-border items-start justify-start text-xl">
        <div className="flex flex-row items-center justify-center">
          <b className="relative">Item</b>
        </div>
      </div>
      <div className="absolute top-[257px] left-[41px] rounded-6xs bg-gainsboro-100 w-[571px] overflow-hidden flex flex-col py-1.5 px-[13px] box-border items-start justify-start text-xl">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/tag03.svg"
          />
          <b className="relative">Seller</b>
        </div>
      </div>
      <div className="absolute top-[386px] left-[41px] rounded-6xs bg-mediumseagreen w-[571px] overflow-hidden flex flex-col py-1.5 px-[13px] box-border items-start justify-center text-xl">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="relative w-[21.89px] h-[22px]"
            alt=""
            src="/icon.svg"
          />
          <b className="relative">Buyer (You)</b>
        </div>
      </div>
      <div className="absolute top-[500px] left-[50px] w-[475px] h-6 flex flex-row items-center justify-start gap-[10px] text-red">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/alertcircle.svg"
        />
        <b className="relative">
          Verify that this information is true before clicking “Continue”.
        </b>
      </div>
      <img
        className="absolute top-[302px] left-[771px] rounded-[15px] w-[264px] h-[337px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <div
        className="absolute top-[688px] left-[39px] flex flex-row items-center justify-center gap-[7px] cursor-pointer text-gray-200"
        onClick={onFrameContainer4Click}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="relative">Back</div>
      </div>
      <div
        className="absolute top-[688px] left-[1308px] flex flex-row items-center justify-center gap-[7px] cursor-pointer text-right text-gray-200"
        onClick={onFrameContainer5Click}
      >
        <div className="relative">Continue</div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrownarrowright.svg"
        />
      </div>
      <img
        className="absolute top-[166px] left-[783px] w-6 h-6 overflow-hidden"
        alt=""
        src="/markerpin01.svg"
      />
    </div>
  );
};

export default Desktop3;
