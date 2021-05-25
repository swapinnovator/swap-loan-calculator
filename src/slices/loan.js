import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  loan: {
    interest: 0,
    principle: 0,
    emi: 0,
    total: 0
  }
}

// A slice for posts with our three reducers
const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    calculateLoanRequest: (state) => {
      state.loading = true
    },
    calculateLoanSuccess: (state, {payload}) => {
      state.loan = payload
      state.loading = false
      state.hasErrors = false
    },
    calculateLoanFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
});


// Three actions generated from the slice
export const {calculateLoanRequest, calculateLoanSuccess, calculateLoanFailure} = loanSlice.actions

// A selector
export const loanSelector = (state) => state.loan

// The reducer
export default loanSlice.reducer

// Asynchronous thunk action
export function calculateLoan(amount, interestRate, month, type) {
  return async (dispatch) => {

    dispatch(calculateLoanRequest());

    let emi = 0, principle = 0, interest = 0, total = 0;
    amount = Number(amount);

    if(amount > 0 && interestRate > 0 && month > 0){

      if(type == 'reducing-balance'){
        interestRate = interestRate/ (12 * 100);
        emi = Number((amount * interestRate * Math.pow(1 + interestRate, month)) / (Math.pow(1 + interestRate, month) - 1));
        emi = emi + 0.000414;
      } else {
        emi = Number(amount + (amount * (interestRate/100) * month/12))/month;
      }


      total = emi * month;
      interest = total - amount;
      principle = amount;
    }


    try {
      let data = {
        interest : interest,
        principle: principle,
        emi: emi,
        total: total
      }
      dispatch(calculateLoanSuccess(data))
    } catch (error) {
      dispatch(calculateLoanFailure())
    }
  }
}
