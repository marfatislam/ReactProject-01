import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Etquia quis?Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem
                    ipsum, Etquia quis?
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contactimg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="First Name"
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Last Name"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Phone Number"
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Email Id"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Add Address"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Enter Yor Message"
                        ></input>
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      ></input>
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
