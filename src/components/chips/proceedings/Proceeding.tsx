import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";
import { useProceedingData } from "@/hooks/api/proceedings/useProceedingData";
import { ProceedingStyles } from "@/utils/styles/global";
import ProceedingHeader from "@/components/chips/proceedings/ProceedingHeader";
import { useCommandKey } from "@/hooks/utility/toggle/useCommandKey";

export default function Proceeding() {
  const { proceedingData, handler } = useProceedingData();
  const { title, contents, attendeeNames, createdAt } = proceedingData;
  const { handleSettingOpen } = handler;

  const { proceeding } = useCommandKey();
  const { settingProceedingButton, settingProceedingModal } = proceeding;

  return (
    <>
      <div className={twMerge(ProceedingStyles.container)}>
        <ProceedingHeader
          title={title}
          date={createdAt}
          participantCount={attendeeNames.length}
          participantNames={attendeeNames}
          onClickSetting={handleSettingOpen}
        />
        <ReactMarkdown className="prose max-w-none" remarkPlugins={[remarkGfm]}>
          {contents}
        </ReactMarkdown>
      </div>
      {settingProceedingButton()}
      {settingProceedingModal()}
    </>
  );
}
