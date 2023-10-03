import React from "react";

export const MagicCard =(props) => {
    return (
        <>
            <div className="condensedCard card mx-2 my-4 text-center border-0">
                <center>
                <img className="mtgCardImg" src={props.imageUrl} alt={props.name} />
                <br /><br />
                <button className="btn btn-primary">Add to Favorites!</button>
                </center>
            </div>
        </>
    )
};