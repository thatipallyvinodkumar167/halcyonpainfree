import { Box, Container, Typography, Stack, Paper, Grid } from "@mui/material";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import StorageIcon from '@mui/icons-material/Storage';
import GavelIcon from '@mui/icons-material/Gavel';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';

const sections = [
  {
    icon: <StorageIcon sx={{ fontSize: 28 }} />,
    title: "Information We Collect",
    accent: "#1CB5B0",
    content: [
      { subtitle: "Personal Information", text: "We may collect personal information such as your name, contact details, date of birth, medical history, and insurance information when you voluntarily provide it during appointment booking or consultation." },
      { subtitle: "Non-Personal Information", text: "We may automatically collect non-personal information such as IP address, browser type, operating system, and referring URLs to improve our services and user experience." },
      { subtitle: "Medical Records", text: "With your consent, we collect and maintain medical records including diagnostic reports, treatment plans, imaging data, and clinical notes necessary for your ongoing care." }
    ]
  },
  {
    icon: <LockIcon sx={{ fontSize: 28 }} />,
    title: "How We Use Your Information",
    accent: "#C2185B",
    content: [
      { subtitle: "Clinical Services", text: "We use your information to schedule appointments, facilitate consultations, provide personalized pain management treatments, and maintain accurate medical records." },
      { subtitle: "Communications", text: "We may use your contact information to send appointment reminders, follow-up care instructions, and important health-related notifications." },
      { subtitle: "Service Improvement", text: "Aggregated, anonymized data may be used to analyze trends, improve our clinical protocols, and enhance the overall patient experience." }
    ]
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    title: "Data Security",
    accent: "#1CB5B0",
    content: [
      { subtitle: "Protection Measures", text: "We implement appropriate physical, technical, and administrative safeguards including encryption, access controls, and secure storage to protect your personal information." },
      { subtitle: "Staff Training", text: "All staff members handling personal data undergo regular training on data protection protocols and are bound by strict confidentiality agreements." }
    ]
  },
  {
    icon: <VisibilityOffIcon sx={{ fontSize: 28 }} />,
    title: "Third-Party Disclosure",
    accent: "#C2185B",
    content: [
      { subtitle: "Our Commitment", text: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist in operating our services, subject to strict confidentiality obligations." },
      { subtitle: "Legal Requirements", text: "We may disclose your information when required by law, court order, or governmental regulation, or when necessary to protect the rights, property, or safety of our patients or the public." }
    ]
  },
  {
    icon: <GavelIcon sx={{ fontSize: 28 }} />,
    title: "Your Rights",
    accent: "#1CB5B0",
    content: [
      { subtitle: "Access & Correction", text: "You have the right to access, review, and request corrections to your personal information held by us. Submit a written request and we will respond within 30 business days." },
      { subtitle: "Data Deletion", text: "You may request the deletion of your personal data, subject to legal and regulatory retention requirements. Medical records may be retained as required by applicable healthcare regulations." },
      { subtitle: "Opt-Out", text: "You can opt out of non-essential communications at any time by contacting our office or using the unsubscribe link provided in our emails." }
    ]
  },
];

const trustBadges = [
  { icon: <ShieldIcon sx={{ fontSize: 28 }} />, label: "HIPAA Compliant", accent: "#1CB5B0" },
  { icon: <LockIcon sx={{ fontSize: 28 }} />, label: "256-bit Encryption", accent: "#C2185B" },
  { icon: <VerifiedUserIcon sx={{ fontSize: 28 }} />, label: "Data Protected", accent: "#1CB5B0" },
  { icon: <SecurityIcon sx={{ fontSize: 28 }} />, label: "Secure Systems", accent: "#C2185B" },
];

export default function PrivacyPolicy() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <SEO
        title="Privacy Policy | Halcyon Pain Management"
        description="Learn about how Halcyon Pain Management Center collects, uses, and protects your personal and medical information."
        keywords="privacy policy, data protection, medical records privacy, halcyon security"
      />

      <PageHero 
        badge="YOUR DATA, OUR RESPONSIBILITY"
        badgeIcon={<ShieldIcon sx={{ fontSize: 14, color: "#1CB5B0" }} />}
        badgeColor="#1CB5B0"
        title="Privacy"
        highlight="Policy"
        subtitle="Effective Date: July 05, 2023. Learn about how Halcyon Pain Management Center collects, uses, and protects your personal and medical information."
      />

      {/* ====== TRUST BADGES STRIP ====== */}
      <Box sx={{ background: "linear-gradient(90deg, #0F1E5A 0%, #162470 100%)", py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} alignItems="center" justifyContent="center">
            {trustBadges.map((badge, i) => (
              <Grid item xs={6} sm={3} key={i} sx={{ textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Box sx={{ borderLeft: i > 0 ? { sm: '1px solid rgba(255,255,255,0.08)' } : 'none', py: { xs: 2, sm: 1 }, px: { xs: 2, sm: 3 } }}>
                    <Box sx={{ color: badge.accent, mb: 0.5 }}>{badge.icon}</Box>
                    <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1.5 }}>{badge.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ====== INTRO CARD ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", pt: { xs: 6, md: 8 }, pb: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Paper elevation={0} sx={{ p: { xs: 4, md: 5 }, borderRadius: "28px", backgroundColor: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(15,30,90,0.05)", position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, #1CB5B0, #C2185B)", opacity: 0.6 }} />
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems={{ xs: "flex-start", sm: "center" }}>
                <Box sx={{ width: 52, height: 52, borderRadius: "16px", backgroundColor: "rgba(28,181,176,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <PersonIcon sx={{ color: "#1CB5B0", fontSize: 26 }} />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 2, fontSize: "1.02rem", color: "text.secondary", fontWeight: 500 }}>
                  This Privacy Policy governs how Halcyon Pain Management Clinic ("Halcyon," "we," "us," or "our") collects, uses, maintains, and discloses personal information from users of our website, services, and related applications. By using our Services, you consent to the practices described herein.
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* ====== POLICY SECTIONS ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #fbf6f8 0%, #FFFFFF 100%)", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            {sections.map((section, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <Paper elevation={0} sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: "28px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(15,30,90,0.05)",
                  position: 'relative', overflow: 'hidden',
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#FFFFFF", boxShadow: "0 20px 40px rgba(15,30,90,0.06)", borderColor: `${section.accent}30` }
                }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${section.accent}, #fff)`, opacity: 0.8 }} />

                  {/* Section Title Row */}
                  <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 4 }}>
                    <Box sx={{ width: 52, height: 52, borderRadius: "16px", backgroundColor: `${section.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", color: section.accent, flexShrink: 0 }}>
                      {section.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: "primary.main", fontSize: { xs: "1.3rem", md: "1.5rem" } }}>
                      {section.title}
                    </Typography>
                  </Stack>

                  {/* Content Items */}
                  <Grid container spacing={3}>
                    {section.content.map((item, i) => (
                      <Grid item xs={12} sm={section.content.length === 2 ? 6 : 12} md={section.content.length === 3 ? 4 : section.content.length === 2 ? 6 : 12} key={i}>
                        <Box sx={{ p: 3, borderRadius: "16px", backgroundColor: `${section.accent}06`, border: `1px solid ${section.accent}15`, height: '100%' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 900, color: section.accent, mb: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 0.5 }}>
                            {item.subtitle}
                          </Typography>
                          <Typography variant="body2" sx={{ lineHeight: 1.9, color: "text.secondary", fontWeight: 500, fontSize: "0.92rem" }}>
                            {item.text}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ====== CONTACT CARD ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: "28px", background: "linear-gradient(135deg, #0F1E5A 0%, #162470 100%)", position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: "absolute", top: "-50%", right: "-10%", width: "60%", height: "200%", background: "radial-gradient(circle, rgba(28,181,176,0.1) 0%, transparent 70%)" }} />
              <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: "14px", backgroundColor: "rgba(28,181,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ContactMailIcon sx={{ color: "#1CB5B0", fontSize: 22 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: "#fff", fontSize: { xs: "1.3rem", md: "1.6rem" } }}>
                      Questions About Your Privacy?
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 500, fontSize: "0.98rem" }}>
                    If you have any questions or concerns about this Privacy Policy, or wish to exercise your data rights, please reach out to us. We are committed to resolving your queries promptly and transparently.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Typography sx={{ fontWeight: 900, color: "#fff", mb: 2, fontSize: "1.05rem" }}>Halcyon Pain Management Clinic</Typography>
                    <Stack spacing={1}>
                      <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                        3rd Floor, KKR Commercial Complex<br />
                        Kukatpally Y Junction, Hyderabad – 500 072
                      </Typography>
                      <Typography sx={{ color: "#fff", fontSize: "0.9rem" }}>
                        <span style={{ color: "#1CB5B0", fontWeight: 700 }}>Phone: </span>+91 77 88 091 092
                      </Typography>
                      <Typography sx={{ color: "#fff", fontSize: "0.9rem" }}>
                        <span style={{ color: "#1CB5B0", fontWeight: 700 }}>Email: </span>info@halcyonpainfree.com
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
