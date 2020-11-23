import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showAdditionalCards: false
    };
  }

  handleClick() {
    this.setState({ showAdditionalCards: !this.state.showAdditionalCards });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <Card backgroundColor='bg-warning'></Card>
          </div>
          <div className='col-md-4'>
            <Card backgroundColor='bg-primary'></Card>
          </div>
          <div className='col-md-4'>
            <Card backgroundColor='bg-success'></Card>
          </div>
        </div>
        {this.state.showAdditionalCards && (
          <div className='row mt-4'>
            <div className='col-md-4'>
              <Card backgroundColor='bg-warning'></Card>
            </div>
            <div className='col-md-4'>
              <Card backgroundColor='bg-primary'></Card>
            </div>
            <div className='col-md-4'>
              <Card backgroundColor='bg-success'></Card>
            </div>
          </div>
        )}
        <div className='row mt-4'>
          <div className='col-md-12'>
            <div className='d-flex  justify-content-center'>
              <button onClick={this.handleClick}>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
