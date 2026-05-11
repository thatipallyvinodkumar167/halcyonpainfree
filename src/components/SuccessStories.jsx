import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Card,
    Chip,
    Container,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';

const stories = [
    {
        name: 'Rahul Sharma',
        condition: 'Post-ACL Surgery',
        result: 'Walked in 3 weeks',
        story: 'After my ACL surgery, I was worried about returning to sports. The personalized plan at Halcyon helped me regain strength faster than expected.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Anita Desai',
        condition: 'Chronic Back Pain',
        result: 'Pain-free in 2 months',
        story: 'I had been suffering from lower back pain for years. The therapists pinpointed the root cause and guided me through exercises that finally worked.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Michael Chen',
        condition: 'Shoulder Impingement',
        result: 'Full range of motion',
        story: 'Professional staff and great facilities. My shoulder mobility improved significantly within just a few sessions. Highly recommend!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Jane Smith',
        condition: 'Posture Correction',
        result: 'Zero Pain at Work',
        story: 'The ergonomic advice and therapy fixed my chronic back pain after years of discomfort. I really appreciated the holistic approach.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=2'
    },
    {
        name: 'Robert Brown',
        condition: 'Hip Surgery',
        result: 'Improved Mobility',
        story: 'Very patient doctors. They helped me improve my mobility significantly after hip surgery. I feel 10 years younger now!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=3'
    },
    {
        name: 'John Doe',
        condition: 'Knee Injury',
        result: 'Back to Running',
        story: 'Halcyon Pain Clinic helped me recover from my knee injury in record time. The personalized exercises were exceptional!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=1'
    },
];

// Duplicate the list for seamless infinite scroll
const duplicatedStories = [...stories, ...stories, ...stories];

const SuccessStories = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, background: "linear-gradient(180deg, #FFFFFF 0%, #fbf6f8 100%)", overflow: 'hidden' }}>
            <Container maxWidth="xl">
                {/* Section Header */}
                <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(194, 24, 91, 0.05)", px: 2, py: 0.5, borderRadius: "100px", mb: 2 }}>
                            <VerifiedIcon sx={{ fontSize: 14, color: "#C2185B" }} />
                            <Typography variant="overline" sx={{ color: '#C2185B', fontWeight: 900, letterSpacing: 2 }}>
                                PATIENT SUCCESS
                            </Typography>
                        </Box>
                        <Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                            Real Stories, <span style={{ color: "#1CB5B0" }}>Real Recovery</span>
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: 650, mx: 'auto', fontSize: "1.1rem" }}>
                            Join thousands of patients who have reclaimed their lives through our advanced interventional protocols.
                        </Typography>
                    </motion.div>
                </Box>

                {/* CONTINUOUS AUTO-SCROLLING MARQUEE */}
                <Box
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        cursor: 'grab',
                        '&:active': { cursor: 'grabbing' }
                    }}
                >
                    <motion.div
                        animate={{
                            x: isPaused ? 0 : [0, -2712],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 100, // Balanced speed for readability and motion
                                ease: "linear",
                            },
                        }}
                        style={{
                            display: 'flex',
                            gap: '32px',
                            width: 'max-content',
                            padding: '20px 0'
                        }}
                    >
                        {duplicatedStories.map((story, index) => {
                            const accent = index % 2 === 0 ? "#1CB5B0" : "#C2185B";
                            return (
                            <Card
                                key={index}
                                elevation={0}
                                sx={{
                                    width: { xs: 320, md: 420 },
                                    p: 4,
                                    borderRadius: "32px",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    backdropFilter: "blur(10px)",
                                    border: '1px solid rgba(15, 30, 90, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        backgroundColor: '#FFFFFF',
                                        transform: 'translateY(-10px)',
                                        borderColor: `${accent}40`,
                                        boxShadow: '0 30px 60px rgba(15,30,90,0.08)'
                                    }
                                }}
                            >
                                {/* Top Accent Line */}
                                <Box sx={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    left: 0, 
                                    right: 0, 
                                    height: 5, 
                                    background: `linear-gradient(90deg, ${accent}, #fff)`,
                                    opacity: 0.8 
                                }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar
                                            src={story.image}
                                            sx={{ width: 56, height: 56, border: '2px solid', borderColor: accent }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.1rem' }}>
                                                {story.name}
                                            </Typography>
                                            <Rating value={story.rating} size="small" readOnly sx={{ color: accent }} />
                                        </Box>
                                    </Box>
                                    <FormatQuoteIcon sx={{ color: accent, opacity: 0.2, fontSize: 40 }} />
                                </Box>

                                <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.7, mb: 3, fontSize: '0.95rem', flexGrow: 1, fontWeight: 500 }}>
                                    "{story.story}"
                                </Typography>

                                <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                                    <Chip
                                        label={story.condition}
                                        size="small"
                                        sx={{ bgcolor: 'rgba(15, 30, 90, 0.05)', color: 'primary.main', fontWeight: 800, borderRadius: '8px' }}
                                    />
                                    <Chip
                                        label={story.result}
                                        size="small"
                                        sx={{ bgcolor: `${accent}15`, color: accent, fontWeight: 800, borderRadius: '8px' }}
                                    />
                                </Stack>
                            </Card>
                            );
                        })}
                    </motion.div>

                    {/* Gradient Fades for a Premium Look */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 150,
                        background: 'linear-gradient(to right, #FFFFFF, transparent)',
                        pointerEvents: 'none',
                        zIndex: 2
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        width: 150,
                        background: 'linear-gradient(to left, #FFFFFF, transparent)',
                        pointerEvents: 'none',
                        zIndex: 2
                    }} />
                </Box>
            </Container>
        </Box>
    );
};

export default SuccessStories;
