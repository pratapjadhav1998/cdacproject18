package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Products;
import com.app.pojos.Customer_Product;

//import com.app.pojo.User;

public interface CustomerRepository extends JpaRepositoryImplementation<Customer_Product, Integer> {
//
//	Customer_Product findByEmailAndPassword(String email, String password);
//
//	Optional<Customer_Product> findByEmail(String email);
//	
//	List<Customer_Product> findAll();
	
	
//	@Query("select new com.app.pojos.Customer_Product(product,customer,quantity,threshold_limit) from customer_Product r where r.product=?1 and r.customer=?2")
//	Customer_Product getProduct(int id,int userid);
	
//	@Query("SELECT salesOrder FROM SalesOrder salesOrder WHERE salesOrder.clientId=:clientId AND salesOrder.driver_username=:driver_username AND salesOrder.date>=:fdate AND salesOrder.date<=:tdate ")
//	 @Transactional(readOnly=true)
//	 List<SalesOrder> findAllSalesByDriver(@Param("clientId")Integer clientId, @Param("driver_username")String driver_username, @Param("fdate") Date fDate, @Param("tdate") Date tdate);
	
//	@Query(select p from Person p where p.forename = :forename and p.surname = :surname)
//	User findByForenameAndSurname(@Param("surname") String lastname,
//	                             @Param("forename") String firstname);
	
//	@Query("select r from Customer_Product r where r.product=:product and r.customer=:customer")
//	Customer_Product findByProductAndCustomer(@Param("product") int id,@Param("customer") int userid);
	
   	
//   @Query("SELECT r FROM Customer_Product r WHERE r.product=:product AND r.customer=:customer")
//  Customer_Product findByProductAndCustomer(@Param("customer") Integer userid,@Param("product") Integer id);
//	
	Customer_Product findByProductIdAndCustomerId(int id,int userid);
	
//	List<Customer_Product> findByCustomerId(int userid);
	
	Products findByProductId(int id);
}
