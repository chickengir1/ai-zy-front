import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "@/components/portal/modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "portal/modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    onClose: () => {},
    title: "모달입니다",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="모달입니다"
        >
          <div className="flex flex-col gap-4">
            <div>이건 모달입니다.</div>
            <span>여러가지 내용을 추가 할 수 있어요.</span>
            <p>이렇게 추가해서 사용할 수 있어요.</p>
            <button
              className="cursor-pointer rounded bg-gray-500 px-2 py-1 text-white"
              onClick={() => {
                alert("버튼 클릭");
              }}
            >
              버튼 클릭 인터렉션도 테스트
            </button>
          </div>
        </Modal>
        <button
          className="cursor-pointer rounded border bg-gray-500 px-2 py-1 text-white"
          onClick={() => setIsOpen(true)}
        >
          모달 열기
        </button>
      </div>
    );
  },
};
