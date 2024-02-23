import React, { useEffect, useState } from "react";

import { RentalModel } from "../../models/responses/rentals/GetRental";
import { Link, useNavigate, useParams } from "react-router-dom";
import RentalService from "../../services/RentalService";
import { differenceInDays } from "date-fns";
import { parseISO } from "date-fns/esm";
import OverlayLoaderTest from "../../components/OverlayLoader/OverlayLoaderTest";
import { Field, Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { UserModel } from "../../models/responses/users/GetUser";
import UserService from "../../services/UserService";
import "./styles/rentals.css";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { UpdateRentalRequest } from "../../models/requests/rentals/UpdateRentalRequest";

type Props = {};

const DetailRental = (props: Props) => {
  const [rentalDetail, setRentalDetail] = useState<RentalModel>();
  const [user, setUser] = useState<UserModel | undefined>();
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getUserDetail = async (id: number) => {
    await UserService.getById(id)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const getRentalDetail = async (id: string) => {
    await RentalService.getById(parseInt(id))
      .then((res) => {
        setRentalDetail(res.data.data);
        console.log(res.data.data.customer);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    if (params.id) {
      getRentalDetail(params.id);
    }
    if (rentalDetail?.customer.userId) {
      getUserDetail(rentalDetail.customer.userId);
    }
  }, [params.id, rentalDetail?.customer.userId]);

  const calculateDayCount = () => {
    if (rentalDetail?.startDate && rentalDetail?.endDate) {
      const startDate = new Date(rentalDetail.startDate.toString());
      const endDate = new Date(rentalDetail.endDate);
      const oneDay = 24 * 60 * 60 * 1000;
      const dayCount = Math.round(
        Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
      );
      return dayCount;
    }
    return null;
  };

  const formatPrice = (price?: number) => {
    if (price) {
      return price.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    }
    return null;
  };

  const UpdateRentalRequestSchema = Yup.object({
    totalPrice: Yup.number()
      .required("Daily price field cannot be empty.")
      .min(0, "Daily price must be greater than 0."),
  });
  const handleSubmit = async (values: UpdateRentalRequest) => {
    try {
      await RentalService.vehicleDelivery(values)
        .then(() => {
          toast.success("Rental updated successfully");
          setTimeout(() => {
            navigate("/rentals");
          }, 1500);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  if (!rentalDetail) return <OverlayLoaderTest />;

  return (
    <div className="booking container">
      <div className="secContainer shadow-rounded-box mb-2">
        <div className="customerContainer">
          <p>
            Name:{" "}
            <span>
              {user?.name} {user?.surname}
            </span>
          </p>
          <p>
            ID No: <span>{user?.idCardNumber}</span>
          </p>
          <p>
            Email: <span>{user?.email}</span>
          </p>
          <p>
            Phone: <span>{user?.phoneNumber}</span>
          </p>
        </div>
        <div className="carContainer">
          <p>
            Car Model:{" "}
            <span>
              {rentalDetail.car?.model.brand.name}{" "}
              {rentalDetail.car?.model.name} {rentalDetail.car?.year}
            </span>
          </p>
          <p>Plate: {rentalDetail.car.plate}</p>
        </div>
      </div>
      <div className="secContainer shadow-rounded-box">
        <div className="formContainer">
          <Formik
            validationSchema={UpdateRentalRequestSchema}
            validateOnBlur={true}
            initialValues={{
              id: rentalDetail.id,
              totalPrice: rentalDetail.totalPrice,
              startKilometer: rentalDetail.startKilometer,
              endKilometer: rentalDetail.endKilometer,
              startDate: rentalDetail.startDate,
              endDate: rentalDetail.endDate,
              returnDate: rentalDetail.returnDate,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <FormikInput
                    name="startKilometer"
                    label="Start Kilometer"
                    type="number"
                    disabled={true}
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <FormikInput
                    name="endKilometer"
                    label="End Kilometer"
                    type="number"
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <FormikInput
                    name="totalPrice"
                    label="Total Price"
                    type="number"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <FormikInput
                    name="startDate"
                    label="Start Date"
                    type="date"
                    disabled={true}
                  />
                </div>

                <div className="col-4">
                  <FormikInput name="endDate" label="End Date" type="date" />
                </div>
                <div className="col-4">
                  <FormikInput
                    name="returnDate"
                    label="Return Date"
                    type="date"
                  />
                </div>
              </div>

              <div className="btnContainer">
                <button type="submit" className="btn btn-sm btn-submit">
                  Save
                </button>
                <Link to="/rentals" className="btn btn-sm btn-cancel">
                  Cancel
                </Link>
              </div>
            </Form>
          </Formik>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </div>
  );
};

export default DetailRental;
