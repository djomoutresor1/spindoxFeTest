import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/service/portfolio-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  getAllData: any;


  constructor(private portfolioServiceService: PortfolioServiceService) { }

  ngOnInit() {
    this.portfolioServiceService.getAllData().subscribe((data: any) => {
      console.log(data);
      this.getAllData = data.results
    })
  }
  reload() {
    window.location.reload();
  }
}
