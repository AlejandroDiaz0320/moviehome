import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = "https://www.themoviedb.org/authenticate/c1ac7b189ac0b5ee0f2b5fa68fe58eca";

  constructor() { }
}
