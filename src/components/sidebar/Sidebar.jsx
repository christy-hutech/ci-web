import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import post from "../../assets/images/profileImgs/post.svg";
import campaign from "../../assets/images/profileImgs/campaign.svg";
import event from "../../assets/images/profileImgs/event.svg";
import profile from "../../assets/images/profileImgs/profile.svg";
import organization from "../../assets/images/profileImgs/organization.svg";
import setting from "../../assets/images/profileImgs/setting.svg";
import signout from "../../assets/images/profileImgs/signout.svg";
// import styles from "./Sidebar.module.css";

// import "./Sidebar.css";
// import { Router } from "react-router";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      style={{ minHeight: "100vh" }}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ marginTop: "5rem" }}
      >
        <Menu.SubMenu
          key="SubMenu1"
          icon={<img src={post} alt="post" />}
          title="Post"
        >
          <Menu.Item key="1">
            All Posts <Link to="/allposts" />
          </Menu.Item>
          <Menu.Item key="2">
            Add Post
            <Link to="/addposts" />
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="SubMenu2"
          icon={<img src={campaign} alt="campaign" />}
          title="Campaign"
        >
          <Menu.Item key="3">
            All Campaign <Link to="/allcampaigns" />
          </Menu.Item>
          <Menu.Item key="4">
            Add Campaign
            <Link to="/addcampaigns" />
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="SubMenu3"
          icon={<img src={event} alt="event" />}
          title="Event"
        >
          <Menu.Item key="5">
            All Event
            <Link to="/event" />
          </Menu.Item>
          <Menu.Item key="6">
            Add Event
            <Link to="/event" />
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="SubMenu4"
          icon={<img src={organization} alt="organization" />}
          title="Organization"
        >
          <Menu.Item key="7">
            All Organization
            <Link to="/allorganization" />
          </Menu.Item>
          <Menu.Item key="8">
            Add Organization
            <Link to="/addorganization" />
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item icon={<img src={profile} alt="profile" />} key="9">
          Profile
          <Link to="/profile" />
        </Menu.Item>

        <Menu.SubMenu
          key="SubMenu5"
          icon={<img src={setting} alt="setting" />}
          title="Setting"
        >
          <Menu.Item key="10">
            Account
            <Link to="/account" />
          </Menu.Item>
          <Menu.Item key="11">
            Member
            <Link to="/member" />
          </Menu.Item>
          <Menu.Item key="12">
            Notifications
            <Link to="/notifications" />
          </Menu.Item>
          <Menu.Item key="13">
            Access Log
            <Link to="/accesslog" />
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item icon={<img src={signout} alt="signout" />} key="14">
          Sign out
          <Link to="/" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
