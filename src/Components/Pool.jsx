import "./pool/pool.css"
import { useFetch } from '../hooks/useFetch';


const Poolz = () => {
  // const [APIdata, setData] = useState();
  const tokens = ['WETH', 'USDC'];
  const sortBy = '-expected_net_returns';

  const url = `https://clarity-api.window.finance/v1/pools?filter[tokens]=${tokens}&sort=${sortBy}`;
  const {data} = useFetch(url)

  // setData(data)
  return (
    <div >
      {!data && <h3>Loading .....</h3> }
      <div className="grid-container">
      {
        data && data.results.map(blockchain => (
          <div >

            <h2>{blockchain.tokens[0].name}</h2>
            {/* <p>Description: {blockchain.tokens[0].description}</p> */}
            <p>expected_net_returns: {blockchain.expected_net_returns
}
</p>

          </div>
        
        ))
        
      }
</div>
    </div>
  )
};

export default Poolz;
