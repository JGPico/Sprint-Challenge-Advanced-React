import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import NavBar from "./NavBar";

test("Does in fact render", () => {
    render(<NavBar/>);
}) 

// The only user interface right now is "toggle dark mode". Test the button.

test("Dark Mode button executes without error", () => {
    const { getByText } = render(<NavBar/>);

    // query for button
    const darkButton = getByText(/toggle darkmode/i);

    // use fireEvent to press button
    fireEvent.click(darkButton);
})