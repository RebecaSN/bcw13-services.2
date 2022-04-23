import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoServiceService {
  
  private readonly baseURL = 'http://localhost:8080/servicos/servico'

  constructor(
    private http: HttpClient
  ) { }

  
}
