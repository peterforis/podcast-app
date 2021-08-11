/**
 * @jest-environment node
 */
import Dashboard from "../components/dashboard";
import React from "react";
import {render} from "@testing-library/react";

describe("<Dashboard />", () => {
    it("Renders <Dashboard /> component correctly", () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/List Of Episodes/i)).toBeInTheDocument();
    });
});
