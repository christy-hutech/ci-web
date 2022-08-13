import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import CkEditorComp from "../../../components/CkEditor";
import Post from "../../../assets/images/post-organization.png";
import Event from "../../../assets/images/event-icon.png";
import Campaign from "../../../assets/images/campaing.png";
import CoverCam from "../../../assets/images/profile-cover-cam.png";
import NoProfile from "../../../assets/images/no-profile.png";
import "./index.css";
function AddOrganization() {
  return (
    <div className="add-organization-main-container">
      <div className="create-organization-top-row">
        <div className="create-organization-top-row-heading">
          Create New Organization
        </div>
        <div className="create-organization-top-row-button-wrapper">
          <button className="create-organization-top-row-button">Clear</button>
          <button
            className="create-organization-top-row-button"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="add-organization-container">
        <div className="add-organization-top-row">
          <div className="add-organization-top-row-heading">
            Organization Details
          </div>
        </div>
        <div className="add-organization-profile">
          <img src={CoverCam} className="add-organization-profile-cover-cam"/>
          <img src={NoProfile} className="add-organization-profile-pic"/>
          <img src={CoverCam} className="add-organization-profile-pic-cam"/>
        </div>
        <div className="add-organization-details">
          <Row justify="space-between">
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Organization Name</div>
              <Input placeholder="Enter organization Name" />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Website Url</div>
              <Input placeholder="Enter organization Url" />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Email</div>
              <Input placeholder="Enter organization mail" />
            </Col>
          </Row>
          <Row justify="space-between" style={{ marginTop: "3%" }}>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Address Line1</div>
              <Input />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Phone No</div>
              <Input placeholder="Enter Phone no" />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">City</div>
              <Input />
            </Col>
          </Row>
          <Row justify="space-between" style={{ marginTop: "3%" }}>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">State</div>
              <Input />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Country</div>
              <Input />
            </Col>
            <Col xs={24} sm={24} md={11} lg={7} xl={7}>
              <div className="add-organization-lebel">Zip Code</div>
              <Input />
            </Col>
          </Row>
          <div className="add-organization-description">
            <div className="add-organization-lebel">Description</div>
            <CkEditorComp />
          </div>
          <div style={{ marginTop: "3%" }}>
            <div className="add-organization-lebel">Create</div>
            <div className="add-organization-create-btn-wrapper">
              <button className="add-organization-btn">
                <img src={Post} />
                Post
              </button>
              <button className="add-organization-btn">
                <img src={Event} />
                Event
              </button>
              <button className="add-organization-btn">
                <img src={Campaign} />
                Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrganization;
