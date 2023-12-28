import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  RadioGroup,
  Tooltip,
  CardActionArea,
  FormControlLabel,
  Radio,
  Stack,
  alpha,
} from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
import { m } from 'framer-motion';
// config
import { HEADER } from '../../utils/config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { varFade } from '../../components/animate';
import useSettings from '../../hooks/useSettings';
import { capitalCase } from 'change-case';

// ----------------------------------------------------------------------
const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  borderRadius: '50%',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '30px',
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: 15,
  height: HEADER.MOBILE_HEIGHT,
  borderRadius: '30px',
  marginTop: '5px',
  marginLeft: '50px',
  marginRight: '50px',
  boxShadow: theme.customShadows.primary,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    minHeight: 40,
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  marginTop: '5px',
  marginLeft: '50px',
  marginRight: '50px',
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 100px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const { themeColorPresets, onChangeColor, colorOption } = useSettings();
  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <>
      <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', borderRadius: '10px' }}>
        {isOffset && (
          <ToolbarStyle
            disableGutters
            sx={{
              ...(isOffset && {
                ...cssStyles(theme).bgBlur(),
                height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 50 },
              }),
            }}
          >
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Logo width="30pt" height="30pt" sx={{ filter: 'drop-shadow(1.5px 1.5px 0px red)' }} />
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Label color="primary" sx={{ ml: 1 }}>
                  Sahand Golkar
                </Label>
              </m.div>
              <Box sx={{ flexGrow: 1 }} />

              {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}

              <Button variant="contained">Live Mini Projects</Button>

              {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
            </Container>
          </ToolbarStyle>
        )}

        {isOffset && <ToolbarShadowStyle />}
      </AppBar>
      {isDesktop && (
        <RadioGroup name="themeColorPresets" value={themeColorPresets} onChange={onChangeColor} sx={{ my: 20 }}>
          <Stack
            direction={{ xs: 'column', lg: 'column' }}
            justifyContent="center"
            spacing={1}
            sx={{
              position: 'fixed',
              right: 10,
              zIndex: 12,
            }}
          >
            {colorOption.map((color) => {
              const colorName = color.name;
              const colorValue = color.value;
              const isSelected = themeColorPresets === colorName;

              return (
                <Tooltip key={colorName} title={capitalCase(colorName)} placement="right">
                  <CardActionArea sx={{ color: colorValue, borderRadius: '50%', width: 32, height: 32 }}>
                    <Box
                      sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        ...(isSelected && {
                          borderStyle: 'solid',
                          borderWidth: 4,
                          borderColor: alpha(colorValue, 0.24),
                        }),
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: colorValue,
                          ...(isSelected && {
                            width: 14,
                            height: 14,
                            transition: (theme) =>
                              theme.transitions.create('all', {
                                easing: theme.transitions.easing.easeInOut,
                                duration: theme.transitions.duration.shorter,
                              }),
                          }),
                        }}
                      />
                      <FormControlLabel
                        label=""
                        value={colorName}
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          left: 0,
                          margin: 0,
                          width: 1,
                          height: 1,
                          position: 'absolute',
                        }}
                      />
                    </Box>
                  </CardActionArea>
                </Tooltip>
              );
            })}
          </Stack>
        </RadioGroup>
      )}
    </>
  );
}
