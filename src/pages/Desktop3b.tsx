import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop3b: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEntryContainerClick = useCallback(() => {
    navigate("/desktop4b");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/desktop2");
  }, [navigate]);

  const onWhatAreTheseFeesClick = useCallback(() => {
    navigate("/desktop4b");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-center text-base text-black font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden text-[13.43px] text-white">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/header-bg1.svg"
        />
        <div className="absolute top-[12px] left-[28px] w-[88px] h-[45.74px]">
          <img
            className="absolute h-[71.55%] w-[33.24%] top-[0.52%] right-[12.89%] bottom-[27.94%] left-[53.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-27.svg"
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
      <b className="absolute top-[237.5px] left-[426px] text-xl">
        Great! Select a pending contract below, or create a new contract!
      </b>
      <div className="absolute top-[317px] left-[297px] w-[431px] h-[19px] text-left">
        <div className="absolute top-[0px] left-[0px]">Escrow</div>
        <div className="absolute top-[0px] left-[130px]">Last Updated</div>
        <div className="absolute top-[0px] left-[354px]">Next Steps</div>
      </div>
      <div
        className="absolute top-[338px] left-[288px] bg-seashell w-[863px] h-[34px] cursor-pointer text-left text-xs"
        onClick={onEntryContainerClick}
      >
        <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Kyla`}</div>
        <div className="absolute top-[32.35%] left-[16.11%]">May 20, 2023</div>
        <div className="absolute top-[32.35%] left-[42.06%]">
          Complete Details
        </div>
        <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] hidden text-center text-lightslategray">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/buttonbg.svg"
          />
          <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
            Draft
          </div>
          <img
            className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
            alt=""
            src="/iconplussign-blue.svg"
          />
          <img
            className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
            alt=""
            src="/iconrightarrow5.svg"
          />
          <img
            className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
            alt=""
            src="/iconsmalllifesaver7.svg"
          />
        </div>
        <img
          className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/chevrondown.svg"
        />
      </div>
      <div
        className="absolute top-[688px] left-[39px] flex flex-row items-center justify-center gap-[7px] cursor-pointer text-left text-gray-200"
        onClick={onFrameContainer2Click}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="relative">Back</div>
      </div>
      <div
        className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_87px)] rounded-6xs box-border w-[174px] h-[31px] overflow-hidden flex flex-row py-1.5 px-[13px] items-start justify-start cursor-pointer border-[1px] border-solid border-silver"
        onClick={onWhatAreTheseFeesClick}
      >
        <div className="flex flex-row items-center justify-center">
          <div className="relative flex items-center justify-center w-[148px] shrink-0">
            New Contract
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3b;
