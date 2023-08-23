package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Order;
import com.app.pojos.Products;

public interface OrderRepository extends JpaRepositoryImplementation<Order, Integer>{

	List<Order> findByCustomerId(int id);

	List<Order> findByFarmerIdAndCustomerIdAndProductId(int farmerid, int customerid, int productid);

	List<Order> findByFarmerIdOrderByIdDesc(int id);

	List<Order> findByCustomerIdOrderByIdDesc(int id);
	//Order findByWholesalerIdAndRetailerIdAndProductId(int farmerid, int customerid, int productid);
	 
		//@Query(value = "SELECT AVG(review) FROM ORDER WHERE wholesaler_id = ?1", nativeQuery = true)
		
//		@Query("SELECT AVG(review) FROM Order WHERE wholesaler_id = ?")
		
		@Query(value = "SELECT AVG(review) FROM orders WHERE farmer_id=?", nativeQuery = true)
		Double findAverageReview(double wholelist2);
		
		@Query(value = "select count(review) from orders where farmer_id=?", nativeQuery = true)
		Integer findCountReview(int wholelist2);
		
		////Integer findAverageReview(int wholelist2);
		//List<Integer>
		
		@Query(value = "SELECT AVG(creview) FROM orders WHERE customer_id=?", nativeQuery = true)
		Double findAverageReviewcustomer(double wholelist2);
		
		@Query(value = "select count(creview) from orders where customer_id=?", nativeQuery = true)
		Integer findCountReviewCustomer(int wholelist2);
}
