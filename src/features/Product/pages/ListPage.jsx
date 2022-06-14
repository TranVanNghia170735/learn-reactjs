import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width:'250px'
    },

    right: {
        flex: '1 1 auto'
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productLis, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            try {
                const {data} = await productApi.getAll({_page: 1, _limit: 10});
                setProductList(data);
            } catch (error) {
                console.log("Failed o fetch product list: ", error);
            }

            //setLoading(false);
        })();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing ={1}>

                    <Grid item className={classes.left}> 
                        <Paper elevation={0}>Left column </Paper>
                    </Grid>

                    <Grid item className={classes.right}>  
                        <Paper elevation={0}> 
                            {loading ? <ProductSkeletonList/> : <Typography>ProductList</Typography>}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;