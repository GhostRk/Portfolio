import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section id="certifications" className="c-space section-spacing">
      <div className="max-w-7xl mx-auto">
        <p className="text-aqua text-sm font-medium tracking-[0.2em] uppercase">
          Credentials
        </p>
        <h2 className="text-heading mt-2">Certifications</h2>
        <p className="subtext mt-3 max-w-2xl">
          Professional credentials across finance, security, compliance, and software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="group flex flex-col min-h-56 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-navy to-indigo transition duration-300 hover:-translate-y-1 hover:border-aqua/50"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-aqua/10 text-aqua text-xl" aria-hidden="true">
                ✓
              </div>
              <p className="mt-5 text-sm text-aqua">{certification.issuer}</p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                {certification.title}
              </h3>
              <a
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-auto pt-6 text-sm font-medium text-neutral-300 transition-colors group-hover:text-aqua focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua rounded"
                aria-label={`View ${certification.title} certificate`}
              >
                View certificate <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
