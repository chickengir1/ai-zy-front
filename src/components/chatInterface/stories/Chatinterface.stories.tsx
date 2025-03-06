import { queryClient } from "@/api/queryClient";
import ChatInterface from "@/components/chatInterface/chatUi/ChatInterface";
import type { Meta, StoryObj } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof ChatInterface> = {
  title: "chatInterface/ChatInterface",
  component: ChatInterface,
  tags: ["autodocs"],
  parameters: {
    docs: {
      iframeHeight: 800,
    },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen">
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ChatInterface>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen">
      <ChatInterface
        onClose={() => {
          alert("닫기 버튼 클릭");
        }}
      />
    </div>
  ),
};
