import React from "react";
import Image from "next/image";
import Link from "next/link";
import agarwal from "../public/Images/agarwal.png";
import fourty from "../public/Images/fourty.webp";
export default function Agarwal40() {
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
          Great! You have completed <span>40%</span>
        </h3>
        <div className="row pt-4 mb-5" id="row-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center " id="sixty-image-div">
                <Image src={fourty} alt="fourty-img" />
                <p id="twenty-down">
                  The world's largest and No.1 <br />
                  matrimony service for <br />
                  Agarwals
                </p>
              </div>
              <div className="col-md-8">
                <h5 id="fourty-h5">
                  Religion details will help us to find better matches
                </h5>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">Star</p>
                  <select id="fourty-select-1">
                    <option>Aswini</option>
                    <option>Bharani</option>
                    <option>Kruthiga</option>
                    <option>Rohini</option>
                    <option>Mrigasira</option>
                    <option>Arudra</option>
                    <option>Punarvasu</option>
                    <option>Pushya</option>
                    <option>Asilesha</option>
                    <option>Magha</option>
                    <option>Poorvaphalguni</option>
                    <option>Uthrashada</option>
                    <option>Hastha</option>
                    <option>Chitra</option>
                    <option>Swati</option>
                    <option>Visaka</option>
                    <option>Visaka</option>
                    <option>Anuradha</option>
                    <option>Jyestha</option>
                    <option>Mula</option>
                    <option>Poorvashada</option>
                    <option>Sravan</option>
                    <option>Dhanishta</option>
                    <option>Shatataraka</option>
                    <option>Poorvabhadra</option>
                    <option>Uthirabhadra</option>
                    <option>Revathi</option>
                  </select>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">Raasi</p>
                  <select id="fourty-select-1">
                    <option>Rassi</option>
                    <option>Dhanu(Saggittarrius)</option>
                    <option>Kanya(Virgo)</option>
                    <option>Kark(Cancer)</option>
                    <option>Kunbh(Aquarius)</option>
                    <option>Maker(Capricorn)</option>
                    <option>Meen(Pisces)</option>
                    <option>Mithun(Gemini)</option>
                    <option>Simha(Leo)</option>
                    <option>Tula(Libra)</option>
                    <option>Vrishabh(Taurus)</option>
                    <option>Vrishchik(Scorpio)</option>
                  </select>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p id="fourty-p">Gothra</p>
                  </div>
                  <div className="d-flex">
                    <input type="text" id="fourty-input" />
                    <p id="fourty-p1">Optional but recommended</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p2">Manglik</p>
                  <div className="d-flex">
                    <button id="fourty-btn">yes</button>
                    <button id="fourty-btn">No</button>
                    <button id="fourty-btn">Don't Know</button>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">Time of Birth</p>

                  <input type="time" placeholder="Hours" id="fourty-input1" />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">Country of Birth</p>
                  <input
                    placeholder="Enter your Birth Country"
                    id="fourty-input1"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">State of Birth</p>
                  <input
                    placeholder="Enter your Birth State"
                    id="fourty-input1"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">City of Birth</p>
                  <input
                    placeholder="Enter your Birth City"
                    id="fourty-input1"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="fourty-p">Chart Style</p>
                  <select id="fourty-select-2">
                    <option>Select</option>
                    <option>South Indian</option>
                    <option>North Indian</option>
                    <option>East Indian</option>
                    <option>Kerala</option>
                  </select>
                </div>
                <Link href="/Agarwal60">
                  <div id="twenty-btn-div">
                    <button type="button" id="twenty-btn">
                      CONTINUE
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p id="twenty-paragraph">Copyright © 2022. All rights reserved.</p>
      </div>
    </>
  );
}
