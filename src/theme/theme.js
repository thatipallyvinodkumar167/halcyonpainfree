import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F1E5A", // Deep Navy (Logo Primary)
      light: "#1E3A8A",
      dark: "#08123B",
      contrastText: "#FFFFFF",
    },
    brandLight: {
      main: "#fbf6f8ff", // Light Pink/White from logo context
    },
    secondary: {
      main: "#1CB5B0", // Teal (Logo Secondary)
      light: "#4DD4CF",
      dark: "#148F8B",
      contrastText: "#FFFFFF",
    },
    accent: {
      main: "#C2185B", // Pink/Crimson (Logo Bird)
      light: "#E91E63",
      dark: "#880E4F",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FF5A5F",
    },
    background: {
      default: "#f4f7fa", // Premium Clinical Mist (Subtle Slate/Blue)
      paper: "#ffffff",
    },
    text: {
      primary: "#0F1E5A", // Navy for text too
      secondary: "#64748B",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 900,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: "2.75rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: "2.25rem",
    },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: "1.75rem",
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: "1.1rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    button: {
      fontFamily: "'Outfit', sans-serif",
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #f4f7fa;
          background-image: 
            radial-gradient(at 0% 0%, rgba(28, 181, 176, 0.03) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(15, 30, 90, 0.03) 0px, transparent 50%);
          background-attachment: fixed;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100, // Pill shape for modern look
          padding: "12px 28px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        containedPrimary: {
          boxShadow: "0 10px 15px -3px rgba(15, 30, 90, 0.2)",
          "&:hover": {
            boxShadow: "0 20px 25px -5px rgba(15, 30, 90, 0.2)",
            transform: "translateY(-2px)",
          },
        },
        containedSecondary: {
          boxShadow: "0 10px 15px -3px rgba(28, 181, 176, 0.2)",
          "&:hover": {
            boxShadow: "0 20px 25px -5px rgba(28, 181, 176, 0.2)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;

