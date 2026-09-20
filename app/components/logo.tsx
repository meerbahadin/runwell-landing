"use client";

import Image from "next/image";

/**
 * The wordmark. On a one-page site `<Link href="/">` is a no-op — Next treats
 * it as a same-route navigation and nothing scrolls — so this scrolls to the
 * top itself, honouring reduced motion.
 */
export function Logo({
  size,
  className = "",
}: {
  size: number;
  className?: string;
}) {
  return (
    // A real <a href="/"> on purpose: it is the correct no-JS fallback, and
    // <Link> would be a no-op here since this is the only route.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/"
      aria-label="Runwell, back to top"
      className={`flex items-center gap-2 tracking-[-0.03em] transition-opacity hover:opacity-70 ${className}`}
      onClick={(e) => {
        // Let modified clicks (new tab, download) behave normally.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        // `html` already sets scroll-behavior, which covers reduced motion.
        window.scrollTo({ top: 0 });
        // Belt and braces for browsers that ignore the options form.
        document.documentElement.scrollTop = 0;
        history.replaceState(null, "", "/");
      }}
    >
      <Image
        src="/app-icon-dark.png"
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="block"
        priority={size > 20}
      />
      Runwell
    </a>
  );
}
