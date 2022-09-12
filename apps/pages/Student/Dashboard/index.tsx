import React, { useRef, useState, useEffect, createRef } from "react";
import Banner from "@component-library/components/common/banner/banner";
import Head from "@component-library/components/common/head/head";
import Button from "@material-ui/core/Button";


const items = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "Courses",
        href: "/Student/Courses"
    },
    {
        name: "Missions",
        href: "/Mission_Management/LandingPage"
    },
];

const Dashboard = ({items}) => {
    

    return (
        <>
        <div>
            <Head title="Student" />
            <div>
                <table>
                    <tbody>
                        <tr><td>Welcome to Dashboard</td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >HOME</Button></td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >COURSES</Button></td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >MISSIONS</Button></td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >CALENDAR</Button></td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >PROFILE</Button></td></tr>
                    </tbody>
                </table>
            </div>
            <Banner />
            <br />
            <div></div>
        </div>
        </>
    );
};

export default Dashboard;