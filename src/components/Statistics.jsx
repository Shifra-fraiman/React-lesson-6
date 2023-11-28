import React from "react";
import { customers } from "../assets/Data/customers.js";

export const Statistics=()=>{
    const nunOfCustomers=customers.length;
    const customersFromThisYear=(customers.filter(customer=> customer.dateJoin==="2023")).length;
    return <div>
        In this CRM has {nunOfCustomers} customers and {customersFromThisYear} from this year 
    </div>
}