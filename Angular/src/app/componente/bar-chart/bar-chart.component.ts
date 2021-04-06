import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {UsuarioService} from '../../usuario.service';
import {UserChart} from '../UserChart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  userChart = new UserChart();

  ngOnInit(): void {
    this.usuarioService.carregarGrafico1().subscribe(data1 => {
      this.userChart = data1;

      this.barChartLabels1 = this.userChart.nomeLog.split(',');

      var arrayValores1 = JSON.parse('['+this.userChart.valDespesa+']')
      this.barChartData1 = [
        { data: arrayValores1, label: 'Consultor x Despesas (Valores)' }
      ];

    });

    this.usuarioService.carregarGrafico2().subscribe(data2 => {
      this.userChart = data2;

      this.barChartLabels2 = this.userChart.cliLog.split(',');

      var arrayValores2 = JSON.parse('['+this.userChart.valDespesa+']')
      this.barChartData2 = [
        { data: arrayValores2, label: 'Cliente x Despesas (Valores)' }
      ];

    });

    this.usuarioService.carregarGrafico3().subscribe(data3 => {
      this.userChart = data3;

      this.barChartLabels3 = this.userChart.tipoDesp.split(',');

      var arrayValores3 = JSON.parse('['+this.userChart.valDespesa+']')
      this.barChartData3 = [
        { data: arrayValores3, label: 'Tipo Despesa x Valor' }
      ];

    });

    this.usuarioService.carregarGrafico4().subscribe(data4 => {
      this.userChart = data4;

      this.barChartLabels4 = this.userChart.nomeLog.split(',');

      var arrayValores4 = JSON.parse('['+this.userChart.horaTotal+']')
      this.barChartData4 = [
        { data: arrayValores4, label: 'Consultor x Horas Trabalhadas' }
      ];

    });

    this.usuarioService.carregarGrafico5().subscribe(data5 => {
      this.userChart = data5;

      this.barChartLabels5 = this.userChart.cliLog.split(',');

      var arrayValores5 = JSON.parse('['+this.userChart.horaTotal+']')
      this.barChartData5 = [
        { data: arrayValores5, label: 'Clientes x Horas Apontadas' }
      ];

    });


    this.usuarioService.carregarGrafico6().subscribe(data6 => {
      this.userChart = data6;

      this.barChartLabels6 = this.userChart.cliLog.split(',');

      var arrayValores6 = JSON.parse('['+this.userChart.qtdeTotal+']')
      this.barChartData6 = [
        { data: arrayValores6, label: 'Cliente x Qtde OSs Apontadas' }
      ];

    });

  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
};

  barChartOptions4: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

barChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  barChartLabels1: Label[];
  barChartType1: ChartType = 'bar';
  barChartLegend1 = true;
  barChartPlugins1 = [];

  barChartData1: ChartDataSets[] = [
    { data: [], label: 'Consultor x Despesas (Valores)' }
  ];

  barChartLabels2: Label[];
  barChartType2: ChartType = 'bar';
  barChartLegend2 = true;
  barChartPlugins2 = [];

  barChartData2: ChartDataSets[] = [
    { data: [], label: 'Cliente x Despesas (Valores)' }
  ];

  barChartLabels3: Label[];
  barChartType3: ChartType = 'bar';
  barChartLegend3 = true;
  barChartPlugins3 = [];

  barChartData3: ChartDataSets[] = [
    { data: [], label: 'Tipo Despesa x Valor' }
  ];

  barChartLabels4: Label[];
  barChartType4: ChartType = 'bar';
  barChartLegend4 = true;
  barChartPlugins4 = [];

  barChartData4: ChartDataSets[] = [
    { data: [], label: 'Consultor x Horas Trabalhadas' }
  ];

  barChartLabels5: Label[];
  barChartType5: ChartType = 'bar';
  barChartLegend5 = true;
  barChartPlugins5 = [];

  barChartData5: ChartDataSets[] = [
    { data: [], label: 'Cliente x Horas Trabalhadas' }
  ];

  barChartLabels6: Label[];
  barChartType6: ChartType = 'bar';
  barChartLegend6 = true;
  barChartPlugins6 = [];

  barChartData6: ChartDataSets[] = [
    { data: [], label: 'Consultor x Horas Trabalhadas' }
  ];

}
