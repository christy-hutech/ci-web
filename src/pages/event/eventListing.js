import React, { Fragment, useState } from "react";
import styles from "./eventListing.module.css";
import { Col, Row } from "antd";
import img1 from "../../assets/images/eventListingImgs/event-img1.svg";
import img2 from "../../assets/images/eventListingImgs/event-img2.svg";
import img3 from "../../assets/images/eventListingImgs/event-img3.svg";
import img4 from "../../assets/images/eventListingImgs/event-img4.svg";
import img5 from "../../assets/images/eventListingImgs/event-img5.svg";
import img6 from "../../assets/images/eventListingImgs/event-img6.svg";
import img7 from "../../assets/images/eventListingImgs/event-img7.svg";
import img8 from "../../assets/images/eventListingImgs/event-img8.svg";
import img9 from "../../assets/images/eventListingImgs/event-img9.svg";
import img10 from "../../assets/images/eventListingImgs/event-img10.svg";
import img11 from "../../assets/images/eventListingImgs/event-img11.svg";
import img12 from "../../assets/images/eventListingImgs/event-img12.svg";
import img13 from "../../assets/images/eventListingImgs/event-img13.svg";
import img14 from "../../assets/images/eventListingImgs/event-img14.svg";
import img15 from "../../assets/images/eventListingImgs/event-img15.svg";

const Event = () => {
  const [eventListingData, setEventListingData] = useState([
    {
      heading:
        "Use this Space to Publicise Wildlife and Conservation Events in your City!",
      img: img1,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "FREE",
    },
    {
      heading:
        "Foundation Training Program on the Practice of Ecological Restoration ",
      img: img2,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Bangalore Lake Census Workshop — Venkatappa Art Gallery, Bengaluru",
      img: img3,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "FREE",
    },
    {
      heading: "Goa Bird Festival — Valpoi, Goa",
      img: img4,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Chemical Ecology and the Anthropocene — CWS, Bengaluru",
      img: img5,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Talk by Dr. Ajit Kumar, India’s Leading Primatologist, CWS, Bangalore",
      img: img6,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Release of the book “Bird Business” authored by Rohan Chakravarty",
      img: img7,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Inviting Applications For RBS Earth Heroes Awards 2019",
      img: img8,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Student Conference on Conservation Science — IISc, Bengaluru",
      img: img9,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Last Day! The Hills of Murugan – Photo Exhibition by Ian Lockwood",
      img: img10,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading:
        "Job posting for Asst. Elephant Campaign Manager for Wildlife SOS ",
      img: img11,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Wikipedia Workshop for Bird enthusiasts – Ornithology ",
      img: img12,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Wikipedia Workshop for Bird enthusiasts – Ornithology ",
      img: img13,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Wikipedia Workshop for Bird enthusiasts – Ornithology ",
      img: img14,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
    {
      heading: "Wikipedia Workshop for Bird enthusiasts – Ornithology ",
      img: img15,
      date: "July 15 2022",
      timeLine: "7:00 PM - 9:00 PM",
      price: "₹5000 onwards (including GST)",
    },
  ]);

  return (
    <Fragment>
      <div className={styles.body_event}>
        <div className={styles.event_head}>Events</div>
        <div className={styles.line}></div>
        <Row
          className={styles.event_row}
          gutter={[32, 32]}
          justify="space-between"
          // style={{ margin: "0 6.7rem" }}
        >
          {eventListingData.map((item, index) => {
            return (
              <Col
                className={styles.gutter_row}
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                // xs={24}
                // sm={24}
                // md={24}
                // lg={7}
                // xl={7}
              >
                <img
                  className={styles.event_img}
                  alt="eventImg"
                  src={item.img}
                />
                <h3 className={styles.event_heading}>{item.heading}</h3>
                <h4 className={styles.event_time}>
                  {item.date} | {item.timeLine}{" "}
                </h4>
                <h2 className={styles.event_price}>{item.price}</h2>
              </Col>
            );
          })}
        </Row>
        {/* <hr /> */}
      </div>
      <div className={styles.event_divider}></div>
    </Fragment>
  );
};

export default Event;
