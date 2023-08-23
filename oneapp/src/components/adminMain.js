import React, { Component } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
//import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUserEmail, setUserDetails } from "../redux/actions/CartAction";
import ApiService from "../services/ApiService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const EmployeeList = () => {

    const [user, setUser] = useState([]);
  
    const init = () => {
        ApiService.getUser()
        .then(response => {
          console.log('Printing employees data', response.data);
          console.log("here it is")
          setUser(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
  
    useEffect(() => {
      init();
    }, []);
  
    const handleDelete = (uid) => {
      console.log('Printing id', uid);
      ApiService.deleteUser(uid)
        .then(response => {
          console.log('farmer deleted successfully', response.data);
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })

    }
    return (
        <div className="container">
          <h3>List of Employees</h3>
          {/* <hr/>
          <div>
            
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead> */}
              {/* <tbody>
              {
                user.map(user => (
                  <tr key={user.uid}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                     
                      
                      <button className="btn btn-danger ml-2" onClick={() => {
                        handleDelete(user.id);
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            
            
          </div>
        </div> */}
        {/* </table>
        </div> */}
        </div>
      );

            }