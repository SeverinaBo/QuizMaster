import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { i18n } from '../../../../src';
import { Translation } from 'react-i18next';

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: '/assets/icons/ic_flag_en.svg',
    },
    {
        value: 'lt',
        label: 'Lietuvių',
        icon: '/assets/icons/ic_flag_lt.svg',
    },
];

export default function LanguagePopover() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);

        handleClose();
    };

    return (
        <>
            <IconButton
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(anchorEl && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    }),
                }}
                onClick={handleOpen}
            >
                <img src={LANGS[0].icon} alt={LANGS[0].label} />
            </IconButton>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        mt: 1.5,
                        ml: 0.75,
                        width: 180,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Translation>
                    {(t, { i18n }) => (
                        <Stack spacing={0.75}>
                            {LANGS.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                    selected={option.value === i18n.language}
                                    onClick={() => changeLanguage(option.value)}
                                >
                                    <Box
                                        component="img"
                                        alt={option.label}
                                        src={option.icon}
                                        sx={{ width: 28, mr: 2 }}
                                    />
                                    {t(option.label)}
                                </MenuItem>
                            ))}
                        </Stack>
                    )}
                </Translation>
            </Popover>
        </>
    );
}
