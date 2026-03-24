import { Sidebar } from "./Sidebar";

export default function QuizModulePage({ onBack, onNavigate }: { onBack?: () => void; onNavigate?: (view: any) => void }) {
  const currentModule = {
    title: "Module 2 — Structurer une offre",
    totalQuestions: 5,
  };

  const questions = [
    {
      id: 1,
      question: "Quel est l’objectif principal d’une promesse ?",
      options: [
        "Être vague pour attirer tout le monde",
        "Être claire et spécifique",
        "Parler uniquement de soi",
        "Ajouter du jargon complexe",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Une bonne offre doit être :",
      options: [
        "Confuse",
        "Difficile à comprendre",
        "Claire et orientée résultat",
        "Très longue sans structure",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar activeItem="Mes formations" onNavigate={onNavigate} />

        <main className="flex-1 px-8 py-8">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quiz du module</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">{currentModule.title}</h1>
              <p className="mt-2 text-base text-slate-500">
                Répondez aux questions pour valider ce module.
              </p>
            </header>

            <div className="space-y-6">
              {questions.map((q, index) => (
                <div key={q.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold">
                      Question {index + 1}
                    </h2>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      {index + 1}/{questions.length}
                    </span>
                  </div>

                  <p className="mb-6 text-base font-medium text-slate-800">
                    {q.question}
                  </p>

                  <div className="grid gap-3">
                    {q.options.map((option, i) => (
                      <button
                        key={i}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm font-medium transition hover:border-slate-900 hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-bold text-slate-400">
                            {String.fromCharCode(65 + i)}
                          </div>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={onBack}
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Quitter
              </button>
              <button className="rounded-2xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Valider le quiz
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
