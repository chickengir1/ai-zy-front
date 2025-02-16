import { Meta, StoryObj } from "@storybook/react";
import ToggleNav from "@/components/layout/toggleNav";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof ToggleNav> = {
  title: "Layout/ToggleNav",
  component: ToggleNav,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleNav>;

export const ProceedingsTab: Story = {
  args: {
    location: {
      pathname: "/projects/123/proceedings",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/projects/123/proceedings"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const TodolistTab: Story = {
  args: {
    location: {
      pathname: "/projects/123/todolist",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/projects/123/todolist"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
