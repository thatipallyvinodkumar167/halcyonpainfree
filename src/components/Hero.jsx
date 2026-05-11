// import { Box, Typography, Button, Grid, Paper } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const therapyImages = [
//     "radiofrequency-ablation",
//     "prolotherapy",
//     "regenerative-medicine",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % therapyImages.length);
//     }, 3000); // change image every 3s

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         px: { xs: 2, md: 6 },
//         background:
//           "linear-gradient(135deg, rgba(11,94,215,0.05), rgba(124,179,66,0.08))",
//       }}
//     >
//       <Grid container spacing={6} alignItems="center">

//         {/* LEFT CONTENT */}
//         <Grid item xs={12} md={4}>
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <Typography variant="h4" gutterBottom>
//               Welcome To <br />
//               <span style={{ color: "#C2185B" }}>
//                 Halcyon Pain Management
//               </span>
//             </Typography>

//             <Typography
//               sx={{
//                 mb: 3,
//                 color: "text.secondary",
//                 fontSize: 18,
//                 maxWidth: 420,
//               }}
//             >
//               Advanced, evidence-based pain relief solutions helping you move
//               better, live stronger, and reclaim a pain-free life.
//             </Typography>

//             <Typography variant="h5" color="secondary" sx={{ mb: 3 }}>
//               ⭐⭐⭐⭐⭐ <br />
//               Trusted by 50,000+ Patients
//             </Typography>

//             <Button size="large" variant="contained">
//               Book Your Consultation
//             </Button>
//           </motion.div>
//         </Grid>

//         {/* CENTER FLOATING IMAGE */}
//         <Grid item xs={12} md={4} sx={{ textAlign: "center", mt: 5 }}>
//           <motion.div
//             animate={{ y: [0, -18, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Paper
//               elevation={16}
//               sx={{
//                 p: 2,
//                 borderRadius: 5,
//                 display: "inline-block",
//                 transform: "rotate(-2deg)",
//               }}
//             >
//               <img
//                 src="/images/dr-pallavi-dasyam.jpg"
//                 alt="Dr Pallavi Dasyam"
//                 style={{
//                   width: "100%",
//                   maxWidth: 360,
//                   borderRadius: 18,
//                 }}
//               />
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: 600 }}>
//               Dr. Pallavi Dasyam
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               Consultant – Pain Medicine
//             </Typography>
//           </motion.div>
//         </Grid>

//         {/* RIGHT ONE-BY-ONE IMAGE SLIDER */}
//         <Grid item xs={12} md={4}>
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <Typography variant="h4" color="secondary" gutterBottom>
//               Your Path To Recovery <br /> Starts Here
//             </Typography>

//             <Box
//               sx={{
//                 mt: 3,
//                 width: 280,
//                 height: 180,
//                 position: "relative",
//                 overflow: "hidden",
//                 borderRadius: 3,
//               }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={currentIndex}
//                   src={`/images/${therapyImages[currentIndex]}.jpg`}
//                   alt="Pain Therapy"
//                   initial={{ x: 80, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -80, opacity: 0 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     position: "absolute",
//                   }}
//                 />
//               </AnimatePresence>
//             </Box>
//           </motion.div>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// }



import { Box, Typography, Button, Container, Grid, Paper, Stack, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VerifiedIcon from '@mui/icons-material/Verified';

import BookNowPopup from "./BookNowPopup";

const therapyImages = [
  "radiofrequency-ablation",
  "prolotherapy",
  "regenerative-medicine",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % therapyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "90vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 4 },
        pb: { xs: 6, md: 4 },
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(circle, rgba(28, 181, 176, 0.08) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">

          {/* COLUMN 1: Welcome & CTA */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: {xs: 1, md: 2}, color: "#C2185B", mb: {xs: 0.5, md: 1}, display: 'block' }}>
                    EXCELLENCE IN PAIN RELIEF
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 900, mb: {xs: 1.5, md: 2}, fontSize: { xs: "2rem", md: "3.2rem" }, lineHeight: 1.1 }}>
                    <span style={{ color: "#0F1E5A" }}>Halcyon Pain</span> <br />
                    <span style={{ color: "#1CB5B0" }}>Management</span>
                  </Typography>
                  {/* Long description for tablet/desktop */}
                  <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' }, color: "text.secondary", maxWidth: 400, mb: 4, fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 500 }}>
                    Experience world-class, non-surgical interventional care. Our US-certified specialists pinpoint and treat the root cause of chronic pain to rapidly restore your mobility.
                  </Typography>
                  {/* Concise description for mobile to ensure image fits above the fold */}
                  <Typography variant="body1" sx={{ display: { xs: 'block', sm: 'none' }, color: "text.secondary", mb: 2, fontSize: "0.95rem", lineHeight: 1.4, fontWeight: 500 }}>
                    World-class comprehensive pain management centre.
                  </Typography>
                </Box>

                <Box sx={{ mb: {xs: 1, md: 3}, display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 2, backgroundColor: 'rgba(255, 255, 255, 0.6)', p: 1.5, borderRadius: 3, width: 'fit-content', border: '1px solid rgba(15, 30, 90, 0.05)' }}>
                  <Box>
                    <Typography sx={{ fontSize: "1.3rem", color: "#FFB400", lineHeight: 1 }}>⭐⭐⭐⭐⭐</Typography>
                  </Box>
                  <Box sx={{ borderLeft: '2px solid rgba(15, 30, 90, 0.1)', pl: 1.5 }}>
                    <Typography sx={{ fontWeight: 800, color: "primary.main", fontSize: '0.9rem', lineHeight: 1.2 }}>Trusted by 50,000+</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Patients Recovered</Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    alignSelf: { xs: 'flex-end', sm: 'flex-start' },
                    py: {xs: 1.5, md: 2},
                    px: {xs: 3, md: 4},
                    mr: {xs: 2, sm: 0},
                    fontSize: {xs: "1rem", md: "1.1rem"},
                    fontWeight: 700,
                    borderRadius: "100px",
                    width: "fit-content",
                    boxShadow: "0 20px 40px rgba(28, 181, 176, 0.2)"
                  }}
                >
                  Book Your Consultation
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* COLUMN 2: Specialists */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative", textAlign: "center", maxWidth: { md: 380 }, mx: "auto" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Paper
                    elevation={0}
                  sx={{
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "6px solid #fff",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    backgroundColor: "#fff",
                    zIndex: 1,

                  }}
                >
                  <Box
                    component="img"
                    src="/images/bothTogether.webp"
                    alt="Our Specialists"
                    sx={{
                      width: "100%",
                      height: { xs: 240, md: 320 },
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      transform: "scale(1.02)",
                    }}
                  />
                </Paper>

                {/* Certified Experts Badge moved outside the image for better visibility */}
                <Paper
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: -70,
                    backgroundColor: "#C2185B", // Logo Pink
                    color: "#fff",
                    p: "8px 16px",
                    borderRadius: "12px",
                    display: { xs: 'none', md: 'flex' },
                    alignItems: "center",
                    gap: 1,
                    boxShadow: "0 10px 20px rgba(194, 24, 91, 0.2)",
                    zIndex: 10,
                  }}
                >
                  <Box sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <VerifiedIcon sx={{ color: "#C2185B", fontSize: 14 }} />
                  </Box>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, display: "block", fontSize: "0.7rem" }}>Certified Experts</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8, fontSize: "0.55rem" }}>World Institute of Pain</Typography>
                  </Box>
                </Paper>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>Dr. Pallavi & Dr. Kiran</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Senior Pain Management Specialists</Typography>
                </Box>
                </motion.div>
              </motion.div>
            </Box>
          </Grid>

          {/* COLUMN 3: Path to Recovery & Slider */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Stack spacing={4} sx={{ pl: { md: 4 } }}>
                <Typography variant="h3" sx={{ color: "#C2185B", fontWeight: 800, lineHeight: 1.2 }}>
                  Your Path To <br />
                  Recovery Starts Here
                </Typography>

                <Paper
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    height: 220,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(28, 181, 176, 0.1)"
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={`/images/${therapyImages[currentIndex]}.jpg`}
                      alt={therapyImages[currentIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </AnimatePresence>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: "linear-gradient(transparent, rgba(15, 30, 90, 0.9))",
                      color: "#fff"
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                      {therapyImages[currentIndex].replace(/-/g, ' ').toUpperCase()}
                    </Typography>
                  </Box>
                </Paper>

                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "secondary.main" }} />
                    <Typography variant="body2" fontWeight={600}>Advanced Non-Surgical Procedures</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "secondary.main" }} />
                    <Typography variant="body2" fontWeight={600}>US-Certified Pain Specialists</Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

        </Grid>
      </Container>

      <BookNowPopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </Box>
  );
}

