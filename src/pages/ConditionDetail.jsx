import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Stack,
    Paper,
    Divider,
    IconButton,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import BookNowPopup from "../components/BookNowPopup";
import { painConditionsData } from "../data/painConditionsData";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

export default function ConditionDetail() {
    const { conditionId } = useParams();
    const navigate = useNavigate();
    const [openBook, setOpenBook] = useState(false);
    
    // Find the specific condition data
    const condition = painConditionsData.find((c) => c.id === conditionId);

    // Dynamic Scroll Animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!condition && conditionId !== "back-pain") {
            // If condition not found, redirect to main conditions page
            navigate("/pain-conditions");
        }
    }, [condition, conditionId, navigate]);

    if (!condition) return null;

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflow: 'hidden' }}>
            <SEO
                title={`${condition.title} Specialist Care | Halcyon`}
                description={condition.shortDescription}
                keywords={`${condition.title.toLowerCase()}, pain relief, non-surgical treatment`}
            />

            <BookNowPopup open={openBook} onClose={() => setOpenBook(false)} />

            {/* PRE-HERO BREADCRUMB BAR */}
            <Box sx={{ position: 'fixed', top: 80, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)', py: 0.5 }}>
                <Container sx={{ maxWidth: '1200px !important', mx: 'auto' }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <IconButton component={RouterLink} to="/pain-conditions" size="small">
                            <ArrowBackIcon sx={{ fontSize: '1.1rem' }} />
                        </IconButton>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '0.65rem' }}>PAIN CONDITIONS</Typography>
                        <Divider orientation="vertical" flexItem sx={{ height: 10, my: 'auto' }} />
                        <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main', fontSize: '0.65rem', textTransform: 'uppercase' }}>{condition.title}</Typography>
                    </Stack>
                </Container>
            </Box>

            {/* HIGH-IMPACT HERO SECTION */}
            <Box
                sx={{
                    position: 'relative',
                    background: 'linear-gradient(180deg, #fff 0%, #fbf6f8 100%)',
                    color: "primary.main",
                    pt: { xs: 12, md: 16 },
                    pb: { xs: 8, md: 12 },
                    overflow: 'hidden',
                }}
            >
                {/* Immersive Background */}
                <MotionBox 
                    style={{ opacity: heroOpacity }}
                    sx={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(#1CB5B0 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
                />
                
                <Container sx={{ maxWidth: '1200px !important', mx: 'auto' }}>
                    <Grid container spacing={6} alignItems="center" sx={{ flexWrap: { md: 'nowrap' } }}>
                        <Grid item xs={12} md={7}>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, backgroundColor: 'rgba(28, 181, 176, 0.1)', px: 1.5, py: 0.5, borderRadius: '6px', mb: 2.5, border: '1px solid rgba(28, 181, 176, 0.2)' }}>
                                    <VerifiedIcon sx={{ fontSize: 14, color: '#1CB5B0' }} />
                                    <Typography variant="overline" sx={{ fontWeight: 900, color: '#1CB5B0', letterSpacing: 1, fontSize: '0.7rem' }}>BOARD-CERTIFIED EXCELLENCE</Typography>
                                </Box>

                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 950,
                                        fontSize: { xs: "2.6rem", md: "3.6rem" },
                                        lineHeight: 1.05,
                                        mb: 2.5,
                                        color: 'primary.main',
                                        letterSpacing: -1,
                                        maxWidth: '600px'
                                    }}
                                >
                                    {condition.title} <br/>
                                    <span style={{ color: "#1CB5B0" }}>{condition.subtitle || "Care Protocol"}</span>
                                </Typography>

                                <Typography
                                    sx={{
                                        maxWidth: 550,
                                        fontSize: "1.1rem",
                                        lineHeight: 1.7,
                                        mb: 5,
                                        color: 'text.secondary',
                                        fontWeight: 500
                                    }}
                                >
                                    {condition.shortDescription}
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                                    <Button
                                        onClick={() => setOpenBook(true)}
                                        variant="contained"
                                        size="large"
                                        sx={{ 
                                            px: 5, py: 2, borderRadius: '12px', fontWeight: 900, 
                                            fontSize: '1rem', textTransform: 'none', backgroundColor: '#1CB5B0',
                                            boxShadow: '0 15px 30px rgba(28, 181, 176, 0.25)',
                                            '&:hover': { backgroundColor: '#18a5a0', transform: 'translateY(-2px)' }
                                        }}
                                    >
                                        Book Evaluation
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        sx={{ 
                                            px: 5, py: 2, borderRadius: '12px', fontWeight: 900, 
                                            fontSize: '1rem', textTransform: 'none', color: 'primary.main', borderColor: 'rgba(15,30,90,0.15)',
                                            '&:hover': { borderColor: 'primary.main', background: 'rgba(15,30,90,0.02)' }
                                        }}
                                    >
                                        View Procedures
                                    </Button>
                                </Stack>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box sx={{ position: 'relative', pl: { md: 4 }, maxWidth: '450px', mx: 'auto' }}>
                                <MotionBox
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    sx={{
                                        borderRadius: '40px',
                                        overflow: 'hidden',
                                        boxShadow: '0 40px 80px rgba(15,30,90,0.12)',
                                        border: '1px solid rgba(15,30,90,0.05)',
                                        position: 'relative',
                                        zIndex: 2,
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <img 
                                        src={condition.image} 
                                        alt={condition.title} 
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }} 
                                    />
                                </MotionBox>
                                {/* Immersive Stats Badge */}
                                <MotionPaper
                                    initial={{ x: 40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    sx={{ 
                                        position: 'absolute', bottom: -15, right: -15, p: 2.5, borderRadius: '24px', 
                                        zIndex: 3, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
                                        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                        border: '1px solid rgba(28, 181, 176, 0.1)',
                                        minWidth: '180px'
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main', mb: 0.2, fontSize: '1.8rem' }}>98%</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main', opacity: 0.8, fontSize: '0.75rem', letterSpacing: 0.5 }}>PATIENT SATISFACTION</Typography>
                                </MotionPaper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CLINICAL PATHWAY SECTION */}
            {condition.pathway && (
                <Box sx={{ pt: 8, pb: 4, backgroundColor: '#fcfdfe' }}>
                    <Container sx={{ maxWidth: '900px !important', mx: 'auto' }}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box sx={{ position: 'relative', mt: 4, mb: 2 }}>
                                    {/* Central Vertical Background Line */}
                                    <MotionBox
                                        initial={{ height: 0, opacity: 0 }}
                                        whileInView={{ height: '100%', opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        sx={{ 
                                            position: 'absolute', 
                                            left: '50%', 
                                            top: 0, 
                                            width: 2, 
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgba(28, 181, 176, 0.15)',
                                            zIndex: 1,
                                            display: { xs: 'none', md: 'block' }
                                        }}
                                    />

                                    <Stack spacing={{ xs: 8, md: 4 }}>
                                        {condition.pathway.map((step, idx) => {
                                            const isLeft = idx % 2 === 0;
                                            return (
                                                <Grid container key={idx} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
                                                    {/* LEFT CONTENT */}
                                                    {/* LEFT CONTENT: TEXT (Step 01, 03) or IMAGE (Step 02, 04) */}
                                                    <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' }, pr: { md: 4 }, order: { xs: 2, md: 1 } }}>
                                                        {isLeft ? (
                                                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: 'primary.main', fontSize: '1.6rem' }}>{step.title}</Typography>
                                                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</Typography>
                                                            </motion.div>
                                                        ) : (
                                                            <Box sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                                                <img 
                                                                    src={idx === 1 ? "https://images.unsplash.com/photo-1579154235828-45199397e182?w=500" : "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500"} 
                                                                    alt={step.title}
                                                                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                                                />
                                                            </Box>
                                                        )}
                                                    </Grid>

                                                    {/* CENTRAL NODE */}
                                                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', order: { xs: 1, md: 2 }, py: { xs: 2, md: 0 } }}>
                                                        <MotionBox
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ type: 'spring', stiffness: 200, delay: idx * 0.1 }}
                                                            sx={{ 
                                                                width: 70, 
                                                                height: 70, 
                                                                borderRadius: '50%', 
                                                                border: '3px solid #1CB5B0',
                                                                backgroundColor: '#fff',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'primary.main',
                                                                fontWeight: 900,
                                                                fontSize: '1.2rem',
                                                                boxShadow: '0 8px 24px rgba(28, 181, 176, 0.1)',
                                                                position: 'relative',
                                                                zIndex: 10
                                                            }}
                                                        >
                                                            {step.step}
                                                        </MotionBox>
                                                    </Grid>

                                                    {/* RIGHT CONTENT: IMAGE (Step 01, 03) or TEXT (Step 02, 04) */}
                                                    <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' }, pl: { md: 4 }, order: 3 }}>
                                                        {!isLeft ? (
                                                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: 'primary.main', fontSize: '1.6rem' }}>{step.title}</Typography>
                                                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</Typography>
                                                            </motion.div>
                                                        ) : (
                                                            <Box sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                                                <img 
                                                                    src={idx === 0 ? "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500" : "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500"} 
                                                                    alt={step.title}
                                                                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                                                />
                                                            </Box>
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            );
                                        })}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            )}

            {/* CLINICAL INQUIRIES SECTION (FAQ) */}
            {condition.faqs && (
                <Box sx={{ pt: 4, pb: 6, backgroundColor: '#fff' }}>
                    <Container sx={{ maxWidth: '850px !important', mx: 'auto' }}>
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
                            <Typography variant="overline" sx={{ fontWeight: 900, color: 'secondary.main', letterSpacing: 2 }}>PATIENT RESOURCES</Typography>
                            <Typography variant="h2" sx={{ fontWeight: 950, fontSize: { xs: '2.2rem', md: '3rem' }, color: 'primary.main', mt: 1, mb: 2 }}>Clinical Inquiries</Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: '600px', mx: 'auto', fontWeight: 500 }}>
                                Addressing common concerns regarding our specialized {condition.title.toLowerCase()} care protocols.
                            </Typography>
                        </Box>

                        <Box>
                            {condition.faqs.map((faq, idx) => (
                                <Accordion 
                                    key={idx} 
                                    elevation={0} 
                                    sx={{ 
                                        mb: 2, 
                                        borderRadius: '16px !important',
                                        border: '1px solid rgba(15,30,90,0.08)',
                                        backgroundColor: '#fcfdfe',
                                        '&:before': { display: 'none' },
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                            backgroundColor: '#fff',
                                            boxShadow: '0 10px 30px rgba(28, 181, 176, 0.08)'
                                        }
                                    }}
                                >
                                    <AccordionSummary 
                                        expandMoreIcon={<ExpandMoreIcon sx={{ color: 'secondary.main', fontSize: '1.4rem' }} />} 
                                        sx={{ 
                                            px: 3, 
                                            py: 1,
                                            '& .MuiAccordionSummary-content': { my: 1.5 }
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.1rem' }}>{faq.q}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                                        <Divider sx={{ mb: 2.5, opacity: 0.6 }} />
                                        <Typography color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 500 }}>{faq.a}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>

                        <Box sx={{ mt: 8, textAlign: 'center', p: 4, borderRadius: '24px', backgroundColor: 'rgba(28, 181, 176, 0.05)', border: '1px dashed rgba(28, 181, 176, 0.3)' }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>Still have specific clinical questions?</Typography>
                            <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem' }}>Our specialists are available for a detailed clinical case review.</Typography>
                            <Button 
                                variant="outlined" 
                                onClick={() => setOpenBook(true)}
                                sx={{ 
                                    fontWeight: 900, 
                                    textTransform: 'none', 
                                    px: 4, 
                                    py: 1.5, 
                                    borderRadius: '10px',
                                    color: 'secondary.main',
                                    borderColor: 'secondary.main',
                                    '&:hover': { backgroundColor: 'secondary.main', color: '#fff' }
                                }}
                            >
                                Speak to an Expert
                            </Button>
                        </Box>
                    </Container>
                </Box>
            )}

            {/* FINAL CTA SECTION */}
            <Box sx={{ py: 8, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: '2.5rem' }}>Ready to Walk <span style={{ color: "#1CB5B0" }}>Pain-Free?</span></Typography>
                        <Typography sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary', fontWeight: 500 }}>
                            Join thousands of patients who chose interventional care over invasive surgery. Your journey back to mobility starts with a single consultation.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => setOpenBook(true)}
                            sx={{ px: 8, py: 2, fontSize: '1.1rem', fontWeight: 900, borderRadius: '12px', boxShadow: '0 20px 40px rgba(28, 181, 176, 0.25)' }}
                        >
                            Confirm Your Slot
                        </Button>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
}
