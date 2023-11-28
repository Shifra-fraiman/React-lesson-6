import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { customers } from "../assets/Data/customers";
import {  Link } from "react-router-dom";

export const Customer=()=>{
    const {name}= useParams();
    const customer= customers[name];

    // const upDate=(event)=>{
    //     event.preventDefault();
    //     nameChange=event.terget.name;
    //     if(name!='')
    //         customer.name=nameChange
    // }

    useEffect(()=>{
    }, [name],[customer])

    return <div>
        <h3>The datails of: {name}</h3>
        {customers
        .filter(customer=> customer.name===name)
        .map(customer=> <div key={customer.name}>{customer.name} | {customer.phone} | {customer.email} | {customer.dateJoin}</div>)}
        <form action="" onSubmit={e=> upDate(e)}>
            <h2>update the property that you want change</h2>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name='name'></input>
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <input type="text" name='phone'></input>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" name='email'></input>
            </div>
            <button type='submit'>to update</button>
        </form>
        <button><Link to={'/customers'}>to back</Link></button>
    </div>
}