class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

const menuPrincipal = [
    new Producto(1, "1/4 de Pollo a la Brasa", 22.00, "Pollos"),
    new Producto(2, "1/2 Pollo a la Brasa", 34.00, "Pollos"),
    new Producto(3, "Pollo a la Brasa Entero", 64.00, "Pollos"),
    new Producto(4, "Mostrito de Pollo a la Brasa", 29.00, "Mostritos"),
    new Producto(5, "Arroz Chaufa de Pollo Especial", 19.90, "Chaufas"),
    new Producto(6, "Mollejitas a la Parrilla", 22.00, "Mollejitas"),
    new Producto(7, "Ensalada Fresca Familiar", 12.00, "Ensaladas"),
    new Producto(8, "Chicha Morada Natural 1.5 L", 12.00, "Bebidas")
];

const inventario = new Map();
inventario.set(1, 50);
inventario.set(2, 40);
inventario.set(3, 30);
inventario.set(4, 25);
inventario.set(5, 20);
inventario.set(6, 15);
inventario.set(7, 35);
inventario.set(8, 60);

const categoriasUnicas = new Set();
for (const producto of menuPrincipal) {
    categoriasUnicas.add(producto.categoria);
}

const menuJSON = JSON.stringify(menuPrincipal, null, 2);