import "./globals.css";

const builds = [
  {
    title: "Life OS",
    desc: "A private performance tracker with an IG-style feed for habit, goals, and reflections.",
    status: "MVP in development",
    tags:["Next.js", "TypeScript", "Supabase(soon)"],
  },
  {
    title: "Creator Systems",
    desc: "Tool that simplify editorial and production workflows for creators, with a focus on project management and content planning.",
    status: "Planning and design phase",
    tags:["Next.js", "UI System", "Storage (soon), File Sharing(soon)"],
  },
  {
    title: "Financial Planning Automation",
    desc: "Automating financial planning and analysis for individuals and small businesses, providing insights and actionable recommendations.",
    status: "Planning and design phase",
    tags:["Python", "FastAPI (soon)", "Automation"],
  }
];

export default function Home() {
  return (
    <main className="min-h-screen cinematic-bg text-white">
      <div className="max-w-6x1 mx-auto px-8 py-32">
       
       {/* Top Bar */}
        <header className="flex items-center justify-between mb-16">
          <div className="text-sm tracking wide text neutral-400">
            Brandon Scott
          </div>
          <nav className="flex gap-6 text-sm text-white/70">
            <a className="text-white/70 hover:text-white transition" href="#Home">Home</a>
            <a className="text-white/70 hover:text-white transition" href="#Builds">Builds</a>
            <a className="text-white/70 hover:text-white transition" href="#Creative">Creative</a>
            <a className="text-white/70 hover:text-white transition" href="#Contact">Contact</a>
          </nav>
        </header>
      
        {/* Hero Section */}
        <section className="mb-20 max-w-3x1">

          <p className="text-sm text-neutral-400 mb-4">
            Finance • Systems • Product • Creative Execution
          </p>

          <h1 className="text-6x1 md:text-8x1 font-semibold leading-[1.05] tracking-tight mb-8">
            I design and ship{" "}
            <span className="bg-linear-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent"> structured digital products for creatives.</span>
          </h1>

          <p className="text x1 text-neutral-400 max-w-2x1">
            I build tools that optimize creative workflows and financial systems-then document the process. Product-first, creative aware, and execution-driven.
          </p>

          <div className="flex flex-wrap gap 3 mt-8">
            <a href="#builds" 
            className="px-4 py-2 rounded-x1 bg-white text-black text-sm font-medium hover:opacity-90">
              See what I&#39;m building
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-x1 border border-neutral-800 text-sm text-neutral-200 hover:border-neutral-600"
            >
              Contact
            </a>
          </div>
        </section>


      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-20" />



      {/* Builds */}
      <section id="builds" className="max-w-6x1">
         <div className="flex items-end justify betweengap-6 mb-8">
          <div>
            <h2 className="text-2x1 font-semibold tracking-tight mb-6">Currently Building </h2>
            <p className="text-neutral-400 mt-2">
              Active projects with clear outcomes -build for real use.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {builds.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-6 hover:border-white/20 hover:bg-black/35 hover:shadow-[0_0_60px_rgba(99,102,241,0.14)] transition duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full border border-neutral-800 text-neutral-300">
                  {b.status}
                </span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {b.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-lg bg-neutral-900 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Creative */}
        <section id="creative" className="mb-14">
          <h2 className="text-2x1 font semibold mb-3">Creative Execution</h2>
          <p className="mt-6 text-sm text-white/50 italic">
            Photography and videography are part of my product thinking: composition, 
            pacing, storytelling, and taste. I don&#39;t separate creativity from systems-
            I use it to ship better work.
          </p>

          <div className="mt-6 rounded-2x1 border border-neutral-900 p-5 bg-neutral-950">
              <p className="text-sm text-neutral-400">
                Next Upgrade: I&#39;ll add a &quot;Visual Work&quot; grid with 6-9 selects and short captions
                (no client overwhelm, just proof of creative execution and taste).
              </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-9">
          <div className="h-px bg-neutral-400 my-12"/>
          <h2 className="text-2x1 font semibold mb-3">Contact</h2>
          <p className="text-neutral-400 mb-6">
            Feel free to reach out if you have any questions or want to collaborate!
          </p>

          <div className="flex flexwrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-x1 border border-neutral-800 hover:border-neutral-600 transition" href="#">
              Email (add later)
            </a>
            <a className="px-4 py-2 rounded-x1 border border-neutral-800 hover:border-neutral-600 transition" href="#">
              GitHub
            </a>
            <a className="px-4 py-2 rounded-x1 border border-neutral-800 hover:border-neutral-600 transition" href="#">
              TikTok / IG
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}