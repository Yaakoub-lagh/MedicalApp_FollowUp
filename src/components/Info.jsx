import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Info() {
  // Patient Information
  const patient = {
    name: 'John Doe',
    age: 45,
    implantType: 'Cochlear Implant',
    surgeryDate: '2024-02-12',
    doctor: 'Dr. Smith',
    hospital: 'General Medical Center',
    address:'Lyon 6900 rue X'
  };

  // Features Information
  const features = [
    { name: ' Aimant Cochlear', available: true },
    { name: 'Antenne Slimline™ (avec câble intégré)', available: true },
    { name: 'Cache-microphones', available: true },
    { name: 'Dispositif de verrouillage', available: true },
    { name: 'Microphones', available: true },
    { name: 'Unité de traitement', available: true },


  ];

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding={4}
      gap={4}
    >
      {/* Left: Patient Info Display */}
      <Box flex={1}>
        <Typography variant="h5" gutterBottom>
          Patient Information
        </Typography>
        <Paper elevation={4} sx={{ padding: 3, borderRadius: '12px' }}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell>{patient.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Age</strong></TableCell>
                  <TableCell>{patient.age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Implant Type</strong></TableCell>
                  <TableCell>{patient.implantType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Surgery Date</strong></TableCell>
                  <TableCell>{patient.surgeryDate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Doctor</strong></TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Hospital</strong></TableCell>
                  <TableCell>{patient.hospital}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Address</strong></TableCell>
                  <TableCell>{patient.address}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Right: Picture and Feature Table */}
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        {/* Picture */}
        <img
          src={require('../assets/implant.png')}  // Replace with your image file path
          alt="Patient"
          style={{ borderRadius: '12px', marginBottom: '16px', width: '200px', height: '200px', objectFit: 'cover' }}
        />

        {/* Features Table */}
        <Typography variant="h6" gutterBottom>
          Implant Features
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
          <Table>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell>{feature.name}</TableCell>
                  <TableCell align="center">
                    {feature.available ? (
                      <CheckCircleIcon sx={{ color: 'green' }} />
                    ) : (
                      <CancelIcon sx={{ color: 'red' }} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Info;
