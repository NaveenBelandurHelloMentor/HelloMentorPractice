import { render, screen } from "@testing-library/react";
import Page from "./page";
import { DataDetails } from "./fakeData";

describe("applicationtest", () => {
  test("renderTest", () => {
    render(<Page dataDetails={DataDetails} />);
    const Title = screen.getByText("Breaking News");
    expect(Title).toBeInTheDocument();

    const span = screen.getByTitle("breaking");
    expect(span).toBeInTheDocument();

    const scrollBar = document.getElementById("scrollbar");
    expect(scrollBar).toBeInTheDocument();

    const images = screen.getAllByAltText("thumbnail_image");
    expect(images.length).toBeGreaterThan(0);

    const TitleData = screen.getAllByTitle("title");
    expect(TitleData.length).toBeGreaterThan(0);

    const dates = screen.getAllByTitle("date");
    expect(dates.length).toBeGreaterThan(0);

    const days = screen.getAllByTitle("day");
    expect(days.length).toBeGreaterThan(0);
  });
});
