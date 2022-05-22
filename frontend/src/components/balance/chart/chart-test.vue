<template>
  <div>
    <div id="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { GaugeChart } from '@toast-ui/chart';

@Component({ components: {} })
export default class ChartTest extends Vue {
  private test = '';

  mounted() {
    const el = document.getElementById('chart');
    const data = {
      series: [
        {
          name: 'Speed',
          data: [80],
        },
      ],
    };
    const options = {
      chart: { width: 300, height: 300 },
      series: {
        solid: true,
        dataLabels: { visible: true, offsetY: -30, formatter: (value: any) => `${value}%` },
      },
      theme: {
        circularAxis: {
          lineWidth: 0,
          strokeStyle: 'rgba(0, 0, 0, 0)',
          tick: {
            lineWidth: 0,
            strokeStyle: 'rgba(0, 0, 0, 0)',
          },
          label: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
        series: {
          dataLabels: {
            fontSize: 40,
            fontFamily: 'Impact',
            fontWeight: 600,
            color: '#00a9ff',
            textBubble: {
              visible: false,
            },
          },
        },
      },
    };

    if (el) {
      const chart = new GaugeChart({ el, data, options });
    }
  }
}
</script>
