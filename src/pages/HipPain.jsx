import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HipPain() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(200,58,122,0.9), rgba(28,181,176,0.9))",
          color: "#fff",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={700} mb={2}>
            Hip Pain Treatment
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700 }}>
            Advanced non-surgical treatments to relieve hip pain and restore
            mobility for a better quality of life.
          </Typography>
        </Container>
      </Box>

      {/* CONTENT SECTION */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* LEFT CONTENT */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" fontWeight={700} mb={2}>
                About Hip Pain
              </Typography>
              <Typography color="text.secondary" mb={4}>
                Hip pain can affect your daily activities, walking, sitting,
                and sleep. It may result from injury, arthritis, nerve
                compression, or muscle imbalance. Early diagnosis and proper
                treatment can prevent long-term complications.
              </Typography>

              <Typography variant="h6" fontWeight={700} mb={2}>
                Common Symptoms
              </Typography>
              <List>
                {[
                  "Pain in hip joint or groin area",
                  "Stiffness and reduced range of motion",
                  "Pain while walking or climbing stairs",
                  "Radiating pain to thigh or lower back",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" fontWeight={700} mt={4} mb={2}>
                Causes of Hip Pain
              </Typography>
              <List>
                {[
                  "Osteoarthritis and joint degeneration",
                  "Sports injuries or trauma",
                  "Sciatica or nerve compression",
                  "Bursitis or tendon inflammation",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="/images/hip-pain.jpg"
                alt="Hip Pain Treatment"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TREATMENT SECTION */}
      <Box sx={{ backgroundColor: "#fafafa", py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={700} mb={4}>
            Our Hip Pain Treatment Approach
          </Typography>

          <Grid container spacing={4}>
            {[
              "Detailed clinical evaluation and imaging",
              "Medication and pain management",
              "Physiotherapy and rehabilitation",
              "Image-guided injections",
              "Lifestyle and posture correction",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: 30,
              background:
                "linear-gradient(135deg, #C83A7A, #1CB5B0)",
            }}
          >
            Book Consultation
          </Button>
        </Container>
      </Box>
    </>
  );
}
