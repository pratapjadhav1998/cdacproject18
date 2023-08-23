//package com.app.pojos;
//
//import java.time.LocalDate;
//
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//@Entity
//@Table(name="order")
//@NoArgsConstructor
//@AllArgsConstructor
//@Data
//public class Order extends BaseEntity {
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="product_id",nullable = false)
//	private Products Product;
//	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="wholesaler_id",nullable = false)
//	private User wholesaler;
//	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="retailer_id",nullable = false)
//	private User retailer;
//	
//	private LocalDate orderDate;
//	
//	private int review;
//	
//	private OrderStatus status;
//	
//	private int orderQuantity;
//
//}



package com.app.pojos;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.app.pojos.User;
import com.app.pojos.Products;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="Orders")
public class Order extends BaseEntity {

	@ManyToOne
	@JoinColumn(name="product_id",nullable = false)
	private Products product;
	
	@ManyToOne
	@JoinColumn(name="farmer_id",nullable = false)
	private User farmer;
	
	@ManyToOne
	@JoinColumn(name="customer_id",nullable = false)
	private User customer;
	
	
	private LocalDate orderdate;
	
	@NotNull
	private int order_rate;

	@Min(value = 1, message="quantity cant be less than 1")
	private int order_quantity;
	

	@Min(value = 0, message="status cant be less than 0")
	@Max(value=3, message="status cant be less than 3")
	private int status;
	

	@Min(value = 0, message="review cant be less than ")
	@Max(value=5, message="review cant be more than 5")
	private int review;
	
	@Min(value = 0, message="review cant be less than ")
	@Max(value=5, message="review cant be more than 5")
	private int creview;

	public Products getProduct() {
		return product;
	}

	public void setProduct(Products product) {
		this.product = product;
	}

	public User getFarmer() {
		return farmer;
	}

	public void setFarmer(User farmer) {
		this.farmer = farmer;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public LocalDate getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(LocalDate orderdate) {
		this.orderdate = orderdate;
	}

	public int getOrder_rate() {
		return order_rate;
	}

	public void setOrder_rate(int order_rate) {
		this.order_rate = order_rate;
	}

	public int getOrder_quantity() {
		return order_quantity;
	}

	public void setOrder_quantity(int order_quantity) {
		this.order_quantity = order_quantity;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getReview() {
		return review;
	}

	public void setReview(int review) {
		this.review = review;
	}

	public int getCreview() {
		return creview;
	}

	public void setCreview(int creview) {
		this.creview = creview;
	}
	
	
}








