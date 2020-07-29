import { Timeline } from "antd";
import { Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

const Education = ({ value }) => {
    const { t } = useTranslation();
    return (
        <div>
            <Timeline>
                {value.map((school, index) => (
                    <Timeline.Item key={index}>
                        <Typography.Title level={4}>{t(school.name)}</Typography.Title>
                        <div>
                            {school.startedAt} {"endedAt" in school ? `- ${school.endedAt}` : ""}
                        </div>
                        <div>{school.location}</div>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
};

Education.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            startedAt: PropTypes.string,
            endedAt: PropTypes.string,
        }),
    ),
};

export default Education;
