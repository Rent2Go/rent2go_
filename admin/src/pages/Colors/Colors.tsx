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
      <div className="secContainer shadow-rounded-box">
        <div className="leftContainer">
          <div className="colorFormContainer">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="form">
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
          <div className="colorPaletteContainer ">
            <ColorPicker color={color} onChange={setColor} />
          </div>
        </div>
        <div className="rightContainer">
          <div className="colorListContainer">
            <div className="titleContainer">
              <h6> ID </h6>
              <h6> Preview </h6>
              <h6> Hex Code </h6>
              <h6> Title </h6>
            </div>
         
            {colorLists.map((colorList: ColorModel) => (
              <div className="colorsContainer" key={colorList.id}>
                <p>{colorList.id}</p>

                <p
                  className="colorPreview"
                  style={{ backgroundColor: colorList.hexCode }}
                ></p>

                <p>{colorList.hexCode}</p>

                <p>{colorList.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
