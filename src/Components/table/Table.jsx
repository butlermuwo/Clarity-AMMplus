import React from "react";
import './table.css'
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";

const columns = [
    {
      name: "Investments",
      selector: "name",
      sortable: true
    },
    {
      name: "Sharpe Ratio",
      selector: "email",
      sortable: true
    },
    {
      name: "Volatility",
      selector: "phone",
      sortable: true
    }
  ];

  const data = [
    { id: 1, name: "STETH", email: "0.6%", phone: "5.7%" },
    { id: 2, name: "USDC", email: "0.6%", phone: "5.7%" },
    { id: 3, name: "WETH", email: "0.6%", phone: "5.7%" },
    { id: 4, name: "ETH", email: "0.6%", phone: "5.7%" },
    { id: 5, name: "Terra", email: "0.6%", phone: "5.7%" }
  ];

  const Table = () => {
    return (
      <div className="card-container">
        <h2>Sharpe Ratio & Volatility</h2>
        <DataTable
          // title="Sharpe Ratio & Volatility"
          columns={columns}
          data={data}
          // pagination
          highlightOnHover
          pointerOnHover
          defaultSortField="name"
          // sortIcon={<i className="fa fa-fw fa-sort" />}
          // paginationPerPage={5}
          // paginationRowsPerPageOptions={[5, 10, 20, 30]}
          // noDataComponent={<div>No data</div>}
        />
      </div>
    );
  };

  export default Table
  