import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import CreationItem from "@/components/chips/creationItem/CreationItem";

const meta: Meta<typeof CreationItem> = {
  title: "creation/CreationItem",
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

export const NoPath: Story = {};

export default meta;
