import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "@/components/ui/search/SearchInput";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

mockQueryClient.setQueryData(
  ["searchResults"],
  [
    { id: "1", title: "검색 결과 1" },
    { id: "2", title: "검색 결과 2" },
    { id: "3", title: "검색 결과 3" },
  ]
);

const meta: Meta<typeof SearchInput> = {
  title: "ui/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    placeholder: "검색어를 입력해주세요",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={mockQueryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력해주세요",
    items: ["항목 1", "항목 2", "항목 3"],
  },
};
