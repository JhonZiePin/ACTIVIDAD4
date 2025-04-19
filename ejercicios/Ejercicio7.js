let facturacionTotal = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;

for (let i = 1; i <= 5; i++) {
  let codigo = parseInt(prompt(`Factura ${i} - Ingresa el código del artículo:`));
  let litros = parseFloat(prompt(`Factura ${i} - Ingresa la cantidad vendida en litros:`));
  let precioPorLitro = parseFloat(prompt(`Factura ${i} - Ingresa el precio por litro:`));

  let totalFactura = litros * precioPorLitro;
  facturacionTotal += totalFactura;

  if (codigo === 1) {
    litrosArticulo1 += litros;
  }

  if (totalFactura > 600) {
    facturasMayores600++;
  }
}

let resultado = `Facturación total: $${facturacionTotal.toFixed(2)}\n`;
resultado += `Litros vendidos del artículo 1: ${litrosArticulo1} litros\n`;
resultado += `Facturas con importe mayor a $600: ${facturasMayores600}`;

alert(resultado);