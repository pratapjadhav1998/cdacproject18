package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.persistence.Id;
import com.app.pojos.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Setter
@Getter
@Table(name="Customer_products")
public class Customer_Product extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name="product_id",nullable = false)
	private Products product;
	
	@ManyToOne
	@JoinColumn(name="customer_id",nullable = false)
	private User customer;
	
	@NotNull(message ="please add a valid quantity" )
	@Min(value = 0, message="quantity should be greater than 0")
	private int quantity;
	
	@NotNull(message ="please add valid stock" )
	private double threshold_limit;
	
}