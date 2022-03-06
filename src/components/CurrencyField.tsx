import React from "react";

interface CurrencyFieldProps {
  amount: string;
  currencyName: string;
  optionsData: string[];
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
}

const CurrencyField: React.FC<CurrencyFieldProps> = (props) => {
  let {
    amount,
    currencyName,
    optionsData,
    onInputChange,
    onSelectChange,
    disabled,
  } = props;

  return (
    <div className="StockCurrencies-container-converter-field">
      <select value={currencyName} onChange={onSelectChange}>
        {optionsData.map((item, key) => {
          return (
            <option value={item} key={key}>
              {item}
            </option>
          );
        })}
      </select>
      {disabled ? 
        <input
          onChange={onInputChange}
          value={amount}
          type="number"
          placeholder="0"
          disabled
        />
       : 
        <input
          onChange={onInputChange}
          value={amount}
          type="number"
          placeholder="0"
        />
      }
    </div>
  );
};

export default CurrencyField;
