import React from 'react';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {
    
};
function ProductFeature(props) {
    const match = useRouteMatch(); // Tuong ung voi duong dan cha dinh nghia "/products"   
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage}></Route>
                <Route path={`${match.url}/:productId`} exact component={DetailPage}></Route>
            </Switch>
        
        </Box>
    );
}

export default ProductFeature;