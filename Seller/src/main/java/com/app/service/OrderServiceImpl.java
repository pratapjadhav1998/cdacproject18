package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.FarmerRepository;
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
	@Autowired
	CustomerRepository customer;
	
	@Autowired
	FarmerRepository farmer;
	
	
	@Override
	public Order placeorder(Order orderplace) {
		int rid=orderplace.getCustomer().getId();
		int wid=orderplace.getFarmer().getId();
		int pid=orderplace.getProduct().getId();
		int status=orderplace.getStatus();
		int quantity=orderplace.getOrder_quantity();
//		Date date=orderplace.getOrder_Date();
		orderplace.setOrderdate(LocalDate.now());
		System.out.println("rid:"+rid+"wid:"+wid+"pid:"+pid+"status:"+status+"quantity:"+quantity);
		
		
		Order neworder=order.save(orderplace);
		return neworder;
	}



	@Override
	public List<Order> getallorders(int id) {
		System.out.println("inside order repo to get all orders");

		List<Order> orders=order.findByCustomerIdOrderByIdDesc(id);
		System.out.println("order list is :######"+orders);
		return orders;
	}
  


	@Override
	public Order updatereview(int id,int review, int farmerid, int customerid, int productid, int rate,int quantity) {
		System.out.println("inside farmer imp to update REVIEW /////////////////////");
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity && o.getId()==id)
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

		List<Order> orders=order.findByFarmerIdOrderByIdDesc(id);
		return orders;
	}



	@Override
	public Order updatestatus(int id,int status, int farmerid, int customerid, int productid, int rate, int quantity) {
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity && o.getStatus()!=2 && o.getId()==id )
			{
				System.out.println("INSIDE IF");
				o.setStatus(status);
				Order updatedorder=order.save(o);
				if(o.getStatus()==3 && o.getId()==id)
				{
					Customer_Product ret=customer.findByProductIdAndCustomerId(productid,customerid);
					Farmer_Product wsaler=farmer.findByProductIdAndFarmerId(productid,farmerid);
					ret.setQuantity(ret.getQuantity()+quantity);
					Customer_Product updatedret=customer.save(ret);
					wsaler.setQuantity(wsaler.getQuantity()-quantity);
					Farmer_Product updatedwsaler=farmer.save(wsaler);
				}
				return updatedorder;
			}
		}
		return null;
	}



	@Override
	public Order updatefarmerreview(int id,int review, int farmerid, int customerid, int productid, int rate,
			int quantity) {
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity &&  o.getId()==id)
			{
				o.setCreview(review);
				Order updatedorder=order.save(o);
				return updatedorder;
			}
		}
		return null;
	}



	@Override
	public Order cancelOrder(int id,int status, int farmerid, int customerid, int productid, int rate, int quantity) {
		
		List<Order> orders=order.findByFarmerIdAndCustomerIdAndProductId(farmerid,customerid,productid);
		for(Order o:orders)
		{
			if(o.getOrder_quantity()==quantity && o.getId()==id)
			{
				
				order.delete(o);
				System.out.println("delted item is:@@@@@@@@@@@@@@@@@@"+o);
				return o;
			}
		}
		return null;
	}




}
