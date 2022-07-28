import React, {Component} from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(rgb(52,52,52), rgb(166,166,166));
`;

export const Calculator = styled.div`
  width: 280px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .result {
    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 40px;
    text-align: right;
  }

  .wrapper {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    button {
      width: 60px;
      height: 60px;
      border: 0;
      border-radius: 50%;
      background-color: #343434;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
    }

    .special_operator {
      background-color: #a6a6a6;
      color: #000;
    }
    .operator {
      background-color: #fe9603;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export default class App extends Component {

  state = {
    expression: 0,
    initExpression: true,
  }

  handleNumbers = (e) => {
    if(this.state.initExpression){
      this.setState({
        expression: e.target.value,
        initExpression: false,
      })
    }else {
      this.setState({
        expression: this.state.expression + e.target.value,
      })
    }
  }

  handleOperators = (e) => {
    this.setState({
      expression: this.state.expression + e.target.value,
      initExpression: false,
    })
  }

  calculate = () => {
    this.setState({
      expression: Number(eval(this.state.expression)),
      initExpression: true,
    })
  }

  changeSign = () => {
    if(!isNaN(this.state.expression)){
      this.setState({
        expression: this.state.expression * -1,
      })
    }else {
      console.log('Não é um número')
    }
  }

  percentage = () => {
    if(!isNaN(this.state.expression)){
      this.setState({
        expression: this.state.expression / 100,
      })
    }
  }

  cleanExpression = () => {
    this.setState({
      expression: '0',
      initExpression: true,
    })
  }

  render(){
    return(
      <Container>
        <Title>
          <span>Calculator</span>
        </Title>
        <Calculator>
          <div className='result'>
            {this.state.expression}
          </div>
          <div className='wrapper'>
            <button onClick={this.cleanExpression} className='special_operator'>AC</button>
            <button onClick={this.changeSign} className='special_operator'>+/-</button>
            <button onClick={this.percentage} className='special_operator'>%</button>
            <button onClick={this.handleOperators} className='operator' value={'/'}>/</button>
            <button onClick={this.handleNumbers} value={7}>7</button>
            <button onClick={this.handleNumbers} value={8}>8</button>
            <button onClick={this.handleNumbers} value={9}>9</button>
            <button onClick={this.handleOperators} className='operator' value={'*'}>x</button>
            <button onClick={this.handleNumbers} value={4}>4</button>
            <button onClick={this.handleNumbers} value={5}>5</button>
            <button onClick={this.handleNumbers} value={6}>6</button>
            <button onClick={this.handleOperators} className='operator' value={'-'}>-</button>
            <button onClick={this.handleNumbers} value={1}>1</button>
            <button onClick={this.handleNumbers} value={2}>2</button>
            <button onClick={this.handleNumbers} value={3}>3</button>
            <button onClick={this.handleOperators} className='operator' value={'+'}>+</button>
            <button onClick={this.handleNumbers} value={0}>0</button>
            <button onClick={this.handleNumbers} value={'.'}>,</button>
            <button style={{visibility: 'hidden'}}>,</button>
            <button onClick={this.calculate} className='operator' value={'='}>=</button>
          </div>
        </Calculator>
      </Container>
    )
  }
}