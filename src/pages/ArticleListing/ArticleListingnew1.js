import React, { useState } from "react";
import styles from './article.module.css';
import { Col, Row } from 'antd';
import img1 from "../../assets/images/articleList/article-img1.svg";
import img2 from "../../assets/images/articleList/article-img2.svg";
import img3 from "../../assets/images/articleList/article-img3.svg";
import img4 from "../../assets/images/articleList/article-img4.svg";
import img5 from "../../assets/images/articleList/article-img5.svg";
import img6 from "../../assets/images/articleList/article-img6.svg";
import img7 from "../../assets/images/articleList/article-img7.svg";
import img8 from "../../assets/images/articleList/article-img8.svg";

const Articlelisting = () => {

  const [articleListingnewData, setArticleListingNewData] = useState([
    {
      heading: 'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
      sub_subheading: 'By Shekar Dattatri',
      sub_heading: 'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
      img: img1,
    },
    {
      heading: 'Against the Elephant: MoEFCC’s Guidelines for Human-Elephant Conflict Management',
      sub_subheading: 'By Divya Khosla',
      sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
      img: img2,
    },
    {
      heading: 'Ecologists urge MoEFCC to revoke the EIA draft notification, 2020',
      sub_subheading: 'By Shekar Dattatri',
      sub_heading: 'On 11th August, 2020, a group of 20 wildlife biologists/ ecologists submitted their comments and objections against the draft..',
      img: img3,
    },
    {
      heading: 'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
      sub_subheading: 'By Shekar Dattatri',
      sub_heading: 'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
      img: img4,
    },
    {
      heading: 'Hessarghatta Grasslands Must Be Saved!',
      sub_subheading: 'By Divya Khosla',
      sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
      img: img5,
    },
    {
      heading: 'Hessarghatta Grasslands Must Be Saved!',
      sub_subheading: 'By Divya Khosla',
      sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
      img: img6,
    },
    {
      heading: 'Hessarghatta Grasslands Must Be Saved!',
      sub_subheading: 'By Divya Khosla',
      sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
      img: img7,
    },
    {
      heading: 'Hessarghatta Grasslands Must Be Saved!',
      sub_subheading: 'By Divya Khosla',
      sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
      img: img8,
    }
  ])

  const [authorData, setAuthorData] = useState([
    {
      img: img1,
      authheading: 'Divya Khosla',
      subauthor: '24 Articles • 2 Case Studies',
    },
    {
      img: img1,
      authheading: 'Divya Khosla',
      subauthor: '24 Articles • 2 Case Studies',
    },
    {
      img: img1,
      authheading: 'Divya Khosla',
      subauthor: '24 Articles • 2 Case Studies',
    },

    {
      img: img1,
      authheading: 'Divya Khosla',
      subauthor: '24 Articles • 2 Case Studies',
    }
  ])

  return (
    <>
    {/* style={{ display:'flex', flexWrap:'wrap', width:'80%'}} */}
      <div className={styles.main_container} >
        <div className={styles.article_head}>Articles</div>
        <div className={styles.lines}></div>
        <div className={styles.article_container}>

          <div className={styles.article_main}>
            <Row className={styles.gutter_row} xs={24}
              sm={24}
              md={24}
              lg={7}
              xl={7}>

              {articleListingnewData.map((item, index) => {
                return (

                  <div className={styles.row_one}>

                    <div className={styles.article_rowhead}>
                      <div className={styles.hrtag}>
                        <h3 className={styles.first_head}>{item.heading}</h3>
                        <h4 className={styles.secondsub_head}>{item.sub_subheading}</h4>
                        <h5 className={styles.second_head}>{item.sub_heading}</h5>
                        <div className={styles.row_main}>
                          <div className={styles.section_rownew}>Wildlife Tourism
                          </div>
                          <div className={styles.section_row_onenew}>Wildlife Science
                          </div>
                        </div>
                      </div>
                      <hr className={styles.newhr} />
                    </div>
                    <img className={styles.article_img}
                      src={item.img} />

                  </div>
                )
              })}
            </Row>
          </div>
          <hr className={styles.verhr} />
          <div className={styles.sort_article}>
            <h2 className={styles.head_sort}>Sort By</h2>
            <div className={styles.barnew}>
              <select name={styles.sort} id="original" class="postform">
                <option value="_1">Sort by</option>
                <option class="level_0" value="29">Last 7 days</option>
                <option class="level_0" value="26">Last 30 days</option>
                <option class="level_0" value="26">Last year</option>
              </select>
            </div>
            <div className={styles.block_author}>
              <div className={styles.sec_block}>Wildlife Tourism
              </div>
              <div className={styles.sec_block}>Wildlife Crime & Trade
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Invasive Species
              </div>
              <div className={styles.sec_block}>Habitat Destruction
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Law & Governance
              </div>
              <div className={styles.sec_block}>Forest Rights Act
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Human_Wildlife Conflicts
              </div>
              <div className={styles.sec_block}>Forest Rights Act
              </div>
            </div>
            <div className={styles.block_authorone}>
              <div className={styles.sec_blocknew}>
                Feral Dogs _ Wildlife Conflicts</div>
            </div>

            <div className={styles.main_head}>
              <h2 className={styles.author_head}>Popular Authors</h2>
              <h4 className={styles.subhead_article}>New to Conservation India? Here is a curated list of tips and educational reading material.</h4>
              {authorData.map((item, index) => {
                return (
                  <>
                    <div className={styles.author_main}>
                      <img className={styles.image_wrapper} src={""} />
                      <div className={styles.flex_author}>
                        <h4 className={styles.case_author}>{item.authheading}</h4><br />
                        <h5 className={styles.case_two}>{item.subauthor}</h5>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <hr />
      </div></>
  );
};

export default Articlelisting;

