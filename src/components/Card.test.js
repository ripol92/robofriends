import React from "react";
import {shallow, mount, render} from 'enzyme'
import Card from "./Card";

it('should render card', function () {
    expect(shallow(<Card/>).length).toEqual(1);
});


