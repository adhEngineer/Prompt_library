const form = document.getElementById('prompt-form');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');

function toBullets(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `- ${line}`)
    .join('\n');
}

function toNumbered(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, idx) => `${idx + 1}) ${line}`)
    .join('\n');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const role = document.getElementById('role').value.trim();
  const context = toBullets(document.getElementById('context').value);
  const objective = document.getElementById('objective').value.trim();
  const constraints = toNumbered(document.getElementById('constraints').value);
  const output = toBullets(document.getElementById('output').value);

  result.textContent = `[ROL]\nEști ${role}.\n\n[CONTEXT]\nContext relevant:\n${context}\n\n[OBIECTIV]\nObiectivul tău este să ${objective}.\n\n[CONSTRÂNGERI]\nRespectă următoarele reguli:\n${constraints}\n\n[FORMAT OUTPUT]\nRăspunde EXCLUSIV în formatul:\n${output}`;
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(result.textContent);
    copyBtn.textContent = 'Copiat!';
    setTimeout(() => { copyBtn.textContent = 'Copiază'; }, 1200);
  } catch {
    copyBtn.textContent = 'Eroare copy';
  }
});

resetBtn.addEventListener('click', () => {
  form.reset();
  result.textContent = 'Completează formularul și apasă „Generează prompt”.';
});
