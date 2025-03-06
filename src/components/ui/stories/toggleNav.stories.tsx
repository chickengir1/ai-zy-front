import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import ToggleNav from "@/components/ui/toggle/toggleNav";

const meta: Meta<typeof ToggleNav> = {
  title: "Layout/ToggleNav",
  component: ToggleNav,
  tags: ["autodocs"],
  args: {
    tabIndex: 0,
  },
};

export default meta;

type Story = StoryObj<typeof ToggleNav>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/projects/123/proceedings"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
