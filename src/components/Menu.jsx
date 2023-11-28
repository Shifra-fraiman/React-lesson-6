import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Menu=()=>{
    return <div>
        <ul>
            <li><Link to={'customers'}> customers</Link></li>
            <li><Link to={'statistics'}> statistics</Link></li>
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
}