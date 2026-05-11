import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ image, title, description, link }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        height: "100%",
        borderRadius: "32px",
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid rgba(15, 30, 90, 0.05)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
        display: 'flex',
        flexDirection: 'column',
        "&:hover": {
          boxShadow: "0 50px 100px -20px rgba(15, 30, 90, 0.15)",
          borderColor: "secondary.main",
        }
      }}
    >
      <Box sx={{ overflow: "hidden", position: "relative", height: 180 }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ 
            height: "100%",
            width: "100%",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": { transform: "scale(1.15)" }
          }}
        />
        <Box 
          sx={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, rgba(15, 30, 90, 0.6) 0%, transparent 100%)",
            pointerEvents: "none"
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            color: "primary.main",
            lineHeight: 1.2
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: '0.95rem', flexGrow: 1 }}
        >
          {description}
        </Typography>

        <Button
          component={Link}
          to={link || "/contact"}
          sx={{
            alignSelf: "flex-start",
            fontWeight: 800,
            color: "secondary.main",
            p: 0,
            fontSize: '0.9rem',
            "&:hover": { backgroundColor: "transparent", color: "secondary.dark", transform: 'translateX(5px)' },
            transition: '0.3s'
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Explore Procedure
        </Button>
      </CardContent>
    </Card>
  );
}
