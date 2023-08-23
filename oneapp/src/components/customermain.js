import React, { Component } from 'react'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserEmail, setUserDetails } from '../redux/actions/CartAction'
import ApiService from '../services/ApiService';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function customermain() {

    return (
        <div class="float-left">
            <div class="row ">
                <div class="col col-lg-6">

                    

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">ProductName</th>
                                    <th scope="col">Unit</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Oil</td>
                                    <td>litre</td>
                                    <td>100</td>
                                    <td>order</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Buscuit</td>
                                    <td>Packets</td>

                                    <td>50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Shampoo</td>
                                    <td>Packets</td>
                                    <td>50</td>
                                    <td>order</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-danger">Update List</button>
                        <button type="button" class="btn btn-danger">Previous Orders</button>
                    </div>
                </div>
            </div>



    )
}


