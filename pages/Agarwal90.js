import React from "react";
import Image from "next/image";
import Link from "next/link";
import sixty from "../public/Images/sixty.webp";
import agarwal from "../public/Images/agarwal.png";

export default function Agarwal90() {
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
          Great! You have completed <span>90%</span>
        </h3>
        <div className="row"></div>
        <div className="row pt-4 mb-5" id="row-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center" id="ninety-image-div">
                <Image src={sixty} alt="sixty-agarwal" />
                <p id="twenty-down">
                  With lakhs of profiles, this is the
                  <br />
                  best place to find your match faster
                </p>
              </div>
              <div className="col-md-8">
                <h5 id="fourty-h5">
                  Write a brief introduction about you in your own words
                </h5>
                <div className="d-flex ml-5 pl-5">
                  <div>
                    <p id="nine-p1">About you</p>
                  </div>
                  <div>
                    <p id="nine-p">Sample description</p>
                    <textarea id="nine-text" />

                    <p id="nine-p2">Min. 50 characters</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end mr-5 my-3">
                  <Link href="/Agarwal80">
                    <div className="mr-4" id="sixty-p2">
                      <p>Previous</p>
                    </div>
                  </Link>
                  <Link href="https://www.agarwalmatrimony.com/register/index.php?act=congrats&gasrc=reg_addprofile&gaact=congratspage">
                    <div>
                      <button type="button" className="mr-5" id="sixty-btn2">
                        COMPLETE REGISTRATION
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
