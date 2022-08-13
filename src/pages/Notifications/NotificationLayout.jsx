import "antd/dist/antd.css";
// import "./index.css";
import { Layout, Button } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Notifications from "./index";
const { Header, Sider, Content } = Layout;

const NotificationLayout = () => {
    return (
        <Layout className="Container">
        <Sidebar/>
        <Layout className="account-container">
            <Content
                className="account-bg"
                style={{
                    margin: "3.5rem 8.4rem 3rem 2.8rem",
                    minHeight: 280,
                }}
            >
               <Notifications/>
            </Content>
        </Layout>
    </Layout>
    );
};

export default NotificationLayout;
