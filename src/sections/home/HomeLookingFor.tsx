import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 8, md: 3 }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <m.div variants={varFade().inDown}>
              <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
                Looking For a
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                Landing Page?
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="body1" sx={{ mt: 2, mb: 5 }}>
                We can adjust each plan to suit your needs
              </Typography>
            </m.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                disabledEffect
                alt="rocket"
                src="https://minimal-assets-api-dev.vercel.app/assets/images/home/zone_screen.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
