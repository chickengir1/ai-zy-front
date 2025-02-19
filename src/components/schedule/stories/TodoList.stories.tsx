import { Meta, StoryObj } from "@storybook/react";
import TodoList from "@/components/schedule/todolist/Todolist";

const meta: Meta<typeof TodoList> = {
  title: "schedule/Todolist",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {};
