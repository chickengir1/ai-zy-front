import type { Meta, StoryObj } from "@storybook/react";
import ChatInterface from "../ChatInterface";

const meta: Meta<typeof ChatInterface> = {
  title: "chatInterface/ChatInterface",
  component: ChatInterface,
  tags: ["autodocs"],
  parameters: {
    docs: {
      iframeHeight: 500,
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ChatInterface>;

export const Default: Story = {};
