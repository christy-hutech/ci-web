import React, { useState } from "react";
import { Col, Row, Select } from 'antd';
import styles from "./video.module.css";
import img1 from "../../assets/images/videolist/video-img1.svg";
import img2 from "../../assets/images/videolist/video-img2.svg";
import img3 from "../../assets/images/videolist/video-img3.svg";
import img4 from "../../assets/images/videolist/video-img4.svg";
import img6 from "../../assets/images/videolist/video-img6.svg";
import img7 from "../../assets/images/videolist/video-img7.svg";
import img8 from "../../assets/images/videolist/video-img8.svg";
import img9 from "../../assets/images/videolist/video-img9.svg";
const VideoList = () => {
  const [galleryListData, setGalleryListData] = useState([
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img1,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img2,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img3,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img4,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img6,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img7,
    },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img8,
    },
    {
      sub_heading: "February 28, 2022 • 8 min", 
      heading:'Wildlife Tourism in India',
    img: img8,
  },
    {
        sub_heading: "February 28, 2022 • 8 min", 
        heading:'Wildlife Tourism in India',
      img: img9,
    }
  ])

  return (
    <div className={styles.body_gallery }>
      <div className={styles.gallery_head }>Gallery</div>
      <div className={styles.line_gallery }></div>
      <div className={styles.gallery_main }>
        <div className={styles.sort_gallery }>
          <div className={styles.contain_gallery }>
            <div className={styles.gallery_tag }>
              <button type="primary" shape="circle" className={styles.antbutton_gallery} size={"small"}
                onClick={event => window.location.href = '/gallery'}>All Images</button>
              <button type="primary" shape="circle" className={styles.antbutton_gallery} size={"small"}
              onClick={event => window.location.href = '/featured'}>Featured</button>
              <button type="primary" shape="circle" className={styles.antbutton_gallery} size={"small"}
                onClick={event => window.location.href = '/video'}>Videos</button>
            </div>
            {/* <Link
                to={`/video`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
                Back
            </Link> */}
          </div>
          <div className={styles.bar_gallery}>
            <Select className="post_new" placeholder="Relevance">
              <Select.Option value="-1">Relevance</Select.Option>
              <Select.Option class="level-0" value="29" >Last 7 days</Select.Option>
              <Select.Option class="level-0" value="26">Last 30 days</Select.Option>
              <Select.Option class="level-0" value="26">Last year</Select.Option>
            </Select>
          </div>
        </div>
      </div>
      {/* <div className="grid-campaign"> */}
      <Row justify="space-around" className={styles.card_container}>
        {galleryListData.map((item, index) => {
          return (<Col className="gutter-row" xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}>
            <div className={styles.main_card}>
              <img className={styles.gallery_img}
                src={item.img} />

              <div className={styles.box_gallery}>
              <h5  className={styles.second_gallery}>{item.sub_heading}</h5>
                <h3  className={styles.first_gallery}>{item.heading}</h3>
               
              </div>
            </div>
          </Col>
          )
        })}

      </Row>
      <hr />
    </div>
  );
};

export default VideoList;

