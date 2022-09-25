const linksLangs = [
  {
    link: "https://go.dev/",
    title: "GO Lang",
    desc: "Crie software rápido, confiável e eficiente em escala, Go é uma linguagem de programação de código aberto suportada pelo Google, Fácil de aprender e começar, Simultaneidade integrada e uma biblioteca padrão robusta, Ecossistema crescente de parceiros, comunidades e ferramentas",
  },
  {
    link: "https://www.php.net/",
    title: "PHP",
    desc: "Uma linguagem de script de uso geral popular que é especialmente adequada para desenvolvimento web. Rápido, flexível e pragmático, o PHP potencializa tudo, desde seu blog até os sites mais populares do mundo.",
  },
  {
    link: "https://dart.dev/",
    title: "Dart",
    desc: "Dart é uma linguagem otimizada para o cliente para aplicativos rápidos em qualquer plataforma",
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
    desc: "Node.js é um runtime JavaScript construído no mecanismo JavaScript V8 do Chrome. Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de back end escaláveis",
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
  "https://www.w3schools.com/",
  "https://developer.mozilla.org/",
  "https://www.lingq.com/pt/learn/en/web/library",
  "https://www.duolingo.com/learn",
];

const linksLibs = [
  "https://editorconfig.org/",
  "https://redux.js.org/",
  "https://styled-components.com/",
  "https://reactnavigation.org/",
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
];

const linksJobs = [
  "https://www.fiverr.com/",
  "https://vanhack.com/",
  "https://www.linkedin.com/feed/",
  "https://programathor.com.br/",
  "https://www.linkedin.com/",
  "https://www.getninjas.com.br/",
  "https://www.freelancer.com/",
  "https://www.upwork.com/freelance-jobs/",
  "https://www.workana.com/pt",
];

const links = [
  "https://graphql.org/",
  "https://docs.docker.com/",
  "https://www.docker.com/",
  "https://git-scm.com/",
  "https://html.spec.whatwg.org/multipage/",
  "https://react-native-async-storage.github.io/async-storage/",
  "https://www.virtualbox.org/",
  "https://www.postgresql.org/",
  "https://testing-library.com/",
  "https://pt.vecteezy.com/",
  "https://www.behance.net/",
  "https://caniuse.com/",
  "https://carbon.now.sh/",
  "https://coolbackgrounds.io/",
  "https://css-tricks.com/",
  "https://dribbble.com/",
  "https://exchangeratesapi.io/",
  "https://freebiesbug.com/",
  "https://rickandmortyapi.com/api/",
  "https://fonts.google.com/icons?selected=Material+Icons",
  "https://undraw.co/illustrations",
  "https://www.img2go.com/",
  "https://layouts1linha.desenvolvimentoparaweb.com/",
  "https://validator.w3.org/",
  "https://www.photopea.com/",
  "https://br.pinterest.com/",
  "https://www.figma.com/",
  "https://www.remove.bg/",
  "http://www.responsinator.com/",
  "https://color.adobe.com/pt/create/color-wheel",
  "https://jigsaw.w3.org/css-validator/",
  "https://simpleicons.org/",
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

let isLightTheme = true;

document.getElementById("btn-toggle-theme").innerHTML =
  "<img src='./images/icons/dark_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' />";

function toggleTheme() {
  if (isLightTheme) {
    document.getElementById("btn-toggle-theme").innerHTML =
      "<img src='./images/icons/light_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' style='color: #f1f1f1;' />";

    isLightTheme = false;

    document.getElementById("body").style.color = "#f1f1f1";
    document.getElementById("body").style.backgroundColor = "#333333";
    document.getElementById("main").style.borderColor = "#f1f1f1";
  } else {
    document.getElementById("btn-toggle-theme").innerHTML =
      "<img src='./images/icons/dark_mode_black_24dp.svg' alt='toggle theme'  height='30' width='30' />";

    isLightTheme = true;

    document.getElementById("body").style.color = "#333333";
    document.getElementById("body").style.backgroundColor = "#f1f1f1";
    document.getElementById("main").style.borderColor = "#333333";
  }
}
