package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Products;
import com.app.pojos.Customer_Product;
import com.app.pojos.Farmer_Product;



public interface FarmerRepository extends JpaRepositoryImplementation<Farmer_Product, Integer> {

	

	List<Farmer_Product> findAll();

	List<Farmer_Product> findByFarmerIdOrderByIdDesc(int id);

	Farmer_Product findByProductIdAndFarmerId(int id, int userid);

	List<Farmer_Product> findByProductIdOrderByRate(int proid);

	List<Farmer_Product> findByProductId(int proid);


	@Query(value = "select * from farmer_product where farmer_id=?", nativeQuery = true)
	Farmer_Product findmyFarmerId(int farmerid);
}
