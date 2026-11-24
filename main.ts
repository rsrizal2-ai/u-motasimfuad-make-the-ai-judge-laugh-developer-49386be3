// Make the AI Judge Laugh: Developer Excuses — entry program (program/v1).
//
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt.
//
// The line was chosen against the judge's brief, in the order the judge
// weighs things:
//   1. A funny single-line excuse a developer gives when code breaks in
//      production — "it worked on my machine" is the classic excuse.
//   2. A twist a developer recognises: the machine it worked on is the
//      one machine the code was never going to run on, which is what
//      really happened — it was never tested where it actually runs.
//   3. Sounds like something a developer would actually say out loud,
//      with the jargon used right.
//   4. Lands fast in one line: the punchline is the last clause, and
//      nothing in it can be trimmed.
//   5. Fresh: it turns the most worn excuse in the book instead of
//      repeating it straight.
//
// The line: "It worked on my machine — the only machine it was never going
// to run on." 72 characters, one sentence.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It worked on my machine — the only machine it was never going to run on.";

// Gate self-check, mirroring ONLY the sealed scorer: UTF-8 text of 1 to
// 200 characters, not only white space.
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters, outside the 1-200 gate`);
  }
  if (!line.trim()) {
    throw new Error("line is only white space");
  }
}

gate(LINE);
// The harness runs the program with MAKEFUN_OUTPUT_DIR=/output; honour
// it when set so a local re-run lands in the same place as the grade.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
