import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

import Project, { propTypes } from "../Project";

const Projects = ({ value }) => {
    return (
        <Row gutter={[16, 16]}>
            {value.map((v, i) => (
                <Col key={i} span={24} md={8}>
                    <Project {...v} />
                </Col>
            ))}
        </Row>
    );
};

Projects.propTypes = {
    value: PropTypes.arrayOf(PropTypes.shape(propTypes)),
};

export default Projects;
