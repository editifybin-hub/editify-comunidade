/**
 * Config central da página da Comunidade Editify.
 * Conteúdo baseado no brief da comunidade.
 */

export const DISCORD_URL = "https://discord.gg/8cJNpdr2nQ";

export const EDITOR_COUNT = 1000;

/** Recados de boas-vindas (cultura caseira) */
export const WELCOME_LINES = [
  "A casa é sua. Bem-vindo, irmão.",
  "Tira o casaco, senta junto. Você é bem-vindo.",
  "O fogo tá aceso, a mesa posta. Bem-vindo.",
  "O seu lugar tava reservado.",
  "Aqui tem sempre um prato a mais.",
];

/** O que tem dentro (grupo de editores) */
export const FEATURES = [
  {
    icon: "mic",
    title: "Estúdio em voz",
    text: "Senta em call com outros editores e trabalha junto. A produtividade dobra e você ganha XP por presença ativa.",
  },
  {
    icon: "trophy",
    title: "Mural de conquistas",
    text: "Cada cliente fechado vira post público com print do pagamento. Reputação se constrói na frente de todo mundo.",
  },
  {
    icon: "scissors",
    title: "Crítica de vídeo",
    text: "Sobe seu corte, recebe crítica de verdade de quem entende. Critica os outros e ganha XP por isso.",
  },
  {
    icon: "bot",
    title: "IA pra cliente difícil",
    text: "Cliente mandou aquela mensagem chata? Cola aqui. A IA treinada no tom do Erick devolve a resposta pronta.",
  },
  {
    icon: "video",
    title: "Aula ao vivo semanal",
    text: "Toda semana o Erick dá aula em call. Não é gravação, é cara a cara, com pergunta e resposta na hora.",
  },
  {
    icon: "flame",
    title: "Streak diário",
    text: "Um ato substantivo por dia mantém seu streak. Quem chega a 100 dias é outra pessoa no fim do ano.",
  },
] as const;

/**
 * Liga (faturamento mensal). Cores atribuídas como ramp de prestígio
 * (o brief não trazia cores; ajuste se tiver as oficiais).
 */
export const LIGAS = [
  {
    name: "Iniciante",
    range: "R$ 1 a R$ 999",
    desc: "Primeiro cliente já veio",
    color: "#8b94a3",
  },
  {
    name: "Júnior",
    range: "R$ 1.000 a R$ 2.499",
    desc: "Base sólida",
    color: "#22c55e",
  },
  {
    name: "Pleno",
    range: "R$ 2.500 a R$ 7.499",
    desc: "Profissional estabelecido",
    color: "#3b82f6",
  },
  {
    name: "Sênior",
    range: "R$ 7.500 a R$ 14.999",
    desc: "Referência no ofício",
    color: "#f5a200",
  },
  {
    name: "Elite",
    range: "R$ 15.000+",
    desc: "Top 1% da casa",
    color: "#e30613",
    crown: true,
  },
] as const;

/** Como ganha XP (fontes principais) */
export const XP_SOURCES = [
  { icon: "mic", label: "Estúdio em voz", value: "2 XP / min" },
  { icon: "trophy", label: "Conquista registrada", value: "100+ XP" },
  { icon: "scissors", label: "Crítica dada", value: "15 XP" },
  { icon: "flame", label: "Treino diário", value: "30 XP" },
  { icon: "video", label: "Evento ao vivo", value: "100 XP" },
  { icon: "folder", label: "Editfólio publicado", value: "1.000 XP" },
] as const;

/** Loja de recompensas (XP vira coisa real) */
export const REWARDS = [
  { label: "Editfólio 2 Estrelas", xp: "2.000 XP", desc: "Prioridade nas buscas e tag de Match." },
  { label: "Editfólio 3 Estrelas", xp: "7.000 XP", desc: "Visibilidade máxima, badge Super match." },
  { label: "Indicação Erick (3★ azul)", xp: "20.000 XP", desc: "Tier máximo, aprovação pessoal do Erick." },
  { label: "Mentoria com Erick (1h)", xp: "22.222 XP", desc: "Chamada de 1h. Normalmente custa R$ 500." },
  { label: "Mentoria presencial (1 dia)", xp: "2.222 XP", desc: "Dia inteiro com o Erick. Gate de Liga Elite." },
  { label: "Pacote de IA", xp: "a partir de 1.800 XP", desc: "Créditos extras pra responder cliente." },
] as const;

/** Tiers (estrelas no Editfólio, visíveis pro cliente) */
export const TIERS = [
  { stars: 1, color: "gold", label: "Editor Real", how: "Membro pagante da comunidade" },
  { stars: 2, color: "gold", label: "Verificado", how: "Liga Pleno+ ou 2.000 XP" },
  { stars: 3, color: "gold", label: "Reputação alta", how: "22.000 XP conquistados" },
  { stars: 3, color: "blue", label: "Indicação Erick", how: "Aprovação pessoal do @erickjulrich" },
] as const;

/** Avatares reais de editores pro counter / marquee */
export const AVATARS = [
  "_g.o.s.webp", "acerola7435.webp", "alexandre051473.webp", "alvesdrj.webp",
  "andersonbarbozaa.webp", "arth.editor.webp", "beza1.webp", "brumviews.webp",
  "cauaiuri.webp", "danieldaveiga.webp", "edupaz5957.webp", "enrikproducer.webp",
  "erickjulrich.webp", "felipeoliveira.editor.webp", "frame_scharlau.webp",
  "gabicas.webp", "guiiferreiras.webp", "igorlidar.webp", "jcut_editor.webp",
  "jeffersonslima.webp", "julioopadua.webp", "kayque_editor.webp",
  "leodamiao.webp", "lucasseifert.webp", "luccagarcez.webp", "luissky777.webp",
  "neexxzz.webp", "oeditorofficial.webp", "raul_oeditor.webp", "samueltessaro_.webp",
  "vitorhugo022.webp", "well.visuals.webp", "wesley_editor.webp", "wiuneves.webp",
].map((f) => `/avatars2/${f}`);
