# 👻 Sobrenatural

> **"Salvando pessoas, caçando coisas"** — Um site interativo dedicado à série Sobrenatural.

Um projeto web imersivo que celebra a série **Supernatural** com design atmosférico, animações assombradas e conteúdo interativo.

---

## 🎬 Sobre o Projeto

Este é um site não oficial criado como projeto escolar pelo **2º ano EMTI 1**, celebrando os 15 anos de Sobrenatural — uma das séries de fantasia e terror mais longevas da televisão americana.

O site combina **design escuro e imersivo** com elementos interativos para oferecer uma experiência única, incluindo:
- Sinopse e informações sobre as temporadas
- Catálogo de personagens
- Curiosidades e trivia sobre a série
- Quiz interativo
- Gerador de nomes para caçadores
- Bestiário de criaturas
- Mapa do universo Sobrenatural
- Maratona de episódios

---

## 🎨 Características Visuais

### Tema Escuro/Claro
- **Modo Escuro** (padrão): Design aterrorizante com tons de sangue, osso e enxofre
- **Modo Claro**: Tema alternativo mantendo a atmosfera
- Tema persiste entre sessões

### Efeitos Visuais
- 🕷️ Aranhas animadas que descem pela tela
- ✨ Partículas flutuantes (cinzas espectrais)
- 🌫️ Efeito de neblina e granulado de filme vintage
- ⚡ Ondas de choque ao interagir com o título
- 🔥 Enxame de criaturas (caveiras e fantasmas) ao clicar

### Navegação
- Menu responsivo com hamburger menu para mobile
- Barra de progresso de scroll
- Botão "Voltar ao Topo"
- Links de navegação rápida para cada seção

### Acessibilidade
- Suporte a teclado
- Atributos ARIA
- Link "Pular para o conteúdo"
- Controle de volume independente

---

## 📁 Estrutura do Projeto

```
sobrenatural/
├── index.html          # Página principal com toda a estrutura
├── style.css           # Estilos e animações
├── Scripts/
│   ├── script.js       # Lógica interativa e efeitos
│   └── animationTheme.js  # Gerenciamento de tema (claro/escuro)
└── README.md           # Este arquivo
```

---

## 🎯 Funcionalidades

### 1. **Navegação Interativa**
- Menu flutuante com acesso a todas as seções
- Links de ancoras para navegação rápida
- Menu responsivo para dispositivos móveis

### 2. **Tema Dinâmico**
- Toggle entre modo claro e escuro
- Preferência salva no localStorage
- Carregamento automático antes da renderização

### 3. **Efeitos Sonoros** (opcional)
- Toggle de som para interações
- Suporte a áudio (pronto para implementação)

### 4. **Seções de Conteúdo**
- **Sobre**: Descrição da série
- **Bestiário**: Catálogo de criaturas sobrenaturais
- **Sinopse**: Trama geral da série
- **Personagens**: Elenco principal e secundário
- **Temporadas**: Guia de todas as 15 temporadas
- **Curiosidades**: Trivia e fatos interessantes
- **Mapa**: Mapa interativo de locais importantes
- **Quiz**: Teste seus conhecimentos
- **Gerador**: Gerador de nomes para caçadores
- **Maratona**: Calculadora de tempo de maratona
- **Equipe**: Créditos do projeto

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Estilos, animações e responsividade
- **JavaScript Vanilla** — Interatividade e efeitos
- **Canvas API** — Renderização de partículas (aranhas)
- **localStorage** — Persistência de preferências

### Fontes Utilizadas
- **Nosifer** — Título principal (estilo assombrado)
- **Cinzel** — Headings (elegância clássica)
- **EB Garamond** — Corpo do texto (legibilidade)
- **Special Elite** — Elementos decorativos (efeito manual)
- **Bangers** — Acentos cômicos

---

## 🎮 Como Usar

### Acessar o Site
1. Abra o arquivo `index.html` em um navegador web
2. Navegue pelas seções usando o menu
3. Interaja com os elementos (clique no título para ver o enxame!)

### Personalizações

#### Mudar Tema
Clique no ícone de lua/sol no canto superior direito.

#### Ativar/Desativar Som
Clique no ícone de volume no canto superior direito.

#### Voltado ao Topo
Clique no botão de seta no canto inferior direito quando rolar a página.

---

## 🐛 Recursos Principais do Código

### `animationTheme.js`
Gerencia o sistema de tema automático:
- Detecta preferência do SO (prefers-color-scheme)
- Carrega tema salvo do localStorage
- Aplica tema ANTES de renderizar (evita flash)

### `script.js`
Implementa todos os efeitos e interações:
- **Aranhas**: Criação e animação de aranhas que caem
- **Partículas**: Enxame de criaturas ao clicar
- **Navegação**: Menu responsivo e barra de progresso
- **Trivia**: Exibição de curiosidades aleatórias

---

## 🎨 Paleta de Cores

### Modo Escuro
- **Void (Fundo)**: `#0b0906`
- **Blood (Sangue)**: `#8c1220`
- **Sulfur (Enxofre)**: `#d4aa2a`
- **Bone (Osso)**: `#e9dfbd`

### Modo Claro
Cores invertidas mantendo o contraste e acessibilidade.

---

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Experiência completa com menu permanente
- **Tablet**: Menu condensado, layout fluido
- **Mobile**: Menu hamburger, otimizado para toque

---

## 👥 Créditos

**Projeto Escolar** — 2º ano EMTI 1

Inspirado pela série televisiva **Supernatural** (2005-2020) da The CW, criada por Eric Kripke.

---

## ⚖️ Aviso Legal

Este é um projeto não oficial. Supernatural e seus personagens são propriedade da The CW, Eric Kripke e da Warner Bros. Este site é criado com fins educacionais e de entretenimento.

---

**"Família não é sangue — é quem fica quando a noite é longa."** 👿

---

Powered by Gabriel, M. Izabel & Luísa.
