import React, { Component } from "react";
import Card from "../cards/Card";
import Data from "../data/Data";
import cartList from "../cart/cartList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../redux/actions/CartAction";
import { incrementUnitsCartAction } from "../redux/actions/CartAction";
import { decrementUnitsCartAction } from "../redux/actions/CartAction";
import { setProductId } from "../redux/actions/CartAction";
import { deleteItemFromCart } from "../redux/actions/CartAction";
import Cart from "../cart/Cart";
import { Redirect } from "react-router";
import ApiService from "../services/ApiService";
import { textAlign } from "@mui/system";
import Toastify from "toastify-js";
class lessreviewlist extends Component {
  constructor(props) {
    console.log("AKSHATAS RET LIST");
    super(props);
    this.state = {
      reviewlist: [],
      flag: false,
      id: 0,
      quantity: 0,
      productName: "",
      proid: 0,
      threshold_limit: 0,
      unit: "kg",
    };
    // this.newquantity = 0;
    // this.newlimit = 0;
    // this.newname = "";
    // this.newunit = "";
  }

  componentDidMount() {
    this.getreviewListforAdmin();
  }

  handleDelete = (id) => {
    console.log(id);
    const { cart } = this.props;
    const { user } = cart;
    console.log("this is user id-" + user.id);
    let userid = parseInt(user.id);
    console.log(id, userid);
    ApiService.deletecustomeronreview(id)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        Toastify({
          text: "user deleted.",
          duration: 3000,
          style: {
            background: "green",
            color: "white",
          },
        }).showToast();
        this.getreviewListforAdmin();
      })
      .catch((err) => {
        Toastify({
          text: "unable to delete.",
          duration: 3000,
          style: {
            background: "red",
            color: "white",
          },
        }).showToast();
        document.getElementById("error").innerText = "";
        console.log(err.toString());
      });
  };
  back = () => {
    this.props.history.push("/admin");
  };
  getreviewListforAdmin = () => {
    console.log("admin customerlist home");
    // console.log("inside customer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);
    ApiService.getreviewListforAdmin()
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        return response;
      })
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            reviewlist: response.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  render() {
    const { error, isLoaded, reviewlist, handleAdd, flag } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className=" col-md-4 col-lg-12">
              <div className="col-md-12 col-lg-12">
                <div className="login d-flex align-items-right py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-9 mx-auto">
                        <div id="error"></div>
                      

                        {reviewlist.length !== 0 ? (
                        <>
                        <table className="table table-sm table-dark text-center ">
                          <thead className="thead-dark">
                            <tr>
                              <th colSpan="2">Name</th>
                              <th>Email</th>
                              <th>MobileNo</th>
                              <th colSpan="2">Address</th>
                              <th>Review</th>
                              <th>ReviewCount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reviewlist.map((user) => (
                              <tr key={user.id}>
                                <td colSpan="2">{user.name}</td>
                                <td>{user.email}</td>

                                <td>{user.mobileNo}</td>
                                <td colSpan="2">
                                  {
                                    // user.address.addressLine1 +
                                    //   "," +
                                    //   user.address.addressLine2 +
                                    //   "," +
                                    user.address.city +
                                      "," +
                                      user.address.state +
                                      "," +
                                      user.address.pincode
                                  }
                                </td>
                                {/* <td>{user.mobileNo}</td> */}
                                <td>{user.averageReview}</td>
                                <td>{user.reviewCount}</td>
                                <td>
                                  <button
                                    className="btn btn-danger ml-6"
                                    onClick={() => {
                                      this.handleDelete(user.id);
                                    }}
                                  >
                                    delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        </>
                         ) : (
                          <>
                            <h4
                              className="col-lg-12"
                              style={{
                                color: "black",
                                backgroundColor: "white",
                                textAlign: "center",
                              }}
                            >
                              <b>
                                
                                <br></br>
                                No Farmer has poor reviews.
                                <br></br>
                              </b>
                            </h4>
                           
                          </>
                           )}
                           
                           <br></br>
                           <br></br>
                            
                        <button
                          className="btn btn-success col-lg-2"
                          onClick={this.back}
                        >
                          Home
                        </button>
                        <span>&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      // addToCartAction,
      // incrementUnitsCartAction,
      // decrementUnitsCartAction,
      // deleteItemFromCart,
      setProductId,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionsToProps)(lessreviewlist);
