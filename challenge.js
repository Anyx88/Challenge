// 1. VARIABLES 
let Cliente = "juan_perez";
let codigoCupon = "PROMO2026";
let precio = 500;

// 2. OPERADORES 
let subtotal = precio * 2;   
let totalFinal = subtotal - 100; // Resta directa


// 3. MÉTODOS DE STRINGS
// split: Corta el texto en el guion bajo "_"
let partes = Cliente.split("_"); 
let nombre = partes[0];    // Juan 
let apellido = partes[1];  // Perez 

// toUpperCase y toLowerCase: Mayúsculas y minúsculas
let nombreMayuscula = nombre.toUpperCase(); 
let apellidoMinuscula = apellido.toLowerCase(); 

// substring: Extrae la primera letra
let inicial = nombreMayuscula.substring(0, 1); 

// slice: Corta y se queda con el resto del texto
let resto = nombreMayuscula.slice(1); 

// startsWith y endsWith: 
let empiezaConPromo = codigoCupon.startsWith("PROMO"); 
let terminaEn2026 = codigoCupon.endsWith("2026"); 

// 4. TEMPLATE LITERALS 
let mensaje = `
----- DATOS DEL CLIENTE -----
Nombre completo: ${nombreMayuscula} ${apellidoMinuscula}
Inicial: ${inicial}
Resto del nombre: ${resto}

----- DATOS DEL CUPÓN -----
¿El cupón empieza con PROMO?: ${empiezaConPromo}
¿El cupón termina en 2026?: ${terminaEn2026}

----- TOTALES -----
Subtotal: $${subtotal}
Descuento aplicado: -$100
TOTAL A PAGAR: $${totalFinal}
`;

console.log(mensaje);

