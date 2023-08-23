import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import ApiService from "../services/ApiService";
import axios from "axios";
import "./Login.css";
import { connect } from "react-redux";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const forgetpassword = () => {
    ApiService.checkEmail(email)
      .then((response) => {
        const { data } = response;
        console.log(response);
        // props.setUserEmail(data.email);
        // props.setUserDetails(data);
        console.log("inside forgetpasswrod");
        console.log(data);
        if (data === "") {
          document.getElementById("error").innerText = "Invalid Email ";
          return;
        }
        ApiService.deleteById(data.id)
          .then((response) => {
            const { del } = response;
            alert("deleting account is successful", del.name);
            // props.history.push("/list");
          })
          .catch((error) => {
            alert("error", error);
          });
        const user = {
          name: data.name,
          email: email,
          password: password,
          mobileNo: data.mobileNo,
          // type: type,
          address: {
            addressLine1: data.addressLine1,
            addressLine2: data.addressLine2,
            state: data.state,
            city: data.city,
            pincode: data.pinCode,
          },
          role: data.role,
        };
        ApiService.addUser(user)
          .then((response) => {
            const { data } = response;
            alert(
              "Hello registering of the new account is successful",
              data.name
            );
            props.history.push("/list");
          })
          .catch((error) => {
            alert("error", error);
          });
        props.history.push("/list");
      })
      .catch((err) => {
        document.getElementById("error").innerText = "Invalid Email";
        console.log(err.toString());
      });
  };
  return (
    <>
      {/* {props.cart.user != null ? <Redirect to={{ pathname: "/list" }} /> : ""} */}
      {/* <div className="container signup-form"> */}
      {/* <div className="container-fluid ps-md-0"> */}
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-4 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div id="error"></div>
                  <h5 className="login-heading mb-4"></h5>

                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">New Password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      onClick={forgetpassword}
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 signin-button"
                      // type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
export default connect(mapStateToProps)(SignUp);
