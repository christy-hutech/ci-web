import "antd/dist/antd.css";
import { Divider, Table } from "antd";
import React from "react";
const columns = [
  {
    title: "Browser",
    dataIndex: "browser",
  },
  {
    titldfe: "IP",
    dataIndex: "ip",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    browser: `Chrome on Window`,
    ip: `86.188.154.225`,
    time: `June 20, 2022  10:34 PM`,
  });
}

const Accesslog = () => {
  return (
    <div>
      <Divider />
      <Table className="pagination-list-table" columns={columns} dataSource={data} />
    </div>
  );
};

export default Accesslog;
