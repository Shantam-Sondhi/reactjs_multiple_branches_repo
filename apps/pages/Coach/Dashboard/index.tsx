import React from "react";
import Banner from "@component-library/components/common/banner/banner";
import Head from "@component-library/components/common/head/head";
import Button from "@material-ui/core/Button";

const CoachDashboard = () => {
    return (
        <>
        <div>
            <Head title="Coach" />
            <div>
                <table>
                    <tbody>
                        <tr><td>Welcome </td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >HOME</Button></td><td>&nbsp;&nbsp;</td><td><Button variant="contained" >PROFILE</Button></td></tr>
                    </tbody>
                </table>
            </div>
            <Banner />
            
        </div>
        </>
    );
};

export default CoachDashboard;