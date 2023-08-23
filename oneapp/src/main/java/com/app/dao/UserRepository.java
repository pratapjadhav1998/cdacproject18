package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.User;

public interface UserRepository extends JpaRepositoryImplementation<User, Integer> {

	User findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(String email);
	

}
