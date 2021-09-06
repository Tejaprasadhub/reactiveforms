import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusdata: any;
  daysRange:any=[];
  ourPatientsData:any=[];
  ourDepartmentsData:any=[];
  latestRegistrations:any=[];
  constructor() { }

  ngOnInit(): void {
    this.ourPatientsData = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            "#448fab",
            "#008000"
          ],
          hoverBackgroundColor: [
            "#448fab",
            "#008000"
          ]
        }]
    };
    this.statusdata = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: '2019',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#448fab'
        },
        {
          label: '2020',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#008000'
        }
      ]
    }

    this.ourDepartmentsData = {
      datasets: [{
        data: [
          25,
          16,
          7
        ],
        backgroundColor: [
          "#448fab",
          "#008000",
          "#d69d33"
        ],
        label: 'My dataset'
      }],
      labels: [
        "A",
        "B",
        "C"
      ]
    }

    this.daysRange = [
      { label: 'Select Range', value: '' },
      { label: '1 day', value: '1' },
      { label: '1 Week', value: '7' },
      { label: '1 Month', value: '30' }
    ];
    this.latestRegistrations=[
      {
        "name":"Prasad",
        "email":"xyz@gmail.com",
        "date":"10-10-2020",
        "time":"10:15 10:30",
        "number":"489448484",
        "doctor":"badhram",
        "injury":"Knee injury"
      },
      {
        "name":"Rahul",
        "email":"rahul@gmail.com",
        "date":"10-10-2020",
        "time":"10:30 10:30",
        "number":"21115616516",
        "doctor":"badhram",
        "injury":"hand"
      },
      {
        "name":"Vamsee",
        "email":"vamsee@gmail.com",
        "date":"10-10-2020",
        "time":"10:25 10:30",
        "number":"8949494949",
        "doctor":"badhram",
        "injury":"leg fracture"
      },
      {
        "name":"vasu",
        "email":"vasu@gmail.com",
        "date":"10-10-2020",
        "time":"10:15 10:30",
        "number":"84797488484",
        "doctor":"badhram",
        "injury":"bone fracture"
      },
      {
        "name":"rakesh",
        "email":"rakesh@gmail.com",
        "date":"10-10-2020",
        "time":"10:15 10:30",
        "number":"8165161465",
        "doctor":"Mohan",
        "injury":"Knee1"
      }
      
    ]
  }

}
