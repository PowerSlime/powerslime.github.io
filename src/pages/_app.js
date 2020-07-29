import "../assets/styles.sass";

import React from "react";

import { init } from "../utils/i18n";
init();

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
