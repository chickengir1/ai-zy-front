import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { getModeColors } from "@/utils/helpers/chatUtils";
import { IoIosSend } from "react-icons/io";
import { useToggle } from "@/hooks/utility/useToggle";

interface ChatInterfaceProps {
  onClose: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  // TODO: 모드 변경 시 메시지 초기화, 내부 로직 훅으로 분리
  const [isCommandMode, toggleMode] = useToggle(false);
  const [messages, setMessages] = useState<
    { id: number; role: "user" | "bot"; content: string }[]
  >([]);
  const [input, setInput] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user" as const,
      content: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  }

  const colors = getModeColors(isCommandMode);

  return (
    <div className="fixed bottom-16 right-0 flex items-center justify-center p-4">
      <div className="w-full md:w-[576px] md:max-w-xl">
        <div className={`overflow-hidden rounded-md shadow-lg ${colors.bg}`}>
          <ChatHeader
            isCommandMode={isCommandMode}
            toggleMode={toggleMode}
            colors={colors}
            onClose={onClose}
          />
          <ChatMessages
            messages={messages}
            isCommandMode={isCommandMode}
            colors={colors}
          />
          <form
            onSubmit={handleSubmit}
            className={`border-t p-4 ${colors.border}`}
          >
            <div className="flex space-x-2">
              {/** input구분 해야함- 일반 input || react-mentions input*/}
              <input
                autoFocus
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder={
                  isCommandMode
                    ? "명령을 입력하세요..."
                    : "메시지를 입력하세요..."
                }
                className={`flex-grow rounded border p-2 ${colors.bg} ${colors.text} ${colors.placeholder}`}
              />
              <button
                type="submit"
                className={`rounded px-4 py-2 text-sm ${isCommandMode ? "bg-gray-200" : "bg-indigo-600 text-white"}`}
              >
                <IoIosSend size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
