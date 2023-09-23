package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;


import com.app.pojos.User;



public interface AdminRepository extends JpaRepositoryImplementation<User, Integer> {

}
