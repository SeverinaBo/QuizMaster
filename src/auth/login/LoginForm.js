import * as React from "react";
import * as Yup from 'yup';
// @mui
import {Stack, IconButton, InputAdornment, TextField, Button, Typography} from '@mui/material';
import {Field, Form, Formik} from "formik";
//hooks
import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const signupValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email adress')
        .required('Required'),
    password: Yup.string()
        .min(9,"Must be longer than 9 char")
        .required('Required'),
})

export default function LoginForm() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        navigate('/', {replace: true});
    }
    return (
        <>
            <Stack spacing={3} >
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    validationSchema={signupValidationSchema}>
                    {({errors, touched}) => (
                        <Form>
                            <Typography variant="h6" sx={{ mb: 5 }}>

                            <Field id="email"
                                   name="email"
                                   label="Email"
                                   variant="outlined"
                                   fullWidth
                                   error={!!errors.email && touched.email}
                                   helperText={touched.email && errors.email}
                                   as={TextField}
                            />
                            </Typography>

                            <Field id="password"
                                   name="password"
                                   label="Password"
                                   variant="outlined"
                                   fullWidth
                                   as={TextField}
                                   error={!!errors.password && touched.password}
                                   helperText={touched.password && errors.password}
                                   type={showPassword ? 'text' : 'password'}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <IconButton onClick={() => setShowPassword(!showPassword)}
                                                           edge="end">
                                                   <Iconify
                                                       icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                               </IconButton>
                                           </InputAdornment>
                                       ),
                                   }}
                            />


                <Button style={{marginTop: '30px'}} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                    Login
                </Button>

                </Form>
                )}
            </Formik>
            </Stack>
        </>
    );
}
