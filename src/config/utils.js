export default function handleEnterViewport(e) {
  const [element, ] = e.watchItem.className.split(' ');
  e.watchItem.classList.add(`${element}-animate`);
};
