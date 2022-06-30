import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import { Button } from '@material-ui/core';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {
    const schema = yup.object().shape({
        quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity')
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
            <InputField name="quantity" label="Quantity" form={form}/>
            <Button type="submit" variant="contained" color="primary" fullWith size="large">Buy</Button>
        </form>
    );
}

export default AddToCartForm;