import { Grid, Typography, Box, Container, Stack, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BiotechIcon from '@mui/icons-material/Biotech';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';

const servicesList = [
  {
    id: "01",
    title: "Interventional Procedures",
    description: "Targeted, minimally invasive techniques such as epidurals, nerve blocks, and radiofrequency ablation to effectively break the pain cycle without surgery.",
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
    color: "#1CB5B0",
    features: ["Radiofrequency Ablation", "Epidural Steroid Injections", "Nerve Blocks"]
  },
  {
    id: "02",
    title: "Regenerative Therapies",
    description: "State-of-the-art biological treatments including Platelet-Rich Plasma (PRP) and Prolotherapy designed to stimulate natural tissue healing and joint repair.",
    icon: <BiotechIcon sx={{ fontSize: 40 }} />,
    color: "#4A90E2",
    features: ["PRP Therapy", "Prolotherapy", "Cellular Matrix"]
  },
  {
    id: "03",
    title: "Advanced Diagnostics",
    description: "Pinpointing the exact source of complex pain conditions using high-resolution musculoskeletal ultrasound and precision fluoroscopic imaging.",
    icon: <SettingsOverscanIcon sx={{ fontSize: 40 }} />,
    color: "#F5A623",
    features: ["Diagnostic Ultrasound", "Fluoroscopy", "EMG & Nerve Studies"]
  }
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        pt: { xs: 8, md: 10 }, 
        pb: { xs: 8, md: 10 }, 
        backgroundColor: "#f4f7fa", // Premium Clinical Mist
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Grid Lines - Adjusted for light background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `linear-gradient(rgba(15, 30, 90, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 30, 90, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          zIndex: 0,
        }}
      />

      {/* Radial glow accents - Subtle clinical tones */}
      <Box sx={{ position: "absolute", top: "-20%", left: "-10%", width: "50%", height: "100%", background: "radial-gradient(circle, rgba(28, 181, 176, 0.05) 0%, transparent 60%)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50%", height: "100%", background: "radial-gradient(circle, rgba(15, 30, 90, 0.05) 0%, transparent 60%)", zIndex: 0 }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, backgroundColor: 'rgba(28, 181, 176, 0.1)', px: 2, py: 0.5, borderRadius: '100px', border: '1px solid rgba(28, 181, 176, 0.2)', mb: 3 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: "secondary.main", boxShadow: '0 0 10px rgba(28, 181, 176, 0.4)' }} />
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 1.5, color: "secondary.main", lineHeight: 1, fontSize: '0.75rem' }}>
                WHAT WE OFFER
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 900, color: "primary.main", mb: 3, fontSize: { xs: "2.8rem", md: "4rem" } }}>
              Specialized <span style={{ color: "#1CB5B0", display: "inline-block", position: "relative" }}>
                Care
                <Box sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", height: 6, backgroundColor: "secondary.main", borderRadius: 4, opacity: 0.2 }} />
              </span>
            </Typography>

            <Typography sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem", lineHeight: 1.8, color: "text.secondary", fontWeight: 400 }}>
              Discover our comprehensive range of advanced, non-surgical treatments meticulously designed to target the root cause of your pain and restore optimal functionality.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={2} justifyContent={{ xs: 'flex-start', md: 'center' }} alignItems="stretch" sx={{ flexWrap: 'nowrap', overflowX: 'auto', pb: 2 }}>
          {servicesList.map((service, index) => (
            <Grid item xs={4} key={service.id} sx={{ minWidth: { xs: '300px', md: 'auto' } }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ height: "100%", width: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: "32px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(15, 30, 90, 0.05)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      transform: "translateY(-10px)",
                      boxShadow: `0 30px 60px rgba(15, 30, 90, 0.1)`,
                      borderColor: "rgba(15, 30, 90, 0.1)",
                    },
                    "&:hover .service-icon-box": {
                      backgroundColor: service.color,
                      transform: "scale(1.1) rotate(5deg)",
                    },
                    "&:hover .service-icon": {
                      color: "#fff",
                    },
                    "&:hover .service-arrow": {
                      transform: "translateX(5px)",
                      color: service.color
                    }
                  }}
                >
                  {/* Decorative Background ID */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 20,
                      fontSize: "5rem",
                      fontWeight: 900,
                      color: "rgba(15, 30, 90, 0.03)",
                      lineHeight: 1,
                      zIndex: 0,
                      pointerEvents: "none"
                    }}
                  >
                    {service.id}
                  </Typography>

                  <Box
                    className="service-icon-box"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      backgroundColor: `${service.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      transition: "all 0.4s ease",
                      zIndex: 1,
                      border: `1px solid ${service.color}20`
                    }}
                  >
                    <Box className="service-icon" sx={{ color: service.color, display: "flex", transition: "0.4s" }}>
                        {service.icon}
                    </Box>
                  </Box>

                  <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", mb: 1.5, zIndex: 1, fontSize: "1.4rem" }}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6, flexGrow: 1, zIndex: 1, fontSize: "0.95rem" }}>
                    {service.description}
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 4, zIndex: 1 }}>
                    {service.features.map((feature, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: service.color, opacity: 0.8 }} />
                        <Typography sx={{ color: "primary.main", fontSize: "0.9rem", fontWeight: 600 }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(15, 30, 90, 0.05)", zIndex: 1 }}>
                    <Button 
                      component={Link}
                      to="/treatments"
                      fullWidth
                      endIcon={<ArrowForwardIcon className="service-arrow" sx={{ transition: "0.3s" }} />} 
                      sx={{ 
                        color: "primary.main", 
                        fontWeight: 800, 
                        justifyContent: "space-between",
                        p: 1,
                        fontSize: "0.9rem",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "rgba(15, 30, 90, 0.02)" } 
                      }}
                    >
                      Explore Clinical Pathway
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
