import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import {ResponsiveContainer,BarChart,Bar,CartesianGrid, Tooltip, Legend,XAxis, YAxis} from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
// import Toastify from "toastify-js";
import ApiService from "../services/ApiService";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countlist: [],
      flag: false,
      id: 0,
      mydata: [],
    };
  }

  componentDidMount() {
    this.getcountforadmin();
  }
  getcountforadmin = () => {
    console.log("admin COUNT home");
    // console.log("inside retailer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);
    ApiService.getcountforadmin()
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
            countlist: response.data,
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

  handleDelete = (id) => {
    console.log(id);
    const { cart } = this.props;
    const { user } = cart;
    console.log("this is user id-" + user.id);
    let userid = parseInt(user.id);
    console.log(id, userid);
    ApiService.deleteProduct(id, userid)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getCustomerItems();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "cant delete product";
        console.log(err.toString());
      });
  };
  handlefarmer = () => {
    //const { error, isLoaded, retailerItem, handleAdd, flag, handleUpdate } = this.state;
    // this.setState({ flag: !this.state.flag });
    this.props.history.push("/farmer");
  };

  handlecustomer = () => {
    // const { error, isLoaded, retailerItem, handleAdd, flag, handleUpdate } = this.state;
    // this.setState({ flag: !this.state.flag });
    this.props.history.push("/customerlistadmin");
  };

  handlelessreview = () => {
    // const { error, isLoaded, retailerItem, handleAdd, flag, handleUpdate } = this.state;
    // this.setState({ flag: !this.state.flag });
    this.props.history.push("/lessreviewlist");
  };

  render() {
    const { error, isLoaded, countlist, data, handleAdd, flag } = this.state;
    console.log("HERE IS THE DATA");
    console.log(countlist[0]);
    let mydata = [
      {
        name: "Farmer",
        Wholesaler: countlist[0],
      },
      {
        name: "Customer",
        Retailer: countlist[1],
      },
    ];
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      if (flag === true) {
        return (
          <div className="container-fluid ps-md-0">
            <div className="row g-0">
              <div className=" col-md-12 col-lg-12">
                <div className="col-md-12 col-lg-12">
                  <div className="login d-flex align-items-right py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-11 mx-auto">
                          <table className="table table-sm table-dark text-center "></table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        );
      } else {
        return (
          <>
            <div className="container">
              <h1 classsubject="chart-heading" className="text-center">
                Farmer-Customer Ratio
              </h1>
              <br />
              <br />
              <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                  width={500}
                  height={300}
                  data={mydata}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  {/* <YAxis dataKey="total" /> */}
                  <YAxis />
                  {/* <Tooltip /> */}
                  <Legend />
                  <Bar
                    dataKey="Farmer"
                    fill="lightslategrey"
                    maxBarSize={200}
                    label
                  />
                  <Bar
                    dataKey="Customer"
                    fill="crimson "
                    maxBarSize={200}
                    label
                  />
                  {/* <Bar dataKey="fees" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>

              <span>&nbsp;&nbsp;</span>

              <button
                className="btn btn-success ml-6"
                onClick={this.handlefarmer}
              >
                FarmerList
              </button>
              <span>&nbsp;&nbsp;</span>

              <button
                className="btn btn-success ml-6"
                onClick={this.handlecustomer}
              >
                CustomerList
              </button>
              <span>&nbsp;&nbsp;</span>
              <button
                className="btn btn-success ml-6"
                onClick={this.handlelessreview}
              >
                Poor reviews
              </button>
            </div>
            <br></br>
          </>
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
      //setProductId,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionsToProps)(AdminHome);
