package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Products;
import com.app.pojos.Customer_Product;
import com.app.pojos.Farmer_Product;

//import com.app.pojo.User;

public interface FarmerRepository extends JpaRepositoryImplementation<Farmer_Product, Integer> {
//
//	wholesaler_Product findByEmailAndPassword(String email, String password);
//
//	Optional<wholesaler_Product> findByEmail(String email);
//	

	List<Farmer_Product> findAll();

	List<Farmer_Product> findByFarmerIdOrderByIdDesc(int id);

	Farmer_Product findByProductIdAndFarmerId(int id, int userid);

	List<Farmer_Product> findByProductIdOrderByRate(int proid);

	List<Farmer_Product> findByProductId(int proid);

//	Farmer_Product findByFarmerId(int farmerid);
	//select * from wholesaler_product where farmer_id=10;
	@Query(value = "select * from farmer_product where farmer_id=?", nativeQuery = true)
	Farmer_Product findmyFarmerId(int farmerid);
}
