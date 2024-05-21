// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box, useTheme } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import { Bounce } from 'gsap';
import HomeExperienceBarChart from '../../components/charts/HomeExperienceBarChart.jsx';

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
const StyledBoxBack = styled(Box)(({ theme }) => ({
  top: 100,
  right: 0,
  bottom: 0,
  width: 500,
  height: 500,
  opacity: 0.48,
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '10px',
  my: 'auto',
  position: 'absolute',
  display: { xs: 'none', md: 'block' },
}));
const StyledBoxFront = styled(Box)(({ theme }) => ({
  top: 100,
  right: 0,
  bottom: 0,
  width: 500,
  height: 500,
  opacity: 0.48,
  backgroundColor: theme.palette.text.primary,
  borderRadius: '10px',
  my: 'auto',
  position: 'absolute',
  display: { xs: 'none', md: 'block' },
}));

export default function HomeOtherSkills() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative' }}>
        <Controller>
          <Scene duration={800} offset={1200} pin>
            {(progress) => (
              <Timeline totalProgress={progress}>
                <Tween
                  from={{ x: 300, borderRadius: '50%' }}
                  to={{
                    x: 0,
                    rotate: 340,
                    borderRadius: '10px',
                    scale: 0.9,
                  }}
                  duration={3000}
                >
                  <StyledBoxBack />
                </Tween>
                <Tween
                  from={{ scale: 0, borderRadius: '50%' }}
                  to={{ rotate: 300, scale: 0.9, borderRadius: '10px' }}
                  duration={2000}
                >
                  <StyledBoxFront />
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

                  <Tween from={{ x: -800, ease: Bounce.easeInOut }} to={{ x: 0 }} duration={500}>
                    <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
                      <HomeExperienceBarChart
                        title={'Back End Skills'}
                        data={[100, 100, 100, 100, 80, 80, 95, 100, 90, 90, 100, 100, 100, 100, 100]}
                        category={[
                          '.Net',
                          'Identity Server4',
                          'EF core O/RM',
                          'DevOps',
                          'Redis',
                          'Gitlab',
                          'Azure Devops',
                          'Nginx',
                          'gRPC',
                          'API',
                          'SignalR',
                          'Fluent validation',
                          'OOP',
                          'Auto Mapper',
                        ]}
                      />
                      <HomeExperienceBarChart
                        title={'Front End Skills'}
                        data={[100, 90, 80, 80, 95, 100, 100, 90, 100, 100, 100, 100]}
                        category={[
                          'React JS',
                          'Next JS',
                          'MUI',
                          'Redux',
                          'Bootstrap',
                          'Thailwind',
                          'HTML',
                          'CSS',
                          'Web Socket',
                          'Service Worker',
                          'React Hooks',
                          'Saga',
                        ]}
                      />
                    </Grid>
                  </Tween>
                </Grid>
              </Timeline>
            )}
          </Scene>
        </Controller>
      </Container>
    </RootStyle>
  );
}
