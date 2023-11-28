import React, { Component } from "react";
import { auth } from "../../Config/Fire";
import { getDatabase, ref, push } from "firebase/database";
// import { Doughnut } from "react-chartjs-2";

import Transaction from "./Transaction/Transaction";

import "./Tracker.css";

export default class Tracker extends Component {
  state = {
    transactions: [],
    money: 0,
    transactionName: "",
    transactionType: "",
    price: "",
    currentUID: auth.currentUser.uid,
  };

  logout = () => {
    auth.signOut();
  };

  handleChange = (input, e) => {
    this.setState({
      [input]: e.target.value !== "0" ? e.target.value : "",
    });
  };

  addNewTransaction = () => {
    const {
      transactionName,
      transactionType,
      price,
      currentUID,
      money,
     
      transactions,
      transactionDate,
    } = this.state;

    if (transactionName && transactionType && price  && transactionDate) {
      const newTransaction = {
        id: transactions.length + 1,
        name: transactionName,
        type: transactionType,
        price: price,
        user_id: currentUID,
        date: transactionDate, 
      };

      const db = getDatabase();
      const transactionRef = ref(db, `Transaction/${currentUID}`);

      push(transactionRef, newTransaction)
        .then(() => {
          console.log("Success");
          this.setState({
            transactions: [...transactions, newTransaction],
            money:
              transactionType === "income"
                ? money + parseFloat(price)
                : money - parseFloat(price),
            transactionName: "",
            transactionType: "",
            price: "",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  componentWillMount(){
    const {currentUID, money} = this.state;
    let totalMoney = money;
    const BackUpState = this.state.transactions;
  }

  render() {
    const { user } = this.props;

   
  

    return (
      <div className="trackerBlock">
        <div className="welcome">
          <span>Hi, {user.displayName}!</span>
          <button className="exit" onClick={this.logout}>
            LogOut
          </button>
        </div>

        <div className="totalmoney">Rs. {this.state.money}</div>
        <div className="newTransactionBlock">
          <div className="newTransaction">
            <form>
              <input
                placeholder="Transaction Name"
                type="text"
                name="transactionName"
                value={this.state.transactionName}
                onChange={(e) =>
                  this.handleChange("transactionName", e)
                }
              />

<input
    type="date"
    name="transactionDate"
    value={this.state.transactionDate}
    onChange={(e) => this.handleChange("transactionDate", e)}
  />

              <div className="inputGroup">
                <select
                  name="type"
                  value={this.state.transactionType}
                  onChange={(e) =>
                    this.handleChange("transactionType", e)
                  }
                >
                  <option value="0">Type</option>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
                <input
                  placeholder="Price"
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={(e) => this.handleChange("price", e)}
                />
              </div>
            </form>
            <button
              className="addTransaction"
              onClick={() => this.addNewTransaction()}
            >
              + Add transaction
            </button>
          </div>
        </div>

        <div className="latestTransaction">
  <p>Latest Transactions</p>
  <ul>
    {this.state.transactions.map((transaction) => (
      <li key={transaction.id}>
        <div>{transaction.name}</div>
        <div className={transaction.type === 'income' ? 'income' : 'expense'}>
          {transaction.type === 'income' ? `+${transaction.price}` : `-${transaction.price}`}
        </div>
      </li>
    ))}
  </ul>
</div>


      </div>
    );
  }
}















