import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCupom';

   imagens = [
    {
      imageSrc:
      'https://www.reclamefacil.com.br/app/thumbs.php?img=../uploads/img/empresas/51/a4734b3d7e8ea850f134e1db4816df35.jpg&w=500&h=500',
       //'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://cdn.pegadesconto.com.br/logotipo-pichau-informatica-1.png',
      imageAlt: 'nature2',
    },
    
  ]
  
}
