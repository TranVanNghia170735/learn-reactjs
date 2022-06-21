import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';
import { Box } from '@mui/material';
import { Typography } from '@material-ui/core';

FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

function FilterByCategory({onChange}) {

    const [categoryList, setCategoryList] = useState([]);
    
    useEffect(() => {
        (async() => {
            try {
                const list = await categoryApi.getAll();
                console.log(list);
                setCategoryList(
                    list.map((x) => ({
                       id: x.id,
                       name: x.name, 
                    }))
                );
                
            }catch(error){
                console.log('Failed to fetch category list', error);
            }
        })()
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }


    return (
        <Box>
            <Typography> DANH MỤC SẢN PHẨM </Typography>
            <ul>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</li>
                ))}
            </ul>
        </Box>
        
    );
}

export default FilterByCategory;