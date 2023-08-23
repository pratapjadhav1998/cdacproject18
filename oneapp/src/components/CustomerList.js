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
import Toastify from "toastify-js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      id: 0,
      quantity: 0,
      productName: "",
      proid: 0,
      threshold_limit: 0,
      farmerList: [],
      farmerid: 0,
      rate: 0,
    };
    this.totalPrice = 0;
  }
  componentDidMount() {
    console.log("inside component did mount");
    this.getFarmerList();
  }

  orderProduct = (
    farmerid,
    rate,
    orderquantity,
    quantity,
    farmername,
    productname,
    unit
  ) => {
    if (
      orderquantity === "" ||
      orderquantity === 0 ||
      orderquantity === undefined
    ) {
      Toastify({
        text: "Please enter some quantity.",
        duration: 3000,
        style: {
          background: "red",
          color: "white",
        },
      }).showToast();
      return;
    }
    console.log(farmerid);
    // this.props.setProductId(farmerid);
    const { cart } = this.props;
    const { user } = cart;
    let userid = parseInt(user.id);
    let quant = parseInt(this.state.quantity);
    console.log("customer id" + userid);
    console.log("farmer id" + farmerid);
    console.log("qauntity:" + quant);
    const proid = this.props.match.params.productId;
    const status = 1;
    console.log("productid:" + proid);
    console.log("status:" + status);

    console.log("rate" + rate);
    console.log("orderquantity" + orderquantity);
    console.log("quantity" + quantity);
    const newdate = new Date();
    var dd = String(newdate.getDate()).padStart(2, "0");
    var mm = String(newdate.getMonth() + 1).padStart(2, "0");
    var yy = String(newdate.getFullYear());
    var date = yy + "-" + mm + "-" + dd;
    if (orderquantity < quantity) {
      Toastify({
        text:
          " order placed to: " +
          farmername +
          "\nProduct: " +
          productname +
          "\nQuantity: " +
          orderquantity +
          unit +
          "\nTotal Amount: Rs" +
          orderquantity * rate,
        duration: 3000,
        style: {
          background: "green",
          color: "white",
        },
      }).showToast();

      const orderplace = {
        customer: {
          id: user.id,
        },
        product: {
          id: this.props.match.params.productId,
        },
        farmer: {
          id: farmerid,
        },
        order_date: date,
        order_rate: rate,
        order_quantity: this.state.quantity,
        status: status,
      };
      console.log("product id:" + this.props.match.params.productId);
      console.log("farmerid" + farmerid);
      console.log("customerid" + userid);
      console.log("status" + status);
      console.log("quantity" + this.state.quantity);

      console.log("date:" + date);

      console.log("new product: " + orderplace);
      ApiService.placeOrder(orderplace)
        .then((response) => {
          const { data } = response;
          console.log(response);
          console.log("data is:" + data);
          if (data === "") {
            document.getElementById("error").innerText =
              "Invalid Email And Password";
            return;
          }

          this.props.history.push("/prevorders");
          return response;
        })

        .catch((err) => {
          document.getElementById("error").innerText = "cant order";
          console.log(err.toString());
        });
    } else if (orderquantity > quantity) {
      Toastify({
        text:
          farmername +
          " donot have enough supply to fullfill your demand\nplease try with anyother supplier",
        duration: 3000,
        style: {
          background: "red",
          color: "white",
        },
      }).showToast();
    }
  };

  gobackfuntion = () => {
    console.log("inside go back funtion");

    if (this.props.cart.user.role === "CUSTOMER") {
      this.props.history.push("/customer");
    } else if (this.props.cart.user.role === "FARMER") {
      this.props.history.push("/farmer");
    } else if (this.props.cart.user.role === "ADMIN") {
      this.props.history.push("/admin");
    }
  };
  handleQuantity = (quantity) => {
    console.log("inside handle quantity");
    console.log(quantity);
  };
  handleAdd = () => {
    this.props.history.push("/customer");
  };

  getFarmerList = () => {
    console.log("farmerList");
    // console.log("inside customer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);

    const proid = this.props.match.params.productId;

    ApiService.getFarmerList(proid)
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
            farmerList: response.data,
            productName: response.data[0]?.product.productName,
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
  prevorders = () => {
    this.props.history.push("/prevorders");
  };
  render() {
    const { error, isLoaded, farmerList, rate, handleAdd, flag } =
      this.state;

    // if (this.props.cart.user === null) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // }

    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    // const displayPlaceOrder =
    //   cart.cartList.length == 0
    //     ? ""
    //     : "<div><button onClick={()=>{this.handlePlaceOrder}}>Place Order</button></div>";

    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className=" col-md-4 col-lg-6 bg-image2">
            {/* <br></br> */}

            <div className="col-md-8 col-lg-12">
              <div className="login d-flex align-items-right py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-9 mx-auto">
                      {farmerList.length !== 0 ? (
                        <>
                          <h4
                            className="col-lg-5"
                            style={{
                              color: "black",
                              backgroundColor: "white",
                              textAlign: "center",
                            }}
                          >
                            <b>
                              <u>
                                Farmers List for : {this.state.productName}
                                {/* {farmerList[0].product.productName} */}
                              </u>
                            </b>
                          </h4>

                          <table className="table table-sm table-dark text-center ">
                            <thead className="thead-dark">
                              <tr>
                                {/* <th>Product</th> */}
                                <th>Farmer</th>
                                <th>Contact</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Order Quantity</th>
                                <th>Total Price</th>
                                <th colSpan="3">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {farmerList.map((item) => (
                                <tr key={item.farmer.id}>
                                  {/* <td>{item.product.productName}</td> */}
                                  <td>{item.farmer.name}</td>
                                  <td>{item.farmer.mobileNo}</td>
                                  <td>{item.farmer.averageReview}</td>
                                  <td>
                                    {item.quantity + " " + item.product.unit}
                                  </td>
                                  <td>
                                    Rs.{item.rate + "/" + item.product.unit}
                                  </td>
                                  <td>
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
                                        this.setState({
                                          quantity: e.target.value,
                                        });
                                        item.order_quantity = e.target.value;
                                      }}
                                    />
                                  </td>
                                  <td>
                                    Rs.{item.rate * (item.order_quantity ?? 0)}
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-warning btn-small ml-2 "
                                      onClick={() => {
                                        this.handleQuantity(
                                          item.order_quantity
                                        );
                                        this.orderProduct(
                                          item.farmer.id,
                                          item.rate,
                                          item.order_quantity,
                                          item.quantity,
                                          item.farmer.name,
                                          item.product.productName,
                                          item.product.unit
                                        );
                                      }}
                                    >
                                      Order
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <button
                            className="btn btn-success col-lg-2"
                            onClick={this.handleAdd}
                          >
                            My Store
                          </button>
                          <span>&nbsp;&nbsp;</span>
                          <button
                            className="btn btn-success ml-2 col-lg-2"
                            onClick={this.prevorders}
                          >
                            Previous Orders
                          </button>
                          <span>&nbsp;&nbsp;</span>
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
                              we are sorry
                              <br></br>
                              <br></br>
                              No Farmer sells this product
                              <br></br>
                            </b>
                          </h4>
                          <button
                            className="btn btn-success col-lg-2"
                            onClick={this.gobackfuntion}
                          >
                            My Store
                          </button>
                        </>
                      )}
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
export default connect(mapStateToProps, mapActionsToProps)(CustomerList);
//   render() {
//     return (
//       <div>
//         <h1>hello admin</h1>
//       </div>
//     );
//   }
// }
// export default CardList;
