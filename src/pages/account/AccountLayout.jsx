import "antd/dist/antd.css";
import "./account.css";
// import styles from "./account.module.css";
import { Layout, Button } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Account from "./Account";
const { Header, Sider, Content } = Layout;

const AccountLayout = () => {
    return (
        <Layout className="Container">
        <Sidebar/>
        <Layout className="account-container">
            <Content
                // className={styles.account_bg}
                className="account-bg"
                style={{
                    margin: "3.5rem 8.4rem 3rem 2.8rem",
                    minHeight: 280,
                }}
            >
                <Account/>
            </Content>
        </Layout>
    </Layout>
    );
};

export default AccountLayout;
