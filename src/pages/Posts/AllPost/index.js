import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import styles from "./index.module.css";
import RejectIcon from "../../../assets/images/reject-icon.png";
import EditIcon from "../../../assets/images/edit-icon.png";
const { Option } = Select;
const columns = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Author",
    dataIndex: "Author",
    key: "Author",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "Status",
    key: "Status",
    dataIndex: "Status",
    render: (_, { Status }) => (
      <>
        {Status.map((tag, index) => {
          let color =
            tag == "Aproved"
              ? "#31BC79"
              : tag == "rejected"
              ? "red"
              : "#F19F3F";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag
              style={{
                backgroundColor: color,
                color: "#FFFBF9",
                paddingInline: "10px",
                borderRadius: "10px",
                width: "126px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                fontFamily: " DM Sans",
                fontWeight: 500,
                fontSize: "12px",
              }}
              key={tag}
            >
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <img src={EditIcon} style={{ height: "15px", width: "15px" }} />
        <img src={RejectIcon} style={{ height: "15px", width: "15px" }} />
      </Space>
    ),
  },
];

const AllPosts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState([
    {
      key: "1",
      Title:
        "Forging Linkages Across Regions for the Wide-ranging Asian Elephant",
      Author: "Shekar Dattatri",
      Date: "12/06/22 ",
      Status: ["Aproved"],
    },
    {
      key: "2",
      Title:
        "Forging Linkages Across Regions for the Wide-ranging Asian Elephant",
      Author: "Shekar Dattatri",
      Date: "12/06/22 ",
      Status: ["Aproved"],
    },
    {
      key: "3",
      Title:
        "Forging Linkages Across Regions for the Wide-ranging Asian Elephant",
      Author: "Shekar Dattatri",
      Date: "12/06/22 ",
      Status: ["Aproved"],
    },
    {
      key: "4",
      Title:
        "Forging Linkages Across Regions for the Wide-ranging Asian Elephant",
      Author: "Shekar Dattatri",
      Date: "12/06/22 ",
      Status: ["Aproved"],
    },
    {
      key: "5",
      Title:
        "Forging Linkages Across Regions for the Wide-ranging Asian Elephant",
      Author: "Shekar Dattatri",
      Date: "12/06/22 ",
      Status: ["Aproved"],
    },
  ]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div className={styles.all_post_main_container}>
      <div className={styles.all_post_container}>
        <div className={styles.all_post_top_row}>
          <div className={styles.all_post_top_row_heading}>All Posts</div>
          <div className={styles.all_post_top_row_actions}>
            <select className={styles.all_post_sort_by}>
              <option value="jack">Sort by</option>
              <option value="jack">Jack</option>
              <option value="jack">Jack</option>
            </select>

            <button
              className={`${styles.all_post_buttons} ${styles.search_post_all_post}`}
            >
              Search Post
            </button>
            <Input
              size="large"
              className={styles.all_post_buttons}
              prefix={<SearchOutlined />}
            />
          </div>
        </div>
        <div className={styles.all_post_table}>
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
            pagination={{ alignment: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
