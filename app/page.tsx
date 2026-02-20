export default function Home() {
  return (
    <main className="min-h-screen bg neutral-950 text-white px-6 py20">
      <div className="max-w-4x1 mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5x1 font bold leading-tight mb-6">
            I build structured digital products for creatives.
          </h1>

          <p className="text x1 text-neutral-400 max-w-2x1">
            Finance professional and creative operator designing and shipping systems at the intersection of technology, performance, and execution.
          </p>
        </section>

        {/* What I'm Building */}
        <section className="mb-20">
          <h2 className="text-2x1 font-semibold mb-6">
            Currently Building
          </h2>
          <div className="space-y-4 text-neutral-300">
            <p> Product 1</p>
            <p> Product 2</p>
            <p> Product 3</p>
          </div>
        </section>

        {/* Creative Dimension */}
        <section>
          <h2 className="text-2x1 font semibold mb-6">Creative Execution</h2>
          
          <p className="text-neutral-400 max-w-2x1">
            Visual storytelling and media production as an extension of product thinking - structured creativity, not random output.
          </p>
        </section>
      </div>
    </main>
  );
}