"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

export function LineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Sample data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data = [3500, 4200, 3800, 5100, 4800, 5500, 6000, 5800, 6500, 7000, 6800, 7500]

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Revenue",
            data,
            borderColor: "hsl(36, 33%, 30%)",
            backgroundColor: "rgba(255, 237, 213, 0.5)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `$${value}`,
            },
          },
        },
      },
    })

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

export function BarChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Sample data
    const labels = ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"]
    const data = [35, 25, 20, 15, 5]

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Sales Percentage",
            data,
            backgroundColor: [
              "rgba(255, 237, 213, 0.8)",
              "rgba(255, 218, 185, 0.8)",
              "rgba(255, 204, 153, 0.8)",
              "rgba(255, 178, 102, 0.8)",
              "rgba(255, 153, 51, 0.8)",
            ],
            borderColor: [
              "hsl(36, 33%, 30%)",
              "hsl(36, 33%, 30%)",
              "hsl(36, 33%, 30%)",
              "hsl(36, 33%, 30%)",
              "hsl(36, 33%, 30%)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
        },
      },
    })

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
