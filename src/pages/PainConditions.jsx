import React from "react";
import { Box, Container, Typography, Grid, Stack, TextField, InputAdornment, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import SEO from "../components/SEO";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { painConditionsData } from "../data/painConditionsData";
import PageHero from "../components/PageHero";

const PainConditions = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("search")?.toLowerCase() || "";

    const filteredConditions = painConditionsData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query)
    );

    const handleSearchChange = (e) => {
      setSearchParams({ search: e.target.value });
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
            <SEO
                title="Pain Conditions We Treat"
                description="Comprehensive diagnosis and non-surgical treatment for chronic pain conditions including back pain, sciatica, and knee pain."
                keywords="back pain treatment, sciatica relief, knee pain care, neck pain therapy, halcyon pain clinic"
            />

            <PageHero 
                badge="COMPREHENSIVE CARE"
                title={query ? "Search" : "Conditions"}
                highlight={query ? `Results for "${query}"` : "We Treat"}
                subtitle="Expert diagnosis and advanced non-surgical treatment for the most complex pain syndromes, delivering surgical-grade results through interventional excellence."
            />

            <Container maxWidth="md" sx={{ mt: -6, mb: 10, position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Search for your symptom (e.g. Back Pain)..."
                        value={query}
                        onChange={handleSearchChange}
                        fullWidth
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: "100px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            "& .MuiOutlinedInput-root": {
                                color: "primary.main",
                                borderRadius: "100px",
                                height: 64,
                                px: 3,
                                border: "1px solid rgba(0,0,0,0.05)",
                                backdropFilter: 'blur(10px)',
                                transition: '0.3s',
                                "& fieldset": { border: 'none' },
                                "&:hover": { backgroundColor: "#fff" },
                                "&.Mui-focused": { backgroundColor: "#fff", boxShadow: "0 0 0 4px rgba(28, 181, 176, 0.2)" },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "secondary.main", fontSize: 24, mr: 1 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>
            </Container>

            {/* CARDS SECTION */}
            <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
                {filteredConditions.length > 0 ? (
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { 
                            xs: 'repeat(2, 1fr)', 
                            sm: 'repeat(2, 1fr)', 
                            md: 'repeat(2, 1fr)' 
                        }, 
                        gap: 3,
                        maxWidth: 1100,
                        mx: 'auto'
                    }}>
                        {filteredConditions.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <ServiceCard
                                    title={item.title}
                                    image={item.image}
                                    description={item.shortDescription}
                                    link={`/pain-conditions/${item.id}`}
                                />
                            </motion.div>
                        ))}
                    </Box>
                ) : (
                    <Box sx={{ textAlign: 'center', py: 15 }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
                            No conditions found
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                            We may still be able to help. Contact us for a personalized assessment or try a different search term.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            sx={{ mt: 5, borderRadius: '100px', px: 5, py: 1.5, fontWeight: 800 }}
                            onClick={() => setSearchParams({})}
                        >
                            View All Conditions
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default PainConditions;



