import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCartAction, setUserEmail,resetCartDetails ,setUserDetails} from '../redux/actions/CartAction';
import { incrementUnitsCartAction } from '../redux/actions/CartAction';
import { decrementUnitsCartAction } from '../redux/actions/CartAction';
import { deleteItemFromCart } from '../redux/actions/CartAction';
import axios from 'axios';
import QRCode from 'qrcode.react';
import ApiService from '../services/ApiService';
import * as blobUtil from 'blob-util'
import { Redirect } from 'react-router';
import "../components/layout/table.css";

export class PlaceOrder extends Component {

        constructor(props)
        {
            super(props);
            
        }

        toBlob = (dataURI) => {

            dataURI = dataURI.replace(/^data:/, '');

            const type = dataURI.match(/image\/[^;]+/);
            const base64 = dataURI.replace(/^[^,]+,/, '');
            const arrayBuffer = new ArrayBuffer(base64.length);
            const typedArray = new Uint8Array(arrayBuffer);
        
            for (let i = 0; i < base64.length; i++) {
                typedArray[i] = base64.charCodeAt(i);
            }
        
            return new Blob([arrayBuffer], {type});
          }
        componentDidMount() {
          if(this.props.cart.user === null)
          {
              return <Redirect to={{pathname: '/'}} />
          }
            const qrCodeURL = document.getElementById('qrCode').toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          //console.log(qrCodeURL);
          //console.log("Entire state",this.props.state);
          const u = localStorage.getItem("user");
          //console.log(JSON.stringify(u));
         // console.log("Email is herre",u.email);
          const email = this.props.cart.email;
          //console.log("In placeOrder  ",this.props.cart);
          const qrCode = this.toBlob(qrCodeURL,"image/png");
          console.log("QRCode",qrCode);
          var stringBlob = JSON.stringify(qrCode);
          console.log("stringBLOB",stringBlob);
          var returnOne = JSON.parse(stringBlob);
          console.log("returnOne",returnOne);
          const orderItems = this.props.cart.cartList.map(element =>{
              return {
                  "name":element.name,
                  "quantity":element.units
              }
          })
          const springRequest ={
            "qrCode":stringBlob,
            "price":this.props.cart.total,
            "orderTimeStamp":new Date().toISOString(),
            "orderItems":orderItems
            };
            console.log("springRequest",springRequest);
            console.log("User id",this.props.cart.user.id);
         ApiService.sendOrder(springRequest,this.props.cart.user.id).then(response =>{
                console.log(response.data);
                this.props.setUserDetails(response.data);
            }).catch(error =>{
                console.error(error);
            });
            
          console.log("In plce order ", email);
          let request ={
              cart: this.props.cart,
              email: email,
              qrCode:qrCodeURL
          };
          axios.post("http://localhost:8081/mailserver",request).then(response =>{
            let {data} = response;
            console.log(data);
            alert("The mail has been sent to you for order confirmation.");
        }).catch(error => {alert(error);console.log("err")});
          setTimeout(()=>{
            this.props.history.push("/list");
          },10000)

          setTimeout(()=>{
            this.props.history.push("/list");
            this.props.resetCartDetails();
          },10000)
         }

    render() {
      if(this.props.cart.user === null)
      {
          return <Redirect to={{pathname: '/'}} />
      }
       console.log("In placeOrder  ",this.props.cart);
       let cartItem = this.props.cart.cartList.map((p) =>{ return <tr><td>{p.name}</td><td>{p.units}</td><td>{p.price}</td><td>{p.price*p.units}</td></tr>})
       let qrCodeText = " ";
       let cartList = this.props.cart.cartList;
       cartList.forEach(element => {
           qrCodeText += (element.name +" " + element.units +" " +element.price+ "\n")
       });
       qrCodeText += (this.props.cart.total+"\n");
       qrCodeText += Date.UTC();
       console.log(qrCodeText); 

        return (
            <div>
                Thank you for Ordering;
                <table>
                    {cartItem}
                    <tr><td>{this.props.cart.total}</td></tr>
                </table>
                <div className="container">
                  Your Generated QR Code is as floows for unique delivery.The Mail has been sent to you for confirmation.
                        <QRCode
                            id="qrCode"
                            size={150}
                            value={qrCodeText}
                        />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart}) =>{
    return{
      cart
    }
  }
  
  const mapActionsToProps =(dispatch) =>{
    return bindActionCreators({
        setUserEmail,resetCartDetails,setUserDetails
    },dispatch);
  
  }

  
export default connect(mapStateToProps, mapActionsToProps)(PlaceOrder)
