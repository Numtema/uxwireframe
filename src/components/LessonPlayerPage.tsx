import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { 
  Play, 
  FileText, 
  Headphones, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  MessageSquare, 
  StickyNote,
  ExternalLink,
  Volume2,
  Settings
} from "lucide-react";

export default function LessonPlayerPage({ onOpenQuiz, onOpenResources, onNavigate }: { onOpenQuiz?: () => void; onOpenResources?: () => void; onNavigate?: (view: any) => void }) {
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const currentModuleIndex = 1;
  const currentLessonIndex = 1;

  const modules = [
    {
      title: "Module 1 — Fondations du copywriting",
      completed: true,
      quizUnlocked: true,
      quizCompleted: true,
      lessons: [
        { title: "Introduction", type: "Vidéo", duration: "12 min", completed: true },
        { title: "Comprendre le marché", type: "Vidéo", duration: "18 min", completed: true },
        { title: "Identifier la douleur client", type: "Live", duration: "45 min", completed: true },
      ],
    },
    {
      title: "Module 2 — Structurer une offre",
      completed: false,
      quizUnlocked: false,
      quizCompleted: false,
      lessons: [
        { title: "Créer une promesse forte", type: "Vidéo", duration: "16 min", completed: true },
        { title: "Formuler la valeur", type: "Vidéo", duration: "14 min", completed: false, current: true },
        { title: "Éviter les objections", type: "Vidéo", duration: "20 min", completed: false },
      ],
    },
    {
      title: "Module 3 — Pages qui convertissent",
      completed: false,
      quizUnlocked: false,
      quizCompleted: false,
      lessons: [
        { title: "Hero section", type: "Vidéo", duration: "11 min", completed: false },
        { title: "Blocs de preuve", type: "Live", duration: "50 min", completed: false },
        { title: "Call-to-action", type: "Vidéo", duration: "13 min", completed: false },
      ],
    },
    {
      title: "Module 4 — Passer à l’action",
      completed: false,
      quizUnlocked: false,
      quizCompleted: false,
      lessons: [
        { title: "Checklist finale", type: "Vidéo", duration: "10 min", completed: false },
        { title: "Optimisation", type: "Vidéo", duration: "22 min", completed: false },
        { title: "Étude de cas", type: "Live", duration: "60 min", completed: false },
      ],
    },
  ];

  const currentLesson = modules[currentModuleIndex].lessons[currentLessonIndex];

  const resources = [
    { label: "Support PDF", type: "PDF", available: true },
    { label: "Version audio", type: "Audio", available: true },
    { label: "Lien live replay", type: "Live", available: false },
  ];

  const notes = [
    "La promesse doit être spécifique et crédible.",
    "Ne parle pas d'abord de toi, parle du résultat utilisateur.",
    "Une offre floue crée une conversion floue.",
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar activeItem="Mes formations" onNavigate={onNavigate} />

        <div className="flex flex-1 overflow-hidden">
          <aside className="flex w-[320px] shrink-0 flex-col border-r border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-5 py-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  NL
                </div>
                <div>
                  <p className="text-sm text-slate-500">Formation en cours</p>
                  <h1 className="text-lg font-semibold">Copywriting avancé</h1>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Progression globale</span>
                  <span className="font-semibold">38%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-slate-900" style={{ width: "38%" }} />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Modules & leçons
                </h2>
                <button className="text-xs font-semibold text-slate-500 hover:text-slate-900">
                  Tout réduire
                </button>
              </div>

              <div className="space-y-4">
                {modules.map((module, moduleIndex) => (
                  <div key={module.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <div className="border-b border-slate-200 bg-slate-50 px-4 py-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Module {moduleIndex + 1}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                            {module.title}
                          </h3>
                        </div>
                        <StatusPill
                          label={module.completed ? "Terminé" : moduleIndex === currentModuleIndex ? "En cours" : "À venir"}
                          variant={module.completed ? "success" : moduleIndex === currentModuleIndex ? "active" : "default"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 p-3">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const isCurrent = moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex;
                        return (
                          <button
                            key={lesson.title}
                            className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                              isCurrent
                                ? "border-slate-900 bg-slate-900 text-white"
                                : lesson.completed
                                ? "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <div
                                  className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                                    isCurrent
                                      ? "bg-white text-slate-900"
                                      : lesson.completed
                                      ? "bg-slate-900 text-white"
                                      : "bg-slate-100 text-slate-600"
                                  }`}
                                >
                                  {lesson.completed ? "✓" : lessonIndex + 1}
                                </div>
                                <div>
                                  <p className={`text-sm font-medium ${isCurrent ? "text-white" : "text-inherit"}`}>
                                    {lesson.title}
                                  </p>
                                  <p className={`mt-1 text-xs ${isCurrent ? "text-slate-300" : "text-slate-500"}`}>
                                    {lesson.type} • {lesson.duration}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}

                      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-3 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-800">Quiz du module</p>
                            <p className="mt-1 text-xs text-slate-500">
                              {module.quizCompleted
                                ? "Quiz validé"
                                : module.quizUnlocked
                                ? "Disponible"
                                : "Débloqué après les leçons"}
                            </p>
                          </div>
                          <button
                            onClick={onOpenQuiz}
                            className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                              module.quizUnlocked
                                ? "bg-slate-900 text-white"
                                : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            Quiz
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto px-8 py-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">
                  {modules[currentModuleIndex].title} <span className="mx-2">/</span> {currentLesson.title}
                </p>
                <h2 className="mt-1 text-3xl font-bold tracking-tight">{currentLesson.title}</h2>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Leçon précédente
                </button>
                <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Leçon suivante
                </button>
              </div>
            </div>

            <section className="mb-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge label={currentLesson.type} />
                  <Badge label={currentLesson.duration} subtle />
                  <Badge label="Module 2" subtle />
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[24px] bg-slate-900 shadow-inner ring-1 ring-slate-200">
                  {activeResource === "PDF" ? (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 p-8 text-center">
                      <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
                        <FileText className="h-12 w-12 text-slate-400" />
                      </div>
                      <h4 className="text-lg font-bold">Aperçu du support PDF</h4>
                      <p className="mt-2 text-sm text-slate-500 max-w-xs">
                        Le document "Structurer une offre.pdf" est prêt à être consulté.
                      </p>
                      <div className="mt-6 flex gap-3">
                        <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
                          Ouvrir dans un nouvel onglet
                        </button>
                        <button 
                          onClick={() => setActiveResource(null)}
                          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                        >
                          Retour à la vidéo
                        </button>
                      </div>
                    </div>
                  ) : activeResource === "Audio" ? (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-8 text-center text-white">
                      <div className="mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-white/10">
                        <Headphones className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">Écoute de la version audio</h4>
                      <p className="mt-2 text-sm text-slate-400">Leçon 4 : Structurer une offre</p>
                      
                      <div className="mt-8 w-full max-w-md">
                        <div className="mb-4 h-1.5 w-full rounded-full bg-white/10">
                          <div className="h-1.5 w-1/3 rounded-full bg-white" />
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                          <span>04:12</span>
                          <span>14:00</span>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-8">
                          <button className="text-white/60 hover:text-white transition">
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105">
                            <Play className="h-6 w-6 fill-current" />
                          </button>
                          <button className="text-white/60 hover:text-white transition">
                            <ChevronRight className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setActiveResource(null)}
                        className="mt-10 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition"
                      >
                        Retour au lecteur vidéo
                      </button>
                    </div>
                  ) : (
                    <div className="group relative flex h-full w-full items-center justify-center bg-slate-200">
                      <div className="absolute inset-0 bg-slate-900/10 transition group-hover:bg-slate-900/20" />
                      <button className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:scale-110">
                        <Play className="h-8 w-8 fill-current" />
                      </button>
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                          <Volume2 className="h-5 w-5" />
                          <span className="text-sm font-bold">00:00 / {currentLesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Settings className="h-5 w-5" />
                          <ExternalLink className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <MiniStat label="Type" value={currentLesson.type} />
                  <MiniStat label="Durée" value={currentLesson.duration} />
                  <MiniStat label="Statut" value="En cours" />
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold">À faire sur cette leçon</h3>
                <div className="mt-4 space-y-3">
                  <TaskItem label="Regarder la vidéo jusqu’au bout" done />
                  <TaskItem label="Télécharger le support PDF" />
                  <TaskItem label="Écouter la version audio" />
                  <TaskItem label="Prendre des notes" />
                </div>

                <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Marquer comme terminé
                </button>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
              <div className="space-y-6">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <TabButton label="Ressources" active onClick={onOpenResources} />
                    <TabButton label="Notes" />
                    <TabButton label="Discussion" />
                  </div>

                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <div
                        key={resource.label}
                        className="flex flex-col gap-3 rounded-2xl border border-slate-200 px-4 py-4 md:flex-row md:items-center md:justify-between transition hover:border-slate-300 hover:bg-slate-50/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                            {resource.type === "PDF" ? <FileText className="h-5 w-5" /> : resource.type === "Audio" ? <Headphones className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{resource.label}</p>
                            <p className="mt-0.5 text-xs font-medium text-slate-500">Format : {resource.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => resource.available && setActiveResource(resource.type)}
                            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                              resource.available
                                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                : "bg-slate-50 text-slate-300 cursor-not-allowed"
                            }`}
                          >
                            {resource.available ? "Aperçu" : "Indisponible"}
                          </button>
                          <button
                            disabled={!resource.available}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
                              resource.available
                                ? "bg-slate-900 text-white hover:opacity-90"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                            }`}
                          >
                            <Download className="h-3.5 w-3.5" />
                            {resource.available ? "Télécharger" : "Bloqué"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Description de la leçon</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Dans cette leçon, vous allez apprendre à donner une forme claire à votre offre.
                    L’objectif n’est pas de faire joli, mais de rendre la proposition compréhensible,
                    crédible et désirable pour la bonne audience.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Notes rapides</h3>
                  <div className="mt-4 space-y-3">
                    {notes.map((note) => (
                      <div key={note} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700">
                        {note}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                    Ajouter une note
                  </button>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Après cette leçon
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">Étape suivante</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Continuez avec “Éviter les objections”. Une fois toutes les leçons du module terminées,
                    le quiz du module sera débloqué automatiquement.
                  </p>
                  <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90">
                    Aller à la prochaine leçon
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatusPill({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "active" | "success";
}) {
  const styles = {
    default: "bg-slate-200 text-slate-600",
    active: "bg-slate-900 text-white",
    success: "bg-slate-900 text-white",
  };

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[variant]}`}>{label}</span>;
}

function Badge({ label, subtle = false }: { label: string; subtle?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        subtle ? "border border-slate-200 bg-white text-slate-600" : "bg-slate-900 text-white"
      }`}
    >
      {label}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function TaskItem({ label, done = false }: { label: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
          done ? "bg-slate-900 text-white" : "bg-white text-slate-500 ring-1 ring-slate-200"
        }`}
      >
        {done ? "✓" : "•"}
      </div>
      <p className="text-sm text-slate-700">{label}</p>
    </div>
  );
}

function TabButton({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
        active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}
