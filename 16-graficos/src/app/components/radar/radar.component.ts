import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent {
  // radarChart
    public radarChartLabels: string[] = ['Ritmo', 'Tiro', 'Pase', 'Regate', 'Defensa', 'Físico'];

    public radarChartData: any = [
      {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];

    public radarChartType = 'radar';

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
}
