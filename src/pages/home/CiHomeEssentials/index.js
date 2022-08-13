import { Row, Col, Button } from "antd";
import React, { useState } from "react";
import styles from "./index.module.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import LeftArrow from "../../../assets/images/homeImgs/left-arrow.png";
import RightArrow from "../../../assets/images/homeImgs/right-arrow.png";
import RedRightArrow from "../../../assets/images/homeImgs/arrow-right-red.png";

import swal from "sweetalert"
function CiHomeEssentials() {
  const navigate = useNavigate()
  const [tipsAndMore, setTipsAndMore] = useState([
    "File Inspection under RTI",
    "Documenting Violations",
    "Hunting / smuggling cases",
    "Meeting with Officials",
    "RTI to seek management plans",
    "Get an Official copy of PA Notifica..",
    "Use satellite imagery to check enc..",
  ]);

  const clickedCard = () => {
    swal(
      "Under Construction..!",
      "Bhabani inform me. once this page is done from your end..! :)",
      "warning"
    );
  }
  return (
    <div className={styles.ci_home_essentials_container}>
      <div className={styles.ci_home_essentials_heading}>
        Conservation India Essentials
      </div>
      <div className={styles.ci_home_essentials_heading_bottom_border}></div>
      <div className={styles.ci_home_essentials_subheading}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </div>
      <Row
        justify="space-between"
        className={styles.ci_home_essentials_container2}
      >
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={16}
          xl={16}
          className={styles.ci_home_essentials_card_container}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div onClick={() => clickedCard()} className={styles.ci_home_essentials_left_content_cards}>
                <div
                  className={
                    styles.ci_home_essentials_left_content_card_details
                  }
                >
                  <div
                    className={
                      styles.ci_home_essentials_left_content_card_fline
                    }
                  >
                    Forging Linkages Across Regions for
                  </div>
                  <div
                    className={
                      styles.ci_home_essentials_left_content_card_sline
                    }
                  >
                    By Shekar Dattatri
                  </div>
                  <div
                    className={
                      styles.ci_home_essentials_left_content_card_tline
                    }
                  >
                    Connectivity across habitats and animal populations is
                    critical to conservation. Connectivity is forged by animal
                    movements..
                  </div>
                  <Button
                    className={styles.ci_home_essentials_left_content_card_btn}
                  >
                    Invasive Species
                  </Button>
                  <Button
                    className={`${styles.ci_home_essentials_left_content_card_btn} ${styles.second_button_essentials}`}
                  >
                    Wildlife Tourism
                  </Button>
                </div>
                <div
                  className={
                    styles.ci_home_essentials_left_content_card_img_wrapper
                  }
                >
                  <img
                    src={Img}
                    className={styles.ci_home_essentials_left_content_card_img}
                  />
                </div>
              </div>
            );
          })}
          <div className={styles.ci_home_slider_container}>
        <div>
          <img
            src={LeftArrow}
            draggable="false"
            className={styles.arrow_btns}
          />
          <img
            src={RightArrow}
            className={`${styles.arrow_btns} ${styles.arrow_right}`}
          />
        </div>
        <Button
          onClick={() => clickedCard()}
          className={styles.ci_home_slider_viewmore}
        >
          View More{" "}
          <img src={RedRightArrow} className={styles.arrow_red_icon} />
        </Button>
      </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className={styles.ci_home_essentials_card_tips_container}
        >
          <div className={styles.ci_home_essentials_right_heading}>
            Tips and More
          </div>
          <p className={styles.ci_home_essentials_right_sub_heading}>
            New to Conservation India? Here is a curated list of tips and
            educational reading material.
          </p>
          <div>
            {tipsAndMore.map((item, index) => {
              return (
                <div
                  className={
                    styles.ci_home_essentials_right_section_tips_more_container
                  }
                >
                  <div
                    className={
                      styles.ci_home_essentials_right_section_tips_more
                    }
                  >
                    {item}
                  </div>
                  <div
                    className={
                      styles.ci_home_essentials_right_section_arrow_icon
                    }
                  >
                    <ArrowRightOutlined />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.view_more_btn_wrapper}>
          <Button  onClick={() => clickedCard()}
            className={styles.ci_home_essentials_right_section_view_more_btn}
          >
            View More
            <img src={ArrowRight} className={styles.red_arrow_icon} />
          </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeEssentials;
