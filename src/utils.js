export function trimTitle(title) {
  const words = title.split(' ');
  const trimmed = words.slice(0, 4);

  return trimmed.join(' ');
}
