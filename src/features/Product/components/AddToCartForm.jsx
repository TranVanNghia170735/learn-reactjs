import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {
    const schema = yup.object().shape({
        quantity: yup.number()
                    .required('Vui lòng nhập vào số lượng')
                    .min(1, 'Giá trị nhỏ nhất là 1')
                    .typeError('Làm ơn nhập vào kí tự số')
    });
    
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        if (onSubmit){
            await onSubmit(values);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField  name="quantity" label="Quantity" form={form}/>
            <Button type="submit" variant="contained" color="primary" style={{width: '250px'}} size="large">
                Add to cart
            </Button>
        </form>
    );
}

export default AddToCartForm;