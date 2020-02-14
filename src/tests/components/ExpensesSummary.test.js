import React from 'react'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow} from 'enzyme';
configure({ adapter: new Adapter() });


test('should correct render expenses summary ',()=>{
   const wrapper =shallow(<ExpensesSummary expenseCounter={1} expensesTotal={235}/>)
   expect(wrapper).toMatchSnapshot();
})


test('should correct render expenses summary ',()=>{
    const wrapper =shallow(<ExpensesSummary expenseCounter={23} expensesTotal={23566444}/>)
    expect(wrapper).toMatchSnapshot();
})