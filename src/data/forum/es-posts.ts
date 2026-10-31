import type { ForumPost } from './types';

const toneByCategory: Record<string, ForumPost['categoryTone']> = {
  'MW4 Discussion': 'purple',
  'Gameplay Questions': 'blue',
  'Product Questions': 'purple',
  'Setup & Support': 'green',
  'Game Updates': 'orange',
  'Features & Customization': 'blue',
  'Account & PC Questions': 'green',
  'PC Performance & Support': 'orange',
};

function post(input: Omit<ForumPost, 'categoryTone'>): ForumPost {
  return { ...input, categoryTone: toneByCategory[input.category] ?? 'purple' };
}

export const esForumPosts: ForumPost[] = [
  post({
    slug: 'modern-warfare-4-cheats-working-after-launch',
    category: 'MW4 Discussion',
    title: '¿Hay trucos de Modern Warfare 4 confirmados que funcionen tras el lanzamiento?',
    excerpt:
      'Las actualizaciones de la semana de lanzamiento hacen difícil juzgar capturas y afirmaciones antiguas. Estas comprobaciones ayudan antes de confiar en una declaración de compatibilidad.',
    author: 'QueueGoblin',
    age: '',
    published: '2026-10-26',
    commentsCount: 5,
    upvotes: 41,
    body: [
      '¿Alguien sabe cómo comprobar si un listado de herramienta para MW4 está realmente al día? El juego acaba de salir y casi todas las páginas muestran una captura con un gran rótulo de "funciona". Eso no dice cuándo se probó ni en qué versión.',
      'No pido promesas. Solo quiero saber qué revisáis antes de fiaros de una página de estado en lugar de perder una tarde con algo obsoleto.',
    ],
    comments: [
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Fecha de la última actualización, versión del juego admitida y un registro de cambios real serían mis tres primeras comprobaciones. Una captura estática puede ser de otra compilación.',
      },
      {
        author: 'lowammo',
        age: '',
        score: 0,
        body: 'Además, "undetected" no es lo mismo que "funciona". Mucha gente mezcla los dos como si fueran intercambiables.',
      },
      {
        author: 'QueueGoblin',
        age: '',
        score: 0,
        body: 'Exacto. Que una herramienta se abra bien tampoco demuestra la parte importante.',
      },
      {
        author: 'SundayGrind',
        age: '',
        score: 0,
        body: 'Buscaría un [estado actual y problemas conocidos](/cheats/) y [contacto de soporte](/support/) antes de pagar. Si el listado no dice qué admite, no haré yo el trabajo de detective.',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Y revisad por separado las [notas del parche de lanzamiento de Modern Warfare 4](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes). Un parche puede corregir errores del juego sin mencionar herramientas de terceros. No leáis de más.',
      },
    ],
  }),
  post({
    slug: 'mw4-esp-vs-minimap',
    category: 'Gameplay Questions',
    title: 'ESP frente al minimapa normal en MW4: ¿cuál es la diferencia real?',
    excerpt:
      'Una conversación en lenguaje claro sobre la terminología ESP, la información del juego y por qué no hay que confundir superposiciones de terceros con funciones del HUD integrado.',
    author: 'minimapEnjoyer',
    age: '',
    published: '2026-08-14',
    commentsCount: 5,
    upvotes: 28,
    body: [
      'Veo ESP y wallhack usados como si fueran lo mismo. ¿ESP es básicamente el minimapa con más datos, o el término significa otra cosa? Sé que en los clips se usan las palabras con poco rigor; intento separar el HUD normal del juego de lo que anuncian herramientas de terceros.',
    ],
    comments: [
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'A nivel básico, ESP suele ser una superposición que muestra información de jugadores u objetos más allá de la vista normal. Wallhack suele referirse a ver información a través de geometría. A menudo se solapan los términos, pero no son sinónimos perfectos.',
      },
      {
        author: 'minimapEnjoyer',
        age: '',
        score: 0,
        body: 'Entendido. Entonces el punto rojo o el ping normal no es automáticamente "ESP" solo porque da información.',
      },
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'Correcto. Tomad el HUD del juego y sus descripciones oficiales como referencia. Las superposiciones de terceros son otra categoría y pueden infringir las reglas del juego.',
      },
      {
        author: 'scopeGremlin',
        age: '',
        score: 0,
        body: 'El vocabulario gamer lleva años siendo un caos. Ahora todo miniatura lo llama wallhack.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Conviene añadir: una lista de funciones no prueba que una herramienta haga lo anunciado ni que sea adecuada para la cuenta. Son preguntas distintas.',
      },
    ],
  }),
  post({
    slug: 'compare-mw4-cheat-listings',
    category: 'Product Questions',
    title: '¿Cómo comparar listados de trucos para MW4 sin fiarse de banners "undetected"?',
    excerpt:
      'Comparad documentación, notas de compatibilidad, acceso a soporte, condiciones de facturación e historial de actualizaciones en lugar de una sola insignia de marketing.',
    author: 'tabbedOut',
    age: '',
    published: '2026-09-19',
    commentsCount: 5,
    upvotes: 33,
    body: [
      'Estoy comparando listados y la mayor señal de alerta es el texto gigante "undetected" sin más detalles. ¿Qué buscáis de verdad al comparar estas páginas? Prefiero leer documentación aburrida que confiar en un banner llamativo, pero no sé qué más debe ir en la lista.',
    ],
    comments: [
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Historial de actualizaciones, reembolsos, duración de la suscripción, SO y versión del juego admitidos y una vía de soporte real. Comparad [detalles completos de funciones y compatibilidad](/cheats/) antes de fiaros de una insignia. También miraría si explican limitaciones y no solo ventajas.',
      },
      {
        author: 'tabbedOut',
        age: '',
        score: 0,
        body: '¿Tratáis una invitación de Discord como soporte? Algunas páginas no tienen casi nada más.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'No por sí sola. Un enlace de chat dice dónde puede haber chat, no cuánto tardan en responder ni qué incluye el soporte.',
      },
      {
        author: 'oneMoreRound',
        age: '',
        score: 0,
        body: 'El precio también importa, pero comparad la misma duración. Un mes barato no es lo mismo que un precio de por vida. Leed qué significa "lifetime" en las [FAQ](/faq/).',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Importante: ningún vendedor puede garantizar honestamente cero riesgo solo escribiendo "undetected". El sistema de cumplimiento puede cambiar y el texto de marketing no es verificación independiente.',
      },
    ],
  }),
  post({
    slug: 'before-buying-modern-warfare-4-tool',
    category: 'Product Questions',
    title: 'Antes de comprar una herramienta para Modern Warfare 4, ¿qué debo comprobar primero?',
    excerpt:
      'Una lista práctica previa a la compra para revisar alcance y condiciones antes de gastar en una herramienta de juego de terceros.',
    author: 'heldForReview',
    age: '',
    published: '2026-10-06',
    commentsCount: 5,
    upvotes: 36,
    body: [
      '¿Cuál es vuestra lista imprescindible antes de comprar una herramienta de terceros para MW4? No necesito un discurso de ventas, solo lo que evita comprar algo incompatible con vuestro equipo o descubrir condiciones distintas a las que suponíais.',
    ],
    comments: [
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Plataforma primero. Soporte en PC y consola no es intercambiable, y "Call of Duty compatible" es demasiado vago. Buscad título y versión exactos.',
      },
      {
        author: 'heldForReview',
        age: '',
        score: 0,
        body: 'Sí, la página que miro no aclara bien los detalles de versión.',
      },
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Entonces preguntad al [soporte](/support/) antes de comprar. Si la respuesta es vaga, también es una respuesta.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'Comprobad también si se renueva solo, cuánto dura la licencia, qué pasa si el producto no está disponible temporalmente y cómo contactar soporte. Cosas aburridas, pero cuestan dinero.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Añadiría el riesgo para la cuenta. Ni una página detallada del vendedor garantiza evitar sanciones. Revisad las reglas oficiales del juego y decidid si aceptáis ese riesgo antes de instalar nada.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-tool-not-launching',
    category: 'Setup & Support',
    title: 'Una utilidad de terceros para MW4 no arranca. ¿Qué revisar sin desactivar la seguridad de Windows?',
    excerpt:
      'Empezad por versión y documentación, luego recopilad detalles del error. Evitad "arreglos" arriesgados que desactiven seguridad o alteren protecciones anti-trampas.',
    author: 'rebootEnjoyer',
    age: '',
    published: '2026-07-31',
    commentsCount: 5,
    upvotes: 22,
    body: [
      'Pregunta general de soporte: una utilidad de terceros para MW4 no se abre y casi no da error útil. ¿Cuál es el orden sensato de comprobaciones? No busco un atajo que implique apagar Defender o tocar servicios anti-trampas. Suena a forma rápida de empeorar un problema normal.',
    ],
    comments: [
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Anotad el error exacto y revisad los requisitos documentados de SO y versión del juego. "No funciona" es difícil de diagnosticar; el mensaje real importa.',
      },
      {
        author: 'rebootEnjoyer',
        age: '',
        score: 0,
        body: 'Básicamente se cierra al iniciarlo. Sin mensaje.',
      },
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Entonces revisad las instrucciones oficiales del producto y el [listado de estado](/cheats/), y confirmad que el instalador viene de la fuente legítima. No descarguéis DLL al azar o "loaders arreglados" de un hosting.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'También podéis mirar el Visor de eventos de Windows si os va bien, y anotar la hora del cierre. Eso puede dar un error para soporte. No subáis registros personales en público sin revisarlos.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Si exige desactivar funciones de seguridad o alterar la protección del juego, yo pararía ahí. Como mínimo es un riesgo de seguridad, y no es algo que recomendaría a otro jugador a ciegas.',
      },
    ],
  }),
  post({
    slug: 'mw4-october-25-update-tool-compatibility',
    category: 'Game Updates',
    title: '¿El parche del 25 de octubre de MW4 cambió algo sobre compatibilidad de herramientas de terceros?',
    excerpt:
      'Las notas del parche del 25 de octubre describen correcciones del juego, pero no establecen si alguna herramienta de terceros es compatible o pasa desapercibida.',
    author: 'PatchGoblin',
    age: '',
    published: '2026-10-27',
    commentsCount: 5,
    upvotes: 39,
    body: [
      'Vi las [notas del parche de lanzamiento del 25 de octubre](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes) y ahora varias páginas ponen etiquetas vagas de "actualizado". ¿La nota oficial dice algo sobre soporte de herramientas de terceros, o la gente solo une puntos porque coinciden las fechas?',
    ],
    comments: [
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'Las notas oficiales listan correcciones y ajustes del juego. Eso no equivale a decir que una herramienta externa funciona. No inferiría compatibilidad solo por la fecha del parche.',
      },
      {
        author: 'PatchGoblin',
        age: '',
        score: 0,
        body: 'Eso pensaba yo. "Actualizado hoy" puede significar que cambiaron una página web.',
      },
      {
        author: 'smallPrintEnjoyer',
        age: '',
        score: 0,
        body: 'Exacto. Buscad un número de versión concreto y una explicación clara de qué se probó. Si no están, el estado sigue sin confirmar para quien lee.',
      },
      {
        author: 'pingSpikes',
        age: '',
        score: 0,
        body: 'Y leed las notas oficiales por los cambios reales del juego. La página de [estado reciente del producto](/cheats/) de un vendedor es otra fuente con otro incentivo.',
      },
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'Incluso una prueba de compatibilidad declarada no prueba que no haya riesgo para la cuenta. Son cosas distintas.',
      },
    ],
  }),
  post({
    slug: 'mw4-skin-changer-cosmetic-visibility',
    category: 'Features & Customization',
    title: '¿Los skin changers hacen visibles los cosméticos para todos o solo en tu pantalla?',
    excerpt:
      'Un debate sobre cosméticos centrado en la visualización local frente a lo que ven otros jugadores, recordando no asumir soporte para un juego que la página del producto no liste explícitamente.',
    author: 'camoCollector',
    age: '',
    published: '2026-09-08',
    commentsCount: 5,
    upvotes: 26,
    body: [
      'Pregunta general sobre skin changers: si un cosmético aparece en tu pantalla, ¿significa que el resto de la partida también lo ve? ¿O puede ser solo del cliente? No asumo que todas las herramientas funcionen igual; intento entender qué debería explicar un listado antes de que alguien compre.',
    ],
    comments: [
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'Depende del juego y de la implementación. Un cambio visual local no prueba que el servidor u otros jugadores vean lo mismo.',
      },
      {
        author: 'camoCollector',
        age: '',
        score: 0,
        body: 'Así que una captura no lo resuelve, básicamente.',
      },
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'Correcto. Muestra lo que había en esa pantalla en ese momento. No establece automáticamente visibilidad multijugador ni qué títulos están admitidos.',
      },
      {
        author: 'patchNotesDad',
        age: '',
        score: 0,
        body: 'Buscaría el juego exacto en la página de [detalles del skin changer](/skin-changer/) y una explicación clara de limitaciones. Si solo dice "todos los juegos" sin lista real, preguntad a soporte antes de gastar.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Y manipular cosméticos en juegos online puede infringir las reglas del juego. "Solo skins" no es una exención universal.',
      },
    ],
  }),
  post({
    slug: 'skin-changer-hvci-core-isolation-tpm-secure-boot',
    category: 'Setup & Support',
    title: 'HVCI, Core Isolation, TPM y Secure Boot aparecen como requisitos. ¿Debo cambiarlos?',
    excerpt:
      'Si un producto lista requisitos de seguridad de Windows, verificadlos en su documentación oficial y no desactivéis protecciones solo para forzar compatibilidad.',
    author: 'settingsMenuMaze',
    age: '',
    published: '2026-08-27',
    commentsCount: 5,
    upvotes: 24,
    body: [
      'La página del [skin changer](/skin-changer/) lista HVCI, Core Isolation, TPM y Secure Boot. Sé que van de Windows y seguridad, pero no quiero tocar BIOS o ajustes de seguridad a ciegas porque lo diga una herramienta. ¿Lo correcto es verificar requisitos y preguntar a soporte si mi PC no los cumple?',
    ],
    comments: [
      {
        author: 'biosIsNotAPlayground',
        age: '',
        score: 0,
        body: 'Sí. Verificad el requisito exacto en la documentación oficial primero. No cambiéis firmware a menos que entendáis qué modificáis y tengáis motivo.',
      },
      {
        author: 'settingsMenuMaze',
        age: '',
        score: 0,
        body: 'Eso era lo que necesitaba oír. Las instrucciones en internet van en todas direcciones.',
      },
      {
        author: 'supportTicket42',
        age: '',
        score: 0,
        body: 'Los requisitos listados son una declaración de compatibilidad, no un motivo para apagar la seguridad. Si la herramienta choca con protecciones ya activas, preguntad al proveedor qué admite en lugar de seguir un post aleatorio del foro.',
      },
      {
        author: 'windowedMode',
        age: '',
        score: 0,
        body: 'También conviene separar "mi PC cumple el requisito" de "el producto admite este juego". Son dos comprobaciones distintas.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Y si la única solución sugerida es desactivar una función de seguridad, no lo trataría como un paso rutinario de configuración.',
      },
    ],
  }),
  post({
    slug: 'hwid-spoofer-what-it-changes',
    category: 'Account & PC Questions',
    title: '¿Qué cambia realmente un HWID spoofer y elimina un baneo de cuenta?',
    excerpt:
      'Un HWID spoofer suele describirse como cambio de identificadores del dispositivo, pero no debe confundirse con revertir una sanción a nivel de cuenta ni con garantizar acceso de nuevo.',
    author: 'hardwareCurious',
    age: '',
    published: '2026-10-12',
    commentsCount: 5,
    upvotes: 31,
    body: [
      '¿Alguien puede explicar el spoofing de HWID en lenguaje normal? Veo listados que hablan de cambiar identificadores de hardware y "recuperación de baneo", pero suena a mezclar restricción de dispositivo con baneo de cuenta. ¿Son lo mismo?',
    ],
    comments: [
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'No, no son automáticamente lo mismo. HWID suele referirse a identificadores de hardware o dispositivo. Una sanción de cuenta es una acción de cumplimiento aparte, y cambiar un identificador no revierte por sí solo la decisión sobre la cuenta.',
      },
      {
        author: 'hardwareCurious',
        age: '',
        score: 0,
        body: 'Entonces "te desbanea" es una afirmación demasiado amplia salvo que especifiquen qué tipo de restricción quieren decir?',
      },
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'Lo trataría como una afirmación a verificar, y empezaría por canales oficiales de apelación o soporte para una sanción real de cuenta. No asumáis que una herramienta de dispositivo deshace una acción sobre la cuenta.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Comprobad también qué juegos y sistemas anti-trampas admite explícitamente la página del [HWID Spoofer](/hwid-spoofer/). Una lista de otros títulos no prueba soporte para MW4.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Intentar eludir el cumplimiento del juego puede traer más problemas. Las vías oficiales de apelación son la opción sensata si creéis que la sanción es un error.',
      },
    ],
  }),
  post({
    slug: 'ugc-tool-account-recovery-or-mw4-cheat',
    category: 'Product Questions',
    title: '¿Qué es "UGC" en esta página de producto: herramienta de juego para MW4 o espacio de apelación de cuenta?',
    excerpt:
      'Cuando un listado describe flujos de recuperación de cuenta y funciones de juego, pedid un alcance claro en lugar de asumir un producto compatible con MW4.',
    author: 'whatEvenIsUGC',
    age: '',
    published: '2026-07-29',
    commentsCount: 5,
    upvotes: 19,
    body: [
      'Me confunde el término UGC en un listado. La descripción habla de recuperación de cuenta y apelaciones, pero la misma página usa lenguaje de herramienta de juego. ¿Está pensado como truco de Modern Warfare 4 o es otra cosa? No quiero adivinar por el nombre del producto.',
    ],
    comments: [
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'Preguntaría al proveedor una lista clara de qué hace el producto y qué juegos admite. La descripción de recuperación de cuenta de la página [UGC](/ugc/) por sí sola no establece compatibilidad con MW4.',
      },
      {
        author: 'whatEvenIsUGC',
        age: '',
        score: 0,
        body: 'Sí, esa parte me descolocó. El nombre no explica el caso de uso.',
      },
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'Entonces no lo tratéis como herramienta de juego para MW4 hasta que la página o soporte lo confirmen directamente. Requisitos y compatibilidad son campos distintos.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'Una página clara debería decir su propósito en una frase, luego listar funciones, productos admitidos, requisitos y limitaciones. Si hay que descifrarla, la página necesita trabajo.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'Para una restricción real de cuenta, usad el proceso oficial de apelación del juego. Las herramientas de automatización no garantizan que una apelación tenga éxito.',
      },
    ],
  }),
  post({
    slug: 'mw4-aim-assist-vs-aimbot',
    category: 'Gameplay Questions',
    title: 'Asistencia de puntería frente a aimbot en MW4: ¿por qué se usan como sinónimos?',
    excerpt:
      'La asistencia de puntería es una función de entrada diseñada por el juego; un aimbot es una categoría de herramienta de terceros que automatiza la puntería. Los términos no son intercambiables.',
    author: 'stickDriftEnjoyer',
    age: '',
    published: '2026-09-29',
    commentsCount: 5,
    upvotes: 30,
    body: [
      '¿Podemos dejar de llamar aimbot a todo clip bueno con mando? Sé lo que significan las palabras en teoría, pero se usan cada vez que alguien gana un duelo. ¿Cuál es la distinción clara y por dónde debería empezar un jugador normal si solo quiere que su puntería se sienta menos mala?',
    ],
    comments: [
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'La asistencia de puntería viene integrada en el juego para que la entrada con mando sea más consistente. Un aimbot es una herramienta de terceros que apunta por el jugador. No son lo mismo.',
      },
      {
        author: 'stickDriftEnjoyer',
        age: '',
        score: 0,
        body: 'Gracias. A veces veo un clip y los comentarios ya montan un juicio.',
      },
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'Para ajustar con normalidad, usad los ajustes del juego, campo de prácticas si hay, y un cambio cada vez. No copiéis una lista aleatoria de "mejores ajustes" sin probarla en vuestro equipo.',
      },
      {
        author: 'keyboardEnjoyer',
        age: '',
        score: 0,
        body: 'Y una killcam no es prueba perfecta por sí sola. Puede verse raro por latencia, perspectiva o porque el clip empieza a mitad del combate.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Si comparáis vuestra puntería con una [herramienta de terceros](/blog/are-modern-warfare-4-cheats-safe/), recordad que la automatización puede infringir las reglas. No hace falta una para empezar con sensibilidad y práctica de retroceso.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-cheat-ban-risk',
    category: 'Account & PC Questions',
    title: '¿Pueden los trucos de terceros para MW4 marcar una cuenta aunque el vendedor diga "safe"?',
    excerpt:
      'Ningún banner de un vendedor de terceros puede garantizar que una cuenta nunca será marcada. Revisad las reglas oficiales y entended el riesgo antes de instalar nada.',
    author: 'lastMatchMaybe',
    age: '',
    published: '2026-10-24',
    commentsCount: 5,
    upvotes: 44,
    body: [
      'Pregunta directa: si un vendedor llama "safe" o "undetected" a una herramienta para MW4, ¿cuánta confianza debería dar eso? Veo redacción absoluta, pero los anti-trampas se actualizan y los términos pueden ser vagos. No pido un bypass; intento entender el riesgo antes de decidir mal.',
    ],
    comments: [
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'Le daría muy poco peso al banner. Es una afirmación del vendedor, no una garantía del editor del juego ni prueba de que vuestra cuenta no pueda ser sancionada después.',
      },
      {
        author: 'lastMatchMaybe',
        age: '',
        score: 0,
        body: 'Eso pensaba. "Sin reportes aún" y "no puede detectarse" no son la misma frase.',
      },
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'Exacto. Incluso un producto que arranca con normalidad puede infringir las reglas. Revisad la política oficial y las [limitaciones indicadas en la página del producto](/cheats/), y asumid riesgo en lugar de tratar una etiqueta de marketing como seguro.',
      },
      {
        author: 'saltyLobby',
        age: '',
        score: 0,
        body: 'Si una página garantiza literalmente cero baneos para siempre, cierro la pestaña. Nada en línea funciona así.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'Si os preocupa una sanción existente, usad soporte o apelaciones oficiales. Evitad herramientas o vendedores que prometen borrar todo tipo de baneo.',
      },
    ],
  }),
  post({
    slug: 'monthly-vs-lifetime-cheat-license',
    category: 'Product Questions',
    title: 'Licencias mensuales frente a de por vida: ¿qué comparar antes de elegir?',
    excerpt:
      'Comparad condiciones de licencia y qué pasa si cambia el soporte o la compatibilidad; no asumáis que "lifetime" significa garantizado para siempre en todas las condiciones.',
    author: 'invoicePending',
    age: '',
    published: '2026-08-03',
    commentsCount: 5,
    upvotes: 27,
    body: [
      'Cuando una herramienta ofrece acceso mensual y de por vida, ¿cómo decidís qué tiene sentido? Sé que depende de cada uno, pero sobre todo me interesa la letra pequeña que revisáis. "Lifetime" suena simple hasta que preguntáis de quién es la vida y qué pasa tras una actualización.',
    ],
    comments: [
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Comparad el plazo real primero. Mensual debería decir cuándo renueva o expira. Lifetime debería explicar qué cubre y si incluye soporte o actualizaciones.',
      },
      {
        author: 'invoicePending',
        age: '',
        score: 0,
        body: '¿Pagaríais lifetime por adelantado por un producto que salió hace poco?',
      },
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Personalmente iría con cautela. Una licencia más larga no quita incertidumbre de compatibilidad ni riesgo de cuenta. Tampoco digo que mensual sea automáticamente mejor; importan más las condiciones que la etiqueta.',
      },
      {
        author: 'spreadsheetWarrior',
        age: '',
        score: 0,
        body: 'Calculad el punto de equilibrio y preguntáos si seguiríais eligiéndolo si las actualizaciones se pausan o vuestro equipo deja de estar admitido. Si la respuesta es no, al menos tenedlo en cuenta.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'Y guardad copia de las condiciones bajo las que comprasteis. Es más fácil resolver confusiones de facturación con el texto exacto.',
      },
    ],
  }),
  post({
    slug: 'mw4-overlay-stutter-troubleshooting',
    category: 'PC Performance & Support',
    title: 'MW4 tartamudea tras instalar una superposición. ¿Cómo acotar la causa?',
    excerpt:
      'Aislad el problema con método: anotad ajustes, probad un cambio cada vez, revisad actualizaciones del juego y drivers, y quitad superposiciones no fiables si persiste.',
    author: 'frametimeFan',
    age: '',
    published: '2026-10-18',
    commentsCount: 5,
    upvotes: 29,
    body: [
      'El ritmo de fotogramas empeoró claramente tras añadir una superposición a mi PC. Aún no culpo a MW4 porque cambié varias cosas a la vez. ¿Cuál es la forma ordenada de aislarlo en lugar de tocar ajustes gráficos al azar y olvidar qué hice?',
    ],
    comments: [
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'Anotad los ajustes actuales primero. Luego probad con la superposición quitada o desactivada con su desinstalación o salida normal, reiniciad el juego y comparad el mismo mapa o carga. Cambiad una variable cada vez.',
      },
      {
        author: 'frametimeFan',
        age: '',
        score: 0,
        body: 'Cambié tres cosas a la vez, así que es culpa mía.',
      },
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'A todos nos pasa. Revisad también la [ayuda de rendimiento de Modern Warfare 4](https://support.activision.com/uk/en/modern-warfare-4) y la versión del driver de la GPU. Mirad el frametime, no solo el FPS medio.',
      },
      {
        author: 'safeModePlease',
        age: '',
        score: 0,
        body: 'Si la superposición vino de una descarga desconocida o pide drivers raros, quitadla y escanead el sistema. Unos fotogramas no valen confiar en un ejecutable misterioso.',
      },
      {
        author: 'queueGoblin',
        age: '',
        score: 0,
        body: 'Aseguraos también de no comparar una zona de entrenamiento tranquila con una partida multijugador caótica. Mismas condiciones de prueba; si no, los números son básicamente sensaciones.',
      },
    ],
  }),
];
