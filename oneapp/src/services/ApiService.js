import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080";

class ApiService {
  authenticateUser(email, password) {
    //return axios.post(USER_API_BASE_URL+'/authenticate?email='+email+"&password="+password);
    return axios.post(USER_API_BASE_URL + "/users/authenticate", {
      email: email,
      password: password,
    });
  }

  addUser(user) {
    return axios.post(USER_API_BASE_URL + "/users/adduser", user);
  }

  sendOrder(order, uid) {
    return axios.post(USER_API_BASE_URL + "/users/placeorder/" + uid, order);
  }

  checkEmail(email) {
    return axios.post(USER_API_BASE_URL + "/users/checkUser/" + email);
  }
  deleteById(id) {
    return axios.delete(USER_API_BASE_URL + "/users/checkUser/" + id);
  }
  getCustomerItems(id) {
    return axios.post(USER_API_BASE_URL + "/customer/getitemlist/" + id);
  }
  updateQuantity(proid, quantity, userid) {
    return axios.post(USER_API_BASE_URL + "/customer/updateQuantity", {
      id: proid,
      quantity: quantity,
      userid: userid,
    });
  }
  farmerupdateQuantity(proid, quantity, rate, userid) {
    return axios.post(USER_API_BASE_URL + "/farmer/updateQuantity", {
      id: proid,
      quantity: quantity,
      rate: rate,
      userid: userid,
    });
  }
  deleteProduct(id, userid) {
    return axios.post(USER_API_BASE_URL + "/customer/deleteProduct/", {
      id: id,
      userid: userid,
    });
  }
  farmerdeleteProduct(id, userid) {
    return axios.post(USER_API_BASE_URL + "/farmer/deleteProduct/", {
      id: id,
      userid: userid,
    });
  }

  addItem(addedProduct) {
    return axios.post(USER_API_BASE_URL + "/customer/addItem", addedProduct);
  }
  farmeraddItem(addedProduct) {
    return axios.post(
      USER_API_BASE_URL + "/farmer/addItemFarmer",
      addedProduct
    );
  }
  getFarmerItems(id) {
    return axios.post(USER_API_BASE_URL + "/farmer/getitemlist/" + id);
  }

  getFarmerList(id) {
    return axios.post(USER_API_BASE_URL + "/farmer/allfarmer/" + id);
  }

  placeOrder(orderplace) {
    return axios.post(USER_API_BASE_URL + "/order/placeorder/", orderplace);
  }
  getAllOrders(id) {
    return axios.post(USER_API_BASE_URL + "/order/getallorders/" + id);
  }
  farmerGetAllOrders(id) {
    return axios.post(USER_API_BASE_URL + "/order/farmergetorders/" + id);
  }
  updateReview(id, review, farmer, customer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/updatereview/", {
      id: id,
      review: review,
      farmerid: farmer,
      customerid: customer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  updateStatus(id, status, farmer, customer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/updatestatus/", {
      id: id,
      status: status,
      farmerid: farmer,
      customerid: customer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  updateFarmerReview(
    id,
    review,
    farmer,
    customer,
    product,
    rate,
    quantity
  ) {
    return axios.post(USER_API_BASE_URL + "/order/updatefarmerreview/", {
      id: id,
      review: review,
      farmerid: farmer,
      customerid: customer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  getFilteredcustomerProducts(customerId) {
    return axios.post(
      USER_API_BASE_URL + "/customer/getfilteredproducts/" + customerId
    );
  }
  cancelOrder(id, status, farmer, customer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/cancelorder/", {
      id: id,
      status: status,
      farmerid: farmer,
      customerid: customer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  // ----------------------------------------ADMIN-----------------------------
  getFarmerListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getfarmerlist/");
  }

  getcustomerListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getcustomerlist/");
  }

  getreviewListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getleastreview/");
  }

  getcountforadmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getcount/");
  }
  deletefarmeronreview(id) {
    return axios.post(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  // deletefarmeronreview(id) {
  //   return axios.delete(USER_API_BASE_URL + "/users/checkUser/" + id);
  // }

  deletecustomeronreview(id) {
    return axios.post(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  deletelessonreview(id) {
    return axios.delete(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  // ------------------------------------------------------ADMIN ENDS_------------------------
}

export default new ApiService();
