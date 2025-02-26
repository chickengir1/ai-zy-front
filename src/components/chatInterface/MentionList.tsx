import { useCustomMentions } from "@/hooks/ui/chatInterface/useCustomMentions";

interface MentionListProps {
  items: Chat.ChatSymbol[];
  selectedIndex: number;
}

export default function MentionList({
  items,
  selectedIndex,
}: MentionListProps) {
  const { handlers } = useCustomMentions();
  const { handleItemClick } = handlers;

  return (
    <div className="absolute bottom-full mb-2 w-fit rounded border bg-white shadow-lg">
      {items.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={handleItemClick(item)}
            className={`flex w-full flex-col px-4 py-2 hover:bg-gray-100 ${
              index === selectedIndex ? "bg-blue-100" : ""
            }`}
          >
            {item.display}
          </button>
        );
      })}
    </div>
  );
}
