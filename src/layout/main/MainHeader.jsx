import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
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

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
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
            <HeroImgStyle
              alt="hero"
              src="/assets/profile.jpg"
              variants={varFade().inUp}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
            <m.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Label color="info" sx={{ ml: 1 }}>
                Sahand Golkar
              </Label>
            </m.div>
            <Box sx={{ flexGrow: 1 }} />

            {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}

            <Button
              variant="contained"
              target="_blank"
              rel="noopener"
              href="https://material-ui.com/store/items/minimal-dashboard/"
            >
              Purchase Now
            </Button>

            {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
          </Container>
        </ToolbarStyle>
      )}

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
