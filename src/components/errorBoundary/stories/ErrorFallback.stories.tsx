import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ErrorFallback from "@/components/errorBoundary/ErrorFallback";

const meta: Meta<typeof ErrorFallback> = {
  title: "ErrorBoundary/ErrorFallback",
  component: ErrorFallback,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {},
};
