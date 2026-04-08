import { useState } from 'react';

import { INITIAL_INVESTMENT_VALUES } from './util/investment.js';

import Header from './components/Header.jsx';
import UserInputBackground from './components/UserInputBackground.jsx';
import InvestmentResultsGrid from './components/InvestmentResultsGrid.jsx';

function App() {
  const [investmentValues, setInvestmentValues] = useState(INITIAL_INVESTMENT_VALUES);

  function handleUserInputChange(propName, newValue) {
    if (propName === "duration") {
      newValue = Math.round(newValue);
    }
    setInvestmentValues(prevInvestmentValues => {
      const updatedInvestmentValues = {
        ...prevInvestmentValues,
        [propName]: newValue
      };
      return updatedInvestmentValues;
    });
  }

  return (
    <main>
      <Header />
      <UserInputBackground
        onUserInputChange={handleUserInputChange}
        currentValues={investmentValues}
      />
      <InvestmentResultsGrid
        investmentValues={investmentValues}
      />
    </main>
  );
}

export default App