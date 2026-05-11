import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';

const PageHero = ({ 
  badge = "HALCYON CLINIC", 
  title, 
  highlight, 
  subtitle,
  badgeIcon = <VerifiedIcon sx={{ fontSize: 14, color: "#C2185B" }} />,
  badgeColor = "#C2185B"
}) => {
  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", 
      pt: { xs: 8, md: 10 }, 
      pb: { xs: 8, md: 12 }, 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <Box sx={{ 
        position: "absolute", 
        inset: 0, 
        opacity: 0.03, 
        backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`, 
        backgroundSize: '24px 24px', 
        zIndex: 0 
      }} />
      <Box sx={{ 
        position: "absolute", 
        top: "-20%", 
        right: "-10%", 
        width: "50%", 
        height: "80%", 
        background: "radial-gradient(circle, rgba(28,181,176,0.07) 0%, transparent 70%)", 
        zIndex: 0 
      }} />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 1, 
            backgroundColor: `${badgeColor}06`, 
            px: 2.5, 
            py: 0.6, 
            borderRadius: "100px", 
            mb: 3, 
            border: `1px solid ${badgeColor}12` 
          }}>
            {badgeIcon}
            <Typography variant="overline" sx={{ fontWeight: 900, color: badgeColor, letterSpacing: 3, fontSize: '0.7rem' }}>
              {badge}
            </Typography>
          </Box>
          
          <Typography variant="h1" sx={{ 
            fontWeight: 900, 
            fontSize: { xs: '2.8rem', md: '4rem' }, 
            mb: 3, 
            lineHeight: 1.1, 
            color: 'primary.main',
            fontFamily: "'Outfit', sans-serif"
          }}>
            {title} <span style={{ color: "#1CB5B0" }}>{highlight}</span>
          </Typography>
          
          {subtitle && (
            <Typography variant="h6" sx={{ 
              color: 'text.secondary', 
              lineHeight: 1.9, 
              fontSize: { xs: '1rem', md: '1.15rem' }, 
              fontWeight: 500,
              maxWidth: 700,
              mx: 'auto'
            }}>
              {subtitle}
            </Typography>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default PageHero;
