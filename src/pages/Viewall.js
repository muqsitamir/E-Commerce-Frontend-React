import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "@types/react";
import {getProductList, selectProductList} from "../slices/productListSlice";


export default function Viewall(props){
    const {results: productList} = useSelector(selectProductList);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProductList())
    }, []);


    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>

            <div style={{
                width: '30%',
                backgroundColor: 'green',
                textAlign: 'center',
                color: 'white'
             }}>
                <h1>Filters Column</h1>
            </div>

            <div style={{
                width: '55%',
            }}>
                <Breadcrumbs mt={1} ml={1}/>
                <Typography sx={{color: "#121c28", fontWeight: 700, fontSize: "36px", mt: 3, ml: 1}} variant="h3" gutterBottom>
                    View All
                </Typography>

            </div>

        </div>
    );
}