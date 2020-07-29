import { GithubOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Select, Typography } from "antd";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";

import Container from "../../components/Container";
import Education from "../../components/Education";
import EmploymentHistory from "../../components/EmploymentHistory";
import Loader from "../../components/Loader";
import Projects from "../../components/Projects";
import TagList from "../../components/TagList";
import { axiosFetcher } from "../../utils/axios";
import styles from "./styles.module.sass";

const AppContainer = () => {
    const { t, i18n } = useTranslation();
    const { data, error } = useSWR("/data.json", axiosFetcher);

    const handleLanguageChange = useCallback((lng) => {
        i18n.changeLanguage(lng);
    }, []);

    if (error) {
        return (
            <Layout.Content>
                <Container>
                    <Row>
                        <Col span={24}>An error occurred</Col>
                    </Row>
                </Container>
            </Layout.Content>
        );
    }

    if (!data) {
        return (
            <div className={styles.LoaderContainer}>
                <div className={styles.Loader}>
                    <Loader />
                </div>
            </div>
        );
    }

    const headerBackgroundStyles = {
        backgroundImage: `url(${process.env.BASE_PATH}/background.jpeg)`,
    };

    return (
        <Layout.Content>
            <div className={styles.HeaderBackground} style={headerBackgroundStyles}>
                <Container>
                    <Row gutter={[30, 30]} align="middle">
                        <Col span={6}>
                            <a
                                href={data.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.SocialLink}
                            >
                                <GithubOutlined />
                            </a>
                        </Col>
                        <Col span={18}>
                            <div className={styles.LanguageSwitcher}>
                                <div>
                                    <Select defaultValue="en" onChange={handleLanguageChange}>
                                        <Select.Option value="en">English</Select.Option>
                                        <Select.Option value="ru">Russian</Select.Option>
                                    </Select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.BioRow} gutter={[30, 30]} align="middle">
                        <Col span={24} md={12}>
                            <div className={styles.Avatar}>
                                <img alt="Photo" src={`${process.env.BASE_PATH}${data.bio.avatar}`} />
                            </div>
                        </Col>
                        <Col span={24} md={12}>
                            <div className={styles.Bio}>
                                <Typography.Title level={1}>
                                    {data.bio.name} {data.bio.surname}
                                </Typography.Title>
                                <div>{t(data.bio.position)}</div>
                                <Divider style={{ borderTopColor: "rgba(255, 255, 255, .85)" }} />
                                <p>{t(data.bio.about)}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className={styles.Content}>
                <Row gutter={[30, 30]}>
                    <Col span={24} md={12}>
                        <Typography.Title level={2}>{t("Skills")}</Typography.Title>
                        <TagList value={data.skills} />
                    </Col>
                    <Col span={24} md={12}>
                        <Typography.Title level={2}>{t("Languages")}</Typography.Title>
                        <TagList value={data.languages} />
                    </Col>
                    <Col span={24} md={12}>
                        <Typography.Title level={2}>{t("Employment history")}</Typography.Title>
                        <EmploymentHistory value={data.employmentHistory} />
                    </Col>
                    <Col span={24} md={12}>
                        <Typography.Title level={2}>{t("Education")}</Typography.Title>
                        <Education value={data.education} />
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={2}>{t("Projects")}</Typography.Title>
                        <Projects value={data.projects} />
                    </Col>
                </Row>
            </Container>
        </Layout.Content>
    );
};

export default AppContainer;
