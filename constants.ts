import type { Vantagem, Desvantagem, Raca, Classe, NivelInfo } from './types';

export const FICHA_MATRIZ_ID = "ficha-matriz";
export const RGP_FICHAS_KEY = 'rpgFichasMobile';
export const RPG_CURRENT_FICHA_ID_KEY = 'rpgCurrentFichaIdMobile';

export const vantagensData: Vantagem[] = [
    { nome: "Maestria com Armas curtas (2)", custo: 2, descricao: "+1 em ataque, +1 em acerto com armas curtas." },
    { nome: "Maestria com armas pesadas (2)", custo: 2, descricao: "+2 em ataque com armas pesadas." },
    { nome: "Maestria com armas de longo alcance (2)", custo: 2, descricao: "+2 em acerto com armas de longo alcance." },
    { nome: "Furtar (2)", custo: 2, descricao: "+4 em testes de furto." },
    { nome: "Lábia (2)", custo: 2, descricao: "+5 em testes de lábia." },
    { nome: "Velejar (1)", custo: 1, descricao: "" },
    { nome: "Beleza (1)", custo: 1, descricao: "+3 o teste em lábia, paquera e persuasão." },
    { nome: "Boa Fama (2)", custo: 2, descricao: "+4 chance de descontos em armamentos, pousadas, alimentos, etc." },
    { nome: "Arremedo (2)", custo: 2, descricao: "Capacidade de imitar qualquer som SIMPLES." },
    { nome: "Destemor (1)", custo: 1, descricao: "Dificilmente é assustado por algo." },
    { nome: "Empatia (3)", custo: 3, descricao: "Sensibilidade extraordinária em relação aos outras pessoas." },
    { nome: "Empatia com animais (1)", custo: 1, descricao: "Pode compreender as motivações dos animais." },
    { nome: "Patrono (4)", custo: 4, descricao: "Possui um mentor/mestre/organização que pode lhe oferecer ajuda." },
    { nome: "Reconhecimento Social (2)", custo: 2, descricao: "Membro de um grupo respeitado. +2 teste em lábia, paquera e persuasão." },
    { nome: "Riqueza (2)", custo: 2, descricao: "Inicia com 20 moedas de ouro." },
    { nome: "Aptidão para magia (4)", custo: 4, descricao: "+15% dano e -15% custo de magia para a magia que tem aptidão." },
    { nome: "Combo Físico (4)", custo: 4, descricao: "Inicia com 50km/h velocidade, pulo de 3m altura e 9m distância.", restricao: "inicio" },
    { nome: "Nadar (1)", custo: 1, descricao: "" },
    { nome: "Escalar (2)", custo: 2, descricao: "" },
    { nome: "Segunda língua (1)", custo: 1, descricao: "Fala mais um idioma." },
    { nome: "Paquerador (2)", custo: 2, descricao: "+4 em teste para paquera e persuasão envolvendo flerte." },
    { nome: "Senso de perigo (5)", custo: 5, descricao: "Quando algo grave ocorrer o mestre pedirá pra você jogar um dado para reagir." },
    { nome: "Acrobata (3)", custo: 3, descricao: "+ fama ao lutar em público." },
    { nome: "Equilíbrio Perfeito (3)", custo: 3, descricao: "+8 em testes de equilíbrio." },
    { nome: "Tecnologia (2)", custo: 2, descricao: "Engenhoso, pode inventar coisas, criar objetos improvisados." },
    { nome: "Poder Oculto (7)", custo: 7, descricao: "Com 10% vida, ativa +50% em todos atributos." },
    { nome: "Sobrevivência em floresta (2)", custo: 2, descricao: "Facilidade para achar comida, gravar caminhos, etc." }
];

export const desvantagensData: Desvantagem[] = [
    { nome: "Fobia (+2)", ganho: 2, descricao: "Medo irracional de algo específico." },
    { nome: "Má Fama (+2)", ganho: 2, descricao: "Mal visto pela sociedade, dificultando interações sociais." },
    { nome: "Alcoolismo (+2)", ganho: 2, descricao: "Dependência de álcool que afeta suas decisões." },
    { nome: "Altruísmo (+2)", ganho: 2, descricao: "Se sacrifica por outras pessoas, pouco se importa com fama ou riqueza." },
    { nome: "Avareza (+2)", ganho: 2, descricao: "Preocupação permanente na conservação de riquezas." },
    { nome: "Bullying (+3)", ganho: 3, descricao: "Gosta de caçoar, agredir, difamar e apontar defeitos." },
    { nome: "Circunspeção (+2)", ganho: 2, descricao: "Não entende piadas, entende tudo literal." },
    { nome: "Compulsões (+3)", ganho: 3, descricao: "Hábito ou vício que toma boa parte dos seus recursos e tempo." },
    { nome: "Covardia (+2)", ganho: 2, descricao: "Extremo cuidado com bem-estar físico e dificuldade em assumir riscos." },
    { nome: "Dependentes (+4)", ganho: 4, descricao: "Alguém depende de você a todo momento." },
    { nome: "Fúria (+2)", ganho: 2, descricao: "Tendência a perder o controle e atacar freneticamente." },
    { nome: "Honestidade (+3)", ganho: 3, descricao: "Não consegue mentir ou omitir, sempre fala a verdade." },
    { nome: "Impulsividade (+2)", ganho: 2, descricao: "Sempre age sem pensar." },
    { nome: "Luxúria (+2)", ganho: 2, descricao: "Desejo incontrolável por romance." },
    { nome: "Magnetismo Sobrenatural (+2)", ganho: 2, descricao: "Coisas estranhas acontecem com seu personagem." },
    { nome: "No Limite (+4)", ganho: 4, descricao: "Assume riscos extremamente irracionais diante de perigo mortal." },
    { nome: "Teimosia (+1)", ganho: 1, descricao: "Quer sempre fazer as coisas do seu modo." },
    { nome: "Amnésia (+2)", ganho: 2, descricao: "Em certos momentos, não consegue lembrar de coisas importantes." }
];

export const racasData: Raca[] = [
    { nome: "Humano (3)", custo: 3, descricao: "Versáteis, ambiciosos, mestres em adaptação.", vantagens: ["Explorador Nato: Cavalo superior, equipamentos, mapa.", "Mestre das Profissões: Escolha uma profissão com bônus.", "Rede de Influência: Aliado influente.", "Determinação Inabalável: Ignore uma desvantagem por um curto período."] },
    { nome: "Elfo (4)", custo: 4, descricao: "Sábios, mágicos, conectados à natureza.", vantagens: ["Sabedoria Ancestral: Domina uma área, aprende 1 língua extra.", "Visão Élfica Suprema: Enxerga no escuro, detecta magias fracas.", "Escudo Mágico: Resistência a um tipo de efeito mágico."] },
    { nome: "Anão (4)", custo: 4, descricao: "Resilientes, habilidosos, ligados à terra.", vantagens: ["Fortitude Indomável: Trabalha 3 dias sem descanso, recupera-se 2x mais rápido.", "Artesão: Escolha uma especialidade de criação com bônus.", "Senhor das Profundezas: Nunca se perde no subterrâneo."] },
    { nome: "Orc (3)", custo: 3, descricao: "Guerreiros ferozes, líderes pela força.", vantagens: ["Lenda entre Guerreiros: Inspira temor/respeito.", "Resiliência Brutal: Luta sem penalidades com ferimentos graves.", "Domínio da Intimidação: Força inimigos a render/recuar.", "Fúria Ancestral: Fúria 2x/dia (dobra força/resistência)."] },
    { nome: "Meio Animal (Selvagem) (4)", custo: 4, descricao: "Instinto primal com astúcia.", vantagens: ["Sentidos Predatórios: Escolha um sentido aguçado.", "Senhor dos Terrenos: Adapta-se a 1 ambiente.", "Frenesi Instintivo: 1x/dia, velocidade e ataques extras."] }
];

export const classesData: Classe[] = [
    {
        nome: "Guerreiro",
        custo: 5,
        descricao: "Mestres do combate corporal, os guerreiros confiam em sua força, habilidade com armas e resistência para superar seus inimigos no campo de batalha.",
        habilidades: [
            // Nível 1
            { nome: "Golpe Preciso", nivel: 1, tipo: 'ataque', descricao: "Você se concentra em acertar o ponto mais vulnerável possível do oponente. Cooldown: 2 turnos.", dano: "15 + 1d20 + 1d6", custoMagia: 0, custoVigor: 2, custoPVSemAlma: 3 },
            { nome: "Braços de escudo", nivel: 1, tipo: 'defesa', descricao: "Você levanta a guarda recebendo o golpe nos braços amenizando o dano. Cooldown: 1 turno.", dano: "+12 RDF", custoMagia: 0, custoVigor: 2, custoPVSemAlma: 3 },
            { nome: "Saúde de um Cavalo", nivel: 1, tipo: 'passiva', descricao: "Habilidade passiva que concede +25 de Vida permanentemente.", dano: "+25 Vida Total", efeito: { atributo: 'vidaTotal', valor: 25 }, custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Combo espada e escudo", nivel: 5, tipo: 'ataque', descricao: "Requer espada e escudo. Um corte rápido seguido por uma pancada com o escudo. Cooldown: 2 turnos.", dano: "Espada: 20 + Atq. Físico + 1d20 / Escudo: 5 + Atq. Físico + 1d20", custoMagia: 0, custoVigor: 4, custoPVSemAlma: 5 },
            { nome: "Muralha de escudo", nivel: 5, tipo: 'defesa', descricao: "Requer escudo. Aumenta drasticamente sua defesa por 3 turnos. Efeito Negativo: -15 de ataque por 1 turno após o efeito.", dano: "+20 RDF + RDF do escudo", custoMagia: 0, custoVigor: 3, custoPVSemAlma: 5 },
            { nome: "Folego instantâneo", nivel: 5, tipo: 'passiva', descricao: "Recupera 1d12 de vigor quando seu vigor chega a zero. Usável 1 vez por batalha.", dano: "Recupera 1d12 Vigor", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Golpes Múltiplos", nivel: 10, tipo: 'ataque', descricao: "Ataque 3 vezes no mesmo turno com redutores de acerto (-2 no segundo, -5 no terceiro). Cooldown: 4 turnos.", dano: "3x (Ataque + 1d20)", custoMagia: 0, custoVigor: 9, custoPVSemAlma: 7 },
            { nome: "Pele de pedra", nivel: 10, tipo: 'defesa', descricao: "A adrenalina endurece seus músculos por 3 turnos. Efeito Negativo: +15% de dano sofrido por 2 turnos após o efeito. Casting: 1 turno. Cooldown: 4 turnos.", dano: "+3d20 RDF, +2 RDM", custoMagia: 0, custoVigor: 9, custoPVSemAlma: 7 },
            { nome: "Grito de guerra", nivel: 10, tipo: 'passiva', descricao: "Buffa até dois aliados aleatórios com +10 de ataque, +2 de acerto e +2 de esquiva por 2 turnos. 1 vez por batalha.", dano: "Buff em 2 aliados", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Corte Pulverizador", nivel: 15, tipo: 'ataque', descricao: "Corte de longo alcance que atinge até 3 oponentes e causa sangramento. Efeito Negativo: 1 turno de fadiga sem ação. Cooldown: 4 turnos.", dano: "50 + 3d20 + sangramento (1d12 por 1d6 turnos)", custoMagia: 0, custoVigor: 15, custoPVSemAlma: 9 },
            { nome: "Dança da lâmina", nivel: 15, tipo: 'ataque', descricao: "Um contra-ataque que exige que você receba o golpe do inimigo para ser usado. Cooldown: 4 turnos.", dano: "Ataque + 1d20 (no turno do oponente)", custoMagia: 0, custoVigor: 8, custoPVSemAlma: 9 },
            { nome: "Senso de perigo", nivel: 15, tipo: 'passiva', descricao: "Passivamente sente quando um oponente é significativamente mais forte (5+ níveis acima).", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Conjuração de espadas", nivel: 20, tipo: 'ataque', descricao: "Invoca duas espadas flutuantes que atacam com você por 1d6 turnos. Dano sem dado, 50% do acerto. Casting: 1 turno. Cooldown: 5 turnos.", dano: "3 ataques/turno (50% acerto, dano de Ataque Físico)", custoMagia: 100, custoVigor: 18, custoPVSemAlma: 11 },
            { nome: "Conjurador de escudo", nivel: 20, tipo: 'defesa', descricao: "Conjura um escudo gigante que anula dano bruto por 1 turno para até 4 aliados. Cooldown: 3 turnos.", dano: "Imunidade a dano bruto", custoMagia: 80, custoVigor: 12, custoPVSemAlma: 11 },
            { nome: "Magnetismo magico", nivel: 20, tipo: 'passiva', descricao: "Sua arma pessoal sempre retornará à sua mão se for derrubada (alcance de 1km).", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Conjuração temporária", nivel: 25, tipo: 'ataque', descricao: "Invoca uma espada poderosa por 3 turnos. Custo de 3 de vigor por ataque. Cooldown: 5 turnos.", dano: "+30 Ataque", custoMagia: 50, custoVigor: 3, custoPVSemAlma: 13 },
            { nome: "Quanto mais dor, mais forte", nivel: 25, tipo: 'defesa', descricao: "Por 4 turnos, ganha +10% do dano sofrido como bônus de ataque (acumulativo, reseta ao atacar). Custa vigor por dano recebido e por ataque. Cooldown: 5 turnos.", dano: "Bônus de Ataque por dano sofrido", custoMagia: 0, custoVigor: 1, custoPVSemAlma: 13 },
            { nome: "Visão de batalha", nivel: 25, tipo: 'passiva', descricao: "Uma vez por batalha, pode descobrir os pontos de ataque de um oponente.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Furacão de lâminas", nivel: 30, tipo: 'ataque', descricao: "Ataque em área devastador (30m de diâmetro) que pode atingir aliados. Casting: 2 turnos, Duração: 2 turnos. Cooldown: 1x por batalha. Efeito Negativo: 2 turnos de tontura.", dano: "Ataque Físico + 200 + 4d20", custoMagia: 0, custoVigor: 25, custoPVSemAlma: 15 },
            { nome: "Imunidade a Dano fisico", nivel: 30, tipo: 'defesa', descricao: "Torna-se imune a dano físico por 2 turnos, se dano < 2x vida. Cooldown: 1x por dia. Efeito Negativo: +30% de dano sofrido por 2 turnos após o efeito.", dano: "Imunidade a dano físico", custoMagia: 0, custoVigor: 25, custoPVSemAlma: 15 },
            { nome: "Resistência natural", nivel: 30, tipo: 'passiva', descricao: "Passivamente aumenta sua Redução de Dano Físico em 10 pontos permanentemente.", dano: "+10 RDF", efeito: { atributo: 'rdf', valor: 10 }, custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Mago",
        custo: 5,
        descricao: "Magos são mestres das artes arcanas, canalizando energias místicas para conjurar feitiços poderosos, manipular os elementos e distorcer a realidade.",
        habilidades: [
            // Nível 1
            { nome: "Bola de fogo", nivel: 1, tipo: 'ataque', descricao: "Você conjura uma bola de fogo do tamanho de uma bola de boliche. Causa dano e efeito de queimadura. Cooldown: 2 turnos.", dano: "15 + Ataque Magico + 1d20 + Queimadura (1d6 dano por 1d6 turnos)", custoMagia: 20, custoVigor: 0, custoPVSemAlma: 3 },
            { nome: "Escudo de gelo flutuante", nivel: 1, tipo: 'defesa', descricao: "Conjura um escudo de gelo que bloqueia ataques. Dura 1 turno. Cooldown: 2 turnos. Dano de fogo reduz sua eficácia.", dano: "+20 RDF, +20 RDM", custoMagia: 20, custoVigor: 0, custoPVSemAlma: 3 },
            { nome: "Aptidão Mágica", nivel: 1, tipo: 'passiva', descricao: "Escolha um elemento ou tipo de magia (luz, escuridão). Magias desse tipo causam 15% a mais de dano.", custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Transfiguração", nivel: 5, tipo: 'ataque', descricao: "Transforma o oponente em um animal aleatório (1d20) por 1d4 turnos, alterando seus atributos. Você não pode atacar enquanto mantém a magia. Casting: 1 turno. Cooldown: 4 turnos.", custoMagia: 45, custoVigor: 0, custoPVSemAlma: 5 },
            { nome: "Cura revigorante", nivel: 5, tipo: 'defesa', descricao: "Cura uma porcentagem da sua vida total (1d12 define: 1-4: 10%, 5-8: 20%, 9-12: 30%). Casting: 1 turno. Cooldown: 3 turnos.", dano: "Cura 10-30% Vida Total", custoMagia: 40, custoVigor: 0, custoPVSemAlma: 5 },
            { nome: "Rastreio Mágico", nivel: 5, tipo: 'passiva', descricao: "Pode identificar áreas afetadas por magia e o tipo de magia (até 2 dias atrás).", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Conjurador", nivel: 10, tipo: 'ataque', descricao: "Invoca um ser elemental por 3 turnos. Dano: 70% do seu Ataque Magico + 1d20. Causa efeito elemental. Sua regeneração de magia é bloqueada. Casting: 2 turnos. Cooldown: 5 turnos.", dano: "70% Atq. Mágico + 1d20 + Efeito Elemental", custoMagia: 150, custoVigor: 0, custoPVSemAlma: 7 },
            { nome: "Areia movediça", nivel: 10, tipo: 'defesa', descricao: "Prende inimigos em uma área por 1 turno, impedindo movimento e ataque. Pode afetar aliados. Cooldown: 3 turnos.", custoMagia: 120, custoVigor: 0, custoPVSemAlma: 7 },
            { nome: "Portal", nivel: 10, tipo: 'passiva', descricao: "Fora de combate, pode criar um portal para um local previamente marcado com símbolos raros. 1x por sessão.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Chuva de raios", nivel: 15, tipo: 'ataque', descricao: "Causa uma chuva de raios aleatória no campo por 2 turnos, podendo atingir todos. Você deve canalizar a magia. Cooldown: 4 turnos.", dano: "Ataque Magico + 50 por raio", custoMagia: 150, custoVigor: 0, custoPVSemAlma: 9 },
            { nome: "Anulação de ataque magico", nivel: 15, tipo: 'defesa', descricao: "Tenta anular um ataque mágico inimigo com um teste. Cooldown: 3 turnos.", dano: "Teste: Acerto + 7 vs Acerto do oponente", custoMagia: 100, custoVigor: 0, custoPVSemAlma: 9 },
            { nome: "Combo de magias uteis", nivel: 15, tipo: 'passiva', descricao: "Aprende magias utilitárias como levitar objetos pequenos, abrir fechaduras simples, criar roupas, etc.", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Gigante de gelo", nivel: 20, tipo: 'ataque', descricao: "Invoca um gigante de gelo com 150% do seu Atq. Mágico como Ataque Físico e o dobro da sua vida. Dura 1d6 turnos. Ataques congelam (-5 Acerto/Esquiva, acumulativo). Fraco contra fogo. Cooldown: 1x por batalha.", custoMagia: 300, custoVigor: 0, custoPVSemAlma: 11 },
            { nome: "Cúpula de rocha", nivel: 20, tipo: 'defesa', descricao: "Cria uma cúpula de rocha com 3000 de vida em um raio de 50m. Dura até ser destruída. Cooldown: 1x por batalha.", dano: "3000 PV", custoMagia: 350, custoVigor: 0, custoPVSemAlma: 11 },
            { nome: "Fly", nivel: 20, tipo: 'passiva', descricao: "Permite voar. Voar alto impede ações de combate. Aumenta a velocidade de movimento.", dano: "+100km/h velocidade (voo)", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Bola de fogo Superior", nivel: 25, tipo: 'ataque', descricao: "Lança uma bola de fogo que queima e explode. Cooldown: 2 turnos.", dano: "60 + Ataque Magico + Queimadura. Explosão: Atq. Magico + 1d20. Acerto +6.", custoMagia: 150, custoVigor: 0, custoPVSemAlma: 13 },
            { nome: "Sapatinho de fogo", nivel: 25, tipo: 'defesa', descricao: "Causa combustão sob seus pés, aumentando sua velocidade e esquiva por 3 turnos. Cooldown: 3 turnos.", dano: "+10 Esquiva", custoMagia: 120, custoVigor: 2, custoPVSemAlma: 13 },
            { nome: "Bolsa mágica", nivel: 25, tipo: 'passiva', descricao: "Concede um inventário com capacidade de peso virtualmente ilimitada que pode ser invocado e desconvocado.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Lua de pedra", nivel: 30, tipo: 'ataque', descricao: "Levita rochas para formar um meteoro massivo e o arremessa no campo de batalha. Atinge todos os inimigos. Casting: 2 turnos. Cooldown: 1x por batalha.", dano: "Ataque Magico + 150 + 3d20", custoMagia: 300, custoVigor: 0, custoPVSemAlma: 15 },
            { nome: "Teleporte", nivel: 30, tipo: 'defesa', descricao: "Esquiva instantaneamente de um golpe direto, aparecendo a até 10m de distância. Cooldown: 3 turnos.", custoMagia: 150, custoVigor: 0, custoPVSemAlma: 15 },
            { nome: "Fonte de magia", nivel: 30, tipo: 'passiva', descricao: "Quando MP < 20%, há uma chance (1d20 >= 15) de recuperar 50% do MP total. 1x por sessão.", custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Arqueiro",
        custo: 5,
        descricao: "Mestres da precisão à distância, arqueiros usam arcos e flechas com habilidade letal, controlando o campo de batalha de longe.",
        habilidades: [
            // Nível 1
            { nome: "Tiro Preciso", nivel: 1, tipo: 'ataque', descricao: "Um disparo rápido e bem mirado. Ignora 2 pontos de Esquiva do alvo. Cooldown: 1 turno.", dano: "Ataque físico + dano da flecha + 1d20", custoVigor: 2, custoPVSemAlma: 3 },
            { nome: "Salto Evasivo", nivel: 1, tipo: 'defesa', descricao: "Usa uma flecha de impulsão para saltar 10m para trás, evitando o próximo ataque corpo a corpo. Cooldown: 3 turnos.", dano: "Movimento evasivo", custoVigor: 3, custoPVSemAlma: 3 },
            { nome: "Olho de Águia", nivel: 1, tipo: 'passiva', descricao: "Sua visão aguçada concede +2 de Acerto permanentemente.", dano: "+2 Acerto", efeito: { atributo: 'acerto', valor: 2 }, custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Tiro Duplo", nivel: 5, tipo: 'ataque', descricao: "Dispara duas flechas em rápida sucessão. A segunda tem -3 de Acerto. Cooldown: 3 turnos.", dano: "2x (Ataque Físico + 1d20)", custoVigor: 5, custoPVSemAlma: 5 },
            { nome: "Flecha Atrasante", nivel: 5, tipo: 'ataque', descricao: "Flecha pesada que reduz a Velocidade e Esquiva do alvo em 30% por 2 turnos. Cooldown: 4 turnos.", dano: "10 + dano da flecha + ataque físico 1d20", custoVigor: 4, custoPVSemAlma: 5 },
            { nome: "Instinto de Caçador", nivel: 5, tipo: 'passiva', descricao: "Marque um alvo por batalha para causar +20% de dano adicional contra ele.", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Chuva de Flechas", nivel: 10, tipo: 'ataque', descricao: "Atinge todos os inimigos em uma área de 15m de raio. Pode atingir aliados. Casting: 1 turno. Cooldown: 4 turnos.", dano: "Ataque Físico + 30 + dano da flecha + 3d20", custoVigor: 12, custoPVSemAlma: 7 },
            { nome: "Mira Apurada", nivel: 10, tipo: 'ataque', descricao: "Gasta 1 turno mirando. No próximo, seu primeiro ataque tem Acerto dobrado e +50% de dano. Não pode esquivar durante a mira. Cooldown: 3 turnos.", custoVigor: 5, custoPVSemAlma: 7 },
            { nome: "Mestre do Terreno", nivel: 10, tipo: 'passiva', descricao: "Não sofre penalidades em terrenos difíceis. Ganha +3 de Acerto de posições elevadas.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Tiro Perfurante", nivel: 15, tipo: 'ataque', descricao: "Disparo potente que ignora 75% do RDF do alvo. Cooldown: 4 turnos.", dano: "Ataque Físico + 50 + 2d20", custoVigor: 15, custoPVSemAlma: 9 },
            { nome: "Flecha Elemental", nivel: 15, tipo: 'ataque', descricao: "Imbui a flecha com Fogo (queimadura) ou Gelo (-5 Acerto). Cooldown: 3 turnos.", dano: "Ataque Físico + Ataque Mágico + 1d20", custoVigor: 10, custoMagia: 40, custoPVSemAlma: 9 },
            { nome: "Sequência Mortal", nivel: 15, tipo: 'passiva', descricao: "Ganha +2 de Acerto cumulativo para cada ataque consecutivo acertado (máx. +6). Reseta se errar.", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Falcão Espectral", nivel: 20, tipo: 'defesa', descricao: "Invoca um falcão que revela inimigos e pode distrair um alvo (-10 Esquiva/Acerto). Dura 1d6 turnos. Cooldown: 1x por batalha.", custoMagia: 150, custoPVSemAlma: 11 },
            { nome: "Flecha de Ancoragem", nivel: 20, tipo: 'ataque', descricao: "Prende um alvo no lugar por 1d4 turnos. A corda pode ser cortada (50 de dano). Cooldown: 5 turnos.", dano: "Imobiliza alvo", custoVigor: 15, custoPVSemAlma: 11 },
            { nome: "Visão da Fraqueza", nivel: 20, tipo: 'passiva', descricao: "Seus acertos críticos agora ignoram completamente o RDF do alvo.", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Flecha Explosiva", nivel: 25, tipo: 'ataque', descricao: "Causa dano no alvo principal e em área (5m), empurrando inimigos. Cooldown: 4 turnos.", dano: "Principal: Atq Físico + 80 + 2d20 / Área: Atq Físico + 40", custoVigor: 20, custoPVSemAlma: 13 },
            { nome: "Rajada de Disparos", nivel: 25, tipo: 'ataque', descricao: "Ataca 5 vezes com 50% do Acerto. Zera o Vigor e impede movimento no próximo turno. Cooldown: 5 turnos.", dano: "5x (Ataque Físico + 1d12)", custoVigor: 25, custoPVSemAlma: 13 },
            { nome: "Sexto Sentido", nivel: 25, tipo: 'passiva', descricao: "Uma vez por batalha, force um inimigo a rolar novamente o Acerto de um ataque contra você, usando o pior resultado.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Disparo da Morte", nivel: 30, tipo: 'ataque', descricao: "Técnica suprema. Acerto garantido. Dano dobrado contra alvos com <25% de vida. Racha seu arco (-50% Atq Físico). Casting: 2 turnos (requer Mira Apurada antes). Cooldown: 1x por batalha.", dano: "(Ataque Físico x 2) + 300 + 4d20", custoVigor: 30, custoMagia: 200, custoPVSemAlma: 15 },
            { nome: "Zona Proibida", nivel: 30, tipo: 'ataque', descricao: "Cria uma zona de 20m por 3 turnos. Flechas disparadas de dentro que saem da zona se triplicam. Cooldown: 1x por batalha.", dano: "Triplica projéteis", custoMagia: 250, custoPVSemAlma: 15 },
            { nome: "Um com o Vento", nivel: 30, tipo: 'passiva', descricao: "Aumenta permanentemente sua Agilidade em +10. Seus ataques não são afetados pelo clima.", custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Espadachim",
        custo: 5,
        descricao: "Duelistas ágeis e precisos, os espadachins dominam a arte da lâmina com movimentos rápidos, aparos e contra-ataques mortais.",
        habilidades: [
            // Nível 1
            { nome: "Estocada Veloz", nivel: 1, tipo: 'ataque', descricao: "Um golpe rápido e direto com bônus de +2 no Acerto. Cooldown: 1 turno.", dano: "15 + Ataque Físico + 1d20", custoVigor: 2, custoPVSemAlma: 3 },
            { nome: "Ripostar", nivel: 1, tipo: 'defesa', descricao: "No turno do oponente, anula um ataque físico corpo a corpo e contra-ataca. Requer teste de Esquiva. Cooldown: 2 turnos.", dano: "Ataque Físico + 1d20", custoVigor: 3, custoPVSemAlma: 3 },
            { nome: "Pés Ligeiros", nivel: 1, tipo: 'passiva', descricao: "Seu treinamento foca em movimento, concedendo +3 de Esquiva permanentemente.", dano: "+3 Esquiva", efeito: { atributo: 'esquiva', valor: 3 }, custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Dança das Lâminas", nivel: 5, tipo: 'ataque', descricao: "Sequência de dois cortes rápidos. O segundo tem -2 de Acerto. Cooldown: 3 turnos.", dano: "2x (Ataque Físico + 1d20)", custoVigor: 4, custoPVSemAlma: 5 },
            { nome: "Postura de Duelo", nivel: 5, tipo: 'defesa', descricao: "Aumenta seu Acerto e Esquiva em +5 por 3 turnos, mas reduz seu RDF e RDM em 50%. Cooldown: 4 turnos.", dano: "+5 Acerto, +5 Esquiva", custoVigor: 3, custoPVSemAlma: 5 },
            { nome: "Lâmina Afiada", nivel: 5, tipo: 'passiva', descricao: "Seus acertos críticos (resultado 20 no d20 de dano) causam +50% de dano adicional e aplicam sangramento (1d12 por 1d4 turnos).", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Corte Transversal", nivel: 10, tipo: 'ataque', descricao: "Atinge todos os inimigos em uma linha de 10m e causa sangramento. Cooldown: 4 turnos.", dano: "Ataque Físico + 50 + 2d20 + Sangramento", custoVigor: 6, custoPVSemAlma: 7 },
            { nome: "Reflexos Felinos", nivel: 10, tipo: 'defesa', descricao: "Aumenta sua Esquiva em +20 por 1 turno, mas você perde seu próximo ataque. Cooldown: 4 turnos.", dano: "+20 Esquiva", custoVigor: 6, custoPVSemAlma: 7 },
            { nome: "Olhar do Duelista", nivel: 10, tipo: 'passiva', descricao: "Uma vez por batalha, pode analisar um oponente para descobrir seu valor total de Esquiva.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Corte Relâmpago", nivel: 15, tipo: 'ataque', descricao: "Ataque rápido que ignora 50% do RDF. Reduz sua Esquiva a 0 durante o casting. Casting: 1 turno. Cooldown: 4 turnos.", dano: "Ataque Físico + 65 + 3d20", custoVigor: 10, custoPVSemAlma: 9 },
            { nome: "Passo Fantasma", nivel: 15, tipo: 'defesa', descricao: "Teleporta até 15 metros, concedendo +30 de Esquiva. Cooldown: 1x por batalha.", dano: "+30 Esquiva", custoVigor: 14, custoPVSemAlma: 9 },
            { nome: "Foco de Combate", nivel: 15, tipo: 'passiva', descricao: "Ganha Pontos de Foco (máx 3) ao acertar ou esquivar. Cada ponto concede +1 Acerto e +5 Dano. Perde ao sofrer dano, usar habilidades ou ficar 2 turnos inativo.", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Lâmina Espiritual", nivel: 20, tipo: 'ataque', descricao: "Por 3 turnos, seus ataques são acompanhados por um golpe extra (50% do Atq. Físico, acerto garantido). Casting: 1 turno. Cooldown: 5 turnos.", dano: "+ 50% Atq. Físico extra/ataque", custoVigor: 8, custoMagia: 100, custoPVSemAlma: 11 },
            { nome: "Intocável", nivel: 20, tipo: 'defesa', descricao: "Esquiva automaticamente dos próximos 2 ataques. Após o uso, sua Esquiva é reduzida em -10 por 2 turnos. Cooldown: 1x por batalha.", custoVigor: 10, custoPVSemAlma: 11 },
            { nome: "Alma da Espada", nivel: 20, tipo: 'passiva', descricao: "Escolha uma espada para ganhar permanentemente +20 de Ataque e +3 de Acerto. Pode chamá-la de volta para sua mão.", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Mil Cortes", nivel: 25, tipo: 'ataque', descricao: "Tempestade de cortes que zera seu Vigor. Consome 3 Pontos de Foco para ignorar RDF. Casting: 1 turno. Cooldown: 5 turnos.", dano: "(Ataque Físico x 3) + 3d20", custoVigor: 999, custoPVSemAlma: 13 },
            { nome: "Vento Cortante", nivel: 25, tipo: 'ataque', descricao: "Por 3 turnos, causa 2d20 de dano automático a inimigos quando você se move através do espaço deles. Cooldown: 5 turnos.", dano: "2d20 ao se mover por inimigos", custoVigor: 9, custoPVSemAlma: 13 },
            { nome: "Instinto de Sobrevivência", nivel: 25, tipo: 'passiva', descricao: "Uma vez por dia, ao receber um golpe fatal, faça um teste de Agilidade (CD 35) para ignorar todo o dano.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Tempestade de Aço", nivel: 30, tipo: 'ataque', descricao: "Ataque em área (20m) que atinge todos os inimigos. Causa exaustão por 2 turnos. Casting: 2 turnos. Cooldown: 1x por batalha.", dano: "Ataque Físico + 250 + 4d20", custoVigor: 16, custoPVSemAlma: 15 },
            { nome: "Mente Límpida", nivel: 30, tipo: 'defesa', descricao: "Por 4 turnos, custos de Vigor e cooldowns são reduzidos, e seus ataques não podem ser bloqueados. Reduz seu Vigor máximo pela metade após o uso. Cooldown: 1x por batalha.", custoVigor: 21, custoPVSemAlma: 15 },
            { nome: "Mestre da Lâmina", nivel: 30, tipo: 'passiva', descricao: "Aumenta permanentemente sua Destreza e Agilidade em +6 pontos.", custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Bruxo",
        custo: 5,
        descricao: "Canalizadores de poderes proibidos, bruxos fazem pactos com entidades sombrias para obter magias que corrompem, drenam e destroem.",
        habilidades: [
            // Nível 1
            { nome: "Seta Sombria", nivel: 1, tipo: 'ataque', descricao: "Projétil necromântico que recupera sua Vida em 25% do dano causado. Cooldown: 2 turnos.", dano: "15 + Ataque Mágico + 1d20", custoMagia: 20, custoPVSemAlma: 3 },
            { nome: "Maldição da Fraqueza", nivel: 1, tipo: 'ataque', descricao: "Amaldiçoa um inimigo, reduzindo seu Ataque Físico e Mágico em 15 por 2 turnos. Cooldown: 3 turnos.", dano: "-15 Atq. Físico e Mágico", custoMagia: 20, custoPVSemAlma: 3 },
            { nome: "Pacto de Sangue", nivel: 1, tipo: 'passiva', descricao: "Você pode pagar o custo de MP de suas habilidades usando PV (2 PV para cada 1 MP).", custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Drenar Vida", nivel: 5, tipo: 'ataque', descricao: "Canaliza para arrancar a energia vital de um oponente, curando-se na mesma quantidade. Você fica imóvel. Casting: 1 turno. Cooldown: 4 turnos.", dano: "Ataque Mágico + 1d12", custoMagia: 50, custoPVSemAlma: 5 },
            { nome: "Armadura de Sombras", nivel: 5, tipo: 'defesa', descricao: "Concede +5 de Esquiva por 3 turnos. Magias de luz ignoram o bônus. Cooldown: 4 turnos.", dano: "+5 Esquiva", custoMagia: 50, custoPVSemAlma: 5 },
            { nome: "Vontade do Patrono", nivel: 5, tipo: 'passiva', descricao: "Uma vez por batalha, ao receber dano fatal, jogue 1d20. Se o resultado for 17+, sobreviva com 1 de Vida.", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Invocar Diabrete", nivel: 10, tipo: 'ataque', descricao: "Invoca um diabrete com 50% do seu Ataque Mágico por 3 turnos. Ele pode ficar invisível e tem +10 de esquiva. Casting: 1 turno. Cooldown: 5 turnos.", custoMagia: 120, custoPVSemAlma: 7 },
            { nome: "Círculo de Dor", nivel: 10, tipo: 'ataque', descricao: "Cria um círculo que causa 2d10 de dano por turno e -5 Acerto/Esquiva a quem estiver dentro. Dura 3 turnos. Casting: 1 turno. Cooldown: 4 turnos.", dano: "2d10/turno, -5 Acerto/Esquiva", custoMagia: 100, custoPVSemAlma: 7 },
            { nome: "Visão no Escuro", nivel: 10, tipo: 'passiva', descricao: "Você pode enxergar perfeitamente na escuridão total, mágica ou natural.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Tentáculos do Caos", nivel: 15, tipo: 'ataque', descricao: "Tentáculos sombrios atingem até 3 inimigos, causando dano e imobilizando por 1 turno. Casting: 1 turno. Cooldown: 4 turnos.", dano: "60 + Ataque Mágico + 2d20", custoMagia: 200, custoPVSemAlma: 9 },
            { nome: "Transferência de Pacto", nivel: 15, tipo: 'defesa', descricao: "Concede a um aliado +15 de Ataque e seus ataques curam você em 10% do dano. Você perde 30% de suas defesas. Dura 3 turnos. Cooldown: 5 turnos.", dano: "Buff em aliado", custoMagia: 130, custoPVSemAlma: 9 },
            { nome: "Conhecimento Proibido", nivel: 15, tipo: 'passiva', descricao: "Uma vez por batalha, descubra a maior fraqueza de um oponente.", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Abraço do Vazio", nivel: 20, tipo: 'ataque', descricao: "Onda de energia caótica em área (20m) que causa dano e aterroriza inimigos. Você sofre 20% da sua Vida Máx. como dano. Casting: 2 turnos. Cooldown: 1x por batalha.", dano: "Ataque Mágico + 125 + 3d20", custoMagia: 300, custoPVSemAlma: 11 },
            { nome: "Prisão Infernal", nivel: 20, tipo: 'defesa', descricao: "Cria uma jaula (1500 PV) ao redor de um alvo, isolando-o por 1d4 turnos. Casting: 2 turnos. Cooldown: 1x por batalha.", dano: "Isola alvo", custoMagia: 280, custoPVSemAlma: 11 },
            { nome: "Forma Medonha", nivel: 20, tipo: 'passiva', descricao: "Inimigos que te atacam corpo a corpo pela primeira vez devem fazer um teste de coragem (CD 12) ou perdem o próximo turno.", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Fogo Infernal", nivel: 25, tipo: 'ataque', descricao: "Chamas que causam dano e impedem o alvo de receber cura por 1d6 turnos. Cooldown: 3 turnos.", dano: "70 + Ataque Mágico + 2d20", custoMagia: 120, custoPVSemAlma: 13 },
            { nome: "Passo Etéreo", nivel: 25, tipo: 'defesa', descricao: "Teleporta até 30m, podendo ser usado como esquiva. Você sofre 3% da sua Vida Máx. em dano. Cooldown: 3 turnos.", dano: "Teleporte", custoMagia: 150, custoPVSemAlma: 13 },
            { nome: "Colecionador de Almas", nivel: 25, tipo: 'passiva', descricao: "Ganha Cargas de Alma ao derrotar inimigos (máx 5). Gaste 3 cargas para recuperar 25% do seu MP.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Invocar Avatar do Patrono", nivel: 30, tipo: 'ataque', descricao: "Invoca uma manifestação física do seu patrono. Custo: Toda sua vida (exceto 1). Vida Máx. reduzida em 30% por 24h. Chance do Avatar se virar contra você. Dura 3 turnos. Casting: 3 turnos. Cooldown: 1x por semana.", dano: "Invoca Avatar", custoMagia: 500, custoPVSemAlma: 15 },
            { nome: "Corrente da Danação", nivel: 30, tipo: 'ataque', descricao: "Acorrenta dois inimigos. Dano sofrido por um é 75% replicado no outro. Dura 3 turnos. Cooldown: 3 turnos.", dano: "Compartilha 75% do dano", custoMagia: 300, custoPVSemAlma: 15 },
            { nome: "Corpo Profano", nivel: 30, tipo: 'passiva', descricao: "Ganha +25 de RDM permanente. Imune a doenças e venenos. Magias de cura sagradas causam dano.", dano: "+25 RDM", efeito: { atributo: 'rdm', valor: 25 }, custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Druida",
        custo: 5,
        descricao: "Mestres da natureza, druidas usam o poder da flora e da fauna para proteger o equilíbrio, curar aliados e se transformar em feras selvagens.",
        habilidades: [
            // Nível 1
            { nome: "Garras de Espinhos", nivel: 1, tipo: 'ataque', descricao: "Seus braços são cobertos por vinhas espinhentas, transformando seus ataques desarmados em armas letais. Cooldown: 2 turnos.", dano: "15 + Ataque Físico + 1d20 + Sangramento (1d4/1d4)", custoMagia: 15, custoPVSemAlma: 3 },
            { nome: "Casca de Carvalho", nivel: 1, tipo: 'defesa', descricao: "Sua pele adquire a dureza da casca de um carvalho antigo, aumentando sua resistência. Efeito Negativo: -2 Esquiva. Duração: 2 turnos. Cooldown: 2 turnos.", dano: "+10 RDF, +5 RDM", custoMagia: 15, custoPVSemAlma: 3 },
            { nome: "Sintonia com a Natureza", nivel: 1, tipo: 'passiva', descricao: "Sua regeneração de Vida e Vigor fora de combate é dobrada em ambientes naturais.", custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Metamorfose: Lobo Veloz", nivel: 5, tipo: 'ataque', descricao: "Transforma-se em um lobo ágil. Aumenta Atq. Físico, Acerto, Esquiva e Velocidade. Permite rastreio aprimorado. Duração: 3 turnos. Cooldown: 3 turnos.", dano: "+20 Atq. Físico, +3 Acerto, +5 Esquiva", custoMagia: 40, custoVigor: 2, custoPVSemAlma: 5 },
            { nome: "Toque Restaurador", nivel: 5, tipo: 'defesa', descricao: "Canaliza a energia vital da terra para curar 30% da Vida Total de um alvo. Casting: 1 turno. Cooldown: 3 turnos.", dano: "Cura 30% Vida Total", custoMagia: 35, custoPVSemAlma: 5 },
            { nome: "Falar com Animais", nivel: 5, tipo: 'passiva', descricao: "Permite comunicação simples com animais para entender intenções e pedir pequenos favores.", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Invocar Companheiro Animal", nivel: 10, tipo: 'ataque', descricao: "Invoca o espírito de um animal totem (Urso, Águia ou Serpente) para lutar. Duração: 3 turnos. Cooldown: 5 turnos.", dano: "Companheiro com 75% dos seus PV/Ataque", custoMagia: 130, custoPVSemAlma: 7 },
            { nome: "Pântano de Raízes", nivel: 10, tipo: 'defesa', descricao: "Raízes emergem do solo em uma área de 10m, imobilizando inimigos por 2 turnos. Requer teste de Força para libertar. Cooldown: 4 turnos.", dano: "Imobiliza em área", custoMagia: 100, custoPVSemAlma: 7 },
            { nome: "Caminhos Ocultos", nivel: 10, tipo: 'passiva', descricao: "Nunca se perde em ambientes selvagens e não é afetado por terreno difícil.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Tempestade de Espinhos", nivel: 15, tipo: 'ataque', descricao: "Cria um ciclone de espinhos em área (15m) que causa dano e sangramento. Casting: 1 turno. Cooldown: 4 turnos.", dano: "70 + Ataque Mágico + 2d20 + Sangramento", custoMagia: 140, custoPVSemAlma: 9 },
            { nome: "Metamorfose: Urso-Rupestre", nivel: 15, tipo: 'ataque', descricao: "Assume a forma de um urso massivo, ganhando Ataque, RDF e PV temporários, mas perdendo Esquiva e Velocidade. Duração: 4 turnos. Cooldown: 5 turnos.", dano: "+50 Atq. Físico, +65 RDF, +200 PV temp.", custoMagia: 150, custoVigor: 5, custoPVSemAlma: 9 },
            { nome: "Pele de Ferro-Madeira", nivel: 15, tipo: 'passiva', descricao: "Sua pele é permanentemente mais resistente.", dano: "+10 RDF, +15 RDM", efeito: [{ atributo: 'rdf', valor: 10 }, { atributo: 'rdm', valor: 15 }], custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Guardião da Floresta Ancestral", nivel: 20, tipo: 'ataque', descricao: "Invoca um Golem de madeira e pedra com o dobro da sua Vida e defesas aprimoradas. Fraco contra fogo. Duração: 1d6 turnos. Cooldown: 1x por batalha.", dano: "Invoca Golem", custoMagia: 300, custoPVSemAlma: 11 },
            { nome: "Círculo de Regeneração", nivel: 20, tipo: 'defesa', descricao: "Cria um círculo (10m) que cura aliados (20% Vida, 10% Vigor por turno). Você precisa permanecer no centro. Duração: 3 turnos. Cooldown: 4 turnos.", dano: "Cura em área", custoMagia: 250, custoPVSemAlma: 11 },
            { nome: "Um com a Natureza", nivel: 20, tipo: 'passiva', descricao: "Pode se fundir com árvores ou com o solo para se esconder ou descansar em segurança.", custoPVSemAlma: 13 },
            // Nível 25
            { nome: "Fúria da Mãe-Terra", nivel: 25, tipo: 'ataque', descricao: "Estacas de pedra surgem em uma linha de 20m, causando dano e reduzindo a velocidade dos inimigos. Casting: 1 turno. Cooldown: 3 turnos.", dano: "Ataque Mágico + 100 + 4d20", custoMagia: 380, custoPVSemAlma: 13 },
            { nome: "Metamorfose: Águia Real", nivel: 25, tipo: 'defesa', descricao: "Transforma-se em uma águia, permitindo voo, +15 Esquiva e +5 Acerto após observar. Duração: 5 turnos. Cooldown: 4 turnos.", dano: "Voo, +15 Esquiva", custoMagia: 150, custoVigor: 3, custoPVSemAlma: 13 },
            { nome: "Sementes da Vida", nivel: 25, tipo: 'passiva', descricao: "Uma vez por dia, se morrer, retorna à vida no próximo turno com 30% de Vida e MP.", custoPVSemAlma: 15 },
            // Nível 30
            { nome: "Ira da Natureza", nivel: 30, tipo: 'ataque', descricao: "Causa dano massivo em área e transforma o campo em terreno difícil para inimigos. Causa exaustão em você. Duração: 2 turnos. Cooldown: 1x por batalha.", dano: "Atq. Mágico + Atq. Físico + 200 + 4d20", custoMagia: 400, custoVigor: 15, custoPVSemAlma: 15 },
            { nome: "Forma do Protetor Ancestral", nivel: 30, tipo: 'defesa', descricao: "Assume uma forma druídica final, ganhando +20 em Força, Agilidade e Inteligência, imunidades e roubo de vida. Duração: 3 turnos. Cooldown: 1x por dia.", dano: "+20 For/Agi/Int, Imunidades", custoMagia: 300, custoPVSemAlma: 15 },
            { nome: "Transformação animal beta", nivel: 30, tipo: 'passiva', descricao: "Você pode se transformar em qualquer animal de porte pequeno que não lhe de vantagem em batalha (ratos, gatos, etc).", custoPVSemAlma: 20 },
        ]
    },
    {
        nome: "Paladino",
        custo: 5,
        descricao: "Guerreiro sagrado que usa o poder divino para proteger os inocentes e punir o mal.",
        habilidades: [
            // Nível 1
            { nome: "Corte Divino", nivel: 1, tipo: 'ataque', descricao: "Você imbuí sua espada com magia de luz e desfere dano mágico e dano físico. Cooldown: 2 Turnos.", dano: "ataque + 10 físico, + 10 mágico + 2d20. +10% dano vs trevas.", custoMagia: 20, custoVigor: 2, custoPVSemAlma: 3 },
            { nome: "Fé", nivel: 1, tipo: 'defesa', descricao: "Voce para para orar e pedir ajuda divina, anulando dano sombrio. Duração: 2 turnos. Cooldown: 3 turnos. Casting: 1 turno.", dano: "Anula 30% do dano de magia negra.", custoMagia: 20, custoPVSemAlma: 3 },
            { nome: "Benção dos deuses", nivel: 1, tipo: 'passiva', descricao: "Você é abençoado, pode detectar qualquer criatura maligna em um raio de 20m, desde que não seja mais de 3 níveis acima do seu.", custoPVSemAlma: 5 },
            // Nível 5
            { nome: "Fé do tamanho de um grão de mostarda", nivel: 5, tipo: 'ataque', descricao: "Ao orar, um milagre atinge seus oponentes. Escolha entre paralisia, redução de atributos ou confusão. Cooldown: 3 turnos. Casting: 1 turno.", dano: "30 + 2d20 (mágico ou físico). +5 em acerto.", custoMagia: 40, custoPVSemAlma: 5 },
            { nome: "Nada para um homem de Deus.", nivel: 5, tipo: 'defesa', descricao: "Você ora e recebe uma cura divina contínua. Duração: 1d6 turnos. Cooldown: 4 turnos. Efeito Negativo: Inimigos malignos focam em você.", dano: "Cura 1d6 de vida por turno.", custoMagia: 40, custoPVSemAlma: 5 },
            { nome: "Ressuscitar os mortos", nivel: 5, tipo: 'passiva', descricao: "Você pode tentar ressuscitar um aliado uma vez por sessão. Uma falha pode ter consequências sombrias.", custoPVSemAlma: 7 },
            // Nível 10
            { nome: "Perfuração precisa.", nivel: 10, tipo: 'ataque', descricao: "Você da um Dash de até 20 metros para um golpe perfurante. Causa sangramento. Cooldown: 4 turnos.", dano: "50 + ataque físico + 1d20. +5 Acerto. Sangramento 1d6 por 1d12 turnos.", custoMagia: 50, custoVigor: 7, custoPVSemAlma: 7 },
            { nome: "Oração pelos aflitos", nivel: 10, tipo: 'defesa', descricao: "Você ora para que sua divindade cure até 3 aliados aleatórios no campo de batalha. Casting: 1 turno. Cooldown: 4 turnos.", dano: "Cura 30% dos PV totais de 3 aliados.", custoMagia: 55, custoPVSemAlma: 7 },
            { nome: "Livramento", nivel: 10, tipo: 'passiva', descricao: "Uma vez por seção, se algo fatal ocorrer com você ou um aliado, jogue 1d20. Se o resultado for acima de 10, sua divindade intervém.", custoPVSemAlma: 9 },
            // Nível 15
            { nome: "Armadura de luz", nivel: 15, tipo: 'defesa', descricao: "Sua armadura e espada são revestidas em luz, ofuscando todos. Duração: 1d6 (1-3) turnos. Cooldown: 6 turnos. Casting: 1 turno.", dano: "+30 dano mágico, +40 RDM, +20 RDF. -2 Acerto/Esquiva para todos.", custoMagia: 80, custoVigor: 3, custoPVSemAlma: 9 },
            { nome: "Ainda que eu ande pelo vale da sombra da morte...", nivel: 15, tipo: 'defesa', descricao: "Inimigos de origem maligna (mesmo nível ou inferior) não podem infringir dano a você ou a até três aliados. Duração: 2 turnos. Cooldown: 4 turnos. Casting: 1 turno.", dano: "Imunidade a dano maligno.", custoMagia: 60, custoPVSemAlma: 9 },
            { nome: "Profecia", nivel: 15, tipo: 'passiva', descricao: "Uma vez por seção, você pode receber uma visão do futuro sobre um evento específico para tentar evitá-lo.", custoPVSemAlma: 11 },
            // Nível 20
            { nome: "Asas", nivel: 20, tipo: 'defesa', descricao: "Você cria asas de luz que lhe permitem voar, ficando inalcançável a danos de curto alcance. Duração: 3 turnos. Cooldown: 5 turnos.", dano: "Voo, +12 Agilidade, +9 Acerto.", custoMagia: 120, custoPVSemAlma: 11 },
            { nome: "Pura luz.", nivel: 20, tipo: 'defesa', descricao: "Você se torna luz pura, ficando intangível a qualquer ataque. Duração: 3 turnos. Cooldown: 1x por batalha.", dano: "+18 Agilidade. Intangibilidade.", custoMagia: 200, custoPVSemAlma: 11 },
        ]
    }
];


export const nivelData: NivelInfo[] = [
    { nivel: 0, xp: 0, pd: 25, ph: 8 }, { nivel: 1, xp: 10, pd: 31, ph: 9 }, { nivel: 2, xp: 30, pd: 37, ph: 10 },
    { nivel: 3, xp: 60, pd: 43, ph: 11 }, { nivel: 4, xp: 100, pd: 49, ph: 12 }, { nivel: 5, xp: 150, pd: 55, ph: 13 },
    { nivel: 6, xp: 210, pd: 61, ph: 14 }, { nivel: 7, xp: 280, pd: 67, ph: 15 }, { nivel: 8, xp: 360, pd: 73, ph: 16 },
    { nivel: 9, xp: 450, pd: 79, ph: 17 }, { nivel: 10, xp: 550, pd: 85, ph: 18 }, { nivel: 11, xp: 670, pd: 91, ph: 19 },
    { nivel: 12, xp: 810, pd: 97, ph: 20 }, { nivel: 13, xp: 970, pd: 103, ph: 21 }, { nivel: 14, xp: 1150, pd: 109, ph: 22 },
    { nivel: 15, xp: 1350, pd: 115, ph: 23 }, { nivel: 16, xp: 1570, pd: 121, ph: 24 }, { nivel: 17, xp: 1810, pd: 127, ph: 25 },
    { nivel: 18, xp: 2070, pd: 133, ph: 26 }, { nivel: 19, xp: 2350, pd: 139, ph: 27 }, { nivel: 20, xp: 2650, pd: 145, ph: 28 },
    { nivel: 21, xp: 2980, pd: 148, ph: 29 }, { nivel: 22, xp: 3340, pd: 151, ph: 30 }, { nivel: 23, xp: 3730, pd: 154, ph: 31 },
    { nivel: 24, xp: 4150, pd: 157, ph: 32 }, { nivel: 25, xp: 4600, pd: 160, ph: 33 }, { nivel: 26, xp: 5080, pd: 163, ph: 34 },
    { nivel: 27, xp: 5590, pd: 166, ph: 35 }, { nivel: 28, xp: 6130, pd: 169, ph: 36 }, { nivel: 29, xp: 8000, pd: 219, ph: 37 },
    { nivel: 30, xp: 10000, pd: 319, ph: 38 }
];