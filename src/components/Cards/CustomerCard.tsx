import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserModel } from '../../models/user/UserModel';
import UserService from '../../services/UserService';
import { useSelector } from 'react-redux';

type Props = {
  customer : UserModel;
}

const CustomerCard = (props: Props) => {

  const params = useParams<{ id: string }>();
  const [customers, setCustomers] = useState<UserModel>();


  const getCustomer = async(id: string) => { 
    try {
      const response = await UserService.getById(parseInt(id));
      setCustomers(response.data.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  useEffect(() => {
    if (params.id){
     getCustomer(params.id)
    }
  }, [params.id]);

  return (
    <div className='customerCard'>
      {customers?.name}
      </div>
  )
}

export default CustomerCard;