import DocumentHeader from "@/components/chips/proceedings/DocumentHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DocumentClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { useDocumentData } from "@/hooks/api/proceedings/useDocumentData";

export default function Document() {
  const { documentData, handler } = useDocumentData();
  const { title, contents, attendeeNames, createdAt } = documentData;
  const { handleSettingOpen } = handler;

  return (
    <div className={twMerge(DocumentClassesStyles.container)}>
      <DocumentHeader
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
  );
}
