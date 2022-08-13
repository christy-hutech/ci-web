import React from "react";
import styles from "./index.module.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import { Row, Col } from "antd";
function CiHomeSpotLight() {
  return (
    <div className={styles.ci_home_spotlight_container}>
      <div className={styles.ci_home_spotlight_heading_container}>
        <div className={styles.ci_home_spotlight_heading}>
          Conservation India spotlight
        </div>
        <div className={styles.ci_home_spotlight_heading_bottom_border}></div>
      </div>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className={styles.ci_home_spotlight_subheading}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </Col>
      </Row>
      <Row justify="space-between" className={styles.ci_home_article_card_container}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ height: "100%" }}>
          <img src={Img} className={styles.ci_home_article_card_img} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className={styles.ci_home_article_card_containt}
        >
          <div className={styles.ci_home_article_card_containt_type}>Article</div>
          <div className={styles.ci_home_article_card_containt_heading}>
            Are Himalayan Black Bears in the North Bengal Foothills a Product of
            a Bigger Ecological Disaster?
          </div>
          <div className={styles.ci_home_article_card_containt_line}></div>
          <div className={styles.ci_home_article_card_containt_author}>
            Priyanka Das, Anish Paul, Nitish Kumar (The Coexistence Project)
          </div>
          <div className={styles.ci_home_article_card_containt_summery}>
            Since November 2021, Himalayan Black Bear (Ursus thibetanus laniger)
            have been spotted in the foothills of north Bengal, perplexing
            Forest..
          </div>
          <div className={styles.ci_home_article_card_containt_published}>
            February 28, 2022
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeSpotLight;
