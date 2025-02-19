import { Meta, StoryObj } from "@storybook/react";
import PieCharts from "@/components/schedule/charts/PieCharts";

const meta: Meta<typeof PieCharts> = {
  title: "schedule/PieCharts",
  component: PieCharts,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: ["개인", "학습", "건강", "취미", "업무"],
    data: [1, 2, 3, 4, 5],
  },
};
