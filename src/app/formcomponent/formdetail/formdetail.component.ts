import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.scss']
})
export class FormdetailComponent {

  profileForm: FormGroup;


  titulo: string = ""
  idCadastro: any;

  constructor(private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private route: Router,
    private fb: FormBuilder) {
    this.profileForm = this.CreateForm();

  }
  ngOnInit(): void {
    this.idCadastro = this.activatedRoute.snapshot.paramMap.get("id")
    this.titulo = this.idCadastro != "0" ? "Editar Cadastro" : "Novo Cadastro"
    if (this.idCadastro != "0") {
      this.buscaCadastro(this.idCadastro)
    }
  }
  private CreateForm(): FormGroup {
    return this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      address: this.fb.group({
        street: [null],
        city: [null],
        state: [null],
        zip: [null]
      })
    })

  }
  onSubmit() {
    this.adicionaCadastro()
  }

  buscaCadastro(idCadastro: any) {

    this.httpClient.get("http://localhost:3000/registrations/" + idCadastro).subscribe({
      next: (snapshot: any) => {
        console.log(snapshot)
        this.profileForm.patchValue(snapshot);
        return snapshot
      },
      error: () => {
        alert("Deu ruim")
      }
    })
  }


  adicionaCadastro() {

    const model = this.profileForm.value
    const id = this.idCadastro

    console.log(this.profileForm.value)

    if (this.idCadastro != "0") {


      this.httpClient.put("http://localhost:3000/registrations/" + id, model).subscribe({
        next: () => {
          console.log(model)
          this.profileForm.reset();
          alert("Produto atualizado com sucesso")
          this.route.navigateByUrl("/form")
        },
        error: () => {
          alert("Deu ruim")
        }
      })
    } else {
      delete this.idCadastro
      this.httpClient.post("http://localhost:3000/registrations", model).subscribe({
        next: () => {

          alert("Cadastro realizado com sucesso")
          this.route.navigateByUrl("/form")
        },
        error: () => {
          alert("Deu ruim")
        }
      })
    }
  }
}