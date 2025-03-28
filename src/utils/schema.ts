import {boolean, number, object, string} from "yup";

export const loginFormSchema = object({
    email: string().trim().email('Email not valid').required('Please enter your email'),
    password: string().trim().required('Please enter your password'),
    rememberMe: boolean()
})

export const movieFormSchema = object({
    title: string().trim().required('Please enter a title'),
    publishingYear: number()
        .typeError('Please enter a valid number for the year')
        .min(1900, 'Year must be between 1900 and current year')
        .max(new Date().getFullYear(), `Year must be between 1900 and ${new Date().getFullYear()}`)
        .required('Please enter a publishing year'),

})
