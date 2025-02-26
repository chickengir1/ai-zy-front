import { navigationState } from "@/utils/constants";
import { useState } from "react";
import { useCustomMentions } from "@/hooks/ui/chatInterface/useCustomMentions";

export function useKeyboardNavigation() {
  const initialIndex = navigationState.Initial;
  const inactiveIndex = navigationState.Inactive;
  const activeIndex = navigationState.Active;

  const { mentionState, handlers } = useCustomMentions();
  const { filteredItems } = mentionState;
  const { handleSelect } = handlers;

  const items = filteredItems();

  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);

  function getNextIndex(current: number, max: number) {
    if (current === inactiveIndex) return activeIndex;
    return current < max ? current + 1 : activeIndex;
  }

  function getPrevIndex(current: number, max: number) {
    if (current === inactiveIndex) return max;
    return current > activeIndex ? current - 1 : max;
  }

  function isValidIndex(index: number, itemsLength: number) {
    return index >= activeIndex && index < itemsLength;
  }

  function handleKeyDown(e: KeyboardEvent) {
    const LAST_ITEM_INDEX = items.length - 1;

    if (e.key === "ArrowDown") {
      setSelectedIndex(getNextIndex(selectedIndex, LAST_ITEM_INDEX));
    }

    if (e.key === "ArrowUp") {
      setSelectedIndex(getPrevIndex(selectedIndex, LAST_ITEM_INDEX));
    }

    if (e.key === "Enter" && isValidIndex(selectedIndex, items.length)) {
      e.preventDefault();
      handleSelect(items[selectedIndex]);
      setSelectedIndex(initialIndex);
    }
  }

  function createKeyboardHandler(handler: (e: KeyboardEvent) => void) {
    return (e: Event.KeyboardEventType) => {
      handler(e.nativeEvent);
    };
  }

  return {
    activeItems: {
      selectedIndex,
    },
    keyboardHandlers: {
      handleKeyDown,
      createKeyboardHandler,
    },
  };
}
