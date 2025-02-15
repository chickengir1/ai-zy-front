import { Meta, StoryObj } from "@storybook/react";
import MarkdownEditor from "@/components/chips/markdownEditor/Editor";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MarkdownEditor> = {
  title: "document/MarkdownEditor",
  component: MarkdownEditor,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
