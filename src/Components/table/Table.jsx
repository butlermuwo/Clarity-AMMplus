import React from "react";
import './table.css'
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { useFetch } from "../../hooks/useFetch";


  const Table = () => {
    
  const tokens = ['WETH', 'USDC'];
  const sortBy = '-expected_net_returns';

  const url = `https://clarity-api.window.finance/v1/pools?filter[tokens]=${tokens}&sort=${sortBy}`;
  const {data:result} = useFetch(url)

  const columns = [
    {
      name: "Investments",
      selector: "name",
      sortable: true
    },
    {
      name: "Sharpe Ratio",
      selector: "sharpeRatio",
      sortable: true
    },
    {
      name: "Volatility",
      selector: "volatility",
      sortable: true
    }
  ];

  const data = [];

  // console.log(result.results[0].tokens[0].name)
  // console.log(result.results[0])

result && result.results.map(coin => data.push({id:coin.tokens[0].id,
  name:coin.tokens[0].name,
  sharpeRatio:coin.sharpe_ratio_30d,
  volatility: coin.volatility_30
})) 

    return (
      <div className="card-container">
        <h2>Sharpe Ratio & Volatility</h2>
        <DataTable
          // title="Sharpe Ratio & Volatility"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          pointerOnHover
          defaultSortField="name"
          sortIcon={<i className="fa fa-fw fa-sort" />}
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 20, 30]}
          noDataComponent={<div>No data</div>}
        />
      </div>
    );
  };

  export default Table
  