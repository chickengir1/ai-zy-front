import { useTodolist as getTodolist } from "@/hooks/api/todolist/useTodolist";
import { useParamsId, useParamsValues } from "@/hooks/utility/common/useParams";

export const useTodolistData = () => {
  const { searchParams } = useParamsValues("page");
  const currentPage = searchParams.get("page") || "0";

  const projectId = useParamsId();

  const { data } = getTodolist(projectId, { page: String(currentPage) });
  const { content } = data;

  return { content };
};
