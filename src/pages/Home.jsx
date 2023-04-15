import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import HomeHero from '../sections/home/HomeHero';
import HomeExperienceCards from '../sections/home/HomeExperienceCards';
import FollowPointer from '../components/followPointer';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Pointer } from '../components/followPointer/newOne/Pointer';
import HomeOtherSkills from '../sections/home/HomeOtherSkills';
import HomeLanguageSoftSkills from '../sections/home/HomeLanguageSoftSkills';
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
    <Pointer>
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomeExperienceCards />

          <HomeOtherSkills />

          <HomeLanguageSoftSkills />
        </ContentStyle>
      </RootStyle>
    </Pointer>
  );
};

export default Home;
