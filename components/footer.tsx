export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 px-6 py-8 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2">
        <p>© {new Date().getFullYear()} Wuraola Folajimi. Systems Architecture Portfolio Platform.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.</p>
      </div>
    </footer>
  );
}
