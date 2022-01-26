import React from "react";
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from "@testing-library/react";

import Sut from ".";

let sut: RenderResult;

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => (to: string) => mockNavigate(to),
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

  it("Should be able to navigate to hooks screen when clicks 'Start Discover' button", () => {
    const { getByText } = sut;

    const ButtonElement = getByText("Start discover");
    expect(ButtonElement).toBeTruthy();

    fireEvent.click(ButtonElement);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("hooks");
  });
});
