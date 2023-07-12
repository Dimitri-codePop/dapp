import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header test", () => {
  // Tests that the header is rendered with the correct text
  it("test_render_header_with_correct_text", () => {
    render(<Header />);
    expect(
      screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      )
    ).toBeInTheDocument();
  });

  // Tests that the header is rendered with the correct class name
  it("test_render_header_with_correct_class_name", () => {
    render(<Header />);
    expect(
      screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      )
    ).toHaveClass("text-blue-600");
  });

  // Tests that the header is an h1 element
  it("test_header_is_an_h1_element", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  // Tests that the header text is not empty
  it("test_header_text_is_not_empty", () => {
    render(<Header />);
    expect(
      screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      )
    ).not.toBeEmptyDOMElement();
  });

  // Tests that the header text is a string
  it("test_header_text_is_a_string", () => {
    render(<Header />);
    expect(
      typeof screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      ).textContent
    ).toBe("string");
  });

  // Tests that the header text is not null
  it("test_header_text_is_not_null", () => {
    render(<Header />);
    expect(
      screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      ).textContent
    ).not.toBeNull();
  });

  // Tests that the header text is not undefined
  it("test_header_text_is_not_undefined", () => {
    render(<Header />);
    expect(
      screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      ).textContent
    ).not.toBeUndefined();
  });

  // Tests that the header text is not a number
  it("test_header_text_is_not_a_number", () => {
    render(<Header />);
    expect(
      isNaN(
        Number(
          screen.getByText(
            "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
          ).textContent
        )
      )
    ).toBe(true);
  });

  // Tests that the header text is not an object
  it("test_header_text_is_not_an_object", () => {
    render(<Header />);
    expect(
      typeof screen.getByText(
        "Install & Setup Vite + React + Typescript + Tailwind CSS 3"
      ).textContent
    ).not.toBe("object");
  });
});
