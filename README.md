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


## Cual es la Estructura de Carpetas y Archivos?

- src:  Esta contiene la carpeta de Componentes y Store.
    - Componentes: Donde se almacenan todos los componentes .jsx
    - Store: Cotiene el archivo "UserContext" el cual maneja el Context de la aplicacion.
Junto con lo anterior esta el archivo index.js el cual renderiza el poryecto.

- venv:   Virtual Environment, directorio separado que contiene una instalación de Python y un conjunto de bibliotecas específicas para el proyecto. 
- app.py:  Archivo donde se crean los End Point importando el modelo de datos desde models.py
- models.py:  Archivo donde se estructura la base de datos.
- alembic/env.py: es parte de la configuración y funcionamiento del sistema de migraciones para bases de datos, es donde se importa la estructura de base de datos "models.py"

## Sobre que Archivos o Carpetas trabajaremos?

- Carpeta: Components para crear los distintos componentes ".jsx" del proyecto
- Archivos: Los siguientes archivos ".jsx" y ".py" son sobre los que se ira desarrollando el codigo que le dara vida a la aplicacion.
      -app.py
      -models.py
      -UserContext.jsx
      -index.jsx
      -alembic/env.py



# Instalar las bibliotecas necesarias y ejecutar una aplicación Flask. 

**Paso 1: Creación de un Entorno Virtual**
1. Abre una terminal o línea de comandos.
2. Navega al directorio raíz de tu proyecto.
3. Ejecuta el siguiente comando para crear un entorno virtual:

   ```
   python -m venv venv
   ```

4. Activa el entorno virtual con el siguiente comando:

    ```
    venv\Scripts\activate
    ```

**Paso 2: Instalación de Paquetes**

Dentro del entorno virtual activado, instala las siguientes bibliotecas necesarias para tu aplicación Flask:
   - Lista las librerias instaladas en el entorno virtual: `pip list`
   - Flask: `pip install Flask`
   - Flask-SQLAlchemy: `pip install Flask-SQLAlchemy`
   - Flask-Admin: `pip install flask-admin`
   - requests: `pip install requests`
   - Flask-Migrate: `pip install Flask-Migrate`
   - flas-bcrypt: `pip install flask-bcrypt`


**Paso 3: Estructura del Proyecto**

Asegúrate de tener la estructura adecuada con un archivo `app.py` que contiene tu aplicación Flask y los modelos definidos en otro archivo `models.py` ambos archivos en el directorio raiz.

**Paso 4: Configuración de Flask-Admin**

Configura Flask-Admin en tu aplicación Flask, definiendo vistas y modelos para administrar en el archivo `app.py`. Ejemplo:

   ```python
   from flask_admin import Admin
   from models import User
   admin = Admin(app, name="Admin", template_mode="bootstrap3")
   admin.add_view(ModelView(User, db.session))
   ```

Lo anterior se traduce en:

- from flask_admin import Admin: Importa la clase Admin del módulo flask_admin. Flask-Admin es una extensión de Flask que facilita la creación de una interfaz de administración web para tu aplicación.

- from models import User: Importa la clase User desde el módulo models. Esto asume que tienes un archivo llamado models.py en tu proyecto donde has definido la clase User. Esta línea importa el modelo de datos de usuario que deseas administrar.

- admin = Admin(app, name="Admin", template_mode="bootstrap3"): Crea una instancia de la clase Admin llamada admin y la configura:

   - Admin(app, name="Admin", template_mode="bootstrap3"): Crea una instancia de Admin que estará vinculada a tu aplicación Flask (app).
   - name="Admin": Define un nombre para tu interfaz de administración, que se mostrará en la página de administración.
   - template_mode="bootstrap3": Especifica el modo de plantilla que se utilizará para la interfaz de administración. En este caso, se utiliza el modo "bootstrap3", que se refiere a un estilo basado en Bootstrap 3 para la apariencia de la interfaz.

- admin.add_view(ModelView(User, db.session)): Agrega una vista para el modelo de datos User a la interfaz de administración. Esto se desglosa de la siguiente manera:

- ModelView(User, db.session): Crea una vista para el modelo User. Aquí, User es el modelo de datos que quieres administrar, y db.session es la sesión de base de datos de SQLAlchemy asociada a tu aplicación Flask.
- admin.add_view(...): Agrega la vista recién creada a la interfaz de administración configurada en el paso anterior.


**Paso 5: Ejecución de la Aplicación**

Desde el directorio raíz de tu proyecto, ejecuta tu aplicación Flask con el siguiente comando:

   ```
   python -m flask run
   ```

Abre un navegador web y ve a la URL donde se ejecuta tu aplicación Flask, "http://localhost:5000/admin" para Flask-Admin.
