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
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      cartItem: [],
    };
    this.totalPrice = 0;
  }

  handleIncrementUnits = (product) => {
    console.log("Inc units" + product);
    this.props.incrementUnitsCartAction(product); //Redux plays role here
    this.calculateTotal();
  };

  handleDecrementUnits = (product) => {
    console.log("Dec units" + product);
    this.props.decrementUnitsCartAction(product); //Redux plays role here
    this.calculateTotal();
  };

  handleRemoveItem = (product) => {
    console.log("need to deleted" + product);
    this.props.deleteItemFromCart(product); //Redux plays role here
    this.calculateTotal();
  };

  hadleAddCart = (product) => {
    //     /* const checkProduct = this.state.cartItem.filter(p=>p.id ==product.id);
    //         console.log("Here"+product.id)
    //         if(checkProduct.length >0)
    //         {
    //             console.log("Here in If"+ product);
    //             const otherProduct = this.state.cartItem.filter(p=>p.id !== product.id);
    //             const updated = {
    //                 ...checkProduct[0],
    //                 units : checkProduct[0].units + 1
    //             };
    //             this.setState({
    //                 ...this.state,
    //                 cartItem :[...otherProduct,updated]
    //             },()=>console.log(this.state.cartItem));

    //         }
    //         else{
    //             console.log("Here in else"+ product);
    //             product.units = 1;
    //             let cartItem = this.state.cartItem;
    //             cartItem.push(product)
    //             this.setState({
    //                 ...this.state,
    //                 cartItem :cartItem
    //             },()=>console.log(this.state.cartItem))
    //         }*/
    const { cart, addToCartAction } = this.props;
    this.props.addToCartAction(product); //Redux plays role here
    this.calculateTotal();
  };
  calculateTotal = () => {
    const { cart, addToCartAction } = this.props;
    return cart.total;
  };
  handlePlaceOrder = () => {
    console.log("Herer");
    if (this.props.cart.cartList.length === 0) {
      alert(
        "Nothing is present in cart to place Order !!! Please add some items...."
      );
    } else {
      this.props.history.push("/placeorder");
    }
  };
  render() {
    if (this.props.cart.user === null) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const displayPlaceOrder =
      cart.cartList.length == 0
        ? ""
        : "<div><button onClick={()=>{this.handlePlaceOrder}}>Place Order</button></div>";
    let cardList = Data.map((card) => {
      return (
        <div className="col-md-2">
          <Card
            id={card.id}
            name={card.name}
            image={card.image}
            price={card.price}
            description={card.description}
          ></Card>
        </div>
      );
    });
    const disList = cart.cartList.map((obj) => {
      return (
        <div>
          <Cart
            subUnits={this.handleDecrementUnits.bind(this)}
            addUnits={this.handleIncrementUnits.bind(this)}
            remove={this.handleRemoveItem}
            obj={obj}
          />
        </div>
      );
    });
    return (
      <>
        <div className="row">
          <div style={{ width: "75%" }}>
            <div className="container" style={{ margin: "15px" }}>
              <input
                type="text"
                style={{ width: "300px" }}
                placeholder="Search Item.... "
                onChange={(e) =>
                  this.setState({
                    searchItem: e.target.value,
                  })
                }
              />
            </div>
            <div className="container-fluid d-flex justify-content-left">
              <div className="row">
                {Data.filter((card) => {
                  if (this.state.searchItem == "") return card;
                  else if (
                    card.name
                      .toLowerCase()
                      .includes(this.state.searchItem.toLowerCase())
                  )
                    return card;
                }).map((card) => {
                  return (
                    <div className="col-md-2">
                      <Card
                        card={card}
                        addCart={this.handleAddCart.bind(this)}
                      ></Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div style={{ width: "25%" }}>
            <div>
              <h3>
                Your cart:
                <br />
              </h3>
              <h3></h3>
              {disList}
            </div>
            <div>
              Total Items in cart:{disList.length}
              <br />
              Total Billing Price:
              {this.calculateTotal()}
            </div>
            <div>
              <button
                className="btn btn-outline-success"
                onClick={() => this.handlePlaceOrder()}
              >
                {" "}
                Place Order
              </button>
            </div>
          </div>
        </div>
      </>
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
      addToCartAction,
      incrementUnitsCartAction,
      decrementUnitsCartAction,
      deleteItemFromCart,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionsToProps)(CardList);
//   render() {
//     return (
//       <div>
//         <h1>hello admin</h1>
//       </div>
//     );
//   }
// }
// export default CardList;
