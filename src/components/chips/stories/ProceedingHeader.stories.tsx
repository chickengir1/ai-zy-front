import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import ProceedingHeader from "@/components/chips/proceedings/ProceedingHeader";

const meta: Meta<typeof ProceedingHeader> = {
  title: "proceeding/ProceedingHeader",
  component: ProceedingHeader,
  tags: ["autodocs"],
  args: {
    title: "프로젝트 이름",
    date: "2024-01-01",
    onClickSetting: () => {
      alert("설정 버튼 클릭");
    },

    participantCount: 5,
    participantNames: ["김철수", "이영희", "박지성", "최민수", "정지훈"],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
