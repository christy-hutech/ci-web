import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import "./index.css";
import RejectIcon from "../../../assets/images/reject-icon.png";
import EditIcon from "../../../assets/images/edit-icon.png";
import ProfileImg from "../../../assets/images/organization-img.png";
import ViewIcon from "../../../assets/images/view-icon.png";
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    render: (text) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems:'center'
        }}
      >
        <img src={ProfileImg} />
        <div style={{marginLeft:'10px'}}>{text}</div>
      </div>
    ),
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
  },
  {
    title: "Website",
    dataIndex: "Website",
    key: "Website",
    render: (text) => <a style={{ color: "red" }}>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <img src={ViewIcon} style={{ height: "15px" }} />
        <img src={EditIcon} style={{ height: "15px" }} />
        <img src={RejectIcon} style={{ height: "15px" }} />
      </Space>
    ),
  },
];

const AllOrganization = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState([
    {
      key: "1",
      Name: "John Brown",
      Address: "#703, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
      Website: "www.sitename.comrk",
      Action: ["Aproved"],
    },
    {
      key: "2",
      Name: "Jim Green",
      Address: "#703, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
      Website: "www.sitename.com",
      Action: ["Aproved"],
    },
    {
      key: "3",
      Name: "Joe Black",
      Address: "#703, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
      Website: "www.sitename.com",
      Action: ["Aproved"],
    },
    {
      key: "4",
      Name: "Joe Black",
      Address: "#703, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
      Website: "www.sitename.com",
      Action: ["Aproved"],
    },
    {
      key: "5",
      Name: "Joe Black",
      Address: "#703, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
      Website: "www.sitename.com",
      Action: ["Aproved"],
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
    <div className="all-organization-main-container">
      <div className="all-organization-container">
        <div className="all-organization-top-row">
          <div className="all-organization-top-row-heading">
            All organizations
          </div>
          <div className="all-organization-top-row-actions">
            <button className="all-organization-button-1">
              Search
            </button>
            <Input
              size="large"
              className="all-organization-button-2"
              prefix={<SearchOutlined />}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="all-organization-table">
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOrganization;
