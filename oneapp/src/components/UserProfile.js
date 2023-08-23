// import { ClassNames } from "@emotion/react";
// import { border } from "@mui/system";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
// import { bindActionCreators } from "redux";
// import { setUserDetails } from "../redux/actions/CartAction";
import "./layout/table.css";
// import orderDisplay from "./orderDisplay";
class UserProfile extends Component {
  handleEdit = () => {
    this.props.history.push("/updateinfo");
  };

  // getList = () => {
  //   return this.props.cart.user.order.map((order) => {
  //     return (
  //       <>
  //         <orderDisplay order={order}> </orderDisplay>
  //       </>
  //     );
  //   });
  // };
  checkUserLogIn = (cart) => {
    if (cart.user != null) {
      //   const orderList = cart.user.order.map((order) => {
      //     <tr>
      //       <td>{order.id}</td>
      //       <td>{order.orderTimeStamp}</td>
      //       <td>{order.price}</td>
      //     </tr>;
      //   });
      //   const { addressLine1, addressLine2, city, state, pincode } =
      //     cart.user.address;
      //   let finalAddress = " ";
      //   finalAddress +=
      //     addressLine1 +
      //     " " +
      //     addressLine2 +
      //     " " +
      //     city +
      //     " " +
      //     state +
      //     " " +
      //     pincode;
      //   let ol = cart.user.order;
      //   let finalOl = ol.map((o) => (
      //     <div
      //       style={{ borderStyle: "solid", padding: "10px", marginTop: "20px" }}
      //       className="card"
      //     >
      //       <div>Order Id:{o.id}</div>
      //       <div>Ordered On:{o.orderTimeStamp}</div>
      //       <div>
      //         {o.orderItems.map((o) => (
      //           <div>
      //             Item:{o.name} Quantity:{o.quantity}
      //           </div>
      //         ))}{" "}
      //       </div>
      //       <div>Price:{o.price}</div>
      //     </div>
      //   ));

      const { cart } = this.props;
      const { user } = cart;
      return (
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="col-md-8 col-lg-12">
              <div className="col-md-8 col-lg-12">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <div className="form-floating mb-3">
                          <div
                            style={{
                              borderStyle: "solid",
                              borderBlockColor: "red",
                              padding: "10px",
                              marginTop: "20px",
                            }}
                          >
                            <h3 style={{ alignContent: "center" }}>
                              User Profile -:
                            </h3>
                            <form class="form-inline">
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="staticEmail2" class="sr-only">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  style={{ width: "75per", height: "10per" }}
                                  readonly
                                  class="form-control"
                                  id="staticEmail2"
                                  value={cart.user.name}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={cart.user.email}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  Mobile No
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={cart.user.mobileNo}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  AddressLine1
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={user.address.addressLine1}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  AddressLine2
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={user.address.addressLine2}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  City
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={user.address.city}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  State
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={user.address.state}
                                  readOnly
                                />
                              </div>
                              <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">
                                  Pincode
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputPassword2"
                                  value={user.address.pincode}
                                  readOnly
                                />
                              </div>
                              {/* <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                value={finalAddress}
                readOnly
              />
            </div> */}
                              <button
                                className="btn btn-outline-success"
                                onClick={this.handleEdit}
                              >
                                {" "}
                                Edit Information
                              </button>
                              <h3 style={{ alignContent: "center" }}></h3>
                              {/* {finalOl} */}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  render() {
    if (this.props.cart.user === null) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return <>{this.checkUserLogIn(this.props.cart)}</>;
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

/*
<><h3>USER PROFILE</h3>
            <h3>User Information:</h3>
            <table>
                <tr><td>Name :</td><td>{this.props.cart.user.name}</td></tr>
                <tr><td>Email :</td><td>{this.props.cart.user.email}</td></tr>
                <tr><td>Mobile No :</td><td>{this.props.cart.user.mobileNo}</td></tr>
                <tr><td>Address:{this.props.cart.user.address.addressLine1} , {this.props.cart.user.address.addressLine1} ,{this.props.cart.user.address.city},{this.props.cart.user.address.state},{this.props.cart.user.address.pincode} </td></tr>
            </table>
            <h1>
                <table>
                   
                        {orderList}

                </table>
            </h1>
            </>
 */
