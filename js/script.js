"use strict";

/* =========================================================
   Editable candidate information
   Replace each value in brackets before publishing the final portfolio.
   ========================================================= */
const candidateData = {
  fullName: "[NOMBRE COMPLETO]",
  firstName: "[NOMBRE]",
  location: "[CIUDAD, PAÍS]",
  email: "[EMAIL]",
  phone: "[TELÉFONO]",
  linkedin: "[ENLACE DE LINKEDIN]",
  cvPath: "assets/documents/cv-placeholder.html",
  availabilityToRelocate: true,
  availabilityInternational: "[CONFIRMAR]",
  drivingLicense: "En vigor",
  passport: "[CONFIRMAR]",
  tcpCertificate: "[ESTADO: OBTENIDO / EN CURSO / NO OBTENIDO]"
};

/* =========================================================
   Bilingual content
   Flat keys make it easy to search for any visible text in the HTML.
   ========================================================= */
const translations = {
  es: {
    "accessibility.skip": "Saltar al contenido principal",
    "accessibility.menu": "Abrir menú",
    "accessibility.closeMenu": "Cerrar menú",
    "accessibility.nav": "Navegación principal",
    "accessibility.language": "Seleccionar idioma",
    "brand.role": "Candidato a cabin crew",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Competencias",
    "nav.languages": "Idiomas",
    "nav.training": "Preparación",
    "nav.contact": "Contacto",
    "actions.contact": "Contactar",
    "actions.downloadCv": "Descargar CV",

    "hero.role": "Tripulante de Cabina · Cabin Crew",
    "hero.lead": "Experiencia en atención al cliente orientada a una carrera como tripulante de cabina.",
    "hero.description": "Cuento con varios años de experiencia de cara al público en restauración, trabajando en entornos exigentes, coordinándome con equipos y resolviendo necesidades e incidencias con profesionalidad.",
    "hero.relocation": "Disponible para cambiar de residencia",
    "hero.license": "Carné de conducir en vigor",
    "hero.availabilityLabel": "Disponibilidad",
    "hero.photoAlt": "Espacio reservado para la fotografía profesional del candidato",
    "hero.photoPlaceholder": "Añade aquí tu fotografía profesional",
    "hero.locationLabel": "Ubicación actual",
    "hero.photoAdvice": "Fotografía de pecho o cintura, fondo limpio, luz natural y ropa formal o smart casual. Sin uniformes ni logotipos de aerolíneas.",
    "hero.proofLabel": "Resumen profesional",
    "proof.customerTitle": "Atención al cliente",
    "proof.customerText": "Experiencia real de cara al público",
    "proof.pressureTitle": "Entornos exigentes",
    "proof.pressureText": "Criterio, organización y calma",
    "proof.teamTitle": "Trabajo en equipo",
    "proof.teamText": "Coordinación entre sala, barra y cocina",
    "proof.growthTitle": "Preparación para aviación",
    "proof.growthText": "Refuerzo continuo de conocimientos",
    "about.kicker": "Perfil",
    "about.title": "Experiencia en atención al cliente orientada al sector aeronáutico",
    "about.intro": "Mi experiencia en hostelería aporta competencias transferibles al trabajo en cabina: servicio, comunicación, organización y respuesta bajo presión.",
    "about.body1": "Durante varios años he trabajado de cara al público en restaurantes, tanto en sala como en barra. Esa trayectoria me ha enseñado a escuchar, comunicar con claridad y mantener una actitud profesional cuando el ritmo aumenta. Con el tiempo, mi responsabilidad, evolución y forma de resolver imprevistos hicieron que recibiera una mayor confianza y asumiera nuevas responsabilidades dentro de mi trabajo.",
    "about.body2": "Estoy acostumbrado a coordinarme con compañeros de sala, barra y cocina, priorizar tareas y atender necesidades diferentes sin perder la calma. He aprendido que un buen servicio no depende solo de ser amable: también exige atención, criterio, organización y respeto por los procedimientos.",
    "about.body3": "Quiero trasladar esta base al sector aeronáutico y seguir formándome para comenzar una carrera como tripulante de cabina. Afronto este objetivo con honestidad, capacidad de aprendizaje y disponibilidad para cambiar de residencia allí donde surja la oportunidad adecuada.",
    "about.factsLabel": "Datos destacados",
    "about.fact1": "Varios años de experiencia directa con clientes.",
    "about.fact2": "Progresión basada en responsabilidad y resolución.",
    "about.fact3": "Disponibilidad para cambiar de residencia.",
    "motivation.kicker": "Motivación",
    "motivation.title": "Por qué cabin crew",
    "motivation.visualLabel": "servicio · seguridad · personas",
    "motivation.body1": "Me atrae una profesión en la que cuidar de las personas significa combinar cercanía con responsabilidad. Quiero contribuir a que cada pasajero se sienta atendido, informado y seguro, especialmente cuando necesita ayuda o surge una situación inesperada.",
    "motivation.body2": "El entorno internacional, la coordinación de equipos multiculturales y la necesidad de adaptarse a cada jornada encajan con mi forma de trabajar. Mi objetivo no es solo volar: es desarrollar una carrera a largo plazo en aviación, aprender procedimientos con rigor y crecer dentro de un equipo que comparte estándares altos de servicio y seguridad.",

    "experience.kicker": "Trayectoria",
    "experience.title": "Experiencia profesional en atención al cliente",
    "experience.intro": "La hostelería me ha dado una base práctica en atención, coordinación y respuesta ante situaciones de alta demanda.",
    "experience.editable": "Datos por completar",
    "experience.responsibilities": "Responsabilidades reales",
    "experience.progression": "Progresión",
    "experience.problem": "Respuesta ante imprevistos",
    "experience.skillsLabel": "Competencias desarrolladas",
    "experience.job1.dates": "[MES Y AÑO – MES Y AÑO]",
    "experience.job1.company": "[NOMBRE DEL RESTAURANTE 1]",
    "experience.job1.role": "[PUESTO REAL]",
    "experience.job1.city": "[CIUDAD]",
    "experience.job1.summary": "Atención directa al cliente en un entorno de restauración con momentos de alta actividad, coordinándome con el equipo para mantener un servicio profesional y ordenado.",
    "experience.job1.responsibilities": "[RESPONSABILIDADES REALES: servicio en sala, atención en barra u otras funciones confirmadas]",
    "experience.job1.progression": "[RESPONSABILIDADES ADQUIRIDAS CON EL TIEMPO]",
    "experience.job1.problem": "[EJEMPLO REAL DE PROBLEMA RESUELTO]",
    "experience.job2.dates": "[MES Y AÑO – MES Y AÑO]",
    "experience.job2.company": "[NOMBRE DEL RESTAURANTE 2]",
    "experience.job2.role": "[PUESTO REAL]",
    "experience.job2.city": "[CIUDAD]",
    "experience.job2.summary": "Experiencia de cara al público orientada a comprender solicitudes, resolver dudas y mantener una comunicación clara incluso durante picos de trabajo.",
    "experience.job2.responsibilities": "[RESPONSABILIDADES REALES]",
    "experience.job2.progression": "[RESPONSABILIDADES ADQUIRIDAS CON EL TIEMPO]",
    "experience.job2.problem": "[EJEMPLO REAL DE PROBLEMA RESUELTO]",
    "experience.tags.customer": "Atención personalizada",
    "experience.tags.incidents": "Gestión de incidencias",
    "experience.tags.team": "Coordinación",
    "experience.tags.pressure": "Calma bajo presión",
    "experience.tags.communication": "Comunicación",
    "experience.tags.priorities": "Priorización",
    "experience.tags.adaptability": "Adaptabilidad",
    "experience.tags.hygiene": "Higiene y seguridad",
    "experience.note": "Completa únicamente funciones que hayas realizado. Añade apoyo a nuevos compañeros, caja, apertura, cierre o supervisión solo si puedes confirmarlo.",
    "skills.kicker": "Competencias",
    "skills.title": "Competencias transferibles al entorno de cabina",
    "skills.intro": "Competencias desarrolladas en situaciones reales de servicio y directamente transferibles al entorno de cabina.",
    "skills.passenger.title": "Atención al pasajero",
    "skills.passenger.text": "Base de servicio centrada en escuchar, anticipar necesidades y ofrecer respuestas claras.",
    "skills.customer.title": "Atención al cliente",
    "skills.customer.text": "Varios años tratando directamente con personas, solicitudes, dudas e incidencias.",
    "skills.communication.title": "Comunicación",
    "skills.communication.text": "Mensajes claros, tono respetuoso y escucha activa en contextos de alta actividad.",
    "skills.teamwork.title": "Trabajo en equipo",
    "skills.teamwork.text": "Coordinación constante con compañeros de sala, barra y cocina.",
    "skills.problem.title": "Resolución de problemas",
    "skills.problem.text": "Capacidad para valorar prioridades y reaccionar ante imprevistos sin perder el foco.",
    "skills.pressure.title": "Trabajo bajo presión",
    "skills.pressure.text": "Actitud profesional y ritmo constante durante los momentos de mayor demanda.",
    "skills.adaptability.title": "Adaptabilidad",
    "skills.adaptability.text": "Flexibilidad ante cambios de ritmo, tareas y necesidades de los clientes.",
    "skills.responsibility.title": "Responsabilidad",
    "skills.responsibility.text": "Confianza ganada mediante constancia, criterio y compromiso con el trabajo.",
    "skills.organization.title": "Organización",
    "skills.organization.text": "Priorización de tareas para mantener un servicio ordenado y eficaz.",
    "skills.empathy.title": "Empatía",
    "skills.empathy.text": "Atención a diferentes necesidades con paciencia, respeto y cercanía.",
    "skills.conflict.title": "Gestión de conflictos",
    "skills.conflict.text": "Experiencia atendiendo quejas e incidencias con calma y orientación a soluciones.",
    "skills.safety.title": "Orientación a la seguridad",
    "skills.safety.text": "Respeto por las normas de higiene y seguridad propias del trabajo en restauración.",
    "skills.learning.title": "Capacidad de aprendizaje",
    "skills.learning.text": "Disposición para incorporar procedimientos, reforzar conocimientos y mejorar.",
    "aviation.title": "Primer contacto con el sector aeronáutico",
    "aviation.lead": "La participación en el proceso de selección de Lauda me permitió conocer de primera mano las exigencias de acceso a la profesión y evaluar mi preparación.",
    "aviation.body": "A principios de 2026 participé en un proceso real de selección para tripulantes de cabina. No superé el examen teórico por un margen reducido. A partir de esa experiencia identifiqué los conocimientos que debía reforzar y comprendí mejor el nivel de preparación requerido. Desde entonces continúo trabajando en esas áreas con el objetivo de presentarme de nuevo con una base más sólida.",
    "aviation.pathLabel": "Aprendizajes del proceso",
    "aviation.step1Title": "Iniciativa",
    "aviation.step1Text": "Participar en un proceso real",
    "aviation.step2Title": "Aprendizaje",
    "aviation.step2Text": "Detectar áreas de mejora",
    "aviation.step3Title": "Perseverancia",
    "aviation.step3Text": "Seguir preparándome",
    "languages.kicker": "Idiomas",
    "languages.title": "Comunicación para un entorno internacional",
    "languages.intro": "Niveles presentados de forma clara y sin porcentajes subjetivos.",
    "languages.spanish": "Español",
    "languages.english": "Inglés",
    "languages.catalan": "Catalán",
    "languages.portuguese": "Portugués",
    "languages.native": "Nativo",
    "languages.intermediate": "Nivel medio",
    "languages.spanishText": "Comunicación natural y precisa en contextos personales y profesionales.",
    "languages.englishText": "Capacidad para desenvolverse en conversaciones habituales, situaciones profesionales y atención al cliente.",
    "languages.catalanText": "Capacidad de comunicación en situaciones habituales.",
    "languages.portugueseText": "Capacidad de comunicación en situaciones habituales.",
    "preparation.kicker": "Preparación",
    "preparation.title": "Formación y disponibilidad",
    "preparation.intro": "Información práctica para valorar mi candidatura. Los campos pendientes están señalados de forma visible.",
    "preparation.swimmingTitle": "Capacidad de natación",
    "preparation.swimmingText": "Tengo capacidad de natación y me siento cómodo en el agua, aunque no poseo formación como socorrista.",
    "preparation.education": "Formación académica",
    "preparation.educationValue": "[FORMACIÓN]",
    "preparation.tcp": "Certificado TCP",
    "preparation.tcpValue": "[ESTADO: OBTENIDO / EN CURSO / NO OBTENIDO]",
    "preparation.firstAid": "Primeros auxilios",
    "preparation.safety": "Formación en seguridad",
    "preparation.lifeguard": "Certificado de socorrismo",
    "preparation.license": "Carné de conducir",
    "preparation.valid": "En vigor",
    "preparation.passport": "Pasaporte",
    "preparation.relocation": "Cambio de residencia",
    "preparation.international": "Bases internacionales",
    "preparation.schedule": "Disponibilidad horaria",
    "common.confirm": "[CONFIRMAR]",
    "common.no": "No",
    "common.yes": "Sí",
    "values.kicker": "Forma de trabajar",
    "values.title": "Valores profesionales",
    "values.service.title": "Servicio",
    "values.service.text": "Escuchar antes de actuar y cuidar cada interacción.",
    "values.safety.title": "Seguridad",
    "values.safety.text": "Respetar procedimientos y actuar con atención.",
    "values.respect.title": "Respeto",
    "values.respect.text": "Tratar a cada persona con educación y consideración.",
    "values.empathy.title": "Empatía",
    "values.empathy.text": "Comprender necesidades diferentes sin juzgar.",
    "values.responsibility.title": "Responsabilidad",
    "values.responsibility.text": "Responder por el trabajo y cumplir los compromisos.",
    "values.discipline.title": "Disciplina",
    "values.discipline.text": "Mantener constancia incluso en jornadas exigentes.",
    "values.professionalism.title": "Profesionalidad",
    "values.professionalism.text": "Cuidar el tono, la presencia y cada detalle del servicio.",
    "values.improvement.title": "Mejora continua",
    "values.improvement.text": "Aprender de cada experiencia y reforzar lo necesario.",
    "contact.kicker": "Contacto",
    "contact.title": "Contacto profesional",
    "contact.lead": "Estoy disponible para conversar con equipos de selección y aerolíneas que valoren la experiencia de servicio, la responsabilidad y una motivación real por aprender.",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "contact.location": "Ciudad actual",
    "contact.interviews": "Disponible para entrevistas: [CONFIRMAR DISPONIBILIDAD]",
    "contact.relocation": "Disponible para cambiar de residencia",
    "form.honeypot": "No rellenar:",
    "form.title": "Enviar un mensaje",
    "form.intro": "Los campos marcados con * son obligatorios.",
    "form.name": "Nombre *",
    "form.namePlaceholder": "Tu nombre",
    "form.company": "Empresa o aerolínea *",
    "form.companyPlaceholder": "Nombre de la empresa",
    "form.email": "Correo electrónico *",
    "form.emailPlaceholder": "nombre@empresa.com",
    "form.phone": "Teléfono (opcional)",
    "form.phonePlaceholder": "+34 000 000 000",
    "form.subject": "Asunto *",
    "form.subjectPlaceholder": "Motivo del contacto",
    "form.message": "Mensaje *",
    "form.messagePlaceholder": "Escribe aquí tu mensaje",
    "form.privacy": "Acepto que mis datos se utilicen únicamente para responder a este mensaje. *",
    "form.submit": "Enviar mensaje",
    "form.note": "El formulario se procesa mediante Netlify Forms. Los envíos quedan disponibles en el panel del sitio.",
    "form.errorRequired": "Este campo es obligatorio.",
    "form.errorEmail": "Introduce una dirección de correo válida.",
    "form.errorShort": "La información introducida es demasiado breve.",
    "form.errorPrivacy": "Debes aceptar el aviso de privacidad.",
    "form.errorSummary": "Revisa los campos indicados antes de enviar el mensaje.",
    "form.validSummary": "Todo correcto. Enviando el mensaje…",
    "footer.role": "Candidato a Tripulante de Cabina · Cabin Crew",
    "footer.rights": "Todos los derechos reservados.",
    "footer.top": "Volver arriba",
    "success.kicker": "Mensaje enviado",
    "success.title": "Gracias por contactar.",
    "success.text": "El mensaje se ha enviado correctamente. Responderé tan pronto como sea posible.",
    "success.back": "Volver al portfolio",
    "success.note": "Si necesitas contactar por otra vía, puedes utilizar el correo o el teléfono indicados en el portfolio."
  },
  en: {
    "accessibility.skip": "Skip to main content",
    "accessibility.menu": "Open menu",
    "accessibility.closeMenu": "Close menu",
    "accessibility.nav": "Main navigation",
    "accessibility.language": "Select language",
    "brand.role": "Cabin crew candidate",
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.languages": "Languages",
    "nav.training": "Preparation",
    "nav.contact": "Contact",
    "actions.contact": "Contact me",
    "actions.downloadCv": "Download CV",

    "hero.role": "Cabin Crew · Flight Attendant",
    "hero.lead": "Customer service experience focused on a career as cabin crew.",
    "hero.description": "I have several years of customer-facing experience in restaurants, working in demanding environments, coordinating with teams and handling needs and issues professionally.",
    "hero.relocation": "Available to relocate",
    "hero.license": "Valid driving licence",
    "hero.availabilityLabel": "Availability",
    "hero.photoAlt": "Reserved space for the candidate's professional photograph",
    "hero.photoPlaceholder": "Add your professional photograph here",
    "hero.locationLabel": "Current location",
    "hero.photoAdvice": "Use a chest-up or waist-up photograph with a clean background, natural light and formal or smart-casual clothing. Do not use airline uniforms or logos.",
    "hero.proofLabel": "Professional summary",
    "proof.customerTitle": "Customer service",
    "proof.customerText": "Real experience working with the public",
    "proof.pressureTitle": "Demanding settings",
    "proof.pressureText": "Judgement, organisation and calm",
    "proof.teamTitle": "Teamwork",
    "proof.teamText": "Coordination between floor, bar and kitchen",
    "proof.growthTitle": "Aviation preparation",
    "proof.growthText": "Continuous knowledge development",
    "about.kicker": "Profile",
    "about.title": "Customer service experience focused on the aviation sector",
    "about.intro": "My hospitality experience provides skills that transfer to cabin work: service, communication, organisation and responding under pressure.",
    "about.body1": "For several years, I have worked directly with the public in restaurants, both on the floor and behind the bar. This path has taught me to listen, communicate clearly and keep a professional attitude when the pace increases. Over time, my responsibility, progress and way of solving unexpected issues helped me earn more trust and take on greater responsibilities in my work.",
    "about.body2": "I am used to coordinating with floor, bar and kitchen colleagues, setting priorities and helping people with different needs while staying calm. I have learned that good service is not only about being friendly. It also needs attention, sound judgement, organisation and respect for procedures.",
    "about.body3": "I want to bring this background into aviation and continue preparing to begin a career as cabin crew. I approach this goal with honesty, a willingness to learn and the availability to relocate when the right opportunity appears.",
    "about.factsLabel": "Key facts",
    "about.fact1": "Several years of direct customer-facing experience.",
    "about.fact2": "Progress based on responsibility and problem-solving.",
    "about.fact3": "Available to relocate.",
    "motivation.kicker": "Motivation",
    "motivation.title": "Why cabin crew",
    "motivation.visualLabel": "service · safety · people",
    "motivation.body1": "I am interested in a profession where caring for people means combining a warm approach with responsibility. I want to help every passenger feel supported, informed and safe, especially when they need assistance or an unexpected situation occurs.",
    "motivation.body2": "The international environment, the coordination of multicultural teams and the need to adapt to each working day suit the way I work. My goal is not simply to fly. I want to build a long-term career in aviation, learn procedures carefully and grow in a team that shares high standards of service and safety.",

    "experience.kicker": "Background",
    "experience.title": "Professional customer service experience",
    "experience.intro": "Hospitality has given me a practical foundation in service, coordination and responding to high-demand situations.",
    "experience.editable": "Details to complete",
    "experience.responsibilities": "Real responsibilities",
    "experience.progression": "Progression",
    "experience.problem": "Response to challenges",
    "experience.skillsLabel": "Skills developed",
    "experience.job1.dates": "[MONTH AND YEAR – MONTH AND YEAR]",
    "experience.job1.company": "[RESTAURANT NAME 1]",
    "experience.job1.role": "[ACTUAL POSITION]",
    "experience.job1.city": "[CITY]",
    "experience.job1.summary": "Direct customer service in a restaurant with busy periods, coordinating with the team to maintain a professional and organised service.",
    "experience.job1.responsibilities": "[REAL RESPONSIBILITIES: floor service, bar service or other confirmed duties]",
    "experience.job1.progression": "[RESPONSIBILITIES GAINED OVER TIME]",
    "experience.job1.problem": "[REAL EXAMPLE OF A PROBLEM SOLVED]",
    "experience.job2.dates": "[MONTH AND YEAR – MONTH AND YEAR]",
    "experience.job2.company": "[RESTAURANT NAME 2]",
    "experience.job2.role": "[ACTUAL POSITION]",
    "experience.job2.city": "[CITY]",
    "experience.job2.summary": "Customer-facing experience focused on understanding requests, answering questions and keeping communication clear during busy periods.",
    "experience.job2.responsibilities": "[REAL RESPONSIBILITIES]",
    "experience.job2.progression": "[RESPONSIBILITIES GAINED OVER TIME]",
    "experience.job2.problem": "[REAL EXAMPLE OF A PROBLEM SOLVED]",
    "experience.tags.customer": "Personal service",
    "experience.tags.incidents": "Issue handling",
    "experience.tags.team": "Coordination",
    "experience.tags.pressure": "Calm under pressure",
    "experience.tags.communication": "Communication",
    "experience.tags.priorities": "Prioritisation",
    "experience.tags.adaptability": "Adaptability",
    "experience.tags.hygiene": "Hygiene and safety",
    "experience.note": "Only include duties you have carried out. Add support for new colleagues, cash handling, opening, closing or supervision only if you can confirm them.",
    "skills.kicker": "Skills",
    "skills.title": "Transferable skills for the cabin environment",
    "skills.intro": "Skills developed in real service situations and directly transferable to the cabin environment.",
    "skills.passenger.title": "Passenger care",
    "skills.passenger.text": "A service foundation focused on listening, noticing needs and giving clear answers.",
    "skills.customer.title": "Customer service",
    "skills.customer.text": "Several years working directly with people, requests, questions and incidents.",
    "skills.communication.title": "Communication",
    "skills.communication.text": "Clear messages, a respectful tone and active listening in busy environments.",
    "skills.teamwork.title": "Teamwork",
    "skills.teamwork.text": "Regular coordination with floor, bar and kitchen colleagues.",
    "skills.problem.title": "Problem-solving",
    "skills.problem.text": "Able to assess priorities and respond to unexpected issues while staying focused.",
    "skills.pressure.title": "Working under pressure",
    "skills.pressure.text": "A professional attitude and steady pace during periods of high demand.",
    "skills.adaptability.title": "Adaptability",
    "skills.adaptability.text": "Flexible when the pace, tasks or customer needs change.",
    "skills.responsibility.title": "Responsibility",
    "skills.responsibility.text": "Trust earned through consistency, good judgement and commitment to the work.",
    "skills.organization.title": "Organisation",
    "skills.organization.text": "Setting priorities to keep the service organised and effective.",
    "skills.empathy.title": "Empathy",
    "skills.empathy.text": "Responding to different needs with patience, respect and a helpful approach.",
    "skills.conflict.title": "Conflict management",
    "skills.conflict.text": "Experience handling complaints and issues calmly, with a focus on solutions.",
    "skills.safety.title": "Safety awareness",
    "skills.safety.text": "Respect for the hygiene and safety rules required in restaurant work.",
    "skills.learning.title": "Ability to learn",
    "skills.learning.text": "Willingness to follow procedures, strengthen knowledge and improve.",
    "aviation.title": "First experience with the aviation recruitment process",
    "aviation.lead": "Taking part in the Lauda recruitment process helped me understand the entry requirements first-hand and assess my preparation.",
    "aviation.body": "At the beginning of 2026, I took part in a real cabin crew recruitment process. I did not pass the theory exam by a narrow margin. From this experience, I identified the knowledge I needed to strengthen and understood the required level of preparation more clearly. I continue to work on these areas so I can apply again with a stronger foundation.",
    "aviation.pathLabel": "Lessons from the process",
    "aviation.step1Title": "Initiative",
    "aviation.step1Text": "Taking part in a real process",
    "aviation.step2Title": "Learning",
    "aviation.step2Text": "Finding areas to improve",
    "aviation.step3Title": "Perseverance",
    "aviation.step3Text": "Continuing to prepare",
    "languages.kicker": "Languages",
    "languages.title": "Communication for an international environment",
    "languages.intro": "Language levels presented clearly, without subjective percentages.",
    "languages.spanish": "Spanish",
    "languages.english": "English",
    "languages.catalan": "Catalan",
    "languages.portuguese": "Portuguese",
    "languages.native": "Native",
    "languages.intermediate": "Intermediate",
    "languages.spanishText": "Natural and precise communication in personal and professional settings.",
    "languages.englishText": "Able to manage everyday conversations, professional situations and customer service interactions.",
    "languages.catalanText": "Able to communicate in common everyday situations.",
    "languages.portugueseText": "Able to communicate in common everyday situations.",
    "preparation.kicker": "Preparation",
    "preparation.title": "Training and availability",
    "preparation.intro": "Practical information to review my application. Pending details are clearly marked.",
    "preparation.swimmingTitle": "Swimming ability",
    "preparation.swimmingText": "I can swim and feel comfortable in the water, although I do not have lifeguard training.",
    "preparation.education": "Academic education",
    "preparation.educationValue": "[EDUCATION]",
    "preparation.tcp": "Cabin crew certificate",
    "preparation.tcpValue": "[STATUS: OBTAINED / IN PROGRESS / NOT OBTAINED]",
    "preparation.firstAid": "First aid",
    "preparation.safety": "Safety training",
    "preparation.lifeguard": "Lifeguard certificate",
    "preparation.license": "Driving licence",
    "preparation.valid": "Valid",
    "preparation.passport": "Passport",
    "preparation.relocation": "Relocation",
    "preparation.international": "International bases",
    "preparation.schedule": "Schedule availability",
    "common.confirm": "[TO CONFIRM]",
    "common.no": "No",
    "common.yes": "Yes",
    "values.kicker": "How I work",
    "values.title": "Professional values",
    "values.service.title": "Service",
    "values.service.text": "Listen before acting and take care with every interaction.",
    "values.safety.title": "Safety",
    "values.safety.text": "Respect procedures and act with attention.",
    "values.respect.title": "Respect",
    "values.respect.text": "Treat every person with courtesy and consideration.",
    "values.empathy.title": "Empathy",
    "values.empathy.text": "Understand different needs without judging.",
    "values.responsibility.title": "Responsibility",
    "values.responsibility.text": "Take ownership of the work and keep commitments.",
    "values.discipline.title": "Discipline",
    "values.discipline.text": "Stay consistent even during demanding shifts.",
    "values.professionalism.title": "Professionalism",
    "values.professionalism.text": "Take care with tone, presentation and every service detail.",
    "values.improvement.title": "Continuous improvement",
    "values.improvement.text": "Learn from each experience and strengthen what is needed.",
    "contact.kicker": "Contact",
    "contact.title": "Professional contact",
    "contact.lead": "I am available to speak with recruitment teams and airlines that value service experience, responsibility and a real motivation to learn.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Current city",
    "contact.interviews": "Available for interviews: [CONFIRM AVAILABILITY]",
    "contact.relocation": "Available to relocate",
    "form.honeypot": "Do not fill in:",
    "form.title": "Send a message",
    "form.intro": "Fields marked with * are required.",
    "form.name": "Name *",
    "form.namePlaceholder": "Your name",
    "form.company": "Company or airline *",
    "form.companyPlaceholder": "Company name",
    "form.email": "Email address *",
    "form.emailPlaceholder": "name@company.com",
    "form.phone": "Phone (optional)",
    "form.phonePlaceholder": "+34 000 000 000",
    "form.subject": "Subject *",
    "form.subjectPlaceholder": "Reason for contacting",
    "form.message": "Message *",
    "form.messagePlaceholder": "Write your message here",
    "form.privacy": "I agree that my details may be used only to reply to this message. *",
    "form.submit": "Send message",
    "form.note": "This form is processed by Netlify Forms. Submissions are available in the site dashboard.",
    "form.errorRequired": "This field is required.",
    "form.errorEmail": "Enter a valid email address.",
    "form.errorShort": "The information entered is too short.",
    "form.errorPrivacy": "You must accept the privacy notice.",
    "form.errorSummary": "Please review the highlighted fields before sending your message.",
    "form.validSummary": "Everything looks good. Sending your message…",
    "footer.role": "Cabin Crew · Flight Attendant Candidate",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top",
    "success.kicker": "Message sent",
    "success.title": "Thank you for getting in touch.",
    "success.text": "Your message has been sent successfully. I will reply as soon as possible.",
    "success.back": "Return to the portfolio",
    "success.note": "If you need to make contact another way, please use the email address or phone number shown in the portfolio."
  }
};

Object.assign(translations, window.portfolioTranslations || {});

const portfolioMetadata = {
  es: {
    title: `${candidateData.fullName} | Tripulante de Cabina · Cabin Crew`,
    description: `Portfolio profesional de ${candidateData.fullName}, candidato a Tripulante de Cabina con experiencia en atención al cliente.`
  },
  en: {
    title: `${candidateData.fullName} | Cabin Crew · Flight Attendant`,
    description: `Professional portfolio of ${candidateData.fullName}, a cabin crew candidate with customer service experience.`
  },
  fr: {
    title: `${candidateData.fullName} | Personnel navigant commercial · Cabin Crew`,
    description: `Portfolio professionnel de ${candidateData.fullName}, candidat au poste de personnel navigant commercial avec une expérience en service client.`
  },
  pt: {
    title: `${candidateData.fullName} | Tripulante de Cabine · Cabin Crew`,
    description: `Portefólio profissional de ${candidateData.fullName}, candidato a tripulante de cabine com experiência em atendimento ao cliente.`
  }
};

let currentLanguage = "es";

const getTranslation = (key) => translations[currentLanguage][key] || translations.es[key] || key;

function applyCandidateData() {
  document.querySelectorAll("[data-candidate]").forEach((element) => {
    const key = element.dataset.candidate;
    if (candidateData[key]) element.textContent = candidateData[key];
  });

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.href = candidateData.cvPath;
  });

  const emailLink = document.querySelector('a[data-candidate="email"]');
  const phoneLink = document.querySelector('a[data-candidate="phone"]');
  const linkedinLink = document.querySelector('a[data-candidate="linkedin"]');

  if (emailLink) emailLink.href = `mailto:${candidateData.email}`;
  if (phoneLink) phoneLink.href = `tel:${candidateData.phone.replace(/\s/g, "")}`;
  if (linkedinLink) linkedinLink.href = candidateData.linkedin;
}

function applyLanguage(language, savePreference = true) {
  currentLanguage = translations[language] ? language : "es";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = getTranslation(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const formLanguage = document.querySelector("#form-language");
  if (formLanguage) formLanguage.value = currentLanguage;

  const isSuccessPage = document.body.classList.contains("success-page");
  const metadata = portfolioMetadata[currentLanguage] || portfolioMetadata.es;
  document.title = isSuccessPage
    ? `${getTranslation("success.kicker")} | ${candidateData.fullName}`
    : metadata.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = metadata.description;

  if (savePreference) {
    try {
      localStorage.setItem("portfolio-language", currentLanguage);
    } catch (error) {
      // The language still works when browser storage is unavailable.
    }
  }

  clearValidationErrors();
  applyCandidateData();
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (translations[savedLanguage]) return savedLanguage;
  } catch (error) {
    // Use the default language when browser storage is unavailable.
  }
  return "es";
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });
}

function setupMobileMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");
  if (!menuButton || !navigation) return;

  const closeMenu = (returnFocus = false) => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".sr-only").textContent = getTranslation("accessibility.menu");
    document.body.classList.remove("menu-open");
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    navigation.classList.toggle("is-open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.querySelector(".sr-only").textContent = getTranslation(
      willOpen ? "accessibility.closeMenu" : "accessibility.menu"
    );
    document.body.classList.toggle("menu-open", willOpen);
    if (willOpen) navigation.querySelector("a")?.focus();
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1040) closeMenu();
  });
}

function getFieldError(field) {
  if (field.validity.valueMissing) {
    return field.type === "checkbox" ? getTranslation("form.errorPrivacy") : getTranslation("form.errorRequired");
  }
  if (field.validity.typeMismatch) return getTranslation("form.errorEmail");
  if (field.validity.tooShort) return getTranslation("form.errorShort");
  return "";
}

function setFieldError(field, message) {
  const errorElement = document.querySelector(`#${field.id}-error`);
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) {
    field.setAttribute("aria-describedby", `${field.id}-error`);
  } else {
    field.removeAttribute("aria-describedby");
  }
  if (errorElement) errorElement.textContent = message;
}

function clearValidationErrors() {
  document.querySelectorAll(".contact-form input, .contact-form textarea").forEach((field) => {
    if (field.type !== "hidden") setFieldError(field, "");
  });
  const status = document.querySelector("#form-status");
  if (status) {
    status.textContent = "";
    status.classList.remove("is-valid");
  }
}

function setupFormValidation() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = [...form.querySelectorAll("input:not([type='hidden']):not([name='bot-field']), textarea")];

  fields.forEach((field) => {
    field.addEventListener("blur", () => setFieldError(field, getFieldError(field)));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") setFieldError(field, getFieldError(field));
    });
  });

  form.addEventListener("submit", (event) => {
    let firstInvalidField = null;
    fields.forEach((field) => {
      const message = getFieldError(field);
      setFieldError(field, message);
      if (message && !firstInvalidField) firstInvalidField = field;
    });

    const status = document.querySelector("#form-status");
    if (firstInvalidField) {
      event.preventDefault();
      status.textContent = getTranslation("form.errorSummary");
      status.classList.remove("is-valid");
      firstInvalidField.focus();
      return;
    }

    status.textContent = getTranslation("form.validSummary");
    status.classList.add("is-valid");
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupSectionHighlighting() {
  const navigationLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-35% 0px -55%", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupScrollFlightProgress() {
  const track = document.querySelector(".scroll-flight-track");
  if (!track) return;

  let frameId = null;
  const updateProgress = () => {
    const scrollableHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollableHeight));
    track.style.setProperty("--flight-progress", `${progress * 100}%`);
    frameId = null;
  };
  const requestUpdate = () => {
    if (frameId) return;
    frameId = requestAnimationFrame(updateProgress);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateProgress();
}

function setupHeroRouteCanvas() {
  const hero = document.querySelector(".hero");
  const canvas = hero?.querySelector(".hero-route-canvas");
  const context = canvas?.getContext("2d");
  if (!hero || !canvas || !context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  const routes = [
    { start: [0.47, 0.14], control: [0.76, -0.02], end: [1.03, 0.26], color: "rgba(47, 111, 159, 0.3)" },
    { start: [0.5, 0.7], control: [0.75, 0.45], end: [1.04, 0.62], color: "rgba(103, 184, 212, 0.34)" },
    { start: [0.68, 0.34], control: [0.86, 0.3], end: [1.02, 0.43], color: "rgba(211, 164, 74, 0.24)" }
  ];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let frameId = null;
  let isVisible = false;
  let targetOffset = { x: 0, y: 0 };
  let currentOffset = { x: 0, y: 0 };

  const getPoint = (route, progress) => {
    const inverse = 1 - progress;
    return {
      x: (inverse * inverse * route.start[0] + 2 * inverse * progress * route.control[0] + progress * progress * route.end[0]) * width,
      y: (inverse * inverse * route.start[1] + 2 * inverse * progress * route.control[1] + progress * progress * route.end[1]) * height
    };
  };

  const drawNode = (point, color, pulse = 0) => {
    if (pulse > 0) {
      context.beginPath();
      context.arc(point.x, point.y, 8 + pulse * 7, 0, Math.PI * 2);
      context.strokeStyle = color;
      context.globalAlpha = 0.16 * (1 - pulse);
      context.lineWidth = 1;
      context.stroke();
    }
    context.globalAlpha = 0.82;
    context.beginPath();
    context.arc(point.x, point.y, 3.1, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.globalAlpha = 1;
  };

  const drawAircraft = (point, angle) => {
    context.save();
    context.translate(point.x, point.y);
    context.rotate(angle);
    context.shadowColor = "rgba(7, 26, 47, 0.28)";
    context.shadowBlur = 8;
    context.shadowOffsetY = 2;

    context.beginPath();
    context.moveTo(13, 0);
    context.bezierCurveTo(10, -2, 7, -2.5, 4, -2.8);
    context.lineTo(0, -10);
    context.lineTo(-3, -10);
    context.lineTo(-1.5, -2.4);
    context.lineTo(-8, -1.4);
    context.lineTo(-10, -4.4);
    context.lineTo(-12, -4.4);
    context.lineTo(-11.2, 0);
    context.lineTo(-12, 4.4);
    context.lineTo(-10, 4.4);
    context.lineTo(-8, 1.4);
    context.lineTo(-1.5, 2.4);
    context.lineTo(-3, 10);
    context.lineTo(0, 10);
    context.lineTo(4, 2.8);
    context.bezierCurveTo(7, 2.5, 10, 2, 13, 0);
    context.closePath();

    const bodyGradient = context.createLinearGradient(-12, -8, 13, 6);
    bodyGradient.addColorStop(0, "#17344a");
    bodyGradient.addColorStop(0.48, "#8197a8");
    bodyGradient.addColorStop(1, "#244f6b");
    context.fillStyle = bodyGradient;
    context.fill();
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    context.strokeStyle = "rgba(7, 26, 47, 0.78)";
    context.lineWidth = 0.8;
    context.stroke();

    context.beginPath();
    context.moveTo(-7, 0);
    context.lineTo(9, 0);
    context.strokeStyle = "rgba(255, 255, 255, 0.46)";
    context.lineWidth = 0.7;
    context.stroke();
    context.beginPath();
    context.ellipse(7.2, 0, 2.1, 1.15, 0, 0, Math.PI * 2);
    context.fillStyle = "rgba(169, 217, 233, 0.92)";
    context.fill();
    context.restore();
  };
  const draw = (time, staticFrame = false) => {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(currentOffset.x, currentOffset.y);

    routes.forEach((route, index) => {
      const start = getPoint(route, 0);
      const control = { x: route.control[0] * width, y: route.control[1] * height };
      const end = getPoint(route, 1);
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.quadraticCurveTo(control.x, control.y, end.x, end.y);
      context.strokeStyle = route.color;
      context.lineWidth = index === 0 ? 1.25 : 1;
      context.setLineDash(index === 2 ? [2, 10] : [6, 9]);
      context.lineDashOffset = staticFrame ? 0 : -(time * (index === 0 ? 0.012 : 0.007));
      context.stroke();
      context.setLineDash([]);

      const pulse = staticFrame ? 0 : (Math.sin(time * 0.002 + index) + 1) / 2;
      drawNode(start, index === 2 ? "rgba(211, 164, 74, 0.8)" : "rgba(47, 111, 159, 0.72)", pulse);
      drawNode(end, index === 0 ? "rgba(211, 164, 74, 0.85)" : "rgba(103, 184, 212, 0.74)");
    });

    const markerProgress = staticFrame ? 0.64 : (time % 11800) / 11800;
    const activeRoute = routes[0];
    const marker = getPoint(activeRoute, markerProgress);
    const markerInverse = 1 - markerProgress;
    const tangentX = (2 * markerInverse * (activeRoute.control[0] - activeRoute.start[0]) + 2 * markerProgress * (activeRoute.end[0] - activeRoute.control[0])) * width;
    const tangentY = (2 * markerInverse * (activeRoute.control[1] - activeRoute.start[1]) + 2 * markerProgress * (activeRoute.end[1] - activeRoute.control[1])) * height;
    const markerAngle = Math.atan2(tangentY, tangentX);
    const glow = context.createRadialGradient(marker.x, marker.y, 0, marker.x, marker.y, 16);
    glow.addColorStop(0, "rgba(47, 111, 159, 0.2)");
    glow.addColorStop(1, "rgba(47, 111, 159, 0)");
    context.beginPath();
    context.arc(marker.x, marker.y, 16, 0, Math.PI * 2);
    context.fillStyle = glow;
    context.fill();
    drawAircraft(marker, markerAngle);
    context.restore();
  };

  const resizeCanvas = () => {
    const bounds = hero.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, hero.offsetHeight);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw(performance.now(), reducedMotion.matches);
  };

  const stopAnimation = () => {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = null;
  };

  const animate = (time) => {
    if (!isVisible || document.hidden || reducedMotion.matches) {
      stopAnimation();
      return;
    }
    currentOffset.x += (targetOffset.x - currentOffset.x) * 0.04;
    currentOffset.y += (targetOffset.y - currentOffset.y) * 0.04;
    draw(time);
    frameId = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    stopAnimation();
    if (reducedMotion.matches) {
      currentOffset = { x: 0, y: 0 };
      draw(0, true);
      return;
    }
    frameId = requestAnimationFrame(animate);
  };

  if (finePointer.matches) {
    hero.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches) return;
      const bounds = hero.getBoundingClientRect();
      targetOffset.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
      targetOffset.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    });
    hero.addEventListener("pointerleave", () => {
      targetOffset = { x: 0, y: 0 };
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    }, { threshold: 0.05 });
    observer.observe(hero);
  } else {
    isVisible = true;
    startAnimation();
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(resizeCanvas).observe(hero);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && isVisible) startAnimation();
    else stopAnimation();
  });
  reducedMotion.addEventListener?.("change", startAnimation);
  resizeCanvas();
}
function setupFlightAnimation() {
  const route = document.querySelector(".motivation-visual");
  const canvas = route?.querySelector(".europe-route-canvas");
  const context = canvas?.getContext("2d");
  if (!route || !canvas || !context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const flightDuration = 19000;
  const turnaroundPause = 1000;
  const homePause = 1400;
  const cities = [
    { id: "lisbon", lon: -9.14, lat: 38.72, labelOffset: [-7, 15] },
    { id: "madrid", lon: -3.7, lat: 40.42, labelOffset: [7, 16] },
    { id: "paris", lon: 2.35, lat: 48.86, labelOffset: [7, -10] },
    { id: "london", lon: -0.13, lat: 51.51, labelOffset: [-7, -11] },
    { id: "amsterdam", lon: 4.9, lat: 52.37, labelOffset: [8, 15] },
    { id: "berlin", lon: 13.41, lat: 52.52, labelOffset: [8, -10] },
    { id: "rome", lon: 12.5, lat: 41.9, labelOffset: [8, 16] }
  ];
  const cityNames = {
    es: { lisbon: "Lisboa", madrid: "Madrid", paris: "París", london: "Londres", amsterdam: "Ámsterdam", berlin: "Berlín", rome: "Roma" },
    en: { lisbon: "Lisbon", madrid: "Madrid", paris: "Paris", london: "London", amsterdam: "Amsterdam", berlin: "Berlin", rome: "Rome" },
    fr: { lisbon: "Lisbonne", madrid: "Madrid", paris: "Paris", london: "Londres", amsterdam: "Amsterdam", berlin: "Berlin", rome: "Rome" },
    pt: { lisbon: "Lisboa", madrid: "Madrid", paris: "Paris", london: "Londres", amsterdam: "Amesterdão", berlin: "Berlim", rome: "Roma" }
  };
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let frameId = null;
  let isVisible = false;
  let cycleStart = performance.now();

  const project = (lon, lat) => {
    const horizontalPadding = Math.max(16, width * 0.045);
    const topPadding = Math.max(18, height * 0.055);
    const bottomPadding = Math.max(18, height * 0.055);
    return {
      x: horizontalPadding + ((lon + 11) / 26.5) * (width - horizontalPadding * 2),
      y: topPadding + ((54.5 - lat) / 18.5) * (height - topPadding - bottomPadding)
    };
  };
  const getRouteSegments = (points) => points.slice(0, -1).map((point, index) => {
    const previous = points[Math.max(0, index - 1)];
    const next = points[index + 1];
    const following = points[Math.min(points.length - 1, index + 2)];
    return {
      start: point,
      controlOne: {
        x: point.x + (next.x - previous.x) / 6,
        y: point.y + (next.y - previous.y) / 6
      },
      controlTwo: {
        x: next.x - (following.x - point.x) / 6,
        y: next.y - (following.y - point.y) / 6
      },
      end: next
    };
  });

  const getBezierPoint = (segment, progress) => {
    const inverse = 1 - progress;
    return {
      x: inverse ** 3 * segment.start.x + 3 * inverse ** 2 * progress * segment.controlOne.x + 3 * inverse * progress ** 2 * segment.controlTwo.x + progress ** 3 * segment.end.x,
      y: inverse ** 3 * segment.start.y + 3 * inverse ** 2 * progress * segment.controlOne.y + 3 * inverse * progress ** 2 * segment.controlTwo.y + progress ** 3 * segment.end.y
    };
  };

  const getBezierTangent = (segment, progress) => {
    const inverse = 1 - progress;
    return {
      x: 3 * inverse ** 2 * (segment.controlOne.x - segment.start.x) + 6 * inverse * progress * (segment.controlTwo.x - segment.controlOne.x) + 3 * progress ** 2 * (segment.end.x - segment.controlTwo.x),
      y: 3 * inverse ** 2 * (segment.controlOne.y - segment.start.y) + 6 * inverse * progress * (segment.controlTwo.y - segment.controlOne.y) + 3 * progress ** 2 * (segment.end.y - segment.controlTwo.y)
    };
  };

  const traceRoute = (segments, endSegment = segments.length - 1, endProgress = 1) => {
    if (!segments.length) return;
    context.beginPath();
    context.moveTo(segments[0].start.x, segments[0].start.y);
    segments.forEach((segment, segmentIndex) => {
      if (segmentIndex > endSegment) return;
      const limit = segmentIndex === endSegment ? endProgress : 1;
      const steps = Math.max(2, Math.ceil(24 * limit));
      for (let step = 1; step <= steps; step += 1) {
        const point = getBezierPoint(segment, (step / steps) * limit);
        context.lineTo(point.x, point.y);
      }
    });
  };

  const drawAircraft = (point, angle) => {
    const scale = width < 380 ? 0.82 : 0.94;
    context.save();
    context.translate(point.x, point.y);
    context.rotate(angle);
    context.scale(scale, scale);
    context.shadowColor = "rgba(0, 0, 0, 0.42)";
    context.shadowBlur = 8;
    context.shadowOffsetY = 3;
    context.beginPath();
    context.moveTo(15, 0);
    context.bezierCurveTo(12, -2, 8, -2.6, 4, -3);
    context.lineTo(0, -11);
    context.lineTo(-3.2, -11);
    context.lineTo(-1.8, -2.5);
    context.lineTo(-9, -1.5);
    context.lineTo(-11.5, -4.5);
    context.lineTo(-13.5, -4.5);
    context.lineTo(-12.2, 0);
    context.lineTo(-13.5, 4.5);
    context.lineTo(-11.5, 4.5);
    context.lineTo(-9, 1.5);
    context.lineTo(-1.8, 2.5);
    context.lineTo(-3.2, 11);
    context.lineTo(0, 11);
    context.lineTo(4, 3);
    context.bezierCurveTo(8, 2.6, 12, 2, 15, 0);
    context.closePath();
    const body = context.createLinearGradient(-12, -8, 14, 7);
    body.addColorStop(0, "#24465f");
    body.addColorStop(0.36, "#d5e0e7");
    body.addColorStop(0.62, "#f4f7f8");
    body.addColorStop(1, "#58788e");
    context.fillStyle = body;
    context.fill();
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    context.strokeStyle = "rgba(7, 26, 47, 0.9)";
    context.lineWidth = 0.9;
    context.stroke();
    context.beginPath();
    context.moveTo(-8, 0);
    context.lineTo(10, 0);
    context.strokeStyle = "rgba(255, 255, 255, 0.58)";
    context.lineWidth = 0.7;
    context.stroke();
    context.beginPath();
    context.ellipse(9, 0, 2.4, 1.25, 0, 0, Math.PI * 2);
    context.fillStyle = "#17344a";
    context.fill();
    context.restore();
  };

  const draw = (time, staticFrame = false) => {
    context.clearRect(0, 0, width, height);
    const points = cities.map((city) => project(city.lon, city.lat));
    const segments = getRouteSegments(points);
    let progress = 0.58;
    let flightDirection = 1;
    if (!staticFrame) {
      const cycleDuration = flightDuration * 2 + turnaroundPause + homePause;
      const elapsed = (time - cycleStart) % cycleDuration;
      if (elapsed < flightDuration) {
        progress = elapsed / flightDuration;
      } else if (elapsed < flightDuration + turnaroundPause) {
        progress = 1;
      } else if (elapsed < flightDuration * 2 + turnaroundPause) {
        progress = 1 - (elapsed - flightDuration - turnaroundPause) / flightDuration;
        flightDirection = -1;
      } else {
        progress = 0;
        flightDirection = -1;
      }
    }
    const routePosition = Math.min(progress * segments.length, segments.length - 0.0001);
    const segmentIndex = Math.floor(routePosition);
    const localProgress = routePosition - segmentIndex;

    context.save();
    traceRoute(segments);
    context.setLineDash([3, 7]);
    context.lineDashOffset = staticFrame ? 0 : -time * 0.012;
    context.strokeStyle = "rgba(169, 217, 233, 0.45)";
    context.lineWidth = 1.2;
    context.stroke();
    context.setLineDash([]);
    traceRoute(segments, segmentIndex, localProgress);
    context.strokeStyle = "rgba(211, 164, 74, 0.82)";
    context.lineWidth = 1.7;
    context.stroke();
    context.restore();

    const language = document.documentElement.lang?.slice(0, 2) || "es";
    const labels = cityNames[language] || cityNames.es;
    cities.forEach((city, index) => {
      const point = points[index];
      const reached = index <= segmentIndex || (index === segments.length && progress >= 0.999);
      const pulse = reached && !staticFrame ? (Math.sin(time * 0.004 - index) + 1) / 2 : 0;
      if (pulse > 0) {
        context.beginPath();
        context.arc(point.x, point.y, 5 + pulse * 4, 0, Math.PI * 2);
        context.strokeStyle = `rgba(211, 164, 74, ${0.2 * (1 - pulse)})`;
        context.lineWidth = 1;
        context.stroke();
      }
      context.beginPath();
      context.arc(point.x, point.y, reached ? 3.2 : 2.5, 0, Math.PI * 2);
      context.fillStyle = reached ? "#d3a44a" : "rgba(169, 217, 233, 0.72)";
      context.fill();
      context.font = `${width < 380 ? 8.5 : 9.5}px Inter, Arial, sans-serif`;
      context.textAlign = city.labelOffset[0] < 0 ? "right" : "left";
      context.textBaseline = "middle";
      context.fillStyle = reached ? "rgba(255, 255, 255, 0.88)" : "rgba(214, 228, 236, 0.66)";
      context.fillText(labels[city.id], point.x + city.labelOffset[0], point.y + city.labelOffset[1]);
    });

    const activeSegment = segments[segmentIndex];
    const aircraftPoint = getBezierPoint(activeSegment, localProgress);
    const tangent = getBezierTangent(activeSegment, localProgress);
    const angle = Math.atan2(tangent.y, tangent.x) + (flightDirection < 0 ? Math.PI : 0);
    const glow = context.createRadialGradient(aircraftPoint.x, aircraftPoint.y, 0, aircraftPoint.x, aircraftPoint.y, 18);
    glow.addColorStop(0, "rgba(169, 217, 233, 0.18)");
    glow.addColorStop(1, "rgba(169, 217, 233, 0)");
    context.beginPath();
    context.arc(aircraftPoint.x, aircraftPoint.y, 18, 0, Math.PI * 2);
    context.fillStyle = glow;
    context.fill();
    drawAircraft(aircraftPoint, angle);
  };

  const resizeCanvas = () => {
    const bounds = route.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw(performance.now(), reducedMotion.matches);
  };

  const stopAnimation = () => {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = null;
  };

  const animate = (time) => {
    if (!isVisible || document.hidden || reducedMotion.matches) {
      stopAnimation();
      return;
    }
    draw(time);
    frameId = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    stopAnimation();
    if (reducedMotion.matches) {
      draw(performance.now(), true);
      return;
    }
    cycleStart = performance.now();
    frameId = requestAnimationFrame(animate);
  };

  if ("IntersectionObserver" in window) {
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    }, { threshold: 0.2 });
    visibilityObserver.observe(route);
  } else {
    isVisible = true;
    startAnimation();
  }
  if ("ResizeObserver" in window) new ResizeObserver(resizeCanvas).observe(route);
  else window.addEventListener("resize", resizeCanvas);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && isVisible) startAnimation();
    else stopAnimation();
  });
  reducedMotion.addEventListener?.("change", startAnimation);
  resizeCanvas();
}
function initialisePortfolio() {
  const yearElement = document.querySelector("#current-year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  applyLanguage(getInitialLanguage(), false);
  applyCandidateData();
  setupLanguageSwitcher();
  setupMobileMenu();
  setupFormValidation();
  setupRevealAnimations();
  setupSectionHighlighting();
  setupScrollFlightProgress();
  setupHeroRouteCanvas();
  setupFlightAnimation();
}

document.addEventListener("DOMContentLoaded", initialisePortfolio);
