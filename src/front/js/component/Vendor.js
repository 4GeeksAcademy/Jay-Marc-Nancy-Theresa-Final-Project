import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vendor = (props) => {
    const {store, actions} = useContext(Context);

    let field
    props.type === "comicVendor" ? (
        field = 
            <ul class="list-group">
                <li class="row list-group-item">
                    <img 
                        className="col li-vendor-img"
                        alt="vendor image"
                        src={`LINKTOIMAGE`}
                    />
                    <div className="col li-vendor-name">testNameWithLink</div>
                </li>
            </ul>
    ) : null

    props.type === "artVendor" ? (
        field = 
        <ul class="list-group">
            <li class="row list-group-item">
                <div class="col">testImage</div>
                <div class="col">testNameWithLink</div>
            </li>
        </ul>
    ) : null

    props.type === "merchVendor" ? (
        field = 
        <ul class="list-group">
            <li class="row list-group-item">
                <div class="col">testImage</div>
                <div class="col">testNameWithLink</div>
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