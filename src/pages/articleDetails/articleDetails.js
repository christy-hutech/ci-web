import React, { useEffect, useState } from "react";
import styles from "./articleDetails.module.css";
import Img from "../../assets/images/articleDetailsImgs/top-img.svg";
import Img2 from "../../assets/images/articleDetailsImgs/emperic-data.svg";
import Img3 from "../../assets/images/articleDetailsImgs/img3.svg";
import UserImg from "../../assets/images/articleDetailsImgs/user-img.svg";
import LinkedInImg from "../../../src/assets/images/linkdin.svg";
import FaceBookImg from "../../../src/assets/images/facebook.svg";
import TwitterImg from "../../../src/assets/images/twitter.svg";
import { Row, Col, Button, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CiHomeSubscribe from "../home/CiHomeSubscribe";
import ArrowRight from "../../../src/assets/images/homeImgs/arrow-right-red.png";
import CiHomeAskUs from "../home/CiHomeAskUs";

function ArticleDetails() {
  const [tags, setTags] = useState([
    "NBWL Matters",
    "Endangered Species",
    "Feral Dogs - Wildlife Conflicts",
    "Invasive Species",
    "Wildlife Tourism",
  ]);
  const [trendingTags, setTrendingTags] = useState([
    "NBWL Matters",
    "Endangered Species",
    "Feral Dogs - Wildlife Conflicts",
    "Invasive Species",
    "Wildlife Tourism",
    "Law & Governance",
    "Human Resettlement",
    "Habitat Destruction",
    "Wildlife Crime & Trade",
    "Conservation Campaign",
    "Forest Rights Act",
    "Human-Wildlife Conflicts",
  ]);
  return (
    <div>
      <div className={styles.top_container}>
        <div className={styles.top_container_published_date}>
          February 28, 2022 • 8 min read
        </div>
        <div className={styles.top_container_heading}>
          Forging Linkages Across Regions for the Wide-ranging Asian Elephant
        </div>
        <div className={styles.top_container_heading_border_bottom}></div>
        <div className={styles.top_container_author}>
          By Divya Vasudev & Varun R. Goswami
        </div>
        <img src={Img} className={styles.top_container_img} />
      </div>
      <div className={styles.second_container}>
        <Row justify="space-between" className={styles.second_container_row}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            xl={6}
            className={styles.second_container_first_col}
          >
            <div className={styles.summery_heading}>SUMMERY</div>
            <div className={styles.summery_details}>
              <div style={{ color: "black", fontWeight: "bold", opacity: 1 }}>
                Overview
              </div>
              <div>Problems with Habitant</div>
              <div>Asian Elephants</div>
              <div>Diversity and Distributions</div>
              <div>Empirical Data</div>
              <div>Recorded Factors</div>
              <div>Result</div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={11}
            xl={11}
            className={styles.second_container_second_col}
          >
            <div className={styles.para1}>
              Connectivity across habitats and animal populations is critical to
              conservation. Connectivity is forged by animal movements – or
              dispersal – across large heterogeneous landscapes. Connectivity
              boosts the ability of animals to persist over time, and enhances
              both immunity and adaptability of animal populations, and helps
              prevent local extinctions. When local extinctions do occur,
              connectivity allows animals to recolonise previously occupied but
              currently empty or depauperate habitats.
            </div>
            <div className={styles.heading1}>Problems with Habitant</div>
            <div className={styles.para2}>
              Today, habitats are sometimes severely fragmented, and human
              presence has drastically restricted animal movement. This limits
              their ability to traverse fragmented landscapes. Even
              well-intentioned measures sometimes block connectivity. For
              example, the large-scale erection of fences around protected areas
              as a purported solution for reducing human–wildlife conflict
              blocks connectivity, and can isolate populations. There is thus,
              much to be learnt and done to ensure that linkages across animal
              populations continue to be maintained.
              <br />
              <br />
              All of the above holds especially true for the Asian elephant
              (Elephas maximus), India’s National Heritage Animal and an
              endangered species that is present across 13 countries in Asia.
              Elephants range widely, sometimes over 100s of kilometres, to meet
              their immense food and water requirements. To put this in context,
              the average size of protected areas in India is 300 km2, close to
              the average home range size of a single elephant herd. In
              recognition of this need to expand conservation efforts outside
              protected areas, government policy has rightly identified the
              ‘landscape’ as a unit of conservation for elephants. Thus,
              Elephant Reserves, by design, are meant to incorporate protected
              source habitats, corridors, and multiple-use areas. But practice
              is slow to follow policy; elephant corridors are not well
              identified, factors that facilitate or impede elephant movement
              within and across Elephant Reserves are yet to be well studied,
              and conservation practice and actions on-ground are not geared
              towards landscape-scale conservation of elephants.
            </div>
            <div className={styles.head2}>Asian Elephants</div>
            <div className={styles.para3}>
              Our research, published in Diversity and Distributions, addresses
              these issues squarely. We have used data on elephant presence
              across heterogeneous areas to identify locations most suited to
              elephant dispersal, as well as factors that facilitate or impede
              such movement.
            </div>
            <div className={styles.head3}>Diversity and Distributions</div>
            <div className={styles.para4}>
              We collected empirical data on elephant use of lands outside
              protected areas—paddy fields, plantations, human habitations, and
              forestland—across 7,500 km2. We used these data in newly developed
              movement models to identify areas most critical to connectivity
              across a 20,000 km2 region of Northeast India. This work is
              significant for a few reasons. One, dispersal and connectivity,
              occurring infrequently and across large landscapes, has
              traditionally been a difficult subject of study. Collecting data
              relevant to animal use of landscapes has been difficult,
              especially because events of animal movement in certain important
              corridor areas may happen just a few times a year. We took
              advantage of the fact that elephants are visible, noticed by
              people, and are unambiguously recognisable, to systematically
              collect citizen-reports of elephant use of a multitude of areas.
              We questioned 1000 farmers across this region, recording each time
              a respondent reported elephant presence in their immediate
              neighbourhood. In total we used 200 reports of elephant presence
              in multiple-use lands to model connectivity.{" "}
            </div>
            <div className={styles.head4}>Empirical Data</div>
            <div className={styles.para5}>
              imultaneously, we recorded factors that may impede or facilitate
              elephant movement. We used the Google Earth Engine and satellite
              imagery to classify the entire region into different land cover
              types. We used existing information on human population density,
              and calculated distance to forest and vegetation cover. We found
              that elephants used areas with high vegetation cover for movement.
              Despite being animals that can traverse great distances, they did
              not venture far from forests, highlighting the role of forests as
              refuges for these and other species. They avoided areas with a
              high human population density, likely associating risk with human
              presence and potential conflict.
            </div>
            <div>
              <img src={Img2} className={styles.img2} />
              <div className={styles.img2_details}>
                Elephants use areas of high vegetation cover and low human
                presence, that are close to forests for dispersal. Photo credit:
                Bhavendu Joshi/Conservation Initiatives
              </div>
            </div>
            <div className={styles.head5}>Results</div>
            <div className={styles.para6}>
              We incorporated this understanding into newly developed
              connectivity models, called Randomised Shortest Path (RSP) models.
              To our knowledge, this is the first application of RSP models—a
              very new advancement in the field of wildlife connectivity—in
              India.
              <br />
              <br />
              This is also likely the first time globally that citizen science
              data, which are relatively more feasible to collect, have been
              used with RSP or other advanced connectivity models. A recognised
              issue of such models is the need for them to be informed by
              empirical data relevant to animal movement and use of the
              landscape. While our data does not track elephant movement per
              se—like radio telemetry does—it does offer pertinent insight on
              elephant use of lands outside protected areas. Such a combination
              opens opportunities for applying advanced connectivity models for
              species or landscapes otherwise limited by lack of appropriate
              data.
              <br />
              <br />
              The results of our model are two-fold. One, it answers the
              question, where should elephant connectivity conservation (e.g.,
              securing corridors, protecting existing forests, removing
              blockades and fences, incentivising safe elephant passage through
              private lands) be focused, via fine-scale 1-km2 maps. Second, it
              addresses the issue of why elephants move through some areas and
              not others, and thus provides an indication to how we can
              strategically target connectivity conservation action. For
              instance, our work adds to previous findings from scientific
              studies, including our own work, that vegetation and wooded areas
              even on private lands, can facilitate critical animal movement.
              Government policies that encourage woody vegetation on private
              lands, incentivise preservation of wooded areas on private lands,
              and strictly limit deforestation in important connectivity areas,
              are clearly indicated.
            </div>
            <div>
              <img src={Img3} className={styles.img2} />
              <div className={styles.img2_details}>
                Elephants use areas of high vegetation cover and low human
                presence, that are close to forests for dispersal. Photo credit:
                Bhavendu Joshi/Conservation Initiatives
              </div>
            </div>
            <div className={styles.para7}>
              The relevance of connectivity extends well beyond the preservation
              of single species. Corridors for elephants may serve as important
              movement zones for other less studied species as well.
              Connectivity conservation occurs at the human–wildlife interface
              and guides us to look for conservation approaches that facilitate
              shared human–wildlife spaces and their coexistence. Connectivity
              is also recognised as a key mitigation tool for climate change.
              For all these reasons and more, connectivity conservation assumes
              prime importance, and science that guides and backs connectivity
              conservation policy and on-ground action is urgently needed. With
              our work, we seek to fill this knowledge gap, and thus improve our
              practice of connectivity conservation.
              <br />
              <br />
              The paper referred to in this article, titled ‘Identifying
              important connectivity areas for the wide‐ranging Asian elephant
              across conservation landscapes of Northeast India’, is published
              in the peer-reviewed scientific journal Diversity and
              Distributions, and can be accessed here:
              <span style={{ color: "red" }}>
                http://doi.org/10.1111/ddi.13419.
              </span>
            </div>
            <div className={styles.border_bottom_gray}></div>
            <div className={styles.tags}>
              {tags.map((item, index) => {
                return <Button>{item}</Button>;
              })}
            </div>
            <div className={styles.about_authors}>
              <div className={styles.author_title}>About the authors</div>
              <div className={styles.author_border_bottom}></div>
              <div className={styles.author_name}>
                Divya Vasudev & Varun R. Goswami
              </div>
              <div className={styles.author_detail}>
                Divya & Varun founded and lead Conservation Initiatives, a
                Northeast-India based NGO dedicated to science-based
                conservation of endangered wildlife and their habitats. Divya is
                interested in new and feasible approaches to better improve our
                understanding of animal movement and dispersal. Varun has
                expertise on the Asian elephant and landscape-scale
                conservation, and hails from Northeast India.
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            xl={6}
            className={styles.second_container_third_col}
          >
            <img src={FaceBookImg}/>
            <img src={LinkedInImg}/>
            <img src={TwitterImg}/>
          </Col>
        </Row>

        <div className={styles.long_hr}></div>

        <Row justify="space-between" className={styles.third_container_row}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            className={styles.third_container_first_col}
          >
            <div className={styles.third_conatiner_left_heading}>Comments</div>
            <div className={styles.comments_sortby}>
              <div className={styles.number_of_comments}>2 comments</div>
              <div>
                <Select placeholder="sortby">
                  <Select.Option value="oldest">oldest</Select.Option>
                  <Select.Option value="newest">newest</Select.Option>
                </Select>
              </div>
            </div>
            <div className={styles.commented_member_details}>
              <div>
                <img src={UserImg} className={styles.commented_user_img} />
              </div>
              <div className={styles.user_name_comment}>
                <div className={styles.commented_user_name}>Divya Khosla</div>
                <div className={styles.commented_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </div>
              </div>
            </div>
            <div
              className={styles.border_bottom_gray}
              style={{ marginTop: "5%" }}
            ></div>
            <div className={styles.add_comment}>
              <img src={UserImg} className={styles.commented_user_img} />
              <Input placeholder="Add a comment..." />
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            className={styles.third_container_second_col}
          >
            <div className={styles.trending_tags}>Trending Tags</div>
            <div className={styles.trending_tags}>
              {trendingTags.map((item, index) => {
                return <Button>{item}</Button>;
              })}
            </div>
            <div className={styles.populer_authors}>Popular Authors</div>
            <div className={styles.populer_authors_text}>
              New to Conservation India? Here is a curated list of tips and
              educational reading material.
            </div>
            {[1, 1, 1, 1].map((item, index) => {
              return (
                <div className={styles.top_authors}>
                  <img src={UserImg} className={styles.top_author_img} />
                  <div className={styles.top_author_details}>
                    <div className={styles.top_author_name}>Divya Khosla</div>
                    <div className={styles.top_author_numbers}>
                      24 Articles • 2 Case Studies
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
      <div>
        <div className={styles.ask_us_container}>
          {/* <Row className={styles.ci_home_connect_ask_querry_container}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className={styles.ci_home_connect_ask_querry_left_card}
            >
              <div
                className={styles.ci_home_connect_ask_querry_heading_container}
              >
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
                Ask us any question related to wildlife conservation in India
                and we will answer it after consulting with our panel of
                experts.
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
          </Row> */}
          <CiHomeAskUs />
        </div>
        <CiHomeSubscribe />
      </div>
    </div>
  );
}

export default ArticleDetails;
