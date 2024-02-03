import React from 'react'
import "./userCard.css"
import { UserModel } from '../../../models/responses/users/GetUser'
import { Table } from 'react-bootstrap'
type Props = {
  user: UserModel
}

const UserCard = (props: Props) => {
  return (
    <div className='userCard'>
       
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.user.id}</td>
            </tr>
          </tbody>
        </Table>

    </div>
  )
}

export default UserCard