import { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "@/components/chips/projects/ProjectCard";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof ProjectCard> = {
  title: "chips/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  args: {
    participantCount: 5,
    name: "프로젝트 이름",
    description: "프로젝트 설명",
    gradientFrom: "from-black/10",
    gradientTo: "to-black/50",
    tag: "태그",
    linkTo: "/",
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

export const Default: Story = {
  args: {
    participantCount: 10,
    name: "프로젝트 이름",
    description: "프로젝트 설명",
    tag: "태그",
    gradientFrom: "from-black/10",
    gradientTo: "to-black/50",
    linkTo: "/",
  },
};
