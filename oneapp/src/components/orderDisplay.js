import React, { Component } from 'react'

 class orderDisplay extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        console.log("In order display");

        return (
    <div>
        <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Order No:{this.props.order.id}</h5>
                        <div>Total Price:{this.props.order.price}</div>
                        <div>Order Timestamp:{this.props.order.price}</div>
                    </div>
        </div>

    </div>
          
        )
    }
}

export default orderDisplay
