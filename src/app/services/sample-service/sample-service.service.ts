import { Injectable } from '@angular/core';

export const globalSum = (a: number, b: number) => a + b;

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }

  sum(augend: number, addend: number): number {
    return augend + addend;
  }
}
