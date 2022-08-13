import React from "react";
import { Row, Col, Input, Layout, Result, Badge  } from "antd";
import "./searchPage.css";
import "antd/dist/antd.css";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger-icon@2x.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import { CloseOutlined } from "@ant-design/icons";
import ConservationTopics from "../ConservationTopics/ConservationTopics";

const SearchPage = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <div className="header_container">
          <Header>
            <div className="search_header">
              <Row>
                <Col xs={24} sm={14} md={16} lg={6} xl={6}>
                  <img src={logo} alt="Image" />
                </Col>
                <Col xs={24} sm={14} md={16} lg={12} xl={12}>
                  <Input
                    placeholder="Search"
                    className="search_input"
                    suffix={
                      <CloseOutlined
                        style={{
                          color: "#CCCCCC",
                        }}
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={14} md={16} lg={4} xl={4}></Col>
                <Col xs={24} sm={14} md={16} lg={2} xl={2}>
                  <Badge>
                    <img src={hamburger} width="38" height="38" />
                  </Badge>
                </Col>
              </Row>
            </div>
          </Header>
        </div>
        <Layout>
          <div className="main_container_search">
            <Content>
              <Result
                icon={<svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="99" cy="99" r="99" fill="#F7F7F7"/>
                <rect x="83.002" y="53.4487" width="79.9175" height="118.051" rx="21.5" stroke="#969696"/>
                <rect x="92.7324" y="73.876" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="80.3867" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="87.8271" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="96.1982" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="124.101" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="132.006" width="60.9207" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="116.45" y="114.8" width="37.2035" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="114.8" width="19.5318" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="116.45" y="142.702" width="37.2035" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="92.7324" y="142.702" width="19.5318" height="2.32522" rx="1.16261" fill="#D9D9D9"/>
                <rect x="32.5" y="5.5" width="98.8557" height="145.914" rx="21.5" fill="white" stroke="#969696"/>
                <rect x="44.625" y="30.8247" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="38.8589" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="48.041" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="58.3711" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="92.8042" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="102.56" width="75.1787" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="73.8936" y="81.3267" width="45.9107" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="81.3267" width="24.1031" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="73.8936" y="115.759" width="45.9107" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <rect x="44.625" y="115.759" width="24.1031" height="2.86942" rx="1.43471" fill="#D9D9D9"/>
                <circle cx="85.6897" cy="74.323" r="34.5236" transform="rotate(8.96781 85.6897 74.323)" stroke="#969696"/>
                <rect x="115.965" y="100.026" width="49.3302" height="8.85849" rx="4.42925" transform="rotate(42.8573 115.965 100.026)" stroke="#969696"/>
                <line x1="109.511" y1="99.995" x2="112.694" y2="103.124" stroke="#969696"/>
                <path d="M69.3027 80.1784C72.5547 77.309 81.3543 73.2918 90.5364 80.1784" stroke="#3A3737"/>
                <path d="M67.0068 64.1099C68.2502 65.4489 71.6553 67.3236 75.3281 64.1099" stroke="#3A3737"/>
                <path d="M84.2236 64.1099C85.467 65.4489 88.8721 67.3236 92.5449 64.1099" stroke="#3A3737"/>
                </svg>
                }
                title={<p className="titile">No Search Result Found <hr className="horizontal_tag"/></p>}
                subTitle={<p className="para_tag">We couldn't find what you searched for.
                <br/>Try searching again.</p>}
              />
            </Content>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default SearchPage;
