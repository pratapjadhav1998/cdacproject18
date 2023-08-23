import "./App.css";
// import FormHandling from "./components/FormHandling";
// import Card from "./cards/Card";
// import CardList from "./components/CardList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import cartList from "./cart/cartList";
import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";
import { addToCartAction } from "./redux/actions/CartAction";
// import PlaceOrder from "./components/PlaceOrder";
import LogOut from "./components/LogOut";
import UserProfile from "./components/UserProfile";
// import ForgotPassword from "./components/ForgotPassword";
import UpdateInfo from "./components/UpdateInfo";
import CustomerHome from "./components/CustomerHome";
import CustomerList from "./components/CustomerList";
import FarmerHome from "./components/FarmerHome";
import CustomerPreviousOrders from "./components/CustomerPreviousOrders";
import FarmerAcceptOrders from "./components/FarmerAcceptOrders";
import farmerlistadmin from "./components/farmerlistadmin";//note connection
import lessreviewlist from "./components/lessreviewlist";
import AdminHome from "./components/AdminHome";
import customerlistadmin from "./components/customerlistadmin";
//import CustomerPreviousOrders from "./components/CustomerPreviousOrders";

class App extends React.Component {
  render() {
    //console.log("Omkar"+this.props.cart.cartList[1].price);
    //const {cart, addToCartAction} = this.props;
    return (
      <>
        <Router>
          <div>
            <Navbar cart={this.props.cart} />
            <switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              {/* <Route exact path="/list" component={CardList} /> */}
              <Route exact path="/Customerlist/:productId" component={CustomerList} />
              <Route
                exact
                path="/prevorders"
                component={CustomerPreviousOrders}
              />
              <Route
                exact
                path="/acceptorders"
                component={FarmerAcceptOrders}
              />
              <Route exact path="/customer" component={CustomerHome} />
              <Route exact path="/farmer" component={FarmerHome} />
              <Route
                exact
                path="/farmerlist"
                component={farmerlistadmin}
              />

              <Route exact path="/lessreviewlist" component={lessreviewlist} />
              <Route
                exact
                path="/customerlistadmin"
                component={customerlistadmin}
              />
              <Route exact path="/admin" component={AdminHome} />

              {/* <Route exact path="/cartlist" component={cartList} />
              <Route exact path="/placeorder" component={PlaceOrder} /> */}
              <Route exact path="/logout" component={LogOut} />
              <Route exact path="/userprofile" component={UserProfile} />
              {/* <Route exact path="/forgotpass" component={ForgotPassword} /> */}
              <Route exact path="/updateinfo" component={UpdateInfo} />
            </switch>
          </div>
        </Router>
        <Footer />
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
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionsToProps)(App);

/* <>
    <div className="container-fluid d-flex"> 
      <h1>Welcome to food Corner</h1>
    </div>
    <div >
      <CardList />
    </div>
    </> */
