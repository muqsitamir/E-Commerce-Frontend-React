import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs";
import Listing from "../components/ProductListing";


export default function Viewall(){

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
                <Listing></Listing>
            </div>

        </div>
    );
}