import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  Stack,
  Collapse,
  Divider,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import BookNowPopup from "../components/BookNowPopup";
import TopNavbar from "./TopNavbar";

/* ================= MENU DATA ================= */

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Pain-Conditions", to: "/pain-conditions", hasDropdown: true },
  { label: "Treatments", to: "/treatments" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const painCategories = [
  {
    title: "Common Conditions",
    items: [
      { label: "Back Pain", link: "/pain-conditions/back-pain" },
      { label: "Knee Pain", link: "/pain-conditions/knee-pain" },
      { label: "Neck & Shoulder Pain", link: "/pain-conditions/neck-shoulder-pain" },
      { label: "Sciatica Pain", link: "/pain-conditions/sciatica-pain" },
      { label: "Slipped Disc Pain", link: "/pain-conditions/slipped-disc-pain" },
    ]
  },
  {
    title: "Specialized Care",
    items: [
      { label: "Cancer Pain", link: "/pain-conditions/cancer-pain" },
      { label: "Trigeminal Neuralgia", link: "/pain-conditions/trigeminal-neuralgia" },
      { label: "Migraine Pain", link: "/pain-conditions/migraine-pain" },
      { label: "CRPS Pain", link: "/pain-conditions/crps-pain" },
      { label: "Vascular Pain", link: "/pain-conditions/vascular-pain" },
    ]
  },
  {
    title: "Joint & Nerve",
    items: [
      { label: "Hip Joint Pain", link: "/pain-conditions/hip-joint-pain" },
      { label: "Frozen Shoulder", link: "/pain-conditions/frozen-shoulder-pain" },
      { label: "Nerve Pain", link: "/pain-conditions/nerve-pain" },
      { label: "Post Surgical Pain", link: "/pain-conditions/post-surgical-pain" },
      { label: "Plantar Fasciitis", link: "/pain-conditions/plantar-fasciitis-pain" },
    ]
  }
];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPainMenu, setShowPainMenu] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);

  const location = useLocation();

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopNavbar />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#fff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: "1px solid rgba(15, 30, 90, 0.08)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          py: scrolled ? 0.5 : 1.5,
        }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            backgroundColor: "#1CB5B0",
            transformOrigin: "0%",
            zIndex: 1200
          }}
        />
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: { xs: 64, md: 80 } }}>
            {/* LOGO SECTION */}
            <Box 
              component={NavLink} 
              to="/" 
              sx={{ 
                display: "flex", 
                alignItems: "center",
                textDecoration: "none"
              }}
            >
              <img 
                src="/images/logo.halcyon.webp" 
                alt="Halcyon" 
                height={scrolled ? 45 : 55} 
                style={{ 
                  transition: "all 0.3s ease", 
                  display: "block", 
                  objectFit: "contain",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  padding: "4px"
                }} 
              />
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Box sx={{ flexGrow: 1 }} />
            <Stack 
              direction="row" 
              spacing={0.5} 
              alignItems="center" 
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menuItems.map((item) => {
                const isActive = location.pathname === item.to;
                const isDropdown = item.hasDropdown;

                return (
                  <Box
                    key={item.label}
                    onMouseEnter={() => isDropdown && setShowPainMenu(true)}
                    onMouseLeave={() => isDropdown && setShowPainMenu(false)}
                    sx={{ position: "relative" }}
                  >
                    <Button
                      component={NavLink}
                      to={item.to}
                      endIcon={isDropdown ? <ExpandMoreIcon sx={{ 
                        fontSize: 18, 
                        ml: -0.5,
                        transform: showPainMenu ? "rotate(180deg)" : "none",
                        transition: "0.3s"
                      }} /> : null}
                      sx={{
                        px: 1.5,
                        py: 1,
                        color: isActive ? "secondary.main" : "primary.main",
                        fontSize: "0.95rem",
                        fontWeight: isActive ? 700 : 600,
                        letterSpacing: "0.3px",
                        whiteSpace: "nowrap",
                        minWidth: "auto",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "secondary.main",
                        },
                      }}
                    >
                      {item.label}
                    </Button>

                    {/* ACTIVE INDICATOR */}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "20%",
                          right: "20%",
                          height: 3,
                          backgroundColor: "#1CB5B0",
                          borderRadius: "4px 4px 0 0"
                        }}
                      />
                    )}

                    {/* REFINED MEGA MENU */}
                    {isDropdown && (
                      <AnimatePresence>
                        {showPainMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "-250px",
                              width: "750px",
                              backgroundColor: "#fff",
                              borderRadius: "24px",
                              boxShadow: "0 30px 60px rgba(15, 30, 90, 0.15)",
                              padding: "32px",
                              border: "1px solid rgba(15, 30, 90, 0.05)",
                              zIndex: 100
                            }}
                          >
                            <Grid container spacing={4}>
                              {painCategories.map((cat, idx) => (
                                <Grid item xs={4} key={idx}>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: "secondary.main", 
                                      fontWeight: 800, 
                                      mb: 2,
                                      fontSize: "0.75rem",
                                      textTransform: "uppercase",
                                      letterSpacing: 1.5
                                    }}
                                  >
                                    {cat.title}
                                  </Typography>
                                  <Stack spacing={0.5}>
                                    {cat.items.map((subItem) => (
                                      <Typography
                                        key={subItem.label}
                                        component={NavLink}
                                        to={subItem.link}
                                        sx={{
                                          fontSize: "0.9rem",
                                          color: "text.secondary",
                                          textDecoration: "none",
                                          fontWeight: 500,
                                          p: "8px 12px",
                                          borderRadius: "8px",
                                          transition: "0.2s",
                                          "&:hover": {
                                            backgroundColor: "rgba(28, 181, 176, 0.08)",
                                            color: "secondary.dark",
                                            transform: "translateX(5px)"
                                          }
                                        }}
                                      >
                                        {subItem.label}
                                      </Typography>
                                    ))}
                                  </Stack>
                                </Grid>
                              ))}
                            </Grid>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </Box>
                );
              })}

              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenPopup(true)}
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  boxShadow: "0 10px 20px rgba(28, 181, 176, 0.25)",
                  "&:hover": {
                    boxShadow: "0 15px 30px rgba(28, 181, 176, 0.4)",
                  }
                }}
              >
                Book Appointment
              </Button>
            </Stack>

            {/* MOBILE ACTION BUTTONS */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton 
                onClick={() => setMobileOpen(true)}
                sx={{ color: "primary.main" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ENHANCED MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: "100%", maxWidth: 320, p: 3 }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <img 
            src="/images/logo.halcyon.webp" 
            alt="Logo" 
            height={40} 
            style={{ borderRadius: "8px", backgroundColor: "#fff", padding: "4px" }}
          />
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ mb: 4 }}>
          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  onClick={item.hasDropdown ? (e) => {
                    e.preventDefault();
                    setMobileConditionsOpen(!mobileConditionsOpen);
                  } : () => setMobileOpen(false)}
                  sx={{ 
                    borderRadius: "12px",
                    mb: 0.5,
                    color: location.pathname === item.to ? "secondary.main" : "primary.main",
                    backgroundColor: location.pathname === item.to ? "rgba(28, 181, 176, 0.05)" : "transparent"
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ fontWeight: 700, fontSize: "1.1rem" }} 
                  />
                  {item.hasDropdown && (mobileConditionsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>
              
              {item.hasDropdown && (
                <Collapse in={mobileConditionsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 2 }}>
                    {painCategories.flatMap(c => c.items).map((sub) => (
                      <ListItemButton 
                        key={sub.label} 
                        component={NavLink}
                        to={sub.link}
                        onClick={() => setMobileOpen(false)}
                        sx={{ borderRadius: "8px" }}
                      >
                        <ListItemText 
                          primary={sub.label} 
                          primaryTypographyProps={{ fontSize: "0.95rem" }} 
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Need help? Call us at
          </Typography>
          <Typography 
            variant="h6" 
            component="a" 
            href="tel:+917788091092"
            sx={{ 
              color: "primary.main", 
              fontWeight: 800, 
              textDecoration: "none",
              display: "block",
              mb: 3
            }}
          >
            +91 77 88 091 092
          </Typography>
          <Button 
            fullWidth 
            variant="contained" 
            color="secondary"
            onClick={() => setOpenPopup(true)}
            sx={{ py: 1.5, borderRadius: "12px", fontWeight: 700 }}
          >
            Schedule Visit
          </Button>
        </Box>
      </Drawer>

      <BookNowPopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}

