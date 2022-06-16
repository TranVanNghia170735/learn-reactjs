import React, { useEffect } from 'react';
import { Box, Container, Grid, Pagination, Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width:'250px'
    },

    right: {
        flex: '1 1 0'
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1
    })
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1, 
        _limit: 9,
    });
    
    useEffect(() => {
        (async () => {
            try {
                const {data, pagination} = await productApi.getAll(filters);
                setProductList(data); 
                setPagination(pagination);
            } catch (error) {
                console.log("Failed o fetch product list: ", error);
            }
        setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page1) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page1
        }));
    };

    return (
        <Box>
            <Container>
                <Grid container spacing ={1}>

                    <Grid item className={classes.left}> 
                        <Paper elevation={0}>Left column </Paper>
                    </Grid>

                    <Grid item className={classes.right}>  
                        <Paper elevation={0}> 
                            {loading ? <ProductSkeletonList length={9}/> : <ProductList data={productList}/>}
                            <Pagination color="primary" 
                                count={Math.ceil(pagination.total / pagination.limit)} 
                                page={pagination.page}
                                onChange={handlePageChange}    
                            >
                            </Pagination>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;