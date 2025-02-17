import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "@/components/ui/search/SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "ui/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력해주세요",
    onClick: () => {
      alert("검색");
    },
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
};
