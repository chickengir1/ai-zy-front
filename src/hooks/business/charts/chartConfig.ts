export const DEFAULT_CHART_CONFIG = {
  chartColors: {
    backgroundColors: [
      "rgba(93, 173, 226, 0.2)",
      "rgba(231, 76, 60, 0.2)",
      "rgba(46, 204, 113, 0.2)",
      "rgba(241, 196, 15, 0.2)",
      "rgba(155, 89, 182, 0.2)",
    ],
    borderColors: [
      "rgba(52, 152, 219, 1)",
      "rgba(192, 57, 43, 1)",
      "rgba(39, 174, 96, 1)",
      "rgba(243, 156, 18, 1)",
      "rgba(142, 68, 173, 1)",
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 35,
    cutout: "40%",
  },
  chartPlugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 20,
        font: {
          size: 14,
        },
        color: "#4b5563",
      },
    },
  },
  chartTooltip: {
    backgroundColor: "#1f2937",
    titleColor: "#f3f4f6",
    bodyColor: "#f3f4f6",
    padding: 12,
    cornerRadius: 8,
    displayColors: false,
  },
  chartElements: {
    arc: {
      borderWidth: 0.5,
      borderRadius: 2,
    },
  },
};
