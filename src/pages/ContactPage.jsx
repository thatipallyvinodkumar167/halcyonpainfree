import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PageHero from '../components/PageHero';

const ContactPage = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
            <SEO 
                title="Contact Us | Halcyon Pain Management Center"
                description="Connect with Hyderabad's leading non-surgical pain management specialists. Visit us at Kukatpally or book a priority consultation today."
                keywords="contact halcyon, pain clinic hyderabad address, interventional pain specialist contact, medical consultation"
            />

            <PageHero 
                badge="GLOBAL STANDARDS OF CARE"
                title="Let's Start Your"
                highlight="Recovery"
                subtitle="Reach out to our patient care team for priority consultations, expert medical advice, or any questions regarding our interventional treatments."
            />

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}>
                <Stack spacing={10} sx={{ ml: { md: 6, lg: 12 } }}>
                    {/* Top Section: Centered Vertical Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ mb: 6, textAlign: 'center', mr: { md: 6, lg: 12 } }}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1.5, color: 'primary.main', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                                Send a Message
                            </Typography>
                            <Typography sx={{ fontSize: '1.2rem', color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
                                Expect a professional response from our clinical specialists within 2 business hours.
                            </Typography>
                        </Box>

                        <Paper 
                            elevation={0} 
                            sx={{ 
                                p: { xs: 4, md: 6 }, 
                                borderRadius: "48px", 
                                backgroundColor: "rgba(15, 30, 90, 0.02)", 
                                border: "1px solid rgba(15, 30, 90, 0.05)",
                                boxShadow: '0 40px 100px rgba(15, 30, 90, 0.04)',
                                maxWidth: '800px',
                                mx: { xs: 'auto', md: '0' }
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, display: 'block', letterSpacing: 1.5 }}>FULL NAME</Typography>
                                    <TextField fullWidth placeholder="John Doe" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px', backgroundColor: '#fff' } }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, display: 'block', letterSpacing: 1.5 }}>PHONE NUMBER</Typography>
                                    <TextField fullWidth placeholder="+91 00000 00000" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px', backgroundColor: '#fff' } }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, display: 'block', letterSpacing: 1.5 }}>EMAIL ADDRESS</Typography>
                                    <TextField fullWidth placeholder="john@example.com" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px', backgroundColor: '#fff' } }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, display: 'block', letterSpacing: 1.5 }}>HOW CAN WE HELP?</Typography>
                                    <TextField fullWidth multiline rows={5} placeholder="Briefly describe your symptoms or inquiry..." variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '24px', backgroundColor: '#fff' } }} />
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        size="large" 
                                        sx={{ 
                                            py: 2.2, 
                                            px: 10,
                                            width: { xs: '100%', sm: 'auto' },
                                            fontSize: "1.1rem", 
                                            fontWeight: 800, 
                                            borderRadius: "100px", 
                                            boxShadow: "0 25px 50px rgba(28, 181, 176, 0.4)",
                                            textTransform: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: "0 30px 60px rgba(28, 181, 176, 0.5)",
                                            }
                                        }}
                                    >
                                        Submit Your Inquiry
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>

                    <Grid container spacing={4} alignItems="stretch">
                        <Grid item xs={12} md={4}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ height: '100%' }}
                            >
                                <Box sx={{ p: { xs: 4, md: 4 }, height: '100%', borderRadius: '48px', backgroundColor: 'primary.main', color: '#fff', boxShadow: '0 40px 80px rgba(15, 30, 90, 0.15)', display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: '1.75rem', md: '2rem' } }}>Clinical Suite</Typography>
                                    
                                    <Stack spacing={3.5} sx={{ flexGrow: 1 }}>
                                        {[
                                            { icon: <LocationOnIcon />, title: "Headquarters", content: "3rd Floor, KKR Commercial Complex, Kukatpally Y Junction, Hyd" },
                                            { icon: <PhoneIcon />, title: "Direct Support", content: "+91 77 88 091 092" },
                                            { icon: <EmailIcon />, title: "Digital Desk", content: "info@halcyonpainfree.com" },
                                            { icon: <AccessTimeIcon />, title: "Operating Hours", content: "Mon-Sat: 10AM-7PM" },
                                        ].map((item, index) => (
                                            <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                                                <Box sx={{ p: 1, borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.1)", color: 'secondary.main', display: "flex" }}>
                                                    {React.cloneElement(item.icon, { fontSize: 'small' })}
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.7rem' }}>{item.title}</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem', mt: 0.2 }}>{item.content}</Typography>
                                                </Box>
                                            </Stack>
                                        ))}
                                    </Stack>

                                    <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                        <Stack direction="row" spacing={1.5}>
                                            {[<FacebookIcon />, <InstagramIcon />, <LinkedInIcon />].map((icon, i) => (
                                                <IconButton key={i} size="small" sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.05)', '&:hover': { backgroundColor: 'secondary.main', color: '#fff' } }}>
                                                    {React.cloneElement(icon, { fontSize: 'small' })}
                                                </IconButton>
                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                style={{ height: '100%' }}
                            >
                                <Box sx={{ 
                                    height: '100%', 
                                    minHeight: 350, 
                                    borderRadius: "48px", 
                                    overflow: "hidden", 
                                    border: '1px solid rgba(15, 30, 90, 0.05)', 
                                    boxShadow: '0 40px 80px rgba(15, 30, 90, 0.06)',
                                    position: 'relative'
                                }}>
                                    {/* Location Indicator Overlay (Clickable with Blink Animation) */}
                                    <motion.div
                                        animate={{ 
                                            scale: [1, 1.05, 1],
                                            opacity: [0.95, 1, 0.95]
                                        }}
                                        transition={{ 
                                            duration: 2.5, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                        style={{ 
                                            position: 'absolute', 
                                            top: 20, 
                                            left: 20, 
                                            zIndex: 2 
                                        }}
                                    >
                                        <Box 
                                            component="a"
                                            href="https://www.google.com/maps/dir/?api=1&destination=Halcyon+Pain+Management+Center+Kukatpally"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ 
                                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                backdropFilter: 'blur(10px)',
                                                padding: '12px 20px',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1.5,
                                                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                                                border: '1px solid rgba(255,255,255,0.4)',
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#fff',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 20px 45px rgba(0,0,0,0.18)',
                                                }
                                            }}
                                        >
                                            <LocationOnIcon sx={{ color: 'secondary.main' }} />
                                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 0.5 }}>
                                                Get Directions
                                            </Typography>
                                        </Box>
                                    </motion.div>

                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.30193139366!2d78.4116496759714!3d17.4930606997453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9103989c091d%3A0x6b87693d25666f7f!2sHalcyon%20Pain%20Management%20Center!5e0!3m2!1sen!2sin!4v1715070000000!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy"
                                        title="Halcyon Hospital Location with Marker"
                                    ></iframe>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactPage;
