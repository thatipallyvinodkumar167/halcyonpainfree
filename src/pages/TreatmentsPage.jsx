import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const treatments = [
    {
        title: 'Regenerative Therapy',
        image: '/images/regenerative-medicine.jpg',
        duration: '45-60 min',
        description: 'Advanced cell-based therapies like Growth Factor Concentrate (GFC) to naturally heal damaged tissues.',
        benefits: ['Tissue repair', 'Natural healing', 'Long-term relief', 'Minimally invasive'],
    },
    {
        title: 'Radiofrequency Ablation',
        image: '/images/radiofrequency-ablation.jpg',
        duration: '30-45 min',
        description: 'Using thermal energy to interrupt pain signals from specific nerves, providing relief for months.',
        benefits: ['Effective for nerve pain', 'Fast recovery', 'Targeted relief', 'Outpatient procedure'],
    },
    {
        title: 'Prolotherapy',
        image: '/images/prolotherapy.jpg',
        duration: '20-30 min',
        description: 'Stimulating the body\'s natural repair mechanisms to strengthen ligaments and tendons.',
        benefits: ['Joint stability', 'Chronic pain relief', 'Strengthens tissue', 'Safe and effective'],
    },
    {
        title: 'Nerve Hydrodissection',
        image: '/images/sciatica.jpg',
        duration: '30 min',
        description: 'Precisely releasing entrapped nerves using fluid under ultrasound guidance.',
        benefits: ['Restores function', 'Immediate relief', 'Non-surgical', 'High precision'],
    },
    {
        title: 'Fluoroscopic Injections',
        image: '/images/back-pain.jpg',
        duration: '20-40 min',
        description: 'Image-guided spinal and joint injections for maximum diagnostic and therapeutic accuracy.',
        benefits: ['Pinpoint accuracy', 'Reduces inflammation', 'Diagnostic value', 'Minimal downtime'],
    },
    {
        title: 'Sports Rehabilitation',
        image: '/images/knee-pain.jpg',
        duration: '45 min',
        description: 'Goal-oriented protocols designed to return athletes to peak performance safely.',
        benefits: ['Performance recovery', 'Injury prevention', 'Custom protocols', 'Expert guidance'],
    },
];

const TreatmentsPage = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
            <SEO
                title="Our Treatments"
                description="Learn about our advanced therapeutic modalities including Regenerative Medicine, Radiofrequency Ablations, and Prolotherapy."
                keywords="pain management treatments, regenerative care, nerve blocks, prolotherapy, hydrodissection"
            />

            <PageHero 
                badge="ADVANCED MODALITIES"
                title="Our"
                highlight="Treatments"
                subtitle="Explore our comprehensive range of US-standard interventional procedures and regenerative therapies designed for long-term relief."
            />

            {/* Treatments Grid */}
            <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: 4,
                    maxWidth: 1100,
                    mx: 'auto'
                }}>
                    {treatments.map((treatment, index) => (
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
                                        image={treatment.image}
                                        alt={treatment.title}
                                        sx={{ height: '100%', transition: '0.8s', '&:hover': { transform: 'scale(1.1)' } }}
                                    />
                                    <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                                        <Chip 
                                            label={treatment.duration} 
                                            sx={{ 
                                                backgroundColor: "rgba(255,255,255,0.95)", 
                                                backdropFilter: 'blur(8px)',
                                                color: "primary.main", 
                                                fontWeight: 900,
                                                borderRadius: '6px',
                                                height: 24,
                                                fontSize: '0.65rem'
                                            }} 
                                        />
                                    </Box>
                                </Box>
                                <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main", lineHeight: 1.2 }}>
                                        {treatment.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ 
                                        lineHeight: 1.6, 
                                        fontSize: '0.85rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {treatment.description}
                                    </Typography>

                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                                        {treatment.benefits.slice(0, 3).map((benefit, i) => (
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

            {/* Process Section - Vertical Tree Style */}
            <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#fbf6f8", position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(#0F1E5A 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: "secondary.main", letterSpacing: 4, display: 'block', mb: 1 }}>
                            OUR METHODOLOGY
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, color: 'primary.main' }}>Treatment Journey</Typography>
                        <Typography sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', fontWeight: 500 }}>A clear, guided path to your recovery and long-term wellness.</Typography>
                    </Box>

                    <Box sx={{ position: 'relative', px: { xs: 2, md: 0 } }}>
                        {/* Vertical Line */}
                        <Box sx={{ 
                            position: 'absolute', 
                            left: { xs: '31px', md: '50%' }, 
                            top: 0, 
                            bottom: 0, 
                            width: '2px', 
                            backgroundColor: 'rgba(28, 181, 176, 0.2)',
                            zIndex: 0 
                        }} />

                        <Stack spacing={6}>
                            {[
                                { step: '01', title: 'Consultation', desc: 'In-depth assessment of your pain history and physical evaluation.' },
                                { step: '02', title: 'Advanced Diagnosis', desc: 'Precision imaging to identify the exact source of your discomfort.' },
                                { step: '03', title: 'Intervention', desc: 'Targeted procedure performed with high precision and care.' },
                                { step: '04', title: 'Recovery & Rehab', desc: 'Personalized follow-up to ensure long-term mobility and comfort.' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Box sx={{ 
                                        display: 'flex', 
                                        flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                        alignItems: 'center',
                                        gap: 4,
                                        width: '100%',
                                        position: 'relative',
                                        zIndex: 1
                                    }}>
                                        {/* Step Content */}
                                        <Box sx={{ 
                                            width: { xs: 'calc(100% - 60px)', md: 'calc(50% - 40px)' },
                                            textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' }
                                        }}>
                                            <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', mb: 1 }}>{item.title}</Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontWeight: 500 }}>
                                                {item.desc}
                                            </Typography>
                                        </Box>

                                        {/* Step Circle */}
                                        <Box sx={{ 
                                            width: 64, 
                                            height: 64, 
                                            borderRadius: '50%', 
                                            backgroundColor: '#fff', 
                                            border: '3px solid',
                                            borderColor: 'secondary.main',
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontWeight: 900,
                                            fontSize: '1.2rem',
                                            color: 'primary.main',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                            flexShrink: 0
                                        }}>
                                            {item.step}
                                        </Box>

                                        {/* Spacer for MD screens to maintain tree layout */}
                                        <Box sx={{ display: { xs: 'none', md: 'block' }, width: 'calc(50% - 40px)' }} />
                                    </Box>
                                </motion.div>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section - Compact & Clinical */}
            <Box sx={{ py: 10, backgroundColor: '#fff' }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Box sx={{ 
                            p: { xs: 4, md: 6 }, 
                            borderRadius: '32px', 
                            background: 'linear-gradient(135deg, #0F1E5A 0%, #162470 100%)', 
                            color: '#fff',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(15, 30, 90, 0.15)'
                        }}>
                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: `radial-gradient(#1CB5B0 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                            
                            <Stack spacing={3} sx={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
                                <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
                                    Reclaim Your <span style={{ color: '#1CB5B0' }}>Active Lifestyle</span>
                                </Typography>

                                <Typography sx={{ opacity: 0.8, maxWidth: 500, fontSize: '1.05rem', fontWeight: 500 }}>
                                    Join thousands who have found relief through our precision interventions.
                                </Typography>

                                <Button
                                    component={RouterLink}
                                    to="/contact"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    sx={{ 
                                        px: 6, 
                                        py: 2, 
                                        borderRadius: '100px', 
                                        fontWeight: 900, 
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        boxShadow: '0 15px 30px rgba(28, 181, 176, 0.3)',
                                        '&:hover': { transform: 'scale(1.05)', boxShadow: '0 20px 40px rgba(28, 181, 176, 0.4)' }
                                    }}
                                >
                                    Book Your Assessment
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default TreatmentsPage;


