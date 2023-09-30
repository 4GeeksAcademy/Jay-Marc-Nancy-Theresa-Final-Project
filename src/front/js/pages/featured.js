import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Featured = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
        {console.log("hello from featured",store.rkPostCards)}
        <div className="container-fluid border border-danger m-0">
            <div className="row py-2 cardScrollBars d-flex flex-row flex-nowrap overflow-auto">

                {store.rkPostCards.map((item, index) =>
                    <div className="condensedCard card mx-2 my-5 text-center justify-content-center" key={index}>
                        <center>
                        <p>{item.name} - {item.artist}</p>
                        <img className="mtgCardImg" src={item.imageUrl} />
                        <p>{item.flavor}</p>
                        <p>{item.setName}</p>
                        </center>
                    </div>
                )}

            </div>
        </div>
        </>
    );
};


                {/* <p>{item.artist}</p>
                <p>{item.cmc}</p>
                <p>{item.colorIdentity}</p>
                <p>{item.colors}</p>
                <p>{item.flavor}</p>
                <p>{item.foreignNames}</p>
                <p>{item.id}</p>
                <p>{item.imageUrl}</p>
                <p>{item.layout}</p>
                <p>{item.legalities}</p>
                <p>{item.manaCost}</p>
                <p>{item.multiverseid}</p>
                <p>{item.name}</p>
                <p>{item.number}</p>
                <p>{item.originalText}</p>
                <p>{item.originalType}</p>
                <p>{item.printings}</p>
                <p>{item.rarity}</p>
                <p>{item.rulings}</p>
                <p>{item.set}</p>
                <p>{item.setName}</p>
                <p>{item.text}</p>
                <p>{item.type}</p>
                <p>{item.types}</p> */}