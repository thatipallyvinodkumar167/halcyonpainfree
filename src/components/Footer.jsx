import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", 
      color: "primary.main", 
      pt: { xs: 8, md: 10 },
      position: "relative",
      overflow: "hidden",
      borderTop: "6px solid",
      borderImage: "linear-gradient(90deg, #1CB5B0 0%, #C2185B 100%) 1"
    }}>
      <Container maxWidth="xl" sx={{ pb: 8, position: "relative", zIndex: 1 }}>
        <Grid container spacing={8}>
          
          {/* BRAND & DESCRIPTION */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4}>
              <Box component={RouterLink} to="/" sx={{ textDecoration: 'none', display: 'inline-block' }}>
                <Box 
                  component="img" 
                  src="/images/logo.halcyon.webp" 
                  alt="Halcyon Pain Management"
                  sx={{ 
                    height: { xs: 50, md: 60 },
                    width: 'auto',
                    mb: 1
                  }} 
                />
                <Typography sx={{ lineHeight: 1.8, color: "text.secondary", maxWidth: 380, fontSize: "1.05rem", fontWeight: 500, mt: 2 }}>
                  Redefining pain management through advanced non-surgical interventions, precision diagnostics, and personalized clinical excellence.
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                {[
                  { icon: <FacebookIcon fontSize="small" />, url: "#" },
                  { icon: <InstagramIcon fontSize="small" />, url: "#" },
                  { icon: <TwitterIcon fontSize="small" />, url: "#" },
                  { icon: <LinkedInIcon fontSize="small" />, url: "#" },
                ].map((social, i) => (
                  <IconButton 
                    key={i} 
                    sx={{ 
                      color: "primary.main", 
                      width: 44,
                      height: 44,
                      border: "1px solid rgba(15,30,90,0.1)",
                      backgroundColor: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(5px)",
                      transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": { 
                        backgroundColor: "secondary.main", 
                        borderColor: "secondary.main",
                        color: "#fff",
                        transform: "translateY(-5px)"
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 4, color: "secondary.main", textTransform: "uppercase", letterSpacing: 1.5 }}>
              Discovery
            </Typography>
            <Stack spacing={2.5}>
              {[
                { label: "Home", href: "/" },
                { label: "About Halcyon", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.href}
                  underline="none"
                  color="inherit"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { color: "secondary.main", transform: "translateX(8px)" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONDITIONS */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 4, color: "#C2185B", textTransform: "uppercase", letterSpacing: 1.5 }}>
              Pain Solutions
            </Typography>
            <Stack spacing={2.5}>
              {[
                "Knee & Hip Relief",
                "Spine & Back Care",
                "Sciatica Treatment",
                "Neck & Shoulder Pain",
                "Sports Injury Rehab",
                "Neuralgia Management",
              ].map((item) => (
                <Link
                  key={item}
                  component={RouterLink}
                  to="/pain-conditions"
                  underline="none"
                  sx={{ 
                    color: "text.secondary", 
                    fontWeight: 600,
                    cursor: "pointer", 
                    fontSize: "0.95rem",
                    transition: "0.3s",
                    display: "block",
                    "&:hover": { color: "secondary.main", transform: "translateX(8px)" } 
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 4, color: "secondary.main", textTransform: "uppercase", letterSpacing: 1.5 }}>
              Get In Touch
            </Typography>
            <Stack spacing={4}>
              <Box display="flex" gap={2.5}>
                <Box sx={{ width: 44, height: 44, borderRadius: "12px", backgroundColor: "rgba(28, 181, 176, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <LocationOnIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, lineHeight: 1.7, fontSize: "0.95rem" }}>
                  3rd Floor, KKR Commercial Complex,<br />
                  Kukatpally Y Junction, Hyderabad,<br />
                  Telangana 500072
                </Typography>
              </Box>

              <Box display="flex" gap={2.5} alignItems="center">
                <Box sx={{ width: 44, height: 44, borderRadius: "12px", backgroundColor: "rgba(28, 181, 176, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <PhoneIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 900, fontSize: "1.1rem", color: "primary.main" }}>
                  +91 77 88 091 092
                </Typography>
              </Box>

              <Box display="flex" gap={2.5} alignItems="center">
                <Box sx={{ width: 44, height: 44, borderRadius: "12px", backgroundColor: "rgba(28, 181, 176, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <EmailIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, fontSize: "0.95rem" }}>
                  info@halcyonpainfree.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        py: 4, 
        backgroundColor: "rgba(15, 30, 90, 0.03)",
        borderTop: "1px solid rgba(15, 30, 90, 0.05)"
      }}>
        <Container maxWidth="xl">
          <Stack 
            direction="column" 
            alignItems="center"
            spacing={3}
            sx={{ width: '100%' }}
          >
            <Typography variant="body2" sx={{ 
              color: "text.secondary", 
              opacity: 0.6, 
              fontSize: "0.8rem", 
              fontWeight: 500, 
              textAlign: "center", 
              maxWidth: "1000px",
              lineHeight: 1.6,
              mb: 2
            }}>
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of our specialists or other qualified health providers with any questions you may have regarding a medical condition.
            </Typography>
            
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              justifyContent="space-between" 
              alignItems="center"
              spacing={3}
              sx={{ width: '100%' }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary", opacity: 0.8, fontSize: "0.85rem", fontWeight: 600 }}>
                © {new Date().getFullYear()} Halcyon Pain Management Center. All Rights Reserved.
              </Typography>
              <Stack direction="row" spacing={4}>
                <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="none" sx={{ color: "text.secondary", fontSize: "0.85rem", fontWeight: 600, "&:hover": { color: "secondary.main" } }}>Privacy Policy</Link>
                <Link component={RouterLink} to="/terms" color="inherit" underline="none" sx={{ color: "text.secondary", fontSize: "0.85rem", fontWeight: 600, "&:hover": { color: "secondary.main" } }}>Terms of Service</Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

