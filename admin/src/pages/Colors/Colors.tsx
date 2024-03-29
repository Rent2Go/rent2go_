import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

import { FormikInput } from "../../components";
import ColorService from "../../services/ColorService";
import { ColorModel } from "../../models/responses/colors/GetColor";
import { AddColorRequest } from "../../models/requests/colors/AddColorRequest";

import "react-color-palette/css";
import "./colors.css";

type Props = {};

const Colors = (props: Props) => {
  const [colorLists, setColorLists] = useState<ColorModel[]>([]);

  const getColorList = async () => {
    try {
      const response = await ColorService.getAll();
      setColorLists(response.data.data);
    } catch (error) {
      console.error("Error fetchin colors", error);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigate();
  const [color, setColor] = useColor("rgb(86 30 203)");
  const initialValues: AddColorRequest = {
    name: "",
    hexCode: "",
  };
  const onSubmit = async (values: AddColorRequest) => {
    await ColorService.addColor(values)
      .then((response) => {
        setIsSubmitting(true);
        toast.success(response.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message.name);
      });
  };

  const deleteColor = async (id: number) => {
    await ColorService.delete(id)
      .then((response) => {
        setIsSubmitting(true);
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message.name);
      });
  };

  useEffect(() => {
    if (isSubmitting) {
      getColorList();
      setIsSubmitting(false);
    } else {
      getColorList();
    }
  }, [isSubmitting]);

  return (
    <div className="colors">
      <div className="titleContainer">
        <h2>Colors</h2>
      </div>
      <div className="secContainer shadow-rounded-box">
        <div className="topContainer">
          <div className="colorFormContainer">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="form">
                <p>Add New color :</p>
                <FormikInput
                  name="name"
                  type="text"
                  placeHolder="Enter Color Title"
                ></FormikInput>
                <FormikInput
                  name="hexCode"
                  type="text"
                  placeHolder="Enter Hex code"
                ></FormikInput>
                <button type="submit" className="btn btn-sm btn-submit">
                  Add Color
                </button>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="bottomContainer">
          <div className="colorPaletteContainer ">
            <ColorPicker color={color} onChange={setColor} />
          </div>
          <div className="colorListContainer">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Preview</th>
                  <th>Hex Code</th>
                  <th>Title</th>
                  <th>
                    <AiFillCloseCircle />
                  </th>
                </tr>
              </thead>
              <tbody>
                {colorLists.map((colorList: ColorModel) => (
                  <tr key={colorList.id}>
                    <th>{colorList.id}</th>
                    <td>
                      <div
                        className="colorPreview"
                        style={{ backgroundColor: colorList.hexCode }}
                      ></div>
                    </td>
                    <td>{colorList.hexCode}</td>
                    <td>{colorList.name}</td>
                    <td>
                      <Link
                        className="btn btn-delete-outline"
                        to={`/colors`}
                        onClick={() => deleteColor(colorList.id)}
                      >
                        <MdOutlineDeleteForever />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Colors;
