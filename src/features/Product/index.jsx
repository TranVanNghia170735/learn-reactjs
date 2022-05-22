import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';

ProductFeature.propTypes = {
    
};
function ProductFeature(props) {
    const match = useRouteMatch(); // Tuong ung voi duong dan cha dinh nghia "/products"   
    return (
        <div>
            Product Feature.
            <Switch>
                <Route path={match.url} exact component={ListPage}></Route>
            </Switch>
        </div>
    );
}

export default ProductFeature;