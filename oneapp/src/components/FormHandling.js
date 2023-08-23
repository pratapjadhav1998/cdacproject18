import React,{Component} from "react";
import axios from 'axios';
class FormHandling extends Component{

    constructor(props)
    {
        super(props);
         this.state ={
            useremail:'',
            item:'',
            quantity:'',
            price:''
        }
    }

    handleItem = (event) =>{
        this.setState({
            item:event.target.value
        })
    }
    handleQuantity = (event) =>{
        this.setState({
            quantity:event.target.value
        })
    }
    handleEmail = (event) =>{
        this.setState({
            useremail:event.target.value
        })
    }
    handleSubmit = (event) =>{
        let {quantity} = this.state;
        let price = parseInt(quantity) * 100;
        this.setState({price:price},()=>{ 
        alert(`${this.state.item} ${this.state.quantity} ${price}`);
        console.log(this.state);
        this.logic();
        });

       
    }
    logic =()=>{
        alert("In logic");
        console.log("In logic");
        console.log(this.state);
        axios.post("http://localhost:8080/mailserver",this.state).then(response =>{
            let {data} = response;
            console.log(data);
            alert(data);
            alert();
        }).catch(error => {alert(error);console.log("err")});
        
    }
    render()
    {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Enter Item</label><br/>
                <input type="text" value={this.state.item} onChange={this.handleItem} /><br/>
                <label>Enter Quantity</label><br/>
                <input type ="text" value={this.state.quantity} onChange={this.handleQuantity}/><br/>
                <label>Enter Email for Receipt</label><br/>
                <input type="text" value={this.state.useremail} onChange={this.handleEmail} /><br/>
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }

}

export default FormHandling