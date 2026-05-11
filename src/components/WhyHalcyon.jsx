import { Box, Grid, Typography, Button, Container, Stack, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function WhyHalcyon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const points = [
    "Root-cause focused treatment",
    "Advanced interventional procedures",
    "Non-surgical pain solutions",
    "Patient-centric clinical excellence",
  ];

  return (
    <Box
      ref={ref}
      sx={{
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
        background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blur Background */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(28, 181, 176, 0.05) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Typography variant="overline" sx={{ fontWeight: 800, color: "secondary.main", letterSpacing: 2, display: "block", mb: 1 }}>
                OUR PHILOSOPHY
              </Typography>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 800 }}>
                Why Choose <span style={{ color: "#1CB5B0" }}>Halcyon</span>?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  mb: 4,
                  color: "text.secondary",
                  maxWidth: 500,
                }}
              >
                We believe pain should never define your life. Our approach focuses on identifying the root cause of pain and delivering personalized care designed for long-term relief.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <CheckCircleIcon sx={{ color: "secondary.main" }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{point}</Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>

              <Button 
                variant="contained" 
                size="large"
                sx={{ px: 5, py: 2 }}
              >
                Our Clinical Philosophy
              </Button>
            </motion.div>
          </Grid>

          {/* RIGHT CONTENT (VIDEO) */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <Box sx={{ position: "relative" }}>
                {/* Decorative Frame */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "15%",
                    left: "15%",
                    right: "-5%",
                    bottom: "-5%",
                    border: "2px solid rgba(28, 181, 176, 0.15)",
                    borderRadius: "40px",
                    zIndex: -1,
                  }}
                />
                
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    borderRadius: "28px",
                    overflow: "hidden",
                    aspectRatio: "4 / 3",
                    maxHeight: 360,
                    boxShadow: "0 30px 60px -15px rgba(15, 30, 90, 0.2)",
                    border: "6px solid #fff",
                    zIndex: 1
                  }}
                >
                  <video
                    src="/images/about_video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  
                  {/* Video Overlay Play Button (Visual only) */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(5px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      border: "1px solid rgba(255,255,255,0.3)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translate(-50%, -50%) scale(1.1)",
                        backgroundColor: "secondary.main",
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 0,
                        height: 0,
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        borderLeft: "20px solid #fff",
                        ml: 0.5
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

