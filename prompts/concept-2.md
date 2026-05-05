# Concept 2 — Prompt Structurat (Context → Obiectiv → Constrângeri → Output)

## Când se folosește
Folosește acest concept atunci când ai nevoie de răspunsuri consistente, ușor de evaluat și comparat.

## Șablon
```text
[ROL]
Ești {rolul asistentului potrivit pentru task}.

[CONTEXT]
Context relevant:
- {fapt 1}
- {fapt 2}
- {fapt 3}

[OBIECTIV]
Obiectivul tău este să {rezultat clar și măsurabil}.

[CONSTRÂNGERI]
Respectă următoarele reguli:
1) {regulă de conținut}
2) {regulă de stil}
3) {regulă de lungime}
4) {ce să eviți}

[FORMAT OUTPUT]
Răspunde EXCLUSIV în formatul:
- Rezumat (max {N} rânduri)
- Pași recomandați
- Riscuri / Limitări
- Următorul pas concret
```

## Exemplu complet
```text
[ROL]
Ești consultant de productivitate.

[CONTEXT]
Context relevant:
- Lucrez full-time și am 90 min/zi pentru învățare.
- Vreau să învăț Python în 12 săptămâni.
- Sunt la nivel începător.

[OBIECTIV]
Obiectivul tău este să propui un plan realist pe 12 săptămâni.

[CONSTRÂNGERI]
Respectă următoarele reguli:
1) Include obiective săptămânale măsurabile.
2) Folosește limbaj simplu, non-tehnic.
3) Maximum 250 de cuvinte.
4) Nu recomanda resurse plătite.

[FORMAT OUTPUT]
Răspunde EXCLUSIV în formatul:
- Rezumat
- Plan pe săptămâni
- Riscuri / Limitări
- Primul task de azi
```

## Checklist rapid
- Obiectivul este măsurabil?
- Constrângerile sunt explicite?
- Formatul de răspuns este verificabil?
- Promptul previne interpretări multiple?
