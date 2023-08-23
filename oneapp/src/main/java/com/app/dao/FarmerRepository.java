package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Products;

import com.app.pojos.Farmer_Product;

//import com.app.pojo.User;

public interface FarmerRepository extends JpaRepositoryImplementation<Farmer_Product, Integer> {
//
//	farmer_Product findByEmailAndPassword(String email, String password);
//
//	Optional<farmer_Product> findByEmail(String email);
//	

	List<Farmer_Product> findAll();

	List<Farmer_Product> findByFarmerId(int id);

	Farmer_Product findByProductIdAndFarmerId(int id, int userid);

	List<Farmer_Product> findByProductId(int proid);

}
