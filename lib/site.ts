/**
 * Config central da página da Comunidade Editify.
 * Conteúdo baseado no brief da comunidade.
 */

export const DISCORD_URL = "https://discord.gg/8cJNpdr2nQ";

/** Recados de boas-vindas (cultura caseira) */
export const WELCOME_LINES = [
  "A casa é sua. Bem-vindo, irmão.",
  "Tira o casaco, senta junto. Você é bem-vindo.",
  "O fogo tá aceso, a mesa posta. Bem-vindo.",
  "O seu lugar tava reservado.",
  "Aqui tem sempre um prato a mais.",
];

/** O que tem dentro (estilo Discord, bento) */
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

/** Liga (faturamento mensal) */
export const LIGAS = [
  { name: "Iniciante", value: "R$ 1+", desc: "Primeiro cliente já veio" },
  { name: "Júnior", value: "R$ 1.000+", desc: "Base sólida" },
  { name: "Pleno", value: "R$ 2.500+", desc: "Profissional estabelecido" },
  { name: "Sênior", value: "R$ 7.500+", desc: "Referência no ofício" },
  { name: "Elite", value: "R$ 15.000+", desc: "Top 1% da casa", crown: true },
] as const;

/** Tiers (estrelas no Editfólio, visíveis pro cliente) */
export const TIERS = [
  { stars: 1, color: "gold", label: "Editor Real", how: "Membro pagante da comunidade" },
  { stars: 2, color: "gold", label: "Verificado", how: "Liga Pleno+ ou 2.000 XP" },
  { stars: 3, color: "gold", label: "Reputação alta", how: "22.000 XP conquistados" },
  { stars: 3, color: "blue", label: "Indicação Erick", how: "Aprovação pessoal do @erickjulrich" },
] as const;

/** As 3 frentes do ecossistema (visão do membro) */
export const ECOSYSTEM = [
  {
    tag: "Discord",
    title: "A Comunidade",
    text: "Onde os editores vivem o dia a dia. Estúdios de voz, murais de conquista, crítica, eventos ao vivo. A casa.",
  },
  {
    tag: "folio.editify.com.br",
    title: "O Editfólio",
    text: "Seu portfólio profissional sem código, sem domínio, sem dor de cabeça. Pronto em 5 minutos e com suas estrelas em tempo real.",
  },
  {
    tag: "contratar.editify.com.br",
    title: "O Contratar",
    text: "Marketplace onde o cliente te acha e chama no seu WhatsApp. 0% de comissão: o preço que você cobra é o que você recebe.",
  },
] as const;

/** Diferenciais por contraste */
export const NOT_US = [
  { not: "Não somos curso", yes: "A gente é depois do curso. Você já sabe editar, aqui aprende a ser pago como gente." },
  { not: "Não somos agência", yes: "Não tomamos comissão. O cliente paga você direto no PIX." },
  { not: "Não somos grupo de WhatsApp", yes: "Tem estrutura, progresso medido, ranking e ferramentas reais." },
] as const;

/** Avatares reais de editores pro marquee */
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
