import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  projects = [
    {
      'title': 'Image Recognition',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png' 
    },
    {
      'title': 'NLP',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png'
    },
    {
      'title': 'Statistics',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png'
    },
    {
      'title': 'Data Visualization',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png'
    },
    {
      'title': 'Tableau',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png'
    },
    {
      'title': 'R',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'date': 'Jan 15, 2021',
      'url': 'Portfolio-Angular-master',
      'imagePath': './../assets/images/github-image.png'
    }
  ]
}
