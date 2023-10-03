import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const NerdFact = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getNerdFact();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Nerd Fact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {store.nerdFact.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                </div>
                            </div>
                        );

                    }
                    )}
                </div>
            </div>
        </div>

    );
}