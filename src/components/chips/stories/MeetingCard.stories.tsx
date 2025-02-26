import { Meta, StoryObj } from "@storybook/react";
import MeetingCard from "@/components/chips/proceedings/MeetingCard";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MeetingCard> = {
  title: "chips/MeetingCard",
  component: MeetingCard,
  tags: ["autodocs"],
  args: {
    participantCount: 5,
    name: "프로젝트 이름",
    createdAt: "2024-01-01",
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
    createdAt: "2024-01-01",
    tag: "태그",
    linkTo: "/",
  },
};
