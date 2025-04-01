export type movieType = {
    id: string,
    title: string,
    publishingYear: number,
    imageUrl: string,
}

export type userType = {
    email: string,
    password: string,
    rememberMe?: boolean,
}

export type MovieFormType = {
    title: string;
    publishingYear: number;
    posterImage?: File | string;
}
