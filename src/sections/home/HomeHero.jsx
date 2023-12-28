import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, useTheme } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import profilephoto from '../../assets/profile.jpg';
import FollowPointer from '../../components/followPointer';
import { Pointer } from '../../components/followPointer/newOne/Pointer';
import Logo from '../../components/Logo';
import { Timeline, Tween } from 'react-gsap';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Bounce, Elastic, Linear, Power4, gsap } from 'gsap';
import { useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',

  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={1} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  border: '3px solid white',
  boxShadow: '0px 0px 50px 0px white,0px 0px 10px 0px white',
  width: '50%',
  borderRadius: '50%',
  margin: 'auto',
  position: 'absolute',
  right: '8%',
  width: 'auto',
  height: '70vh',
  maxWidth: '30%',
  objectFit: 'cover',
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  // const theme = useTheme();
  const [animateReplay, setAnimateReplay] = useState(false);
  const SVGRef = useRef();
  useEffect(() => {
    animate();
  }, []);

  function animate() {
    if (!animateReplay) {
      setAnimateReplay(true);
      const el = SVGRef.current;
      gsap.fromTo(
        el,
        { x: -100, y: -800, scale: 10 },
        {
          x: -100,
          y: 0,
          scale: 0.5,
          rotate: 720,
          duration: 3,
          ease: Bounce.easeOut,
        }
      );
      gsap.fromTo(el, { x: -100 }, { x: 450, duration: 2, delay: 3.5 });
      gsap.fromTo(
        el,
        { x: 450 },
        {
          x: 0,
          rotate: 3600,
          duration: 2,
          filter: 'drop-shadow(2px 2px 0px red',
          scale: 1,
          delay: 6,
          onComplete: () => {
            setAnimateReplay(false);
          },
        }
      );
    }
  }

  return (
    <MotionContainer>
      <RootStyle>
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

        <Container sx={{ pt: 0 }}>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                <m.div>
                  <Typography variant="h1" sx={{ fontFamily: 'serif' }}>
                    Hello!
                    <br />I am
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp} onClick={animate}>
                  <Typography component="span" variant="h1" sx={{ color: 'primary.main', display: 'flex' }}>
                    &nbsp;S
                    <Logo ref={SVGRef} width="45pt" height="60pt" disabledLink />
                    &nbsp;hand Golkar{' '}
                  </Typography>
                </m.div>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>Full stack web developer with 4 years experience</Typography>
            </m.div>

            <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  value={
                    <Link
                      href="https://github.com/sahand-13"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      <Iconify icon={'ant-design:github-filled'} sx={{ width: 40, height: 40, mr: 1 }} />
                      <Iconify icon={'octicon:logo-github-16'} sx={{ width: 40, height: 40, mr: 1 }} />
                    </Link>
                  }
                />
              </m.div>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  // icon={<Iconify icon={'logos:linkedin'} sx={{ width: 60, height: 60, mr: 1 }} />}
                  value={
                    <Link
                      href="https://www.linkedin.com/in/sahand-golkar-8a79b5210"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      <Iconify icon={'logos:linkedin'} sx={{ width: 60, height: 60, mr: 1 }} />
                    </Link>
                  }
                />
              </m.div>
            </Stack>

            <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                sx={{ zIndex: 5 }}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Live Preview
              </Button>
            </m.div>

            <Stack spacing={2.5} sx={{ pt: 3 }}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  My Experiences :
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }} maxWidth={300}>
                {[
                  { name: 'nonicons:next-16', color: '#fff' },
                  { name: 'simple-icons:dotnet', color: 'rgb(168, 0, 255)' },
                  { name: 'logos:redis', color: 'rgb(168, 0, 255)' },
                  { name: 'skill-icons:redux', color: 'rgb(168, 0, 255)' },
                  { name: 'simple-icons:mui', color: 'rgb(0, 82, 255)' },
                  { name: 'skill-icons:bootstrap', color: 'rgb(0, 82, 255)' },
                  { name: 'logos:tailwindcss-icon', color: 'rgb(0, 82, 255)' },
                  { name: 'vscode-icons:file-type-reactjs', color: 'rgb(0, 82, 255)' },
                  { name: 'vscode-icons:file-type-css', color: 'rgb(0, 82, 255)' },
                  { name: 'vscode-icons:file-type-html', color: 'red' },
                  { name: 'logos:microsoft-azure', color: 'red' },
                  { name: 'vscode-icons:file-type-git', color: 'red' },
                  { name: 'skill-icons:gitlab-light', color: 'red' },
                ].map((resource) => (
                  <m.div
                    key={resource.name}
                    variants={varFade().inRight}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Iconify icon={resource.name} sx={{ color: resource.color }} height={30} width={30} />
                  </m.div>
                ))}
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
