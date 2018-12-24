import React, { Component } from 'react';
import Element from './components/Element';
import Display from './components/Display';
import { connect } from 'react-redux';
import { clickButton, clickOperator, clearDisplay } from './actions/calculatorActions';
import './styles.css';
import '../../styles.css';

function mapDispatchToProps(dispatch) {
    return {
        clickButton: display => dispatch(clickButton(display)),
        clearDisplay: () => dispatch(clearDisplay())
    };
}

const mapStateToProps = ({ Calculator }) => {
    return {
        display: Calculator.display,
        isFinished: Calculator.isFinished
    };
};
class CalculatorClass extends Component {
    constructor(props) {
        super(props);

        this.operators = ["*", "+", "/", "-"];
    }

    onClick = (value) => {
        let result;
        let last = this.props.display.split('')[this.props.display.length - 1];
        let change = {
            display: this.props.display,
            isFinished: false
        }
        if (this.props.display === '0') {
            change.display = '';
        }
        switch (value) {
            case '*':
            case '-':
            case '/':
            case '+':
                this.repeatedOperator(value, last, change);
                break;
            case '=':
                if (this.operators.includes(last)) {
                    let cut = this.props.display.slice(0, (this.props.display.length - 1));
                    result = eval(cut).toString();
                } else {
                    result = eval(this.props.display).toString();
                }
                change.display = result;
                change.isFinished = true;
                this.props.clickButton({change});
                break;
            case 'C':
                this.props.clearDisplay();
                break;
            default:
                if (this.props.isFinished) {
                    change.display = value;
                    change.isFinished = false;
                    this.props.clickButton({change});
                } else {
                    change.display += value;
                    this.props.clickButton({change});
                }

                break;
        }
    }

    repeatedOperator = (value, last, change) => {

        let regEx = /(0-9)*(\*|\+|\-|\/)(0-9)*/
        
        if (!(this.operators.includes(last))) {

            if (!(regEx.test(this.props.display))) {
                change.display += value;
                change.isFinished = false;
                this.props.clickButton({change});
            } else {
                let preResult = eval(this.props.display).toString();
                change.display = preResult + value;
                change.isFinished = false;
                this.props.clickButton({change});
            }
        } else {
            this.operators.map(operator => {
                if (last !== operator) {
                    let cut = this.props.display.slice(0, (this.props.display.length - 1));
                    cut += value;
                    change.display = cut;
                    change.isFinished = false;
                    this.props.clickButton({change});
                }
            })
        }

    }

    render() {
        return (
            <>
                <h1>Calculator</h1>
                <div className="calculator">
                    <Display value={this.props.display} />
                    <div>
                        <div className="row">
                            <Element onClick={this.onClick} value="7" />
                            <Element onClick={this.onClick} value="8" />
                            <Element onClick={this.onClick} value="9" />
                            <Element onClick={this.onClick} value="/" />
                        </div>
                        <div className="row">
                            <Element onClick={this.onClick} value="4" />
                            <Element onClick={this.onClick} value="5" />
                            <Element onClick={this.onClick} value="6" />
                            <Element onClick={this.onClick} value="*" />
                        </div>
                        <div className="row">
                            <Element onClick={this.onClick} value="1" />
                            <Element onClick={this.onClick} value="2" />
                            <Element onClick={this.onClick} value="3" />
                            <Element onClick={this.onClick} value="-" />
                        </div>
                        <div className="row">
                            <Element onClick={this.onClick} value="0" />
                            <Element onClick={this.onClick} value="C" />
                            <Element onClick={this.onClick} value="=" />
                            <Element onClick={this.onClick} value="+" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const Calculator = connect(mapStateToProps, mapDispatchToProps)(CalculatorClass);

export default Calculator;