import Head from "next/head";
import React from "react";

import AppContainer from "../containers/App/index";
import DefaultLayout from "../layouts/default";

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Denis Covaliuc - Front-end developer</title>
            </Head>
            <DefaultLayout>
                <AppContainer />
            </DefaultLayout>
        </React.Fragment>
    );
};

export default HomePage;
