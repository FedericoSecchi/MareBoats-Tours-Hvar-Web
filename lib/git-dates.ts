import { execSync } from 'child_process';

/**
 * Returns the ISO 8601 date of the last git commit that touched filePath.
 * Falls back to today's date if git is unavailable (e.g. shallow clone without unshallow).
 * Call only from Server Components or generateMetadata — never from 'use client' files.
 */
export function getLastModified(filePath: string): string {
  try {
    const result = execSync(`git log --format=%aI -1 -- "${filePath}"`, {
      encoding: 'utf-8',
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    return result || new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}
