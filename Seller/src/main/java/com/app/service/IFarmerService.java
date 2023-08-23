package com.app.service;

import java.util.List;

import com.app.pojos.Customer_Product;
import com.app.pojos.Farmer_Product;

public interface IFarmerService {

	List<Farmer_Product> getFarmerItemList(int id);

	List<Farmer_Product> getAllItemList();


	Farmer_Product addNewItemToList(Farmer_Product newAddedItem);

	Farmer_Product deleteItem(int id, int userid);

	Farmer_Product updateQuantity(int id, int quantity,int rate, int userid);

	List<Farmer_Product> getFarmerList(int proid);

	Farmer_Product updatePrice(int id, int rate, int userid);
}
