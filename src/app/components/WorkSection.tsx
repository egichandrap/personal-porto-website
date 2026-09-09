const projects = [
  {
    name: "POS-Backend",
    type: "Backend System",
    description:
      "Point-of-sale backend designed with Clean Architecture and DDD, iterated across major releases toward production readiness: checkout runs as an atomic PostgreSQL transaction with bulk inventory updates and automatic rollback, and sessions use JWT with role-based access control plus a token blacklist that survives restarts. A QR table-ordering flow lets guests scan, order, and track their order end-to-end while staff manage tables and sales reports from an admin dashboard. Repository implementations are swappable, with thread-safe in-memory versions used for testing.",
    tags: ["Go", "PostgreSQL", "Clean Architecture", "DDD", "JWT", "RBAC"],
    link: "https://github.com/egichandrap/POS-Backend",
  },
  {
    name: "errx",
    type: "Go Library",
    description:
      "A go-gettable error-handling library for Go: typed error codes, wrapping with metadata, and multi-error aggregation in a framework-agnostic core. Transport-specific behavior is isolated in adapters — HTTP for net/http, Gin, Echo, Chi, and Fiber, plus gRPC interceptors — with optional Zap/Logrus logging and OpenTelemetry middleware, so applications depend on the core without pulling in any framework. Ships with per-framework examples, tests, and CI/release pipelines.",
    tags: ["Go", "Library Design", "gRPC", "HTTP Adapters", "OpenTelemetry", "Zap/Logrus"],
    link: "https://github.com/egichandrap/errx",
  },
  {
    name: "opsdoctor",
    type: "CLI / DevOps Tooling",
    description:
      "A diagnostic CLI (Go + Cobra) that automates the health checks engineers repeat during incidents: network and API latency checks, TLS certificate inspection (issuer, protocol, cipher, expiry warnings), slow-query log analysis with thresholds and top-offender summaries, Spring Boot version checks that flag known CVE risk, and YAML-driven health checks across multiple microservices. Installable with a single go install, with JSON output for scripting and automation.",
    tags: ["Go", "Cobra", "CLI", "DevOps/SRE", "TLS", "Log Analysis"],
    link: "https://github.com/egichandrap/opsdoctor",
  },
  {
    name: "CATTY",
    type: "Backend Service",
    description:
      "Computer Assisted Test System and Teaching — an enterprise-scale online examination platform I authored and maintain for VELIA Labs: built in Go to handle 10,000 concurrent users with sub-200ms response times, with comprehensive anti-cheat mechanisms, secure sessions, and reliable autosave protecting exam integrity. Includes automated scoring with real-time ranking, multi-type question banks with bulk operations, and analytics dashboards.",
    tags: ["Go", "High Concurrency", "Anti-Cheat", "Real-time Scoring"],
    link: null,
  },
  {
    name: "financial-planner",
    type: "CLI / Test-Driven",
    description:
      "A personal finance CLI built test-first with Go: income and expense tracking, Indonesian PPh 21 income-tax estimation across tax statuses (TK/0, K/1, K/2), savings-target planning, and loan installment calculation. Used as a deliberate exercise in applying test-driven development to a Go codebase.",
    tags: ["Go", "CLI", "TDD"],
    link: "https://github.com/egichandrap/financial-planner",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12 scroll-mt-20"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Work
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Open-source projects I have built:
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
              {project.type}
            </p>
            <div className="flex justify-between items-center mb-3 gap-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap"
                >
                  View on GitHub ↗
                </a>
              ) : (
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  Private repository
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
