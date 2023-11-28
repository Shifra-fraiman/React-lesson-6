import React from "react";
import { customers } from "../assets/Data/customers";
import { Outlet,Link } from 'react-router-dom'

export const Customers=()=>{
    return <div>
        {customers.map(customer=> <li key={customer.name}> <Link to={customer.name} >{customer.name}</Link> </li>)}
    </div>
}