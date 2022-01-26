/* eslint-disable class-methods-use-this */
import React from "react";
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from "@testing-library/react";

import Sut from ".";

let sut: RenderResult;
let spy: HomeSpy;

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => (to: string) => mockNavigate(to),
}));

class HomeSpy {
  pressButton(sutResponse: RenderResult, buttonNameText: string) {
    const { getByText } = sutResponse;

    const ButtonElement = getByText(buttonNameText);
    expect(ButtonElement).toBeTruthy();

    fireEvent.click(ButtonElement);
  }
}

describe("Home", () => {
  beforeEach(() => {
    sut = render(<Sut />);
    spy = new HomeSpy();
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
    spy.pressButton(sut, "Start discover");

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("hooks");
  });
});
