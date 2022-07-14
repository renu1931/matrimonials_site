import React from "react";
import Image from "next/image";
import agarwal from "../public/Images/agarwal.png";
import twenty from "../public/Images/twenty.webp";
import Link from "next/link";

export default function Agarwal20() {
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
          Great! You have completed <span>20%</span>
        </h3>
        <div className="row pt-4 mb-5" id="row-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center " id="sixty-image-div">
                <Image src={twenty} alt="20%-page-image" />
                <p id="twenty-down">
                  Trusted by Agarwals across <br />
                  the world!
                </p>
              </div>
              <div className="col-md-8">
                <h5 id="twenty-h5">
                  Please provide us with your basic details
                </h5>

                <div className="d-flex justify-content-around">
                  <div>
                    <p id="twenty-para2">Date of birth</p>
                  </div>
                  <div>
                    <input
                      type="date"
                      placeholder="DD/MM/YYYY"
                      id="twenty-input"
                    />
                    <p id="twenty-p">
                      Your birth date will help us to find better matches
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="twenty-para3">Religion</p>
                  <select id="twenty-select">
                    <option>Select Religion</option>
                    <option>Hindu</option>
                    <option>Jain</option>
                  </select>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="twenty-para4">Subcaste</p>
                  <select id="twenty-select2">
                    <option>Bisa</option>
                    <option>Poddar</option>
                    <option>Others</option>
                    <option>Don't wish to specify</option>
                    <option>Don't Know my sub-caste</option>
                  </select>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="twenty-para3">Mother Tongue</p>
                  <select id="twenty-select3">
                    <option>Hindi</option>
                    <option>Punjabi</option>
                    <option>Gujrati</option>
                    <option>Rajasthani</option>
                    <option>Benjali</option>
                    <option>Haryanvi</option>
                    <option>Angika</option>
                    <option>Arunachali</option>
                    <option>Assamese</option>
                    <option>Awadhi</option>
                    <option>Badaga</option>
                    <option>Benjali</option>
                    <option>Bhojpuri</option>
                    <option>Bihari</option>
                    <option>Chatisgarhi</option>
                    <option>Dogri</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Garhwali</option>
                    <option>Garo</option>
                    <option>Gujrati</option>
                    <option>Haryanvi</option>
                    <option>Himachali/Pahari</option>
                    <option>Hindi</option>
                    <option>Kanauji</option>
                    <option>Kannada</option>
                    <option>Kashmiri</option>
                    <option>Khandesi</option>
                    <option>Khashi</option>
                    <option>Konkani</option>
                    <option>Kushali</option>
                    <option>Kumoani</option>
                    <option>Kutchi</option>
                    <option>Ladacki</option>
                    <option>Lepcha</option>
                    <option>Magahi</option>
                    <option>Maithili</option>
                    <option>Malayalam</option>
                    <option>Manipuri</option>
                    <option>Marathi</option>
                    <option>Marwari</option>
                    <option>Miji</option>
                    <option>Monpa</option>
                    <option>Nepali</option>
                    <option>Nicobarese</option>
                    <option>Oriya</option>
                    <option>Punjabi</option>
                    <option>Rajasthani</option>
                    <option>Sanskrit</option>
                    <option>Santhali</option>
                    <option>Sindhi</option>
                    <option>Sourashtra</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Tripuri</option>
                    <option>Tulu</option>
                    <option>Urdu</option>
                  </select>
                </div>
                <div className="d-flex justify-content-around">
                  <p id="twenty-para5">Email id</p>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    id="twenty-input-div"
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <p id="twenty-para5">Password</p>
                  <input
                    placeholder="Enter Your Password"
                    type="password"
                    id="twenty-input-div"
                  />
                </div>
                <Link href="/Agarwal40">
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
