import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";
import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof MarkdownEditor> = {
  title: "proceeding/MarkdownEditor",
  component: MarkdownEditor,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <MarkdownEditor />
    </div>
  ),
};
