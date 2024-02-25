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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [plateNumber, setPlateNumber] = useState<string>("");
  const [displayDate, setDisplayDate] = useState(new Date());

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
      let allRentals = response.data.data;
      if (selectedDate) {
        allRentals = allRentals.filter(
          (rental) =>
            new Date(rental.startDate).toDateString() ===
            selectedDate.toDateString()
        );
      }
      if (plateNumber) {
        allRentals = allRentals.filter((rental) =>
          rental.car.plate.includes(plateNumber)
        );
      }
      let totalPageCount = Math.ceil(allRentals.length / pageSize);
      if (totalPageCount === 0) {
        totalPageCount = 1;
      }
      if (currentPage > totalPageCount) {
        setCurrentPage(totalPageCount);
      }
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageRentals = allRentals.slice(startIndex, endIndex);
      setRentals(pageRentals);
      setTotalPages(totalPageCount);
    } catch (error) {
      console.log("Error fetching rentals", error);
    }
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null;
    setDisplayDate(newDate || new Date());
    setSelectedDate(newDate);
  };
  const handleClearAll = () => {
    setFilterStatus("");
    setSelectedDate(null);
    setPlateNumber("");
  };

  useEffect(() => {
    getRentals();
  }, [currentPage, plateNumber, filterStatus, selectedDate]);

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
                value={filterStatus ?? ""}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Passive">Passive</option>
              </select>
            </div>

            <div className="filter__widget-01">
              <input
                type="date"
                value={displayDate.toISOString().substring(0, 10)}
                onChange={handleDateChange}
              />
            </div>

            <div className="filter__widget-01">
              <input
                type="text"
                placeholder="Plaka girin"
                value={plateNumber}
                onChange={(e) => {
                  setPlateNumber(e.target.value.toUpperCase());
                  getRentals();
                }}
              />
            </div>

            <button className="clear-all" onClick={handleClearAll}>
              Tümünü Temizle
            </button>
          </div>

          <div className="booking__car-list">
            {rentals.map((rental: RentalModel) => (
              <CarItem rental={rental} key={rental.id} />
            ))}
          </div>

          <div className="pagination d-flex justify-content-center w-0 my-5">
            <button
              className="mx-3 px-5"
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
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
