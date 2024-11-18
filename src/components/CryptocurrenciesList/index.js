import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencies: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptocurrencies: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencies, isLoading} = this.state

    return (
      <div className="crypto-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BBFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className=""
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="currencyItem-container">
              <li className="header">
                <p className="title">Coin Type</p>
                <div className="values">
                  <p className="values-text">USD</p>
                  <p className="values-text">EURO</p>
                </div>
              </li>
              {cryptocurrencies.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  currencyDetails={eachCurrency}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
