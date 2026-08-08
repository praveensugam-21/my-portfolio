// Shared mouse-tracked 3D tilt + glare interaction.
// Attach directly as onMouseMove / onMouseLeave — no refs or hooks needed,
// since it reads/writes CSS custom properties on e.currentTarget.
export function handleTiltMove(e, { max = 10, scale = 1.03 } = {}) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;

  const rotateY = (px - 0.5) * max * 2;
  const rotateX = (0.5 - py) * max * 2;

  el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
  el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
  el.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
  el.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
  el.style.setProperty('--tilt-scale', scale);
}

export function handleTiltLeave(e) {
  const el = e.currentTarget;
  el.style.setProperty('--tilt-x', '0deg');
  el.style.setProperty('--tilt-y', '0deg');
  el.style.setProperty('--tilt-scale', 1);
}
