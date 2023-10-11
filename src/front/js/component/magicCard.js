import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/magicCard.css";

export const MagicCard =(props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="condensedCard card mx-2 my-4 text-center border-0">
                <center>
                <img className="mtgCardImg" src={props.imageUrl} alt={props.name} />
                <br /><br />
                {store.token && store.token != "" && store.token != undefined ? 
                    <button className="button-55 bgLightRed">
                        Add to Favorites!
                    </button>
                :
                <>&nbsp;</>
                }
                </center>
            </div>
        </>
    )
};