import { Tag } from "antd";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.module.sass";

const TagList = ({ value }) => {
    const isValueIsObject = typeof value[0] === "object";

    return (
        <div>
            {value.map((v, i) => (
                <Tag key={i} className={styles.Tag} color={isValueIsObject ? v.color : undefined}>
                    {isValueIsObject ? v.name : v}
                </Tag>
            ))}
        </div>
    );
};

TagList.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                color: PropTypes.string,
            }),
        ),
    ]),
};

export default TagList;
