import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({filters, onChange}) {

    const handleCategoryChange = (newCategoryId) =>{
        if(!onChange) return;

        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        }
        onChange(newFilters);
    };

    return (
        <div>
           <FilterByCategory onChange={handleCategoryChange}/> 
        </div>
    );
}

export default ProductFilters;