import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Stack,
  Divider,
  Paper,
  Button,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SuccessStories from '../components/SuccessStories';
import AboutHero from '../components/AboutHero';
import SEO from '../components/SEO';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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

function MilestoneCard({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(isInView ? item.endValue : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: { xs: 220, md: '100%' },
          width: { xs: '90%', md: '100%' },
          mx: 'auto',
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

        <Box>
          <Typography variant="h3" sx={{
            fontWeight: 900,
            color: "primary.main",
            fontSize: "2.2rem",
            lineHeight: 1,
            mb: 1
          }}>
            {Number.isInteger(item.endValue) ? Math.round(count).toLocaleString() : count.toFixed(1)}
            <span style={{ fontSize: "1rem", opacity: 0.6, marginLeft: '2px' }}>{item.suffix}</span>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "primary.main", fontSize: "1.1rem", lineHeight: 1.2 }}>
            {item.label}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
}

const specialists = [
  {
    name: "Dr. Pallavi Dasyam",
    title: "Consultant - Pain Management",
    qual: "MBBS, DA, CIPS (Certified Interventional Pain Sonologist – World Institute of Pain, USA)",
    image: "/images/dr.pallavi.webp",
    specialties: ["Interventional Pain", "Sonology", "Chronic Pain"],
    accent: "#C2185B",
  },
  {
    name: "Dr. PSS Kiran",
    title: "Pain Management Specialist",
    qual: "MBBS, MD, Fellowship in Pain Management",
    image: "/images/dr.kiran_.webp",
    specialties: ["Spine Interventions", "Nerve Blocks", "Regenerative Medicine"],
    accent: "#1CB5B0",
  }
];

const milestones = [
  { icon: <GroupsIcon sx={{ fontSize: 32 }} />, endValue: 50000, suffix: "+", label: "Patients Treated", accent: "#1CB5B0" },
  { icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />, endValue: 15, suffix: "+", label: "Years of Excellence", accent: "#C2185B" },
  { icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />, endValue: 200, suffix: "+", label: "Procedures Monthly", accent: "#1CB5B0" },
  { icon: <TrendingUpIcon sx={{ fontSize: 32 }} />, endValue: 98, suffix: "%", label: "Patient Satisfaction", accent: "#C2185B" },
];

const values = [
  { icon: <FavoriteIcon sx={{ fontSize: 28 }} />, title: "Compassion First", desc: "Every patient is treated with empathy, dignity, and a genuine desire to restore their quality of life.", accent: "#C2185B" },
  { icon: <PsychologyIcon sx={{ fontSize: 28 }} />, title: "Root-Cause Focus", desc: "We don't mask symptoms. Our protocols are designed to identify and treat the underlying source of pain.", accent: "#1CB5B0" },
  { icon: <HealthAndSafetyIcon sx={{ fontSize: 28 }} />, title: "Ethical Practice", desc: "Transparency, honesty, and patient safety are non-negotiable pillars of every treatment decision we make.", accent: "#C2185B" },
  { icon: <ScienceIcon sx={{ fontSize: 28 }} />, title: "Evidence-Based", desc: "All treatments are grounded in peer-reviewed research and the latest advances in interventional pain science.", accent: "#1CB5B0" },
];

const faqs = [
  { q: 'What is interventional pain management?', a: 'Interventional pain management involves minimally invasive techniques to reduce pain. These are not open surgeries but precise procedures done under imaging guidance like ultrasound or fluoroscopy.' },
  { q: 'Do I need a referral to book an appointment?', a: 'No referral is required. You can book directly and our team will guide the next steps.' },
  { q: 'How long does a first consultation take?', a: 'Most first visits take 30–45 minutes depending on your condition and assessment needs.' },
  { q: 'Do you offer non-surgical options?', a: 'Yes. Our core focus is on non-surgical, evidence-based treatments to help you avoid invasive operations.' },
  { q: 'What conditions do you treat?', a: 'We treat back pain, knee pain, sciatica, frozen shoulder, cancer pain, migraines, CRPS, and post-surgical pain among many others.' },
  { q: 'Is the treatment covered by insurance?', a: 'Many of our procedures are covered by major insurance providers. Our team will assist you with pre-authorization and documentation.' },
];

// Reusable section header
function SectionHeader({ badge, badgeColor, title, highlight, highlightColor, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, backgroundColor: `${badgeColor}10`, px: 2.5, py: 0.6, borderRadius: "100px", mb: 2, border: `1px solid ${badgeColor}20` }}>
          <Typography variant="overline" sx={{ fontWeight: 900, color: badgeColor, letterSpacing: 2, fontSize: '0.72rem' }}>{badge}</Typography>
        </Box>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "primary.main", fontSize: { xs: "2rem", md: "3rem" }, mb: subtitle ? 2 : 0, lineHeight: 1.2 }}>
          {title} <span style={{ color: highlightColor || "#1CB5B0" }}>{highlight}</span>
        </Typography>
        {subtitle && (
          <Typography color="text.secondary" sx={{ maxWidth: 650, mx: "auto", fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.8 }}>
            {subtitle}
          </Typography>
        )}
      </motion.div>
    </Box>
  );
}

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="About Us | Halcyon Pain Management"
        description="Learn more about Halcyon Pain Management Center, our mission, vision, and the expert specialists dedicated to your recovery."
        keywords="about halcyon, pain management specialists, physiotherapy mission, medical team"
      />

      {/* ====== HERO ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", pt: { xs: 8, md: 10 }, pb: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px', zIndex: 0 }} />
        <Box sx={{ position: "absolute", top: "-20%", right: "-10%", width: "50%", height: "80%", background: "radial-gradient(circle, rgba(28,181,176,0.07) 0%, transparent 70%)", zIndex: 0 }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(194,24,91,0.06)", px: 2.5, py: 0.6, borderRadius: "100px", mb: 3, border: "1px solid rgba(194,24,91,0.12)" }}>
              <VerifiedIcon sx={{ fontSize: 14, color: "#C2185B" }} />
              <Typography variant="overline" sx={{ fontWeight: 900, color: "#C2185B", letterSpacing: 3, fontSize: '0.7rem' }}>ESTABLISHED EXCELLENCE</Typography>
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '2.8rem', md: '4rem' }, mb: 3, lineHeight: 1.1, color: 'primary.main' }}>
              Our Legacy of <span style={{ color: "#1CB5B0" }}>Care</span>
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 500 }}>
              Halcyon Pain Management Center is a pioneer in ethical, world-class interventional pain care, dedicated to restoring lives through precision and compassion.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ====== MILESTONES SECTION ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #fbf6f8 0%, #FFFFFF 100%)", py: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px', zIndex: 0 }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} justifyContent="center">
            {milestones.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MilestoneCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ====== ABOUT CONTENT ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", pt: 2, pb: 0 }}>
        <Container maxWidth="lg">
          <AboutHero />
        </Container>
      </Box>

      {/* ====== OUR VALUES ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #fbf6f8 0%, #FFFFFF 100%)", pt: 0, pb: { xs: 8, md: 12 }, mt: 4 }}>
        <Container maxWidth="lg">
          <SectionHeader badge="OUR VALUES" badgeColor="#1CB5B0" title="What Drives" highlight="Us" highlightColor="#1CB5B0" subtitle="The four principles that guide every clinical decision, patient interaction, and treatment protocol at Halcyon." />
          <Grid container spacing={6} justifyContent="center" alignItems="stretch">
            {values.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ width: '100%', maxWidth: '360px', display: 'flex' }}
                >
                  <Paper elevation={0} sx={{
                    p: 4, width: '100%',
                    borderRadius: "28px",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(15,30,90,0.05)",
                    position: 'relative', overflow: 'hidden',
                    transition: "all 0.4s ease",
                    display: 'flex', flexDirection: 'column', gap: 2,
                    "&:hover": { transform: "translateY(-10px)", backgroundColor: "#FFFFFF", boxShadow: "0 30px 60px rgba(15,30,90,0.08)", borderColor: `${item.accent}40` }
                  }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${item.accent}, #fff)`, opacity: 0.8 }} />
                    <Box sx={{ width: 54, height: 54, borderRadius: "16px", backgroundColor: `${item.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", color: item.accent }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main", fontSize: "1.1rem", lineHeight: 1.3 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "0.9rem", fontWeight: 500 }}>{item.desc}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ====== SPECIALISTS ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionHeader badge="EXPERTISE YOU CAN TRUST" badgeColor="#C2185B" title="Meet Our" highlight="Specialists" highlightColor="#C2185B" subtitle="Our US-certified experts bring decades of clinical excellence to provide the most advanced non-surgical pain management." />
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' }, overflowX: { xs: 'visible', md: 'auto' }, pb: 2 }}>
            {specialists.map((doc, index) => (
              <Grid item xs={12} sm={6} md={4} key={doc.name} sx={{ display: 'flex', minWidth: { xs: 'auto', md: '340px' }, maxWidth: { xs: '100%', md: '400px' } }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{ width: '100%', height: '100%', display: 'flex' }}
                >
                  <Paper elevation={0} sx={{
                    p: { xs: 2.5, md: 4 }, width: '100%', height: '480px',
                    borderRadius: "32px",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(15,30,90,0.05)",
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    '&:hover': { transform: 'translateY(-12px)', backgroundColor: "#FFFFFF", borderColor: `${doc.accent}40`, boxShadow: '0 40px 80px rgba(15,30,90,0.08)' },
                  }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${doc.accent}, #fff)`, opacity: 0.8 }} />
                    <Box sx={{ position: 'relative', width: 120, height: 120, mx: 'auto', mb: 2, mt: 1, flexShrink: 0 }}>
                      <Box sx={{ position: 'absolute', top: -5, left: -5, right: -5, bottom: -5, borderRadius: '50%', border: '2px dashed', borderColor: doc.accent, opacity: 0.2, animation: 'spin 20s linear infinite', '@keyframes spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } } }} />
                      <Avatar src={doc.image} sx={{ width: '100%', height: '100%', border: '5px solid white', boxShadow: `0 10px 30px ${doc.accent}25` }} />
                    </Box>
                    <Stack spacing={1.5} alignItems="center" sx={{ width: '100%', flexGrow: 1 }}>
                      <Box sx={{ height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 0.5 }}>
                          <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', fontSize: "1.3rem" }}>{doc.name}</Typography>
                          <VerifiedIcon sx={{ color: doc.accent, fontSize: 18 }} />
                        </Stack>
                        <Typography variant="subtitle2" sx={{ color: doc.accent, fontWeight: 800, letterSpacing: 0.5, textTransform: 'uppercase', fontSize: '0.75rem' }}>{doc.title}</Typography>
                      </Box>
                      <Divider sx={{ width: 50, height: 3, borderRadius: 2, backgroundColor: `${doc.accent}30`, border: 'none' }} />
                      <Box sx={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.85rem', fontWeight: 500 }}>{doc.qual}</Typography>
                      </Box>
                      <Box sx={{ mt: 'auto', pt: 1, height: '60px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" useFlexGap>
                          {doc.specialties.map((s) => (
                            <Chip key={s} label={s} size="small" sx={{ backgroundColor: `${doc.accent}12`, color: doc.accent, fontWeight: 800, fontSize: "0.68rem", borderRadius: "8px", border: `1px solid ${doc.accent}20` }} />
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ====== SUCCESS STORIES ====== */}
      <SuccessStories />

      {/* ====== FAQs ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", py: { xs: 12, md: 16 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            badge="EXPERT INSIGHTS"
            badgeColor="#1CB5B0"
            title="Expert"
            highlight="Insights"
            highlightColor="#1CB5B0"
            subtitle="Common questions about interventional pain management answered by our world-class clinical team."
          />

          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Accordion
                  sx={{
                    mb: 3,
                    borderRadius: "24px !important",
                    '&:before': { display: 'none' },
                    backgroundColor: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(15,30,90,0.06)",
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: 'hidden',
                    '&.Mui-expanded': {
                      borderColor: "#1CB5B0",
                      boxShadow: "0 20px 40px rgba(28, 181, 176, 0.08)",
                      transform: 'scale(1.01)'
                    },
                    '&:hover': {
                      borderColor: "#1CB5B050",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box sx={{
                        width: 32, height: 32, borderRadius: '50%', backgroundColor: 'rgba(28, 181, 176, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s'
                      }}>
                        <ExpandMoreIcon sx={{ color: "#1CB5B0", fontSize: 20 }} />
                      </Box>
                    }
                    sx={{
                      px: { xs: 3, md: 5 },
                      py: 2,
                      '& .MuiAccordionSummary-content': { alignItems: 'center' }
                    }}
                  >
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          color: "#1CB5B0",
                          fontSize: "0.9rem",
                          opacity: 0.5,
                          fontFamily: 'monospace'
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: "primary.main",
                          fontSize: { xs: "1rem", md: "1.15rem" },
                          lineHeight: 1.4
                        }}
                      >
                        {item.q}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 3, md: 5 }, pb: 4, pt: 0, pl: { xs: 3, md: 10 } }}>
                    <Box sx={{ borderLeft: '2px solid rgba(28, 181, 176, 0.2)', pl: 3 }}>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.9,
                          fontWeight: 500,
                          fontSize: "1.05rem",
                          color: "text.primary",
                          opacity: 0.8
                        }}
                      >
                        {item.a}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ====== CTA ====== */}
      <Box sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", py: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px', zIndex: 0 }} />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "primary.main", mb: 2, fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}>
              Ready to Start Your <span style={{ color: "#1CB5B0" }}>Recovery Journey</span>?
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1.05rem", fontWeight: 500, maxWidth: 520, mx: "auto", lineHeight: 1.8 }}>
              Book your consultation today and take the first step toward a pain-free life with our world-class specialists.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
              <Button component={Link} to="/contact" variant="contained" size="large" sx={{ backgroundColor: "#1CB5B0", color: "#fff", px: 5, py: 1.8, borderRadius: "100px", fontWeight: 800, fontSize: "1rem", textTransform: "none", boxShadow: "0 15px 30px rgba(28,181,176,0.3)", "&:hover": { backgroundColor: "#17a09c", transform: "translateY(-3px)", boxShadow: "0 20px 40px rgba(28,181,176,0.35)" } }}>
                Book Consultation
              </Button>
              <Button component={Link} to="/services" variant="outlined" size="large" sx={{ borderColor: "rgba(15,30,90,0.2)", color: "primary.main", px: 5, py: 1.8, borderRadius: "100px", fontWeight: 800, fontSize: "1rem", textTransform: "none", "&:hover": { borderColor: "#1CB5B0", color: "#1CB5B0", backgroundColor: "rgba(28,181,176,0.05)" } }}>
                Explore Services
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
