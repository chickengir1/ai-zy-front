import type { Meta, StoryObj } from "@storybook/react";
import ChatInterface from "@/components/chatInterface/ChatInterface";

const meta: Meta<typeof ChatInterface> = {
  title: "chatInterface/ChatInterface",
  component: ChatInterface,
  tags: ["autodocs"],
  parameters: {
    docs: {
      iframeHeight: 800,
    },
  },
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
