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
                {/* <div className="col-12"> */}
                <div className="card-comics">
                    {store.comics.map((item, index) => {
                        return (
                            <div className="row no-gutters">
                                <div className="col auto" key={index}>
                                    <div className="card-header">
                                        <img src={item.img_url} className="card-img-top" alt="..." id="newComicsImg" />
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h5 className="card-title"> {item.title}</h5>
                                            <p className="card-text">Publisher: {item.publisher}</p>
                                            <p className="card-text">Description: {item.description}</p>
                                            <p className="card-text">Price: {item.price}</p>
                                            <p className="card-text">Creators: {item.creators}</p>
                                            <p className="card-text">Release date: {item.release_date}</p>
                                            <p className="card-text">Diamond Id: {item.diamond_id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}