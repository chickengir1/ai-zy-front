import ErrorFallback from "@/components/errorBoundary/ErrorBoundary";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof ErrorFallback> = {
  title: "Common/ErrorFallback",
  component: ErrorFallback,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {},
};

export default meta;
