import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public codigo: string;

  constructor(private http: HttpClient) { }

  logOn(event) {
    event.preventDefault();
    console.log('teste', event.target.codigo.value);

    this.http.get<any>('http://homologacao.searh.rn.gov.br/Saegrn/Certificado/ConsultaJson?CodigoVerificadorCertificado=5720F38F')
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log('Error', error);
      });
  }
}
