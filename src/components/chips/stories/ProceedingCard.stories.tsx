import { MemoryRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import ProceedingCard from "@/components/chips/proceedings/ProceedingCard";

const meta: Meta<typeof ProceedingCard> = {
  title: "proceeding/ProceedingCard",
  component: ProceedingCard,
  tags: ["autodocs"],
  args: {
    participantCount: 5,
    attendeeNames: ["괴물쥐", "랄로", "파카", "도파", "박종우"],
    name: "프로젝트 이름",
    createdAt: "2024-01-01",
    tag: "태그",
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
