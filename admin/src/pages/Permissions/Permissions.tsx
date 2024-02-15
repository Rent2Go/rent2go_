import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";

import DiscountService from "../../services/DiscountService";
import ColorService from "../../services/ColorService";
import BrandService from "../../services/BrandService";
import CarService from "../../services/CarService";
import CustomerService from "../../services/CustomerService";
import EmployeeService from "../../services/EmployeeService";
import UserService from "../../services/UserService";

import "./permissions.css";

type Props = {};

interface PageData {
  name: string;
}

const Permissions = (props: Props) => {
  const [pageDataList, setPageDataList] = useState<PageData[]>([]);
  const [services, setServices] = useState<
    Array<
      | typeof DiscountService
      | typeof ColorService
      | typeof BrandService
      | typeof CarService
      | typeof CustomerService
      | typeof EmployeeService
      | typeof UserService
    >
  >([
    DiscountService,
    ColorService,
    BrandService,
    CarService,
    CustomerService,
    EmployeeService,
    UserService,
  ]);

  useEffect(() => {
    // Servis isimlerini alın
    const serviceNames: PageData[] = services.map((service) => ({
      name: getServiceName(service),
    }));

    setPageDataList(serviceNames);
  }, [services]);

  const getServiceName = (
    service:
      | typeof DiscountService
      | typeof ColorService
      | typeof BrandService
      | typeof CarService
      | typeof CustomerService
      | typeof EmployeeService
      | typeof UserService
  ): string => {
    if (service === DiscountService) return "Discounts";
    if (service === ColorService) return "Colors";
    if (service === BrandService) return "Brands";
    if (service === CarService) return "Cars";
    if (service === CustomerService) return "Customers";
    if (service === EmployeeService) return "Employees";
    if (service === UserService) return "Users";
    return "";
  };

  const getPageComponent = (pageData: PageData) => {
    return (
      <div key={pageData.name}>
        <p>{pageData.name}</p>
      </div>
    );
  };

  return (
    <div className="permissions">
      <div className="titleContainer">
        <h2>Permissions</h2>
      </div>
      <div className="secContainer shadow-rounded-box">
        <div className="contentContainer">
          <div className="headerContainer">
            <h2>Module Name</h2>
            <p>Read</p>
            <p>Write</p>
            <p>Update</p>
            <p>Delete</p>
          </div>

          <Table className="table">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </Table>
          {pageDataList.map((pageData, index) => (
            <div key={index} className="singlePermission">
              <div className="pageComponentData">{getPageComponent(pageData)}</div>
              <div className="permissionDetailContainer">
                <Form className="form">
                  
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    title="Active"
                    className="warning"
                    checked={true}
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    title="Active"
                    className="warning"
                    checked={true}
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    title="Active"
                    className="warning"
                    checked={true}
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    title="Active"
                    className="warning"
                    checked={true}
                  />
                </Form>
              </div>
            </div>
            


          ))}
        </div>
      </div>
    </div>
  );
};

export default Permissions;
