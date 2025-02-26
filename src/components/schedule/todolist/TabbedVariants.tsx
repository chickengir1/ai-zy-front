import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { TabbedFormInputProps } from "./TabbedFormInput";
import { twMerge } from "tailwind-merge";
import SelectWrapper from "@/components/ui/select/SelectWrapper";
import Select from "@/components/ui/select/Select";
import { useTodolist } from "@/hooks/ui/todolist/useTodolist";

interface TabbedVariantsProps extends TabbedFormInputProps {
  activeTab: "title" | "tag" | "priority";
}

export function TabbedVariants({
  activeTab,
  tags,
  priorities,
}: TabbedVariantsProps) {
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
            SidebarClassesStyles.inputClasses,
            SidebarClassesStyles.listClasses,
            SidebarClassesStyles.inputFocus
          )}
        />
      )}
      {activeTab === "tag" && (
        <SelectWrapper>
          <Select
            name="tag"
            value={todoForm.tag}
            onChange={handleChangeTodo}
            options={tags}
          />
        </SelectWrapper>
      )}
      {activeTab === "priority" && (
        <SelectWrapper>
          <Select
            name="priority"
            value={todoForm.priority}
            onChange={handleChangeTodo}
            options={priorities}
          />
        </SelectWrapper>
      )}
    </>
  );
}
