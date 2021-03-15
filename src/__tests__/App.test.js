import React from 'react';
import {render} from "@testing-library/react";
import App from '../App';


//Describle is a test suite
describe("Testing app functionalities", () =>{
    //It is an individual test
    it("renderes learn react link",()=>{
        const { getByText } = render(<App/>);
        // Search in component the "Learn React" text
        const learnReact = getByText("Learn React");
        expect(learnReact).toBeVisible();
    });

    it("renderes learn react link",()=>{
        const { getByText } = render(<App/>);
        // Search in component the "Learn React" text
        const learnReact = getByText("Learn React");
        expect(learnReact).not.toBeVisible();
    });

});