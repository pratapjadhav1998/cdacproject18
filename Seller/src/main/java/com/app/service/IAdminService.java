package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IAdminService {


	List<User> findAllfarmers();
	List<User> findAllcustomers();
	List<User> findAllwithleastReview();
	List<Integer> findcount();
	User deleteusers(int id);

	
}
