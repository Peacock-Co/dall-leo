import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRamdomPrompt(prompt) {
  const ramdomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const ramdomPrompt = surpriseMePrompts[ramdomIndex];

  return ramdomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
