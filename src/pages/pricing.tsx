// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Switch, Container, Typography, Stack } from '@mui/material';
// _mock_
import { _pricingPlans } from '../_mock';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { PricingPlanCard } from '../sections/pricing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

Pricing.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
        <Container>
          <Typography variant="h3" align="center" paragraph>
            Flexible Packages for your
            <br /> business&apos;s size and needs
          </Typography>

          <Typography align="center" sx={{ color: 'text.secondary' }}>
            Choose your package and make modern online products magically easy
          </Typography>

          <Box sx={{ my: 5 }} />

          <Grid container spacing={3}>
            {_pricingPlans.map((card, index) => (
              <Grid item xs={12} md={4} key={card.subscription}>
                <PricingPlanCard card={card} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}
