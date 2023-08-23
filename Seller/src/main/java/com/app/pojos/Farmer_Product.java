package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="farmer_product")
public class Farmer_Product extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name="product_id",nullable = false)
	private Products product;
	
	@ManyToOne
	@JoinColumn(name="farmer_id",nullable = false)
	private User farmer;
	
	@NotNull(message ="please add a valid quantity" )
	@Min(value = 1, message="quantity should be greater than 0")
	private int quantity;
	
	@NotNull(message ="please add a valid price" )
	private double rate;

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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}
	
	
	
}
