import {boolean, object, string} from "yup";

export const loginFormSchema = object({
    email: string().trim().email('Email not valid').required('Please enter your email'),
    password: string().trim().required('Please enter your password'),
    rememberMe: boolean()
})
