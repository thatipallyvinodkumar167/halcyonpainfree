import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, Container, Stack, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import PublicIcon from '@mui/icons-material/Public';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function useCounter(target, duration = 2500) {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    startTime.current = null;
    let raf;
    const animate = (time) => {
      if (!startTime.current) startTime.current = time;
      const progress = Math.min((time - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return count;
}

export default function PainStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
        value: useCounter(isInView ? 30 : 0), 
        suffix: "%", 
        title: "Global Burden",
        text: "Global population suffering from pain", 
        icon: <PublicIcon sx={{ fontSize: 32 }}/>,
        accent: "secondary.main"
    },
    { 
        value: useCounter(isInView ? 19.3 : 0), 
        suffix: "%", 
        title: "National Crisis",
        text: "Indians living with chronic pain", 
        icon: <HealthAndSafetyIcon sx={{ fontSize: 32 }}/>,
        accent: "#C2185B"
    },
    { 
        value: useCounter(isInView ? 71.2 : 0), 
        suffix: "%", 
        title: "The Care Gap",
        text: "Patients only consulting general physicians", 
        icon: <ErrorOutlineIcon sx={{ fontSize: 32 }}/>,
        accent: "#C2185B"
    },
    { 
        value: useCounter(isInView ? 4.8 : 0), 
        suffix: "%", 
        title: "Specialized Access",
        text: "Patients seeing pain specialists", 
        icon: <VerifiedUserIcon sx={{ fontSize: 32 }}/>,
        accent: "secondary.main"
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        pt: { xs: 8, md: 10 }, 
        pb: { xs: 8, md: 10 }, 
        background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", 
        color: "primary.main",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={8} alignItems="center">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '1000px' }}
          >
            <Stack spacing={3} alignItems="center">
              <Box sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 1, 
                backgroundColor: 'rgba(194, 24, 91, 0.05)', 
                px: 2, 
                py: 0.5, 
                borderRadius: '100px', 
                border: '1px solid rgba(194, 24, 91, 0.1)' 
              }}>
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: "#C2185B", fontSize: '0.75rem' }}>
                  CLINICAL INSIGHTS
                </Typography>
              </Box>
              
              <Typography variant="h2" sx={{ fontWeight: 900, color: "primary.main", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                The Reality of <span style={{ color: "#1CB5B0" }}>Chronic Pain</span>
              </Typography>
              
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 'none', width: '100%' }}>
                Pain is more than just a symptom; it's a global health crisis that requires specialized interventional care.
              </Typography>
            </Stack>
          </motion.div>
          
          {/* Stats Grid Section */}
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={3} justifyContent="center">
              {stats.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    style={{ height: '100%', width: '100%', display: 'flex' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        width: "100%",
                        height: '100%',
                        margin: '0 auto',
                        borderRadius: "32px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(15, 30, 90, 0.05)",
                        position: 'relative',
                        overflow: 'hidden',
                        transition: "all 0.4s ease",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        gap: 2,
                        "&:hover": {
                          transform: "translateY(-12px)",
                          backgroundColor: "#FFFFFF",
                          boxShadow: "0 30px 60px rgba(15, 30, 90, 0.08)",
                          borderColor: `${item.accent}40`,
                        }
                      }}
                    >
                      {/* Top Accent Line */}
                      <Box sx={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        height: 5, 
                        background: `linear-gradient(90deg, ${item.accent}, #fff)`,
                        opacity: 0.8 
                      }} />

                      <Box sx={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: "16px", 
                        backgroundColor: `${item.accent}15`, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: item.accent
                      }}>
                        {item.icon}
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h3" sx={{ 
                          fontWeight: 900, 
                          color: "primary.main",
                          fontSize: "2.2rem",
                          lineHeight: 1,
                          mb: 1
                        }}>
                          {Number.isInteger(item.value) ? Math.round(item.value) : item.value.toFixed(1)}
                          <span style={{ fontSize: "1rem", opacity: 0.6, marginLeft: '2px' }}>{item.suffix}</span>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "primary.main", mb: 1, fontSize: "1.1rem", lineHeight: 1.2 }}>
                          {item.title}
                        </Typography>
                        
                        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 500, minHeight: '3.2em' }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}

