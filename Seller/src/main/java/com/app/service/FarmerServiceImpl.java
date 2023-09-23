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
		System.out.println("inside customer repo");
		List<Farmer_Product> itemlist = itemss.findByFarmerIdOrderByIdDesc(id);

		
		return itemlist;
//		throw new UserHandlingException("Email Not Found !!!");

	}

	@Override
	public Farmer_Product addNewItemToList(Farmer_Product newAddedItem) {
		int id = newAddedItem.getFarmer().getId();
		Products prodname = newAddedItem.getProduct();
		System.out.println("----added product-----" + prodname);
		Products product = prodsNew.findByProductName(prodname.getProductName());
		if (product != null) {
			Farmer_Product farmer = itemss.findByProductIdAndFarmerId(product.getId(),
					newAddedItem.getFarmer().getId());
			if (farmer != null) {
				throw new UserHandlingException("Enter a valid Details Of product !!!");
			} else {
				System.out.println("inside else");
				newAddedItem.setProduct(product);
				Farmer_Product prods = itemss.save(newAddedItem);
				return prods;

			}
		} else if (product == null) {
			System.out.println("inside else if");
			Products newProds = prodsNew.save(prodname);
			System.out.println("---------------------------------------" + id);
			Farmer_Product prods = itemss.save(newAddedItem);
			prods.setProduct(newProds);
			System.out.println(newAddedItem);
			return prods;
		}
		return null;

	}

	@Override
	public Farmer_Product deleteItem(int id, int userid) {


		System.out.println("INSIDE DELETE METHOD of FARMER " + id + userid);
		Farmer_Product item = itemss.findByProductIdAndFarmerId(id, userid);
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
	public Farmer_Product updatePrice(int id, int rate, int userid) {
		System.out.println("INSIDE UPDATE METHOD of Farmer for Price" + id + " " + rate + " " + userid);
		Farmer_Product item = itemss.findByProductIdAndFarmerId(id, userid);
		System.out.println("FOUND PRODUCT of Farmer for price  " + item);

		item.setRate(rate);
		Farmer_Product updatedItem = itemss.save(item);
		return updatedItem;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}

	@Override
	public Farmer_Product updateQuantity(int id, int quantity, int rate, int userid) {
		System.out.println("INSIDE UPDATE METHOD of FARMER " + id + " " + quantity + " " + userid);

		Farmer_Product item = itemss.findByProductIdAndFarmerId(id, userid);
		System.out.println("FOUND PRODUCT of FARMER  " + item);
		if (quantity != 0) {
			item.setQuantity(quantity);
		}
		if (rate != 0) {
			item.setRate(rate);

		}

		Farmer_Product updatedItem = itemss.save(item);

		return updatedItem;
//		throw new UserHandlingException("Please Enter a Valid Item Id");
	}

	@Override
	public List<Farmer_Product> getFarmerList(int proid) {
		System.out.println("inside getFarmer service implementation");
		List<Farmer_Product> list = itemss.findByProductIdOrderByRate(proid);

		return list;
	}

}
