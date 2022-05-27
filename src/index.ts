import "./styles.css";

let nBase: number | null = Number(prompt("Ingrese el número base."));
let nExponente: number | null = Number(prompt("Ingrese el número exponente."));

function calcularPotencia(nBase: number, nExponente: number) {
  let resultado: number = 1;

  while (nExponente < 0) {
    nExponente = Number(
      prompt(
        "No se admiten exponentes menores a cero. Por favor ingrese un número mayor o igual que cero."
      )
    );
  }
  if (nExponente === 0) {
    resultado = 1;
  } else {
    for (let i = 1; i <= nExponente; i++) {
      resultado = resultado * nBase;
    }
  }

  console.log(nBase + " ^ " + nExponente + " = " + resultado);
}

calcularPotencia(nBase, nExponente);
