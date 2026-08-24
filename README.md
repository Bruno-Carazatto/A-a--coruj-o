# 🦉 Açaí Corujão — Landing Page

Landing page responsiva desenvolvida para o **Açaí Corujão**, negócio local de venda de açaí, sorvetes e milk-shakes.

O projeto foi criado com foco em apresentar o cardápio de forma simples, permitir que o cliente personalize seu próprio açaí e facilitar o contato para realização do pedido.

A interface foi desenvolvida com identidade visual inspirada no cardápio da marca, utilizando tons de roxo, verde-limão e rosa.

---

## 📸 Preview

> Adicione aqui uma captura de tela da página depois que o projeto estiver publicado.

```text
assets/
└── preview.webp
```

Depois, utilize:

```html
<img src="assets/preview.webp" alt="Preview da landing page Açaí Corujão">
```

---

## 🚀 Funcionalidades

- 📱 Layout totalmente responsivo
- 🦉 Identidade visual personalizada
- 🍧 Apresentação dos principais tamanhos de açaí
- 🥤 Exibição de outros produtos do cardápio
- 🍓 Montagem personalizada do açaí
- ✅ Seleção de até 4 adicionais gratuitos
- ➕ Seleção de adicionais especiais
- 💰 Cálculo automático do valor estimado
- 🧾 Resumo do pedido em tempo real
- 📝 Campo para observações
- 📲 Envio do pedido diretamente pelo WhatsApp
- 🛵 Acesso ao cardápio no iFood
- ⏰ Exibição dos horários de atendimento
- 🎞️ Ticker automático de benefícios no mobile
- 🔗 Links para redes sociais e plataformas de delivery
- 📌 Botão de pedido fixo em dispositivos móveis

---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5** — estrutura e semântica
- **CSS3** — identidade visual, responsividade e animações
- **JavaScript** — interação e montagem dos pedidos
- **Bootstrap 5** — grid e componentes responsivos
- **Bootstrap Icons** — ícones da interface
- **Google Fonts** — Outfit e DM Sans

---

## 🎨 Identidade visual

A interface utiliza uma combinação de cores baseada na comunicação visual do Açaí Corujão.

| Cor | Hex | Utilização |
|---|---|---|
| Roxo escuro | `#16071f` | Fundo principal |
| Roxo | `#431151` | Seções e elementos |
| Roxo claro | `#692079` | Destaques |
| Verde-limão | `#a8ef18` | CTAs e elementos principais |
| Rosa | `#ff218c` | Detalhes e destaques |
| Branco | `#ffffff` | Textos principais |

### Tipografia

**Outfit**

Utilizada principalmente nos títulos e elementos de destaque.

**DM Sans**

Utilizada nos textos, descrições e demais conteúdos da interface.

---

## 🧩 Principais seções

### Hero

Apresentação inicial do Açaí Corujão com chamadas para montar o pedido ou acessar o cardápio no iFood.

### Faixa de benefícios

Apresenta rapidamente os principais diferenciais:

- Açaí Corujão
- Escolha seus adicionais
- Delivery
- Açaí, sorvete e milk-shake

Em dispositivos móveis, a faixa funciona como um **ticker automático**.

### Cardápio

Apresentação visual dos principais tamanhos disponíveis e seus respectivos preços.

### Monte seu Açaí

Área interativa onde o cliente pode:

1. escolher o tamanho;
2. selecionar até quatro adicionais gratuitos;
3. escolher adicionais especiais;
4. adicionar uma observação;
5. visualizar o valor estimado;
6. enviar o pedido pelo WhatsApp.

### Outros produtos

Área dedicada a outras opções disponíveis no estabelecimento, como açaí na garrafa e milk-shake.

### Horários

Apresentação dos horários de funcionamento e acesso rápido ao WhatsApp.

---

## 📲 Montagem do pedido

O JavaScript acompanha as escolhas feitas pelo usuário e atualiza automaticamente o resumo do pedido.

O cliente consegue visualizar:

```text
Tamanho
Adicionais gratuitos
Adicionais especiais
Observações
Valor estimado
```

Ao finalizar, o sistema prepara a mensagem com as informações selecionadas para envio pelo **WhatsApp**.

Não é necessário cadastro, login ou banco de dados.

---

## 📱 Responsividade

A interface foi preparada para diferentes tamanhos de tela:

- Smartphones
- Tablets
- Notebooks
- Desktops
- Monitores maiores

Alguns elementos possuem comportamentos específicos no mobile, incluindo:

- menu responsivo;
- botão de pedido fixo;
- ticker automático;
- reorganização dos grids;
- cards adaptáveis;
- formulário otimizado para telas menores.

---

## 📂 Estrutura do projeto

```text
acai-corujao/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── interface/
│   │   ├── favicon.png
│   │   ├── acai-hero.webp
│   │   ├── icon-ifood.webp
│   │   └── 99-food-logo.svg
│   │
│   └── produtos/
│       └── ...
│
├── assets/
│   └── preview.webp
│
└── README.md
```

---

## ▶️ Como executar

Como o projeto utiliza apenas tecnologias front-end, não é necessário configurar servidor ou banco de dados.

Clone o repositório:

```bash
git clone URL-DO-REPOSITORIO
```

Entre na pasta:

```bash
cd acai-corujao
```

Depois abra:

```text
index.html
```

Também é possível utilizar uma extensão como **Live Server** durante o desenvolvimento.

---

## 🌐 Publicação

Por ser um projeto estático, ele pode ser publicado facilmente utilizando o **GitHub Pages**.

Depois de publicado, adicione aqui:

```text
🔗 Demo: URL-DO-GITHUB-PAGES
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como uma aplicação prática de front-end para um cenário comercial real.

Além da construção visual da landing page, o desenvolvimento trabalhou conceitos como:

- organização e semântica HTML;
- componentização visual com CSS;
- responsividade;
- manipulação do DOM;
- eventos com JavaScript;
- validação de escolhas do usuário;
- experiência do usuário;
- integração com WhatsApp;
- adaptação da interface para diferentes dispositivos.

---

## 🔒 Privacidade

A landing page não possui cadastro de usuários, autenticação ou armazenamento próprio de dados pessoais.

O contato e o envio do pedido são direcionados para serviços externos utilizados pelo estabelecimento.

Caso o projeto evolua futuramente para armazenar pedidos, dados de clientes, endereços, pagamentos ou outras informações pessoais, será necessário revisar os requisitos de segurança e adequação à **LGPD**.

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Bruno Carazatto**.

GitHub: `Bruno-Carazatto`

---

## 📄 Licença

Projeto desenvolvido para fins de portfólio e demonstração.

Logotipos, nomes comerciais, imagens e demais elementos pertencentes às respectivas marcas não são abrangidos por uma eventual licença do código-fonte.

---

⭐ Se este projeto foi útil como referência, considere deixar uma estrela no repositório.
