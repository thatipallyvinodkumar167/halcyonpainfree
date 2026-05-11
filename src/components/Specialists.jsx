import { Box, Container, Typography, Grid, Card, Avatar, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedIcon from '@mui/icons-material/Verified';

const specialists = [
  {
    name: "Dr. Pallavi Dasyam",
    title: "Consultant - Pain Management",
    qual: "MBBS, DA, CIPS (Certified Interventional Pain Sonologist – World Institute of Pain, USA)",
    image: "/images/dr.pallavi.webp",
  },
  {
    name: "Dr. PSS Kiran",
    title: "Pain Management Specialist",
    qual: "MBBS, MD, Fellowship in Pain Management",
    image: "/images/dr.kiran_.webp",
  }
];

export default function Specialists() {
  return (
    <Box sx={{ pt: { xs: 5, md: 6 }, pb: { xs: 5, md: 6 }, backgroundColor: "#FDFDFD", position: "relative", overflow: "hidden" }}>
      {/* Decorative background gradients */}
      <Box sx={{ 
        position: "absolute", 
        top: 0, 
        right: 0, 
        width: "100%", 
        height: "100%", 
        backgroundImage: "radial-gradient(circle at 90% 10%, rgba(15, 30, 90, 0.02) 0%, transparent 40%)",
        pointerEvents: "none"
      }} />

      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: "secondary.main", letterSpacing: 2 }}>
            OUR EXPERTISE
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, fontSize: { xs: "2.5rem", md: "3rem" } }}>
            Meet Our <span style={{ color: "#1CB5B0" }}>Specialists</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 740, mx: "auto", fontSize: "1rem", lineHeight: 1.6 }}>
            Our multidisciplinary team of world-class experts is dedicated to providing advanced, non-surgical pain relief using the latest interventional techniques and evidence-based protocols.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {specialists.map((doc, index) => (
            <Grid item xs={12} md={4} key={doc.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(15, 30, 90, 0.06)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 10px 30px rgba(15, 30, 90, 0.03)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 50px rgba(15, 30, 90, 0.08)",
                      borderColor: "rgba(28, 181, 176, 0.25)",
                    }
                  }}
                >
                  <Box sx={{ position: "relative", width: 120, height: 120, mx: "auto", mb: 2, flexShrink: 0 }}>
                    {/* Decorative ring around doctor photo */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: -5,
                        borderRadius: "50%",
                        border: "2px solid rgba(28, 181, 176, 0.1)",
                        zIndex: 0
                      }}
                    />
                    <Avatar
                      src={doc.image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        mx: "auto",
                        border: "4px solid #fff",
                        boxShadow: "0 8px 20px rgba(15, 30, 90, 0.1)",
                        position: "relative",
                        zIndex: 1
                      }}
                    />
                  </Box>

                  <Stack spacing={1} alignItems="center" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ minHeight: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                        <Typography variant="h4" sx={{ fontWeight: 800, color: "primary.main", fontSize: "1.5rem" }}>
                          {doc.name}
                        </Typography>
                        <VerifiedIcon sx={{ color: "secondary.main", fontSize: 18 }} />
                      </Stack>
                      <Typography variant="subtitle1" sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", mt: 0.5, fontSize: "0.75rem" }}>
                        {doc.title}
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ 
                      lineHeight: 1.5, 
                      fontSize: "0.8rem", 
                      fontWeight: 500,
                      maxWidth: 350,
                      height: 70, // Fixed height to align buttons
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: "rgba(15, 30, 90, 0.02)",
                      p: 1.5,
                      borderRadius: "12px",
                      border: "1px dashed rgba(15, 30, 90, 0.1)",
                      mb: 'auto' // Pushes everything below to the bottom
                    }}>
                      {doc.qual}
                    </Typography>

                    <Box sx={{ pt: 1, mt: 'auto', width: '100%' }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ 
                          borderRadius: "100px", 
                          px: 3, 
                          py: 1,
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          boxShadow: "0 8px 16px rgba(15, 30, 90, 0.15)"
                        }}
                      >
                        View Full Profile
                      </Button>
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
