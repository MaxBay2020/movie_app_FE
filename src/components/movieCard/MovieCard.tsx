import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {movieType} from "../../utils/types";
import {motion} from "motion/react";

const MovieCard = ({  title, publishingYear, imageUrl }: movieType) => {
    return (
        <Card
            component={motion.div}
            whileHover={{
                scale: 1.05,
                opacity: 0.9,
                y: -5,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}

            sx={(theme) => ({
                width: '100%',
                height: {
                    xs: '334px',
                    md: '504px'
                },
                borderRadius: '12px',
                backgroundColor: theme.palette.cardColor.main,
            })}

        >
            <Grid
                container
                direction='column'
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Grid sx={{ width: '100%' }}>
                    <CardMedia
                        sx={{
                            height: {
                                xs: '246px',
                                md: '400px'
                            },
                            margin: {
                                md: 1
                            },
                            borderRadius: '12px'
                        }}
                        image={imageUrl}
                        title={title}
                    />
                </Grid>

                <Grid sx={{ alignSelf: 'flex-start',  width: '100%', }}>
                    <CardContent>
                        <Typography
                             variant="bodyLarge"
                             noWrap
                             sx={{
                                 // maxWidth: '180px',
                                 display: 'block',
                                 overflow: 'hidden',
                                 textOverflow: 'ellipsis',
                             }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="bodySmall"
                        >
                            {publishingYear}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default MovieCard;
