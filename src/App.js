import React, { Component } from 'react';

import './App.css';
import Top from './Top/Top';
import InputBar from './InputBar/InputBar';
import ListContainer from './ListContainer/ListContainer';

class App extends Component {
  state = {
    type: 'income',
    description: '',
    value: '',
    completeListArr: [],
    incomeArr: [],
    expenseArr: [],
    total: 0
  }

  componentDidMount() {
    document.querySelector('.inputBar-description').focus();

    document.body.addEventListener('keydown', this.addListItemHandler);
  }

  addListItemHandler = (event) => {
    if (event.key !== 'Enter' && event.target.value !== 'addBtn') return;

    let { type, description, value } = this.state
    if (description.trim().length === 0 || value === '') return;

    let completeCopy = [...this.state.completeListArr];
    let id = Math.random() + Date.now();
    let item = { type, description, value, id };
    completeCopy.push(item);
    let incomeItems = completeCopy.filter(el => el.type === 'income');
    let incomeTotalValue = +incomeItems.map(el => el.value).reduce((acc, cur) => acc += +cur, 0);
    let expenseItems = completeCopy.filter(el => el.type === 'expense');
    let expenseTotalValue = +expenseItems.map(el => el.value).reduce((acc, cur) => acc += +cur, 0);
    let total = incomeTotalValue - expenseTotalValue;

    document.querySelector('.inputBar-description').focus();

    this.setState({ completeListArr: completeCopy, incomeArr: incomeItems, expenseArr: expenseItems, description: '', value: '', total: total });
  }

  deleteListItemHandler = (event, id) => {
    let completeCopy = [...this.state.completeListArr];

    completeCopy = completeCopy.filter(el => el.id !== id);
    let incomeItems = completeCopy.filter(el => el.type === 'income');
    let incomeTotalValue = +incomeItems.map(el => el.value).reduce((acc, cur) => acc += +cur, 0);
    let expenseItems = completeCopy.filter(el => el.type === 'expense');
    let expenseTotalValue = +expenseItems.map(el => el.value).reduce((acc, cur) => acc += +cur, 0);
    let total = incomeTotalValue - expenseTotalValue;

    this.setState({ completeListArr: completeCopy, incomeArr: incomeItems, expenseArr: expenseItems, total: total });
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Top changed={e => this.setState({ total: e.target.value })} total={this.state.total} />

          <InputBar type={this.state.type} description={this.state.description} value={this.state.value} changeType={e => this.setState({ type: e.target.value })} changeDescription={e => this.setState({ description: e.target.value })} changeValue={e => this.setState({ value: e.target.value })} clicked={this.addListItemHandler} />
        </div>

        <ListContainer iArr={this.state.incomeArr} eArr={this.state.expenseArr} deleteItem={this.deleteListItemHandler} />
      </div>
    );
  }
}
export default App;