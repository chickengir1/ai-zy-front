import { twMerge } from "tailwind-merge";
import { useTodolist } from "@/hooks/business/todolist/useTodolist";
import { SidebarStyles } from "@/utils/styles/global";
import { state } from "@/utils/todolist/todolistUtils";
import Select from "@/components/ui/select/Select";
import SelectWrapper from "@/components/ui/select/SelectWrapper";

interface TabbedVariantsProps {
  activeTab: Todo.TodoTab;
}

export function TabbedVariants({ activeTab }: TabbedVariantsProps) {
  const { form, handler } = useTodolist();
  const { handleChangeTodo } = handler;
  const { form: todoForm } = form;

  return (
    <>
      {activeTab === "title" && (
        <input
          type="text"
          name="title"
          placeholder="투두리스트 내용을 입력하세요"
          value={todoForm.title}
          onChange={handleChangeTodo}
          className={twMerge(
            SidebarStyles.inputClasses,
            SidebarStyles.listClasses,
            SidebarStyles.inputFocus
          )}
        />
      )}

      {activeTab === "state" && (
        <SelectWrapper>
          <Select
            name="state"
            value={todoForm.state}
            onChange={handleChangeTodo}
            options={state}
          />
        </SelectWrapper>
      )}
    </>
  );
}
