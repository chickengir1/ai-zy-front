import { useEffect } from "react";
import { useProceedings } from "@/hooks/api/proceedings/useProceedings";
import { useChatConversationStore } from "@/store/chat/chatConversationStore";
import { useParamsValues } from "@/hooks/utility/common/useParams";

export function useProceedingsForChatContext(projectId: string) {
  const { searchParams } = useParamsValues("page");
  const currentPage = searchParams.get("page") || "0";

  const { setConversations } = useChatConversationStore();

  const { data: proceedings } = useProceedings(projectId, {
    page: currentPage,
  });

  useEffect(() => {
    if (proceedings) {
      const proceedingMap = proceedings.content.map((proceeding) => {
        return {
          id: proceeding.proceedingsId,
          name: proceeding.title,
        };
      });
      setConversations(proceedingMap);
    }
  }, [proceedings, setConversations]);

  return {
    proceedingMap: useChatConversationStore((state) => state.conversations),
  };
}
