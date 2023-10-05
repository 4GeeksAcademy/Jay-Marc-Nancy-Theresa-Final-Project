import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { MagicCard } from "../component/magicCard";

import saga01 from "../../img/saga01.jpg";
import saga02 from "../../img/saga02.jpg";
import saga03 from "../../img/saga03.jpg";
import saga04 from "../../img/saga04.jpg";
import saga05 from "../../img/saga05.jpg";
import saga06 from "../../img/saga06.jpg";
import saga07 from "../../img/saga07.jpg";
import saga08 from "../../img/saga08.jpg";
import saga09 from "../../img/saga09.jpg";
import saga10 from "../../img/saga10.jpg";
import saga11 from "../../img/saga11.jpg";
import anthonyburch from "../../img/anthonyburch.jpg";
import fionastaples from "../../img/fionastaples.jpg";
import rkpost from "../../img/rkpost.png";

let fionaStaplesGallery = [
    {
        "img": saga01,
        "name": "Saga, Vol. 1",
        "url": "https://imagecomics.com/comics/releases/saga-vol-1-tp"
    },
    {
        "img": saga02,
        "name": "Saga, Vol. 2",
        "url": "https://imagecomics.com/comics/releases/saga-vol-2-tp"
    },
    {
        "img": saga03,
        "name": "Saga, Vol. 3",
        "url": "https://imagecomics.com/comics/releases/saga-vol-3-tp"
    },
    {
        "img": saga04,
        "name": "Saga, Vol. 4",
        "url": "https://imagecomics.com/comics/releases/saga-vol-4-tp"
    },
    {
        "img": saga05,
        "name": "Saga, Vol. 5",
        "url": "https://imagecomics.com/comics/releases/saga-vol-5-tp"
    },
    {
        "img": saga06,
        "name": "Saga, Vol. 6",
        "url": "https://imagecomics.com/comics/releases/saga-vol-6-tp"
    },
    {
        "img": saga07,
        "name": "Saga, Vol. 7",
        "url": "https://imagecomics.com/comics/releases/saga-vol-7-tp"
    },
    {
        "img": saga08,
        "name": "Saga, Vol. 8",
        "url": "https://imagecomics.com/comics/releases/saga-vol-8-tp"
    },
    {
        "img":  saga09,
        "name": "Saga, Vol. 9",
        "url": "https://imagecomics.com/comics/releases/saga-vol-9-tp"
    },
    {
        "img": saga10,
        "name": "Saga, Vol. 10",
        "url": "https://imagecomics.com/comics/releases/saga-vol-10"
    },
    {
        "img": saga11,
        "name": "Saga, Vol. 11",
        "url": "https://imagecomics.com/comics/releases/saga-tp-vol-11"
    }
]

export const Featured = () => {
    const { store } = useContext(Context);

    return (
        <>

        <div className="container text-center">
            <div className="row text-start badaboom fs3p5 mb-4">
                Welcome to Featured Artists!
            </div>
            <div className="row">
                <div className="col-xxl-4">
                    <center>
{/* start artist card - rk post */}
                        <Link to="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#rkPostModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src={rkpost} className="card-img-top" alt="..." />
                                    {/* "https://www.coolstuffinc.com/s3_image.php?img=http://s3.gatheringmagic.com/uploads/2013/01/23/MJ_08.jpg" */}
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://www.coolstuffinc.com/a/mj-scott-vorthos-art-interview-01232013-7-questions-with-rk-post" target="_blank">MJ Scott</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs1p5">RK POST</h5>
                                    <p className="card-text">
                                        With a body of illustrations that matched only by his outgoing personailty, we are excited to feature an illustrator at talented as rk post! Click in a deeper dive and a glimpse into the featured Magic artwork gallery of rk post.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary m-0 p-1">Click to learn more!</button>
                                </div>
                            </div>
                        </Link>
{/* end artist card - rk post */}
                    </center>
                </div>
                <div className="col-xxl-4">
                    <center>
{/* start artist card - fiona staples */}
                        <Link to="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#fionaStaplesModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src={fionastaples} className="card-img-top" alt="..." />
                                    {/* https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fiona_Staples_-_Lucca_Comics_%26_Games_2014.JPG/800px-Fiona_Staples_-_Lucca_Comics_%26_Games_2014.JPG */}
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://ca.wikipedia.org/wiki/Fiona_Staples#/media/Fitxer:Fiona_Staples_-_Lucca_Comics_&_Games_2014.JPG" target="_blank">Niccolò Caranti</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fiona Staples</h5>
                                    <p className="card-text">
                                        Fiona Staples is a breakthrough artist and a game-changer known for her groundbreaking work with the instant-hit series, Saga. We are thrilled and awestruck to have such a masterful illustrator joining us. Please click to learn more!
                                    </p>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary m-0 p-1">Click to learn more!</button>
                                </div>
                            </div>
                        </Link>
{/* end artist card - fiona staples */}
                    </center>
                </div>
                <div className="col-xxl-4">
                    <center>
{/* start artist card - anthony burch */}
                        <Link to="#" className="featuredArtistModalLink" data-bs-toggle="modal" data-bs-target="#anthonyBurchModal">
                            <div className="card featuredArtistCard">
                                <div className="featuredArtistImagecontainer">
                                    <img src={anthonyburch} className="card-img-top" alt="..." />
                                    {/* https://static.wikia.nocookie.net/dungeons-and-daddies-podcast/images/a/ab/BURCH%2C%2BANTHONY_headshot.jpg/revision/latest?cb=20210225014339 */}
                                    <div className="copyrightOverlay">Image rights and credits belong to <a href="https://www.anthonyburch.pizza/about#bio" target="_blank">Anthony Burch</a>.</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Anthony Burch</h5>
                                    <p className="card-text">
                                        Anthony Burch is an actor, writer, and force to be reckoned with. We are honored to be able to showcase such a creative talent. Please join out enthusiasm for our artist highlight of the prolific Dungeon Master Anthony Burch!
                                    </p>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary m-0 p-1">Click to learn more!</button>
                                </div>
                            </div>
                        </Link>
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
                                    <h1 className="modal-title badaboom fs2p5">RK POST : featured artist profile</h1>
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
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10 text-start">
                                    <h1 className="modal-title badaboom fs2p5">FIONA STAPLES : featured artist profile</h1>
                                </div>
                                    <div className="col-2 text-end">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="modal-body">
                        <p className="m-2">
                        Fiona Staples is the Canadian born illustrator behind the masterpiece known as Saga. Arguably one of the best artists in the industry, Staples is iconic, and unique, and the winner of multiple Eisner and Harvey awards. Other well known works by Staples include the Archie revamp, the Chronicles of Narnia, and DV8: Gods and Monsters. 
                        </p>
                        {/* start magic card mapping */}
                        <div className="container-fluid">
                            <div className="row cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
                                {fionaStaplesGallery.map((item, index) =>
                                    <div className="condensedCard card my-4 text-center border-0" key={index}>
                                        <center>
                                            <a href={item.url} target="_blank">
                                                <img src={item.img} className="mtgCardImg" alt={item.name} />
                                            </a>
                                            <br /><br />
                                            <button className="btn btn-primary">
                                                Add to Favorites!
                                            </button>
                                        </center>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* end magic card mapping */}
                    </div>
                    <div className="modal-footer">
                        <a href="https://en.wikipedia.org/wiki/Fiona_Staples" className="btn btn-success me-1" target="_blank">Fiona Staples Wiki</a>
                        <a href="https://fionastaples.tumblr.com/" className="btn btn-success" target="_blank">Official Website of Fiona Staples</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
{/* end fiona staples modal */}


{/* start anthony burch modal */}
        <div className="modal fade" id="anthonyBurchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10 text-start">
                                    <h1 className="modal-title badaboom fs2p5">ANTHONY BURCH : featured artist profile</h1>
                                </div>
                                    <div className="col-2 text-end">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="modal-body">
                        <p className="m-2">
                            The multitalented Anthony Burch has been the recipient of the coveted Forbes 30 Under 30 as well as <i>several</i> Audioverse Awards for his work with Dungeons and Daddies. Prior to his prolific podcast career, Anthony was a writer for several video game developers, such ad Visual Concepts, Riot Games, and Gearbox with notable works on Borderlands 2. Anthony also dabbled in writing comic books and has published works under Big Trouble in Little China: Old Man Jack and Rocko’s Modern Afterlife. Please check out the podcast reel below and delve into Anthony’s personal website for much more content!
                        </p>
                        {/* start dungeons and daddies podcast mapping */}
                        <div className="container-fluid">
                            <div className="row cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
                                <div className="col-4 text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/65127637f8d0a600113e756b"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/650004e8d1d5030011e90987"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64eda5c59a27a50011c78ecb"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64db2803b331200011b09e89"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64c89af5c501f600119bcc12"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64b6374ae331870011e08756"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64a3b05b4225470011983a1f"></iframe>
                                </div>
                                <div className="col-4  text-center m-2">
                                    <iframe title="Embed Player" className="iframe" src="https://embed.acast.com/46e42ca7-4921-5f04-a297-1970e72fd86d/64913d0e89f1240011e68c64"></iframe>
                                </div>
                            </div>
                        </div>
                        {/* end dungeons and daddies podcast mapping */}
                    </div>
                    <div className="modal-footer">
                        <a href="https://dungeons-and-daddies-podcast.fandom.com/wiki/Anthony_Burch" className="btn btn-success me-1" target="_blank">Anthony Burch Wiki</a>
                        <a href="https://www.anthonyburch.pizza/#heyhowyadoin" className="btn btn-success" target="_blank">Official Website of Anthony Burch</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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