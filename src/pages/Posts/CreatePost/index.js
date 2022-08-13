import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import styles from "./index.module.css";
import moment from "moment";
import CkEditorComp from "../../../components/CkEditor";

const { Option } = Select;

function CreatePost() {
  const [tags, setTags] = useState(["Wild Life", "Animal", "Birds", "Cow"]);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <div style={{ backgroundColor: "#f0f2f5", padding: "1% 0" }}>
      <div className={styles.creat_post_container}>
        <div className={styles.creat_post_top_row}>
          <div className={styles.creat_post_top_row_heading}>
            Create Article
          </div>
          <div className={styles.creat_post_top_row_actions}>
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("preview")}
              className={
                selectedAction == "preview"
                  ? `${styles.selected_button}`
                  : `${styles.create_post_buttons}`
              }
            >
              Preview
            </Button>
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("savedraft")}
              className={
                selectedAction == "savedraft"
                  ? `${styles.selected_button}`
                  : `${styles.create_post_buttons}`
              }
            >
              Save Draft
            </Button>
            <Button
              type="primary"
              shape="round"
              onClick={() => setSelectedAction("submit")}
              className={
                selectedAction == "submit"
                  ? `${styles.selected_button}`
                  : `${styles.create_post_buttons_submit}`
              }
            >
              Submit
            </Button>
          </div>
        </div>
        <Row justify="space-between" className={styles.create_post_details}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            className={styles.create_post_left_side}
          >
            <div className={styles.create_post_left_side_lebel}>
              Topic
            </div>
            <Input placeholder="Feral Dogs_Wildlife Conflicts" />
            <div className={styles.create_post_left_side_lebel} style={{marginTop:'50px'}}>
              Post Title
            </div>
            <Input placeholder="Enter tiltle" />
            <div className={styles.create_post_left_side_lebel} style={{marginTop:'50px'}}>
              Description
            </div>
            <CkEditorComp />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            className={styles.create_post_right_side}
          >
            <div className={styles.create_post_right_side_lebel}>
              Author
            </div>
            <Select defaultValue="Author Name" style={{ width: "100%" }}>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
            </Select>
            <div className={styles.create_post_right_side_lebel} style={{marginTop:'30px'}}>
              Add Tags
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["Wild Life"]}
              // onChange={handleChange}
            >
              {tags.map((item, i) => {
                return <Option key={i.toString(36) + i}>{item}</Option>;
              })}
            </Select>
            <div className={styles.create_post_right_side_lebel} style={{marginTop:'30px'}}>
              Post Date
            </div>
            <DatePicker
              style={{ width: "100%" }}
              defaultValue={moment("01/01/2015", dateFormatList[0])}
              format={dateFormatList}
            />
            <div className={styles.create_post_right_side_lebel} style={{marginTop:'30px'}}>
              Article Source
            </div>
            <Input placeholder="Enter Source url" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CreatePost;
