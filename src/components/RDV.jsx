import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';

function RDV() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
    { date: new Date(2024, 11, 12), description: 'update check-up' },
    { date: new Date(2024, 11, 14), description: 'Checkup' },
  ]);
  const [openModifyDialog, setOpenModifyDialog] = useState(false);
  const today = new Date();

  const handleConfirm = () => {
    const newAppointment = {
      date: selectedDate,
      description: 'New Appointment',
    };
    setAppointments([...appointments, newAppointment]);
    alert(`Appointment confirmed for ${format(selectedDate, 'MMMM d, yyyy')}`);
  };

  const handleModify = () => {
    setOpenModifyDialog(true); // Open the dialog
  };

  const handleDialogClose = (saveChanges) => {
    if (!saveChanges) {
      setOpenModifyDialog(false); // Close dialog without saving
    } else {
      alert(`Appointment modified to ${format(selectedDate, 'MMMM d, yyyy')}`);
      setOpenModifyDialog(false); // Close dialog after saving
    }
  };

  const previousAppointments = appointments.filter((appointment) =>
    isBefore(appointment.date, today)
  );
  const upcomingAppointments = appointments.filter((appointment) =>
    isAfter(appointment.date, today)
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#e3f2fd"
      padding={3}
    >
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
       Mes Rendez-vous :
      </Typography>

      {/* Calendar */}
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          borderRadius: 3,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            sx={{
              '& .MuiPickersDay-root': {
                borderRadius: '50%',
              },
              '& .Mui-selected': {
                backgroundColor: '#1e88e5 !important',
              },
            }}
          />
        </LocalizationProvider>

        {/* Highlight today's date */}
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            color: '#1565c0',
            fontWeight: 'bold',
          }}
        >
          Today: {format(today, 'MMMM d, yyyy')}
        </Typography>
      </Paper>

      {/* Previous and Upcoming Appointments */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          maxWidth: 600,
          width: '100%',
        }}
      >
        {/* Previous Appointments */}
        <Typography variant="h6" gutterBottom>
          Previous Appointments
        </Typography>
        <List>
          {previousAppointments.length > 0 ? (
            previousAppointments.map((appointment, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={appointment.description}
                  secondary={format(appointment.date, 'MMMM d, yyyy')}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No previous appointments.
            </Typography>
          )}
        </List>

        {/* Upcoming Appointments */}
        <Typography variant="h6" gutterBottom>
          Upcoming Appointments
        </Typography>
        <List>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={appointment.description}
                  secondary={format(appointment.date, 'MMMM d, yyyy')}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No upcoming appointments.
            </Typography>
          )}
        </List>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ marginTop: 4, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirm}
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#0d47a1',
            },
          }}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleModify}
        >
          Modify
        </Button>
      </Box>

      {/* Modify Dialog */}
      <Dialog open={openModifyDialog} onClose={() => handleDialogClose(false)}>
        <DialogTitle>Modify Appointment</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              sx={{
                '& .MuiPickersDay-root': {
                  borderRadius: '50%',
                },
                '& .Mui-selected': {
                  backgroundColor: '#1e88e5 !important',
                },
              }}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => handleDialogClose(true)} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RDV;
