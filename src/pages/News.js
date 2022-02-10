import {getAllNews} from "../services/news";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function News() {

    const [newsArray, setNewsArray] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllNews();
                setNewsArray(response.data)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);



    return (
        <section className="grid grid-cols-1 grid-rows-[20px, 1fr] w-auto gap-5 bg-slate-100">
            <div className="justify-self-center">
                <h2 className=" text-3xl p-4">Novedades</h2>
            </div>
            <div className="grid gap-6 md:gap-12 md:grid-cols-2 grid-cols-1 justify-items-center">
            {newsArray !== undefined ?
                newsArray.map((element) => {
                    <>
                    <div className="md:grid hidden rounded shadow-md grid-cols-1 grid-rows-[1fr,40px] w-3/4 h-60 bg-white">
                         <img className=" px-1 border-2 row-start-1 row-end-2 col-start-1 col-end-2" src={element.src} ></img>
                         <h3 className=" px-1 place-self-center text-xl row-start-2 row-end-3 col-start-1 col-end-2">{element.name}</h3>
                         <div className=" flex row-start-1 row-end-3 col-start-1 col-end-2 bg-slate-400 opacity-0 hover:opacity-80 justify-center items-center">
                            <button className=" hover:bg-sky-600 rounded p-2 opacity-100 tx text-white bg-sky-500 h-fit">
                                 <Link to={"/novedades/" + element.id}>MÁS INFORMACION</Link>
                             </button>
                         </div>
                     </div>
                     <div className="md:hidden grid rounded shadow-md grid-col-1 grid-rows-[1fr,40px,20px] h-36 bg-white">
                         <img className=" px-1 border-2  min-w-fit max-w-xs" src={element.src} ></img>
                         <h3 className=" px-1 place-self-center text-xl ">{element.name}</h3>
                         <div className=" flex justify-center items-center">
                            <button className=" hover:bg-sky-600 rounded p-2 opacity-100 tx text-white bg-sky-500 h-fit">
                                 <Link to={"/novedades/" + element.id}>MÁS INFORMACION</Link>
                            </button>
                         </div>
                     </div>
                    </> 
                })
               :
               <>
               <div className="flex col-start-1 col-end-3">
                    No se encontraron novedades
                </div>
               </> 
                
                } 
            </div>
        </section>
    )
}

/**
 * 
<div className=" flex row-start-1 row-end-2 col-start-1 col-end-3 bg-slate-400 opacity-0 hover:opacity-80 justify-center items-center">
                        <button className=" hover:bg-sky-600 rounded p-2 opacity-100 tx text-white bg-sky-500 h-fit">
                            MÁS INFORMACION
                        </button>
                    </div>
 */

