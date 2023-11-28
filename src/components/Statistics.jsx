import React from "react";
import { useContext } from 'react'
import { customers } from "../assets/Data/customers.js";
import { UserContext } from '../context/user.context.jsx';

export const Statistics=()=>{
    const user = useContext(UserContext);
    const nunOfCustomers=customers.length;
    const customersFromThisYear=(customers.filter(customer=> customer.dateJoin==="2023")).length;
    return <div>
        {user.name}, want to join?
        In this CRM has {nunOfCustomers} customers and {customersFromThisYear} from this year!
    </div>
}