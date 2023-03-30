import { render, screen } from "../../utils/tests/renderWithRouter";
import ServiceCard from "./index";

describe("ServiceCard", () => {
  it("The Service Card Name is rendered correctly", () => {
    render(
      <ServiceCard
        name={"Text"}
        icon={"user"}
        role={"Role"}
        location={"Location"}
      />
    );
    const serviceCardContainer = screen.getByText("Text");
    expect(serviceCardContainer).toBeInTheDocument();
  });
  it("The Service Card Icon is rendered correctly", () => {
    render(
      <ServiceCard
        name={"Balgias Style"}
        icon={"scissor"}
        role={"stylist"}
        location={"Rosario"}
      />
    );
    // const serviceCardIcon = screen.getByAltText('icon')
    // expect(serviceCardIcon).toBeInTheDocument();
    const serviceCardIconImg = screen.getByAltText("icon");
    expect(serviceCardIconImg).toHaveAttribute(
      "src",
      "/assets/icons/scissor.svg"
    );
  });
  it("The Service Card Role is rendered correctly", () => {
    render(
      <ServiceCard
        name={"Text"}
        icon={"user"}
        role={"stylist"}
        location={"location"}
      />
    );
    const serviceCardRole = screen.getByText("stylist");
    expect(serviceCardRole).toBeInTheDocument();
  });
  it("The Service Card Location is rendered correctly", () => {
    render(
      <ServiceCard
        name={"Text"}
        icon={"user"}
        role={"stylist"}
        location={"Rosario"}
      />
    );
    const serviceCardLocation = screen.getByText("Rosario");
    expect(serviceCardLocation).toBeInTheDocument();
  });
  it("The Service Card Container style is rendered correctly", () => {
    render(
      <ServiceCard
        name={"text"}
        icon={"user"}
        role={"Role"}
        location={"Location"}
      />
    );
    const serviceCardContainer =
      screen.getByText("text").parentElement.parentNode.parentElement;
    const serviceCardContainerStyle =
      "flex border-2 hover:cursor-pointer border-primary-700 rounded-lg bg-[url(assets/images/footballField.svg)] bg-cover bg-no-repeat relative";
    expect(serviceCardContainer).toHaveClass(serviceCardContainerStyle);
  });
});
