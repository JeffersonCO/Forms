import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.scss']
})
export class FormcomponentComponent {

  

  cadastros: any[] = []


  constructor(private httpClient: HttpClient,) {

  }
  ngOnInit(): void {

    this.mostraDados();
  }
  mostraDados() {
    this.httpClient.get("http://localhost:3000/registrations").subscribe({
      next: (snapshot: any) => {
        console.log(snapshot);
        this.cadastros = snapshot;
        return snapshot;
      },
      error: (error) => {
        alert("Deu ruim")
      }
    })

  }
  removerCadastro(cadastro: any) {
    console.log(cadastro)
    this.httpClient.delete("http://localhost:3000/registrations/" + cadastro.id).subscribe({
      next: () => {
        this.mostraDados();
      },
      error: (error) => {
        alert("Deu ruim")
      }
    })

  }


}
