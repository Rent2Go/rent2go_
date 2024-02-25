import React, { useEffect, useState } from "react";
import { CarItem } from "../../components";
import { RentalModel } from "../../models/responses/rentals/GetRental";
import RentalService from "../../services/RentalService";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { get } from "http";

type Props = {};

const ListRental: React.FC<Props> = () => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);
  const [totalPages, setTotalPages] = useState<number>(2);

  const getRentals = async () => {
    try {
      const response = await RentalService.getAllPageable(currentPage, pageSize);
      setRentals(response.data.data);

    } catch (error) {
      console.log("Error fetching rentals", error);
    }
  };

  const getActiveRentals = async () => {
    try {
      const response = await RentalService.getAllActive();
      setRentals(response.data.data);
    } catch (error) {
      console.log("Error fetching active rentals", error);
    }
  };

  const getPassiveRentals = async () => {
    try {
      const response = await RentalService.getAllPassive();
      setRentals(response.data.data);
    } catch (error) {
      console.log("Error fetching passive rentals", error);
    }
  }




  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);

  };

  const totalRentals = async () => {
    const totalPage = await RentalService.getAll();
    setTotalPages(Math.ceil(totalPage.data.data.length / pageSize));
  }

  useEffect(() => {
    totalRentals();
    getActiveRentals();
  }, [currentPage]);


  const filteredRentals = rentals.filter(rental => {
    if (filterStatus === 'Active') {
      return rental.returnDate === null && !rental.car.active;
    } else if (filterStatus === 'Passive') {
      return rental.returnDate !== null || rental.car.active;
    } else {
      return true;
    }
  });

  return (
    <div className="booking container">
      <div className="secContainer">
        <div className="booking__wrapper">
          <div className="titleContainer">
            <h2>Rentals</h2>
          </div>
          <div className="d-flex justify-content-end">
            <Link className="bg-secondary px-5 py-2 rounded" title="Add New Rental" to="/add-rental"><IoMdAdd /></Link>
          </div>


          <div className="filter__widget-wrapper">
            <div className="filter__widget-01">
              <select name="." title="." onChange={(e) => {
                setFilterStatus(e.target.value);
                if (e.target.value === 'active') {
                  getActiveRentals();
                } else if (e.target.value === 'passive') {
                  getPassiveRentals();

                }
              }}>
                <option value="active">Active</option>
                <option value="passive">Passive</option>
              </select>

            </div>


            <div className="filter__widget-01">
              <select name="." title=".">
                {rentals.map((rental: RentalModel) => (
                  <option key={rental.id} value={rental.startDate.toString()}>{formatDate(new Date(rental.startDate))}</option>
                ))}
              </select>
            </div>
          </div>


          <div className="booking__car-list">
            {filteredRentals.map((rental: RentalModel) => (
              <CarItem rental={rental} key={rental.id} />
            ))}
          </div>

          <div className="pagination d-flex justify-content-center w-0 my-5">
            <button className="mx-3 px-5" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage}/{totalPages}</span>
            <button className="mx-3 px-5" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRental;
