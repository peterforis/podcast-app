/**
 * @jest-environment jsdom
 */
import Dashboard from "../components/dashboard";
import React from "react";
import {render} from "@testing-library/react";

test("Renders <Dashboard /> component correctly", () => {
    const {getByText} = render(<Dashboard/>);
    expect(getByText("List Of Episodes")).toBeInTheDocument();
});
