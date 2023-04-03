import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import HomeHero from '../sections/home/HomeHero';
import HomeExperienceCards from './HomeExperienceCards';
import FollowPointer from '../components/followPointer';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));
// ----------------------------------------------------------------------

const Home = () => {
  return (
    <RootStyle>
      <FollowPointer>
        <HomeHero />
        <ContentStyle>
          <HomeExperienceCards />

          {/* <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement /> */}
        </ContentStyle>
      </FollowPointer>
    </RootStyle>
  );
};

export default Home;
