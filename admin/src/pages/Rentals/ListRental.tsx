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
      let response;
      if (filterStatus === "Active") {
        response = await RentalService.getAllActiveRentals();
      } else if (filterStatus === "Passive") {
        response = await RentalService.getAllPassiveRentals();
      } else {
        response = await RentalService.getAll();
      }
      const allRentals = response.data.data;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageRentals = allRentals.slice(startIndex, endIndex);
      setRentals(pageRentals);
      setTotalPages(Math.ceil(allRentals.length / pageSize));
    } catch (error) {
      console.log("Error fetching rentals", error);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    getRentals();
  }, [currentPage, filterStatus]); // currentPage ve filterStatus durumlarını bağımlılıklara ekle

  return (
    <div className="booking container">
      <div className="secContainer">
        <div className="booking__wrapper">
          <div className="titleContainer">
            <h2>Rentals</h2>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              className="bg-secondary px-5 py-2 rounded"
              title="Add New Rental"
              to="/add-rental"
            >
              <IoMdAdd />
            </Link>
          </div>

          <div className="filter__widget-wrapper">
            <div className="filter__widget-01">
              <select
                name="status"
                title="Status"
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Passive">Passive</option>
              </select>
            </div>

            <div className="filter__widget-01">
              <select name="." title=".">
                {rentals.map((rental: RentalModel) => (
                  <option key={rental.id} value={rental.startDate.toString()}>
                    {formatDate(new Date(rental.startDate))}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="booking__car-list">
            {rentals.map((rental: RentalModel) => (
              <CarItem rental={rental} key={rental.id} />
            ))}
          </div>

          <div className="pagination d-flex justify-content-center w-0 my-5">
            <button
              className="mx-3 px-5"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              {currentPage}/{totalPages}
            </span>
            <button
              className="mx-3 px-5"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRental;
