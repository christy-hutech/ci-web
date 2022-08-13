import {
  Button,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  message,
  Upload,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import styles from "./index.module.css";
import moment from "moment";
import { FilePdfOutlined, InboxOutlined } from "@ant-design/icons";
import CkEditorComp from "../../../components/CkEditor";

const { Option } = Select;
const { Dragger } = Upload;

function AddCampaigns() {
  const [tags, setTags] = useState(["Wild Life", "Animal", "Birds", "Cow"]);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [selectedAction, setSelectedAction] = useState("");

  const settings = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className={styles.creat_campaign_container}>
      <div className={styles.creat_campaign_top_row}>
        <div className={styles.creat_campaign_top_row_heading}>
          Add Campaign
        </div>
        <div className={styles.creat_campaign_top_row_actions}>
          <button
            onClick={() => setSelectedAction("submit")}
            className={
              selectedAction == "submit"
                ? `${styles.selected_button}`
                : `${styles.create_campaign_buttons}`
            }
          >
            Submit
          </button>
          <button
            onClick={() => setSelectedAction("savedraft")}
            className={
              selectedAction == "savedraft"
                ? `${styles.selected_button}`
                : `${styles.create_campaign_buttons}`
            }
          >
            Save Draft
          </button>
          <button
            onClick={() => setSelectedAction("preview")}
            className={
              selectedAction == "preview"
                ? `${styles.selected_button}`
                : `${styles.create_campaign_buttons}`
            }
          >
            Preview
          </button>
        </div>
      </div>
      <Row
        justify="space-between"
        className={styles.create_campaign_details}
      >
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
          className={styles.create_campaign_left_side}
        >
          <div className={styles.create_campaign_left_side_lebel}>
            Campaign Title
          </div>
          <Input placeholder="Enter Title" />
          <div className={styles.create_campaign_left_side_lebel}>
            Description
          </div>
          <CkEditorComp />
          <div className={styles.create_campaign_left_side_lebel}>
            Campaign
          </div>
          <div className={styles.create_campaign_left_side_lebel}>
            Upload Document
          </div>
          <Dragger {...settings}>
            <div className={styles.create_campaigns_drag_file}>
              <FilePdfOutlined />
              <div
                className={styles.create_campaigns_drg_file_instruction}
              >
                Drag & Drop PDF file here
              </div>
            </div>
            <div className={styles.create_campaigns_drg_file_size}>
              Max file size : 10MB
            </div>
          </Dragger>
          <div className={styles.create_campaign_left_side_lebel}>
            Media Updates
          </div>
          <TextArea rows={6} placeholder="Message" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={7}
          xl={7}
          className={styles.create_campaign_right_side}
        >
          <div className={styles.create_campaign_right_side_lebel}>
            Add Tags
          </div>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={["Wild Life"]}
          >
            {tags.map((item, i) => {
              return <Option key={i.toString(36) + i}>{item}</Option>;
            })} 
          </Select>
          <div className={styles.create_campaign_right_side_lebel}>
            Date
          </div>
          <DatePicker
            style={{ width: "100%" }}
            defaultValue={moment("01/01/2015", dateFormatList[0])}
            format={dateFormatList}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AddCampaigns;
