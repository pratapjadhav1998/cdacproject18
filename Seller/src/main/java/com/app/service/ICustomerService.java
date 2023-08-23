package com.app.service;

import java.util.List;

import com.app.pojos.Customer_Product;

public interface ICustomerService {

	List<Customer_Product> getCustomerItemList(int id);
	
	
	List<Customer_Product> getAllItemList();
	

	Customer_Product deleteItem(int id,int userid);

	Customer_Product updateQuantity(int id, int quantity, int userid);
	Customer_Product addNewItemToList(Customer_Product newAddedItem);


	List<Customer_Product> getFilteredItemList(int id);
}
