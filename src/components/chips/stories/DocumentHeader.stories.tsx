import { Meta, StoryObj } from "@storybook/react";
import DocumentHeader from "@/components/chips/proceedings/document/DocumentHeader";

const meta: Meta<typeof DocumentHeader> = {
  title: "document/DocumentHeader",
  component: DocumentHeader,
  tags: ["autodocs"],
  args: {
    title: "프로젝트 A 킥오프 미팅",
    date: "2025-02-12",
    participantCount: 10,
    participantNames: ["김철수", "이영희", "박영수", "최영미", "정영희"],
    onClickSetting: () => {
      alert("설정 버튼 클릭");
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
