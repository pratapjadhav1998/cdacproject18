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
import { textAlign } from "@mui/system";

class FarmerHome2 extends Component {
  constructor(props) {
    super(props);

    const { cart, addToCartAction, total } = this.props;
    const { user } = cart;
    console.log("In main constructor--Farmer ", user.id);
    this.state = {
      farmerItem: [],
      flag: false,
      id: 0,
      //farmer:
      quantity: 0,
      productName:"",
      proid:0,
      rate:0,
    };
  }
// --------------------------------------NEW Added------------------

handleSubmitAgain = () => {
 
  const { cart, addToCartAction, total } = this.props;
    const { user } = cart;
    console.log("in handle submit  ", user.id);
    let userid = user.id;

const addedProduct= {
  farmer: {
    id: userid
    
  },

  product: {
    //id: this.state.proid,
    productName: this.state.productName
  },

  quantity:this.state.quantity,
  rate: this.state.rate
}
console.log("customer Id"+userid);
console.log("prod Id"+this.state.proid);
console.log("pro name"+this.state.productName);
console.log("quantityy"+this.state.quantity);
console.log("thresh limit "+this.state.rate);
console.log("added prods "+addedProduct);

ApiService.addItemFarmer(addedProduct)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getFarmerItems();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "Couldn't add product";
        console.log(err.toString());
      });
    }

// -------------------------------end new added-------------------------------------












  componentDidMount() {
    console.log("Farmer home");
    // console.log("inside customer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);
    ApiService.getFarmerItems(user.id)
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
            farmerItem: response.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

 
  

// --------------------------------------------customer Copy--------------




handleDelete = (id) => {
  console.log(id);
    const { cart } = this.props;
    const { user } = cart;
    console.log("this is user id-" + user.id);
    let userid = parseInt(user.id);
    console.log(id, userid);
    ApiService.deleteProductfarmer(id, userid)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getFarmerItems();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "cant delete product";
        console.log(err.toString());
      });
  };

handleAdd = () => {
  const { error, isLoaded, farmerItem, handleAdd, flag, handleUpdate } =
    this.state;
  this.setState({ flag: !this.state.flag });
};


// handleUpdate = (id) => {
//   const { error, isLoaded, farmerItem, handleAdd, flag, handleUpdate } =
//     this.state;
//   this.setState({ id: id });
//   return <h1>farmers--Entity</h1>;
// };

handleUpdate = (id) => {
  console.log(id);

  this.handleSubmit(id);
};
handleSubmit = (id) => {
  let quant = parseInt(this.state.quantity);
  console.log(id, quant);
  ApiService.updateQuantityfarmer(id, quant)
    .then((response) => {
      const { data } = response;
      console.log(response);
      console.log(data);
      this.getFarmerItems();
    })
    .catch((err) => {
      document.getElementById("error").innerText = "cant modify quantity";
      console.log(err.toString());
    });
};


// ----------------------------------------customer Copy ends--------------------------

  render() {
    const { error, isLoaded, farmerItem, handleAdd, flag } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      if (flag === true) {
        return (
          <div className="container-fluid ps-md-0">
            <div className="row g-0">
              <div className=" col-md-4 col-lg-6 bg-image3">
                <div className="col-md-8 col-lg-9">
                  <div className="login d-flex align-items-right py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-11 mx-auto">
                          <table className="table table-sm table-dark text-center ">
                            <thead className="thead-dark">
                              <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th colSpan="2">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {farmerItem.map((item) => (
                                <tr key={item.product.id}>
                                  <td>{item.product.productName}</td>
                                  <td>
                                    <input
                                      type="number"
                                      style={{
                                        width: "75per",
                                        height: "10per",
                                        textAlign: "center",
                                      }}
                                      placeholder={item.quantity}
                                    />
                                  </td>
                                  <td>{item.rate}</td>

                                  <td>
                                    <button
                                      className="btn btn-success ml-6"
                                      onClick={() => {
                                        this.handleUpdate(item.product.id);
                                      }}
                                    >
                                      update
                                    </button>
                                  </td>
                                  {/* <td>
                                    {item.quantity > item.threshold_limit ? (
                                      <button className="btn btn-outline-danger ml-2 ">
                                        Order
                                      </button>
                                    ) : (
                                      <button className="btn btn-danger ml-2 ">
                                        Order
                                      </button>
                                    )}
                                  </td> */}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <button
                            className="btn btn-dark col-lg-3"
                            onClick={this.handleAdd}
                          >
                            Add item
                          </button>
                          <span>&nbsp;&nbsp;</span>
                          <button className="btn btn-success ml-2 col-lg-3">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-lg-6 bg-image3">
                <div className="col-md-8 col-lg-9">
                  <div className="login d-flex align-items-right py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-11 mx-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
{/* -----------------------------------------------------------------Partition Div------------------- */}
<div className=" col-md-4 col-lg-6 bg-image3">
                <div className="col-md-8 col-lg-9">
                  <div className="login d-flex align-items-right py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-11 mx-auto">
                          {/* {customerItem.map((item) => ( */}

                          <div>
                            <h3 style={{ alignContent: "center" }}>
                              Add Product in your List -:
                            </h3>

                            <div className="form-floating mb-3">
                              <input
                                onChange={(e) => {
                                  console.log(e);

                                  this.setState({
                                    productName: e.target.value,
                                  });
                                 // console.log(productName);
                                }}
                                type="text" class="form-control"
                                id="floatingInput"
                                placeholder="Enter Product Name" />
                              <label for="floatingInput">Product Name</label>
                            </div>


                            <div className="form-floating mb-3">
                              <input
                                onChange={(e) => {
                                  console.log(e);

                                  this.setState({
                                    quantity: e.target.value,
                                  });
                                  //console.log(quantity);
                                }}
                                type="text" class="form-control"
                                id="floatingInput"


                                placeholder="Enter quantity" />
                              <label for="floatingInput">Quantity</label>
                            </div>



                            <div className="form-floating mb-3">
                              <input
                                onChange={(e) => {
                                  console.log(e);

                                  this.setState({
                                    rate: e.target.value,
                                  });
                                 // console.log(threshold_limit);
                                }}

                                type="text" class="form-control"
                                id="floatingInput"
                                placeholder="Enter threshold limit" />
                              <label for="floatingInput">Price</label>
                            </div>



                            <div className="d-grid">
                              <button
                                onClick={this.handleSubmitAgain}
                                className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 signin-button"
                              // type="submit"
                              >
                               Submit
                              </button>
                            </div>

                          </div>
                        </div>
                        {/* ))} */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>









{/* -------------------------------------------------Partition div ends----------------------------- */}
            </div>
          </div>
        );
      } else {
        return (
          <div className="container-fluid ps-md-0">
            <div className="row g-0">
              <div className=" col-md-4 col-lg-6 bg-image2">
                <div className="col-md-8 col-lg-9">
                  <div className="login d-flex align-items-right py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-9 mx-auto">
                          <table className="table table-sm table-dark text-center ">
                            <thead className="thead-dark">
                              <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th colSpan="2">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {farmerItem.map((item) => (
                                <tr key={item.product.id}>
                                  <td>{item.product.productName}</td>
                                  <td>
                                    <input
                                      type="number"
                                      style={{
                                        width: "30per",
                                        height: "10per",
                                        textAlign: "center",
                                      }}
                                      placeholder={item.quantity}
                                    />
                                  </td>
                                  <td>{item.rate}</td>
                                  <td>
                                    <button
                                      className="btn btn-success ml-6"
                                      onClick={() => {
                                        this.handleUpdate(item.product.id);
                                      }}
                                    >
                                      update
                                    </button>
                                  </td>



                                 
                                  <td>
                                    <button
                                      className="btn btn-danger ml-6"
                                      onClick={() => {
                                        this.handleDelete(item.product.id);
                                      }}
                                    >
                                      delete
                                    </button>
                                  </td>

                                  
                                  {/* <td>
                                    {item.quantity > item.threshold_limit ? (
                                      <button className="btn btn-outline-danger ml-2 ">
                                        Order
                                      </button>
                                    ) : (
                                      <button className="btn btn-danger ml-2 ">
                                        Order
                                      </button>
                                    )}
                                  </td> */}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <button
                            className="btn btn-success col-lg-2"
                            onClick={this.handleAdd}
                          >
                            Add item
                          </button>
                          <span>&nbsp;&nbsp;</span>
                          <button className="btn btn-success ml-2 col-lg-2">
                            Delete item
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
export default connect(mapStateToProps, mapActionsToProps)(FarmerHome2);
