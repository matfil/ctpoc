'use client'
import { Button, Card, CardActions, CardContent } from "@mui/material";

export default function ListElement(props:any){
    return(
        <>
        <Card variant="outlined">
            <CardContent>
                {props.adobject.name}<br/>
                Index: {props.index}
                <p>ID: {props.adobject.id}</p>
                <p>Content: {props.adobject.content}</p>
                <p>Start date:{props.adobject.start ? props.adobject.start:null}</p>
                <p>End date:{props.adobject.end ? props.adobject.end:null}</p>
                <CardActions>
                    <Button variant="outlined" onClick={props.handleDelete}>
                        delete
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        </>
    )
}
export interface AdObject {
    id:number;
    name:string;
    content:string;
    start:string;
    end:string;
}