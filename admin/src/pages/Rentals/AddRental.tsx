import React, { useEffect, useState } from 'react'
import "./styles/rentals.css"
import { ToastContainer, toast } from 'react-toastify'
import { FormikInput } from '../../components'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CustomerModel } from '../../models/responses/customers/GetCustomer'
import { UserModel } from '../../models/responses/users/GetUser'
import { EmployeeModel } from '../../models/responses/employees/GetEmployee'
import UserService from '../../services/UserService'
import CustomerService from '../../services/CustomerService'
import EmployeeService from '../../services/EmployeeService'
import { CarModel } from '../../models/responses/cars/GetCar'
import CarService from '../../services/CarService'
import RentalService from '../../services/RentalService'

type Props = {}

const AddRental = (props: Props) => {

  const navigate = useNavigate()
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date(new Date()));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date((new Date()).getTime() + 24 * 60 * 60 * 1000));
  const [customer, setCustomer] = useState<CustomerModel[]>()
  const [user, setUser] = useState<UserModel[]>()
  const [employee, setEmployee] = useState<EmployeeModel[]>()
  const [car, setCar] = useState<CarModel[]>()

  const handleStartDateChange = (newStartDate: Date | null) => {
    setSelectedStartDate(newStartDate);
  };

  useEffect(() => {

    handleRentalInfo()
  }, [])

  console.log(user, employee, customer);

  const handleRentalInfo = async () => {
    await UserService.getAll()
      .then((res: any) => {
        setUser(res.data.data)
      })
    await CustomerService.getAll()
      .then((res: any) => {
        setCustomer(res.data.data)
      })
    await EmployeeService.getAll()
      .then((res: any) => {
        setEmployee(res.data.data)
      })

    await CarService.getAllActiveCars()
      .then((res: any) => {
        setCar(res.data.data)
      })




  }

  const handleEndDateChange = (newEndDate: Date | null) => {
    if (newEndDate && selectedStartDate && newEndDate <= selectedStartDate) {
      alert(("The end date cannot be less than or equal to the start date"));
    } else {
      setSelectedEndDate(newEndDate);
    }
  };

  const rentalInitialValues = {
    carId: 0,
    customerId: 0,
    employeeId: 0,
    startDate: selectedStartDate,
    endDate: selectedEndDate,
    discount: { id: 0, discountCode: 'BOSS' }

  }


  const handleSubmit = async (values: any) => {
    console.log(values);

    await RentalService.addRental(values)
      .then((res) => {
        toast.success(res.data.message)
        setTimeout(() => {
            navigate("/rentals")
        },1500)
      })
      .catch((err) => {
        toast.error(err.response.data.message.startDate || err.response.data.message.endDate)
      })

  }


  return (
    <div className="cars container">
      <div className="secContainer">
        <div className="titleContainer">
          <h2>Add New Rental</h2>
        </div>
        <div className="formContainer">
          <Formik initialValues={rentalInitialValues} validateOnBlur={true} onSubmit={handleSubmit}>
            <Form>

              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label htmlFor="carId" className="form-label">Car</label>
                  <Field as="select" name="carId" className="form-control" >
                    {car?.map((car: CarModel) => (
                      <option key={car.id} value={car.id}>{car.model.brand.name + " " +
                        car.model.name + " " +
                        car.year + " " + car.color.name + " - " + car.bodyType + " - " + car.fuelType + " - " + car.gearType
                        + " - " + car.enginePower + " - " + car.cylinderCount + " --  " + car.dailyPrice + "₺"}</option>
                    ))}

                  </Field>
                  <ErrorMessage name="carId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label htmlFor="customerId" className="form-label">Customer</label>
                  <Field name="customerId" as="select" className="form-control"  >
                    {customer?.map((customer: CustomerModel) => (
                      <option key={customer.id} value={customer.id}>{customer.userName + " " + customer.userSurname}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="customerId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label htmlFor="employeeId" className="form-label">Employee</label>
                  <Field as="select" name="employeeId" className="form-control" >

                    {employee?.map((employee: EmployeeModel) => (
                      <option key={employee.id} value={employee.id}>{employee.user.name + " " + employee.user.surname + "  - " + employee.jobTitle.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="employeeId" component="div" className="alert-text" />
                </div>

              </div>

              <div className="row justify">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="startDate"
                    type="date"
                    label="Start Date"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="endDate"
                    type="date"
                    label="End Date"
                  ></FormikInput>
                </div>
              </div>

              <div className="btnContainer row">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>

          </Formik>
          <ToastContainer position="bottom-center" />
        </div>
      </div>



    </div>
  )
}

export default AddRental