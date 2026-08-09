import { execSync } from 'child_process';

/**
 * Returns the ISO 8601 datetime of the last git commit that touched filePath,
 * or null if git is unavailable or returns no output (e.g. shallow clone).
 * Callers must omit dateModified from schema when this returns null.
 * Call only from Server Components or generateMetadata — never from 'use client' files.
 */
export function getLastModified(filePath: string): string | null {
  try {
    const result = execSync(`git log --format=%aI -1 -- "${filePath}"`, {
      encoding: 'utf-8',
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    return result || null;
  } catch {
    return null;
  }
}
