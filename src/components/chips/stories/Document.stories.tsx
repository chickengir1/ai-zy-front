import { Meta, StoryObj } from "@storybook/react";
import Document from "@/components/chips/proceedings/Document";

const meta: Meta<typeof Document> = {
  title: "document/Document",
  component: Document,
  tags: ["autodocs"],
  args: {
    title: "프로젝트 A 킥오프 미팅",
    date: "2025-02-12",
    participantCount: 10,
    participantNames: ["김철수", "이영희", "박영수", "최영미", "정영희"],
    onClickSetting: () => {
      alert("설정 버튼 클릭");
    },
    content: "프로젝트 A 킥오프 미팅",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "프로젝트 A 킥오프 미팅",
  },
};
