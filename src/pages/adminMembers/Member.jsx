import "antd/dist/antd.css";
import "./members.css";
// import styles from "./MembersList.module.css";
import { Layout, Button } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MembersList from "./MembersList";
const { Header, Sider, Content } = Layout;


const Member = () => {
    const handleMenuClick = (menu) => {
    };
    return (
        <Layout className="Container">
        <Sidebar handleClick={handleMenuClick} />
        <Layout className="site-layout">
            <Content
                className="member-list-wrapper"
            >
            <MembersList/> 
            </Content>
        </Layout>
        </Layout>
    );
};

export default Member;
