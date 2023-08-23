package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User extends BaseEntity {
	
    @Column
	private String name;
    
    @NotNull
	@Column(unique = true)
	private String email;
	
	@Column
	private String password;
	
	@Column(name="mobileNo")
	private String mobileNo;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private UserRole role;
    
//	@Min(value = 0, message="review cant be less than ")
//	@Max(value=5, message="review cant be more than 5") 
	private double averageReview;
	private int reviewCount;
	
	@OneToOne(cascade =CascadeType.ALL)
	@JoinColumn(name="address_id")
	@JsonIgnoreProperties("user")
	Address address;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public double getAverageReview() {
		return averageReview;
	}

	public void setAverageReview(double averageReview) {
		this.averageReview = averageReview;
	}

	public int getReviewCount() {
		return reviewCount;
	}

	public void setReviewCount(int reviewCount) {
		this.reviewCount = reviewCount;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	

}
