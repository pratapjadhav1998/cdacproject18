import React, { Component } from "react";
import Card from "../cards/Card";
import Data from "../data/Data";
import cartList from "../cart/cartList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../redux/actions/CartAction";
import { incrementUnitsCartAction } from "../redux/actions/CartAction";
import { decrementUnitsCartAction } from "../redux/actions/CartAction";
import { deleteItemFromCart } from "../redux/actions/CartAction";
import Cart from "../cart/Cart";
import { Redirect } from "react-router";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";
class FarmerAcceptOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      quantity: 0,
      productName: "",
      proid: 0,
      threshold_limit: 0,
      allorders: [],
      farmerid: 0,
    };
    this.totalPrice = 0;
  }
  handleStatus = (
    id,
    status,
    farmer,
    customer,
    product,
    rate,
    quantity
  ) => {
    console.log("id:" + id);
    console.log("status:" + status);
    console.log("wid:" + farmer);
    console.log("rid" + customer);
    console.log("pid:" + product);
    console.log("rate" + rate);
    console.log("quantity--->" + quantity);
    // item.id,
    //   2,
    //   item.farmer.id,
    //   item.customer.id,
    //   item.product.id,
    //   item.order_rate,
    //   item.order_quantity;
    ApiService.updateStatus(
      id,
      status,
      farmer,
      customer,
      product,
      rate,
      quantity
    )
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getAllOrders();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "";
        console.log(err.toString());
      });
  };
  handleFarmerReview = (
    id,
    review,
    farmer,
    customer,
    product,
    rate,
    quantity
  ) => {
    ApiService.updateFarmerReview(
      id,
      review,
      farmer,
      customer,
      product,
      rate,
      quantity
    )
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getAllOrders();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "";
        console.log(err.toString());
      });
  };
  handleAdd = () => {
    this.props.history.push("/farmer");
  };
  componentDidMount() {
    this.getAllOrders();
  }
  getAllOrders = () => {
    // console.log("farmerList");
    // console.log("inside customer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);

    ApiService.farmerGetAllOrders(user.id)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        console.log("farmerid" + user.id);
        return response;
      })
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            allorders: response.data,
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
    const { error, isLoaded, allorders, handleAdd, flag } = this.state;
    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className=" col-md-4 col-lg-6 bg-image6">
            <div className="col-md-12 col-lg-12">
              <div className="login d-flex align-items-right py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-12 mx-auto">
                      <h4
                        className="col-lg-2"
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          textAlign: "center",
                        }}
                      >
                        <b>
                          <u>Orders Received</u>
                        </b>
                      </h4>
                      <table className="table table-sm table-dark text-center ">
                        <thead className="thead-dark">
                          <tr>
                            <th colSpan="2">Action</th>
                            {/* <th>Status</th> */}
                            <th>OrderDate</th>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th colSpan="4">Delivery Address</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allorders.map((item) => (
                            <>
                              {item.status !== 2 ? (
                                <tr key={item.id}>
                                  <td>
                                    {item.status === 1 ? (
                                      <button
                                        className="btn btn btn-outline-warning ml-2 "
                                        // onClick={() => {
                                        //   this.setState({
                                        //     farmerid: item.farmer.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.farmer.id);
                                        // }}
                                        onClick={() => {
                                          this.handleStatus(
                                            item.id,
                                            0,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        Approve
                                      </button>
                                    ) : (
                                      <>
                                        {item.status === 3 ? (
                                          <button
                                            className="btn btn-success ml-2 "
                                            // onClick={() => {
                                            //   this.setState({
                                            //     farmerid: item.farmer.id,
                                            //   });
                                            //   this.handleQuantity(this.state.quantity);
                                            //   this.orderProduct(item.farmer.id);
                                            // }}
                                          >
                                            Delivered
                                          </button>
                                        ) : (
                                          <button
                                            className="btn btn-warning ml-2 "
                                            // onClick={() => {
                                            //   this.setState({
                                            //     farmerid: item.farmer.id,
                                            //   });
                                            //   this.handleQuantity(this.state.quantity);
                                            //   this.orderProduct(item.farmer.id);
                                            // }}
                                          >
                                            Approved
                                          </button>
                                        )}
                                      </>
                                    )}
                                  </td>
                                  <td>
                                    {item.status === 0 || item.status === 3 ? (
                                      <button
                                        className="btn btn btn-danger ml-2 "
                                        disabled
                                        // onClick={() => {
                                        //   this.setState({
                                        //     farmerid: item.farmer.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.farmer.id);
                                        // }}
                                        // onClick={() => {
                                        //   this.handleStatus(
                                        //     item.id,
                                        //     2,
                                        //     item.farmer.id,
                                        //     item.customer.id,
                                        //     item.product.id,
                                        //     item.order_rate,
                                        //     item.order_quantity
                                        //   );
                                        // }}
                                      >
                                        Reject
                                      </button>
                                    ) : (
                                      <button
                                        className="btn btn btn-danger ml-2 "
                                        // disabled
                                        // onClick={() => {
                                        //   this.setState({
                                        //     farmerid: item.farmer.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.farmer.id);
                                        // }}
                                        onClick={() => {
                                          this.handleStatus(
                                            item.id,
                                            2,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        Reject
                                      </button>
                                    )}
                                  </td>

                                  <td>{item.orderdate}</td>
                                  <td>{item.customer.name}</td>
                                  <td>{item.customer.mobileNo}</td>
                                  <td colSpan="4">
                                    {
                                      // item.customer.address.addressLine1 +
                                      //   ", " +
                                      //   item.customer.address.addressLine2 +
                                      //   ", " +
                                      item.customer.address.city +
                                        ", " +
                                        item.customer.address.state
                                    }
                                  </td>
                                  <td>{item.product.productName}</td>
                                  <td>
                                    Rs.
                                    {item.order_rate + "/" + item.product.unit}
                                  </td>
                                  <td>
                                    {item.order_quantity +
                                      " " +
                                      item.product.unit}
                                  </td>
                                  <td>
                                    Rs.{item.order_rate * item.order_quantity}
                                  </td>
                                  <td>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 1 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="1"
                                        onClick={() => {
                                          this.handleFarmerReview(
                                            item.id,
                                            1,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 2 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="2"
                                        onClick={() => {
                                          this.handleFarmerReview(
                                            item.id,
                                            2,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 3 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="3"
                                        onClick={() => {
                                          this.handleFarmerReview(
                                            item.id,
                                            3,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 4 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="4"
                                        onClick={() => {
                                          this.handleFarmerReview(
                                            item.id,
                                            4,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 5 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="5"
                                        onClick={() => {
                                          this.handleFarmerReview(
                                            item.id,
                                            5,
                                            item.farmer.id,
                                            item.customer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                  </td>
                                  {/* <td>
                                <input
                                  type="number"
                                  style={{
                                    width: "30per",
                                    height: "10per",
                                    textAlign: "center",
                                  }}
                                  placeholder="enter quantity"
                                  onChange={(e) => {
                                    console.log(e);
                                    // this.handleQuantity(e.target.value);
                                    this.setState({
                                      quantity: e.target.value,
                                    });
                                    // this.setState.quan(e.target.value);
                                    // console.log("Testing");
                                    // console.log(e.target.value);
                                  }}
                                />
                              </td> */}
                                  {/* <td>{item.threshold_limit}</td> */}
                                  {/* <td>
                                <button
                                  className="btn btn-success ml-6"
                                  onClick={() => {
                                    this.handleQuantity(this.state.quantity);
                                    this.handleUpdate(item.product.id);
                                  }}
                                >
                                  update
                                </button>
                              </td> */}
                                  {/* <td>
                                <button
                                  className="btn btn-danger ml-6"
                                  onClick={() => {
                                    this.handleDelete(item.product.id);
                                  }}
                                >
                                  delete
                                </button>
                              </td> */}
                                </tr>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                        </tbody>
                      </table>
                      <button
                        className="btn btn-success col-lg-2"
                        onClick={this.handleAdd}
                      >
                        My Store
                      </button>
                      {/* <button
                        className="btn btn-success col-lg-2"
                        onClick={this.handleAdd}
                      >
                        shop more
                      </button>*/}
                      <span>&nbsp;&nbsp;</span>
                      <button
                        className="btn btn-success ml-2 col-lg-2"
                        onClick={this.getAllOrders}
                      >
                        Refresh
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
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(FarmerAcceptOrders);
