import {boolean, mixed, number, object, string} from "yup";

export const loginFormSchema = object({
    email: string().trim().email('errorMessage.email.invalid').required('errorMessage.email.empty'),
    password: string().trim().required('errorMessage.password.empty'),
    rememberMe: boolean()
})

export const movieFormSchema = object({
    title: string().trim().required('errorMessage.movieTitle.empty'),
    publishingYear: number()
        .typeError('errorMessage.moviePublishingYear.empty')
        .min(1900, `errorMessage.moviePublishingYear.badYear`)
        .max(new Date().getFullYear(), `errorMessage.moviePublishingYear.badYear`)
        .required('errorMessage.moviePublishingYear.empty'),
    posterImage: mixed<File | string>().optional()
})

