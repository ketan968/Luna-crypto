import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { setValue } from "../../utils/common";
function TokenValues(props: any) {
  const { tokens } = props;
  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (text: string) => <Tag color="geekblue">{text}</Tag>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Network",
      dataIndex: "chain",
      key: "chain",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (balance: string) => setValue(parseInt(balance)),
    },
    {
      title: "Token Address",
      dataIndex: "token_address",
      key: "token_address",
    },
  ];
  return (
    <div className="tokenValuesContainer">
      <h2>Your tokens</h2>
      {tokens && tokens.length > 0 ? (
        <Table pagination={false} dataSource={tokens} columns={columns} />
      ) : (
        <h2>No Data Available</h2>
      )}
    </div>
  );
}

export default TokenValues;
