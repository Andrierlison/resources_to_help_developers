const linksLangs = [
  {
    link: "https://go.dev/",
    title: "GO Lang",
    desc: "Crie software rápido, confiável e eficiente em escala, Go é uma linguagem de programação de código aberto suportada pelo Google, Fácil de aprender e começar, Simultaneidade integrada e uma biblioteca padrão robusta, Ecossistema crescente de parceiros, comunidades e ferramentas.",
  },
  {
    link: "https://www.php.net/",
    title: "PHP",
    desc: "Uma linguagem de script de uso geral popular que é especialmente adequada para desenvolvimento web. Rápido, flexível e pragmático, o PHP potencializa tudo, desde seu blog até os sites mais populares do mundo.",
  },
  {
    link: "https://dart.dev/",
    title: "Dart",
    desc: "Dart é uma linguagem otimizada para o cliente para aplicativos rápidos em qualquer plataforma.",
  },
  {
    link: "https://www.python.org/",
    title: "Python",
    desc: "Python é uma linguagem de programação que permite trabalhar mais rapidamente e integrar seus sistemas com mais eficiência.",
  },
  {
    link: "https://www.typescriptlang.org/",
    title: "TypeScript",
    desc: "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
  },
  {
    link: "https://nodejs.org/en/",
    title: "Node JS",
    desc: "Node.js é um runtime JavaScript construído no mecanismo JavaScript V8 do Chrome. Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de back end escaláveis.",
  },
  {
    link: "https://www.mysql.com/",
    title: "MySQL",
    desc: "MySQL é o banco de dados de código aberto mais popular do mundo. Com seu desempenho, confiabilidade e facilidade de uso comprovados, o MySQL tornou-se a principal escolha de banco de dados para aplicativos baseados na Web, usados por propriedades da Web de alto perfil, incluindo Facebook, Twitter, YouTube, Yahoo! e muitos mais.",
  },
];

const linksFrameworks = [
  "https://reactnative.dev/",
  "https://docs.expo.dev/index.html",
  "https://pt-br.reactjs.org/",
  "https://flutter.dev/docs",
  "https://nextjs.org/",
  "https://getbootstrap.com/",
];

const linksCourses = [
  {
    link: "https://www.w3schools.com/",
    title: "W3schools",
    desc: "Aprenda a codificar com o maior site de desenvolvedores web do mundo.",
  },
  {
    link: "https://developer.mozilla.org/",
    title: "Developer Mozilla (MDN)",
    desc: "Recursos para desenvolvedores, por desenvolvedores, documentando tecnologias da web, incluindo CSS, HTML e JavaScript, desde 2005.",
  },
  {
    link: "https://www.lingq.com/pt/learn/en/web/library",
    title: "Lingq",
    desc: "Aprenda idiomas com conteúdo que você adora. A maneira rápida, divertida e eficaz de aprender.",
  },
  {
    link: "https://www.duolingo.com/learn",
    title: "Duolingo",
    desc: "Aprender com o Duolingo é divertido, e pesquisas mostram que funciona! Com lições rápidas e pequenas, você ganhará pontos e desbloqueará novos níveis enquanto adquire habilidades de comunicação do mundo real.",
  },
];

const linksLibs = [
  "https://editorconfig.org/",
  "https://redux.js.org/",
  "https://styled-components.com/",
  "https://reactnavigation.org/",
  "https://react-native-async-storage.github.io/async-storage/",
  "https://testing-library.com/",
  "https://sass-lang.com/",
  "https://lesscss.org/",
  "https://styled-icons.js.org/",
  "https://gulpjs.com/",
  "https://eslint.org/",
  "https://fontawesome.com/",
  "https://jestjs.io/",
  "https://prettier.io/",
  "https://realm.io/",
];

const linksLinuxDistros = [
  "https://archlinux.org/",
  "https://www.debian.org/",
  "https://www.gentoo.org/",
  "https://getfedora.org/en/workstation/",
  "https://ubuntu.com/download/desktop",
  "https://www.deepin.org/en/download/",
  "https://manjaro.org/download/",
];

const linksJobs = [
  {
    link: "https://www.fiverr.com/",
    title: "Fiverr",
    desc: "Plataforma para oferecer serviços.",
  },
  {
    link: "https://www.linkedin.com/",
    title: "Linkedin",
    desc: "A maior rede profissional do mundo com mais de 850 milhões de membros em mais de 200 países e territórios em todo o mundo.",
  },
  {
    link: "https://vanhack.com/",
    title: "Vanhack",
    desc: "Consiga o emprego dos seus sonhos, no exterior e remoto.",
  },
  {
    link: "https://programathor.com.br/",
    title: "Programathor",
    desc: "Tenha acesso a diversas oportunidades para desenvolvedores. Encontre a vaga para programador(a) Front-End, Back-End, Mobile ou Full Stack que você estava procurando.",
  },
  {
    link: "https://www.getninjas.com.br/",
    title: "Getninjas",
    desc: "O GetNinjas é um aplicativo disponível para celulares Android e iOS que tem como objetivo conectar clientes a profissionais. São mais de 500 tipos de serviços que você pode contratar ou fornecer!.",
  },

  {
    link: "https://www.freelancer.com/",
    title: "Freelancer",
    desc: "O maior mercado de freelancers e crowdsourcing do mundo.",
  },

  {
    link: "https://www.upwork.com/freelance-jobs/",
    title: "Upwork",
    desc: "Encontre os melhores trabalhos freelance, navegue pelos trabalhos publicados no Upwork ou entre e crie um perfil gratuito para encontrar o trabalho que você gosta de fazer.",
  },
  {
    link: "https://www.workana.com/pt",
    title: "Workana",
    desc: "Somos a maior plataforma de trabalho freelance e remoto da América Latina, marcando tendência em nível global com uma forte presença no Sudeste Asiático. Desde 2012 revolucionamos o mundo do trabalho com nossa proposta.",
  },
];

const linksImages = [
  "https://www.figma.com/",
  "https://www.photopea.com/",
  "https://www.img2go.com/",
  "https://www.remove.bg/",
  "https://br.pinterest.com/",
  "https://coolbackgrounds.io/",
  "https://simpleicons.org/",
  "https://pt.vecteezy.com/",
  "https://www.behance.net/",
  "https://fonts.google.com/icons?selected=Material+Icons",
  "https://dribbble.com/",
  "https://undraw.co/illustrations",
  "https://br.pinterest.com/",
];

const linksFreeAPIs = [
  "https://rickandmortyapi.com/api/",
  "https://exchangeratesapi.io/",
];

const links = [
  "https://graphql.org/",
  "https://docs.docker.com/",
  "https://www.docker.com/",
  "https://git-scm.com/",
  "https://html.spec.whatwg.org/multipage/",
  "https://www.virtualbox.org/",
  "https://www.postgresql.org/",
  "https://caniuse.com/",
  "https://carbon.now.sh/",
  "https://css-tricks.com/",
  "https://freebiesbug.com/",
  "https://layouts1linha.desenvolvimentoparaweb.com/",
  "https://validator.w3.org/",
  "http://www.responsinator.com/",
  "https://color.adobe.com/pt/create/color-wheel",
  "https://jigsaw.w3.org/css-validator/",
  "https://www.uplabs.com/",
  "https://app.netlify.com/teams/andrierlison/sites",
  "https://coderadio.freecodecamp.org/",
  "https://github.com/",
];

function mountLinks(list) {
  let htmlData = "";

  for (const key in list) {
    if (typeof list[key] == "object") {
      htmlData = `<a target="_blank" href="${list[key].link}">
                    <li>
                      <h3>${list[key].title}</h3>
                      <p>${list[key].desc}</p>
                    </li>
                  </a>${htmlData}`;
    } else {
      htmlData = `<a target="_blank" href="${list[key]}"><li>${list[key]}</li></a>${htmlData}`;
    }
  }

  return htmlData;
}

document.getElementById("links-langs").innerHTML = mountLinks(linksLangs);
document.getElementById("links-courses").innerHTML = mountLinks(linksCourses);
document.getElementById("links-frameworks").innerHTML =
  mountLinks(linksFrameworks);
document.getElementById("links-linux-distros").innerHTML =
  mountLinks(linksLinuxDistros);
document.getElementById("links-libs").innerHTML = mountLinks(linksLibs);
document.getElementById("links-jobs").innerHTML = mountLinks(linksJobs);
document.getElementById("links-images").innerHTML = mountLinks(linksImages);
document.getElementById("links-free-apis").innerHTML =
  mountLinks(linksFreeAPIs);

let isLightTheme = true;

document.getElementById("btn-toggle-theme").innerHTML =
  "<img src='./images/icons/dark_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' />";

function toggleTheme() {
  if (isLightTheme) {
    document.getElementById("btn-toggle-theme").innerHTML =
      "<img src='./images/icons/light_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' style='color: #f1f1f1;' />";

    const darkClass = "container-dark container-base";

    document.getElementById("header").className = darkClass;
    document.getElementById("main").className = darkClass;
    document.getElementById("footer").className = darkClass;

    document.getElementById("body").className = "dark-body";

    isLightTheme = false;
  } else {
    document.getElementById("btn-toggle-theme").innerHTML =
      "<img src='./images/icons/dark_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' />";

    const lightClass = "container-light container-base";

    document.getElementById("header").className = lightClass;
    document.getElementById("main").className = lightClass;
    document.getElementById("footer").className = lightClass;

    document.getElementById("body").className = "light-body";

    isLightTheme = true;
  }
}
