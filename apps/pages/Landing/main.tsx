import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'
import Dashboard from "@pages/Student/Dashboard";
import CoachDashboard from "@pages/Coach/Dashboard";

const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      margin: "50px",
      padding: "20px"
    },
    btns:{
        '& > *': {
        margin: theme.spacing(1),
      },
        margin: "40px",
        padding: "20px"
    }
  }));

const LandingPageApp = () => {
    const classes = useStyles();
    const router = useRouter()

    const navigateToStudentDashboardClick = e => {
        e.preventDefault()
        router.push('/Student/Dashboard')
      }

    const navigateToCoachDashboardClick = e => {
        e.preventDefault()
        router.push('/Coach/Dashboard')
    }

    return (
        <>
        <Typography variant="h4" component="h4">
            Hello, Choose your Options
        </Typography>
        <br />
        <div>            
            <Button variant="contained" onClick={navigateToStudentDashboardClick}>STUDENT</Button> <br /><br />            
            <Button variant="contained" onClick={navigateToCoachDashboardClick}>COACH</Button> <br /><br />
            <Button variant="contained" >ADMIN</Button> <br /><br />
        </div>
        </>
    );
};

export default LandingPageApp;