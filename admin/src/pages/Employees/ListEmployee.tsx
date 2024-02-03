import React from 'react'
import "./styles/employee.css"
import { EmployeeTable } from '../../components'
type Props = {}

const ListEmployee = (props: Props) => {
  return (
    <div className='employees'>
      <div className="secContainer">
        <p>Employee</p>
         <EmployeeTable />
      </div>
    </div>
  )
}

export default ListEmployee