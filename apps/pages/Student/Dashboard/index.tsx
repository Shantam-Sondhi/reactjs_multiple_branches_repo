import React from "react";
import Banner from "@component-library/components/common/banner/banner";
import Head from "@component-library/components/common/head/head";

const Dashboard = () => {
    return (
        <>
        <div>
            <Head title="Student" />
            <Banner />
            Welcome to Dashboard
        </div>
        </>
    );
};

export default Dashboard;