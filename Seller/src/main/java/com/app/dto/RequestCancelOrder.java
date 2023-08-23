package com.app.dto;

public class RequestCancelOrder {

	private int id;
private int status;
private int farmerid;
private int customerid;
private int productid;
private int rate;
private int quantity;


public RequestCancelOrder() {}

public RequestCancelOrder(int id, int status, int farmerid, int customerid, int productid, int rate, int quantity) {
	super();
	this.id = id;
	this.status = status;
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
public int getStatus() {
	return status;
}
public void setStatus(int status) {
	this.status = status;
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
	return "RequestCancelOrder [id=" + id + ", status=" + status + ", farmerid=" + farmerid + ", customerid="
			+ customerid + ", productid=" + productid + ", rate=" + rate + ", quantity=" + quantity + "]";
}





}




