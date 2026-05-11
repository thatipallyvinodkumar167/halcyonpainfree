import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Offerings() {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 12 },
        background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={8} alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(194, 24, 91, 0.08)", px: 2, py: 0.5, borderRadius: "100px", mb: 2 }}>
                <Typography variant="overline" sx={{ fontWeight: 900, color: "#C2185B", letterSpacing: 2 }}>
                  CORE VALUES
                </Typography>
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                color: "primary.main",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" }
              }}
            >
              The Halcyon <span style={{ color: "#1CB5B0" }}>Promise</span>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 800, 
                color: "text.secondary", 
                mx: "auto", 
                fontSize: "1.1rem",
                lineHeight: 1.8
              }}
            >
              We are dedicated to excellence in pain medicine with a focus on ethical treatment, evidence-based care, and faster recovery.
            </Typography>
          </motion.div>

          <Stack 
            direction={{ xs: "column", md: "row" }} 
            spacing={4} 
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            {[
              { 
                title: "Ethical Treatment", 
                desc: "Patient safety and honesty are at the core of our practice. We provide transparent care plans tailored to your needs.",
                icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
                accent: "#C2185B"
              },
              { 
                title: "Evidence-Based Care", 
                desc: "Treatments backed by the latest medical research and clinical trials, ensuring you receive the most effective procedures.",
                icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
                accent: "#1CB5B0"
              },
              { 
                title: "Faster Recovery", 
                desc: "Specialized non-invasive procedures designed to minimize downtime and get you back to your active lifestyle quickly.",
                icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
                accent: "#C2185B"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ flex: 1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "32px",
                    border: "1px solid rgba(15, 30, 90, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "flex-start",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
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
                    width: 64, 
                    height: 64, 
                    borderRadius: "20px", 
                    backgroundColor: `${item.accent}15`, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: item.accent
                  }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 900, 
                        color: "primary.main",
                        mb: 2,
                        fontSize: "1.4rem"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                        fontWeight: 500
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
