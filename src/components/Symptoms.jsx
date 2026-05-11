import {
  Box,
  Stack,
  Typography,
  Container,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FilterListIcon from '@mui/icons-material/FilterList';

const symptomsData = [
  {
    id: "back-pain",
    name: "Back Pain",
    label: "Chronic & Acute",
    image: "/images/back-pain.jpg",
    desc: "Targeted relief for herniated discs and spinal stenosis using precision-guided interventions."
  },
  {
    id: "knee-pain",
    name: "Knee Pain",
    label: "Mobility Restoration",
    image: "/images/knee-pain.jpg",
    desc: "Advanced regenerative medicine and viscosupplementation to restore joint function without surgery."
  },
  {
    id: "sciatica-pain",
    name: "Sciatica",
    label: "Nerve Precision",
    image: "/images/sciatica.jpg",
    desc: "Imaging-guided nerve blocks and hydrodissection to eliminate radiating leg and hip pain."
  },
  {
    id: "frozen-shoulder-pain",
    name: "Shoulder Pain",
    label: "Full Range Recovery",
    image: "/images/shoulder-pain.jpg",
    desc: "Comprehensive care for rotator cuff issues and frozen shoulder through minimally invasive protocols."
  },
  {
    id: "neck-shoulder-pain",
    name: "Neck Pain",
    label: "Cervical Excellence",
    image: "/images/neck-pain.jpg",
    desc: "Relief from chronic neck stiffness and cervical spondylosis using gold-standard interventional care."
  }
];

export default function Symptoms() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Filtered symptoms logic
  const filteredSymptoms = activeFilter === "All" 
    ? symptomsData 
    : symptomsData.filter(s => s.category === activeFilter);

  // Duplicate for seamless loop
  const duplicatedSymptoms = [...filteredSymptoms, ...filteredSymptoms, ...filteredSymptoms];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400;
    if (current) {
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box sx={{ 
      pt: { xs: 8, md: 10 }, 
      pb: { xs: 10, md: 12 }, 
      background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                color: "primary.main", 
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: -1
              }}
            >
              Symptoms We <span style={{ 
                background: "linear-gradient(90deg, #0F1E5A 0%, #1CB5B0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Treat</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 900, mx: "auto", fontSize: "1.1rem" }}>
              Explore our specialized clinical pathways for the most common pain conditions.
            </Typography>
          </motion.div>
        </Box>

        {/* CHIP FILTERS */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 8, 
          overflowX: 'auto', 
          pb: 1,
          justifyContent: { xs: 'flex-start', md: 'center' },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', mr: 2, color: 'primary.main', backgroundColor: 'rgba(15, 30, 90, 0.05)', p: 1, borderRadius: '50%' }}>
            <FilterListIcon fontSize="small" />
          </Box>
          <Stack 
            direction="row" 
            spacing={2} 
          >
            {["All", "Spine", "Joints", "Nerve", "Sports"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "contained" : "outlined"}
                onClick={() => setActiveFilter(filter)}
                sx={{
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  borderRadius: "100px",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderWidth: "2px",
                  borderColor: activeFilter === filter ? "secondary.main" : "rgba(15, 30, 90, 0.1)",
                  backgroundColor: activeFilter === filter ? "secondary.main" : "transparent",
                  color: activeFilter === filter ? "#fff" : "primary.main",
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "secondary.main",
                    backgroundColor: activeFilter === filter ? "secondary.dark" : "rgba(28, 181, 176, 0.05)"
                  }
                }}
              >
                {filter}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* CAROUSEL CONTAINER */}
        <Box sx={{ position: "relative" }}>
          {/* Navigation Buttons */}
          <IconButton 
            onClick={() => scroll('left')}
            sx={{ 
              position: "absolute", 
              left: -10, 
              top: "50%", 
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              display: { xs: "none", md: "flex" },
              "&:hover": { backgroundColor: "#F8FAFC" }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton 
            onClick={() => scroll('right')}
            sx={{ 
              position: "absolute", 
              right: -10, 
              top: "50%", 
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              display: { xs: "none", md: "flex" },
              "&:hover": { backgroundColor: "#F8FAFC" }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* CONTINUOUS AUTO-SCROLLING MARQUEE */}
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              cursor: 'grab',
              '&:active': { cursor: 'grabbing' }
            }}
          >
            <motion.div
              animate={{
                x: isHovered ? 0 : [0, -1660],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60, // Optimized speed for better engagement
                  ease: "linear",
                },
              }}
              style={{
                display: 'flex',
                gap: '32px',
                width: 'max-content',
                paddingBottom: '40px'
              }}
            >
              {duplicatedSymptoms.map((item, index) => {
                const accent = index % 2 === 0 ? "#1CB5B0" : "#C2185B";
                return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    width: { xs: 260, md: 300 },
                    height: 340,
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    border: "3px solid #fff",
                    boxShadow: "0 20px 40px -10px rgba(15, 30, 90, 0.1)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: `0 35px 70px -12px ${accent}40`,
                      "& .overlay": { opacity: 0.98 },
                      "& img": { transform: "scale(1.1)" }
                    }
                  }}
                >
                  {/* Top Accent Line */}
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    height: 6, 
                    background: `linear-gradient(90deg, ${accent}, #fff)`,
                    zIndex: 2,
                    opacity: 0.9
                  }} />

                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.8s ease"
                    }}
                  />
                  
                  {/* Glassmorphic Overlay */}
                  <Box 
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15, 30, 90, 0.95) 0%, rgba(15, 30, 90, 0.4) 50%, transparent 100%)",
                      opacity: 0.8,
                      transition: "0.4s ease"
                    }}
                  />

                  {/* Content Container */}
                  <Box 
                    className="content"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2.5,
                      pb: 3,
                      textAlign: "center"
                    }}
                  >
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: accent, 
                        fontWeight: 900, 
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        display: "block",
                        mb: 0.2,
                        fontSize: "0.65rem"
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: "#fff", 
                        fontWeight: 900,
                        mb: 0.8,
                        fontSize: "1.2rem",
                        lineHeight: 1.1
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "rgba(255,255,255,0.8)", 
                        lineHeight: 1.3,
                        mb: 2,
                        fontSize: "0.75rem",
                        px: 1,
                        fontWeight: 500
                      }}
                    >
                      {item.desc}
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        backgroundColor: accent,
                        color: "#fff",
                        borderRadius: "100px", 
                        px: 2.5, 
                        py: 1,
                        fontWeight: 800,
                        textTransform: "none",
                        fontSize: "0.75rem",
                        boxShadow: `0 10px 20px ${accent}40`,
                        "&:hover": {
                          backgroundColor: accent,
                          opacity: 0.9,
                          transform: "translateY(-2px)"
                        }
                      }}
                      component={Link}
                      to={`/pain-conditions/${item.id}`}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Paper>
                );
              })}
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
