import React, {useEffect, useState} from 'react'
import Breadcrumbs from "../components/Breadcrumbs";
import Listing from "../components/ProductListing";
import {useSelector} from "react-redux";
import {getSubcategorys, selectSubcategorys} from "../slices/subcategorySlice";


export default function Viewall(){
    const {results: categorys} = useSelector(selectSubcategorys);

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>

            <div style={{
                    width: '10%',
                 }}>
            </div>

            <div style={{
                width: '100%'
            }}>
                <Breadcrumbs mt={1} ml={1}/>
                <Listing category={categorys[0]}></Listing>
            </div>

        </div>
    );
}