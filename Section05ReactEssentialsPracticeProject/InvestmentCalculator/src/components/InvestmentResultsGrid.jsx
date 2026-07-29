import { calculateInvestmentResults } from '../util/investment.js';
import { formatter } from '../util/investment.js';

import { calculateInvestmentResultsOriginal } from '../util/investment.js';

export default function InvestmentResultsGrid({investmentValues}) {
  const investmentAnnualResults = calculateInvestmentResults(investmentValues);
  const investmentAnnualResultsOrig = calculateInvestmentResultsOriginal(investmentValues);

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentAnnualResults.map((yearResults => (
          <tr key={yearResults.year}>
            <td>{yearResults.year}</td>
            <td>{formatter.format(yearResults.valueEndOfYear)}</td>
            <td>{formatter.format(yearResults.interest)}</td>
            <td>{formatter.format(yearResults.totalInterest)}</td>
            <td>{formatter.format(yearResults.investedCapital)}</td>
          </tr>
        )))
        }
      </tbody>
    </table>
  );
}