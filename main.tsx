import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#180048',
      paper: 'rgba(255, 255, 255, 0.08)',
    },
    primary: {
      main: '#ff6b95',
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#ffffff',
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    h6: {
      color: '#ffffff',
      opacity: 0.8,
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: 400
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#180048',
          color: '#ffffff',
          fontFamily: 'Montserrat, sans-serif',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '2rem'
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);