import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Card } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

import TagList from "../TagList";
import styles from "./styles.module.sass";

const Project = ({ name, description, technologies, github, link, image }) => {
    const { t } = useTranslation();
    const actions = [];

    if (link) {
        actions.push(
            <a key="link" href={link} rel="noreferrer" target="_blank">
                <LinkOutlined />
            </a>,
        );
    }

    if (github) {
        actions.push(
            <a key="github" href={github} rel="noreferrer" target="_blank">
                <GithubOutlined />
            </a>,
        );
    }

    return (
        <Card
            cover={<img alt={name} src={`${process.env.BASE_PATH}${image}`} className={styles.Cover} />}
            actions={actions}
        >
            <Card.Meta
                title={name}
                description={
                    <div>
                        <TagList value={technologies} />
                        {description ? t(description) : <em>{t("PROJECT.DESCRIPTION.NO_DESCRIPTION")}</em>}
                    </div>
                }
            />
        </Card>
    );
};

export const propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
};

Project.propTypes = propTypes;

export default Project;
