import { useUsers } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  TextField, 
  Button, 
  Typography,
  CircularProgress,
  Pagination,
  Box,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import PersonIcon from '@mui/icons-material/Person';

const UserList = () => {
  const { 
    users, 
    loading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    sortDirection, 
    setSortDirection,
    currentPage,
    setCurrentPage,
    totalPages
  } = useUsers();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'80vh', minHeight: '60vh', width:'100vw' }}>
      <CircularProgress size={40} thickness={4} />
    </Box>
  );
  
  if (error) return (
    <Box sx={{ textAlign: 'center', py: 4, display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'80vh'}}>
      <Typography color="error" variant="h6" sx={{ 
                flexGrow: 1, 
                color: 'text.primary',
                cursor:'pointer',
                fontWeight: 600,
                letterSpacing: '-0.019em',
              }}>{error}</Typography>
    </Box>
  );

  return (
    <Fade in={true}>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', padding:'10px'}}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: darkMode 
                ? 'linear-gradient(45deg, #007AFF, #FF2D55)'
                : 'linear-gradient(45deg, #000000, #434343)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Team Directory
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto',}}
          >
            Browse and search through our team members. Click on any card to view detailed information.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    '&:hover': {
                      bgcolor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button 
                fullWidth
                variant="contained"
                startIcon={<SortIcon />}
                onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                sx={{ 
                  height: '56px',
                  width: '150px',
                  bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.09)',
                  },
                }}
              >
                Sort {sortDirection === 'asc' ? 'A to Z' : 'Z to A'}
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3} >
          {users.map(user => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: darkMode 
                      ? '0 8px 24px rgba(255, 255, 255, 0.1)'
                      : '0 8px 24px rgba(0, 0, 0, 0.1)',
                  }
                }}
                onClick={() => navigate(`/user/${user.id}`)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)',
                        mr: 2,
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        component="div" 
                        noWrap
                        sx={{ fontWeight: 600 }}
                      >
                        {user.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ opacity: 0.8 }}
                      >
                        {user.email}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <span role="img" aria-label="location">📍</span>
                    {user.address.city}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: { xs: '0.875rem', sm: '1rem' },
                borderRadius: 1.5,
              }
            }}
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default UserList;
