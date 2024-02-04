import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStaticsData from "./mileStatics";

type MileStatics = {
    name: string;
    mileStats: number;
  };
  
type Props = {};

const MileChart = (props: Props) => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData as MileStatics[]}>
        <XAxis dataKey="name" stroke="#fefefe" />
        <Bar dataKey="mileStats" stroke="#444444" fill="#444444" barSize={30} />
        <Tooltip cursor={false} wrapperClassName="tooltip__style" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MileChart;
