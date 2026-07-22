export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Matías Andrés Navia Barrientos
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/cv/CV_MNB_2026.pdf"
            download
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Descargar CV
          </a>
          <a
            href="https://github.com/navia20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/matías-navia-barrientos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:matinavia.063@gmail.com"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
