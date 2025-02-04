'use client'
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, TextField } from '@mui/material';
import styles from '@/app/login/page.module.css';
import { redirect } from 'next/navigation';

export default function Login(){
        let pass:string = ''    
        return (
        <>
        <div className={styles.page}>
        <div className={styles.inner}>
            <Card>
                <CardContent>
                    <h1>Log in</h1>
                    <CardActions>
                        <TextField id="password" onChange={(event)=>{pass=event.target.value}} label="Password" type="password" variant="outlined" />
                        <Button onClick={()=>{
                            console.log(pass);
                            fetch('/api/login',{
                                method:'POST',
                                body: JSON.stringify({pass})
                            }
                            ).then((res)=>{
                                if (res.status === 200){
                                    res.json().then((obj)=>{
                                        window.localStorage.setItem('token', obj.token);
                                        redirect('/adverts');
                                    });
                                }

                            });
                        }} size="small">Log in</Button>
                    </CardActions>

                </CardContent>
            
            </Card>
        </div>    
        </div>
        </>
    )
}