import DocumentHeader, { MeetingHeaderProps } from "./DocumentHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="mx-auto min-h-[500px] w-full max-w-5xl space-y-6 rounded-lg bg-white p-4 shadow-md">
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
