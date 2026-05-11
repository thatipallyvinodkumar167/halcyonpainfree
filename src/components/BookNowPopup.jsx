import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function BookNowPopup({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "24px",
          p: 1.5,
          overflow: "hidden"
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 800,
          fontSize: "1.75rem",
          color: "primary.main",
          pb: 1
        }}
      >
        Book Appointment
        <IconButton onClick={onClose} sx={{ backgroundColor: "rgba(15, 30, 90, 0.05)", "&:hover": { backgroundColor: "rgba(15, 30, 90, 0.1)" } }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography mb={4} color="text.secondary" sx={{ fontSize: "1.05rem" }}>
          Share your details below and our clinical team will get back to you to confirm your priority slot.
        </Typography>

        <Box display="flex" flexDirection="column" gap={2.5}>
          <TextField label="Full Name" fullWidth variant="outlined" />
          <TextField label="Phone Number" fullWidth variant="outlined" />
          <TextField label="Email" fullWidth variant="outlined" />
          <TextField label="Concern / Condition" multiline rows={3} fullWidth variant="outlined" />

          <Button
            size="large"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 2,
              borderRadius: "12px",
              fontWeight: 700,
              boxShadow: "0 10px 20px rgba(15, 30, 90, 0.15)",
            }}
          >
            Schedule Consultation
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
