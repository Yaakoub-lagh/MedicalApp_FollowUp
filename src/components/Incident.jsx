import React, { useState } from 'react';
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Paper,
  Divider,
  Slider,
} from '@mui/material';

function Incident() {
  const [activeStep, setActiveStep] = useState(0);
  const [incidentData, setIncidentData] = useState({
    title: '',
    date: '',
    description: '',
    severity: 5, // Default severity level
  });

  const steps = ['Basic Details', 'Incident Details', 'Confirmation'];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      alert('Incident submitted successfully!');
      console.log('Incident Data:', incidentData);
      setActiveStep(0);
      setIncidentData({ title: '', date: '', description: '', severity: 5 });
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidentData({ ...incidentData, [name]: value });
  };

  const handleSeverityChange = (e, value) => {
    console.log('Slider Value:', value); // Debugging slider interaction
    setIncidentData({ ...incidentData, severity: value });
  };

  const StepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box display="flex" flexDirection="column" gap={3} mt={4}>
            <TextField
              label="Incident Title"
              name="title"
              value={incidentData.title}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              }}
            />
            <TextField
              label="Date of Incident"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={incidentData.date}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              }}
            />
          </Box>
        );
      case 1:
        return (
          <Box display="flex" flexDirection="column" gap={3} mt={4}>
            <TextField
              label="Incident Description"
              name="description"
              value={incidentData.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              }}
            />
            <Box mt={2}>
              <Typography variant="subtitle1" gutterBottom>
                Severity Level (1 - 10):
              </Typography>
              <Slider
                value={incidentData.severity}
                onChange={handleSeverityChange}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="on"
                sx={{
                  color: '#1976d2',
                }}
              />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Review Incident Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" gutterBottom>
              <strong>Title:</strong> {incidentData.title || 'Not provided'}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Date:</strong> {incidentData.date || 'Not provided'}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {incidentData.description || 'Not provided'}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Severity Level:</strong> {incidentData.severity || 'Not provided'}
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#edf4ff"
      padding={6}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#1976d2',
        }}
      >
       Mes Incidents !
      </Typography>

      <Paper
        elevation={8}
        sx={{
          padding: 5,
          borderRadius: '16px',
          maxWidth: 700,
          width: '100%',
          background: 'linear-gradient(135deg, #ffffff, #f4f9ff)',
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: activeStep === steps.indexOf(label) ? 'bold' : 'normal',
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <StepContent />

        <Box mt={6} display="flex" justifyContent="space-between">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            sx={{
              padding: '10px 24px',
              borderRadius: '24px',
              borderColor: '#1976d2',
              color: '#1976d2',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              },
            }}
          >
            Back
          </Button>
          <Button
  variant="contained"
  color="primary"
  onClick={handleNext}
  sx={{
    padding: '10px 24px',
    borderRadius: '24px',
    fontWeight: 'bold',
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  }}
>
  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
</Button>

        </Box>
      </Paper>
    </Box>
  );
}

export default Incident;
