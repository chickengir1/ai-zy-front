import { Meta, StoryObj } from "@storybook/react";
import TodoList from "@/components/todolist/Todolist";

const meta: Meta<typeof TodoList> = {
  title: "ui/Todolist",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {};
