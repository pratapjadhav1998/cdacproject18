package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dao.CustomerRepository;
import com.app.pojos.Order;
import java.io.Console;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.ProductRepository;
import com.app.dao.CustomerRepository;
import com.app.pojos.Products;
//import com.app.pojo.User;
import com.app.pojos.Customer_Product;
import com.app.pojos.Farmer_Product;
@Service
@Transactional
public class OrderServiceImpl implements IOrderService {
	@Autowired
	OrderRepository order;
	
	@Autowired
	ProductRepository prodsNew;
	
	
	
	@Override
	public Order placeorder(Order orderplace) {
		int rid=orderplace.getCustomer().getId();
		int wid=orderplace.getFarmer().getId();
		int pid=orderplace.getProduct().getId();
		int status=orderplace.getStatus();
		int quantity=orderplace.getOrder_quantity();
//		Date date=orderplace.getOrder_Date();
		orderplace.setOrder_Date(LocalDate.now());
		System.out.println("rid:"+rid+"wid:"+wid+"pid:"+pid+"status:"+status+"quantity:"+quantity);
		
		
		Order neworder=order.save(orderplace);
		return neworder;
	}



	@Override
	public List<Order> getallorders(int id) {
		System.out.println("inside order repo to get all orders");
//		List<Order> orderlist=new ArrayList<>();
//		List<Order> item=order.findAll();
//		for(Order i:item) {
//			System.out.println("inside for"+i);
//			if(i.getCustomer().getId()==id) {
//				System.out.println("inside if"+i);
//				orderlist.add(i);
//			}
//		}
//		System.out.println("filered items"+orderlist);
		List<Order> orders=order.findByCustomerId(id);
		return orders;
	}
  


	@Override
	public Order updatereview(int review, int farmerid, int customerid, int productid, int rate,int quantity) {
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity)
			{
				o.setReview(review);
				Order updatedorder=order.save(o);
				return updatedorder;
			}
		}
		return null;
	}



	@Override
	public List<Order> getfarmerorders(int id) {
		System.out.println("inside order repo farmer to get all orders");
//		List<Order> orderlist=new ArrayList<>();
//		List<Order> item=order.findAll();
//		for(Order i:item) {
//			System.out.println("inside for"+i);
//			if(i.getCustomer().getId()==id) {
//				System.out.println("inside if"+i);
//				orderlist.add(i);
//			}
//		}
//		System.out.println("filered items"+orderlist);
		List<Order> orders=order.findByFarmerId(id);
		return orders;
	}



	@Override
	public Order updatestatus(int status, int farmerid, int customerid, int productid, int rate, int quantity) {
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity)
			{
				o.setStatus(0);
				Order updatedorder=order.save(o);
				return updatedorder;
			}
		}
		return null;
	}



	@Override
	public Order updatefarmerreview(int review, int farmerid, int customerid, int productid, int rate,
			int quantity) {
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity)
			{
				o.setCreview(review);
				Order updatedorder=order.save(o);
				return updatedorder;
			}
		}
		return null;
	}




}
