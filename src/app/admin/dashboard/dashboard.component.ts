import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Chart } from 'chart.js';
import * as Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public rt:Router) { }
  myChart:any;
  ngOnInit(): void {
   
this.chart()
  }

chart(){
    let stackedBarChartElement : any = document.getElementById("stackedBar");
    var myChart = new Chart(stackedBarChartElement, {
    type: 'doughnut',
    data: {
        labels: ['New Candidates', 'Total vacancies', 'Evaluation Inprogress','Evaluated'],
        datasets: [{
          label: 'My First Dataset',
          data:[]= [60 ,20,30,40],
          backgroundColor:[]= [
            '#FA5663',
            '#FFBE04',
            '#B275D4',
            '#4D8AFE'
          ],
          
        }]
    },
     plugins: [ChartDataLabels],
    
   options:{
    legend: {
      display: true,
      position:'right',

},
plugins: {
  datalabels: {
    color: 'white'}}
   }
})

  }
}
