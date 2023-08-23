package com.app.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RequestPrice;
import com.app.dto.RequestQuant;
import com.app.pojos.Farmer_Product;
import com.app.service.IAdminService;
import com.app.service.IFarmerService; 
@RestController
@RequestMapping("/farmer")
@CrossOrigin(origins="http://localhost:3000")
public class FarmerController {
	
	@Autowired
	IFarmerService services;
	@Autowired
	IAdminService servicesadmin;

	@PostMapping("/getitemlist/{id}")
	public ResponseEntity<?> getFarmerItemList(@PathVariable int id)
	{
		System.out.println("inside farmer controller");
		return new ResponseEntity<>(services.getFarmerItemList(id), HttpStatus.OK);//Exception Work
	}
	
	
	
	@PostMapping("/updateQuantity")
	public ResponseEntity<?> updateQuantity(@RequestBody @Valid RequestQuant request)
	{
		
		System.out.println("Request id "+request.getId());
		System.out.println("Request Quantity "+request.getQuantity());
		System.out.println("Request Quantity "+request.getRate());
		System.out.println("Request userid "+request.getUserid());
		return new ResponseEntity<>(services.updateQuantity(request.getId(),request.getQuantity(),request.getRate(),request.getUserid()),HttpStatus.OK);//exception work
	}
	
	
	
	//updatePrice
		@PostMapping("/updatePrice")
		public ResponseEntity<?> updatePrice(@RequestBody @Valid RequestPrice request)
		{
			
			System.out.println("Request id "+request.getId());
			System.out.println("Request Quantity "+request.getRate());
			System.out.println("Request userid "+request.getUserid());
			return new ResponseEntity<>(services.updatePrice(request.getId(),request.getRate(),request.getUserid()),HttpStatus.OK);//exception work
		}
		
		@PostMapping("/addItemFarmer")
		public ResponseEntity<Farmer_Product> addNewItemToList(@RequestBody Farmer_Product newItem)
		{
			
			System.out.println("Here"+newItem);
			return new ResponseEntity<>(services.addNewItemToList(newItem), HttpStatus.CREATED);//Exception not work
		}
		
	@PostMapping("/deleteProduct")
	public List<Farmer_Product>  deleteItem(@RequestBody @Valid RequestQuant request)
	{
		System.out.println("Request id "+request.getId());		
		System.out.println("Request userid "+request.getUserid());
		
		System.out.println("inside DELETE PRODUCT");
		if(services.deleteItem(request.getId(),request.getUserid())!=null)
		{
			System.out.println("inside farmer controller GET ALL PRODUCTS iFFFF");
			return services.getAllItemList();
		}
		return null;
	}
	
	
	
	

	
	@PostMapping("allfarmer/{proid}")
	public ResponseEntity<?> getFarmerList(@PathVariable int proid)
	{
		servicesadmin.findAllfarmers();
		System.out.println("inside toget all farmer list");
		return new ResponseEntity<>(services.getFarmerList(proid), HttpStatus.OK);
	}
}
