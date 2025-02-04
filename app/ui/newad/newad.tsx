
'use client';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function NewAd(props:any){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add new Ad
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const advert = formJson;
              props.onSave(advert);
              console.log(advert);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add Advertisement</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Put Advertisement's data here
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Ad's name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              id="content"
              name="content"
              label="Ad's content"
              type="text"
              inputProps={{maxLength: 500}}
              fullWidth
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name={'start'} label={'Start'} disablePast={true}/><DatePicker name={'end'} label={'End'}/>
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add Advert</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
}