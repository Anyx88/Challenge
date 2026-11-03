// 1. VARIABLES 
// Añadimos espacios para probar 'trim'
let Cliente = "   juan_perez   "; 
let codigoCupon = "PROMO2026";
let precio = 500;

// 2. OPERADORES 
let subtotal = precio * 2;   
let totalFinal = subtotal - 100; // Resta directa


// 3. MÉTODOS DE STRINGS
// trim: Elimina los espacios vacíos del inicio y del final
let clienteLimpio = Cliente.trim(); 

// split: Corta el texto limpio en el guion bajo "_"
let partes = clienteLimpio.split("_"); 
let nombre = partes[0];    // juan 
let apellido = partes[1];  // perez 

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

// replace: Cambia el año del cupón por el próximo año para mostrarlo en el mensaje
let cuponSiguienteAnio = codigoCupon.replace("2026", "2027");


// 4. TEMPLATE LITERALS 
let mensaje = `
----- DATOS DEL CLIENTE -----
Nombre completo: ${nombreMayuscula} ${apellidoMinuscula}
Inicial: ${inicial}
Resto del nombre: ${resto}

----- DATOS DEL CUPÓN -----
¿El cupón empieza con PROMO?: ${empiezaConPromo}
¿El cupón termina en 2026?: ${terminaEn2026}
Sugerencia para el próximo año: ${cuponSiguienteAnio}

----- TOTALES -----
Subtotal: $${subtotal}
Descuento aplicado: -$100
TOTAL A PAGAR: $${totalFinal}
`;

console.log(mensaje); 

