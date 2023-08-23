package com.app.service;

import java.io.Console;
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
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	CustomerRepository items;
	
	@Autowired
	ProductRepository prodsNew;
	
//	@SuppressWarnings("null")
	@Override
	public List<Customer_Product> getCustomerItemList(int id) {
		System.out.println("inside customer repo");
		List<Customer_Product> itemlist=new ArrayList<>();
		List<Customer_Product> item=items.findAll();
		for(Customer_Product i:item) {
			System.out.println("inside for"+i);
			if(i.getCustomer().getId()==id) {
				System.out.println("inside if"+i);
				itemlist.add(i);
			}
		}
		return itemlist;
//		throw new UserHandlingException("Email Not Found !!!");
		
	}
	
	
//	
	
//	@Override
//	public Customer_Product updateQuantity(int id, int quantity, int userid) {
//		System.out.println("INSIDE UPDATE METHOD"+id+quantity+userid);
//		Customer_Product item = items.findById(id).orElse(null);
//		if(item!=null)
//		{
//			item.setQuantity(quantity);
//			Customer_Product updatedItem=items.save(item);
//			return updatedItem;
//		}
//		throw new UserHandlingException("Please Enter a Valid Item Id");
//	}

	




	@Override
	public List<Customer_Product> getAllItemList() {
		List<Customer_Product> item= items.findAll();
		
		if(item==null) {
			throw new UserHandlingException("No Item in Item List");
		}
		else {
			return item;
		}
	}

	



	@Override
	public Customer_Product updateQuantity(int id, int quantity, int userid) {
		System.out.println("INSIDE UPDATE METHOD"+id+quantity+userid);
		Customer_Product  item =items.findByProductIdAndCustomerId(id,userid);
		System.out.println("FOUND PRODUCT"+item);
//		for(Customer_Product i:item)
//		{
//			if(i.getProduct().getId()==id)
//			{
//				i.setQuantity(quantity);
//				Customer_Product updatedItem=items.save(i);
//				return updatedItem;
//			}
//		}
		item.setQuantity(quantity);
		Customer_Product updatedItem=items.save(item);
		return updatedItem;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}




	@Override
	public Customer_Product deleteItem(int id,int userid) {
//		List<Customer_Product>  item = items.findByCustomerId(userid);
//		System.out.println("inside SERVICE DELETE"+item);
//		for(Customer_Product i:item)
//		{
//			if(i.getProduct().getId()==itemId)
//			{
////				Customer_Product updatedItem=items.save(i);
//				item.remove(i);
//				System.out.println("REMOVED PRODUCT"+i);
//				List<Customer_Product> updatedItem=items.saveAll(item);
//				System.out.println("UPDATED LIST"+updatedItem);	
//				return updatedItem;
//			}
//		}
		
		System.out.println("INSIDE DELETE METHOD"+id+userid);
		Customer_Product  item =items.findByProductIdAndCustomerId(id,userid);
		System.out.println(item);
		items.delete(item);
		return item;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}
	
	@Override
	public Customer_Product addNewItemToList(Customer_Product newAddedItem) {
		int id=newAddedItem.getCustomerr().getId();
		Products prodname=newAddedItem.getProduct();
       System.out.println("----added product-----"+prodname);
       Products product = prodsNew.findByProductName(prodname.getProductName());
		if (product == null) {
			Products newProds = prodsNew.save(prodname);
			System.out.println("---------------------------------------" + id);
			Customer_Product prods = items.save(newAddedItem);
			prods.setProduct(newProds);
			System.out.println(newAddedItem);
			return prods;
		} else {
			newAddedItem.setProduct(product);
			Customer_Product prods = items.save(newAddedItem);
			return prods;
		}
		//}
//		else {
//			throw new UserHandlingException("Enter a valid Details Of product !!!");
//		}
//		return null;
		
	}
	
	
	
}
