package com.app.dto;

public class RequestReview {

	private int id;
private int review;
private int farmerid;
private int customerid;
private int productid;
private int rate;
private int quantity;


public RequestReview() {}

public RequestReview(int id, int review, int farmerid, int customerid, int productid, int rate, int quantity) {
	super();
	this.id = id;
	this.review = review;
	this.farmerid = farmerid;
	this.customerid = customerid;
	this.productid = productid;
	this.rate = rate;
	this.quantity = quantity;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getReview() {
	return review;
}
public void setReview(int review) {
	this.review = review;
}
public int getFarmerid() {
	return farmerid;
}
public void setFarmerid(int farmerid) {
	this.farmerid = farmerid;
}
public int getCustomerid() {
	return customerid;
}
public void setCustomerid(int customerid) {
	this.customerid = customerid;
}
public int getProductid() {
	return productid;
}
public void setProductid(int productid) {
	this.productid = productid;
}
public int getRate() {
	return rate;
}
public void setRate(int rate) {
	this.rate = rate;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
@Override
public String toString() {
	return "RequestReview [id=" + id + ", review=" + review + ", farmerid=" + farmerid + ", customerid="
			+ customerid + ", productid=" + productid + ", rate=" + rate + ", quantity=" + quantity + "]";
}



}




