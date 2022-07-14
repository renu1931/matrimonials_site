import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import home from "../public/Images/home.webp";
import shadi_logo from "../public/Images/shadi_logo.png";
import Home_Couple from "../public/Images/Home_Couple.png";
import shadi_blue from "../public/Images/shadi_blue.svg";
import black_1 from "../public/Images/black_1.svg";
import black from "../public/Images/black.svg";
import couple_1 from "../public/Images/couple_1.jpg";
import couple_2 from "../public/Images/couple_2.jpg";
import couple_3 from "../public/Images/couple_3.jpg";
import couple_4 from "../public/Images/couple_4.jpg";
import couple_5 from "../public/Images/couple_5.jpg";
import couple_6 from "../public/Images/couple_6.jpg";
import couple_7 from "../public/Images/couple_7.jpg";
import couple_8 from "../public/Images/couple_8.jpg";
import couple_9 from "../public/Images/couple_9.jpg";
import couple_10 from "../public/Images/couple_10.jpg";
import couple_11 from "../public/Images/couple_11.jpg";
import couple_12 from "../public/Images/couple_12.jpg";
import spic from "../public/Images/spic.jpg";
import Search from "./search";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function HomePage() {
  const [showMe, setShowMe] = useState(false);
  const [helpMe, setHelpMe] = useState(false);
  const [account, setAccount] = useState(false);
  const [basic, setBasic] = useState(false);
  const [backToTopButton, setBackToTopButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function toggle() {
    setShowMe(!showMe);
  }
  function helpToggle() {
    setHelpMe(!helpMe);
  }
  function accountDetail() {
    setAccount(!account);
  }
  function basicDetails() {
    setBasic(!basic);
  }
  return (
    <>
      {/*background image section start */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div>
          <Image src={home} alt="home_banner" layout="intrinsic" />
        </div>
        {/*background image section complete*/}
        {/*navbar section start*/}
        <nav className="navbar  justify-content-around py-4" id="navbar">
          <a className="navbar-brand">
            <Image
              src={shadi_logo}
              alt="shadi
                       -logo"
            />
          </a>
          <ul className="navbar-nav flex-row">
            <li className="nav-item active px-5" onClick={toggle}>
              <a className="nav-link" href="#" id="navbar-a">
                Login <i className="fa-solid fa-angle-down" id="down-icon"></i>
              </a>
            </li>

            <li className="nav-item active" onClick={helpToggle}>
              <a className="nav-link" href="#" id="navbar-a">
                <i className="fa fa-circle-user" id="user-icon"></i> Help
                <i className="fa-solid fa-angle-down" id="down-icon"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/*navbar section complete*/}
        {/*toggle div start */}
        <section
          style={{
            display: showMe ? "block" : "none",
          }}
          id="hide-show"
        >
          <div className="container py-4">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <Image src={spic} alt="s-icon -pic" height={75} width={75} />
                </div>
                <p id="toggle-cross" onClick={toggle}>
                  <i className="fa-solid fa-xmark"></i>
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="text-center pt-2 pb-4" id="toggle-h3">
                    Welcome back! Please Login
                  </h3>
                  <h6 id="toggle-h6"> Email ID</h6>
                  <input
                    className={classNames("toggle-h6", {
                      "is-invalid": errors.email,
                    })}
                    id="toggle-input"
                    placeholder="Enter Email ID"
                    {...register("email", {
                      required: "This Field is Required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please enter a valid e-mail address",
                      },
                    })}
                    name="email"
                  />
                  {errors.email && (
                    <div id="homepage-small">{errors.email.message}</div>
                  )}

                  <h6 id="toggle-h6">Password</h6>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="toggle-input"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                    name="password"
                  />
                  <div id="homepage-small">
                    {errors.password?.type === "required" &&
                      "Enter Your Password"}
                  </div>
                  <div id="homepage-small">
                    {errors.password?.type === "minLength" &&
                      "Minimum 6 Characters Required"}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="checkbox"
                        value="stay"
                        {...register("term&condition", {
                          required: true,
                        })}
                        name="tnc"
                      />
                      <label className="toogle-stay">
                        Stay Logged in <i className="fa-solid fa-question"></i>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <Link href="https://my.shaadi.com/forgot-password/user">
                        <button id="toggle-btn">
                          Forget Password
                          <i className="fa-solid fa-question"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <button id="toggle-btn1" type="submit">
                    Login
                  </button>
                  <p id="toggle-or">OR</p>
                  <button id="toggle-btn2">Login With OTP</button>
                  <h6 id="toggle-shaddi">
                    New to Shaadi? <span>Sign Up Free</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </h6>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*toggle div complete */}
      {/*help toggle div start */}
      <section
        style={{
          display: helpMe ? "block" : "none",
        }}
        id="help-hide-show"
      >
        <div className="container py-2">
          <div className="row">
            <div className="col-md-9 " id="help-toggle-nine">
              <p id="help-toggle-p"> India : +91-7862889999</p>
              <p id="help-toggle-p">
                For regional offices
                <Link href="https://www.shaadi.com/contact-us">
                  <span id="sucess-btn"> click here </span>
                </Link>
                We are Back! Our phone services have resumed and you can now
                call us between 10am - 7pm (IST). You may experience marginally
                longer wait times in this period, but that will be fixed soon.
                For Instant Support, we recommend that you connect with us on
                Chat & we will be there to assist you. #StrongerTogether
              </p>
              <p id="help-toggle-p">
                To get instant help
                <Link href="https://support.shaadi.com/support/home">
                  <span id="sucess-btn"> click here </span>
                </Link>
              </p>
            </div>
            <div className="col-md-3">
              <p id="help-toggle-cross" onClick={helpToggle}>
                <i className="fa-solid fa-xmark"></i>
              </p>
              <p id="help-toggle-p">Help Desk</p>
              <p id="help-toggle-p">Be Safe Online</p>
              <p id="help-toggle-p">Shaadi Meet</p>
            </div>
          </div>
        </div>
      </section>
      {/*help toggle div complete */}
      {/*visiblity btn start */}
      {backToTopButton && (
        <div id="visible-btn" onClick={scrollUp}>
          <i className="icon fa-solid fa-angle-up"></i>
        </div>
      )}

      {/*visiblity btn complete */}
      {/*matching service section start */}
      <div
        className="container text-white"
        style={{
          position: "absolute",
          right: "0",
          left: "0",
          top: "39%",
        }}
      >
        <div className="text-center">
          <h2 id="matching-h2">The World&apos;s No.1 Matchmaking Service</h2>
          <h4 id="matching-h4">Search by City, Profession & Community</h4>
        </div>
        <div
          className="row pb-4 pt-4 m-auto text-white"
          style={{ backgroundColor: "#00000073", borderRadius: "5px" }}
        >
          <div className="col-md-2">
            <span className="spanTag">I&apos;m looking for</span>
            <br />
            <select
              placeholder="woman"
              className="genderName w-100 py-2"
              name="role"
            >
              <option>Woman</option>
              <option>Man</option>
            </select>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-5">
                <span className="spanTag">aged</span>
                <br />
                <select
                  placeholder="20"
                  className="select-age w-100 py-2"
                  name="role"
                >
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                </select>
              </div>
              <div className="col-md-2">
                <span className="spanTag"></span>
                <br />
                to
              </div>
              <div className="col-md-5">
                <br />
                <select
                  placeholder="20"
                  className="select-age w-100 py-2"
                  name="role"
                >
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <span className="spanTag">of religion</span>
            <br />
            <select
              placeholder="select"
              className="genderName w-100 py-2"
              name="role"
            >
              <option>Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Parsi</option>
              <option>Jain</option>
              <option>Buddhist</option>
              <option>Jewish</option>
              <option>No religion</option>
              <option>Spiritual</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-3">
            <span className="spanTag">and mother tongue</span>
            <br />
            <select
              placeholder="woman"
              className="genderName w-100 py-2"
              name="role"
            >
              <option>Select</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Punjabi</option>
              <option>Bengali</option>
              <option>Gujrati</option>
              <option>Urdu</option>
              <option>Telugu</option>
              <option>Kannada</option>
              <option>English</option>
              <option>Tamil</option>
              <option>Oriya</option>
              <option>Marwari</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Arunachali</option>
              <option>Assamese</option>
              <option>Awadhi</option>
              <option>Baluchi</option>
              <option>Bengali</option>
              <option>Bhojpuri</option>
              <option>Bhutia</option>
              <option>Brahui</option>
              <option>Brij</option>
              <option>Burmuse</option>
              <option>Chattisgarhi</option>
              <option>Chinese</option>
              <option>Coorgi</option>
              <option>Dogri</option>
              <option>English</option>
              <option>French</option>
              <option>Garhwali</option>
              <option>Garo</option>
              <option>Gujrati</option>
              <option>Haryanvi</option>
              <option>Himachali/Pahari</option>
              <option>Hindi</option>
              <option>Hindko</option>
              <option>Kakbarak</option>
              <option>Kanauji</option>
              <option>Kannada</option>
              <option>Kashmiri</option>
              <option>Khandesi</option>
              <option>Khasi</option>
              <option>Khonkani</option>
              <option>Koshali</option>
              <option>Kumaoni</option>
              <option>Kutchi</option>
              <option>Ladakhi</option>
              <option>Lepcha</option>
              <option>Magahi</option>
              <option>Maithili</option>
              <option>Malay</option>
              <option>Malayalam</option>
              <option>Manipuri</option>
              <option>Marathi</option>
              <option>Marwari</option>
              <option>Miji</option>
              <option>Mizo</option>
              <option>Monpa</option>
              <option>Nepali</option>
              <option>Odia</option>
              <option>Pashto</option>
              <option>Persian</option>
              <option>Punjabi</option>
              <option>Rajasthani</option>
              <option>Russian</option>
              <option>Sanskrit</option>
              <option>Santhali</option>
              <option>Seraiki</option>
              <option>Sindhi</option>
              <option>Sinhala</option>
              <option>Sourashtra</option>
              <option>Spanish</option>
              <option>Swedish</option>
              <option>Tagalog</option>
              <option>Tamil</option>
              <option>Telugu</option>
              <option>Tulu</option>
              <option>Urdu</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-2">
            <span className="spanTag"></span>
            <br />
            <button className="w-100" id="begin-btn" onClick={accountDetail}>
              Let&apos;s Begin
            </button>
          </div>
        </div>
      </div>
      {/*matching service section complete */}

      {/*account details toggle section start */}
      <section
        style={{
          display: account ? "block" : "none",
        }}
        id="account-show"
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center pt-2 pb-4" id="toggle-h3">
                Let&#39;s set up your account, while
                <br />
                we find Matches for you!
              </h3>
              <p id="account-toggle-cross" onClick={accountDetail}>
                <i className="fa-solid fa-xmark"></i>
              </p>
              <span className="spanTag">Profile for</span>
              <br />
              <select
                className="religion w-100 py-2"
                name="role"
                placeholder="select"
              >
                <option>Self</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Friend</option>
                <option>Relative</option>
              </select>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 py-3">
                      <span>Your Name</span>
                      <br />
                      <input
                        type="text"
                        placeholder="First Name"
                        id="account-input"
                      />
                    </div>
                    <div className="col-md-6 py-3">
                      <span></span>
                      <br />
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="account-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className="py-5">Gender</span> <br />
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label className="px-1 pt-1"> Male</label>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label className="px-1"> Female</label>
              <br />
              <span className="pt-5">Religion</span>
              <br />
              <select
                className="religion w-100 py-2 mb-2"
                name="role"
                placeholder="select"
              >
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Sikh</option>
                <option>Christian</option>
                <option>Parsi</option>
                <option>Jain</option>
                <option>Buddhist</option>
                <option>Jewish</option>
                <option> No Religion</option>
                <option>Spiritual</option>
                <option>Other</option>
              </select>
              <span className="spanTag">
                Community <i className="fa-solid fa-question"></i>
              </span>
              <br />
              <select
                className="religion w-100 py-2 mb-4"
                name="role"
                placeholder="select"
              >
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Punjabi</option>
                <option>Benjali</option>
                <option>Gujrati</option>
                <option>Urdu</option>
                <option>Telegu</option>
                <option>Kannada</option>
                <option>English</option>
                <option>Tamil</option>
                <option>Odia</option>
                <option>Marwari</option>
                <option>Aka</option>
                <option>Arabic</option>
                <option>Arunachali</option>
                <option>Assamese</option>
                <option>Awadhi</option>
                <option>Baluchi</option>
                <option>Banjali</option>

                <option>Bhojpuri</option>
                <option>Burmuse</option>
                <option>Chattisgarhi</option>
                <option>Chinese</option>
                <option>Coorgi</option>
                <option>Dogri</option>
                <option>Gujrati</option>
                <option>Haryanvi</option>
                <option>Kakbarak</option>
                <option>Kanauji</option>
                <option>Kannada</option>
                <option>Kashmiri</option>
                <option>Ladakhi</option>
                <option>Lepcha</option>
                <option>Magahi</option>
                <option>Maithili</option>
                <option>Malay</option>
                <option>Nepali</option>
                <option>Odia</option>
                <option>Pashto</option>
                <option>Persian</option>
                <option>Punjabi</option>
                <option>Rajasthani</option>
                <option>Russian</option>
                <option>Sanskrit</option>
                <option>Telugu</option>
                <option>Tulu</option>
                <option>Urdu</option>
                <option>Other</option>
              </select>
              <button id="toggle-btn1" onClick={basicDetails}>
                Next
              </button>
              <h6 id="toggle-shaddi">
                Already a Member <i className="fa-solid fa-question"></i>
                <span id="sucess-btn" onClick={toggle}>
                  Login
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/*account details toggle section complete */}

      {/*basic details section start */}
      <section
        style={{
          display: basic ? "block" : "none",
        }}
      >
        <div className="container  py-4">
          <div className="row">
            <div className="col-md-6" id="basic-main-div">
              <h3 id="basic-h3">Great! Now some basic details</h3>
              <p id="account-toggle-cross" onClick={basicDetails}>
                <i className="fa-solid fa-xmark"></i>
              </p>
              <h6 id="toggle-h6">Enter your email id</h6>
              <input
                type="email/number"
                placeholder="Enter email address"
                className="w-100 py-2"
                id="basic-h3-input"
              />
              <h6 id="toggle-h6">Your date of birth</h6>

              <div className="row">
                <div className="col-md-4">
                  <select className="w-100 py-2 px-1" id="basic-select">
                    <option>Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="w-100 py-2 px-1" id="basic-select">
                    <option>Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="w-100 py-2 px-1" id="basic-select">
                    <option>Year</option>
                    <option>1953</option>
                    <option>1954</option>
                    <option>1955</option>
                    <option>1956</option>
                    <option>1957</option>
                    <option>1958</option>
                    <option>1959</option>
                    <option>1960</option>
                    <option>1961</option>
                    <option>1962</option>
                    <option>1963</option>
                    <option>1964</option>
                    <option>1965</option>
                    <option>1966</option>
                    <option>1967</option>
                    <option>1968</option>
                    <option>1969</option>
                    <option>1970</option>
                    <option>1971</option>
                    <option>1972</option>
                    <option>1973</option>
                    <option>1974</option>
                    <option>1975</option>
                    <option>1976</option>
                    <option>1977</option>
                    <option>1978</option>
                    <option>1979</option>
                    <option>1980</option>
                    <option>1981</option>
                    <option>1982</option>
                    <option>1983</option>
                    <option>1984</option>
                    <option>1985</option>
                    <option>1986</option>
                    <option>1987</option>
                    <option>1988</option>
                    <option>1989</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                  </select>
                </div>
              </div>
              <h6 id="toggle-h6">Where do you live?</h6>
              <input
                type="text"
                className="w-100 py-2 px-1"
                id="basic-select"
              />
              <br />
              <button id="toggle-btn1">Sign Up</button>

              <h6 className="text-center mb-3">
                By signing up, you agree to our
                <span id="sucess-btn">Terms</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/*basic details section start */}

      {/*find your special start */}
      <div className="container text-center pb-5">
        <div className="py-5">
          <h1 id="special-h1">Find your Special Someone</h1>
        </div>
        <div className="row py-3">
          <div className="col-md-4" style={{ position: "relative" }}>
            <p>
              <i className="fa-solid fa-pen-to-square" id="special-icon"></i>
            </p>
            <p id="num">1</p>
            <h5 id="special-h5" onClick={toggle}>
              Sign Up
            </h5>
            <p>Register for free & put up your Matrimony Profile</p>
          </div>
          <div className="col-md-4" style={{ position: "relative" }}>
            <p>
              <i className="fa-solid fa-users" id="special-icon"></i>
            </p>
            <p id="num">2</p>
            <h5 id="special-h5" onClick={toggle}>
              Connect
            </h5>
            <p>Select & Connect with Matches you like</p>
          </div>
          <div className="col-md-4" style={{ position: "relative" }}>
            <p>
              <i className="fa-brands fa-rocketchat" id="special-icon"></i>
            </p>
            <p id="num">3</p>
            <h5 id="special-h5" onClick={toggle}>
              Interact
            </h5>
            <p>Become a Premium Member & Start a Conversation</p>
          </div>
        </div>
      </div>

      {/*find your special complete */}

      {/*sHADDI MEET start */}
      <div
        className="container-fluid text-center py-5"
        style={{ backgroundColor: "#a8a8e942" }}
      >
        <div className="py-5">
          <h1 id="shadi-h1">Introducing Shaadi Meet!</h1>
        </div>
        <div className="row">
          <div className="col-md-9 m-auto">
            <div className="row">
              <div className="col-md-6">
                <Image src={Home_Couple} alt="home_couple image" />
              </div>
              <div className="col-md-6">
                <Image src={shadi_blue} alt="home_shadi blue" />

                <h3 id="shadi-h3">
                  Now meet your Matches over
                  <br /> video call
                </h3>
                <hr id="shadi-hr" />
                <h5 id="shadi-h5">Available on the Shaadi.com App</h5>
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <div className="row">
                      <Link href="https://play.google.com/store/apps/details?id=com.shaadi.android&referrer=utm_source=shaadi.com&utm_medium=desktop&utm_campaign=android-app-homepage">
                        <div className="col-md-5">
                          <Image
                            src={black_1}
                            alt="black_image"
                            id="sucess-black"
                          />
                        </div>
                      </Link>
                      <Link href="https://apps.apple.com/in/app/shaadi-com-matrimonial-app/id480093204">
                        <div className="col-md-5">
                          <Image
                            src={black}
                            alt="black_image"
                            id="sucess-black"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*shaddi meet section complete */}
      <Search />
      {/*success story slider start */}

      <div
        id="carouselExampleControls"
        className="carousel slide py-5"
        data-ride="carousel"
      >
        <div className="container-fluid py-3 text-center">
          <div>
            <h1 id="shadi-h1" className="py-5 mb-5 text-center">
              Matrimony Service with Millions of Success Stories
            </h1>
          </div>
          <div className="row">
            <div className="carousel-inner">
              <div className="col-md-11 m-auto">
                <div className="carousel-item active ">
                  <div className="row">
                    <div className="col-md-4  px-4">
                      <Image src={couple_1} alt="home_couple image" />
                      <h3 id="sucess-h3">Supriya &amp; Ashish</h3>
                      <p id="sucess-p">
                        I found my match on Shaadi.com within a month. Not yet
                        married but going steady with him. Three cheers to
                        Shaadi.com. Fairy tales do come true.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=45352">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_2} alt="home_couple image" />
                      <h3 id="sucess-h3">Pramod &amp; Kanchan</h3>
                      <p id="sucess-p">
                        I never thought my passion for travel would take me
                        towards my partner for life. Yes! Two travel enthusiasts
                        met in Shaadi on 19th July, 2021 and hitched forever.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=45254">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_3} alt="home_couple image" />
                      <h3 id="sucess-h3">Devi Prasad &amp; Swapna</h3>
                      <p id="sucess-p">
                        We met through the interaction between our arents an
                        then with time we fell for each other an now welocke for
                        lifeNow she is everything my life is all about
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=45095">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-md-4  px-4">
                      <Image src={couple_4} alt="home_couple image" />
                      <h3 id="sucess-h3">Ranjana &amp; Arijit</h3>
                      <p id="sucess-p">
                        We connected over Shaadi chat and then soon exchanged
                        mobile numbers, and rest was a roller coaster ride till
                        we finally got married after 5 months since our first
                        meet.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=44923">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_5} alt="home_couple image" />
                      <h3 id="sucess-h3">Krish &amp; Satarupa</h3>
                      <p id="sucess-p">
                        I think it was pre destined to meet someone more than
                        thousand miles from all together different culture.
                        thanks Shaadi.com
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=44916">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_6} alt="home_couple image" />
                      <h3 id="sucess-h3">Ankit &amp; Udyana</h3>
                      <p id="sucess-p">
                        I would to thank team shaadi for helping me find my life
                        partner cum my best friend. I 1st meet her on 15th of
                        April and after talking to each other for 10 mins we
                        found out that our vibes matches.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=12407">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4  px-4">
                      <Image src={couple_7} alt="home_couple image" />
                      <h3 id="sucess-h3">Gaurav &amp; Deepti</h3>
                      <p id="sucess-p">
                        We matched, spoke for sometime and then met in real. We
                        were sure we want to spend our life together after the
                        initial few conversations.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=44818">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_8} alt="home_couple image" />
                      <h3 id="sucess-h3">Daniel &amp; Lavina</h3>
                      <p id="sucess-p">
                        This was actually a Family reference which accidentally
                        appeared on Shaadi and that&apos;s when I approached her
                        through my sis in law
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=44818">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4  px-4">
                      <Image src={couple_9} alt="home_couple image" />
                      <h3 id="sucess-h3">Sreyashi &amp; Indranil</h3>
                      <p id="sucess-p">
                        I would like to show my sincere and heartfelt gratitude
                        to shaadi.com team as I found my soulmate here. Though,
                        initially we hesitated to fix due to some astrological
                        issues
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=11203">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4  px-4">
                      <Image src={couple_10} alt="home_couple image" />
                      <h3 id="sucess-h3">Gaurav &amp; Deepti</h3>
                      <p id="sucess-p">
                        We matched, spoke for sometime and then met in real. We
                        were sure we want to spend our life together after the
                        initial few conversations.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=9005">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4 px-4">
                      <Image src={couple_11} alt="home_couple image" />
                      <h3 id="sucess-h3">Aniket &amp; Pooja</h3>
                      <p id="sucess-p">
                        We met through Shaadi.com. Though I didn&#39;t talk to
                        him first, it was my mother. We went the old school way!
                        And got married 7th of feb 2022. Been a month today.
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=14547">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                    <div className="col-md-4 px-4">
                      <Image
                        src={couple_12}
                        alt="home_couple image"
                        height={455}
                        id="shadi_pic"
                      />
                      <h3 id="sucess-h3">Ankur &amp; Shilpa</h3>
                      <p id="sucess-p">
                        We joined shaadi.com after Shark tank India and within a
                        month , we were able to get our match. Shaadi is much
                        better than any other platform existing
                      </p>
                      <Link href="https://www.shaadi.com/shaadi-info/matrimonial-success-stories/wedding?id=12407">
                        <button id="sucess-btn">Read More...</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*success story slider complete */}
      {/*waiting to happen start */}
      <div className="container-fluid text-center py-3" id="red-container">
        <div className="row py-3">
          <div className="col-md-8 m-auto">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-white pt-3" id="waiting-h3">
                  Your story is waiting to happen!
                </h3>
              </div>
              <div className="col-md-6">
                <button id="waiting-btn" onClick={accountDetail}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*waiting to happen complete */}
      {/*Trusted section start */}
      <div className="container text-center py-5 my-3">
        <div className="row">
          <div className="col-md-11 m-auto">
            <Image src={spic} alt="s-icon -pic" height={100} width={100} />
            <h3 id="trusted-h3">
              Shaadi.com - Trusted by over 35 Million Members
            </h3>
            <p id="trusted-p">
              Shaadi.com, one of India&#39;s best known brands and the
              world&#39;s largest matrimonial service was founded with a simple
              objective - to help people find happiness. The company pioneered
              online matrimonials in 1996 and continues to lead the exciting
              matrimony category after more than a decade. By redefining the way
              Indian brides and grooms meet for marriage, Shaadi.com has created
              a world-renowned service that has touched over 35 million people
              <span id="trusted-btn">
                Learn More <i className="fa-solid fa-caret-right"></i>
              </span>
            </p>
            <p id="trusted-btn">
              India | USA | Canada | UK | Singapore | Australia | UAE | NRI
              Matrimonials
            </p>
            <button id="trusted-btn1">Trusted by Millions</button>
            <div
              className="d-flex justify-content-around pt-4 pb-3"
              id="trusted-line"
            >
              <p>
                <i className="fa-solid fa-users"></i> Best Matches
              </p>
              <p>
                <i className="fa fa-shield-check"></i>Verified Profiles
              </p>
              <p>
                <i className="fa-solid fa-lock"></i>100% Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Trusted section complete */}
      {/*footer section start */}
      <div className="container text-center pb-5">
        <div className="row">
          <div className="col-md-3">
            <h6 id="footer-h6">Need Help?</h6>
            <p id="footer-p" onClick={toggle}>
              Member Login
            </p>
            <p id="footer-p" onClick={accountDetail}>
              Sign Up
            </p>
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
