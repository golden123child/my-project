const endpointGroups = [
  {
    domain: 'Auth',
    endpoints: [
      ['POST', '/api/v1/auth/login', 'Issue JWT + refresh token'],
      ['POST', '/api/v1/auth/refresh', 'Rotate refresh token pair'],
      ['POST', '/api/v1/auth/logout', 'Invalidate active session']
    ]
  },
  {
    domain: 'Projects',
    endpoints: [
      ['GET', '/api/v1/projects', 'Paginated project catalogue'],
      ['GET', '/api/v1/projects/:slug', 'Project architecture dossier'],
      ['POST', '/api/v1/projects', 'Create project record (admin)']
    ]
  },
  {
    domain: 'Insights',
    endpoints: [
      ['GET', '/api/v1/blog', 'Filtered post query'],
      ['GET', '/api/v1/blog/:slug', 'Article detail'],
      ['GET', '/api/v1/search', 'Global content retrieval']
    ]
  }
];

const architectureNotes = [
  'Middleware chain: auth -> rate-limit -> validation -> controller -> observability.',
  'Caching strategy: stale-while-revalidate for catalogue data, TTL on search facets.',
  'Error model: typed error envelope with request id and trace marker.',
  'Monitoring: endpoint SLO dashboard, 95th percentile latency threshold alerts.'
];

export default function ApiDocumentationPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">API Documentation Hub</h1>
        <p className="max-w-4xl text-slate-600 dark:text-slate-300">
          REST-first contract documentation with operational architecture notes for reliability, scalability, and security.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {endpointGroups.map((group) => (
          <article key={group.domain} className="glass rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{group.domain}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {group.endpoints.map(([method, path, desc]) => (
                <li key={path} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                  <p className="font-mono text-xs text-electric">{method} {path}</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{desc}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="glass rounded-2xl p-5">
        <h3 className="text-xl font-semibold">Architecture and Runtime Policies</h3>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {architectureNotes.map((note) => (
            <li key={note} className="rounded-lg border border-slate-200 p-3 text-sm dark:border-slate-700">
              {note}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
