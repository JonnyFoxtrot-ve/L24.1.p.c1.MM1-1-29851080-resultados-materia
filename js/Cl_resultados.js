export default class Cl_resultados {
  constructor() {
    this.contA = 0;
    this.contR = 0;
    this.acum = 0;
    this.contTotal = 0;
  }

  cantAprobados() {
    return this.contA;
  }

  cantReprobados() {
    return this.contR;
  }

  nPromedio() {
    return this.acum / this.contTotal;
  }
  procesare(e) {
    this.acum += e.notaF;
    this.contTotal++;
    if (e.notaF >= 48) {
      this.contA++;
    } else if (e.notaF < 48) {
      this.contR++;
    }
  }
}
