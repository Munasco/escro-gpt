import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCreateContractClick = useCallback(() => {
    navigate("/desktop");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[833px] overflow-hidden text-left text-base text-black font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden text-center text-[13.43px] text-white">
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
        <div className="absolute top-[20px] left-[839px] w-[553px] h-6 flex flex-row items-center justify-between text-sm">
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
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/infocircle.svg"
            />
            <b className="relative text-sm font-proxima-nova text-white text-center">
              About
            </b>
          </button>
        </div>
      </div>
      <div className="absolute top-[292px] left-[63px] w-[619px] h-[19px]">
        <div className="absolute top-[0px] left-[0px]">Escrow</div>
        <div className="absolute top-[0px] left-[135px]">Status</div>
        <div className="absolute top-[0px] left-[318px]">Last Updated</div>
        <div className="absolute top-[0px] left-[542px]">Next Steps</div>
      </div>
      <b className="absolute top-[121px] left-[54px] text-31xl">
        Active Contracts
      </b>
      <div className="absolute top-[313px] left-[992px] w-[390px] h-[209px]">
        <div className="absolute top-[calc(50%_-_62.5px)] right-[0px] rounded-8xs box-border w-[390px] overflow-hidden flex flex-col py-[25px] px-[82px] items-center justify-center text-xl text-gray-300 border-[1px] border-solid border-silver">
          <div className="self-stretch flex flex-col items-center justify-start">
            <b className="relative">Search Past Contracts</b>
          </div>
        </div>
        <div className="absolute top-[1px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-[21.89px] h-[22px]"
            alt=""
            src="/icon.svg"
          />
          <div className="relative">5 purchases</div>
        </div>
        <div className="absolute top-[0px] left-[255px] flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/banknote02.svg"
          />
          <div className="relative">$95 protected</div>
        </div>
        <div className="absolute top-[0px] left-[139px] flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/tag03.svg"
          />
          <div className="relative">23 sales</div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[25px] px-[82px] bg-mediumseagreen absolute top-[calc(50%_+_26.5px)] right-[0px] rounded-8xs w-[390px] overflow-hidden flex flex-col box-border items-center justify-center"
          onClick={onCreateContractClick}
        >
          <div className="flex flex-col items-center justify-start">
            <b className="relative text-xl font-proxima-nova text-gray-300 text-left">
              Create Contract
            </b>
          </div>
        </button>
      </div>
      <div className="absolute top-[203px] left-[54px] rounded-8xs bg-mediumseagreen box-border w-[150px] h-[57px] overflow-hidden flex flex-col py-[25px] px-[82px] items-center justify-center text-xl text-gray-300 border-[3px] border-solid border-mediumseagreen">
        <div className="flex flex-col items-center justify-start">
          <b className="relative">Buyer</b>
        </div>
      </div>
      <div className="absolute top-[203px] left-[220px] rounded-8xs bg-gainsboro-200 w-[150px] h-[57px] overflow-hidden flex flex-col py-[25px] px-[82px] box-border items-center justify-center text-xl text-gray-300">
        <div className="flex flex-col items-center justify-start">
          <b className="relative">Seller</b>
        </div>
      </div>
      <div className="absolute h-[32.41%] top-[37.58%] bottom-[30.01%] left-[54px] w-[863px] text-xs">
        <div className="absolute h-[12.59%] top-[0%] bottom-[87.41%] left-[0px] bg-seashell w-[863px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Kelly`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">
            May 20, 2023
          </div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-lightslategray">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg1.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Draft
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver1.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute top-[34px] left-[0px] bg-white w-[863px] h-[34px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Kyla`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">
            May 20, 2023
          </div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-lightslategray">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg1.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Draft
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver2.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute h-[12.59%] top-[25.19%] bottom-[62.22%] left-[0px] bg-seashell w-[863px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Sebastien`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">
            May 19, 2023
          </div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Anomaly Detected, Verification by Human Needed
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-[10.5px] text-gray-100">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg2.svg"
            />
            <div className="absolute top-[calc(50%_-_6.67px)] left-[calc(50%_-_49.5px)] tracking-[0.07px] inline-block w-[100px]">
              Awaiting Verification
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue3.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver3.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[17.65%] right-[0.7%] bottom-[11.76%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute top-[102px] left-[0px] bg-white w-[863px] h-[34px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Selina`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">
            May 17, 2023
          </div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Buyer Approves Transaction
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-rosybrown-200">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg3.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Awaiting Payment
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver4.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute h-[12.59%] top-[50.37%] bottom-[37.04%] left-[0px] bg-seashell w-[863px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Roshni`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">
            May 10, 2023
          </div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-[11px] text-rosybrown-100">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg4.svg"
            />
            <div className="absolute top-[calc(50%_-_6.67px)] left-[calc(50%_-_49.5px)] tracking-[0.07px] inline-block w-[100px]">
              Changes Suggested
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[168px] left-[0px] bg-white w-[863px] h-[34px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Marina`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">May 4, 2023</div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-lightslategray">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg1.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Draft
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver1.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute top-[202px] left-[0px] bg-seashell w-[863px] h-[34px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Jessica`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">May 3, 2023</div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-lightslategray">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg1.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Draft
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow1.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver1.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="absolute top-[236px] left-[0px] bg-white w-[863px] h-[34px]">
          <div className="absolute top-[32.35%] left-[1.04%]">{`Me <> Lucia`}</div>
          <div className="absolute top-[32.35%] left-[37.89%]">May 2, 2023</div>
          <div className="absolute top-[32.35%] left-[63.85%]">
            Complete Details
          </div>
          <div className="absolute h-[56.88%] w-[12.63%] top-[23.53%] right-[70.68%] bottom-[19.59%] left-[16.69%] text-center text-lightslategray">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.11px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/buttonbg1.svg"
            />
            <div className="absolute top-[calc(50%_-_7.67px)] left-[calc(50%_-_50.5px)] tracking-[0.07px] inline-block w-[100px]">
              Draft
            </div>
            <img
              className="absolute top-[calc(50%_-_3.14px)] left-[8.09px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconplussign-blue4.svg"
            />
            <img
              className="absolute top-[calc(50%_-_3.14px)] right-[6.68px] w-[5.63px] h-[5.63px] hidden"
              alt=""
              src="/iconrightarrow3.svg"
            />
            <img
              className="absolute top-[calc(50%_-_4.55px)] left-[3.87px] w-[11.25px] h-[9.14px] hidden"
              alt=""
              src="/iconsmalllifesaver5.svg"
            />
          </div>
          <img
            className="absolute h-[70.59%] w-[2.78%] top-[20.59%] right-[0.7%] bottom-[8.82%] left-[96.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
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
    </div>
  );
};

export default Desktop6;
