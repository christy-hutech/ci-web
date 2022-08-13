import React, { useState } from "react";
import { Col, Row, Select } from 'antd';
import styles from "./featured.module.css";
import img1 from "../../assets/images/galleryList/Images/gallery-img1.svg";
import img2 from "../../assets/images/galleryList/Images/gallery-img2.svg";
import img3 from "../../assets/images/galleryList/Images/gallery-img3.svg";
import img4 from "../../assets/images/galleryList/Images/gallery-img4.svg";
import img5 from "../../assets/images/galleryList/Images/gallery-img5.svg";
import img6 from "../../assets/images/galleryList/Images/gallery-img6.svg";
import img7 from "../../assets/images/galleryList/Images/gallery-img7.svg";
import img8 from "../../assets/images/galleryList/Images/gallery-img8.svg";
import img9 from "../../assets/images/galleryList/Images/gallery-img9.svg";
import img10 from "../../assets/images/galleryList/Images/gallery-img10.svg";
import img11 from "../../assets/images/galleryList/Images/gallery-img11.svg";
import img12 from "../../assets/images/galleryList/Images/gallery-img12.svg";
import img14 from "../../assets/images/galleryList/Images/gallery-img14.svg";
import img15 from "../../assets/images/galleryList/Images/gallery-img15.svg";
import img16 from "../../assets/images/galleryList/Images/gallery-img16.svg";
import img17 from "../../assets/images/galleryList/Images/gallery-img17.svg";
import img18 from "../../assets/images/galleryList/Images/gallery-img18.svg";
import img19 from "../../assets/images/galleryList/Images/image 188.svg";
import img20 from "../../assets/images/galleryList/Images/image 191.svg";
import img21 from "../../assets/images/galleryList/Images/image 193.svg";

const FeaturedList = () => {
  const [featuredListData, setFeaturedListData] = useState([
    {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img1,
      },
      {
        heading: 'Bear knocked dead by Goods train near Gondia Maharashtra',
        sub_heading: 'Photographer - Ramkumar',
        img: img2,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img3,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img4,
      },
      {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img5,
      },
      {
        heading: 'Bear knocked dead by Goods train near Gondia Maharashtra',
        sub_heading: 'Photographer - Ramkumar',
        img: img6,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img7,
      },
      {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img1,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img8,
      },
      {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img9,
      },
      {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img10,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img11,
      },
      {
        heading: 'The Hunter’s Hunt',
        sub_heading: 'Photographer - Ramkumar',
        img: img12,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img14,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img15,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img16,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img17,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img18,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img19,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img20,
      },
      {
        heading: 'The Idu believe that tigers are their blood-brothers and do not kill them.',
        sub_heading: 'Photographer - Ramkumar',
        img: img21,
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
        {featuredListData.map((item, index) => {
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

export default FeaturedList;

