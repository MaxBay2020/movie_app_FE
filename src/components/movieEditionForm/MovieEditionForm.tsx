import {Box, CircularProgress, Grid, IconButton, Skeleton, Typography, useMediaQuery, useTheme} from "@mui/material";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import {useDropzone} from 'react-dropzone'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {movieFormSchema} from "../../utils/schema";
import {lazy, memo, useCallback, useEffect, useState} from "react";
import {formatFileSize, MAX_IMAGE_SIZE, Message, StatusCode} from "../../utils/helper";
import {useNavigate, useParams} from "react-router-dom";
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import {useTranslation} from "react-i18next";
import useQueryMovieByMovieId from "../../customHooks/useQueryMovieByMovieId";
import {Slide, toast} from "react-toastify";
import {userLogout} from "../../features/authFeatures/userSlice";
import useLogout from "../../customHooks/useLogout";
import useUpdateMovie from "../../customHooks/useUpdateMovie";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../redux/hooks";
import {MovieFormType} from "../../utils/types";

const AlertDialog = lazy(() => import('../alert/Alert'))


const MovieEditionForm = () => {
    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
    const isNestHubScreen = useMediaQuery("(max-width: 1280px) and (max-height: 600px)")

    const { movieId } = useParams()
    const { t } = useTranslation()

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()




    const [imagePreview, setImagePreview] = useState<null | string>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false)


    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: ["queryAllMovies"] })
        queryClient.invalidateQueries({ queryKey: ["queryMovieByMovieId", movieId] })
        navigate('/movies?success=true')
    }

    const onError = (res: any) => {
        const statusCode = res.response.status

        if(statusCode === StatusCode.E401){
            logoutUser()
            dispatch(userLogout())
            // token not valid, redirect user to login page
            navigate('/login')
            return false
        }

        const translate = Message[res.response.data.message as keyof typeof Message]

        if(toast.isActive(t(translate))){
            return false
        }
        toast.error(t(translate), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            toastId: t(translate)
        })

        return false
    }

    const {mutate: logoutUser} = useLogout({
        onSuccess: () => {},
        onError: () => {}
    })

    const { data, isSuccess } = useQueryMovieByMovieId({
        queryKey: 'queryMovieByMovieId',
        movieId: movieId!,
        onError
    })

    const movie = data?.movie

    const handleOpenAlertDialog = () => {
        setOpenAlertDialog(true)
    }

    const handleCloseAlertDialog = () => {
        setOpenAlertDialog(false)
    }

    const renderDropZoneBoxSkeleton = () => (
        <Skeleton
            variant="rectangular"
            sx={(theme) => ({
                mb: {
                    xs: '40px',
                    md: '0'
                },
                width: {
                    md: '473px'
                },
                maxWidth: {
                    xs: '380px',
                    md: '473px'
                },
                height: {
                    xs: '300px',
                    sm: '372px',
                    md: '504px'
                },
                backgroundColor: theme.palette.inputColor.main,
            })}
        />

    )


    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isDirty }
    }  = useForm<MovieFormType>({
        resolver: yupResolver(movieFormSchema),
        defaultValues: movie
    })

    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0]
        if(!file){
            return
        }

        setImagePreview(URL.createObjectURL(file))
        setValue('posterImage', file, { shouldValidate: true })
    }, [])

    const onDropRejected = useCallback(
        (fileRejections: any) => {
            const errorMessage = fileRejections[0].errors[0].code
            if(errorMessage === 'file-too-large'){

                setError('posterImage', {
                    message: 'errorMessage.movieImage.tooLarge'
                })
            }
        },
        []
    )


    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        onDropRejected,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg, .jpeg'],
        },
        maxSize: MAX_IMAGE_SIZE,
        multiple: false
    })



    const { mutate: updateMovie, isPending } = useUpdateMovie({
        onSuccess,
        onError
    })

    useEffect(() => {
        if(isSuccess){
            setValue('title', movie?.title)
            setValue('publishingYear', movie?.publishingYear)
            setValue('posterImage', movie?.imageUrl)
            setImagePreview(movie?.imageUrl)
        }

    }, [isSuccess])


    const handleUpdateMovie = (movieInfo: MovieFormType) => {
        console.log(movieInfo)
        if(!isDirty){
            // not change anything
            return toast.error(t('moviesEditionPage.notChange'), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            })
        }

        if(!movieId ){
            return
        }
        const movieFormData = new FormData()
        movieFormData.append('movieId', movieId)
        movieFormData.append('title', movieInfo.title)
        movieFormData.append('publishingYear', movieInfo.publishingYear.toString())
        movieFormData.append('posterImage', movieInfo.posterImage!)

        updateMovie(movieFormData)
    }

    const renderDropZoneBox = () => (
        <Box
            {...getRootProps()}
            sx={(theme) => ({
                mb: {
                    xs: '40px',
                    md: '0'
                },
                width: {
                    md: '473px'
                },
                maxWidth: {
                    xs: '380px',
                    md: '473px'
                },
                height: {
                    xs: '300px',
                    sm: '372px',
                    md: '504px'
                },
                backgroundColor: isPending ? theme.palette.bgColor.dark : theme.palette.inputColor.main,
                border: '2px dashed #fff',
                borderRadius: '10px',
                backgroundImage: imagePreview
                    ? (
                        isHover || isPending ?
                            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePreview})`
                            :
                            `url(${imagePreview})`


                    )
                    : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer'

            })}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <input {...getInputProps()} accept='image/*' disabled={isPending} />

            {
                (!imagePreview || isHover)
                &&
                <Grid
                    container
                    direction='column'
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    {
                        isPending ?
                            <CircularProgress />
                            :
                            <>
                                <Grid>
                                    <IconButton>
                                        <FileDownloadOutlinedIcon />
                                    </IconButton>
                                </Grid>

                                <Grid>
                                    {
                                        isDragActive ?
                                            <Typography
                                                sx={{
                                                    px: '10px',
                                                    textAlign: 'center',
                                                    typography: {
                                                        xs: 'bodyExtraSmall',
                                                        ms: 'bodySmall'
                                                    }
                                                }}
                                            >
                                                {t('moviesCreationPage.dropAnImageHere1')}
                                            </Typography>
                                            :
                                            <Typography
                                                sx={{
                                                    px: '10px',
                                                    textAlign: 'center',
                                                    typography: {
                                                        xs: 'bodyExtraSmall',
                                                        ms: 'bodySmall'
                                                    }
                                                }}
                                            >
                                                {t('moviesCreationPage.dropAnImageHere2')}
                                            </Typography>

                                    }
                                </Grid>
                            </>
                    }


                    <Grid>
                        {
                            errors?.posterImage
                            &&
                            <Typography variant='bodyExtraSmall' color='error'>
                                {t(errors.posterImage.message as string ||  'otherErrors', { fileSize: formatFileSize(MAX_IMAGE_SIZE) })}
                            </Typography>
                        }
                    </Grid>
                </Grid>
            }

        </Box>
    )

    const renderMovieTitle = () => (
        <Grid
            container
            sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
            spacing={{
                xs: 2,
                md: 5
            }}
        >
            <Grid>
                <IconButton onClick={() => handleOpenAlertDialog()} disabled={isPending} >
                    <KeyboardReturnOutlinedIcon />
                </IconButton>
            </Grid>
            <Grid>
                <Typography
                    noWrap
                    sx={{
                        typography: {
                            xs: 'h3',
                            md: 'h2'
                        }
                    }}
                >
                    {t('moviesEditionPage.editMovie')}
                    <Typography
                        variant='bodySmall'
                        sx={{
                            maxWidth: '300px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        - {movie?.title}
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    )


    return (
        <form onSubmit={handleSubmit(handleUpdateMovie)}>
            <Grid
                container
                direction='column'
                sx={{
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100vh'
                }}
                spacing={{
                    xs: 10,
                    md: isNestHubScreen ? 2 : 15
                }}
            >

                {
                    !isMediumScreen
                    &&
                    <Grid>
                        {
                            !isSuccess ?
                                <Skeleton
                                    variant="rectangular"
                                    sx={{
                                        width: '200px',
                                        height: '48px',
                                        borderRadius: '10px',
                                        backgroundColor: theme.palette.inputColor.main,
                                    }}
                                />
                                :
                                renderMovieTitle()
                        }
                    </Grid>
                }


                <Grid sx={{ width: '100%' }}>
                    <Grid
                        container
                        sx={{
                            alignItems: 'flex-start',
                            justifyContent: {
                                xs: 'center',
                                md: 'space-between'
                            },
                        }}
                    >
                        {/* left section */}
                        {
                            !isMediumScreen
                            &&
                            (
                                !isSuccess ?
                                    renderDropZoneBoxSkeleton()
                                    :
                                    renderDropZoneBox()
                            )

                        }



                        {/* right section */}
                        <Grid>
                            <Grid
                                container
                                direction='column'
                                sx={{
                                    alignItems: 'stretch',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {
                                    isMediumScreen
                                    &&
                                    <Grid sx={{ mb: { xs: '10px', md: '80px' }, width: '100%' }}>
                                        <Grid
                                            container
                                            sx={{
                                                alignItems: 'baseline',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <Grid>
                                                {
                                                    !isSuccess ?
                                                        <Skeleton
                                                            variant="rectangular"
                                                            sx={{
                                                                width: '250px',
                                                                height: '36px',
                                                                borderRadius: '10px',
                                                                backgroundColor: theme.palette.inputColor.main,
                                                            }}
                                                        />
                                                        :
                                                        renderMovieTitle()
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                }

                                {/* title */}
                                <Grid sx={{ mb: '24px', width: '100%' }}>
                                    {
                                        !isSuccess ?
                                            <Skeleton
                                                variant="rectangular"
                                                sx={(theme) => ({
                                                    width: '100%',
                                                    height: '45px',
                                                    borderRadius: '10px',
                                                    backgroundColor: theme.palette.inputColor.main,
                                                })}
                                            />
                                            :
                                            <MyInput
                                                disabled={isPending}
                                                type='text'
                                                placeholder={t('moviesCreationPage.title')}
                                                {...register('title')}
                                                className={errors.title && 'error'}
                                                sx={(theme) => ({
                                                    backgroundColor:  isPending ? theme.palette.bgColor.dark : undefined,
                                                    '&::placeholder': {
                                                        color: isPending ? theme.palette.bgColor.light : undefined,
                                                    },
                                                })}
                                            />
                                    }
                                    <Box>
                                        {
                                            errors.title
                                            &&
                                            <Typography variant='bodyExtraSmall' color='error'>
                                                {t(errors.title?.message as string || 'otherErrors')}
                                            </Typography>
                                        }
                                    </Box>
                                </Grid>

                                {/* publishing year */}
                                <Grid sx={{ mb: { xs: '24px', md: '64px'}, width: '100%'  }}>
                                    {
                                        !isSuccess ?
                                            <Skeleton
                                                variant="rectangular"
                                                sx={(theme) => ({
                                                    width: '100%',
                                                    height: '45px',
                                                    borderRadius: '10px',
                                                    backgroundColor: theme.palette.inputColor.main,
                                                })}
                                            />
                                            :
                                            <MyInput
                                                disabled={isPending}
                                                type='number'
                                                placeholder={t('moviesCreationPage.publishingYear')}
                                                {...register('publishingYear')}
                                                className={errors.publishingYear && 'error'}
                                                sx={(theme) => ({
                                                    backgroundColor:  isPending ? theme.palette.bgColor.dark : undefined,
                                                    '&::placeholder': {
                                                        color: isPending ? theme.palette.bgColor.light : undefined,
                                                    },
                                                })}
                                            />
                                    }

                                    <Box>
                                        {
                                            errors.publishingYear
                                            &&
                                            <Typography variant='bodyExtraSmall' color='error'>
                                                {t(errors.publishingYear.message as string || 'otherErrors', { maxYear: new Date().getFullYear() })}
                                            </Typography>
                                        }
                                    </Box>
                                </Grid>

                                {
                                    isMediumScreen
                                    &&
                                    (
                                        !isSuccess ?
                                            renderDropZoneBoxSkeleton()
                                            :
                                            renderDropZoneBox()
                                    )
                                }


                                {/* button */}
                                <Grid
                                    container
                                    sx={{
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                    spacing={2}
                                >
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        {
                                            !isSuccess ?
                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{
                                                        width: {
                                                            xs: '100%',
                                                            sm: '182px',
                                                            md: '167px'
                                                        },
                                                        height: {
                                                            xs: '48px',
                                                            sm: '56px'
                                                        },
                                                        borderRadius: '10px',

                                                        backgroundColor: theme.palette.inputColor.main,
                                                    }}
                                                />
                                                :
                                                <MyButton
                                                    disabled={isPending}
                                                    variant='outlined'
                                                    sx={{
                                                        width: {
                                                            xs: '100%',
                                                            sm: '182px',
                                                            md: '167px'
                                                        },
                                                        height: {
                                                            xs: '48px',
                                                            sm: '56px'
                                                        },
                                                        cursor: isPending ? 'not-allowed' : 'pointer',
                                                    }}
                                                    onClick={() => handleOpenAlertDialog()}
                                                >
                                                    {
                                                        isPending ?
                                                            <CircularProgress />
                                                            :
                                                            t('actions.cancel')
                                                    }
                                                </MyButton>
                                        }

                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        {
                                            !isSuccess ?
                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{
                                                        width: {
                                                            xs: '100%',
                                                            sm: '182px',
                                                            md: '167px'
                                                        },
                                                        height: {
                                                            xs: '48px',
                                                            sm: '56px'
                                                        },
                                                        borderRadius: '10px',

                                                        backgroundColor: theme.palette.inputColor.main,

                                                    }}
                                                />
                                                :
                                                <MyButton
                                                    disabled={isPending}
                                                    variant='contained'
                                                    type='submit'
                                                    sx={{
                                                        width: {
                                                            xs: '100%',
                                                            sm: '182px',
                                                            md: '167px'
                                                        },
                                                        height: {
                                                            xs: '48px',
                                                            sm: '56px'
                                                        },
                                                        cursor: isPending ? 'not-allowed' : 'pointer',
                                                        "&.Mui-disabled": {
                                                            backgroundColor: isPending ? theme.palette.primary.dark : undefined,
                                                        }

                                                    }}
                                                >
                                                    {
                                                        isPending ?
                                                            <CircularProgress />
                                                            :
                                                            t('actions.submit')
                                                    }
                                                </MyButton>
                                        }

                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <AlertDialog
                handleCloseAlertDialog={handleCloseAlertDialog}
                openAlertDialog={openAlertDialog}
            />
        </form>

    );
};

export default memo(MovieEditionForm);
