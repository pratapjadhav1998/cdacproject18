package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.ProductRepository;
//import com.app.pojo.User;
import com.app.dao.FarmerRepository;
import com.app.pojos.Products;
import com.app.pojos.Customer_Product;
import com.app.pojos.Farmer_Product;

@Service
@Transactional
public class FarmerServiceImpl implements IFarmerService {

	@Autowired
	FarmerRepository itemss;

	@Autowired
	ProductRepository prodsNew;

//	@SuppressWarnings("null")
	@Override
	public List<Farmer_Product> getFarmerItemList(int id) {
		System.out.println("inside Customer repo");
		List<Farmer_Product> itemlist = new ArrayList<>();
		List<Farmer_Product> item = itemss.findAll();
		for (Farmer_Product i : item) {
			System.out.println("inside for" + i);
			if (i.getFarmer().getId() == id) {
				System.out.println("inside if" + i);
				itemlist.add(i);
			}
		}
		return itemlist;
//		throw new UserHandlingException("Email Not Found !!!");

	}

	@Override
	public Farmer_Product addNewItemToList(Farmer_Product newAddedItem) {
		int id = newAddedItem.getFarmer().getId();
		Products prodname = newAddedItem.getProduct();
		System.out.println("----added product-----" + prodname);
		Products product = prodsNew.findByProductName(prodname.getProductName());
		if (product == null) {
			Products newProds = prodsNew.save(prodname);
			System.out.println("---------------------------------------" + id);
			Farmer_Product prods = itemss.save(newAddedItem);
			prods.setProduct(newProds);
			System.out.println(newAddedItem);
			return prods;
		} else {
			newAddedItem.setProduct(product);
			Farmer_Product prods = itemss.save(newAddedItem);
			return prods;
		}

		
//		else {
//			throw new UserHandlingException("Enter a valid Details Of product !!!");
//		}
//		return null;

	}

	@Override
	public Farmer_Product deleteItem(int id, int userid) {
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

		System.out.println("INSIDE DELETE METHOD of FARMER " + id + userid);
		Farmer_Product item = itemss.findByProductIdAndFarmerrId(id, userid);
		System.out.println(item);
		itemss.delete(item);
		return item;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}

	@Override
	public List<Farmer_Product> getAllItemList() {
		List<Farmer_Product> item = itemss.findAll();

		if (item == null) {
			throw new UserHandlingException("No Item in Item List");
		} else {
			return item;
		}
	}

	@Override
	public Farmer_Product updateQuantity(int id, int quantity, int userid) {
		System.out.println("INSIDE UPDATE METHOD of FARMER" + id + " " + quantity + " " + userid);

		Farmer_Product item = itemss.findByProductIdAndFarmerId(id, userid);
		System.out.println("FOUND PRODUCT of FARMER " + item);

		item.setQuantity(quantity);
		Farmer_Product updatedItem = itemss.save(item);
		return updatedItem;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}

	@Override
	public List<Farmerr_Product> getFarmerList(int proid) {
		System.out.println("inside getFarmer service implementation");
		List<Farmer_Product> list = itemss.findByProductId(proid);

		return list;
	}

}
