import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
  Chart,
} from "chart.js";
import {
  chartColors,
  chartOptions,
  chartPlugins,
  chartTooltip,
  chartElements,
} from "@/utils/helpers/chartConfig";

ChartJS.register(ArcElement, Tooltip, Legend);

const drawCenterText = (ctx: CanvasRenderingContext2D, fontSize: number) => {
  ctx.save();
  ctx.font = `${fontSize.toFixed(2)}px sans-serif`;
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.restore();
};

const calculateTotalData = (dataset: { data: (number | string)[] }): number => {
  return dataset.data.reduce(
    (acc: number, value: number | string) => acc + Number(value),
    0
  );
};

const centerTextPlugin: Plugin<"pie"> = {
  id: "centerText",
  beforeDraw: (chart: Chart<"pie">) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    const { height } = chartArea;
    const dataset = chart.data.datasets[0];
    const total = calculateTotalData(dataset);

    if (total > 0) {
      const fontSize = height / 4;
      drawCenterText(ctx, fontSize);
    }
  },
};

ChartJS.register(centerTextPlugin);

export function usePieChart() {
  function getChartColors() {
    return {
      ...chartColors,
    };
  }

  function getChartOptions() {
    return {
      ...chartOptions,
      plugins: {
        ...chartPlugins,
        tooltip: {
          ...chartTooltip,
        },
      },
      elements: {
        ...chartElements,
      },
    };
  }
  function getChartData(labels: string[], data: number[]) {
    const { backgroundColors, borderColors } = getChartColors();
    return {
      labels,
      datasets: [
        {
          label: "태그된 작업 수",
          data,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 0.5,
        },
      ],
    };
  }

  return { getChartOptions, getChartColors, getChartData };
}
