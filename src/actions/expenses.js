import database from  '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense)=> ({
  type: 'ADD_EXPENSE',
  expense
});
  
export const startAddExpanse=(expenseData={})=>{
   
  return (dispatch)=>{
    const { 
     description='',
      note='',
      amount='',
      createdAt=''
     }=expenseData;
    const expense = {description,note,amount,createdAt}
     database.ref('expense').push(expense).then((ref)=>{
       dispatch(addExpense({
         id:ref.key,
         ...expense
      }))
     })
  }

}


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
