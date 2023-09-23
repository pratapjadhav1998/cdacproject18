package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Products;
import com.app.pojos.Customer_Product;



public interface CustomerRepository extends JpaRepositoryImplementation<Customer_Product, Integer> {
	
	Customer_Product findByProductIdAndCustomerId(int id,int userid);
	

	
	Products findByProductId(int id);
	List<Customer_Product> findByCustomerIdOrderByIdDesc(int id);

	Customer_Product findByCustomerId(int customerid);


}
