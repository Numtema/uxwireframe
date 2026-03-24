import { useState, useRef } from "react";
import StudentDashboardWireframe from "./components/StudentDashboardWireframe";
import LessonResourceView from "./components/LessonResourceView";
import CourseDetailPage from "./components/CourseDetailPage";
import LessonPlayerPage from "./components/LessonPlayerPage";
import QuizModulePage from "./components/QuizModulePage";
import CertificatesPage from "./components/CertificatesPage";
import PaymentHistoryPage from "./components/PaymentHistoryPage";
import CheckoutCoursePage from "./components/CheckoutCoursePage";
import CourseCatalogPage from "./components/CourseCatalogPage";
import ProfileSettingsPage from "./components/ProfileSettingsPage";
import NotificationsPage from "./components/NotificationsPage";
import SupportPage from "./components/SupportPage";
import MessagingPage from "./components/MessagingPage";

export default function App() {
  const [view, setView] = useState<"dashboard" | "lesson" | "course" | "player" | "quiz" | "certificates" | "payment-history" | "checkout" | "catalog" | "profile" | "notifications" | "support" | "messaging">("dashboard");
  const componentRef = useRef<HTMLDivElement>(null);

  const exportHTML = () => {
    if (componentRef.current) {
      const htmlContent = componentRef.current.innerHTML;
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${view}-export.html`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <StudentDashboardWireframe onViewCourse={() => setView("course")} onNavigate={setView} />;
      case "lesson":
        return <LessonResourceView onBack={() => setView("player")} onNavigate={setView} />;
      case "course":
        return <CourseDetailPage onBack={() => setView("dashboard")} onStart={() => setView("player")} onNavigate={setView} />;
      case "player":
        return <LessonPlayerPage onOpenQuiz={() => setView("quiz")} onOpenResources={() => setView("lesson")} onNavigate={setView} />;
      case "quiz":
        return <QuizModulePage onBack={() => setView("player")} onNavigate={setView} />;
      case "certificates":
        return <CertificatesPage onBackToDashboard={() => setView("dashboard")} onNavigate={setView} />;
      case "payment-history":
        return <PaymentHistoryPage onBackToDashboard={() => setView("dashboard")} onNavigate={setView} />;
      case "checkout":
        return <CheckoutCoursePage onBackToDashboard={() => setView("dashboard")} onNavigate={setView} />;
      case "catalog":
        return <CourseCatalogPage onNavigate={setView} />;
      case "profile":
        return <ProfileSettingsPage onNavigate={setView} />;
      case "notifications":
        return <NotificationsPage onNavigate={setView} />;
      case "support":
        return <SupportPage onNavigate={setView} />;
      case "messaging":
        return <MessagingPage onNavigate={setView} />;
      default:
        return <StudentDashboardWireframe onViewCourse={() => setView("course")} onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
        <h1 className="text-xl font-bold">UI Converter</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView("dashboard")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "dashboard" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setView("lesson")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "lesson" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Lesson View
          </button>
          <button
            onClick={() => setView("course")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "course" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Course Detail
          </button>
          <button
            onClick={() => setView("player")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "player" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Lesson Player
          </button>
          <button
            onClick={() => setView("quiz")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "quiz" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Quiz Module
          </button>
          <button
            onClick={() => setView("certificates")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "certificates" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Certificates
          </button>
          <button
            onClick={() => setView("payment-history")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "payment-history" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            History
          </button>
          <button
            onClick={() => setView("checkout")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "checkout" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Checkout
          </button>
          <button
            onClick={() => setView("catalog")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "catalog" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Catalog
          </button>
          <button
            onClick={() => setView("profile")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "profile" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Profile
          </button>
          <button
            onClick={() => setView("notifications")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "notifications" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Notifications
          </button>
          <button
            onClick={() => setView("support")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "support" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Support
          </button>
          <button
            onClick={() => setView("messaging")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === "messaging" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Messages
          </button>
          <button
            onClick={exportHTML}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Export HTML
          </button>
        </div>
      </header>
      <div ref={componentRef}>
        {renderView()}
      </div>
    </div>
  );
}
