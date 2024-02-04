import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import "./colors.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { ColorModel } from "../../models/responses/colors/GetColor";
import ColorService from "../../services/ColorService";

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

  useEffect(() => {
    getColorList();
  });

  const [color, setColor] = useColor("rgb(86 30 203)");
  const initialValues = () => {};
  const onSubmit = () => {};
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
                  name="title"
                  type="text"
                  placeHolder="Enter Color Title"
                ></FormikInput>
                <FormikInput
                  name="Hex"
                  type="text"
                  placeHolder="Enter Hex code"
                ></FormikInput>
                <button type="submit" className="btn btn-sm ">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
