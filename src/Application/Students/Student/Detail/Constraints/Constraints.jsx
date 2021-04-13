import React from 'react'
import './constraints.scss'
import { Collapse } from 'antd'
import { StudentConstraints } from './Componants'

const Constraints = () => {
	const { Panel } = Collapse;

	function callback(key) {
		console.log(key);
	}

	return (
		<Collapse defaultActiveKey={['1']} onChange={callback}>
			<Panel header="Contraintes de l'étudiant" key="1">
				<StudentConstraints />
			</Panel>
		</Collapse>
	)
}

export default Constraints
