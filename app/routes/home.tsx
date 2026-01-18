import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Tracking System" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}


export default function Home() {
  const { auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
        navigate('/auth?next=/');
    }
  }, [auth.isAuthenticated]);


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>AI Resume Tracking System</h1>
        <h2>
          Get your resume reviewed by AI and take the first step towards
          your dream job!
        </h2>
        </div>

      {resumes.length > 0 && (
        <div className="resume-section flex flex-wrap justify-center gap-4 md:gap-6 py-12 px-4">
          {resumes.map(resume => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
        )}
        </section>
  </main>;
} 

