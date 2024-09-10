const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingresa tu numero: "));
    if (numero >= 1 && numero <= 20 && !isNaN(numero)) {
      // tabla de multiplicar
      for (let i = 1; i < numero; i++) {
        let multiplicacion = i * numero;
        console.log(`${i} x ${numero} = ${multiplicacion}`);   
      }
      // calcular factorial
      for (let i = 1; i <= numero; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
          factorial *= j;
        }
        console.log(`El factorial de ${i} es: ${factorial}`);
      }
    }else{
      console.log("Numero fuera de rango")
    }
  };
  solicitarNumero();