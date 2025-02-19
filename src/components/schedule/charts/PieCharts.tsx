import { Pie } from "react-chartjs-2";
import { usePieChart } from "@/hooks/ui/charts/useChart";

interface PieChartsProps {
  labels: string[];
  data: number[];
}

export default function PieCharts({ labels, data }: PieChartsProps) {
  const { getChartOptions, getChartData } = usePieChart();
  const chartData = getChartData(labels, data);

  const hasData = data.some((value: number) => value > 0);

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-center text-lg font-medium">태그별 작업 현황</h2>
      <div className="relative mx-auto flex">
        {hasData ? (
          <Pie
            data={chartData}
            options={getChartOptions()}
            className="h-64 w-64"
          />
        ) : (
          <div className="flex w-full items-center justify-center text-center text-gray-500">
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
              <p className="text-sm">데이터가 없습니다</p>
              <p className="mt-1 text-xs">작업을 추가해보세요</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
