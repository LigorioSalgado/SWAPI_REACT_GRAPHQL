import React from 'react';
import {shallow} from 'enzyme';

import {Card} from '../Card';


describe("<Card/>",() => {

	it("Should render correctly",() => {
		const component = shallow(<Card/>)
		expect(component).toMatchSnapshot();
	})

	it("Should render props", () => {
		const component = shallow(<Card name={"prueba"}>
			<ul>
				<li>Prueba</li>
			</ul>
		</Card>)

		expect(component.find('li')).toHaveLength(1)

	})

	it("Should props name be equal", () => {
		const component = shallow(<Card name={"prueba"}></Card>)

		expect(component.find('.card-title').text()).toBe("prueba")

	})

})