//Import lié à react 
import React,{useState} from "react"

//Addons
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//Icons
import { Icon, InlineIcon } from '@iconify/react';
import  dropletOutline from '@iconify-icons/eva/droplet-off-fill';
import dropletOffOutline from '@iconify-icons/eva/droplet-fill';



export default function DashboardHeader(props){
    const {circuit,setCircuit}=props
    const useStyles = makeStyles((theme) => ({
        button: {
          "background-color": "white",
          "border-radius": "24px",
          "border": `1px solid ${circuit ? "#4BA46D" : "#FB0B0B" }`,
          "& .MuiButton-label":{
            "color":`${circuit? "black":"#FB0B0B"}`,
          },
          "&:hover":{
            "background-color": "white",
          }
          
         
        },
      }));
    const classes = useStyles();



 return(
    <div className="d-flex justify-content-start p-5">
        <Button
            id="circuit"
            variant="contained"
            className={classes.button}
            startIcon={<Icon icon={circuit?dropletOffOutline: dropletOutline} color={circuit?"#4BA46D":"#FB0B0B"}/>}
            onClick={()=>{setCircuit(!circuit)}}
        >
            {circuit ? "fermer le circuit d'eau":"Circuit d'eau fermé"}
        </Button>
    </div>
 )}