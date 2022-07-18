import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import black from "../public/Images/black.svg";
import black_1 from "../public/Images/black_1.svg";
import weeding_1 from "../public/Images/wedding_1.jpg";
import weeding_2 from "../public/Images/wedding_2.jpeg";
import weeding_3 from "../public/Images/weeding_3.jpg";
import weeding_4 from "../public/Images/weeding_4.jpeg";
import weeding_5 from "../public/Images/weeding_5.jpg";
import weeding_6 from "../public/Images/weeding_6.jpg";
import weeding_7 from "../public/Images/weeding_7.jpg";
import weeding_8 from "../public/Images/weeding_8.webp";
import girl_1 from "../public/Images/girl_1.jpg";
import girl_2 from "../public/Images/girl_2.jpg";
import girl_3 from "../public/Images/girl_3.jpg";
import girl_4 from "../public/Images/girl_4.jpg";
import girl_5 from "../public/Images/girl_5.jpg";
import boy_1 from "../public/Images/boy_1.jpg";
import boy_2 from "../public/Images/boy_2.jpg";
import boy_3 from "../public/Images/boy_3.jpg";
import boy_4 from "../public/Images/boy_4.jpg";
import boy_5 from "../public/Images/boy_5.jpg";
import agar_matromonial from "../public/Images/agar_matromonial.webp";
import { useForm } from "react-hook-form";

export default function SeachInfo() {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const [view5, setView5] = useState(false);
  const [view6, setView6] = useState(false);
  const [view7, setView7] = useState(false);
  const [view8, setView8] = useState(false);
  const [view9, setView9] = useState(false);
  const [view10, setView10] = useState(false);

  function viewProfile1() {
    setView1(!view1);
  }
  function viewProfile2() {
    setView2(!view2);
  }
  function viewProfile3() {
    setView3(!view3);
  }
  function viewProfile4() {
    setView4(!view4);
  }
  function viewProfile5() {
    setView5(!view5);
  }
  function viewProfile6() {
    setView6(!view6);
  }
  function viewProfile7() {
    setView7(!view7);
  }
  function viewProfile8() {
    setView8(!view8);
  }
  function viewProfile9() {
    setView9(!view9);
  }
  function viewProfile10() {
    setView10(!view10);
  }

  const [inputs, setInputs] = useState({});
  const [formError, setFormError] = useState({});
  const handleChange = (event) => {
    event.preventDefault();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  console.log("bvdshjbvgfsdhj====>", inputs);
  const formSubmit = () => {
    setInputs({
      profile: "",
      gender: "",
      name: "",
      mobile: "",
    });
    localStorage.setItem("inputs", JSON.stringify(inputs));
    setFormError(inputs);
  };

  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  const onSubmit = (data) => console.log(data);
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.profile) {
  //     errors.profile = "Profile is required";
  //   } else if (values === profile) {
  //     errors.profile = "";
  //   }
  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!values.mobile) {
  //     errors.mobile = "Mobile is required";
  //   }

  //   console.log(" error =======>", errors);
  //   return errors;
  // };

  return (
    <>
      {/*photos section start */}
      <div className="container-fluid m-0" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 p-0">
                <Image src={weeding_1} alt="image-tag" />
              </div>
              <div className="col-md-3 p-0">
                <Image src={weeding_2} alt="image-tag" height={1000} />
              </div>
              <div className="col-md-3 p-0">
                <Image src={weeding_3} alt="image-tag" />
              </div>
              <div className="col-md-3 p-0">
                <Image src={weeding_4} alt="image-tag" height={500} />
              </div>
              <div className="col-md-3 p-0" id="weeding-6">
                <Image src={weeding_6} alt="image-tag" />
              </div>
              <div className="col-md-3 p-0" id="weeding-5">
                <Image src={weeding_5} alt="image-tag" height={750} />
              </div>
              <div className="col-md-3 p-0" id="weeding-7">
                <Image src={weeding_7} alt="image-tag" height={580} />
              </div>
              <div className="col-md-3 p-0" id="weeding-8">
                <Image src={weeding_8} alt="image-tag" height={701} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*photos section complete*/}

      {/*photos section complete*/}
      <div className="container px-5 py-5" id="free-register">
        <div>
          <h2 id="free-reg-h2">
            No. 1 and official matrimony service exclusively for Agarwals
          </h2>
          <h3 id="free-reg-h3">Meet your soulmate here!</h3>
        </div>
        <div className="row" id="free-reg-row">
          <div className="col-md-3" id="free-col">
            <h6 id="free-reg-h6">Matrimony Profile For</h6>
            <input type="text" placeholder="Enter Profile" id="free-input" />
          </div>
          <div className="col-md-3" id="free-col">
            <h6 id="free-reg-h6">Name</h6>
            <input type="text" placeholder="Enter Name" id="free-input" />
          </div>
          <div className="col-md-3">
            <h6 id="free-reg-h6">Mobile Number</h6>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              maxLength={10}
              id="free-input"
            />
          </div>
          <div className="col-md-3 p-0">
            <button id="reg-btn">Register Free</button>
          </div>
        </div>
        <p id="free-reg-p">
          By clicking on Register Free, you agree to
          <Link href="https://www.agarwalmatrimony.com/site/index.php?act=termsandconditions">
            <span id="free-reg-span">Terms & Conditions</span>
          </Link>
          and3
          <Link href="https://www.agarwalmatrimony.com/site/index.php?act=privacypolicy">
            <span id="free-reg-span">Privacy Policy</span>
          </Link>
        </p>
      </div>
      {/*photos section complete*/}
      {/*Agarwal Brides section start */}
      <div>
        <h5 id="agar-h5" className="pl-5 ml-5">
          Agarwal Matrimony
        </h5>
        <p id="agar-p" className="pl-5 ml-5">
          1000+ Agarwal Brides & Grooms
        </p>
      </div>

      {/*Agarwal Brides section complete */}

      <ul
        className="nav nav-pills mb-3 ml-5 pl-5 mt-4"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Brides
          </a>
        </li>
        <li className="nav-item" id="groom-btn">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Grooms
          </a>
        </li>
      </ul>
      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="col-md-12">
                <div className="row mt-3" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={girl_1} alt="bride" height={1900} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AGR126754</h5>
                    <p id="bride-p">22yrs, 5ft 7 in</p>
                    <p id="bride-p">Student,BBA</p>
                    <p id="bride-p">Haridwar,Uttrakhand,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile1}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show bride1 profile functionality start */}
                <section
                  style={{
                    display: view1 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride1-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row mb-5 mt-2">
                            <Image
                              src={girl_1}
                              alt="bride1-image"
                              height={80}
                              width={80}
                            />
                            <p onClick={viewProfile1}>
                              <i
                                className="fa-solid fa-xmark"
                                id="bride1-cross"
                              ></i>
                            </p>

                            <div className="col-md-8">
                              <h5 id="bride1-h5">
                                Join Us and view her profile now!
                              </h5>

                              <div className="d-flex justify-content-end">
                                <p id="bride1-p">Already a member?</p>
                                <button id="bride1-btn">Log In</button>
                              </div>
                            </div>
                          </div>

                          <input
                            type="text"
                            placeholder="Profile Created By"
                            id="bride1-input"
                            onChange={handleChange}
                            value={inputs.profile}
                            name="profile"
                            {...register("profile", { required: true })}
                          />

                          <small
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          ></small>

                          <br />
                          <span>Select Gender</span>
                          <br />
                          <div className="d-flex" id="bride1-radio mb-2">
                            <p>
                              <input type="radio" id="html" name="gender" /> 
                              <label
                                className="pr-3"
                                name="gender"
                                {...register("gender", { required: true })}
                              >
                                Male
                              </label>
                            </p>
                            <p>
                              <input type="radio" id="css" name="gender" /> 
                              <label
                                name="gender"
                                {...register("gender", { required: true })}
                              >
                                Female
                              </label>
                            </p>
                          </div>

                          <input
                            type="text"
                            placeholder="Name"
                            id="bride1-input"
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            {...register({ required: true })}
                          />
                          <br />
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          ></span>
                          <br />
                          <span>Code</span>
                          <br />
                          <select id="bride1-select">
                            <option>+91 (India)</option>
                            <option>+1 (United States of America)</option>
                            <option>+971 (United Arab of Emirates)</option>
                            <option>+60 (Malaysia)</option>
                            <option>+61 (Australia)</option>
                            <option>+966 (Saudi Arabia)</option>
                            <option>+1 (Canada)</option>
                            <option>+65 (Singapore)</option>
                            <option>+965 (Kuwait)</option>
                            <option>+93 (Afganistan)</option>
                            <option>+355 (Albania)</option>
                            <option>+213 (Algeria)</option>
                            <option>+684 (American Samoa)</option>
                            <option>+376 (Andorra)</option>
                            <option>+244 (Angola)</option>
                            <option>+1264 (Anguilla)</option>
                            <option>+1 (Antartica)</option>
                            <option>+1268 (Antigua and Barb8uda)</option>
                            <option>+54 (Argentina)</option>
                            <option>+374 (Armenia)</option>
                            <option>+297 (Aruba)</option>
                            <option>+61 (Australia)</option>
                            <option>+43 (Austria)</option>
                            <option>+994 (Ajerbaijan)</option>
                            <option>+973 (Bahrain)</option>
                            <option>+880 (Bangladesh)</option>
                            <option>+885 (Cambodia)</option>
                            <option>+235 (Chad)</option>
                            <option>+45 (Denmark)</option>
                            <option>+20 (Egypt)</option>
                            <option>+679 (Fiji)</option>
                            <option>+33 (France)</option>
                            <option>+241 (Gabon)</option>
                            <option>+852 (Hong Kong)</option>
                            <option>+354 (Iceland)</option>
                            <option>+98 (Iran)</option>
                            <option>+81 (Japan)</option>
                            <option>+218 (Libya)</option>
                            <option>+223 (Mali)</option>
                            <option>+356 (Malta)</option>
                            <option>+977 (Nepal)</option>
                            <option>+92 (Pakistan)</option>
                            <option>+7 (Russia)</option>
                            <option>+685 (Samoa)</option>
                            <option>+228 (Togo)</option>
                            <option>+678 (Vanuatu)</option>
                          </select>
                          <input
                            placeholder="Enter Mobile Number"
                            id="bride1-input1"
                            maxLength={10}
                            name="mobile"
                            onChange={handleChange}
                            value={inputs.mobile}
                            {...register("mobile", { required: true })}
                          />
                          <br />
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          ></span>

                          <p id="bride1-p">
                            By clicking Register Now, you agree to our
                            <br />
                            <span id="bride1-span1">Terms & Conditions</span>
                            and
                            <span id="bride1-span1">privacy policy</span>
                          </p>
                          <Link href="/Agarwal20">
                            <div className="text-center">
                              <button
                                id="bride1-btn1"
                                type="submit"
                                onClick={formSubmit}
                              >
                                Join Now
                              </button>
                            </div>
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show bride profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={girl_2} alt="bride" height={800} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AGR678493</h5>
                    <p id="bride-p">26yrs, 5ft 4 in</p>
                    <p id="bride-p">B.Com</p>
                    <p id="bride-p">Haryana,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile2}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show bride2 profile functionality start */}
                <section
                  style={{
                    display: view2 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride2-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={girl_2}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile2}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input type="radio" id="html" name="fav_language" />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input type="radio" id="css" name="fav_language" /> {" "}
                            <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions</span>
                          and
                          <span id="bride1-span1">privacy policy</span>
                        </p>

                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show bride2 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={girl_3} alt="bride" height={400} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AGR908752</h5>
                    <p id="bride-p">28yrs, 5ft 3 in</p>
                    <p id="bride-p">MA</p>
                    <p id="bride-p">Delhi,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile3}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show bride3 profile functionality start */}
                <section
                  style={{
                    display: view3 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride3-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={girl_3}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile3}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input type="radio" id="html" name="fav_language" />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input type="radio" id="css" name="fav_language" /> {" "}
                            <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="name"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions</span>
                          and
                          <span id="bride1-span1">privacy policy</span>
                        </p>

                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show bride3 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={girl_4} alt="bride" />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AGR434356</h5>
                    <p id="bride-p">24yrs, 5ft 6 in</p>
                    <p id="bride-p">M.com</p>
                    <p id="bride-p">Rajasthan,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile4}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show bride4 profile functionality start */}
                <section
                  style={{
                    display: view4 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride4-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={girl_4}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile4}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input type="radio" id="html" name="fav_language" />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input type="radio" id="css" name="fav_language" /> {" "}
                            <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions</span>
                          and
                          <span id="bride1-span1">privacy policy</span>
                        </p>

                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show bride4 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={girl_5} alt="bride" />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG564530</h5>
                    <p id="bride-p">23yrs, 5ft 5 in</p>
                    <p id="bride-p">BCA</p>
                    <p id="bride-p">Chandigarh,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile5}>
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*hide and show bride5 profile functionality start */}
            <section
              style={{
                display: view5 ? "block" : "none",
              }}
            >
              <div className="container" id="bride5-container">
                <div className="row">
                  <div className="col-md-12 pl-5">
                    <div className="row mb-5 mt-2">
                      <Image
                        src={girl_5}
                        alt="bride1-image"
                        height={80}
                        width={80}
                      />
                      <p onClick={viewProfile5}>
                        <i className="fa-solid fa-xmark" id="bride1-cross"></i>
                      </p>
                      <div className="col-md-8">
                        <h5 id="bride1-h5">
                          Join Us and view her profile now!
                        </h5>

                        <div className="d-flex justify-content-end">
                          <p id="bride1-p">Already a member?</p>
                          <button id="bride1-btn">Log In</button>
                        </div>
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Profile Created By"
                      id="bride1-input"
                      name="profile"
                      onChange={handleChange}
                      value={inputs.profile}
                    />
                    <br />
                    <span>Select Gender</span>
                    <br />
                    <div className="d-flex" id="bride1-radio">
                      <p>
                        <input type="radio" id="html" name="fav_language" /> 
                        <label className="pr-3">Male</label>
                        <br /> 
                      </p>
                      <p>
                        <input type="radio" id="css" name="fav_language" /> 
                        <label>Female</label>
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      id="bride1-input"
                      name="name"
                      onChange={handleChange}
                      value={inputs.name}
                    />
                    <br />
                    <span>Code</span>
                    <br />
                    <select id="bride1-select">
                      <option>+91 (India)</option>
                      <option>+1 (United States of America)</option>
                      <option>+971 (United Arab of Emirates)</option>
                      <option>+60 (Malaysia)</option>
                      <option>+61 (Australia)</option>
                      <option>+966 (Saudi Arabia)</option>
                      <option>+1 (Canada)</option>
                      <option>+65 (Singapore)</option>
                      <option>+965 (Kuwait)</option>
                      <option>+93 (Afganistan)</option>
                      <option>+355 (Albania)</option>
                      <option>+213 (Algeria)</option>
                      <option>+684 (American Samoa)</option>
                      <option>+376 (Andorra)</option>
                      <option>+244 (Angola)</option>
                      <option>+1264 (Anguilla)</option>
                      <option>+1 (Antartica)</option>
                      <option>+1268 (Antigua and Barb8uda)</option>
                      <option>+54 (Argentina)</option>
                      <option>+374 (Armenia)</option>
                      <option>+297 (Aruba)</option>
                      <option>+61 (Australia)</option>
                      <option>+43 (Austria)</option>
                      <option>+994 (Ajerbaijan)</option>
                      <option>+973 (Bahrain)</option>
                      <option>+880 (Bangladesh)</option>
                      <option>+885 (Cambodia)</option>
                      <option>+235 (Chad)</option>
                      <option>+45 (Denmark)</option>
                      <option>+20 (Egypt)</option>
                      <option>+679 (Fiji)</option>
                      <option>+33 (France)</option>
                      <option>+241 (Gabon)</option>
                      <option>+852 (Hong Kong)</option>
                      <option>+354 (Iceland)</option>
                      <option>+98 (Iran)</option>
                      <option>+81 (Japan)</option>
                      <option>+218 (Libya)</option>
                      <option>+223 (Mali)</option>
                      <option>+356 (Malta)</option>
                      <option>+977 (Nepal)</option>
                      <option>+92 (Pakistan)</option>
                      <option>+7 (Russia)</option>
                      <option>+685 (Samoa)</option>
                      <option>+228 (Togo)</option>
                      <option>+678 (Vanuatu)</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Enter Mobile Number"
                      id="bride1-input1"
                      maxLength={10}
                      name="mobile"
                      onChange={handleChange}
                      value={inputs.mobile}
                    />

                    <p id="bride1-p">
                      By clicking Register Now, you agree to our
                      <br />
                      <span id="bride1-span1">Terms & Conditions </span> and
                      <span id="bride1-span1">privacy policy</span>
                    </p>

                    <Link href="/Agarwal20">
                      <div className="text-center">
                        <button id="bride1-btn1" onClick={formSubmit}>
                          Join Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/*hide and show bride5 profile functionality complete */}
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="col-md-12">
                <div className="row mt-3" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={boy_1} alt="bride" height={700} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG009754</h5>
                    <p id="bride-p">23yrs, 5ft 11 in</p>
                    <p id="bride-p">Student,BBA</p>
                    <p id="bride-p">Uttrakhand,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile6}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show groom1 profile functionality start */}
                <section
                  style={{
                    display: view6 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride1-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={boy_1}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile6}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input
                              type="radio"
                              id="html"
                              name="fav_language"
                              value="HTML"
                            />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="css"
                              name="fav_language"
                              value="CSS"
                            />
                              <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions</span>
                          and
                          <span id="bride1-span1">privacy policy</span>
                        </p>
                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show groom1 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={boy_2} alt="bride" height={700} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG956493</h5>
                    <p id="bride-p">22yrs, 5ft 7 in</p>
                    <p id="bride-p">BCA</p>
                    <p id="bride-p">Delhi,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile7}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show groom2 profile functionality start */}
                <section
                  style={{
                    display: view7 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride2-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={boy_2}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile7}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input
                              type="radio"
                              id="html"
                              name="fav_language"
                              value="HTML"
                            />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="css"
                              name="fav_language"
                              value="CSS"
                            />
                              <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions </span> and
                          <span id="bride1-span1">privacy policy</span>
                        </p>
                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show groom2 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={boy_3} alt="bride" height={500} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG888752</h5>
                    <p id="bride-p">27yrs, 5ft 3 in</p>
                    <p id="bride-p">BSC</p>
                    <p id="bride-p">Dharadhun,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile8}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show groom3 profile functionality start */}
                <section
                  style={{
                    display: view8 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride3-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={boy_3}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile8}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input
                              type="radio"
                              id="html"
                              name="fav_language"
                              value="HTML"
                            />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="css"
                              name="fav_language"
                              value="CSS"
                            />
                              <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions </span> and
                          <span id="bride1-span1">privacy policy</span>
                        </p>
                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show groom3 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={boy_4} alt="bride" />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG235432</h5>
                    <p id="bride-p">24yrs, 5ft 10 in</p>
                    <p id="bride-p">MSC</p>
                    <p id="bride-p">Haryana,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile9}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show groom4 profile functionality start */}
                <section
                  style={{
                    display: view9 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride4-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={boy_4}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile9}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input
                              type="radio"
                              id="html"
                              name="fav_language"
                              value="HTML"
                            />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="css"
                              name="fav_language"
                              value="CSS"
                            />
                              <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions </span> and
                          <span id="bride1-span1">privacy policy</span>
                        </p>
                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show groom4 profile functionality complete */}
                <div className="row my-5" id="bride-row">
                  <div className="col-md-3 p-0">
                    <Image src={boy_5} alt="bride" height={280} width={280} />
                  </div>
                  <div className="col-md-6 pt-3 px-5">
                    <h5 id="bride-h5">AG6565454</h5>
                    <p id="bride-p">25yrs, 5ft 8 in</p>
                    <p id="bride-p">B.Com</p>
                    <p id="bride-p">Uttranchal Pradesh,INDIA</p>
                  </div>
                  <div className="col-md-3" id="bride-profile-div">
                    <button id="bride-profile" onClick={viewProfile10}>
                      View Profile
                    </button>
                  </div>
                </div>
                {/*hide and show groom5 profile functionality start */}
                <section
                  style={{
                    display: view10 ? "block" : "none",
                  }}
                >
                  <div className="container" id="bride5-container">
                    <div className="row">
                      <div className="col-md-12 pl-5">
                        <div className="row mb-5 mt-2">
                          <Image
                            src={boy_5}
                            alt="bride1-image"
                            height={80}
                            width={80}
                          />
                          <p onClick={viewProfile10}>
                            <i
                              className="fa-solid fa-xmark"
                              id="bride1-cross"
                            ></i>
                          </p>
                          <div className="col-md-8">
                            <h5 id="bride1-h5">
                              Join Us and view her profile now!
                            </h5>

                            <div className="d-flex justify-content-end">
                              <p id="bride1-p">Already a member?</p>
                              <button id="bride1-btn">Log In</button>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Profile Created By"
                          id="bride1-input"
                          name="profile"
                          onChange={handleChange}
                          value={inputs.profile}
                        />
                        <br />
                        <span>Select Gender</span>
                        <br />
                        <div className="d-flex" id="bride1-radio">
                          <p>
                            <input
                              type="radio"
                              id="html"
                              name="fav_language"
                              value="HTML"
                            />
                              <label className="pr-3">Male</label>
                            <br /> 
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="css"
                              name="fav_language"
                              value="CSS"
                            />
                              <label>Female</label>
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Name"
                          id="bride1-input"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                        <br />
                        <span>Code</span>
                        <br />
                        <select id="bride1-select">
                          <option>+91 (India)</option>
                          <option>+1 (United States of America)</option>
                          <option>+971 (United Arab of Emirates)</option>
                          <option>+60 (Malaysia)</option>
                          <option>+61 (Australia)</option>
                          <option>+966 (Saudi Arabia)</option>
                          <option>+1 (Canada)</option>
                          <option>+65 (Singapore)</option>
                          <option>+965 (Kuwait)</option>
                          <option>+93 (Afganistan)</option>
                          <option>+355 (Albania)</option>
                          <option>+213 (Algeria)</option>
                          <option>+684 (American Samoa)</option>
                          <option>+376 (Andorra)</option>
                          <option>+244 (Angola)</option>
                          <option>+1264 (Anguilla)</option>
                          <option>+1 (Antartica)</option>
                          <option>+1268 (Antigua and Barb8uda)</option>
                          <option>+54 (Argentina)</option>
                          <option>+374 (Armenia)</option>
                          <option>+297 (Aruba)</option>
                          <option>+61 (Australia)</option>
                          <option>+43 (Austria)</option>
                          <option>+994 (Ajerbaijan)</option>
                          <option>+973 (Bahrain)</option>
                          <option>+880 (Bangladesh)</option>
                          <option>+885 (Cambodia)</option>
                          <option>+235 (Chad)</option>
                          <option>+45 (Denmark)</option>
                          <option>+20 (Egypt)</option>
                          <option>+679 (Fiji)</option>
                          <option>+33 (France)</option>
                          <option>+241 (Gabon)</option>
                          <option>+852 (Hong Kong)</option>
                          <option>+354 (Iceland)</option>
                          <option>+98 (Iran)</option>
                          <option>+81 (Japan)</option>
                          <option>+218 (Libya)</option>
                          <option>+223 (Mali)</option>
                          <option>+356 (Malta)</option>
                          <option>+977 (Nepal)</option>
                          <option>+92 (Pakistan)</option>
                          <option>+7 (Russia)</option>
                          <option>+685 (Samoa)</option>
                          <option>+228 (Togo)</option>
                          <option>+678 (Vanuatu)</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Enter Mobile Number"
                          id="bride1-input1"
                          maxLength={10}
                          name="mobile"
                          onChange={handleChange}
                          value={inputs.mobile}
                        />

                        <p id="bride1-p">
                          By clicking Register Now, you agree to our
                          <br />
                          <span id="bride1-span1">Terms & Conditions </span> and
                          <span id="bride1-span1">privacy policy</span>
                        </p>
                        <Link href="/Agarwal20">
                          <div className="text-center">
                            <button id="bride1-btn1" onClick={formSubmit}>
                              Join Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {/*hide and show groom5 profile functionality complete */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Agarwal matrimony section start */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5 px-5">
            <div className="row px-5">
              <div className="col-md-12 px-5 py-5">
                <h5 id="bride-h5">Agarwal Matrimony App</h5>
                <p id="bride-p">Over 10k+ installs</p>
                <p id="bride-p">View matches on to go!</p>
                <p id="bride-p">Stay updated & get notified instantly.</p>
                <div className="justify-content-between d-flex mt-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.agarwalmatrimony&utm_source=homepage_AndroidAppOn&utm_medium=CBS_AppPromo&utm_campaign=button">
                    <Image src={black} alt="black-icon" id="sucess-black" />
                  </Link>
                  <Link href="https://apps.apple.com/us/app/communitymatrimony/id1038522803?ls=1&utm_campaign=button&utm_medium=CBS_AppPromo&utm_source=homepage_IosAppOn">
                    <Image src={black_1} alt="black-icon" id="sucess-black" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <Image src={agar_matromonial} alt="aggarwal" height={400} />
          </div>
        </div>
      </div>

      {/*Agarwal matrimony section complete */}

      {/*footer section start */}
      <div className="container text-center pb-5">
        <div className="row">
          <div className="col-md-3">
            <h6 id="footer-h6">Need Help?</h6>
            <p id="footer-p">Member Login</p>
            <p id="footer-p">Sign Up</p>
            <Link href="https://www.shaadi.com/search">
              <p id="footer-p">Partner Search</p>
            </Link>
            <Link href="https://www.shaadi.com/introduction/index/how-to-use">
              <p id="footer-p">How to Use Shaadi.com</p>
            </Link>
            <p id="footer-p">Premium Memberships</p>
            <p id="footer-p">Customer Support</p>
            <p id="footer-p">Site Map</p>
          </div>
          <div className="col-md-3">
            <h6 id="footer-h6">Company</h6>
            <p id="footer-p">About Us</p>
            <p id="footer-p">Shaadi Blog</p>
            <p id="footer-p">Careers</p>
            <p id="footer-p">Awards & Recognition</p>
            <p id="footer-p">Cov-Aid</p>
            <p id="footer-p">Contact Us</p>
          </div>
          <div className="col-md-3">
            <h6 id="footer-h6">Privacy & You</h6>
            <p id="footer-p">Terms of Use</p>
            <p id="footer-p">Privacy Policy</p>
            <p id="footer-p">Be Safe Online</p>
            <p id="footer-p">Report Misuse</p>
          </div>
          <div className="col-md-3">
            <h6 id="footer-h6">More</h6>
            <p id="footer-p">VIP Shaadi</p>
            <p id="footer-p">Select Shaadi</p>
            <p id="footer-p">Sangam</p>
            <p id="footer-p">Shaadi Centres</p>
            <p id="footer-p">Success Stories</p>
            <p id="footer-p">Shaadi Meet</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p id="fotter-p1">
              © 1996-2022 Shaadi.com, The World&#39;s Leading Matchmaking
              Service™
            </p>
          </div>
          <div className="col-md-4 m-auto">
            <p id="fotter-p1">
              Passionately created by
              <span id="sucess-btn"> People Group ➤</span>
            </p>
          </div>
        </div>
      </div>
      {/*footer section complete */}
    </>
  );
}
