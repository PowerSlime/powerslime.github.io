import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.module.sass";

const Container = ({ children, fluid, className, ...props }) => {
    return (
        <div className={cn({ [styles.Container]: true, [styles.Fluid]: fluid }, className)} {...props}>
            {children}
        </div>
    );
};

Container.propTypes = {
    fluid: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.elementType,
};

export default Container;
