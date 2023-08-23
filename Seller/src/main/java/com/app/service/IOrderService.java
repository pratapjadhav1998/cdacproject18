package com.app.service;

import java.util.List;

import com.app.pojos.Order;

public interface IOrderService {

	Order placeorder(Order orderplace);

	List<Order> getallorders(int id);

	Order updatereview(int id,int review, int farmerid, int customerid, int productid, int rate,int quantity);

	List<Order> getfarmerorders(int id);

	Order updatestatus(int id,int status, int farmerid, int customerid, int productid, int rate, int quantity);

	Order updatefarmerreview(int id,int review, int farmerid, int customerid, int productid, int rate, int quantity);

	Order cancelOrder(int id,int status, int farmerid, int customerid, int productid, int rate, int quantity);

	
}
