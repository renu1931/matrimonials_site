import React from "react";
import Image from "next/image";
import Link from "next/link";
import eighty from "../public/Images/eighty.webp";
import agarwal from "../public/Images/agarwal.png";

export default function Agarwal80() {
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
          Great! You have completed <span>80%</span>
        </h3>
        <div className="row"></div>
        <div className="row pt-4 mb-5" id="row-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center" id="sixty-image-div">
                <Image src={eighty} alt="sixty-agarwal" />
                <p id="twenty-down">
                  With lakhs of profiles, this is the
                  <br />
                  best place to find your match faster
                </p>
              </div>
              <div className="col-md-8">
                <h5 id="fourty-h5">
                  Professional details help to get like-minded matches
                </h5>
                <div className="d-flex justify-content-around">
                  <p id="eighty-p1">Highest Education</p>
                  <input placeholder="Enter Your Education" id="eighty-input" />
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p id="sixty-p">Employed In</p>
                  </div>
                  <div>
                    <div>
                      <button id="eighty-btn">Government</button>
                      <button id="eighty-btn">Defence</button>
                      <button id="eighty-btn">Private</button>
                    </div>
                    <div>
                      <button id="eighty-btn">Bussiness</button>
                      <button id="eighty-btn">Self-Employed</button>
                      <button id="eighty-btn">Not Working</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Occupation</p>
                  <input
                    placeholder="Enter Your Occupation"
                    id="eighty-input"
                    className="mx-5"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p id="sixty-p">Annual Income</p>
                  </div>
                  <div className="d-flex ml-3">
                    <input placeholder="Currency" id="eighty-input1" />
                    <input placeholder="Income" id="eighty-input1" />
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Work Location</p>
                  <input
                    placeholder="Enter Your Work Location"
                    id="eighty-input"
                    className="mx-5 mt-3"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Residing State</p>
                  <input
                    placeholder="Enter Your Residing state"
                    id="eighty-input"
                    className="mx-5 mt-2"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Residing City</p>
                  <input
                    placeholder="Enter Your Residing city"
                    id="eighty-input"
                    className="mx-5 mt-2"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="sixty-p">Citizenship</p>
                  <input
                    placeholder="Enter Your Citizenship"
                    id="eighty-input"
                    className="mx-4 mt-2"
                  />
                </div>
                <div className="d-flex justify-content-end mr-5 my-3">
                  <Link href="/Agarwal60">
                    <div className="mr-4" id="sixty-p2">
                      <p>Previous</p>
                    </div>
                  </Link>
                  <Link href="/Agarwal90">
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
