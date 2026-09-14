import { describe, expect, it, vi } from "vitest";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Link } from "react-router-dom";
import App from "../src/App";
import { ContactPage } from "../src/pages/ContactPage";

function renderContact(
  path = "/contact?products=poolbiking-one-plus&interest=Product+purchase",
) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ContactPage />
    </MemoryRouter>,
  );
}

async function fillInquiry(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name *"), "Demo Customer");
  await user.type(screen.getByLabelText("Email *"), "demo@example.com");
  await user.type(
    screen.getByLabelText("What would you like to explore? *"),
    "We are planning a new pool program.",
  );
}

describe("customer journeys", () => {
  it("keeps the opening focused on one heading and one equipment action", () => {
    const { container } = render(<App />);
    const hero = within(container.querySelector(".pb-hero") as HTMLElement);
    expect(hero.getByRole("heading", { level: 1 }).textContent).toBe(
      "Move Together",
    );
    expect(hero.getAllByRole("link")).toHaveLength(1);
    expect(
      hero
        .getByRole("link", { name: "Explore equipment" })
        .getAttribute("href"),
    ).toBe("#/equipment");
    expect(hero.queryByRole("button", { name: "See it in motion" })).toBeNull();
  });

  it("changes the finder results and preserves facility and model choices in the inquiry link", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Fitness facilities" }),
    );
    expect(
      screen.getByRole("link", { name: "Explore Poolbiking Paris" }),
    ).toBeTruthy();
    await user.selectOptions(
      screen.getByRole("combobox", { name: /Where will it be used/ }),
      "sea",
    );
    expect(
      screen.getByRole("link", { name: "Explore Poolbiking Ibiza" }),
    ).toBeTruthy();
    const link = screen.getByRole("link", { name: "Discuss these options" });
    expect(link.getAttribute("href")).toContain("products=poolbiking-ibiza");
    expect(link.getAttribute("href")).toContain("interest=Fitness+facility");
  });

  it("lets a residence explore access accessories and keeps that context in its inquiry", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Senior living", exact: true }),
    );
    await user.selectOptions(
      screen.getByRole("combobox", { name: /What would you like to explore/ }),
      "Accessories",
    );
    expect(
      screen.getByRole("link", { name: "Explore Meta 400 Pool Lift" }),
    ).toBeTruthy();
    const link = screen.getByRole("link", { name: "Discuss these options" });
    await user.click(link);
    expect(
      (screen.getByLabelText("Primary interest *") as HTMLSelectElement).value,
    ).toBe("Senior living / care residence");
  });

  it("redirects saved comparison links into the equipment catalogue", async () => {
    window.location.hash = "#/compare";
    render(<App />);
    await waitFor(() =>
      expect(window.location.hash).toBe("#/equipment#compare"),
    );
    expect(
      screen.getByRole("textbox", { name: "Search equipment" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "The details, side by side." }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole("img", { name: /year international warranty/ })
        .length,
    ).toBeGreaterThan(0);
  });

  it("caps comparisons at three, restores them after remount and supports removal", async () => {
    const user = userEvent.setup();
    const first = render(<App />);
    await user.click(
      screen.getByRole("button", {
        name: "Compare Poolbiking One 2.0",
        exact: true,
      }),
    );
    await user.click(
      screen.getAllByRole("button", {
        name: "Compare Poolbiking One Plus",
        exact: true,
      })[0],
    );
    await user.click(
      screen.getByRole("button", {
        name: "Compare Poolbiking Evolution",
        exact: true,
      }),
    );
    expect(
      (
        screen.getByRole("button", {
          name: "Compare Poolbiking Tenerife",
          exact: true,
        }) as HTMLButtonElement
      ).disabled,
    ).toBe(true);
    first.unmount();
    render(<App />);
    expect(
      screen.getByRole("link", { name: "Compare equipment, 3 selected" }),
    ).toBeTruthy();
    await user.click(
      screen.getByRole("link", { name: "Compare", exact: true }),
    );
    expect(screen.getByRole("table")).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "Ask about my shortlist" })
        .getAttribute("href"),
    ).toContain("poolbiking-evolution");
    await user.click(
      screen.getByRole("button", {
        name: "Remove Poolbiking One Plus",
        exact: true,
      }),
    );
    expect(
      within(screen.getByRole("table")).queryByText("Poolbiking One Plus"),
    ).toBeNull();
    expect(
      screen.getByRole("link", { name: "Compare equipment, 2 selected" }),
    ).toBeTruthy();
  });

  it("recovers from malformed saved state and a zero-result catalogue search", async () => {
    localStorage.setItem("poolbiking-compare-v1", "{broken");
    window.location.hash = "#/equipment";
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.getByRole("link", { name: "Compare equipment, 0 selected" }),
    ).toBeTruthy();
    await user.type(
      screen.getByRole("textbox", { name: "Search equipment" }),
      "no-such-model",
    );
    expect(screen.getByText("No matches just yet.")).toBeTruthy();
    await user.click(
      screen.getByRole("button", { name: "Show all equipment" }),
    );
    expect(
      screen
        .getByRole("textbox", { name: "Search equipment" })
        .getAttribute("value"),
    ).toBe("");
    expect(
      screen.getByRole("link", {
        name: "View Poolbiking One Plus",
        exact: true,
      }),
    ).toBeTruthy();
  });

  it("preserves catalogue filters through a model visit and carries that model into a quote", async () => {
    window.location.hash = "#/equipment";
    const user = userEvent.setup();
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Bikes", exact: true }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Search equipment" }),
      "one plus",
    );
    await user.click(
      screen.getByRole("link", {
        name: "View Poolbiking One Plus",
        exact: true,
      }),
    );
    await user.click(screen.getByRole("link", { name: "Back to products" }));
    expect(
      (
        screen.getByRole("textbox", {
          name: "Search equipment",
        }) as HTMLInputElement
      ).value,
    ).toBe("one plus");
    expect(
      screen
        .getByRole("button", { name: "Bikes", exact: true })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    await user.click(
      screen.getByRole("link", {
        name: "View Poolbiking One Plus",
        exact: true,
      }),
    );
    await user.click(screen.getByRole("link", { name: "Request pricing" }));
    expect(
      screen.getByRole("link", { name: "Poolbiking One Plus", exact: true }),
    ).toBeTruthy();
    expect(
      (screen.getByLabelText("Primary interest *") as HTMLSelectElement).value,
    ).toBe("Product purchase");
  });

  it("validates required fields then prepares an unsent, correctly encoded email with the shortlist", async () => {
    const user = userEvent.setup();
    renderContact();
    await user.click(
      screen.getByRole("button", { name: "Prepare email inquiry" }),
    );
    expect(screen.queryByText("Your inquiry is ready to review.")).toBeNull();
    await fillInquiry(user);
    await user.selectOptions(
      screen.getByLabelText("Approximate number of units"),
      "3–5",
    );
    await user.click(
      screen.getByRole("button", { name: "Prepare email inquiry" }),
    );
    const href = screen
      .getByRole("link", { name: "Open email app" })
      .getAttribute("href")!;
    const body = new URLSearchParams(href.split("?")[1]).get("body");
    expect(body).toContain("Equipment: Poolbiking One Plus");
    expect(body).toContain("Approximate units: 3–5");
    expect(body).toContain("Email: demo@example.com");
    expect(screen.getByText(/It hasn’t been sent yet/)).toBeTruthy();
    await user.type(screen.getByLabelText("Name *"), " edited");
    expect(screen.queryByRole("link", { name: "Open email app" })).toBeNull();
  });

  it("offers a manual copy fallback without claiming the inquiry was sent", async () => {
    const user = userEvent.setup();
    renderContact();
    await fillInquiry(user);
    await user.click(
      screen.getByRole("button", { name: "Prepare email inquiry" }),
    );
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("denied"),
    );
    await user.click(screen.getByRole("button", { name: "Copy inquiry" }));
    expect(screen.getByRole("status").textContent).toContain(
      "copy it manually",
    );
    expect(document.activeElement).toBe(
      screen.getByLabelText("Prepared message"),
    );
  });

  it("updates same-route inquiry context while retaining typed project details", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/contact?products=poolbiking-one-plus"]}>
        <ContactPage />
        <Link to="/contact?products=poolbiking-ibiza&interest=Private+facility">
          Change project
        </Link>
      </MemoryRouter>,
    );
    await user.type(screen.getByLabelText("Name *"), "Keep my details");
    await user.click(screen.getByRole("link", { name: "Change project" }));
    expect((screen.getByLabelText("Name *") as HTMLInputElement).value).toBe(
      "Keep my details",
    );
    expect(
      screen.getByRole("link", { name: "Poolbiking Ibiza", exact: true }),
    ).toBeTruthy();
    expect(
      screen.queryByRole("link", { name: "Poolbiking One Plus", exact: true }),
    ).toBeNull();
    expect(
      (screen.getByLabelText("Primary interest *") as HTMLSelectElement).value,
    ).toBe("Private facility");
  });

  it("only mounts the video after a click and removes it on Escape with focus restored", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.queryByTitle("This is Poolbiking — manufacturer video"),
    ).toBeNull();
    const trigger = screen.getByRole("button", { name: "See it in motion" });
    await user.click(trigger);
    expect(
      screen
        .getByTitle("This is Poolbiking — manufacturer video")
        .getAttribute("src"),
    ).toContain("youtube-nocookie.com/embed/");
    fireEvent(
      screen.getByRole("dialog"),
      new Event("cancel", { bubbles: false, cancelable: true }),
    );
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(document.activeElement).toBe(trigger);
    expect(document.body.style.overflow).toBe("");
  });

  it("exposes mobile menu state and closes it on Escape", async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    await user.click(toggle);
    expect(
      screen
        .getByRole("button", { name: "Close navigation" })
        .getAttribute("aria-expanded"),
    ).toBe("true");
    await user.keyboard("{Escape}");
    expect(
      screen
        .getByRole("button", { name: "Open navigation" })
        .getAttribute("aria-expanded"),
    ).toBe("false");
    expect(document.activeElement).toBe(toggle);
  });
});
