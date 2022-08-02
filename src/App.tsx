import "./styles/App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { AppContext } from "./context";
import { IState } from "./model";
import { useState } from "react";

const initialState: IState = {
  principalAmount: 0,
  interestAmount: 0,
  totalAmount: 0,
  monthlyPayment: 0,
  currency: "GH₵",
};

function App() {
  const [state, dispatch] = useState(initialState);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <AppContext.Provider value={{ state, dispatch }}>
        <main>
          <section>
            <div className="info">
              This is a{" "}
              <span className="highlight">
                SIMPLE INTEREST LOAN PAYMENT CALCULATOR.
              </span>{" "}
              This calculator will help you determine the monthly payments on a
              loan. Simply enter the loan amount, term and interest rate in the
              fields below and click calculate
            </div>
          </section>

          <section>
            <div className="row">
              <div className="col col-1">
                <Form />
              </div>
              <div className="col col-2">
                <Results />
              </div>
            </div>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
