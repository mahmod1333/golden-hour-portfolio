import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import PortfolioShell from './portfolio-shell';

export default async function HomePage() {
  const source = await readFile(resolve(process.cwd(), 'index.html'), 'utf8');
  const body = source.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  const customStyles = source.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? '';

  if (!body) {
    throw new Error('Could not find the portfolio body in index.html.');
  }

  const scripts = [...body.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
  const markup = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <PortfolioShell markup={markup} scripts={scripts} />
    </>
  );
}
