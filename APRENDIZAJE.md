# PARTE 3: REFLEXIÓN DE APRENDIZAJE

## Tabla de contenido
1. [¿Qué fue lo más difícil de esta prueba?](#que-fue-lo-mas-dificil-de-esta-prueba)  
2. [¿Cómo lo resolví?](#como-lo-resolvi)  
3. [¿Qué recursos consultaste?](#que-recursos-consultaste)  
4. [¿Qué aprendiste nuevo?](#que-aprendiste-nuevo)  
5. [Si tuvieras una semana más, ¿qué mejorarías?](#si-tuvieras-una-semana-mas-que-mejorarias)  
6. [Pregunta técnica](#pregunta-tecnica)

---

<a name="que-fue-lo-mas-dificil-de-esta-prueba"></a>
# **1. ¿Qué fue lo más difícil de esta prueba?**

Lo más difícil de la prueba fue el manejo de Git. No porque la herramienta sea compleja, sino porque me hizo darme cuenta de la importancia de mantener un buen hábito de versionamiento; a veces no realizo commits con la frecuencia necesaria. También tuve algunos tropiezos iniciales con el archivo _gitignore_, que no funcionó como esperaba y permitió que archivos innecesarios, como _node_modules_, se filtraran en el control de versiones.  
Estos detalles me ayudaron a identificar aspectos que debo fortalecer.

---

<a name="como-lo-resolvi"></a>
## **2. ¿Cómo lo resolví?**

Para resolver el problema, comencé investigando a profundidad sobre Git y las buenas prácticas para gestionar un repositorio.  
Esta revisión inicial me permitió entender mejor los puntos que debía fortalecer y me dio una base más sólida para avanzar con seguridad.

Después, recurrí a herramientas de inteligencia artificial para analizar los errores y encontrar soluciones. Utilicé la IA con cautela, validando siempre la coherencia de sus respuestas y formulando prompts claros y estructurados. Además, presté especial atención a no borrar archivos importantes y a mantener una separación adecuada entre las ramas, lo que me permitió trabajar con mayor orden y precisión.

Finalmente, reforcé todo este proceso consultando diversas fuentes como DataCamp, ChatGPT, Gemini y referencias de proyectos anteriores.  
Gracias a la combinación de investigación, análisis cuidadoso y apoyo en recursos confiables, no solo conseguí resolver el problema, sino que también fortalecí mi comprensión y adquirí mayor seguridad en mi forma de trabajar.

---

<a name="que-recursos-consultaste"></a>
## 3. ¿Qué recursos consultaste?

Para desarrollar la prueba técnica consulté una variedad de recursos que me permitieron comprender mejor cada parte del proceso.

En primer lugar, revisé documentación oficial como:
- Página de Apache NiFi  
- Documentación de Vite  
- MDN Web Docs  
- Documentación de MailGun, SendGrid y Postman  

También complementé mi aprendizaje con artículos especializados, entre ellos uno de Quind.io y contenido de AprenderBigData.  
Además, utilicé plataformas educativas como DataCamp y FreeCodeCamp para reforzar conceptos.

Por otro lado, apoyé mi trabajo en diferentes herramientas y entornos prácticos:
- CodePen para tomar referencia en el front-end  
- BestRandoms (generador de direcciones)  
- generadordenombres.online (generador de nombres)  
- Mis propios proyectos personales  

Finalmente, consulté material académico como:
- Recursos de ingeniería de software de la Universidad Católica de Pereira  
- Trabajos previos relacionados con UML  

Para resolver dudas puntuales, utilicé asistencia de inteligencia artificial mediante:
- ChatGPT  
- Gemini  
- GitHub Copilot  

---

<a name="que-aprendiste-nuevo"></a>
## 4. ¿Qué aprendiste nuevo?

Algo nuevo que aprendí durante esta prueba fue el funcionamiento y la utilidad de Apache NiFi. Aunque todavía no puedo decir que lo domino —porque requiere práctica constante para aprovecharlo plenamente—, la investigación que realicé me permitió comprender su propósito, su arquitectura y la forma en que facilita el manejo de grandes volúmenes de información.

A través de la lectura de documentación oficial, artículos especializados y ejemplos de uso, descubrí cómo NiFi permite diseñar flujos de datos, automatizar procesos y conectar múltiples sistemas de manera eficiente.  
Este proceso de investigación no solo me abrió la puerta a una herramienta que no conocía, sino que también me ayudó a ampliar mi perspectiva sobre soluciones de integración y procesamiento de datos.

---

<a name="si-tuvieras-una-semana-mas-que-mejorarias"></a>
## 5. Si tuvieras una semana más, ¿qué mejorarías?

Si tuviera una semana adicional para trabajar en la prueba, me enfocaría en tres grandes mejoras:

1. **Estudiar Apache NiFi a mayor profundidad.**  
   Explorar sus componentes, patrones de flujo y buenas prácticas para aplicarlo de forma más sólida y eficiente.

2. **Escalar el proyecto.**  
   Corregir detalles, optimizar código, mejorar la estructura general, realizar pruebas e incorporar documentación más clara, organizada y completa.

3. **Integrar APIs externas mediante NiFi.**  
   Esto ampliaría la funcionalidad y demostraría la capacidad de NiFi para gestionar conexiones, transformar datos y orquestar procesos en escenarios reales.

---

<a name="pregunta-tecnica"></a>
## 6. Pregunta técnica

**Si te pidiera mañana agregar "historial de ubicaciones" al paquete (cada vez que cambia de estado guardar ciudad y fecha), ¿cómo lo harías?**

Al igual que en el ejercicio de enviar una notificación por correo, antes de comenzar a desarrollar una nueva funcionalidad es fundamental comprender exactamente qué se solicita y cuál es el comportamiento esperado. En este caso, sería necesario entender cómo se actualiza la ubicación del paquete y cómo debe mostrarse dicha información dentro del sistema.

Para visualizar cómo interactúan los componentes y los actores involucrados, recurriría a diagramas UML. Estos permitirían representar el flujo del proceso, no solo desde la perspectiva del sistema, sino también desde la interacción del usuario y otros elementos relacionados.

Después de comprender el flujo, investigaría cómo implementar el nuevo módulo encargado de registrar y mostrar el historial de ubicaciones cada vez que el estado del paquete cambie. También sería necesario modificar la estructura de la base de datos, agregando una tabla o ajustando campos para almacenar la ciudad, la fecha y cualquier metadato adicional que el sistema requiera para el seguimiento. *(Es probable que nuevas ideas surjan mientras se desarrolla el módulo.)*

Antes de comenzar a desarrollar, crearía una nueva rama llamada, por ejemplo, `feature/seguimiento-del-paquete`.  
En esta rama implementaría toda la nueva funcionalidad y, una vez completada, realizaría un merge hacia la rama `dev`.

Dentro de `dev`, aplicaría los ajustes generales necesarios y luego movería los cambios a una rama de `testing` para evaluar su comportamiento frente a distintos casos y asegurar su correcto funcionamiento antes de integrarlo al flujo principal del proyecto.

---
