import React from 'react';
import { render } from "@testing-library/react";
import Todo from "./Todo";

//Smoke test
it("renders without crashing", function () {
    render(<Todo text={'Test text for todo'} id={1} key={1}/>)
});

//Snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Todo />)
    expect(asFragment()).toMatchSnapshot();
});