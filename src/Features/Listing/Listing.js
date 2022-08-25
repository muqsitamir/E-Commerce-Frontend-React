import React, {useEffect, useState} from 'react';
import {Grid, Pagination, Stack} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./productsSlice";
import { selectProducts } from "./productsSlice";
import Product from "./Product";

export default function Listing() {
    const [state, setState] = useState({page: 1});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, []);
    const {count, results: products} = useSelector(selectProducts);
    debugger;
    const handlePageChange = (event, newPage) => {
        if (newPage > state.page)
            dispatch(getProducts(newPage));
        if (newPage < state.page)
            dispatch(getProducts(newPage));
        setState({page: newPage});
    };

    return(
        <div className="page">
            <div className="page__content">
                <div className="main-wrapper" >
                    <header className="row db" style={{paddingTop: 30, paddingLeft: '10%', paddingBottom: 20, marginBottom: 40, backgroundColor: "#524F40 ", borderBottom: "inset grey"}}>
                        <div className="col s12 width-100">
                            <h1 className="bold" style={{fontSize: 45, color:"#FDD610 "}}>Heritage Craft</h1>
                        </div>
                    </header>
                    <div style={{marginLeft: 20, marginRight: 30, paddingLeft:'7%', paddingRight: 0}}>
                        <Grid container justify="center" spacing={2}>
                            {products?.map((product) => (
                                <Product content={product}/>
                            ))}
                        </Grid>
                    </div>
                    <Stack spacing={2} sx={{position:'absolute', left: "40%", marginTop: 4, paddingBottom: 10}}>
                      <Pagination
                        count={Math.ceil(count/20)}
                        color={"primary"}
                        variant="outlined"
                        size="large"
                        onChange={handlePageChange}
                      />
                    </Stack>
                </div>
            </div>
        </div>
    );
}
