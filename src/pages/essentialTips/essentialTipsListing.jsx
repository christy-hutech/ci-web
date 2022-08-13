import React, { useState } from "react";
import styles from "./essentialTips.module.css";
import { Row, Col, Button, Form, Select, Pagination } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ArrowRight from "../../assets/images/homeImgs/arrow-right-red.png";
import rightarrow from "../../assets/images/essentiallistImgs/rightarrow.svg";
import leftarrow from "../../assets/images/essentiallistImgs/leftarrow.svg";
import img1 from "../../assets/images/essentiallistImgs/essential-img1.svg";
import img2 from "../../assets/images/essentiallistImgs/essential-img2.svg";
import img3 from "../../assets/images/essentiallistImgs/essential-img3.svg";
import img4 from "../../assets/images/essentiallistImgs/essential-img4.svg";
import img5 from "../../assets/images/essentiallistImgs/essential-img5.svg";
import img6 from "../../assets/images/essentiallistImgs/essential-img6.svg";
import img7 from "../../assets/images/essentiallistImgs/essential-img7.svg";
import img8 from "../../assets/images/essentiallistImgs/essential-img8.svg";
import img9 from "../../assets/images/essentiallistImgs/essential-img9.svg";
import img10 from "../../assets/images/essentiallistImgs/essential-img10.svg";

const { Option } = Select;

const Essentials = () => {
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <a>
          <img src={leftarrow} alt="Privious" />
        </a>
      );
    }

    if (type === "next") {
      return (
        <a>
          <img src={rightarrow} alt="Next" />
        </a>
      );
    }

    return originalElement;
  };
  const [essentialListingData, setEssentialListingData] = useState([
    {
      heading: "Conservation Conversation - A Video Series",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Dr. K. Ullas Karanth is renowned for his pioneering and path-breaking tiger research as well as his numerous contributions.",
      img: img1,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "India’s Conservation Challenges",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Dr Ullas Karanth, a Senior Scientist with the international NGO, Wildlife Conservation Society (WCS), is a world-renowned wildlife..",
      img: img2,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "New to Conservation? Read this!",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Wildlife filmmaker and conservationist Shekar Dattatri addresses some of the common misconceptions that people have about..",
      img: img3,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "The Constitutional Imperatives in the Protection of Wildlife",
      sub_subheading: "By CI Team",
      sub_heading:
        "Wildlife filmmaker and conservationist Shekar Dattatri addresses some of the common misconceptions that people have about..",
      img: img4,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "Legal Framework for Wildlife Conservation in India",
      sub_subheading: "By Praveen Bhargav",
      sub_heading:
        "Reworked from Critical Ecosystem Partnership Fund (CEPF) Report May 2007*. Many people are under the impression that India..",
      img: img5,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "Conservation Conversation - A Video Series",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Dr. K. Ullas Karanth is renowned for his pioneering and path-breaking tiger research as well as his numerous contributions.",
      img: img6,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "India’s Conservation Challenges",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Dr Ullas Karanth, a Senior Scientist with the international NGO, Wildlife Conservation Society (WCS), is a world-renowned wildlife..",
      img: img7,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "New to Conservation? Read this!",
      sub_subheading: "By Shekar Dattatri",
      sub_heading:
        "Wildlife filmmaker and conservationist Shekar Dattatri addresses some of the common misconceptions that people have about..",
      img: img8,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "The Constitutional Imperatives in the Protection of Wildlife",
      sub_subheading: "By CI Team",
      sub_heading:
        "Wildlife filmmaker and conservationist Shekar Dattatri addresses some of the common misconceptions that people have about..",
      img: img9,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
    {
      heading: "Legal Framework for Wildlife Conservation in India",
      sub_subheading: "By Praveen Bhargav",
      sub_heading:
        "Reworked from Critical Ecosystem Partnership Fund (CEPF) Report May 2007*. Many people are under the impression that India..",
      img: img10,
      tags: ["Wildlife Tourism", "Wildlife Science", "Wildlife Tourism"],
    },
  ]);
  const [tipsAndMore, setTipsAndMore] = useState([
    "File Inspection under RTI",
    "Documenting Violations",
    "Hunting / smuggling cases",
    "Meeting with Officials",
    "RTI to seek management plans",
    "Get an Official copy of PA Notifica..",
    "Use satellite imagery to check enc..",
  ]);
  return (
    <div className={styles.body_essential}>
      <div className={styles.essential_head}>Conservation India Essentials</div>
      <div className={styles.line}></div>
      <div className={styles.essential_para}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </div>
      <div className={styles.essential_container}>
        <div className={styles.essential_main}>
          <Row justify="space-between">
            <Col
              className={styles.left_col}
              xs={24}
              sm={24}
              md={16}
              lg={16}
              xl={16}
            >
              {essentialListingData.map((item, index) => {
                return (
                  <div className={styles.row_one}>
                    <div className={styles.essential_rowhead}>
                      <div className={styles.row_left}>
                        <h3 className={styles.first_head}>{item.heading}</h3>
                        <h4 className={styles.secondsub_head}>
                          {item.sub_subheading}
                        </h4>
                        <h5 className={styles.second_head}>
                          {item.sub_heading}
                        </h5>
                        <div className={styles.row_main}>
                          <div className={styles.section_row}>
                            Wildlife Tourism
                          </div>
                          <div className={styles.section_row}>
                            Wildlife Science
                          </div>
                        </div>
                      </div>
                      <hr className={styles.newhr} />
                    </div>
                    <img
                      className={styles.essential_img}
                      alt=""
                      src={item.img}
                    />
                  </div>
                );
              })}
            </Col>
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
              className={styles.sort_essential}
            >
              <h2 className={styles.head_sort}>Sort By</h2>
              <Form.Item name="sortBy">
                <Select defaultValue="last7days">
                  <Option value="last7days">Last 7 days</Option>
                  <Option value="last30days">Last 30 days</Option>
                  <Option value="lastyear">Last year</Option>
                </Select>
              </Form.Item>

              {/* <div className={styles.bar}>
                <select name="sort" id="original" className={styles.postform}>
                  <option value="-1">Sort by</option>
                  <option class="level-0" value="29">
                    Last 7 days
                  </option>
                  <option class="level-0" value="26">
                    Last 30 days
                  </option>
                  <option class="level-0" value="26">
                    Last year
                  </option>
                </select>
              </div> */}
              <div className={styles.main_head}>
                <div className={styles.tips_head}>Tips and More</div>
                <div className={styles.tips_subhead}>
                  New to Conservation India? Here is a curated list of tips and
                  educational reading material.
                </div>
                <div>
                  {tipsAndMore.map((item, index) => {
                    return (
                      <div className={styles.tips_container}>
                        <div className={styles.tips_title}>{item}</div>
                        <div className={styles.tips_icon}>
                          <ArrowRightOutlined />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.tips_btn_wrapper}>
                  <Button className={styles.tips_btn_text}>
                    View More
                    <img src={ArrowRight} className={styles.red_arrow_icon} />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Pagination
        itemRender={itemRender}
        className={styles.pagination}
        defaultCurrent={1}
        total={85}
        showSizeChanger={false}
        // showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
};

export default Essentials;
