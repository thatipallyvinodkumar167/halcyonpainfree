import {
  Box,
  Typography,
  Grid,
  Stack,
  Container,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookNowPopup from './BookNowPopup';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const [openBookNow, setOpenBookNow] = useState(false);
  
  return (
    <>
      <BookNowPopup
        open={openBookNow}
        onClose={() => setOpenBookNow(false)}
      />

      {/* The Halcyon Difference */}
      <Box sx={{ position: 'relative', pt: 0, pb: 0 }}>
        <Grid container spacing={8} alignItems="center">
          {/* LEFT SIDE: Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(28, 181, 176, 0.06)", px: 2.5, py: 0.6, borderRadius: "100px", mb: 2, border: "1px solid rgba(28, 181, 176, 0.12)" }}>
                <Typography variant="overline" sx={{ fontWeight: 900, color: "#1CB5B0", letterSpacing: 2, fontSize: '0.72rem' }}>WHY WE ARE DIFFERENT</Typography>
              </Box>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 900, lineHeight: 1.2, color: "primary.main", fontSize: { xs: "2.2rem", md: "3.2rem" } }}>
                The <span style={{ color: "#1CB5B0" }}>Halcyon</span> Difference
              </Typography>

              <Typography sx={{ mb: 4, color: "text.secondary", lineHeight: 1.9, fontSize: "1.1rem", fontWeight: 500, maxWidth: 450 }}>
                At Halcyon, we don't just treat symptoms; we restore lives. Our multi-modal, holistic approach combines cutting-edge interventional techniques with compassionate care to ensure you regain the quality of life you deserve.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {[
                  "Affordable charges with transparent pricing",
                  "Minimal wait time for diagnostic procedures",
                  "Premium clinical ambience and patient care",
                ].map((text, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(28, 181, 176, 0.1)", display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.main", fontSize: "1.05rem" }}>{text}</Typography>
                  </Box>
                ))}
              </Stack>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => setOpenBookNow(true)}
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: "100px",
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: "none",
                  boxShadow: "0 20px 40px rgba(28, 181, 176, 0.2)",
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: "0 25px 50px rgba(28, 181, 176, 0.3)" }
                }}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE: Floating Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '500px', ml: 'auto', height: { xs: 'auto', md: '500px' } }}>
              {/* Main Image Box */}
              <Box
                sx={{
                  width: '90%',
                  height: '380px',
                  borderRadius: '32px',
                  border: '8px solid #fff',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <img
                  src="/images/about-hero.png"
                  alt="Halcyon Center"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Overlapping Image Box */}
              <Box
                sx={{
                  width: '60%',
                  height: '260px',
                  borderRadius: '24px',
                  border: '8px solid #fff',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  backgroundColor: '#e0e0e0',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  zIndex: 3
                }}
              >
                <img
                  src="/images/about-hero1.png"
                  alt="Pain Management"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Decorative Accents */}
              <Box sx={{ position: 'absolute', top: -20, right: 20, width: 80, height: 80, borderRadius: '20px', backgroundColor: '#1CB5B0', opacity: 0.1, zIndex: 1, transform: 'rotate(15deg)' }} />
            </Box>
          </Grid>
        </Grid>

        {/* Vertical Stepped Journey */}
        <Box sx={{ mt: 4, mb: 0 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(194, 24, 91, 0.06)", px: 2, py: 0.5, borderRadius: "100px", mb: 3, border: "1px solid rgba(194, 24, 91, 0.12)" }}>
                  <Typography variant="overline" sx={{ fontWeight: 900, color: "#C2185B", letterSpacing: 1.5, fontSize: '0.7rem' }}>THE PATHWAY</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.2, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
                  The Journey to a <br/>
                  <span style={{ color: "#1CB5B0" }}>Pain-Free Life</span>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, fontWeight: 500 }}>
                  Pain is complex and deeply personal. At Halcyon, we understand the emotional and psychological toll long-term pain takes on you and your family.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={() => setOpenBookNow(true)}
                  sx={{ borderRadius: '100px', px: 4, py: 1.5, fontWeight: 700, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative', pl: { xs: 2, md: 4 } }}>
                {/* Vertical Growing Line */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: '70%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ 
                    position: 'absolute', 
                    left: 48, 
                    top: 64, 
                    width: 2, 
                    background: 'linear-gradient(180deg, #1CB5B0, #C2185B)',
                    zIndex: 1
                  }}
                />

                <Stack spacing={8}>
                  {/* Step 1: Mission */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring' }}
                  >
                    <Box sx={{ display: 'flex', gap: 4, position: 'relative', zIndex: 2 }}>
                      <Box sx={{ 
                        width: 64, height: 64, borderRadius: '20px', backgroundColor: '#1CB5B0', 
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        flexShrink: 0, fontSize: '1.6rem', fontWeight: 900, boxShadow: '0 15px 30px rgba(28, 181, 176, 0.2)' 
                      }}>
                        1
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', mb: 1.5 }}>Our Mission</Typography>
                        <Paper elevation={0} sx={{ p: 4, borderRadius: '32px', backgroundColor: 'rgba(28, 181, 176, 0.05)', border: '1px solid rgba(28, 181, 176, 0.1)' }}>
                          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 500 }}>
                            To provide ethical, world-class interventional pain care that is focused on faster recovery and long-term relief, ensuring accessibility through affordable pathways.
                          </Typography>
                        </Paper>
                      </Box>
                    </Box>
                  </motion.div>

                  {/* Step 2: Vision */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4, type: 'spring' }}
                  >
                    <Box sx={{ display: 'flex', gap: 4, position: 'relative', zIndex: 2 }}>
                      <Box sx={{ 
                        width: 64, height: 64, borderRadius: '20px', backgroundColor: '#C2185B', 
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        flexShrink: 0, fontSize: '1.6rem', fontWeight: 900, boxShadow: '0 15px 30px rgba(194, 24, 91, 0.2)' 
                      }}>
                        2
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', mb: 1.5 }}>Our Vision</Typography>
                        <Paper elevation={0} sx={{ p: 4, borderRadius: '32px', backgroundColor: 'rgba(194, 24, 91, 0.05)', border: '1px solid rgba(194, 24, 91, 0.1)' }}>
                          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 500 }}>
                            To be the global benchmark in non-surgical pain management, known for pioneering innovative treatment pathways and delivering personalized care that transforms lives.
                          </Typography>
                        </Paper>
                      </Box>
                    </Box>
                  </motion.div>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
