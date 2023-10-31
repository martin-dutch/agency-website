// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';
import Pricing from './pricing';
import { Container, Grid } from '@mui/material';
import { _mapContact } from 'src/_mock';
import { ContactForm, ContactMap } from 'src/sections/contact';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <HomeHero />

      <ContentStyle>
        <HomeMinimal />

        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        {/* <HomePricingPlans /> */}
        <Pricing />

        <HomeLookingFor />

        <HomeAdvertisement />

        <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </Page>
  );
}
