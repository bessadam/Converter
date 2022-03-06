import React from "react";
import Graph from "../assets/images/Graph-4.png";

interface InfoBlockProps {
  amount: string;
  currencyName: string;
}

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
  let { amount, currencyName } = props;
  
  return (
    <div className="StockCurrencies-container-info">
      <p className="StockCurrencies-container-info-title">Currency Converter</p>
      <div className="StockCurrencies-container-info-output">
        <p className="StockCurrencies-container-info-output-subtitle">
          You have:
        </p>
        <p className="StockCurrencies-container-info-output-number">
          {amount ? amount : 0}
        </p>
        <p className="StockCurrencies-container-info-output-subtitle">
          <b>{currencyName} </b>in current time.
        </p>
      </div>
      <div className="StockCurrencies-container-info-graph">
        <img alt="" src={Graph} />
      </div>
    </div>
  );
}

export default InfoBlock;
