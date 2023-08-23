package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Customer_Product;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	UserRepository users;

	@Autowired
	OrderRepository order;

	@Override
	public List<User> findAllfarmers() {
		
		
		
		System.out.println("inside Customer repo");

		List<User> wholelist = users.findAllfarmerswithlist();
		System.out.println(wholelist);
		
		List<Double> wholereview = new ArrayList<>();
		List<Integer> wholelist2 = users.findAllfarmerswithId();
		
       List<Integer> countreview=new ArrayList<>();
		System.out.println("DONE WITH THE GETTING ID's FROM USER Table -------" + wholelist2);

		for (Integer i : wholelist2) {
			
			System.out.println(i);
			System.out.println("---------Cheking farmer list--------" + wholelist2);

		if(order.findAverageReview(i)==null)
		{
			wholereview.add(0.0);
			countreview.add(0);
		}
		else
		{
			wholereview.add(order.findAverageReview(i));
			countreview.add(order.findCountReview(i));
			
			
	   }
			System.out.println("-----------------" + wholereview);
			int index = wholelist2.indexOf(i);
			User newuser = wholelist.get(index);

			newuser.setAverageReview(wholereview.get(index));
            newuser.setReviewCount(countreview.get(index));
			System.out.println("----------------------------------------------------");
			System.out.println("-------" + newuser + "---------");
			System.out.println("----------------------------------------------------");

			System.out.println("---------------------AVERAGE FINDING --------------------------------");
		}
		

		return wholelist;
	}


	@Override
	public User deleteusers(int id) {
		
		System.out.println("INSIDE DELETE METHOD"+id);
		User  us =users.findByaddressid(id);
		System.out.println(us);
		users.delete(us);
		return us;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}
	
	
	
	
	
	

	public List<User> findAllcustomers()
	{
		System.out.println("inside customer repo");

		List<User> customerlist = users.findAllcustomerswithlist();
		System.out.println(customerlist);
		
		List<Double> retreview = new ArrayList<>();
		List<Integer> customerlist2 = users.findAllcustomerswithId();
		List<Integer> countreviewCustomer=new ArrayList<>();

		System.out.println("DONE WITH THE GETTING ID's FROM USER Table -------" + customerlist2);

		for (Integer i : customerlist2) {
			System.out.println(i);
			System.out.println("---------Cheking retailer list--------" + customerlist2);
			
			

			if(order.findCountReviewCustomer(i)==null)
			{
				retreview.add(0.0);
				countreviewCustomer.add(0);
			}
			else
			{
				retreview.add(order.findAverageReviewcustomer(i));
				countreviewCustomer.add(order.findCountReviewCustomer(i));
				
			}
			//retreview.add(order.findAverageReviewcustomer(i));
			
			
			System.out.println("-----------------" + retreview);

			int index = customerlist2.indexOf(i);
			User newuser = customerlist.get(index);

			newuser.setAverageReview(retreview.get(index));
            newuser.setReviewCount(countreviewCustomer.get(index));
			System.out.println("----------------------------------------------------");
			System.out.println("-------" + newuser + "---------");
			System.out.println("----------------------------------------------------");

			System.out.println("---------------------AVERAGE FINDING --------------------------------");
		}

		return customerlist;
		
	}
	
	
	public List<User> findAllwithleastReview()
	{
		
		List<User> lessreview = users.findAllwithleastReview();
		
		System.out.println("-------------------");
		
		System.out.println(lessreview);
		return lessreview;
	}
	
	public List<Integer> findcount()
	{
		List<Integer>mylist=new ArrayList<>();
		Integer whole = users.findAllcountfarmer();
		Integer retail = users.findAllcountcustomer();
		
		mylist.add(whole);
		mylist.add(retail);
		System.out.println("-------------------");
		
		System.out.println(whole +"  --farmer---customer count -- "+retail);
		return mylist;
	}
	
	
	
	
}
