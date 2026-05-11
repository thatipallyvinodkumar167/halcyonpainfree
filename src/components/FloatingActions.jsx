import React, { useState } from "react";
import { Box, Typography, Stack, Paper, IconButton, useTheme } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions({ onBook }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 20, md: 30 },
        bottom: { xs: 30, md: "auto" },
        top: { xs: "auto", md: "50%" },
        transform: { xs: "none", md: "translateY(-50%)" },
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        pointerEvents: "none",
      }}
    >
      <Stack spacing={2} sx={{ pointerEvents: "auto" }}>
        <HoverButton
          icon={<CalendarMonthIcon sx={{ fontSize: 28 }} />}
          label="Book Appointment"
          onClick={onBook}
          color="#1CB5B0"
          isPrimary
        />

        <HoverButton
          icon={<PersonIcon sx={{ fontSize: 24 }} />}
          label="Our Specialists"
          onClick={() =>
            document
              .getElementById("specialists")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          color="#0F1E5A"
        />

        <HoverButton
          icon={<PhoneIcon sx={{ fontSize: 24 }} />}
          label="Priority Call"
          onClick={() => (window.location.href = "tel:+917788091092")}
          color="#0F1E5A"
        />

        <HoverButton
          icon={<WhatsAppIcon sx={{ fontSize: 24 }} />}
          label="WhatsApp Support"
          onClick={() =>
            window.open(
              "https://wa.me/917788091092?text=Hello%20Halcyon%2C%20I%20would%20like%20to%20inquire%20about...",
              "_blank"
            )
          }
          color="#25D366"
        />
      </Stack>
    </Box>
  );
}

function HoverButton({ icon, label, onClick, color, isPrimary = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "absolute",
              right: "100%",
              marginRight: "16px",
              whiteSpace: "nowrap",
              zIndex: 10,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: 1.2,
                px: 2.5,
                borderRadius: "16px",
                backgroundColor: isPrimary ? color : "rgba(15, 30, 90, 0.95)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                boxShadow: `0 20px 40px rgba(0,0,0,0.15)`,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: 0.5, 
                  textTransform: 'uppercase',
                  fontFamily: 'Inter'
                }}
              >
                {label}
              </Typography>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.12, rotate: isPrimary ? 0 : 5 }}
        whileTap={{ scale: 0.92 }}
        animate={isPrimary && !isHovered ? {
          boxShadow: [
            `0 0 0 0px ${color}40`,
            `0 0 0 15px ${color}00`
          ]
        } : {}}
        transition={isPrimary && !isHovered ? {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        } : {}}
        style={{
          width: isPrimary ? 64 : 56,
          height: isPrimary ? 64 : 56,
          borderRadius: "20px",
          backgroundColor: isHovered ? color : "#fff",
          color: isHovered ? "#fff" : color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isHovered 
            ? `0 20px 40px ${color}60` 
            : "0 10px 30px rgba(15, 30, 90, 0.08)",
          border: `1px solid ${isHovered ? "transparent" : "rgba(15, 30, 90, 0.05)"}`,
          transition: "background-color 0.4s, color 0.4s, box-shadow 0.4s",
          backdropFilter: "blur(5px)",
        }}
      >
        {icon}
      </motion.div>
    </Box>
  );
}

