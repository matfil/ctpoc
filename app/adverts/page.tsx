'use client';

import { AdObject } from "../ui/listElement/listElement";
import NewAd from "../ui/newad/newad";
import ListElement from "../ui/listElement/listElement";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";

export default function Adverts(){
    const ad:AdObject = {id:0,name:'Ad name', content:'text', start: '',end: ''};
    const [adList, setAdList]=useState([]as AdObject[]);
    
    useEffect(()=>{
        setAdList(JSON.parse(window.localStorage.getItem('adList')||'{array:[]}').array);
     },[]);

    const handleSave = (value:any) => {
        setAdList(prev => [...prev, value]);
        window.localStorage.setItem('adList', JSON.stringify({array:adList}));
    };
    const handleEdit = ()=>{};
    const handleDelete  = (index:number)=> {
            adList.splice(index,1);
            setAdList([...adList]);
            window.localStorage.setItem('adList', JSON.stringify({array:adList}));
        };

    return(<>
    Lista reklam<br/>
    <Link href="/adverts/new">New ad link</Link>
    <NewAd onSave={handleSave}/>
    
    <Button onClick={()=>{
        window.localStorage.setItem('adList', JSON.stringify({array:[ad,ad,ad]}));
        setAdList([ad,ad,ad]);
    }}>Reset</Button>

    <Button onClick={()=>{
        window.localStorage.setItem('token','');
        redirect('/');
    }}>Sign out</Button>
    {
        adList? adList.map((element:any,index:number)=>{return(
            <ListElement
                key={index} 
                adobject={element} 
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}/>
        )}):null
    }
    </>);
}