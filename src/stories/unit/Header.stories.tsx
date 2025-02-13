import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/layout/Header";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export default meta;
