import { MemoryRouter } from "react-router-dom";
import CreationItem from "@/components/chips/creationItem/CreationItem";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreationItem> = {
  title: "chips/CreationItem",
  component: CreationItem,
  args: {
    path: "/",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof CreationItem>;

export const Default: Story = {
  args: {
    path: "/",
  },
};

export const NoPath: Story = {
  args: {},
};

export default meta;
