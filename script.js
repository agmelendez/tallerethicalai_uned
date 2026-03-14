        document.addEventListener('DOMContentLoaded', () => {

            // --- AGENDA DATA ---
            const agendaData = [
                {
                    time: "08:00 a.m. - 09:45 a.m.",
                    title: "Bloque 1: Apertura y Contexto",
                    details: [
                        "<strong>08:00 a.m.</strong> - Palabras de bienvenida institucional, presentación del equipo y proyecto (Adriana Oviedo / Agustín Gómez).",
                        "<strong>08:30 a.m.</strong> - Ecosistema de IA generativa, Política Institucional de IA (PIIA) y principios éticos (Luis Fernando Fallas).",
                        "<strong>09:00 a.m.</strong> - Navegando la IA: Flujo de trabajo y operativa de «Apoyo Educativo» (José Miguel González).",
                        "<strong>09:30 a.m.</strong> - Café y preparación de equipos ☕."
                    ],
                    icon: "🌅"
                },
                {
                    time: "09:45 a.m. - 12:00 p.m.",
                    title: "Bloque 2: Dinámica y Producción",
                    details: [
                        "<strong>09:45 a.m.</strong> - Explicación de dinámica: formación de equipos, casos, roles, y ejemplos de apoyos educativos (Erick Alfaro, Pedro Peralta).",
                        "<strong>10:15 a.m.</strong> - Sprint de producción: Análisis, definición y generación de materiales del apoyo educativo con IA (Todos)."
                    ],
                    icon: "🧠"
                },
                {
                    time: "12:00 p.m. - 01:00 p.m.",
                    title: "Receso",
                    details: [
                        "<strong>12:00 p.m.</strong> - Almuerzo Institucional 🥘."
                    ],
                    icon: "🍽️"
                },
                {
                    time: "01:00 p.m. - 03:15 p.m.",
                    title: "Bloque 3: Análisis y Reflexión",
                    details: [
                        "<strong>01:00 p.m.</strong> - Sprint de análisis: Listas de chequeo, discusión grupal y elaboración de la Bitácora de trazabilidad (Oldrik Rodríguez, Todos).",
                        "<strong>03:00 p.m.</strong> - Café: Transición a la plenaria ☕."
                    ],
                    icon: "⚙️"
                },
                {
                    time: "03:15 p.m. - 04:30 p.m.",
                    title: "Plenaria y Cierre",
                    details: [
                        "<strong>03:15 p.m.</strong> - Presentación del GPT ético (Lizette Brenes / Daniela Jiménez).",
                        "<strong>03:30 p.m.</strong> - Presentaciones (aleatorias) por equipo (Pedro Peralta, Participantes).",
                        "<strong>04:00 p.m.</strong> - POST-TEST y cierre de la jornada (Agustín Gómez)."
                    ],
                    icon: "✅"
                }
            ];

            // --- ROLES DATA ---
            const rolesData = [
                { 
                    id: "coord", name: "Coordinador/a de Diseño", icon: "🧭", focus: "Coherencia Curricular",
                    morning: [
                        "Garantiza que el PMV esté alineado con los Resultados de Aprendizaje del curso.",
                        "Verifica que el material solicitado a la IA no desvíe el diseño curricular oficial.",
                        "Lidera la toma de decisiones sobre el tipo de apoyo educativo a crear."
                    ],
                    afternoon: [
                        "Aprueba la versión final del apoyo didáctico.",
                        "Supervisa que la 'voz' institucional y académica de la UNED se mantenga en el producto.",
                        "Firma el compromiso de calidad pedagógica."
                    ]
                },
                { 
                    id: "ia", name: "Especialista en IA", icon: "💻", focus: "Mediación Cognitiva",
                    morning: [
                        "Lidera la interacción técnica con las herramientas (ChatGPT, Claude, etc.).",
                        "Diseña los prompts estructurados (Persona + Contexto + Tarea + Restricciones).",
                        "Experimenta con diversos modelos para encontrar la respuesta más precisa."
                    ],
                    afternoon: [
                        "Ajusta los contenidos mediante 'prompts' de refinamiento.",
                        "Define el nivel de transparencia (qué parte hizo la IA y qué parte el humano).",
                        "Vela por la optimización técnica del producto generado."
                    ]
                },
                { 
                    id: "eval", name: "Diseñador/a de Evaluación", icon: "📊", focus: "Calidad de Medición",
                    morning: [
                        "Define los criterios de evaluación del estudiante que usará el apoyo.",
                        "Identifica qué competencias de pensamiento crítico se evaluarán con el uso de IA.",
                        "Planifica la integración del material en el entorno virtual."
                    ],
                    afternoon: [
                        "Construye la rúbrica de evaluación basada en desempeño.",
                        "Incluye el uso ético y reflexivo de la IA como un criterio evaluativo explícito.",
                        "Valida que el material sea útil para el proceso evaluativo de la cátedra."
                    ]
                },
                { 
                    id: "etica", name: "Responsable de Ética y PIIA", icon: "⚖️", focus: "Gobernanza Institucional",
                    morning: [
                        "Garantiza que no se carguen datos sensibles o privados a herramientas de IA.",
                        "Vigila la aparición de sesgos cognitivos o culturales en las primeras respuestas de la IA.",
                        "Mantiene los 9 principios de la PIIA visibles en la mesa de trabajo."
                    ],
                    afternoon: [
                        "Lidera el llenado del Certificado de Cumplimiento Ético.",
                        "Detecta automatización excesiva (evitando el reemplazo total del docente).",
                        "Valida la declaración de transparencia del producto final."
                    ]
                },
                { 
                    id: "doc", name: "Documentador/a de Trazabilidad", icon: "📝", focus: "Evidencia Institucional",
                    morning: [
                        "Inicia la Bitácora de Trazabilidad en Teams.",
                        "Registra los prompts 'maestros' que sirvieron como base para el diseño.",
                        "Anota las limitaciones encontradas en la IA durante la mañana."
                    ],
                    afternoon: [
                        "Captura la evolución del producto: 'IA propuso X -> Nosotros ajustamos Y'.",
                        "Sistematiza los archivos finales para la subida a la carpeta de Evidencias.",
                        "Asegura que el nombre de los archivos cumpla con la nomenclatura establecida."
                    ]
                }
            ];

            // --- PRINCIPIOS ETICOS ---
            const principiosEticos = [
                { label: 'Integridad', color: '#002f5d', text: 'Honestidad académica: no plagio, atribución clara y compromiso con la verdad.' },
                { label: 'Supervisión', color: '#004a8f', text: 'Control humano total: el docente valida cada palabra y decisión generada por la IA.' },
                { label: 'Equidad', color: '#0064c1', text: 'Inclusión territorial: asegurar que la tecnología no genere brechas de acceso en las sedes.' },
                { label: 'Transparencia', color: '#00b4d8', text: 'Declaración explícita: el estudiante y la cátedra saben exactamente dónde se usó IA.' },
                { label: 'Sostenibilidad', color: '#48cae4', text: 'Uso racional de recursos: equilibrio entre innovación digital y huella energética/ética.' },
                { label: 'Crítico', color: '#0077b6', text: 'Validación reflexiva: cuestionar siempre los resultados de la IA para evitar alucinaciones.' },
                { label: 'Seguridad', color: '#023e8a', text: 'Protección de datos: no exponer información privada institucional o de estudiantes.' },
                { label: 'Autonomía', color: '#03045e', text: 'Libertad de cátedra: la IA apoya el proceso pero no dicta el contenido soberano del docente.' },
                { label: 'Creatividad', color: '#0096c7', text: 'Nuevas mediaciones: usar la IA para potenciar ideas que antes no eran posibles.' }
            ];

            // --- RENDER AGENDA ---
            const agendaContainer = document.getElementById('agenda-container');
            agendaData.forEach((item, idx) => {
                const isOpen = idx === 0 ? 'open' : '';
                agendaContainer.innerHTML += `
                    <div class="border-b border-slate-200 last:border-0">
                        <button class="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors agenda-toggle focus:outline-none">
                            <div class="flex items-center gap-6">
                                <span class="text-4xl filter grayscale hover:grayscale-0 transition-all">${item.icon}</span>
                                <div>
                                    <p class="text-xs font-black text-[#00b4d8] uppercase tracking-widest mb-1">${item.time}</p>
                                    <h3 class="text-xl font-bold text-[#002f5d]">${item.title}</h3>
                                </div>
                            </div>
                            <span class="chevron transition-transform duration-300 text-slate-400 ${isOpen ? 'rotate-180' : ''}">▼</span>
                        </button>
                        <div class="px-8 bg-slate-50 accordion-content ${isOpen}">
                            <div class="ml-16 py-4">
                                <ul class="space-y-4">
                                    ${item.details.map(d => `
                                        <li class="flex items-center gap-3 text-slate-600">
                                            <span class="w-1.5 h-1.5 bg-[#00b4d8] rounded-full"></span>
                                            <span class="text-sm font-medium">${d}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            });

            document.querySelectorAll('.agenda-toggle').forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const chevron = btn.querySelector('.chevron');
                    content.classList.toggle('open');
                    chevron.classList.toggle('rotate-180');
                });
            });

            // --- RENDER ROLES (MASTER-DETAIL) ---
            const roleButtonsContainer = document.getElementById('role-buttons');
            const roleDetailsPanel = document.getElementById('role-details-panel');

            rolesData.forEach((role, idx) => {
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-6 py-5 rounded-2xl border border-slate-200 bg-white hover:border-[#00b4d8] transition-all role-btn group flex items-center gap-4`;
                btn.innerHTML = `
                    <span class="text-3xl transition-transform group-hover:scale-110">${role.icon}</span>
                    <div class="flex-grow">
                        <p class="font-bold text-slate-800">${role.name}</p>
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">${role.focus}</p>
                    </div>
                `;
                btn.onclick = () => {
                    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active-role-btn', 'shadow-md', 'border-[#00b4d8]'));
                    btn.classList.add('active-role-btn', 'shadow-md');
                    roleDetailsPanel.innerHTML = `
                        <div class="animate-in fade-in slide-in-from-right duration-300">
                            <div class="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
                                <span class="text-5xl bg-slate-100 w-20 h-20 flex items-center justify-center rounded-3xl">${role.icon}</span>
                                <div>
                                    <h3 class="text-3xl font-bold text-[#002f5d]">${role.name}</h3>
                                    <p class="text-[#00b4d8] font-bold text-sm uppercase tracking-widest">Líder de ${role.focus}</p>
                                </div>
                            </div>
                            
                            <div class="space-y-10">
                                <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <h4 class="text-amber-800 font-black text-xs uppercase mb-4 flex items-center gap-2">
                                        <span class="w-3 h-3 bg-amber-400 rounded-full"></span> Mañana: Fases 1 y 2 (Conceptualización y Prompting)
                                    </h4>
                                    <ul class="space-y-3">
                                        ${role.morning.map(t => `<li class="text-sm text-slate-700 pl-6 relative">
                                            <span class="absolute left-0 top-1 font-bold text-amber-500">→</span> ${t}
                                        </li>`).join('')}
                                    </ul>
                                </div>
                                <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                    <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 flex items-center gap-2">
                                        <span class="w-3 h-3 bg-indigo-400 rounded-full"></span> Tarde: Fases 3 y 4 (Curaduría y Ética)
                                    </h4>
                                    <ul class="space-y-3">
                                        ${role.afternoon.map(t => `<li class="text-sm text-slate-700 pl-6 relative">
                                            <span class="absolute left-0 top-1 font-bold text-indigo-500">→</span> ${t}
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;
                };
                roleButtonsContainer.appendChild(btn);
                if (idx === 0) btn.click();
            });

            // --- ETHICS CHART ---
            const ctx = document.getElementById('ethicsChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: principiosEticos.map(p => p.label),
                    datasets: [{
                        data: Array(9).fill(1),
                        backgroundColor: principiosEticos.map(p => p.color),
                        borderWidth: 4, borderColor: '#ffffff',
                        hoverOffset: 20
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: { legend: { display: false } },
                    onClick: (_, el) => {
                        if (el.length > 0) {
                            const p = principiosEticos[el[0].index];
                            const detailBox = document.getElementById('ethics-detail');
                            detailBox.style.borderColor = p.color;
                            detailBox.innerHTML = `
                                <div class="animate-in fade-in duration-300">
                                    <h3 class="text-2xl font-bold mb-3" style="color: ${p.color}">${p.label}</h3>
                                    <p class="text-slate-700 text-lg leading-relaxed">${p.text}</p>
                                </div>
                            `;
                        }
                    }
                }
            });

            // --- MATERIALES DESCARGABLES ---
            const materialesData = [
                {
                    id: 'presentaciones', name: 'Presentaciones', icon: '📽️',
                    bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', accent: '#f59e0b',
                    desc: 'Presentaciones de todos los módulos del taller alojadas en SharePoint.',
                    isExternal: true,
                    externalUrl: 'https://unedaccr.sharepoint.com/:f:/s/TallerIAGenerativa-ERASMUS/IgARZfQTnOsgR77Yupi8R41LAarYTMGVF1MClWThEiggPls?e=BOLfTw'
                },
                {
                    id: 'documentos-generales', name: 'Documentos Generales', icon: '📂',
                    bg: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)', accent: '#64748b',
                    desc: 'Archivos generales, bitácoras, listas de chequeo y guías para el taller.',
                    basePath: 'MaterialesTaller/Documentos Generales',
                    items: [
                        { name: 'Asistente para el Uso Universitario ético de IA.pdf', type: 'pdf' },
                        { name: 'Bitácora de trazabilidad ética.docx', type: 'docx' },
                        { name: 'Declaración de uso de Inteligencia Artificial.docx', type: 'docx' },
                        { name: 'Forms Lista de chequeo.pdf', type: 'pdf' },
                        { name: 'Lista de chequeo.docx', type: 'docx' },
                        { name: 'Lista de participantes por grupo.xlsx', type: 'xlsx' },
                        { name: 'Programa del Taller.pdf', type: 'pdf' },
                        { name: 'Tabla con herramientas web para construir prompts.pdf', type: 'pdf' }
                    ]
                },
                {
                    id: 'empresarialidad', name: 'Empresarialidad', icon: '🏢',
                    bg: 'linear-gradient(135deg, #002f5d 0%, #004a8f 100%)', accent: '#002f5d',
                    desc: 'Unidad didáctica, metodología de casos y podcasts del curso Empresarialidad.',
                    basePath: 'Materiales/Empresarialidad/Empresarialidad',
                    items: [
                        { name: '04121.pdf', type: 'pdf' },
                        { name: 'ENLACES-PODCATS-04121.docx', type: 'docx' },
                        { name: 'Método de Casos_FINAL.pdf', type: 'pdf' },
                        { name: 'UD4121_Empresarialidad_VEUNED.pdf', type: 'pdf' },
                        { name: 'Documentos generales', type: 'folder',
                          basePath: 'Materiales/Empresarialidad/Empresarialidad/Documentos generales',
                          items: [
                            { name: 'Asistente para el uso Universitario ético de IA.docx', type: 'docx' },
                            { name: 'Bitácora de trazabilidad ética.docx', type: 'docx' },
                            { name: 'Declaración de uso de Inteligencia Artificial.docx', type: 'docx' },
                            { name: 'Forms Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de participantes por grupo.xlsx', type: 'xlsx' },
                            { name: 'Programa del Taller.docx', type: 'docx' },
                            { name: 'Tabla con herramientas web para construir prompts.docx', type: 'docx' },
                          ]
                        }
                    ]
                },
                {
                    id: 'neuroeducacion', name: 'Neuroeducación', icon: '🧠',
                    bg: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)', accent: '#0077b6',
                    desc: 'Guías de trabajo, orientaciones académicas y lecturas de neurociencia.',
                    basePath: 'Materiales/Neuroeducación/Neuroeducación',
                    items: [
                        { name: 'Orientación Académica Neuroeducación IC 2026.pdf', type: 'pdf' },
                        { name: 'Guía de Trabajo Unidad 1 Diario de un cerebro.pdf', type: 'pdf' },
                        { name: 'Guía  de Trabajo Unidad 1 Neurocápsula.pdf', type: 'pdf' },
                        { name: 'Generalidades Neurociencia_Cátedra Psicología Educativa.pdf', type: 'pdf' },
                        { name: 'Documentos generales', type: 'folder',
                          basePath: 'Materiales/Neuroeducación/Neuroeducación/Documentos generales',
                          items: [
                            { name: 'Asistente para el uso Universitario ético de IA.docx', type: 'docx' },
                            { name: 'Bitácora de trazabilidad ética.docx', type: 'docx' },
                            { name: 'Declaración de uso de Inteligencia Artificial.docx', type: 'docx' },
                            { name: 'Forms Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de participantes por grupo.xlsx', type: 'xlsx' },
                            { name: 'Programa del Taller.docx', type: 'docx' },
                            { name: 'Tabla con herramientas web para construir prompts.docx', type: 'docx' },
                          ]
                        }
                    ]
                },
                {
                    id: 'programacion-web', name: 'Programación Web', icon: '💻',
                    bg: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)', accent: '#4338ca',
                    desc: 'Unidad didáctica, talleres prácticos y orientaciones del curso Programación en Web.',
                    basePath: 'Materiales/ProgramaciónWeb/ProgramaciónWeb',
                    items: [
                        { name: 'Unidad Didactica Programacion Web.pdf', type: 'pdf' },
                        { name: 'Orientacion Academica 03098 Programacion en Web.pdf', type: 'pdf' },
                        { name: 'Taller No.1-03098-3C-2025.pdf', type: 'pdf' },
                        { name: 'Taller No.2-03098-3C-2025.pdf', type: 'pdf' },
                        { name: 'Asistente para el uso Universitario ético de IA.docx', type: 'docx' },
                        { name: 'Documentos generales', type: 'folder',
                          basePath: 'Materiales/ProgramaciónWeb/ProgramaciónWeb/Documentos generales',
                          items: [
                            { name: 'Asistente para el uso Universitario ético de IA.docx', type: 'docx' },
                            { name: 'Bitácora de trazabilidad ética.docx', type: 'docx' },
                            { name: 'Declaración de uso de Inteligencia Artificial.docx', type: 'docx' },
                            { name: 'Forms Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de participantes por grupo.xlsx', type: 'xlsx' },
                            { name: 'Programa del Taller.docx', type: 'docx' },
                            { name: 'Tabla con herramientas web para construir prompts.docx', type: 'docx' },
                          ]
                        }
                    ]
                },
                {
                    id: 'taller-tfg', name: 'Taller Investigación TFG', icon: '🔬',
                    bg: 'linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)', accent: '#0d9488',
                    desc: 'Materiales para el taller de investigación y elaboración del Trabajo Final de Graduación.',
                    basePath: 'Materiales/Taller de investigación TFG/Taller de investigación TFG',
                    items: [
                        { name: 'OA_Taller_TFG_2026.pdf', type: 'pdf' },
                        { name: 'Explicacion_Dinamica_IA.pdf', type: 'pdf' },
                        { name: 'Exploración_básica_IA_elicit.pdf', type: 'pdf' },
                        { name: 'Exploraciónbásica_IA_ChatGpt.pdf', type: 'pdf' },
                        { name: 'infografia_2.png', type: 'image' },
                        { name: 'Documentos generales', type: 'folder',
                          basePath: 'Materiales/Taller de investigación TFG/Taller de investigación TFG/Documentos generales',
                          items: [
                            { name: 'Asistente para el uso Universitario ético de IA.docx', type: 'docx' },
                            { name: 'Bitácora de trazabilidad ética.docx', type: 'docx' },
                            { name: 'Declaración de uso de Inteligencia Artificial.docx', type: 'docx' },
                            { name: 'Forms Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de chequeo.docx', type: 'docx' },
                            { name: 'Lista de participantes por grupo.xlsx', type: 'xlsx' },
                            { name: 'Programa del Taller.docx', type: 'docx' },
                            { name: 'Tabla con herramientas web para construir prompts.docx', type: 'docx' },
                          ]
                        }
                    ]
                }
            ];

            function matFileIcon(type) {
                return { pdf: '📄', docx: '📝', xlsx: '📊', image: '🖼️', folder: '📁' }[type] || '📄';
            }
            function matFileLabel(type) {
                return { pdf: 'PDF', docx: 'Word', xlsx: 'Excel', image: 'Imagen' }[type] || type.toUpperCase();
            }
            function matFileBadge(type) {
                return { pdf: '#fee2e2:#b91c1c', docx: '#dbeafe:#1d4ed8', xlsx: '#dcfce7:#15803d', image: '#f3e8ff:#7e22ce' }[type] || '#f1f5f9:#475569';
            }
            function matEncodePath(path) {
                const encoded = path.split('/').map(s => encodeURIComponent(s)).join('/');
                if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    if (path.startsWith('MaterialesTaller')) {
                        return './' + encoded;
                    }
                    return 'https://agmelendez.github.io/tallerethicalai_uned/' + encoded;
                }
                return encoded;
            }

            let matStack = [];

            function matRenderCards() {
                const container = document.getElementById('mat-folder-cards');
                materialesData.forEach((folder, idx) => {
                    const card = document.createElement('button');
                    card.className = 'mat-folder-card text-left p-6 rounded-2xl text-white shadow-md hover:shadow-xl focus:outline-none relative overflow-hidden group flex flex-col items-start justify-start h-full min-h-[180px]';
                    card.style.background = folder.bg;
                    card.dataset.idx = idx;
                    card.setAttribute('aria-label', folder.isExternal ? 'Abrir enlace externo ' + folder.name : 'Abrir carpeta ' + folder.name);

                    if (folder.isExternal) {
                        card.innerHTML = `
                            <div class="absolute -right-3 -bottom-3 text-8xl opacity-10 group-hover:opacity-20 transition-all select-none pointer-events-none">${folder.icon}</div>
                            <div class="relative z-10 w-full flex-grow flex flex-col h-full">
                                <div class="text-4xl mb-3">${folder.icon}</div>
                                <h3 class="text-base font-bold leading-tight mb-1">${folder.name}</h3>
                                <p class="text-xs text-white/70 mb-4 leading-relaxed line-clamp-2">${folder.desc}</p>
                                <div class="mt-auto">
                                    <div class="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 transition-all w-full justify-center py-2 rounded-xl">
                                        Abrir en SharePoint ↗
                                    </div>
                                </div>
                            </div>
                        `;
                        card.addEventListener('click', () => window.open(folder.externalUrl, '_blank'));
                    } else {
                        const files = folder.items.filter(i => i.type !== 'folder').length;
                        const folders = folder.items.filter(i => i.type === 'folder').length;
                        card.innerHTML = `
                            <div class="absolute -right-3 -bottom-3 text-8xl opacity-10 group-hover:opacity-20 transition-all select-none pointer-events-none">${folder.icon}</div>
                            <div class="relative z-10 w-full flex-grow flex flex-col h-full">
                                <div class="text-4xl mb-3">${folder.icon}</div>
                                <h3 class="text-base font-bold leading-tight mb-1">${folder.name}</h3>
                                <p class="text-xs text-white/70 mb-4 leading-relaxed line-clamp-2">${folder.desc}</p>
                                <div class="mt-auto">
                                    <div class="flex items-center gap-2 text-xs font-semibold text-white/80 mb-4">
                                        <span class="bg-white/20 px-2 py-0.5 rounded-full">${files} archivo${files !== 1 ? 's' : ''}</span>
                                        ${folders > 0 ? `<span class="bg-white/20 px-2 py-0.5 rounded-full">${folders} carpeta${folders !== 1 ? 's' : ''}</span>` : ''}
                                    </div>
                                    <div class="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 transition-all w-full justify-center py-2 rounded-xl">
                                        Abrir carpeta →
                                    </div>
                                </div>
                            </div>
                        `;
                        card.addEventListener('click', () => matOpenFolder(idx));
                    }
                    container.appendChild(card);
                });
            }

            function matOpenFolder(idx) {
                const folder = materialesData[idx];
                matStack = [{ label: folder.name, items: folder.items, basePath: folder.basePath, folderIdx: idx }];
                document.querySelectorAll('.mat-folder-card').forEach((c, i) => {
                    c.classList.toggle('active-folder', i === idx);
                    if (i === idx) {
                        c.style.outline = '3px solid white';
                        c.style.outlineOffset = '3px';
                    } else {
                        c.style.outline = '';
                        c.style.outlineOffset = '';
                    }
                });
                const explorer = document.getElementById('mat-explorer');
                explorer.classList.remove('hidden');
                matRenderExplorer();
                setTimeout(() => explorer.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }

            function matNavigateInto(subfolder) {
                matStack.push({ label: subfolder.name, items: subfolder.items, basePath: subfolder.basePath, folderIdx: matStack[0].folderIdx });
                matRenderExplorer();
            }

            function matGoBack() {
                if (matStack.length > 1) { matStack.pop(); matRenderExplorer(); }
                else matCloseExplorer();
            }

            function matCloseExplorer() {
                document.getElementById('mat-explorer').classList.add('hidden');
                document.querySelectorAll('.mat-folder-card').forEach(c => {
                    c.classList.remove('active-folder');
                    c.style.outline = '';
                    c.style.outlineOffset = '';
                });
                matStack = [];
            }

            function matRenderExplorer() {
                const current = matStack[matStack.length - 1];
                const folder = materialesData[current.folderIdx];
                const backBtn = document.getElementById('mat-back-btn');

                // Breadcrumb
                const bc = document.getElementById('mat-breadcrumb');
                let bcHTML = `<span class="text-slate-400 font-medium">Materiales</span>`;
                matStack.forEach((s, i) => {
                    bcHTML += `<span class="text-slate-300 mx-1">/</span>`;
                    if (i === matStack.length - 1) {
                        bcHTML += `<span class="font-bold" style="color:${folder.accent}">${s.label}</span>`;
                    } else {
                        bcHTML += `<button class="mat-bread-btn hover:underline font-medium text-slate-600" data-depth="${i}">${s.label}</button>`;
                    }
                });
                bc.innerHTML = bcHTML;
                document.querySelectorAll('.mat-bread-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        matStack = matStack.slice(0, parseInt(btn.dataset.depth) + 1);
                        matRenderExplorer();
                    });
                });

                // Back button
                backBtn.style.display = matStack.length > 1 ? 'flex' : 'none';

                // Content
                const subfolders = current.items.filter(i => i.type === 'folder');
                const files = current.items.filter(i => i.type !== 'folder');
                let html = '';

                if (subfolders.length > 0) {
                    html += `
                    <div class="mb-8">
                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span class="w-4 h-px bg-slate-300 inline-block"></span>Carpetas<span class="flex-grow h-px bg-slate-100 inline-block"></span>
                        </p>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
                            ${subfolders.map(f => `
                                <button class="mat-subfolder-btn group flex flex-col items-center text-center p-5 rounded-2xl border-2 border-slate-100 hover:border-slate-300 bg-slate-50 hover:bg-white transition-all focus:outline-none shadow-sm hover:shadow-md"
                                    data-sfname="${f.name}">
                                    <span class="text-5xl mb-2 group-hover:scale-110 transition-transform">📁</span>
                                    <span class="text-xs font-bold text-slate-700 leading-tight">${f.name}</span>
                                    <span class="text-[10px] text-slate-400 mt-1">${f.items.length} archivos</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>`;
                }

                if (files.length > 0) {
                    html += `
                    <div>
                        <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span class="w-4 h-px bg-slate-300 inline-block"></span>Archivos<span class="flex-grow h-px bg-slate-100 inline-block"></span>
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${files.map(f => {
                                const [bgColor, textColor] = matFileBadge(f.type).split(':');
                                const filePath = matEncodePath(current.basePath + '/' + f.name);
                                return `
                                <div class="mat-file-row flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all group">
                                    <div class="text-3xl flex-shrink-0 select-none">${matFileIcon(f.type)}</div>
                                    <div class="flex-grow min-w-0">
                                        <p class="text-xs font-semibold text-slate-700 truncate leading-snug" title="${f.name}">${f.name}</p>
                                        <span class="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style="background:${bgColor};color:${textColor}">
                                            ${matFileLabel(f.type)}
                                        </span>
                                    </div>
                                    <a href="${filePath}" download="${f.name}"
                                        class="mat-download-btn flex-shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-lg bg-slate-100 hover:text-white transition-all whitespace-nowrap"
                                        onmouseover="this.style.background='${folder.accent}';this.style.color='white'"
                                        onmouseout="this.style.background='';this.style.color=''"
                                        title="Descargar ${f.name}">
                                        ⬇ Descargar
                                    </a>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>`;
                }

                document.getElementById('mat-content').innerHTML = html;

                // Subfolder click handlers
                document.querySelectorAll('.mat-subfolder-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const sf = current.items.find(i => i.name === btn.dataset.sfname && i.type === 'folder');
                        if (sf) matNavigateInto(sf);
                    });
                });
            }

            // Init materials
            matRenderCards();
            document.getElementById('mat-back-btn').addEventListener('click', matGoBack);
            document.getElementById('mat-close-btn').addEventListener('click', matCloseExplorer);

            // --- EQUIPO FACILITADOR DATA (A-Z por nombre) ---
            const equipoData = [
                {
                    nombre: "Adriana Oviedo Vega",
                    unidad: "Rectoría",
                    bio: "Periodista con 25 años de experiencia en la UNED, coordinadora de la estrategia de transformación digital y de iniciativas de IA y cultura digital. Ha liderado procesos de teletrabajo y comunicación institucional, aportando visión estratégica en adaptación tecnológica y ética de la IA en educación.",
                    color: "#002f5d"
                },
                {
                    nombre: "Agustín Gómez Meléndez",
                    unidad: "Vicerrectoría de Investigación",
                    bio: "Estadístico e investigador en IA que coordina investigación estadística en la UCR y lidera proyectos de IA en la UNED, con más de 20 años de experiencia. Trabaja en aprendizaje automático, política pública y desarrollo sostenible, promoviendo estándares éticos en análisis de datos y diseño de políticas basadas en evidencia.",
                    color: "#004a8f"
                },
                {
                    nombre: "Andrés Segura Castillo",
                    unidad: "Vicerrectoría de Investigación",
                    bio: "Coordinador del Laboratorio de Investigación e Innovación Tecnológica (LIIT), experto en analítica de datos, IA, Big Data y gestión tecnológica. Ha liderado proyectos nacionales e internacionales en simulación social y aplicaciones de IA para sistemas complejos y transformación digital universitaria.",
                    color: "#0064c1"
                },
                {
                    nombre: "Bryan Carranza Rodríguez",
                    unidad: "Rectoría",
                    bio: "Planificador económico y social de la UNED, involucrado en estudios sobre gestión universitaria y fortalecimiento de centros universitarios. Participa en evaluaciones institucionales, servicios a población con discapacidad y acciones ligadas a la estrategia de transformación digital.",
                    color: "#00b4d8"
                },
                {
                    nombre: "Daniela Jiménez Obando",
                    unidad: "Vicerrectoría de Investigación",
                    bio: "Gestora estratégica en emprendimiento e innovación en la UNED, con amplia experiencia en investigación sobre pymes y ecosistemas emprendedores. Ha publicado estudios sobre impactos económicos de crisis como la COVID‑19 y promueve metodologías innovadoras y ética empresarial en la integración de IA.",
                    color: "#0077b6"
                },
                {
                    nombre: "Erick Alfaro Venegas",
                    unidad: "Escuela de Ciencias Exactas y Naturales",
                    bio: "Ingeniero en sistemas y máster en tecnología educativa, responsable de la cátedra de Sistemas de Calidad de las TIC en la ECEN de la UNED. Su trabajo se centra en calidad de software, tecnologías de información y apoyo a carreras de ciencias e ingeniería.",
                    color: "#023e8a"
                },
                {
                    nombre: "Erika Gutiérrez Solís",
                    unidad: "Escuela de Ciencias Sociales y Humanidades",
                    bio: "Docente y responsable de cursos de psicología educativa en la UNED, atendiendo procesos de acompañamiento al estudiantado. Su labor se orienta a comprender el desarrollo psicológico y diseñar experiencias de aprendizaje acordes con la educación a distancia.",
                    color: "#0096c7"
                },
                {
                    nombre: "Greibin Villegas Barahona",
                    unidad: "Vicerrectoría de Docencia",
                    bio: "Funcionario vinculado a procesos académicos y de gestión docente en la UNED. Su rol se orienta al apoyo de la docencia a distancia y a la mejora de servicios académicos para el estudiantado.",
                    color: "#48cae4"
                },
                {
                    nombre: "Grettel Schonwandt Alvarado",
                    unidad: "Escuela de Ciencias de la Administración",
                    bio: "Tutora y docente en Administración en la UNED, con maestría en Administración Pública por la UCR. Su trabajo combina gestión pública, uso de tecnologías para el aprendizaje y aplicación de estándares éticos en la formación de administradores públicos.",
                    color: "#002f5d"
                },
                {
                    nombre: "Jose Miguel González Bolaños",
                    unidad: "Dirección de Producción de Materiales Didácticos",
                    bio: "Productor y realizador audiovisual de la UNED, responsable de spots institucionales y recursos didácticos para la educación a distancia. Se especializa en diseño y producción de materiales multimedia educativos para apoyar procesos de enseñanza-aprendizaje virtual.",
                    color: "#004a8f"
                },
                {
                    nombre: "Lizette Brenes Bonilla",
                    unidad: "Vicerrectoría de Investigación",
                    bio: "Investigadora e innovadora de reconocimiento internacional en educación superior y proyectos de IA. Ha sido vicerrectora de Investigación y líder de OMIPYMES+, con amplia producción académica sobre creatividad, innovación y aplicaciones éticas de la IA.",
                    color: "#0064c1"
                },
                {
                    nombre: "Luis Fernando Fallas Fallas",
                    unidad: "Dirección de Producción de Materiales Didácticos",
                    bio: "Doctor en Estudios de Cine con amplia trayectoria en producción audiovisual y medios educativos en la UNED. Dirige la DPMD, donde lidera estrategias de narrativas digitales y creación de materiales innovadores para la difusión de contenidos formativos y éticos en IA.",
                    color: "#00b4d8"
                },
                {
                    nombre: "Oldrik Vinicio Rodríguez Durán",
                    unidad: "Escuela de Ciencias de la Administración",
                    bio: "Académico vinculado a procesos de capacitación y extensión en modelos de negocios y emprendimiento en coordinación con la UNED. Participa en iniciativas de desarrollo local y economía social, apoyando formación en gestión y administración para comunidades regionales.",
                    color: "#0077b6"
                },
                {
                    nombre: "Pedro Peralta Sandí",
                    unidad: "Escuela de Ciencias Exactas y Naturales",
                    bio: "Académico en telecomunicaciones de la ECEN y editor de cursos como taller de investigación y práctica dirigida en el área. Impulsa metodologías innovadoras para la formulación de anteproyectos y el fortalecimiento de competencias prácticas en ingeniería de telecomunicaciones.",
                    color: "#023e8a"
                }
            ];

            // --- RENDER EQUIPO ---
            const equipoContainer = document.getElementById('equipo-container');
            equipoContainer.innerHTML = equipoData.map(persona => {
                const initials = persona.nombre.split(' ').slice(0, 2).map(w => w[0]).join('');
                return `
                    <div class="bg-white p-6 rounded-2xl border-t-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col" style="border-top-color: ${persona.color}">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0" style="background-color: ${persona.color}">
                                ${initials}
                            </div>
                            <div>
                                <h3 class="font-bold text-[#002f5d] leading-tight">${persona.nombre}</h3>
                                <p class="text-[10px] font-bold uppercase tracking-widest mt-0.5" style="color: ${persona.color}">${persona.unidad}</p>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-grow">${persona.bio}</p>
                    </div>
                `;
            }).join('');

            // --- CHECKLIST LOGIC ---
            document.querySelectorAll('.toggle-done').forEach(btn => {
                btn.addEventListener('click', () => {
                    const isDone = btn.classList.contains('bg-[#002f5d]');
                    if(isDone) {
                        btn.classList.remove('bg-[#002f5d]', 'text-white');
                        btn.innerText = 'Pendiente de Subir';
                        btn.parentElement.classList.remove('opacity-50', 'bg-slate-50');
                    } else {
                        btn.classList.add('bg-[#002f5d]', 'text-white');
                        btn.innerText = '✅ Subido a Teams';
                        btn.parentElement.classList.add('opacity-50', 'bg-slate-50');
                    }
                });
            });

        });
