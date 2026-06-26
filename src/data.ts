import { Product, ValueItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'capitae',
    name: 'Capitae',
    tagline: 'Gestão financeira inteligente, clareza absoluta.',
    description: 'Consolide múltiplas contas bancárias, acompanhe fluxos de caixa em tempo real e projete seu runway com precisão. Desenvolvido para automatizar fluxos de tesouraria de equipes em crescimento.',
    features: [
      'Integrações multibancárias pré-automatizadas',
      'Modelagem de runway e simulação de cenários',
      'Fluxos de caixa interativos em tempo real'
    ],
    iconName: 'TrendingUp',
    meta: 'Gestão Financeira',
    linkText: 'Conhecer o Capitae',
    linkUrl: 'https://capitae.vercel.app'
  },
  {
    id: 'capitae-business',
    name: 'Capitae Business',
    tagline: 'Escalone operações corporativas com inteligência automatizada.',
    description: 'A suíte operacional completa para empresas que gerenciam estoque e transações de alto volume. Conecte sua cadeia de suprimentos, avalie o CMV dinamicamente e elimine erros de planilhas.',
    features: [
      'Sincronização de estoques multi-galpão',
      'Análise detalhada de unit economics em tempo real',
      'Faturamento e notificações automatizadas de fornecedores'
    ],
    iconName: 'Layers',
    meta: 'Suíte Corporativa',
    linkText: 'Acessar o Capitae Business',
    linkUrl: 'https://capitae-business.vercel.app'
  }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Simplicidade em Primeiro Lugar',
    description: 'Eliminamos a complexidade de sistemas complexos. Sem menus confusos ou termos técnicos exagerados — apenas fluxos limpos e diretos para o que importa.',
    iconName: 'Maximize2'
  },
  {
    title: 'Tecnologia Altamente Confiável',
    description: 'Desenvolvido com arquitetura moderna e resistente. Garantimos tempos de resposta instantâneos, excelente estabilidade e operação otimizada.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Construído para o Mundo Real',
    description: 'Bons softwares vencem no dia a dia operacional, não em apresentações de slides. Cada detalhe é lapidado de perto com feedbacks práticos.',
    iconName: 'Cpu'
  },
  {
    title: 'Evolução Sem Atrito',
    description: 'Não paramos de melhorar nossos sistemas. Lançamos atualizações úteis e incrementais semanalmente, sem quebrar os fluxos de trabalho que você já domina.',
    iconName: 'Sparkles'
  }
];
