const data = {
  biologia: {
    Provas: [
      { titulo: "Conteúdo 01 - Nota: 8.8", descricao: "Estudamos ecossistemas e cadeias alimentares." },
      { titulo: "Conteúdo 02 - Nota: 9.2", descricao: "Avaliação sobre genética e hereditariedade." },
      { titulo: "Conteúdo 03 - Nota: 7.3", descricao: "Tema: Citologia e funcionamento celular." }
    ],
    Relatórios: [
      { titulo: "Tema 01", descricao: "Relatório sobre dissecação de anfíbios." },
      { titulo: "Tema 02", descricao: "Pesquisa de campo em bioma cerrado." },
      { titulo: "Tema 03", descricao: "Experimentos de fotossíntese em laboratório." }
    ],
    Atividades: [
      { titulo: "Atividade prática", descricao: "Montagem de células com material reciclável." },
      { titulo: "Debate teórico", descricao: "Discussão sobre bioética e clonagem." }
    ]
  },

  matematica: {
    Provas: [
      { titulo: "Conteúdo 01 - Nota: 9.0", descricao: "Equações do 1º grau." },
      { titulo: "Conteúdo 02 - Nota: 7.5", descricao: "Funções e gráficos." }
    ],
    Relatórios: [
      { titulo: "Tema 01", descricao: "Aplicações da matemática no cotidiano." }
    ],
    Atividades: [
      { titulo: "Resolução de problemas", descricao: "Problemas matemáticos do ENEM." }
    ]
  },

  fisica: {
    Provas: [
      { titulo: "Conteúdo 01 - Nota: 8.0", descricao: "Cinemática e leis de Newton." }
    ],
    Relatórios: [
      { titulo: "Tema 01", descricao: "Experimento com plano inclinado." }
    ],
    Atividades: [
      { titulo: "Simulação", descricao: "Simulação digital sobre forças." }
    ]
  },

  quimica: {
    Provas: [
      { titulo: "Conteúdo 01 - Nota: 8.5", descricao: "Tabela periódica e ligações químicas." }
    ],
    Relatórios: [],
    Atividades: []
  }
};

function loadSubject(subjectKey) {
  const container = document.getElementById("subject-content");
  container.innerHTML = "";
  container.classList.remove("hidden");

  const subject = data[subjectKey];

  for (const secao in subject) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = secao;
    card.appendChild(title);

    subject[secao].forEach(item => {
      const task = document.createElement("div");
      task.classList.add("task");
      task.textContent = item.titulo;

      const desc = document.createElement("div");
      desc.classList.add("task-description");
      desc.textContent = item.descricao;

      task.addEventListener("click", () => {
        desc.style.display = desc.style.display === "block" ? "none" : "block";
      });

      card.appendChild(task);
      card.appendChild(desc);
    });

    container.appendChild(card);
  }

  window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
}
