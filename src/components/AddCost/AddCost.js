import React, { Component, createRef } from 'react';

import s from './AddCost.module.css';
import RadioButton from './RadioButton';

const buttonsValues = [
  'Main expences',
  'Food',
  'Car',
  'Entertainment',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Other expences',
];

class AddCost extends Component {
  state = {
    comment: '',
    category: '',
    amount: '',
    date: '',
  };

  dateRef = createRef();

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'date') {
      this.setState({ date: this.dateRef.current.valueAsNumber });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className={s.form}>
        <div className={s.heading_wrapper}>
          <div className={s.amount_wrapper}>
            <input
              className={s.amount}
              type="number"
              name="amount"
              min="0"
              max="99999"
              step="0.01"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={s.date_wrapper}>
            <input
              className={s.date}
              name="date"
              type="date"
              ref={this.dateRef}
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={s.categories_wrapper}>
          <h2 className={s.categories_title}>Categories</h2>
          {buttonsValues.map(value => (
            <RadioButton
              value={value}
              key={value}
              onChange={this.handleChange}
            />
          ))}
        </div>
        <div className={s.comments_wrapper}>
          <h2 className={s.comments_heading}>Comments</h2>
          <textarea
            className={s.comments}
            type="text"
            name="comments"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className={s.button}>
          Add
        </button>
      </form>
    );
  }
}

export default AddCost;