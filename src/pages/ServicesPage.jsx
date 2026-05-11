import { Container, Typography, Box, Stack, Card, CardMedia, CardContent, Button, Chip } from "@mui/material";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    title: "Precision Diagnostics",
    description: "Using high-resolution ultrasound and real-time fluoroscopy to pinpoint the exact biological source of your pain for targeted treatment.",
    image: "/images/sciatica.jpg",
    benefits: ["Pinpoint Accuracy", "Zero Guesswork", "Guided Care"]
  },
  {
    title: "Sports Injury Clinic",
    description: "Specialized rehabilitation and intervention protocols designed to get athletes back to peak performance without surgery or long downtime.",
    image: "/images/knee-pain.jpg",
    benefits: ["Rapid Recovery", "Performance Rehab", "Expert Guidance"]
  },
  {
    title: "Non-Surgical Spine Care",
    description: "Comprehensive treatments for slipped discs, sciatica, and cervical spondylosis using minimally invasive, image-guided techniques.",
    image: "/images/back-pain.jpg",
    benefits: ["No Surgery", "Spinal Safety", "High Success"]
  },
  {
    title: "Chronic Pain Management",
    description: "Long-term care plans for persistent conditions like neuralgia and fibromyalgia, focusing on improving daily function and quality of life.",
    image: "/images/knee-pain.jpg",
    benefits: ["Sustained Relief", "Function Focus", "Holistic Approach"]
  },
  {
    title: "Patient Concierge",
    description: "A guided recovery experience with personalized counseling, lifestyle advice, and dedicated support throughout your healing journey.",
    image: "/images/about-hero.png",
    benefits: ["Guided Support", "Personal Care", "Easy Access"]
  },
  {
    title: "Regenerative Joint Care",
    description: "Advanced orthopedic interventions for arthritis and joint wear using your body's own healing potential to delay or avoid replacement.",
    image: "/images/regenerative-medicine.jpg",
    benefits: ["Joint Saving", "Natural Healing", "Arthritis Care"]
  }
];

export default function ServicesPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <SEO
        title="Our Services"
        description="Explore our advanced non-surgical treatments including Regenerative Medicine, Radiofrequency Ablations, and Prolotherapy."
        keywords="pain management services, regenerative medicine, prolotherapy hyderabad, nerve blocks"
      />

      <PageHero 
        badge="PRECISION INTERVENTIONS"
        title="Our Specialized"
        highlight="Procedures"
        subtitle="Harnessing global medical advancements and US-certified expertise to deliver surgical-grade relief without the need for invasive operations."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(2, 1fr)' 
            }, 
            gap: 4,
            maxWidth: 1100,
            mx: 'auto'
        }}>
          {services.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: "32px",
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        border: "1px solid rgba(15, 30, 90, 0.05)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-12px)',
                            borderColor: "secondary.main",
                            boxShadow: '0 40px 80px rgba(15, 30, 90, 0.12)',
                        },
                    }}
                >
                    <Box sx={{ position: 'relative', height: 140, overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            image={service.image}
                            alt={service.title}
                            sx={{ height: '100%', transition: '0.8s', '&:hover': { transform: 'scale(1.1)' } }}
                        />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main", lineHeight: 1.2 }}>
                            {service.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ 
                            lineHeight: 1.6, 
                            fontSize: '0.85rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {service.description}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                            {service.benefits.map((benefit, i) => (
                                <Typography key={i} sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'secondary.main', backgroundColor: 'rgba(28, 181, 176, 0.08)', px: 1, py: 0.3, borderRadius: '4px' }}>
                                    {benefit}
                                </Typography>
                            ))}
                        </Stack>

                        <Button
                            component={RouterLink}
                            to="/contact"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            sx={{ mt: 1, py: 0.8, borderRadius: '8px', fontWeight: 800, textTransform: 'none', fontSize: '0.85rem' }}
                        >
                            Consult Now
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

