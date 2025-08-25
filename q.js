const questions = [
  {
    "question": "Choose the word most similar in meaning to 'resilient'.",
    "options": ["Rigid", "Flexible", "Fragile", "Weak"],
    "answer": 1,
    "explanation": "'Resilient' means able to recover quickly or adapt—'Flexible' is the closest synonym."
  },
  {
    "question": "Identify the error: 'Neither of the two boys have done their homework.'",
    "options": ["Neither of the two boys", "have", "done their homework", "No error"],
    "answer": 1,
    "explanation": "'Neither' is singular, so it should be 'has', not 'have'."
  },
  {
    "question": "Fill in the blank: 'The manager was not satisfied ___ his performance.'",
    "options": ["for", "by", "with", "on"],
    "answer": 2,
    "explanation": "The correct preposition is 'with' — 'satisfied with' is the standard phrase."
  },
  {
    "question": "Find the antonym of 'meticulous'.",
    "options": ["Careless", "Thorough", "Accurate", "Precise"],
    "answer": 0,
    "explanation": "'Meticulous' means very careful, so its antonym is 'Careless'."
  },
  {
    "question": "Choose the correct sentence.",
    "options": ["She do not like coffee.", "She does not likes coffee.", "She does not like coffee.", "She did not likes coffee."],
    "answer": 2,
    "explanation": "Correct subject-verb agreement: 'She does not like coffee.'"
  },
  {
    "question": "Choose the word most opposite in meaning to 'benevolent'.",
    "options": ["Kind", "Cruel", "Generous", "Compassionate"],
    "answer": 1,
    "explanation": "'Benevolent' means kind or well-meaning; 'Cruel' is the opposite."
  },
  {
    "question": "Choose the appropriate preposition: 'He is married ___ a doctor.'",
    "options": ["to", "with", "by", "of"],
    "answer": 0,
    "explanation": "'Married to' is the correct preposition to indicate a relationship."
  },
  {
    "question": "Find the error: 'Each student must submit their own work.'",
    "options": ["Each student", "must submit", "their own work", "No error"],
    "answer": 2,
    "explanation": "'Each' is singular, so use 'his or her' instead of 'their'."
  },
  {
    "question": "Choose the correct meaning of the idiom: 'To burn the midnight oil'.",
    "options": ["To waste time", "To work late at night", "To light a candle", "To plan a surprise"],
    "answer": 1,
    "explanation": "The idiom 'burn the midnight oil' means to work late into the night."
  },
  {
    "question": "Find the synonym of 'abstain'.",
    "options": ["Participate", "Indulge", "Refrain", "Support"],
    "answer": 2,
    "explanation": "'Abstain' means to refrain or hold back from doing something."
  },
  {
    "question": "Select the correct sentence.",
    "options": ["He was absent because he was ill.", "He was absent because of he was ill.", "He was absent due he was ill.", "He was absent for he was ill."],
    "answer": 0,
    "explanation": "'Because he was ill' is the correct reason clause."
  },
  {
    "question": "Choose the right word: 'The police is ___ the matter thoroughly.'",
    "options": ["investigating", "investigate", "investigates", "investigated"],
    "answer": 0,
    "explanation": "'The police' is treated as plural, but here 'is investigating' is grammatically correct in modern usage."
  },
  {
    "question": "Find the correct synonym for 'prolific'.",
    "options": ["Unproductive", "Creative", "Lazy", "Idle"],
    "answer": 1,
    "explanation": "'Prolific' means producing many works or results, i.e., creative or productive."
  },
  {
    "question": "Choose the correct form: 'Hardly had I reached the station ___ the train left.'",
    "options": ["than", "then", "when", "while"],
    "answer": 2,
    "explanation": "'Hardly... when' is the correct correlative conjunction."
  },
  {
    "question": "Select the sentence with correct usage of idiom: 'He let the cat out of the bag.'",
    "options": ["He dropped the cat.", "He spoiled everything.", "He revealed a secret.", "He ran away."],
    "answer": 2,
    "explanation": "'Let the cat out of the bag' means to reveal a secret unintentionally."
  },
  {
    "question": "Choose the word most similar in meaning to 'scrutinize'.",
    "options": ["Neglect", "Examine", "Ignore", "Pass"],
    "answer": 1,
    "explanation": "'Scrutinize' means to examine closely or in detail."
  },
  {
    "question": "Find the error: 'I prefer coffee than tea.'",
    "options": ["I prefer", "coffee", "than tea", "No error"],
    "answer": 2,
    "explanation": "'Prefer' is followed by 'to', not 'than' — correct usage: 'prefer coffee to tea'."
  },
  {
    "question": "Fill in the blank: 'He was accused ___ theft.'",
    "options": ["to", "with", "of", "for"],
    "answer": 2,
    "explanation": "The correct phrase is 'accused of' something."
  },
  {
    "question": "Find the antonym of 'hostile'.",
    "options": ["Friendly", "Aggressive", "Angry", "Unkind"],
    "answer": 0,
    "explanation": "'Hostile' means unfriendly or aggressive, so the antonym is 'Friendly'."
  },
  {
    "question": "Choose the correct sentence:",
    "options": ["The informations are accurate.", "The information is accurate.", "The information are accurate.", "Information is accurates."],
    "answer": 1,
    "explanation": "'Information' is an uncountable noun, so use 'is' with singular form."
  }
]

const quiz = document.getElementById('quiz');

questions.forEach((q, index) => {
  const qDiv = document.createElement('div');
  qDiv.className = 'question';

  const qTitle = document.createElement('h3');
  qTitle.textContent = `${index + 1}. ${q.question}`;
  qDiv.appendChild(qTitle);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      // Disable all buttons after selection
      const allButtons = optionsDiv.querySelectorAll('button');
      allButtons.forEach(b => b.disabled = true);

      if (i === q.answer) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
        allButtons[q.answer].classList.add('correct'); // show correct one too
      }

      explanationDiv.style.display = 'block';
    });
    optionsDiv.appendChild(btn);
  });

  const explanationDiv = document.createElement('div');
  explanationDiv.className = 'explanation';
  explanationDiv.textContent = "Explanation: " + q.explanation;

  qDiv.appendChild(optionsDiv);
  qDiv.appendChild(explanationDiv);

  quiz.appendChild(qDiv);
});
