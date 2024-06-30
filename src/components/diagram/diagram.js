import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from './diagram.module.css';

export const Diagram = ({ COLORS, data }) => (
	<div className={styles.diagram}>
		<ResponsiveContainer>
			<PieChart>
				<Pie
					dataKey="quantity"
					data={data}
					cx="50%"
					cy="50%"
					outerRadius={150}
					innerRadius={70}
					fill="#8884d8"
					label
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<Legend
					iconSize={25}
					layout="vertical"
					verticalAlign="middle"
					wrapperStyle={{
						position: "none",
						display: "flex",
						justifyContent: "center",
						margin: "20px auto",
						lineHeight: '30px',

					}}
				/>

				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	</div>
);
