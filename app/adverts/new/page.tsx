'use client'

import { Box, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function page (){
    
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    return(
        <>
        <Box component='form' onSubmit={(e)=>{
            e.preventDefault();
            let array = JSON.parse ( window.localStorage.getItem('adList')||'' ) ;
            array = array ? array: [];
            array.push({
                name,
                content,
                start,
                end
            });
            window.localStorage.setItem ('adList', JSON.stringify(array));
            redirect('/adverts');
        }}>
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Ad's name"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e:any)=>setName(e.target.value)}
                />
                <TextField
                required
                margin="dense"
                id="content"
                label="Ad's content"
                type="text"
                inputProps={{maxLength: 500}}
                fullWidth
                variant="outlined"
                onChange={(e:any)=>setContent(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker name="start" label={'Start'} disablePast={true} onChange={(e:any)=>setStart(e.format('MM/DD/YYYY'))}/>
                <DatePicker name='end' label={'End'} onChange={(e:any)=>setEnd(e.format('MM/DD/YYYY'))}/>
                </LocalizationProvider>
                <Button type= "submit" variant="outlined" >Save</Button>
            </Box>
        </>
    );
}