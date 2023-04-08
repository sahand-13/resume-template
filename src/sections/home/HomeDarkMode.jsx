// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import { Bounce } from 'gsap';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900],
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative' }}>
        <Controller>
          <Scene duration={800} offset={900} pin indicators>
            {(progress) => (
              <Timeline totalProgress={progress}>
                <Tween
                  from={{ x: -1500, 'box-shadow': '200px 0px 50px 10px #1b8f0145', borderRadius: '50%' }}
                  to={{
                    x: 0,
                    rotate: 340,
                    borderRadius: '10px',
                    'box-shadow': '30px 20px 100px 10px #1b8f01',
                    scale: 0.9,
                  }}
                  duration={1000}
                >
                  <Box
                    sx={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: 500,
                      height: 500,
                      opacity: 0.48,
                      backgroundColor: '#0a390066',
                      borderRadius: '10px',
                      my: 'auto',
                      position: 'absolute',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                </Tween>
                <Tween
                  from={{ scale: 0, borderRadius: '50%' }}
                  to={{ rotate: 300, scale: 0.9, borderRadius: '10px' }}
                  duration={2000}
                >
                  <Box
                    sx={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: 500,
                      height: 500,
                      opacity: 0.48,
                      backgroundColor: '#1b8f0145',
                      borderRadius: '10px',
                      my: 'auto',
                      position: 'absolute',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                </Tween>
                <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <Tween from={{ scale: 0, ease: Bounce.easeInOut }} to={{ scale: 1 }} duration={1000}>
                      <ContentStyle>
                        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                          Other skills ,
                        </Typography>

                        <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                          Skill Rate
                        </Typography>

                        <Typography sx={{ color: 'common.white', mb: 5 }}>can help you know me more</Typography>
                      </ContentStyle>
                    </Tween>
                  </Grid>

                  <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
                    <MotionInView threshold={0.5} variants={varFade().inUp}>
                      <Image
                        disabledEffect
                        alt="light mode"
                        src="https://minimal-assets-api.vercel.app/assets/images/home/lightmode.png"
                      />
                    </MotionInView>

                    <MotionInView
                      threshold={0.5}
                      variants={varFade().inDown}
                      sx={{ top: 0, left: 0, position: 'absolute' }}
                    >
                      <Image
                        disabledEffect
                        alt="dark mode"
                        src="https://minimal-assets-api.vercel.app/assets/images/home/darkmode.png"
                      />
                    </MotionInView>
                    {/* <Box>
                      <Typography variant="p">React</Typography>
                    </Box> */}
                  </Grid>
                </Grid>
              </Timeline>
            )}
          </Scene>
        </Controller>
      </Container>
    </RootStyle>
  );
}
