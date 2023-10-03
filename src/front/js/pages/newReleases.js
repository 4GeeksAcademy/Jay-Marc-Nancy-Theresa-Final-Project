import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const NewReleases = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getComics();
        console.log("here")
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>New Releases</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card-deck">
                        {store.comics.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    {/* <img src={item.image} className="card-img-top" alt="..." /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.publisher}</p>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">{item.price}</p>
                                        <p className="card-text">{item.creators}</p>
                                        <p className="card-text">{item.release_date}</p>
                                        <p className="card-text">{item.diamond_id}</p>
                                        <p className="card-text">
                                            {/* <small className="text-muted">{item.publisher}</small> */}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}