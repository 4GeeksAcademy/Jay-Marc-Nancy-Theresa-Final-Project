import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")

            : navigate("/login"));

    }, [store.token]);

    return (
        <div className="text-center mt-5">
            <h1>Welcome to your account dashboard!</h1>
            <p>From your account dashboard you can view your bookmarked favorites.</p>
            <h2>My Favorites</h2>
            <div className="row">
                {store.favorites.map((index, item) => {
                    return (
                        <div className="card col-3" key={index}>
                            <h1>{item.index}</h1>
                            {/* <img src={item.image} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p> */}
                                {/* <a href={item.url} className="btn btn-primary">Go to website</a> */}
                            </div>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
};
