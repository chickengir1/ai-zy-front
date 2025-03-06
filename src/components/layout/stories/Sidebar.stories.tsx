import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    onClose: () => {},
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
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
  render: function Render() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    function handleCloseSidebar() {
      setIsSidebarOpen(!isSidebarOpen);
    }
    return (
      <>
        <button
          onClick={handleCloseSidebar}
          className="fixed left-5 top-5 z-50 w-fit rounded-md bg-black px-4 py-2 text-white"
        >
          {isSidebarOpen ? "닫기" : "열기"}
        </button>
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      </>
    );
  },
};
