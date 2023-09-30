import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import data from "../../../../data.json";

const Vendor = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getArtVendors();   
        actions.getMerchVendors();
    })

    let field
    props.type === "comicVendor" ? (
        field = 
            <ul className="list-group">
            {store.comicVendors.map((vendor, idx) =>
                <a key={idx} href={vendor.site_url} target="_blank">
                    {vendor.name}
                </a>)
            }
            </ul>
    ) : null

    props.type === "artVendor" ? (
        field = 
        <ul className="list-group">
            {data.art_vendors.map((artVendor, index) => 
                <a key={index}>
                    {artVendor.vendor_name}
                </a>)
            }
        </ul>
    ) : null

    props.type === "merchVendor" ? (
        field = 
        <ul className="list-group">
            {data.merch_vendors.map((merchVendor, index) => 
                <a key={index}>
                    {merchVendor.vendor_name}
                </a>)
            }
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