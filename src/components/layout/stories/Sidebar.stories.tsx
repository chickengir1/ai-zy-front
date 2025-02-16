import { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/layout/sidebar/Sidebar";
import { useState } from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    isSidebarOpen: true,
    setIsSidebarOpen: () => {},
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed left-5 top-5 z-50 w-fit rounded-md bg-black px-4 py-2 text-white"
        >
          {isSidebarOpen ? "닫기" : "열기"}
        </button>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </>
    );
  },
};
