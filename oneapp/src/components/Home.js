import React, { Component } from "react";
// import logo from "../components/layout/login-bg.jpeg";
// import image1 from "../data/foodframe.jpg";
// import image2 from "../data/penne.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      // <div className="container">
      //     <div className="container d-none d-md-flex col-md-4 col-lg-6 bg-image">
      //         <img src={logo} style={{align:"left",width:"500px",height:"300px"}}></img>
      //     </div>
      //     <div className="py-4">

      //         <h3>Welcome to the authentic and tasty food ordering portal.</h3>
      //     </div>
      // </div>

      <>
        <div class="bg-image1">
          <div class="text-header">
            <h1>
              {" "}
              <b>Welcome to FarmFresh Network</b>
            </h1>
            <h5>
              <b>
                <i>Order in no time</i>
              </b>
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
