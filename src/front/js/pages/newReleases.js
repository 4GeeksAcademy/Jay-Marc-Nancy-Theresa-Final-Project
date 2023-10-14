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
                <h1>Comic New Releases</h1>
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
                                    <h5 className="comicTitle"> {item.title}</h5>
                                    <p className="text">Publisher: <span>{item.publisher}</span> </p>
                                    <p className="text">Description: <span>{item.description}</span></p>
                                    <p className="text">Price: <span>{item.price}</span></p>
                                    <p className="text">Creators: <span>{item.creators}</span></p>
                                    <p className="text">Release date: <span>{item.release_date}</span></p>
                                    <p className="text">Diamond Id: <span>{item.diamond_id}</span></p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>
    );
}