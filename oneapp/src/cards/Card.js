import React from "react";
import "./card-style.css";
function Card(props) {
  return (
    <>
      <div>
        <div className="card">
          {/* <div className="overflow">
                    <img className="card-img-top" src={props.card.image} alt=""/>
                </div> */}
          <div className="card-body">
            <h6 className="card-title">{props.card.name}</h6>
            {/* <p className="card-text">
                        {props.card.description}
                    </p> */}
            <div className="class-footer">
              RS.{props.card.price} /-
              <br />
              <button
                onClick={() => props.addCart(props.card)}
                className="btn btn-outline-success"
                style={{ margin: "10px" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
