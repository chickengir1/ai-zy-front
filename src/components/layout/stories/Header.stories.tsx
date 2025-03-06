import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/layout/header/Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    title: "헤더 타이틀",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export default meta;
