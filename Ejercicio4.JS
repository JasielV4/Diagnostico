let fruta = { // Creación del objeto con sus características
    nombre: "Manzana",
    color: "Rojo",
    peso: 150,
    describir: function() {
        return `La fruta es una ${this.nombre} de color ${this.color} y pesa ${this.peso} gramos.`;
    }
};

// Propiedades del objeto
console.log(fruta.nombre); // Salida: "Manzana"
console.log(fruta.color); // Salida: "Rojo"

// Se llama al método del objeto
console.log(fruta.describir()); 