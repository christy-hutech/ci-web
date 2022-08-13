import "antd/dist/antd.css";
import { Layout } from "antd";
import React from "react";
import styles from "./profile.module.css";
import ProfileForm from "../../components/profileForm/Profileform";
import Sidebar from "../../components/sidebar/Sidebar";
const { Content } = Layout;
const Profile = () => {
  const handleMenuClick = (menu) => {
    console.log("Profile");
  };
  return (
    <Layout className={styles.Container}>
      <Sidebar handleClick={handleMenuClick} />
      <Layout className={styles.site_layout}>
        <Content className={styles.site_layout_background}>
          <ProfileForm />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
