import React from "react";
import { render, cleanup, RenderResult } from "@testing-library/react";

import Sut from ".";

let sut: RenderResult;

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Home", () => {
  beforeEach(() => {
    sut = render(<Sut />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Should be able to render a Home screen.", () => {
    const { getByTestId } = sut;

    const HomeElement = getByTestId("home_container");

    expect(HomeElement).toBeTruthy();
  });
});
