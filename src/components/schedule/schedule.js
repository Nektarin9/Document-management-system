import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Cross,
} from 'recharts';



// using Customized gives you access to all relevant chart props
const CustomizedCross = (props) => {
  const { width, height, stroke, fill, formattedGraphicalItems } = props;
  // get first series in chart
  const firstSeries = formattedGraphicalItems[0];
  // get any point at any index in chart
  const secondPoint = firstSeries?.props?.points[1];

  // render custom content using points from the graph
  return (
    <Cross
      y={secondPoint?.y}
      x={secondPoint?.x}
      top={5}
      left={50}
      height={height}
      width={width}
      stroke={stroke ?? '#000'}
      fill={fill ?? 'none'}
    />
  );
};

export const Schedule = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="frontend" stroke="#16896f" />
        <Line type="monotone"  dataKey="backend" stroke="#ce735a"/>
		<Line type="monotone"  dataKey="engineer" stroke="#5acec8"/>
		<Line type="monotone"  dataKey="analyst" stroke="#ab56ae"/>

        <Customized component={CustomizedCross} />
      </LineChart>
    </ResponsiveContainer>
  );
};


