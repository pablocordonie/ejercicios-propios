function stringVacio(value) {
    let resultado = !Boolean(value);
    if (resultado) {
      return `Esta operación no es válida`;
    }
  }
  
  console.log(stringVacio(''));