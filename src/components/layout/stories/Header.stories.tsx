import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/layout/Header";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "헤더 타이틀",
  },
};

export default meta;
