import React, {useState ,useEffect} from "react";
import "../assets/styles/main.scss";
import CurrencyField from "../components/CurrencyField";
import InfoBlock from "../components/InfoBlock";
//icon
import { TiArrowSync } from "react-icons/ti";

const StockCurrencies: React.FC = () => {
  // array of currency names
  const [optionsData, setOptionsData] = useState<string[]>([]);
  // input values
  const [firstAmount, setFirstAmount] = useState<string>("");
  const [secondAmount, setSecondAmount] = useState<string>("");
  // currency names
  const [firstCurrency, setFirstCurrency] = useState<any>("EUR");
  const [secondCurrency, setSecondCurrency] = useState<any>("CAD");
  // currency rates
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("https://freecurrencyapi.net/api/v2/latest?apikey=7b0a8480-9b13-11ec-9732-afc270046df4")
      .then((response) => response.json())
      .then((json) => {
        setRates(json.data);
        setOptionsData([...Object.keys(json.data)]);
      });
  }, []);

  useEffect(() => {
    if (firstAmount) {
      setSecondAmount(((Number(firstAmount) * rates[secondCurrency]) / rates[firstCurrency]).toFixed(3));
    } else if (Number(firstAmount) === 0) {
      setSecondAmount("0");
    }
  }, [rates, firstAmount, firstCurrency, secondCurrency]);

  const handleFirstInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFirstAmount(e.target.value);
  };

  const handleFirstCurrency: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFirstCurrency(e.target.value);
  };

  const handleSecondCurrency: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSecondCurrency(e.target.value);
  };

  const switchFields = () => {
    if (Number(secondAmount) === 0) {
      setFirstAmount("");
    } else {
      setFirstAmount(secondAmount);
    }
    setSecondAmount(firstAmount);
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  };

  return (
    <div className="StockCurrencies">
      <div className="StockCurrencies-container">
        <InfoBlock 
          amount={secondAmount} 
          currencyName={secondCurrency} 
        />
        <div className="StockCurrencies-container-converter">
          <CurrencyField
            amount={firstAmount}
            currencyName={firstCurrency}
            onSelectChange={handleFirstCurrency}
            onInputChange={handleFirstInput}
            optionsData={optionsData}
          />
          <div className="StockCurrencies-container-converter-switch">
            <TiArrowSync className="icon" onClick={switchFields} />
          </div>
          <CurrencyField
            amount={secondAmount}
            currencyName={secondCurrency}
            onSelectChange={handleSecondCurrency}
            optionsData={optionsData}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default StockCurrencies;
