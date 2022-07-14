import React from "react";
import Image from "next/image";
import Link from "next/link";
import sixty from "../public/Images/sixty.webp";
import agarwal from "../public/Images/agarwal.png";
export default function Agarwal60() {
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div className="m-3">
            <Image src={agarwal} alt="agarwal-logo" />
          </div>
          <div>
            <h4 id="agarwal-h4">
              <span id="agarwal-span">Agarwal</span>Matrimony.com
            </h4>
            <p id="agarwal-p">From Matrimony.com Group</p>
          </div>
        </div>
        <h3 id="agarwal-h3">
          Great! You have completed <span>60%</span>
        </h3>
        <div className="row"></div>
        <div className="row pt-4 mb-5" id="row-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center" id="sixty-image-div">
                <Image src={sixty} alt="sixty-agarwal" />
                <p id="twenty-down">
                  Lakhs of Success stories!
                  <br />
                  Yours could be next
                </p>
              </div>
              <div className="col-md-8">
                <h5 id="fourty-h5">
                  Personal details will fetch better matching results
                </h5>
                <div className="d-flex justify-content-around">
                  <div>
                    <p id="sixty-p">Marital Status</p>
                  </div>
                  <div>
                    <div>
                      <button id="sixty-btn" className="mr-5">
                        Unmarried
                      </button>
                      <button id="sixty-btn">Widow</button>
                    </div>
                    <div>
                      <button id="sixty-btn" className="mr-5">
                        Divorced
                      </button>
                      <button id="sixty-btn">Separated</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Height</p>
                  <input placeholder="---Feet/Inches---" id="sixty-input" />
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p id="sixty-p">Family Status</p>
                  </div>
                  <div>
                    <div>
                      <button id="sixty-btn" className="mr-3">
                        Middle Class
                      </button>
                      <button id="sixty-btn1">Upper Middle Class</button>
                    </div>
                    <div>
                      <button id="sixty-btn">Rich/Affluent</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Family Type</p>
                  <div className="d-flex">
                    <div>
                      <button id="sixty-btn" className="mr-3 mt-3">
                        Joint Family
                      </button>
                    </div>
                    <div>
                      <button id="sixty-btn" className="mt-3">
                        Nuclear Family
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Physical Status</p>
                  <div className="d-flex">
                    <div>
                      <button id="sixty-btn" className="mr-3 ml-5 mt-3">
                        Normal
                      </button>
                    </div>
                    <div>
                      <button id="sixty-btn" className="mt-3 mb-3">
                        Physically Challenged
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mr-5 my-3">
                  <Link href="/Agarwal40">
                    <div className="mr-4" id="sixty-p2">
                      <p>Previous</p>
                    </div>
                  </Link>
                  <Link href="Agarwal80">
                    <div>
                      <button type="button" className="mr-5" id="sixty-btn2">
                        CONTINUE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p id="twenty-paragraph">Copyright © 2022. All rights reserved.</p>
      </div>
    </>
  );
}
