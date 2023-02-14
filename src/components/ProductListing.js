import React, {useEffect, useState} from 'react';
import {Grid, Pagination, Stack} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../slices/productsSlice";
import { selectProducts } from "../slices/productsSlice";
import Product from "./Product";

export default function Listing(props) {
    const [state, setState] = useState({page: 1});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(null, props.category))
    }, []);

    const {count, results: products} = useSelector(selectProducts);

    const handlePageChange = (event, newPage) => {
        if (newPage > state.page)
            dispatch(getProducts(newPage, props.category));
        if (newPage < state.page)
            dispatch(getProducts(newPage, props.category));
        setState({page: newPage});
    };

    return(
        <div className="page" style={{marginBottom: 60, marginTop: 50}}>
            <div className="page__content">
                <div className="main-wrapper" >
                    <div>
                        <Grid container justify="center" spacing={2}>
                            {products?.map((product) => (
                                <Product content={product}/>
                            ))}
                        </Grid>
                    </div>
                    <Stack spacing={2} sx={{position:'absolute', left: "45%", marginTop: 4, paddingBottom: 10}}>
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