function checkQuiz() {
  const answers = { q1: 'b', q2: 'b', q3: 'b', q4: 'a' };
  let score = 0;

  for (let i = 1; i <= 4; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === answers[`q${i}`]) {
      score++;
    }
  }

  const result = document.getElementById('result');

  if (score === 4) {
    result.textContent = "Perfect! 🌧️ You're a Rainwater Expert!";
    result.style.color = "green";
  } else if (score >= 3) {
    result.textContent = `Great job! ${score}/4 – Almost there!`;
    result.style.color = "#e67e22";
  } else {
    result.textContent = `${score}/4 – Keep learning about this important topic!`;
    result.style.color = "#c0392b";
  }
}