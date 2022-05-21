import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import PasswordField from '../../../../components/form-controls/PasswordField';



const useStyles = makeStyles((theme) =>({
    root: {
        position:'relative',
        paddingTop:theme.spacing(2),
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main
    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right:0,
    }

}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,

};

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        
        identifier: yup.string()
            .required('Please enter your email.')
            .email('Please enter a valid email address.'),
        password: yup.string()
            .required('Please enter your password ')         
    });
    const form = useForm({
        defaultValues: {       
            identifier:'',
            password:'',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
          await onSubmit(values);
        }
    }

    const {isSubmitting} = form.formState;

    return (
        
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress}/>} 


            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button 
                    disabled={isSubmitting} 
                    type="submit" 
                    className={classes.submit} 
                    variant="contained" 
                    color="primary" fullWidth
                    size="large"
                    >
                    Create an account
                </Button>
            </form>
        </div>
   
    );
}

export default RegisterForm;