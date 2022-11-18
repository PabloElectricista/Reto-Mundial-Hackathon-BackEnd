# Reto-Mundial-Hackathon-BackEnd

![RetoLogo](https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2021-10/fifa-2022-world-cup-logo-qatar_z5t4wjudq9ty1mh5kqpn38ott.jpg?itok=LTKS3GuA)

## Objetivos del Proyecto

- Construir una App que facilite la consulta de las estadisticas, probabilidades y interes para elegir al nuevo Campeon del Mundo.
- Funcion de logearse y votar por un pais de su elección para decidir al Campeon del Mundo.
- Poder ver los horarios de los partidos y poder seleccionar como quedara el marcador.
- Despues de recopilar los datos necesarios mostar al Campeon del Mundo.

#### Tecnologías necesarias

- [ ] MongoDB
- [ ] Mongoose
- [ ] Angular

## Frontend

**Pagina inicial**: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar recetas por nombre
- [ ] Botones/Opciones para filtrar por por tipo de dieta
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
- [ ] Paginado para ir buscando y mostrando los grupos durante todo el mundial.

**Ruta de creación de Usuarios**: debe contener

- [ ] Un formulario **controlado con JavaScript** con los siguientes campos:
  - Nombre
  - Email
  - Password
  - Nationality
- [ ] Botón/Opción para crear un nuevo usuario

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

**IMPORTANTE**: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] **GET /recipes?name="..."**:
  - Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  - Si no existe ninguna receta mostrar un mensaje adecuado
- [ ] **GET /recipes/{idReceta}**:
  - Obtener el detalle de una receta en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de receta
  - Incluir los tipos de dieta asociados
- [ ] **POST /recipes**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
  - Crea una receta en la base de datos relacionada con sus tipos de dietas.
- [ ] **GET /diets**:
  - Obtener todos los tipos de dieta posibles
  - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)

## Colaboradores

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
<div style="display: flex; flex-direction: column;">

1. Florencia Galindez Casas:

- **LinkedIn**:
<a href="#" style="font-size: 15px;">Florencia</a>
  <p>
    <img src="https://avatars.githubusercontent.com/u/94094158?v=4" style="border-radius: 30px; height: 250px;"/>
  </p>
</div>
<div style="display: flex; flex-direction: column;">

2. Pablo Spector:

- **LinkedIn**:
<a href="https://www.linkedin.com/in/pablo-spector/" style="font-size: 15px;">Pablo</a>
  <p>
    <img src="https://avatars.githubusercontent.com/u/40707996?v=4" style="border-radius: 30px; height: 250px;"/>
  </p>
</div>
<div style="display: flex; flex-direction: column;">

3. Frank Santos:

- **LinkedIn**:
<a href="https://www.linkedin.com/in/frank-erick-santos-gonzales-80a84015b/" style="font-size: 15px;">Frank</a>
  <p>
    <img src="https://avatars.githubusercontent.com/u/77626612?s=96&v=4" style="border-radius: 30px; height: 250px;"/>
  </p>
</div>
<div style="display: flex; flex-direction: column;">

4. Lainer:

- **LinkedIn**:
<a href="#" style="font-size: 15px;">Lainer</a>
</div>
<div style="display: flex; flex-direction: column;">

5. Yeick Jacson:

- **LinkedIn**:
  <a href="#" style="font-size: 15px;">Yeick</a>

</div>
</div>
