import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "../assets/css/Calculator.css";

const Calculator = ({ onclose }) => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(24);
  const [loanEMI, setLoanEMI] = useState(2273);
  const [totalInterest, setTotalInterest] = useState(4574);
  const [totalAmount, setTotalAmount] = useState(54547);
  const chartRef = useRef();
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Total Interest", "Principal Loan Amount"],
          datasets: [
            {
              data: [4574, 50000],
              backgroundColor: ["#32cd32", "#e63946"],
              borderWidth: 0,
            },
          ],
        },
      });
    }
  }, []);

  const calculateEMI = () => {
    let interest = interestRate / 12 / 100;
    let emi =
      loanAmount *
      interest *
      (Math.pow(1 + interest, loanTenure) /
        (Math.pow(1 + interest, loanTenure) - 1));
    return emi;
  };

  const updateData = (emi) => {
    setLoanEMI(Math.round(emi));
    let totalAmountValue = Math.round(loanTenure * emi);
    setTotalAmount(totalAmountValue);
    let totalInterestPayable = Math.round(totalAmountValue - loanAmount);
    setTotalInterest(totalInterestPayable);
    updateChart(totalInterestPayable);
  };

  const updateChart = (totalInterestPayableValue) => {
    chartInstanceRef.current.data.datasets[0].data[0] =
      totalInterestPayableValue;
    chartInstanceRef.current.data.datasets[0].data[1] = loanAmount;
    chartInstanceRef.current.update();
  };

  const handleCalculate = () => {
    let emi = calculateEMI();
    updateData(emi);
  };

  return (
    <div className="loan-calculator">
      <div className="top">
        <div className="head-button">
          <h2>Loan Calculator</h2>
          <div className="close-btn" onClick={onclose}>
            X
          </div>
        </div>
        <div>
          <div className="group">
            <div className="title">Amount</div>
            <input
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              className="loan-amount"
            />
          </div>

          <div className="group">
            <div className="title">Interest Rate</div>
            <input
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="interest-rate"
            />
          </div>

          <div className="group">
            <div className="title">Tenure (in months)</div>
            <input
              type="text"
              value={loanTenure}
              onChange={(e) => setLoanTenure(parseFloat(e.target.value))}
              className="loan-tenure"
            />
          </div>
        </div>
      </div>

      <div className="result">
        <div className="left">
          <div className="loan-emi">
            <h3>Loan EMI</h3>
            <div className="value">{loanEMI}</div>
          </div>

          <div className="total-interest">
            <h3>Total Interest Payable</h3>
            <div className="value">{totalInterest}</div>
          </div>

          <div className="total-amount">
            <h3>Total Amount</h3>
            <div className="value">{totalAmount}</div>
          </div>

          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate
          </button>
        </div>

        <div className="right">
          <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

Calculator.propTypes = onclose;
