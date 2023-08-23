package com.app.service;

import java.util.List;

import com.app.pojos.Order;

public interface IOrderService {

	Order placeorder(Order orderplace);

	List<Order> getallorders(int id);

	Order updatereview(int review, int farmerid, int customerid, int productid, int rate,int quantity);

	List<Order> getfarmerorders(int id);

	Order updatestatus(int status, int farmerid, int customerid, int productid, int rate, int quantity);

	Order updatefarmerreview(int review, int farmerid, int customerid, int productid, int rate, int quantity);

	
}
