# pagina-polleria-jsa
## 1. Gestión de Datos y Estructuras

**Responsable:** Víctor Flores

### Objetivo del Módulo
Construir la base de datos simulada del sistema utilizando programación orientada a objetos, colecciones especializadas y notación JSON. Este módulo actúa como el generador de los datos iniciales que el resto de los módulos consumirá.

### Responsabilidades Técnicas
* Definir la clase `Producto` implementando el método `constructor` para inicializar propiedades.
* Instanciar un arreglo lineal (`menuPrincipal`) con múltiples objetos creados a partir de la clase.
* Implementar la colección estructurada `Map` (`inventario`) para vincular el ID de cada producto con su stock disponible.
* Implementar la colección estructurada `Set` (`categoriasUnicas`) para extraer las categorías del menú sin valores duplicados.
* Aplicar `JSON.stringify` para transformar el arreglo de objetos en una cadena de texto JSON.
* Declarar todas las estructuras como constantes globales en la parte superior del código.

### Contrato de Datos (Salidas)
Este módulo no recibe parámetros de entrada. Su responsabilidad es exportar las siguientes variables exactas para los demás módulos:

1. **`menuPrincipal` (Array de Objetos)**
   * `id`: Number (ejemplo: 1)
   * `nombre`: String (ejemplo: "1/4 de Pollo a la Brasa")
   * `precio`: Number (ejemplo: 22.00)
   * `categoria`: String (ejemplo: "Pollos")

2. **`inventario` (Map)**
   * Clave: Number (`id` del producto)
   * Valor: Number (stock disponible)

3. **`categoriasUnicas` (Set)**
   * Valores: String (categorías extraídas del menú)

4. **`menuJSON` (String)**
   * Serialización formateada de la variable `menuPrincipal`.
