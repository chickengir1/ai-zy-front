import { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/portal/modal/Modal";

// 포털을 사용하면 컴포넌트 그룹화와 autoDocs 기능이 정상적으로 작동하지 않음
// 원인은 아마도 DOM을 직접 조작하기 때문인 듯
// React는 가상 DOM을 사용하는데, Storybook도 동일한 가상 DOM 기반인가?
// 첫 번째 의문점이 생긴게 왜 Storybook 설정 파일에 HTML 코드를 직접 추가해야 하는지 궁금함
// 기타 여러 가지 사항이 있지만, 자야돼서 우선 여기서 마무리함
const meta: Meta<typeof Modal> = {
  title: "portal",
  component: Modal,
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>이건 모달입니다.</div>
        <span>여러가지 내용을 추가 할 수 있어요.</span>
        <p>이렇게 추가해서 사용할 수 있어요.</p>
        <button
          style={{
            border: "1px solid #000",
            backgroundColor: "gray",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("버튼 클릭");
          }}
        >
          버튼 클릭 인터렉션도 테스트
        </button>
      </>
    ),
  },
};
