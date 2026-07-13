export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'importancia-areia-qualidade',
    title: 'A Importância de Usar Areia de Qualidade na sua Obra',
    excerpt: 'Descubra como a escolha da areia certa pode evitar dores de cabeça e garantir a durabilidade da sua construção.',
    content: `
      <h2>Por que a qualidade da areia importa?</h2>
      <p>A areia é um dos materiais mais utilizados na construção civil, presente em quase todas as etapas, desde a fundação até o acabamento. Usar areia de má qualidade, com impurezas ou granulometria inadequada, pode comprometer seriamente a estrutura da sua obra.</p>
      
      <h3>1. Resistência do Concreto e Argamassa</h3>
      <p>A areia atua como o esqueleto do concreto e da argamassa. Se ela contiver muita argila, terra ou matéria orgânica, essas impurezas prejudicam a aderência do cimento, resultando em misturas fracas e quebradiças.</p>
      
      <h3>2. Prevenção de Fissuras e Trincas</h3>
      <p>Areia suja absorve mais água do que o normal. Durante o processo de secagem (cura), essa água evapora em excesso, causando retração exagerada na massa. O resultado? Paredes e contrapisos cheios de fissuras.</p>

      <h3>3. Economia de Cimento</h3>
      <p>Areias bem selecionadas e limpas exigem menos cimento para atingir a resistência desejada. Comprar areia mais barata e de baixa qualidade geralmente significa gastar mais com cimento para compensar a falta de resistência.</p>

      <h2>Onde encontrar areia de qualidade em Caldas Novas?</h2>
      <p>Na MG Areias e Britas, fornecemos areia lavada de excelente qualidade, rigorosamente selecionada para garantir o melhor desempenho na sua obra. Temos areia fina, média e grossa, cada uma ideal para uma etapa específica da sua construção.</p>
    `,
    date: '10 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/sand,construction?lock=1',
    category: 'Materiais',
  },
  {
    id: '2',
    slug: 'diferenca-tipos-brita',
    title: 'Qual a diferença entre os tipos de Brita (0, 1 e Pedra Marroada)?',
    excerpt: 'Entenda as classificações da brita e saiba qual é a opção ideal para a fundação, laje ou calçamento do seu projeto.',
    content: `
      <h2>Conhecendo as Britas</h2>
      <p>A brita é resultado da trituração de rochas maiores, como granito ou gnaisse. Ela é classificada de acordo com o seu tamanho (granulometria), e cada tipo tem uma função específica na construção civil.</p>

      <h3>Pó de Brita</h3>
      <p>É o material mais fino, parecendo uma areia grossa. É muito utilizado para a fabricação de asfalto, concretos pré-moldados (blocos, manilhas) e para o assentamento de pisos intertravados (pavers).</p>

      <h3>Brita 0 (Pedrisco)</h3>
      <p>Seus grãos variam entre 4,8mm e 9,5mm. É ideal para a fabricação de lajes pré-moldadas, blocos de concreto e acabamentos finos onde uma brita maior atrapalharia a uniformidade da peça.</p>

      <h3>Brita 1</h3>
      <p>A mais comum e utilizada nas obras. Com grãos entre 9,5mm e 19mm, é a escolha padrão para concretos em geral (colunas, vigas, lajes e fundações).</p>

      <h3>Pedra Marroada (Rachão)</h3>
      <p>São pedras grandes e brutas, com mais de 76mm. São essenciais para obras de base pesada, como fundações de grandes estruturas, muros de arrimo (contenção de terra) e gabiões.</p>

      <h2>Faça a escolha certa</h2>
      <p>Escolher a brita correta garante a resistência e estabilidade estrutural. Se tiver dúvidas, a equipe da MG Areias e Britas está pronta para orientar qual material comprar para sua obra em Caldas Novas.</p>
    `,
    date: '12 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/gravel,construction?lock=2',
    category: 'Dicas de Construção',
  },
  {
    id: '3',
    slug: 'calcular-quantidade-areia-brita-obra-caldas-novas',
    title: 'Como calcular a quantidade de areia e brita para minha obra?',
    excerpt: 'Aprenda o cálculo básico para não comprar material de menos e atrasar a obra, ou de mais e desperdiçar dinheiro.',
    content: `
      <h2>Evite o desperdício e o atraso na sua obra</h2>
      <p>Um dos maiores desafios de quem está construindo ou reformando em Caldas Novas é acertar na quantidade de materiais básicos, como areia e brita. Comprar a menos significa obra parada esperando entrega. Comprar a mais significa dinheiro jogado fora e material atrapalhando o espaço.</p>

      <h3>O cálculo do volume (Metro Cúbico)</h3>
      <p>A areia e a brita são vendidas por metro cúbico (m³). Para calcular o volume de um contrapiso ou de uma laje, a fórmula é simples:</p>
      <ul>
        <li><strong>Largura (m) × Comprimento (m) × Espessura (m) = Volume (m³)</strong></li>
      </ul>
      <p>Exemplo: Se você vai fazer um contrapiso de 5 metros de largura, 10 metros de comprimento e 5 centímetros (0,05m) de espessura: <strong>5 × 10 × 0,05 = 2,5 m³ de concreto.</strong></p>

      <h3>O traço do concreto e argamassa</h3>
      <p>A quantidade de areia e brita dentro desse 1m³ de concreto varia de acordo com o "traço" (a receita do concreto). Para uma laje, geralmente usa-se um traço mais forte (mais cimento). Para um contrapiso, um traço mais fraco.</p>
      <p>Em média, para 1m³ de concreto comum, você usará cerca de <strong>0,8 m³ de brita</strong> e <strong>0,5 m³ de areia</strong> (a soma passa de 1m³ porque a areia preenche os espaços vazios entre as pedras).</p>

      <h2>Use nossa Calculadora Online</h2>
      <p>Para facilitar, nós da MG Areias e Britas desenvolvemos uma <strong><a href="/calculadora-de-obra">Calculadora de Obra</a></strong>. Basta inserir a área e a espessura, e nós te daremos a estimativa exata de quantos metros cúbicos de areia e brita você precisará comprar.</p>
    `,
    date: '14 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/blueprint,construction?lock=3',
    category: 'Ferramentas & Dicas',
  },
  {
    id: '4',
    slug: 'comprar-pedra-marroada-preco-caldas-novas',
    title: 'Onde comprar pedra marroada para muro de arrimo em Caldas Novas?',
    excerpt: 'Vai construir em um terreno com declive? A pedra marroada é fundamental. Saiba como escolher e onde comprar.',
    content: `
      <h2>A importância da Pedra Marroada na contenção</h2>
      <p>Muitos loteamentos em Caldas Novas e região possuem terrenos com aclive ou declive. Para nivelar o lote e construir com segurança, é quase sempre necessário construir muros de arrimo (muros de contenção).</p>
      <p>A <strong>pedra marroada</strong> (também conhecida como rachão) é o material ideal para a base dessas fundações e, principalmente, para o <strong>dreno do muro de arrimo</strong>.</p>

      <h3>Por que usar pedra marroada no dreno?</h3>
      <p>O maior inimigo de um muro de arrimo é a água da chuva acumulada na terra, que exerce uma pressão imensa sobre a estrutura. A pedra marroada, por ser grande (acima de 7cm), cria grandes espaços vazios por onde a água escoa facilmente até os tubos de drenagem, aliviando o peso no muro e evitando desabamentos.</p>

      <h3>Como calcular a quantidade?</h3>
      <p>O volume necessário de rachão depende do projeto do engenheiro, mas geralmente é colocada uma camada de 30 a 50 cm de espessura de pedras entre o muro e o barranco de terra.</p>

      <h2>MG Areias e Britas: Seu fornecedor em Caldas Novas</h2>
      <p>Trabalhamos com pedra marroada de alta resistência e excelente granulometria. Fazemos entregas rápidas diretamente no seu canteiro de obras em Caldas Novas. Fale com nossa equipe e solicite um orçamento sem compromisso para a base da sua obra!</p>
    `,
    date: '18 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/rocks,construction?lock=4',
    category: 'Materiais',
  },
  {
    id: '5',
    slug: 'materiais-basicos-construcao-comprar-primeiro-caldas-novas',
    title: 'Vai começar a construir? Veja quais materiais básicos comprar primeiro',
    excerpt: 'O cronograma de compras é essencial. Saiba o que pedir na primeira fase da sua obra para não ter atrasos.',
    content: `
      <h2>O planejamento é o segredo de uma obra rápida</h2>
      <p>Muitas pessoas, ao começarem a construir o sonho da casa própria em Caldas Novas, ficam perdidas sobre a ordem das compras. Comprar materiais de acabamento muito cedo pode gerar problemas de armazenamento e até quebras. O foco inicial deve ser na etapa estrutural, também conhecida como "obra bruta".</p>

      <h3>1. Materiais para Gabarito e Ligação Provisória</h3>
      <p>Antes de tudo, o terreno precisa ser fechado e marcado. Você precisará de <strong>madeira (pontaletes, tábuas)</strong>, <strong>pregos</strong> e <strong>arame recozido</strong>. Além disso, providencie os materiais para o padrão de energia (poste) e ligação de água provisória.</p>

      <h3>2. Materiais para a Fundação e Base</h3>
      <p>Assim que as valas forem abertas, a concretagem não pode demorar. É neste momento que você deve solicitar a entrega de:</p>
      <ul>
        <li><strong>Areia Média/Grossa</strong>: Essencial para o concreto das sapatas e vigas baldrame.</li>
        <li><strong>Brita 1</strong>: A brita padrão para a mistura do concreto estrutural.</li>
        <li><strong>Cimento</strong>: Compre em remessas menores, pois o cimento tem validade curta e empedra se pegar umidade.</li>
        <li><strong>Pedra Marroada (Rachão)</strong>: Caso o terreno exija muro de contenção ou aterro drenante.</li>
        <li><strong>Aço (Ferragens)</strong>: Vergalhões, estribos e malhas de aço conforme o projeto estrutural.</li>
      </ul>

      <h3>3. Tijolos ou Blocos</h3>
      <p>Após a fundação estar pronta e impermeabilizada, a alvenaria começará a subir. Programe a entrega de tijolos cerâmicos ou blocos de concreto e garanta o estoque de <strong>areia fina ou média</strong> para a argamassa de assentamento.</p>

      <h2>Agilidade na entrega em Caldas Novas</h2>
      <p>A fase de fundação exige que os agregados (areia e brita) estejam sempre disponíveis. A <strong>MG Areias e Britas</strong> tem a logística mais ágil de Caldas Novas para que os seus pedreiros nunca fiquem parados esperando material.</p>
    `,
    date: '20 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/foundation,construction?lock=5',
    category: 'Dicas de Construção',
  },
  {
    id: '6',
    slug: 'reforma-piscinas-areia-filtro-caldas-novas',
    title: 'Além da construção: a importância da areia para filtros de piscina',
    excerpt: 'Caldas Novas é a capital das águas quentes. Saiba que tipo de areia é usada na manutenção e reforma de piscinas.',
    content: `
      <h2>Areia não serve só para fazer concreto</h2>
      <p>Em Caldas Novas e Rio Quente, o turismo em torno dos clubes, parques aquáticos e piscinas residenciais movimenta a economia. Mas manter a água limpa e cristalina exige um sistema de filtragem eficiente. E adivinha qual é o elemento principal desse sistema? A areia.</p>

      <h3>Como funciona a areia no filtro da piscina?</h3>
      <p>O filtro da piscina é um tanque cheio de um tipo específico de areia. A água é bombeada para dentro desse tanque e forçada a passar pelos grãos de areia, que retêm as impurezas (sujeira, folhas, insetos, oleosidade). A água retorna para a piscina limpa.</p>

      <h3>Qualquer areia serve para o filtro?</h3>
      <p><strong>Não.</strong> A areia de construção (areia lavada comum) não deve ser usada dentro dos filtros. A areia para filtro de piscina passa por um processo industrial específico para ter os grãos de tamanhos uniformes e arestas arredondadas, não possuindo pó de pedra ou terra.</p>

      <h3>Areia na reforma e construção de piscinas</h3>
      <p>No entanto, para a <strong>construção da estrutura da piscina</strong> (concreto armado, alvenaria estrutural, contrapiso), você usará muita <strong>Areia Média e Grossa</strong> convencional. O concreto de piscinas precisa ser de altíssima qualidade e sem impurezas para evitar fissuras que causem vazamentos.</p>
      
      <p>Seja para construir a estrutura do seu deck ou para a fundação da sua piscina, você pode contar com a qualidade garantida dos materiais da <strong>MG Areias e Britas</strong>.</p>
    `,
    date: '25 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/swimmingpool,construction?lock=6',
    category: 'Curiosidades',
  },
  {
    id: '7',
    slug: 'dicas-evitar-desperdicio-areia-brita-obra',
    title: '5 Dicas de ouro para evitar o desperdício de areia e brita na obra',
    excerpt: 'Reduza custos e mantenha o canteiro de obras organizado com práticas simples de armazenamento e uso.',
    content: `
      <h2>O desperdício invisível</h2>
      <p>Você sabia que até 15% dos materiais básicos (areia, brita, cimento) comprados para uma obra são perdidos antes mesmo de serem usados? O vento, a chuva, o solo inadequado e o mau uso são os principais vilões.</p>

      <h3>1. Prepare o local de descarga (Baia)</h3>
      <p>Nunca descarregue a areia ou a brita diretamente sobre a terra solta, grama ou lama. Faça um "berço" de concreto magro ou lona plástica grossa. Isso impede que o material se misture com a terra, o que inutiliza a parte de baixo do monte de areia.</p>

      <h3>2. Cubra os montes de areia</h3>
      <p>Em épocas de chuva em Caldas Novas, uma tempestade forte pode literalmente lavar sua areia embora. Além disso, gatos e outros animais costumam usar areia solta como caixa de areia, contaminando o material. Sempre cubra os montes com lonas pretas quando a obra estiver parada.</p>

      <h3>3. Compre a quantidade certa (e fracione)</h3>
      <p>Usar nossa <a href="/calculadora-de-obra">Calculadora de Obra</a> ajuda muito. Mas, mesmo sabendo o total, se o seu canteiro é pequeno, não compre tudo de uma vez. A areia que fica muito tempo no tempo sofre dispersão. A <strong>MG Areias e Britas</strong> realiza entregas rápidas, permitindo que você compre à medida que a obra avança.</p>

      <h3>4. Cercado de blocos (Baia de alvenaria)</h3>
      <p>Se a obra for durar muito, faça um cercado simples (sem argamassa, apenas empilhando blocos) ao redor de onde a areia e a brita serão descarregadas. Isso evita que elas se espalhem pelo chão da obra sendo pisoteadas ou atropeladas por carrinhos de mão.</p>

      <h3>5. Fiscalize a produção da argamassa</h3>
      <p>Traços feitos "no olho" geralmente gastam mais cimento e mais areia do que o necessário. Exija que os pedreiros usem latas ou baldes de medida padrão (como a lata de 18 litros) para fazer o traço exato.</p>
    `,
    date: '28 de Julho de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/wheelbarrow,construction?lock=7',
    category: 'Economia na Obra',
  },
  {
    id: '8',
    slug: 'diferenca-areia-lavada-areia-barranco',
    title: 'Qual a diferença entre areia lavada de rio e areia de barranco?',
    excerpt: 'Conheça a origem da areia que você compra e entenda por que a areia lavada é a melhor opção estrutural.',
    content: `
      <h2>Nem toda areia é igual</h2>
      <p>A areia parece ser um material simples, mas a sua origem dita a sua qualidade. Na construção civil brasileira, duas origens são muito comuns: a extração em leitos de rios (areia lavada) e a extração em cavas ou barrancos terrestres.</p>

      <h3>A Areia Lavada (Areia de Rio)</h3>
      <p>É extraída dos leitos dos rios por meio de dragas. O processo de extração e bombeamento com a água do próprio rio já atua como uma "lavagem" natural e mecânica, removendo boa parte do lodo, argila e material orgânico.</p>
      <ul>
        <li><strong>Vantagens:</strong> Grãos mais puros, excelente aderência ao cimento, ideal para concreto estrutural (vigas, lajes, colunas).</li>
        <li><strong>Tipos:</strong> É facilmente separada em fina, média e grossa nas peneiras.</li>
      </ul>

      <h3>A Areia de Barranco ou Cava</h3>
      <p>É retirada de jazidas em terra firme. Essa areia costuma conter alto teor de argila (barro) e minerais finos.</p>
      <ul>
        <li><strong>Problemas:</strong> A presença de argila enfraquece o concreto. Se usada para a estrutura, pode comprometer a segurança da casa.</li>
        <li><strong>Uso:</strong> Alguns pedreiros gostam de usá-la apenas para "dar liga" na massa de reboco, deixando a massa macia de trabalhar. Mesmo assim, requer cuidado extra.</li>
      </ul>

      <h2>A escolha segura em Caldas Novas</h2>
      <p>Para não correr riscos com a segurança e evitar fissuras no reboco da sua obra, dê preferência sempre à <strong>Areia Lavada</strong> de boa procedência. Na <strong>MG Areias e Britas</strong>, entregamos materiais certificados, limpos e livres de impurezas excessivas.</p>
    `,
    date: '02 de Agosto de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/river,sand?lock=8',
    category: 'Materiais',
  },
  {
    id: '9',
    slug: 'atraso-entrega-materiais-custo-obra-caldas-novas',
    title: 'O perigo do atraso de materiais: Por que a pontualidade na entrega é essencial?',
    excerpt: 'Obra parada é sinônimo de prejuízo. Entenda os custos ocultos de escolher um fornecedor de areia e brita que não entrega no prazo.',
    content: `
      <h2>O pesadelo do cronograma furado</h2>
      <p>Construir já é uma atividade que exige paciência e muito gerenciamento. Agora, imagine contratar a equipe de pedreiros, alugar betoneira e organizar o canteiro para concretar uma laje, e o caminhão de areia e brita simplesmente não chegar no dia marcado?</p>

      <h3>Os Custos Ocultos do Atraso</h3>
      <ul>
        <li><strong>Diária de profissionais perdidas:</strong> O pedreiro e os serventes estão no local e precisam receber a diária, mesmo que não consigam produzir por falta de material.</li>
        <li><strong>Aluguel de equipamentos:</strong> Betoneiras, andaimes e escoras alugados continuarão gerando cobrança pelos dias extras parados.</li>
        <li><strong>Prejuízos no cimento:</strong> Se a equipe preparou parte da massa e teve que parar no meio, ou se abriram sacos de cimento que podem acabar umedecendo no tempo.</li>
        <li><strong>Desmotivação e Estresse:</strong> Quebras de cronograma geram desgastes na relação entre proprietário e empreiteiro.</li>
      </ul>

      <h3>A diferença de um fornecedor de confiança</h3>
      <p>O preço do metro da areia pode até ser um pouco mais barato no concorrente de procedência duvidosa, mas o prejuízo de 2 diárias de um pedreiro cobre, com folga, qualquer "economia" que você achou que faria.</p>

      <h2>O Compromisso MG Areias e Britas</h2>
      <p>Nós sabemos que o seu tempo é dinheiro. Temos frota própria e uma logística otimizada para entregas em toda <strong>Caldas Novas e região</strong>. Fechou o pedido? Garantimos a entrega para que sua obra nunca pare e seus profissionais produzam o máximo possível. Fale conosco no WhatsApp!</p>
    `,
    date: '05 de Agosto de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/dumptruck,construction?lock=9',
    category: 'Gestão da Obra',
  },
  {
    id: '10',
    slug: 'tipos-areia-qual-usar-acabamento-fundacao',
    title: 'Areia Fina, Média ou Grossa: Qual usar em cada etapa da obra?',
    excerpt: 'Aprenda rapidamente qual a aplicação correta para as diferentes granulometrias de areia na construção civil.',
    content: `
      <h2>Cada etapa pede uma areia diferente</h2>
      <p>A areia lavada é classificada pelo tamanho de seus grãos (granulometria). Usar o tipo errado pode comprometer o acabamento ou até a estrutura da construção.</p>

      <h3>Areia Fina</h3>
      <p>A areia fina possui grãos entre 0,06 e 0,2 mm. É extremamente macia ao toque.</p>
      <ul>
        <li><strong>Onde usar:</strong> O seu principal uso é na fase final da obra. É ideal para fabricação da massa de <strong>reboco fino</strong>, dando aquele acabamento liso e pronto para receber pintura.</li>
      </ul>

      <h3>Areia Média</h3>
      <p>Com grãos entre 0,2 e 2 mm, é a areia mais versátil (a "coringa") da construção.</p>
      <ul>
        <li><strong>Onde usar:</strong> É usada no assentamento de tijolos, blocos, muros, produção de argamassas colantes e fabricação de contrapisos.</li>
      </ul>

      <h3>Areia Grossa</h3>
      <p>A mais resistente das três, com grãos que vão de 2 a 4,8 mm.</p>
      <ul>
        <li><strong>Onde usar:</strong> É o pilar da fundação. Deve ser usada na mistura do concreto para sapatas, pilares, lajes, vigas e pisos de alta resistência. Não deve ser usada para acabamentos, pois deixa a superfície muito áspera.</li>
      </ul>

      <h2>Ainda com dúvidas?</h2>
      <p>Nós temos um guia super interativo! <a href="/qual-areia-usar">Acesse nossa ferramenta "Qual areia usar?"</a>, informe qual etapa da obra você está executando, e o sistema lhe dirá exatamente qual material comprar conosco aqui em Caldas Novas!</p>
    `,
    date: '10 de Agosto de 2026',
    author: 'Equipe MG Areias e Britas',
    image: 'https://loremflickr.com/1200/800/masonry,construction?lock=10',
    category: 'Dicas de Construção',
  }
];
