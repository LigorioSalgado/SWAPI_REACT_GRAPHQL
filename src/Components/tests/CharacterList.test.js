import React from 'react';
import {shallow} from 'enzyme';

import CharacterList from '../CharacterList';


describe("<CharacterList/>",() => {
	it("Should execute render correctly", () => {
		const component = shallow(<CharacterList match={{params:{page:1}}}/>)
		expect(component).toMatchSnapshot();
	})


	it("Initial state its correct", () => {
		const component = shallow(<CharacterList match={{params:{page:1}}}/>)
		expect(component.state().people).toEqual([])
	})
})