import "antd/dist/antd.css";
import styles from "./accesslog.module.css";
import { Layout } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import AccessLog from "./accesslog";
const { Content } = Layout;

const AccessLayout = () => {
  return (
    <Layout className={styles.Container}>
      <Sidebar />
      <Layout className={styles.accesslog_container}>
        <div className={styles.accesslog_header}>
          <h3>Login Activity</h3>
          <p>Here is your last 20 login activities log.</p>
        </div>
        <Content
          className={styles.access_layout_bg}
          style={{
            margin: "0 8.4rem 3rem 2.8rem",
            minHeight: 280,
          }}
        >
          <AccessLog />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AccessLayout;
