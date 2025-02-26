import { useProceedings } from "@/hooks/api/proceedings/useProceedings";
import { useParams } from "react-router-dom";

interface MeetingsDataProps {
  page: string;
  limit: string;
}

export function useMeetingsData(props: MeetingsDataProps) {
  const { page, limit } = props;
  const { id } = useParams();
  const projectId = id as string;

  const { data: meetings } = useProceedings(projectId, { page, limit });
  const meetingItems = meetings?.content || [];

  return { meetingItems, projectId };
}
