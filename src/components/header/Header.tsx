import {AppBar, Box, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography} from "@mui/material";
import {languages} from "../../utils/helper";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Header = () => {

    const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'English')
    const { t, i18n } = useTranslation()

    const changeLanguage = (e: any) => {
        const language = e.target.value
        setLanguage(language)
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
    }


    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed" sx={(theme) => ({ backgroundColor: theme.palette.cardColor.main })}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/movies'>
                            {t('header.myMovieGallery')}
                        </Link>
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 150, mt: '15px' }} size="small">
                        <InputLabel id="demo-select-small-label">{t('header.language')}</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={language}
                            label="Language"
                            onChange={(e) => changeLanguage(e)}
                            sx={(theme) => ({
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.bgColor.main,
                                },
                                color: '#fff'
                            })}
                            MenuProps={{
                                PaperProps: {
                                    sx: (theme) => ({
                                        backgroundColor: theme.palette.cardColor.main,
                                        '& .MuiMenuItem-root': {
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main
                                            }
                                        }
                                    }),
                                },
                            }}
                        >
                            {
                                Object.keys(languages).map(language => (
                                    <MenuItem
                                        key={language}
                                        value={language}
                                    >
                                        {languages[language as keyof typeof languages]}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
