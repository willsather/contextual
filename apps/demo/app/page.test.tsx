import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("app-one", () => {
  it("can render page", async () => {
    const page = await Page();
    render(page);

    expect(screen.getByText("Application #1")).toBeInTheDocument();
  });
});
