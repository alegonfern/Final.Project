# Descripcion de la estructura y herramientas usadas

Este proyecto esta configurado para el uso de:

1. **Python:**
   - Definición: Lenguaje de programación de alto nivel conocido por su legibilidad y simplicidad. Es ampliamente utilizado en desarrollo web, científico, automatización y más.
   

2. **Bootstrap:**
   - Definición: Marco de diseño front-end que proporciona componentes y estilos predefinidos para ayudar a crear interfaces web atractivas y receptivas.
   - Descripción: Simplifica la creación de sitios web y aplicaciones con su conjunto de herramientas que incluye botones, formularios, barras de navegación y más. Ayuda a mantener la coherencia visual y la compatibilidad en diferentes dispositivos.

3. **FontAwesome:**
   - Definición: Biblioteca de iconos de fuente que ofrece una amplia gama de iconos vectoriales escalables para su uso en aplicaciones web y móviles.
   - Descripción: Permite agregar íconos elegantes y profesionales a tu sitio web sin necesidad de imágenes. Los íconos se pueden personalizar y ajustar fácilmente a través de CSS.

4. **React:**
   - Definición: Biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y reactivas.
   - Descripción: Permite dividir la interfaz en componentes reutilizables y dinámicos. Facilita la gestión eficiente de los estados y las actualizaciones en tiempo real de la interfaz de usuario.

5. **React Router DOM:**
   - Definición: Biblioteca que agrega enrutamiento a las aplicaciones React, permitiendo la navegación entre diferentes páginas sin necesidad de recargar la página completa.
   - Descripción: Facilita la creación de aplicaciones de una sola página (SPA) al gestionar las URL y renderizar componentes diferentes según la ruta en la que se encuentre el usuario.

6. **Context:**
   - Definición: Característica de React que permite compartir datos a través de componentes sin necesidad de pasar props manualmente de un componente a otro.
   - Descripción: Simplifica la administración del estado y la información global en una aplicación, lo que resulta útil para compartir datos como la autenticación del usuario o temas de diseño.

7. **Flask:**
   - Definición: Es un marco de desarrollo web de Python que se utiliza para construir aplicaciones web rápidas y simples.
   - Descripción: Proporciona las herramientas básicas para crear aplicaciones web,  permite elegir las bibliotecas y extensiones que desean usar.

8. **Flask Admin:**
   - Definición: Extensión de Flask que agiliza la creación de interfaces de administración para aplicaciones web construidas con Flask.
   - Descripción: Una forma rápida de generar interfaces de administración para manejar modelos y datos en una aplicación Flask, lo que facilita la gestión de contenidos y configuraciones.

9. **SQLite:**
   - Definición: Sistema de gestión de bases de datos relacional ligero y autónomo que se almacena en un solo archivo y no requiere un servidor de base de datos separado.
   - Descripción: Es ampliamente utilizado para aplicaciones locales o pequeñas debido a su simplicidad y portabilidad. Puede ser útil para prototipos o aplicaciones que no requieren una gran cantidad de usuarios o escalamiento.

10. **SQLAlchemy:**
    - Definición: Biblioteca de mapeo objeto-relacional (ORM) para Python que facilita la interacción con bases de datos SQL de manera orientada a objetos.
    - Descripción: Simplifica la gestión de bases de datos al permitir a los desarrolladores interactuar con las tablas y los registros de la base de datos como si fueran objetos Python, en lugar de escribir consultas SQL directamente.

11. **Alembic:**
    - Definición: Herramienta de migración de bases de datos para SQLAlchemy que ayuda a gestionar y aplicar cambios en la estructura de la base de datos a lo largo del tiempo.
    - Descripción: Automatiza la generación y aplicación de scripts de migración para mantener la base de datos sincronizada con los cambios en el esquema de datos a medida que evoluciona una aplicación.


## Cual es la Estructura de Carpetas y Arhivos?

- src:  Esta contiene la carpeta de Componentes y Store.
    - Componentes: Donde se almacenan todos los componentes .jsx
    - Store: Cotiene el archivo "UserContext" el cual maneja el Context de la aplicacion.
Junto con lo anterior esta el archivo index.js el cual renderiza el poryecto.

- venv:   Virtual Environment, directorio separado que contiene una instalación de Python y un conjunto de bibliotecas específicas para el proyecto. 
- app.py:  Archivo donde se crean los End Point importando el modelo de datos desde models.py
- models.py:  Archivo donde se estructura la base de datos.
- alembic/env.py: es parte de la configuración y funcionamiento del sistema de migraciones para bases de datos, es donde se importa la estructura de base de datos "models.py"

