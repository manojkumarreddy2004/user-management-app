import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

import {
  Typography,
  Button,
  CircularProgress,
  Box,
  Grid,
  Card,
  CardContent,
  Fade,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100vw', height:'80vh', minHeight: '60vh' }}>
      <CircularProgress size={40} thickness={4} />
    </Box>
  );
  
  if (error) return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography color="error" variant="h6">{error}</Typography>
    </Box>
  );
  
  if (!user) return (
    <Box sx={{ textAlign: 'center', py: 4, display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'80vh'}}>
      <Typography variant="h6" sx={{ 
                flexGrow: 1, 
                color: 'text.primary',
                cursor:'pointer',
                fontWeight: 600,
                letterSpacing: '-0.019em',
              }}>User not found</Typography>
    </Box>
  );

  return (
    <Fade in={true}>
      <Box>
        <Button 
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ 
            mb: 4,
            color: 'text.primary',
            '&:hover': {
              bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            }
          }}
        >
          Back to Directory
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card elevation={0}>
              <CardContent sx={{ p: 4 }}>
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h3" sx={{ color: 'primary.main' }}>
                      {user.name.charAt(0)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        background: darkMode 
                          ? 'linear-gradient(45deg, #007AFF, #FF2D55)'
                          : 'linear-gradient(45deg, #000000, #434343)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {user.name}
                    </Typography>
                    <Typography 
                      color="text.secondary" 
                      variant="h6"
                      sx={{ opacity: 0.8 }}
                    >
                      @{user.username}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                      }}
                    >
                      <EmailIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Email</Typography>
                      <Typography>{user.email}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                      }}
                    >
                      <PhoneIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Phone</Typography>
                      <Typography>{user.phone}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                      }}
                    >
                      <LanguageIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Website</Typography>
                      <Typography>{user.website}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Company Details
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                    }}
                  >
                    <BusinessIcon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {user.company.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {user.company.catchPhrase}
                    </Typography>
                    <Typography color="text.secondary">
                      {user.company.bs}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card elevation={0}>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Address
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography>
                      {user.address.street}, {user.address.suite}
                    </Typography>
                    <Typography>
                      {user.address.city}, {user.address.zipcode}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default UserDetail;