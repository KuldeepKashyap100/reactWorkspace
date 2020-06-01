import React from 'react';

// shallow is used to avoid deep rendering(i.e all of its children). other options full(mount) and static(render)
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//to connect the enzyme
configure({adapter: new Adapter()});

describe('<NavigationItems />',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> if not authenticated.',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render two <NavigationItem /> if not authenticated.',()=>{
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render logout <NavigationItem /> if  authenticated.',()=>{
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    }); 

    afterEach(()=>{});
});