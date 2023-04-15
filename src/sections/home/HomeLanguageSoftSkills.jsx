import { capitalCase } from 'change-case';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
  Grid,
} from '@mui/material';
// hooks
// import useSettings from '../../hooks/useSettings';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import GridPhoto from '../../assets/grid.png';
import LanguageChart from '../../components/charts/LanguageChart';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  borderRadius: '200px',
  mx: 'auto',
  textAlign: 'center',
}));

// ----------------------------------------------------------------------

export default function HomeLanguageSoftSkills() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Language and soft skills
          </Typography>
        </MotionInView>

        <Box sx={{ position: 'relative', mx: 'auto' }}>
          <Image disabledEffect alt="grid" src={GridPhoto} />

          <Grid
            container
            spacing={10}
            columns={38}
            sx={{ position: 'absolute', top: 100, textAlign: 'center', justifyContent: 'center' }}
          >
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="English" data={['90']} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Persian" data={['100']} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Creativity" data={[100]} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Team work" data={[90]} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Time Management" data={[100]} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Problem-solving" data={[95]} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Communication" data={[90]} />
                </m.div>
              </MotionInView>
            </Grid>
            <Grid item xs={8}>
              <MotionInView variants={varFade().inDown}>
                <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <LanguageChart title="Leadership" data={[95]} />
                </m.div>
              </MotionInView>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  );
}
