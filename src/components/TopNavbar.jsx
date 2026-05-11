import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";

const TopNavbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            navigate(`/pain-conditions?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#0F1E5A",
                color: "rgba(255,255,255,0.9)",
                py: 0.8,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: { xs: "none", sm: "block" }
            }}
        >
            <Container maxWidth="xl">
                <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    {/* CONTACT INFO */}
                    <Stack direction="row" spacing={4} alignItems="center">
                        <Box
                            component="a"
                            href="tel:+917788091092"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "inherit",
                                textDecoration: "none",
                                transition: "0.3s",
                                "&:hover": { color: "secondary.main" },
                            }}
                        >
                            <LocalPhoneIcon sx={{ fontSize: 14, color: "secondary.main" }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                                +91 77 88 091 092
                            </Typography>
                        </Box>

                        <Box
                            component="a"
                            href="mailto:contact@halcyonpain.com"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "inherit",
                                textDecoration: "none",
                                transition: "0.3s",
                                "&:hover": { color: "secondary.main" },
                                display: { xs: "none", md: "flex" }
                            }}
                        >
                            <EmailIcon sx={{ fontSize: 14, color: "secondary.main" }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                                contact@halcyonpain.com
                            </Typography>
                        </Box>

                        <Box
                            component="a"
                            href="https://wa.me/917788091092"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "inherit",
                                textDecoration: "none",
                                transition: "0.3s",
                                "&:hover": { color: "#25D366" },
                            }}
                        >
                            <WhatsAppIcon sx={{ fontSize: 14, color: "#25D366" }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                                WhatsApp Support
                            </Typography>
                        </Box>
                    </Stack>

                    {/* SEARCH & LANGUAGE (OPTIONAL) */}
                    <Stack direction="row" spacing={3} alignItems="center">
                        <TextField
                            size="small"
                            placeholder="Search conditions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleSearch}
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: "100px",
                                width: { sm: 180, md: 240 },
                                "& .MuiOutlinedInput-root": {
                                    height: "32px",
                                    color: "#fff",
                                    fontSize: "0.75rem",
                                    px: 2,
                                    "& fieldset": { border: "none" },
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color: "rgba(255,255,255,0.5)",
                                    opacity: 1
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ fontSize: 16, color: "rgba(255,255,255,0.4)" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        
                        <Typography variant="caption" sx={{ fontWeight: 800, color: "secondary.main", letterSpacing: 1 }}>
                            HALCYON CLINIC
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default TopNavbar;


