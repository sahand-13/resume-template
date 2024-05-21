// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import Iconify from '../../components/Iconify';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Linear, Quad } from 'gsap';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'skill-icons:visualstudio-dark',
    title: '.Net',
    description:
      'have experience with code first DB with EF Core O/RM in clean architecture projects, knowledge about SOLID design pattern and CQRS design pattern, implement SignalR and Quartz, and much more ...',
    color: 'purple',
  },
  {
    icon: 'skill-icons:react-dark',
    title: 'React JS',
    description:
      'Developed React js full dynamic web CMMS application and some other website , create dynamic components for whole app ,create custom hooks and dominate on hooks,experience with redux and redux toolkit and redux saga and much more ...',
    color: 'white',
  },
  {
    icon: 'cib:next-js',
    title: 'Next.js',
    description: 'have experience with vercel popular library (next.js) , knowlege about SSR & SSG & CSR ',
    color: 'black',
  },
];

const shadowIcon = (color) => `drop-shadow(0px 19px 17px ${alpha(color, 0.3)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  borderRadius: '10px',
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[900], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    transform: 'skewX(200deg)skewY(-10deg)scale(.8)',
    scale: 10,
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    transition: 'all ease-in-out .5s',
    '&:hover': { transform: 'skewX(180deg)skewY(00deg)scale(1)' },
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
    '&:before': {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      content: "''",
      margin: 'auto',
      position: 'absolute',
      width: 'calc(100% - 40px)',
      height: 'calc(100% - 40px)',
      borderRadius: Number(theme.shape.borderRadius) * 2,
      backgroundColor: theme.palette.background.paper,
      boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
    },
  };
});

// ----------------------------------------------------------------------

export default function HomeExperienceCards() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 25 },
          }}
        >
          <Controller>
            <Scene duration={800} offset={80} pin>
              {(progress) => (
                <Timeline totalProgress={progress}>
                  <Tween from={{ x: '1000px' }} to={{ x: '0px' }} duration={1000}>
                    <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                      Experiences
                    </Typography>
                    <Typography variant="h2">About my experiences !!!</Typography>
                  </Tween>
                </Timeline>
              )}
            </Scene>
          </Controller>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <Controller>
              <Scene duration={1000} offset={340} pin>
                {(progress) => {
                  return (
                    <Timeline totalProgress={progress}>
                      <Tween
                        from={{
                          y: '-50vh',
                          x: index === 0 ? -200 : index === 2 && 200,
                          opacity: 0,
                        }}
                        to={{ y: '0vh', x: 0, opacity: 1 }}
                        duration={1000}
                        stagger={10}
                      >
                        <div>
                          <Scene duration={600} offset={250}>
                            {(progress2) => (
                              <Timeline totalProgress={progress2}>
                                <Tween
                                  from={{
                                    skewX: 200,
                                    skewY: -10,
                                  }}
                                  to={{
                                    scale: 0.9,
                                    rotate: 0,
                                    y: 70,
                                    skewY: 0,
                                    skewX: 180,
                                    duration: 0.5,
                                    ease: Linear.easeNone,
                                  }}
                                  duration={100}
                                >
                                  <CardStyle className={'cardCenter'}>
                                    <Iconify
                                      icon={card.icon}
                                      color={card.color}
                                      sx={{
                                        mb: 10,
                                        mx: 'auto',
                                        width: 100,
                                        height: 100,
                                        filter: (theme) => shadowIcon(theme.palette.error.main),
                                        ...(index === 0 && {
                                          filter: (theme) => shadowIcon(theme.palette.info.darker),
                                        }),
                                        ...(index === 1 && {
                                          filter: (theme) => shadowIcon(theme.palette.info.light),
                                        }),
                                      }}
                                    />
                                    <Typography variant="h5" paragraph>
                                      {card.title}
                                    </Typography>
                                    <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                                      {card.description}
                                    </Typography>
                                  </CardStyle>
                                </Tween>
                              </Timeline>
                            )}
                          </Scene>
                        </div>
                      </Tween>
                    </Timeline>
                  );
                }}
              </Scene>
            </Controller>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
