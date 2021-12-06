import React, { useEffect, useState } from "react";
import { Table, Tooltip } from "antd";
import { getTimeDifference, setValue } from "../../utils/common";
function Portfolio(props: any) {
  const { transactions } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (transactions.length) {
      let temp = transactions.map((transaction: any, index: number) => {
        transaction["key"] = index;
        return transaction;
      });
      setData(temp);
    }
  }, [transactions]);
  const columns = [
    {
      title: "Transaction Hash",
      dataIndex: "transaction_hash",
      key: "transaction_hash",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Block Timestamp",
      dataIndex: "block_timestamp",
      key: "block_timestamp",
      render: (time: string) => getTimeDifference(time) + "ago",
    },
    {
      title: "From Address",
      dataIndex: "from_address",
      key: "from_address",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "To address",
      dataIndex: "to_address",
      key: "to_address",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Block Number",
      dataIndex: "block_number",
      key: "block_number",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Block Hash",
      dataIndex: "block_hash",
      key: "block_hash",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (balance: string) => setValue(parseInt(balance)),
    },
  ];
  return (
    <div className="portfoilioTracker">
      {data.length > 0 ? (
        <Table dataSource={data} columns={columns} />
      ) : (
        <h2>No data found</h2>
      )}
    </div>
  );
}

export default Portfolio;
