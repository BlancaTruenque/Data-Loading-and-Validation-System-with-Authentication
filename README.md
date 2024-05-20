# Sistema de Carga y Validación de Datos con Autenticación - Frontend <img src="https://media.tenor.com/0Vb1AhRsmq4AAAAi/good-idea.gif" width='40'>

Este proyecto es una aplicación Frontend que permite a usuarios con roles de administrador cargar, validar y corregir datos a través de archivos CSV. Utiliza tecnologías modernas de desarrollo web para proporcionar una interfaz intuitiva y eficiente, garantizando un proceso seguro y robusto para la manipulación de datos.

- Página de inicio de sesión
- Página de carga de archivos CSV
- Página de corrección de errores en los datos
- Rutas privadas protegidas por autenticación

## Características

- **React**: Librería de JavaScript para construir interfaces de usuario 
- **React Router**: Librería para manejar rutas y navegación en la aplicación 
- **PapaParse**: Librería para parsear archivos CSV 
- **Mirage.js**: Librería para simular APIs en desarrollo frontend
- **Vite**: Herramienta de construcción rápida para proyectos web 
- **Vitest**: Framework de pruebas para realizar tests unitarios 
- **Testing Library**: Librería para realizar pruebas en componentes de React

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

1. Clona el repositorio:

```bash
git clone git@github.com:BlancaTruenque/Project-Final.git
cd Project-Final
```

2. Instala las dependencias:

```bash
npm install
```

### Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

### Construcción
Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

### Pruebas
Para ejecutar las pruebas con Vitest, ejecuta:

```bash
npm run test
```

## Estructura del Proyecto

```plaintext
├── public
│   └── index.html
src/
├── components/
│   ├── Admin/
│   │   └── Admin.jsx
│   ├── App/
│   │   ├── App.jsx
│   │   └── App.module.css
│   ├── Start/
│   │   ├── Start.jsx
│   │   └── Start.module.css
│   └── Storage/
│       ├── components/
│       │   ├── ErrorList/
│       │   │   ├── ErrorList.jsx
│       │   │   ├── ErrorList.module.css
│       │   │   └── ErrorList.test.jsx
│       │   └── ErrorRow/
│       │       ├── ErrorRow.jsx
│       │       ├── ErrorRow.module.css
│       │       └── ErrorRow.test.jsx
│       └── Storage.jsx
│       └── Storage.module.css
└── contexts/
    └── authContext.jsx
```

## Dependencias

### Dependencias de Producción

- `papaparse`: Parseo de archivos CSV 
- `react`: Librería para construir interfaces de usuario 
- `react-dom`: Librería para manipular el DOM con React 
- `react-router-dom`: Librería para manejar rutas en React

## Despliegue

La aplicacion se encuentra desplegada en Render en la siguente URL:

[Enlace al proyecto](https://project-final-p4rc.onrender.com).
