import { Layout } from "antd";
import React from "react";

import styles from "./styles.module.sass";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return <Layout className={styles.Layout}>{children}</Layout>;
};

export default DefaultLayout;
