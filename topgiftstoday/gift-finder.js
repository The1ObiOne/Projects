const giftFinderData = {
  people: {
    men: {
      label: "Men",
      primary: "articles/best-gifts-for-men-under-50.html",
      budget: {
        under25: "articles/best-gifts-for-men-under-25.html",
        under50: "articles/best-gifts-for-men-under-50.html",
        under100: "articles/best-gifts-for-men-under-100.html"
      },
      occasion: {
        birthday: "articles/best-birthday-gifts-for-dads.html",
        christmas: "articles/best-christmas-gifts-for-men.html",
        fathersday: "articles/best-fathers-day-gifts-for-dads-who-have-everything.html",
        lastminute: "articles/best-last-minute-gifts-for-men.html"
      },
      extra: [
        "articles/best-tech-gifts-for-men.html",
        "articles/best-gifts-for-men-under-100.html"
      ]
    },
    women: {
      label: "Women",
      primary: "articles/best-gifts-for-women-under-50.html",
      budget: {
        under50: "articles/best-gifts-for-women-under-50.html",
        under100: "articles/best-gifts-for-women-under-100.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-women-under-50.html",
        christmas: "articles/best-gifts-for-women-under-100.html",
        lastminute: "articles/best-gifts-for-women-under-50.html"
      },
      extra: [
        "articles/best-gifts-for-women-under-100.html",
        "articles/best-gifts-for-friends.html"
      ]
    },
    moms: {
      label: "Moms",
      primary: "articles/best-birthday-gifts-for-moms.html",
      budget: {
        under50: "articles/best-birthday-gifts-for-moms.html",
        under100: "articles/best-mothers-day-gifts-for-moms.html"
      },
      occasion: {
        birthday: "articles/best-birthday-gifts-for-moms.html",
        mothersday: "articles/best-mothers-day-gifts-for-moms.html",
        christmas: "articles/best-birthday-gifts-for-moms.html",
        lastminute: "articles/best-mothers-day-gifts-for-moms.html"
      },
      extra: [
        "articles/best-gifts-for-women-under-50.html",
        "articles/best-gifts-for-women-under-100.html"
      ]
    },
    dads: {
      label: "Dads",
      primary: "articles/best-birthday-gifts-for-dads.html",
      budget: {
        under25: "articles/best-gifts-for-men-under-25.html",
        under50: "articles/best-birthday-gifts-for-dads.html",
        under100: "articles/best-gifts-for-men-under-100.html"
      },
      occasion: {
        birthday: "articles/best-birthday-gifts-for-dads.html",
        fathersday: "articles/best-fathers-day-gifts-for-dads-who-have-everything.html",
        christmas: "articles/best-christmas-gifts-for-men.html",
        lastminute: "articles/best-last-minute-gifts-for-men.html"
      },
      extra: [
        "articles/best-funny-gifts-for-dads.html",
        "articles/best-gifts-for-men-under-50.html"
      ]
    },
    husbands: {
      label: "Husbands",
      primary: "articles/best-birthday-gifts-for-husbands.html",
      budget: {
        under50: "articles/best-gifts-for-men-under-50.html",
        under100: "articles/best-gifts-for-men-under-100.html"
      },
      occasion: {
        birthday: "articles/best-birthday-gifts-for-husbands.html",
        anniversary: "articles/best-personalized-gifts-for-husbands.html",
        christmas: "articles/best-christmas-gifts-for-men.html",
        lastminute: "articles/best-last-minute-gifts-for-men.html"
      },
      extra: [
        "articles/best-personalized-gifts-for-husbands.html",
        "articles/best-tech-gifts-for-men.html"
      ]
    },
    wives: {
      label: "Wives",
      primary: "articles/best-gifts-for-wives.html",
      budget: {
        under50: "articles/best-gifts-for-wives.html",
        under100: "articles/best-anniversary-gifts-for-wives.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-wives.html",
        anniversary: "articles/best-anniversary-gifts-for-wives.html",
        christmas: "articles/best-gifts-for-wives.html",
        lastminute: "articles/best-gifts-for-wives.html"
      },
      extra: [
        "articles/best-anniversary-gifts-for-wives.html",
        "articles/best-gifts-for-women-under-100.html"
      ]
    },
    boyfriends: {
      label: "Boyfriends",
      primary: "articles/best-anniversary-gifts-for-boyfriends.html",
      budget: {
        under50: "articles/best-gifts-for-men-under-50.html",
        under100: "articles/best-gifts-for-men-under-100.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-men-under-50.html",
        anniversary: "articles/best-anniversary-gifts-for-boyfriends.html",
        christmas: "articles/best-christmas-gifts-for-men.html",
        lastminute: "articles/best-last-minute-gifts-for-men.html"
      },
      extra: [
        "articles/best-tech-gifts-for-men.html",
        "articles/best-gifts-for-men-under-100.html"
      ]
    },
    girlfriends: {
      label: "Girlfriends",
      primary: "articles/best-gifts-for-girlfriends.html",
      budget: {
        under50: "articles/best-gifts-for-girlfriends.html",
        under100: "articles/best-gifts-for-women-under-100.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-girlfriends.html",
        anniversary: "articles/best-gifts-for-girlfriends.html",
        christmas: "articles/best-gifts-for-girlfriends.html",
        lastminute: "articles/best-gifts-for-girlfriends.html"
      },
      extra: [
        "articles/best-gifts-for-wives.html",
        "articles/best-gifts-for-women-under-50.html"
      ]
    },
    friends: {
      label: "Friends",
      primary: "articles/best-gifts-for-friends.html",
      budget: {
        under25: "articles/best-gifts-for-friends.html",
        under50: "articles/best-gifts-for-friends.html",
        under100: "articles/best-gifts-for-friends.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-friends.html",
        christmas: "articles/best-gifts-for-friends.html",
        lastminute: "articles/best-gifts-for-friends.html"
      },
      extra: [
        "articles/best-gifts-for-coworkers.html",
        "articles/best-gifts-for-women-under-50.html"
      ]
    },
    coworkers: {
      label: "Coworkers",
      primary: "articles/best-gifts-for-coworkers.html",
      budget: {
        under25: "articles/best-gifts-for-coworkers.html",
        under50: "articles/best-gifts-for-coworkers.html",
        under100: "articles/best-gifts-for-coworkers.html"
      },
      occasion: {
        birthday: "articles/best-gifts-for-coworkers.html",
        christmas: "articles/best-gifts-for-coworkers.html",
        lastminute: "articles/best-gifts-for-coworkers.html"
      },
      extra: [
        "articles/best-gifts-for-friends.html",
        "articles/best-last-minute-gifts-for-men.html"
      ]
    }
  },
  labels: {
    "articles/best-gifts-for-men-under-25.html": "Best Gifts for Men Under $25",
    "articles/best-gifts-for-men-under-50.html": "Best Gifts for Men Under $50",
    "articles/best-gifts-for-men-under-100.html": "Best Gifts for Men Under $100",
    "articles/best-birthday-gifts-for-dads.html": "Best Birthday Gifts for Dads",
    "articles/best-fathers-day-gifts-for-dads-who-have-everything.html": "Best Father’s Day Gifts for Dads Who Have Everything",
    "articles/best-last-minute-gifts-for-men.html": "Best Last-Minute Gifts for Men",
    "articles/best-tech-gifts-for-men.html": "Best Tech Gifts for Men",
    "articles/best-funny-gifts-for-dads.html": "Best Funny Gifts for Dads",
    "articles/best-birthday-gifts-for-husbands.html": "Best Birthday Gifts for Husbands",
    "articles/best-personalized-gifts-for-husbands.html": "Best Personalized Gifts for Husbands",
    "articles/best-christmas-gifts-for-men.html": "Best Christmas Gifts for Men",
    "articles/best-gifts-for-women-under-50.html": "Best Gifts for Women Under $50",
    "articles/best-gifts-for-women-under-100.html": "Best Gifts for Women Under $100",
    "articles/best-birthday-gifts-for-moms.html": "Best Birthday Gifts for Moms",
    "articles/best-mothers-day-gifts-for-moms.html": "Best Mother’s Day Gifts for Moms",
    "articles/best-gifts-for-wives.html": "Best Gifts for Wives",
    "articles/best-anniversary-gifts-for-wives.html": "Best Anniversary Gifts for Wives",
    "articles/best-anniversary-gifts-for-boyfriends.html": "Best Anniversary Gifts for Boyfriends",
    "articles/best-gifts-for-girlfriends.html": "Best Gifts for Girlfriends",
    "articles/best-gifts-for-friends.html": "Best Gifts for Friends",
    "articles/best-gifts-for-coworkers.html": "Best Gifts for Coworkers"
  },
  budgetOptions: [
    { id: "under25", label: "Under $25" },
    { id: "under50", label: "Under $50" },
    { id: "under100", label: "Under $100" }
  ],
  occasionOptions: [
    { id: "birthday", label: "Birthday" },
    { id: "anniversary", label: "Anniversary" },
    { id: "mothersday", label: "Mother’s Day" },
    { id: "fathersday", label: "Father’s Day" },
    { id: "christmas", label: "Christmas" },
    { id: "lastminute", label: "Last-Minute" }
  ]
};

const state = { person: null, budget: null, occasion: null };

function renderOptions(container, items, selected, onClick) {
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `finder-option${selected === item.id ? " is-selected" : ""}`;
    button.textContent = item.label;
    button.addEventListener("click", () => onClick(item.id));
    container.appendChild(button);
  });
}

function pushUnique(list, href) {
  if (href && !list.includes(href)) list.push(href);
}

function buildResults() {
  if (!state.person) return [];
  const person = giftFinderData.people[state.person];
  if (!person) return [];

  const results = [];
  const occasionMatch = state.occasion ? person.occasion[state.occasion] : null;
  const budgetMatch = state.budget ? person.budget[state.budget] : null;

  if (occasionMatch) pushUnique(results, occasionMatch);
  if (budgetMatch && budgetMatch !== occasionMatch) pushUnique(results, budgetMatch);
  pushUnique(results, person.primary);
  person.extra.forEach((href) => pushUnique(results, href));

  return results.slice(0, 3).map((href, index) => ({
    href,
    label: giftFinderData.labels[href] || href,
    rank: index === 0 ? "Best match" : index === 1 ? "Strong backup" : "Another good option"
  }));
}

function updateFinder() {
  const personWrap = document.getElementById("finder-person-options");
  const budgetWrap = document.getElementById("finder-budget-options");
  const occasionWrap = document.getElementById("finder-occasion-options");
  const resultBox = document.getElementById("finder-result");
  const summary = document.getElementById("finder-summary");

  renderOptions(
    personWrap,
    Object.entries(giftFinderData.people).map(([id, data]) => ({ id, label: data.label })),
    state.person,
    (id) => {
      state.person = id;
      updateFinder();
    }
  );
  renderOptions(budgetWrap, giftFinderData.budgetOptions, state.budget, (id) => {
    state.budget = id;
    updateFinder();
  });
  renderOptions(occasionWrap, giftFinderData.occasionOptions, state.occasion, (id) => {
    state.occasion = id;
    updateFinder();
  });

  if (!state.person) {
    summary.textContent = "Step by step: choose a person to get started.";
    resultBox.innerHTML = '<p><strong>Your best match will appear here.</strong> Start with Step 1, then optionally narrow by budget and occasion.</p>';
    return;
  }

  const personLabel = giftFinderData.people[state.person].label;
  const budgetLabel = state.budget ? giftFinderData.budgetOptions.find((o) => o.id === state.budget)?.label : "any budget";
  const occasionLabel = state.occasion ? giftFinderData.occasionOptions.find((o) => o.id === state.occasion)?.label : "any occasion";
  summary.textContent = `Step by step: shopping for ${personLabel}, around ${budgetLabel}, for ${occasionLabel}.`;

  const results = buildResults();
  if (!results.length) {
    resultBox.innerHTML = '<p><strong>No match yet.</strong> Start with Step 1 and we will guide you from there.</p>';
    return;
  }

  resultBox.innerHTML = `
    <p><strong>Recommended guides:</strong></p>
    <div class="link-cloud">
      ${results
        .map(
          (result) => `
            <div class="finder-match-card">
              <p class="eyebrow">${result.rank}</p>
              <h3><a class="card-link" href="${result.href}">${result.label}</a></h3>
              <a class="button button-primary" href="${result.href}">Open guide</a>
            </div>
          `
        )
        .join("")}
    </div>
    <p>Tip: if the first result is close but not perfect, try one of the backup guides too.</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const reset = document.getElementById("finder-reset");
  if (!reset) return;
  reset.addEventListener("click", () => {
    state.person = null;
    state.budget = null;
    state.occasion = null;
    updateFinder();
  });
  updateFinder();
});
