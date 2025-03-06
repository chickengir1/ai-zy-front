import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "@/components/chips/projects/ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "project/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  args: {
    participantCount: 5,
    name: "프로젝트 이름",
    description: "프로젝트 설명",
    tag: "태그",
    attendeeNames: ["홍길동", "이순신", "김철수", "오쌤", "박영희"],
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
