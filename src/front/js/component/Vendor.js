import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import data from "../../../../data.json";

const Vendor = (props) => {
    const {store, actions} = useContext(Context);

    let field
    props.type === "comicVendor" ? (
        field = 
            <ul class="list-group">
                <li class="row list-group-item">
                    <div className="col li-vendor-name">ComicVendorName</div>
                    {/* the above needs editing, but it's been a minute and the method eludes me */}
                </li>
            </ul>
    ) : null

    props.type === "artVendor" ? (
        field = 
        <ul class="list-group">
            <li class="row list-group-item">
                <div class="col li-vendor-name">ARTVENDORNAME</div>
            </li>
        </ul>
    ) : null

    props.type === "merchVendor" ? (
        field = 
        <ul class="list-group">
            <li class="row list-group-item">
                <div class="col">MERCHVENDORNAME</div>
            </li>
        </ul>
    ): null
    
    return (
        <>
            {field}
        </>
    );

    Vendor.prototype = {
        name: PropTypes.string
    };
};

export default Vendor;