import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton, Box, Container, AppBar, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { useTheme } from './context/ThemeContext';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import { NoEncryption } from '@mui/icons-material';

function AppContent() {
  const { darkMode, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#007AFF', // Apple's blue
      },
      secondary: {
        main: '#FF2D55', // Apple's pink
      },
      background: {
        default: darkMode ? '#000000' : '#F5F5F7', // Apple's background colors
        paper: darkMode ? '#1C1C1E' : '#FFFFFF',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#1D1D1F',
        secondary: darkMode ? '#86868B' : '#6E6E73',
      },
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.022em',
      },
      h6: {
        fontWeight: 600,
        letterSpacing: '-0.019em',
      },
      body1: {
        letterSpacing: '-0.016em',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(20px)',
            backgroundColor: darkMode ? 'rgba(28, 28, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            padding: '8px 16px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar 
          position="fixed" 
          elevation={0} 
          sx={{ 
            bgcolor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: 1,
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                color: 'text.primary',
                cursor:'pointer',
                fontWeight: 600,
                letterSpacing: '-0.019em',
              }}
              onClick={()=>navigate("/")}
            >
              Directory
            </Typography>
            <IconButton 
              onClick={toggleTheme} 
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box sx={{width:'100vw',
              display:'flex',
              padding:'0px',
              margin:'0px',
              justifyContent:'center',
              alignItems:'center',}}>     
          <Container  
            sx={{ 
              py:4,
              minHeight: '100vh',
              width:'100vw',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </Container>
        </Box>   
      </Box>
    </MUIThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;