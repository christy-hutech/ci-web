import { Row, Col, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";
import React from "react";
import styles from "./index.module.css";

function CiHomeAskUs() {
  return (
    <div className={styles.ci_home_connect_container}>
      <Row className={styles.ci_home_connect_ask_querry_container}>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className={styles.ci_home_connect_ask_querry_left_card}
        >
          <div className={styles.ci_home_connect_ask_querry_heading_container}>
            <div className={styles.ci_home_connect_ask_querry_heading}>
              Ask Conservation India
            </div>
            <div
              className={
                styles.ci_home_connect_ask_querry_heading_bottom_border
              }
            ></div>
          </div>
          <div className={styles.ci_home_connect_ask_querry_subheading}>
            Ask us any question related to wildlife conservation in India and we
            will answer it after consulting with our panel of experts.
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className={styles.ci_home_connect_ask_querry_right_card}
        >
          <Input
            style={{
              backgroundColor: "#35312E",
              border: "1px solid #35312E",
              color: "white",
            }}
            size="large"
            placeholder="Name"
          />
          <Input
            size="large"
            placeholder="Email Address (will not be published)"
            style={{
              backgroundColor: "#35312E",
              border: "1px solid #35312E",
              color: "white",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          <TextArea
            style={{
              backgroundColor: "#35312E",
              border: "1px solid #35312E",
              color: "white",
            }}
            rows={4}
            placeholder="Question"
          />
          <div className={styles.ci_home_connect_ask_us_btn_wrapper}>
            <button className={styles.ci_home_connect_ask_us_btn}>
              Ask us <img src={ArrowRight} className={styles.ask_us} />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeAskUs;
