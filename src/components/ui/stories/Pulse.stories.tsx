import { Meta, StoryObj } from "@storybook/react";
import Pulse from "@/components/ui/loading/Pulse";

const meta: Meta<typeof Pulse> = {
  title: "ui/Pulse",
  component: Pulse,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pulse>;

export const Default: Story = {};
