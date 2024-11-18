import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="item-container">
      <div className="img-text">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
