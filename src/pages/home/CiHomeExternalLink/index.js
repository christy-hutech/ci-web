import React from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./index.module.css";
import LeftArrow from "../../../assets/images/homeImgs/left-arrow.png";
import RightArrow from "../../../assets/images/homeImgs/right-arrow.png";
import RedRightArrow from "../../../assets/images/homeImgs/arrow-right-red.png";
import swal from "sweetalert";

function CiHomeExternalLinks() {
  const clickedLink = () => {
    swal(
      "Under Construction..!",
      "UX is under construction we will fix it sooner..! :)",
      "warning"
    );
  };
  return (
    <div className={styles.ci_home_elinks_container}>
      <div className={styles.ci_home_elinks_heading}>External Links</div>
      <div className={styles.ci_home_elinks_heading_bottom_border}></div>
      <Row
        justify="space-between"
        className={styles.ci_home_featured_card_container}
      >
        {[1, 1, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              onClick={() => clickedLink()}
              className={styles.ci_home_featured_cards}
            >
              <div className={styles.ci_home_featured_cards_sideline}></div>
              <div className={styles.ci_home_featured_card_text}>
                Mumbai’s leopard population up due to prey availability | Deccan
                Herald
              </div>
            </Col>
          );
        })}
      </Row>

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
          onClick={() => clickedLink()}
          className={styles.ci_home_slider_viewmore}
        >
          View More{" "}
          <img src={RedRightArrow} className={styles.arrow_red_icon} />
        </Button>
      </div>
    </div>
  );
}

export default CiHomeExternalLinks;
