const giftFinderData = {
  person: {
    men: {
      label: "Men",
      budget: {
        under25: { href: "articles/best-gifts-for-men-under-25.html", label: "Best Gifts for Men Under $25" },
        under50: { href: "articles/best-gifts-for-men-under-50.html", label: "Best Gifts for Men Under $50" },
        under100: { href: "articles/best-gifts-for-men-under-100.html", label: "Best Gifts for Men Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-birthday-gifts-for-dads.html", label: "Best Birthday Gifts for Dads" },
        christmas: { href: "articles/best-christmas-gifts-for-men.html", label: "Best Christmas Gifts for Men" },
        fathersday: { href: "articles/best-fathers-day-gifts-for-dads-who-have-everything.html", label: "Best Father’s Day Gifts for Dads Who Have Everything" },
        lastminute: { href: "articles/best-last-minute-gifts-for-men.html", label: "Best Last-Minute Gifts for Men" }
      },
      fallback: { href: "articles/best-gifts-for-men-under-50.html", label: "Best Gifts for Men Under $50" }
    },
    women: {
      label: "Women",
      budget: {
        under50: { href: "articles/best-gifts-for-women-under-50.html", label: "Best Gifts for Women Under $50" },
        under100: { href: "articles/best-gifts-for-women-under-100.html", label: "Best Gifts for Women Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-women-under-50.html", label: "Best Gifts for Women Under $50" },
        christmas: { href: "articles/best-gifts-for-women-under-100.html", label: "Best Gifts for Women Under $100" },
        lastminute: { href: "articles/best-gifts-for-women-under-50.html", label: "Best Gifts for Women Under $50" }
      },
      fallback: { href: "articles/best-gifts-for-women-under-50.html", label: "Best Gifts for Women Under $50" }
    },
    moms: {
      label: "Moms",
      budget: {
        under50: { href: "articles/best-birthday-gifts-for-moms.html", label: "Best Birthday Gifts for Moms" },
        under100: { href: "articles/best-mothers-day-gifts-for-moms.html", label: "Best Mother’s Day Gifts for Moms" }
      },
      occasion: {
        birthday: { href: "articles/best-birthday-gifts-for-moms.html", label: "Best Birthday Gifts for Moms" },
        mothersday: { href: "articles/best-mothers-day-gifts-for-moms.html", label: "Best Mother’s Day Gifts for Moms" },
        christmas: { href: "articles/best-birthday-gifts-for-moms.html", label: "Best Birthday Gifts for Moms" },
        lastminute: { href: "articles/best-mothers-day-gifts-for-moms.html", label: "Best Mother’s Day Gifts for Moms" }
      },
      fallback: { href: "articles/best-birthday-gifts-for-moms.html", label: "Best Birthday Gifts for Moms" }
    },
    dads: {
      label: "Dads",
      budget: {
        under25: { href: "articles/best-gifts-for-men-under-25.html", label: "Best Gifts for Men Under $25" },
        under50: { href: "articles/best-birthday-gifts-for-dads.html", label: "Best Birthday Gifts for Dads" },
        under100: { href: "articles/best-gifts-for-men-under-100.html", label: "Best Gifts for Men Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-birthday-gifts-for-dads.html", label: "Best Birthday Gifts for Dads" },
        fathersday: { href: "articles/best-fathers-day-gifts-for-dads-who-have-everything.html", label: "Best Father’s Day Gifts for Dads Who Have Everything" },
        christmas: { href: "articles/best-christmas-gifts-for-men.html", label: "Best Christmas Gifts for Men" },
        lastminute: { href: "articles/best-last-minute-gifts-for-men.html", label: "Best Last-Minute Gifts for Men" }
      },
      fallback: { href: "articles/best-birthday-gifts-for-dads.html", label: "Best Birthday Gifts for Dads" }
    },
    husbands: {
      label: "Husbands",
      budget: {
        under50: { href: "articles/best-gifts-for-men-under-50.html", label: "Best Gifts for Men Under $50" },
        under100: { href: "articles/best-gifts-for-men-under-100.html", label: "Best Gifts for Men Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-birthday-gifts-for-husbands.html", label: "Best Birthday Gifts for Husbands" },
        anniversary: { href: "articles/best-personalized-gifts-for-husbands.html", label: "Best Personalized Gifts for Husbands" },
        christmas: { href: "articles/best-christmas-gifts-for-men.html", label: "Best Christmas Gifts for Men" },
        lastminute: { href: "articles/best-last-minute-gifts-for-men.html", label: "Best Last-Minute Gifts for Men" }
      },
      fallback: { href: "articles/best-birthday-gifts-for-husbands.html", label: "Best Birthday Gifts for Husbands" }
    },
    wives: {
      label: "Wives",
      budget: {
        under50: { href: "articles/best-gifts-for-wives.html", label: "Best Gifts for Wives" },
        under100: { href: "articles/best-anniversary-gifts-for-wives.html", label: "Best Anniversary Gifts for Wives" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-wives.html", label: "Best Gifts for Wives" },
        anniversary: { href: "articles/best-anniversary-gifts-for-wives.html", label: "Best Anniversary Gifts for Wives" },
        christmas: { href: "articles/best-gifts-for-wives.html", label: "Best Gifts for Wives" },
        lastminute: { href: "articles/best-gifts-for-wives.html", label: "Best Gifts for Wives" }
      },
      fallback: { href: "articles/best-gifts-for-wives.html", label: "Best Gifts for Wives" }
    },
    boyfriends: {
      label: "Boyfriends",
      budget: {
        under50: { href: "articles/best-gifts-for-men-under-50.html", label: "Best Gifts for Men Under $50" },
        under100: { href: "articles/best-gifts-for-men-under-100.html", label: "Best Gifts for Men Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-men-under-50.html", label: "Best Gifts for Men Under $50" },
        anniversary: { href: "articles/best-anniversary-gifts-for-boyfriends.html", label: "Best Anniversary Gifts for Boyfriends" },
        christmas: { href: "articles/best-christmas-gifts-for-men.html", label: "Best Christmas Gifts for Men" },
        lastminute: { href: "articles/best-last-minute-gifts-for-men.html", label: "Best Last-Minute Gifts for Men" }
      },
      fallback: { href: "articles/best-anniversary-gifts-for-boyfriends.html", label: "Best Anniversary Gifts for Boyfriends" }
    },
    girlfriends: {
      label: "Girlfriends",
      budget: {
        under50: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" },
        under100: { href: "articles/best-gifts-for-women-under-100.html", label: "Best Gifts for Women Under $100" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" },
        anniversary: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" },
        christmas: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" },
        lastminute: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" }
      },
      fallback: { href: "articles/best-gifts-for-girlfriends.html", label: "Best Gifts for Girlfriends" }
    },
    friends: {
      label: "Friends",
      budget: {
        under25: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" },
        under50: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" },
        under100: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" },
        christmas: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" },
        lastminute: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" }
      },
      fallback: { href: "articles/best-gifts-for-friends.html", label: "Best Gifts for Friends" }
    },
    coworkers: {
      label: "Coworkers",
      budget: {
        under25: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" },
        under50: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" },
        under100: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" }
      },
      occasion: {
        birthday: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" },
        christmas: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" },
        lastminute: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" }
      },
      fallback: { href: "articles/best-gifts-for-coworkers.html", label: "Best Gifts for Coworkers" }
    }
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

const state = {
  person: null,
  budget: null,
  occasion: null
};

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

function getResult() {
  if (!state.person) return null;
  const personData = giftFinderData.person[state.person];
  if (!personData) return null;
  if (state.occasion && personData.occasion[state.occasion]) return personData.occasion[state.occasion];
  if (state.budget && personData.budget[state.budget]) return personData.budget[state.budget];
  return personData.fallback;
}

function updateFinder() {
  const personWrap = document.getElementById("finder-person-options");
  const budgetWrap = document.getElementById("finder-budget-options");
  const occasionWrap = document.getElementById("finder-occasion-options");
  const resultBox = document.getElementById("finder-result");
  const summary = document.getElementById("finder-summary");

  renderOptions(
    personWrap,
    Object.entries(giftFinderData.person).map(([id, data]) => ({ id, label: data.label })),
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

  const personLabel = state.person ? giftFinderData.person[state.person].label : "someone";
  const budgetLabel = state.budget ? giftFinderData.budgetOptions.find((o) => o.id === state.budget)?.label : "any budget";
  const occasionLabel = state.occasion ? giftFinderData.occasionOptions.find((o) => o.id === state.occasion)?.label : "any occasion";

  summary.textContent = `Step by step: shopping for ${personLabel}, around ${budgetLabel}, for ${occasionLabel}.`;

  const result = getResult();
  if (!result) {
    resultBox.innerHTML = '<p><strong>Your best match will appear here.</strong> Start with Step 1, then optionally narrow by budget and occasion.</p>';
    return;
  }

  resultBox.innerHTML = `
    <p><strong>Best matching guide:</strong></p>
    <h3><a class="card-link" href="${result.href}">${result.label}</a></h3>
    <p>Use this guide first, then explore related links on that page for more options.</p>
    <a class="button button-primary" href="${result.href}">Open this guide</a>
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
