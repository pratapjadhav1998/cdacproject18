package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Order;
import com.app.pojos.Products;

public interface OrderRepository extends JpaRepositoryImplementation<Order, Integer>{

	List<Order> findByCustomerId(int id);

	List<Order> findByFarmerIdAndCustomerIdAndProductId(int farmerid, int customerid, int productid);

	List<Order> findByFarmerId(int id);

	
}
