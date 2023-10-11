import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/newReleases.css";

export const NewReleases = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getComics();
        console.log("here")
    }, []);

    return (
        <div className="newComicsContainer">
            <div className="col">
                <h1>New Releases</h1>
            </div>

            <div>
                {store.comics.map((item, index) => {
                    return (
                        <div className="">
                            <div className="row" id="cardComics" key={index}>
                                <div className="col my-3">
                                    <img src={item.img_url} className="" alt="..." id="newComicsImg" />
                                </div>

                                <div className="col my-3" id="newComicsText">
                                    <h5 className=""> {item.title}</h5>
                                    <p className="text">Publisher: {item.publisher}</p>
                                    <p className="text">Description: {item.description}</p>
                                    <p className="text">Price: {item.price}</p>
                                    <p className="text">Creators: {item.creators}</p>
                                    <p className="text">Release date: {item.release_date}</p>
                                    <p className="text">Diamond Id: {item.diamond_id}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>
    );
}