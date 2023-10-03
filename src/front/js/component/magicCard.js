import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const MagicCard =(props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="condensedCard card mx-2 my-5 text-center">
                <center>
                <p>{props.name}</p>
                <p>{props.setName}</p>
                <img className="mtgCardImg" src={props.imageUrl} alt={props.name} />
                <br /><br />
                <p>Illustrated by {props.artist}</p>
                <button className="btn btn-primary">Add to Favorites!</button>
                </center>
            </div>
        </>
    )
};