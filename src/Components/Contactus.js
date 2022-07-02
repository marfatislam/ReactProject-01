import React, { useState } from "react";

const Contactus = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //Connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://reactfirebasedb-6bba0-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Plz fill the data");
      }
    } else {
      alert("Plz fill the data");
    }
  };

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
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email Id"
                          value={userData.email}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          className="form-control"
                          placeholder="Enter Yor Message"
                          value={userData.message}
                          onChange={postUserData}
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
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
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

export default Contactus;
