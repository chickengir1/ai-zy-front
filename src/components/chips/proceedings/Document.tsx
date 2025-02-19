import DocumentHeader, { MeetingHeaderProps } from "./DocumentHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DocumentClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

interface DocumentProps extends MeetingHeaderProps {
  content: string;
}

export default function Document({
  title,
  date,
  participantCount,
  participantNames,
  content,
  onClickSetting,
}: DocumentProps) {
  return (
    <div className={twMerge(DocumentClassesStyles.container)}>
      <DocumentHeader
        title={title}
        date={date}
        participantCount={participantCount}
        participantNames={participantNames}
        onClickSetting={onClickSetting}
      />
      <ReactMarkdown className="prose max-w-none" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
