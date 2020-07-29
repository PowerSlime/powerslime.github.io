import { Timeline, Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

const EmploymentHistory = ({ value }) => {
    const { t } = useTranslation();

    return (
        <div>
            <Timeline>
                {value.map((work, index) => (
                    <Timeline.Item key={index}>
                        <Typography.Title level={4}>{t(`JOB.TITLE.${work.id}`)}</Typography.Title>
                        <div>
                            {work.startedAt} {"endedAt" in work ? `- ${work.endedAt}` : ""}
                        </div>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
};

EmploymentHistory.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            startedAt: PropTypes.string,
            endedAt: PropTypes.string,
        }),
    ),
};

export default EmploymentHistory;
