import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { MagicCard } from "../component/magicCard";

export const Featured = () => {
    const { store } = useContext(Context);

    return (
        <>

        <div className="container text-center">
            <div className="row text-start badaboom fs3p5">
                Welcome to Featured Artists!
            </div>
            <div className="row">
                <div className="col-4">
                    <center>
{/* start artist card - rk post */}
                        <a href="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#rkPostModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src="https://www.coolstuffinc.com/s3_image.php?img=http://s3.gatheringmagic.com/uploads/2013/01/23/MJ_08.jpg" className="card-img-top" alt="..." />
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://www.coolstuffinc.com/a/mj-scott-vorthos-art-interview-01232013-7-questions-with-rk-post" target="_blank">MJ Scott</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs1p5">RK POST</h5>
                                    <p className="card-text">With a body of illustrations that matched only by his outgoing personailty, we are thrilled to feature an illustrator at talented as rk post! Click in a deeper dive and a glimpse into the featured Magic artwork gallery of rk post.</p>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary m-0 p-1">Click to learn more!</button>
                                </div>
                            </div>
                        </a>
{/* end artist card - rk post */}
                    </center>
                </div>
                <div className="col-4">
                    <center>
{/* start artist card - fiona staples */}
                        <a href="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#fionaStaplesModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fiona_Staples_-_Lucca_Comics_%26_Games_2014.JPG/800px-Fiona_Staples_-_Lucca_Comics_%26_Games_2014.JPG" className="card-img-top" alt="..." />
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://ca.wikipedia.org/wiki/Fiona_Staples#/media/Fitxer:Fiona_Staples_-_Lucca_Comics_&_Games_2014.JPG" target="_blank">Niccolò Caranti</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fiona Staples</h5>
                                    <p className="card-text">Fiona Staples is a Canadian comic book artist known for her work on books such as North 40, DV8: Gods and Monsters, T.H.U.N.D.E.R. Agents, Archie, and Saga. She has been described as one of the best artists working in the industry today.[6] She has won multiple Eisner and Harvey Awards.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="card-body">
                                    <a href="https://en.wikipedia.org/wiki/Fiona_Staples" className="card-link" target="_blank">Fiona Staples Wiki</a>
                                    <a href="https://fionastaples.tumblr.com/" className="card-link" target="_blank">Official Website of rk post</a>
                                </div>
                            </div>
                        </a>
{/* end artist card - fiona staples */}
                    </center>
                </div>
                <div className="col-4">
                    <center>
{/* start artist card - anthony burch */}
                        <a href="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#anthonyBurchModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src="https://static.wikia.nocookie.net/dungeons-and-daddies-podcast/images/a/ab/BURCH%2C%2BANTHONY_headshot.jpg/revision/latest?cb=20210225014339" className="card-img-top" alt="..." />
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://www.anthonyburch.pizza/about#bio" target="_blank">Anthony Burch</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Anthony Burch</h5>
                                    <p className="card-text">Anthony Burch (born January 12, 1988) is an actor and writer who is known for Hey Ash, Whatcha Playin'?, Anime Crimes Division (with RocketJump), and Tales from the Borderlands: A Telltale Games Series. He has also written comic books (Big Trouble in Little China: Old Man Jack and Rocko's Modern Afterlife) for BOOM! Studios. He is the Dungeon Master for the Dungeons and Daddies podcast. He is also known as the "DM" or "Daddy Master". His sister, Ashly Burch, guest starred in Episode 34 and Episode 55. He also played Beignet during Fetch Quest.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="card-body">
                                    <a href="https://dungeons-and-daddies-podcast.fandom.com/wiki/Anthony_Burch" className="card-link" target="_blank">Anthony Burch Wiki</a>
                                    <a href="https://www.anthonyburch.pizza/#heyhowyadoin" className="card-link" target="_blank">Official Website of Anthony Burch</a>
                                </div>
                            </div>
                        </a>
{/* end artist card - anthony burch */}
                </center>
                </div>
            </div>
        </div>


{/* start rk post modal */}
        <div className="modal fade" id="rkPostModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10 text-start">
                                    <h1 className="modal-title fs-5">RK POST : featured artist profile</h1>
                                </div>
                                    <div className="col-2 text-end">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <p className="m-2">
                        With his unique art style and one-of-a-kind personality, Randy “rk” Post often finds himself at home as a featured artist across numerous venues. Many know rk from his expansive body of work with Magic: the Gathering, but his limits seem to know no bounds. rk has done extensive work spanning from pure magnificence with Marvel and Microsoft to the depths of Hell in Diablo and World of Warcraft. We are proud and excited to feature rk post along with his brand of humor and beautiful illustrations.
                        </p>
                        {/* start magic card mapping */}
                        <div className="container-fluid">
                            <div className="row cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
                                {store.rkPostCards.map((item, index) =>
                                    <MagicCard 
                                        key={index} 
                                        name={item.name} 
                                        setName={item.setName} 
                                        imageUrl={item.imageUrl} 
                                        artist={item.artist}
                                    />
                                )}
                            </div>
                        </div>
                        {/* end magic card mapping */}
                    </div>
                    <div className="modal-footer">
                        <a href="https://en.wikipedia.org/wiki/Randy_Post" className="btn btn-success me-1" target="_blank">rk post Wiki</a>
                        <a href="https://www.rkpost.net/" className="btn btn-success" target="_blank">Official Website of rk post</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
{/* end rk post modal */}


{/* start fiona staples modal */}
        <div className="modal fade" id="fionaStaplesModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Fiona Staples modal</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
{/* end fiona staples modal */}


{/* start anthony burch modal */}
        <div className="modal fade" id="anthonyBurchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Anthony Burch modal</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
{/* end anthony burch modal */}
        </>
    );
};


// {console.log("hello from featured",store.rkPostCards)}
// <div className="container-fluid border border-danger m-0">
//     <div className="row py-2 cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
//         {store.rkPostCards.map((item, index) =>
//             <MagicCard 
//                 key={index} 
//                 name={item.name} 
//                 setName={item.setName} 
//                 imageUrl={item.imageUrl} 
//                 artist={item.artist}
//             />
//         )}
//     </div>
// </div>



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