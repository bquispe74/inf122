"use client"
import Image from "next/image";
import style from "foto.module.css"
import { useState, useEffect } from "react";
function foto (){
    const [perrito, setPerrito] = useState("/vercel.svg");
    const [estado, setEstado]= useState("esperando");
    const url="https://dog.ceo/api/breeds/image/random";

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPerrito(data.message),setEstado(data.status);
        })
    }, [])
    return(
        <div className="">
            <Image src={perrito} />
        </div>
    );
}
export default foto;