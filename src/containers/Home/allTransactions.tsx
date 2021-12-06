import React, { useEffect, useState } from "react";
import { Table, Tooltip } from "antd";
import { getTimeDifference, setValue } from "../../utils/common";
function AllTransactions(props: any) {
  const { transactions } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (transactions.length) {
      let temp = transactions.map((transaction: any, index: number) => {
        transaction["key"] = index;
        // transaction["block_hash"] =
        //   transaction["block_hash"].substring(0, 15) + "...";
        // transaction["to_address"] =
        //   transaction["to_address"].substring(0, 15) + "...";
        // transaction["from_address"] =
        //   transaction["from_address"].substring(0, 15) + "...";
        // transaction["hash"] = transaction["hash"].substring(0, 15) + "...";
        // transaction["input"] = transaction["input"].substring(0, 15) + "...";
        return transaction;
      });
      setData(temp);
    }
  }, [transactions]);
  const columns = [
    {
      title: "Txn Hash",
      dataIndex: "hash",
      key: "hash",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Block number",
      dataIndex: "block_number",
      key: "block_number",
      render: (data: string) => {
        return <Tooltip title={data}>{data.substring(0, 15) + "..."}</Tooltip>;
      },
    },
    {
      title: "Block timestamp",
      dataIndex: "block_timestamp",
      key: "block_timestamp",
      render: (time: string) => getTimeDifference(time) + "ago",
    },
    {
      title: "From address",
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
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (balance: string) => setValue(parseInt(balance)),
    },
    {
      title: "Gas",
      dataIndex: "gas",
      key: "gas",
    },
    {
      title: "Gas price",
      dataIndex: "gas_price",
      key: "gas_price",
    },
    // {
    //   title: "Block hash",
    //   dataIndex: "block_hash",
    //   key: "block_hash",
    // },
    // {
    //   title: "Input",
    //   dataIndex: "input",
    //   key: "input",
    // },
    // {
    //   title: "Nonce",
    //   dataIndex: "nonce",
    //   key: "nonce",
    // },
    // {
    //   title: "Receipt contract address",
    //   dataIndex: "receipt_contract_address",
    //   key: "receipt_contract_address",
    // },
    // // {
    // //   title: "Receipt cumulative gas used",
    // //   dataIndex: "receipt_cumulative_gas_used",
    // //   key: "receipt_cumulative_gas_used",
    // // },
    // {
    //   title: "Receipt gas used",
    //   dataIndex: "receipt_gas_used",
    //   key: "receipt_gas_used",
    // },
    // {
    //   title: "Receipt root",
    //   dataIndex: "receipt_root",
    //   key: "receipt_root",
    // },
    // {
    //   title: "Receipt status",
    //   dataIndex: "receipt_status",
    //   key: "receipt_status",
    // },
    // {
    //   title: "Transaction index",
    //   dataIndex: "transaction_index",
    //   key: "transaction_index",
    // },
  ];
  return (
    <div className="portfoilioTracker">
      {data.length > 0 ? (
        <Table dataSource={data} columns={columns} />
      ) : (
        <h2>No Data found</h2>
      )}
    </div>
  );
}

export default AllTransactions;
