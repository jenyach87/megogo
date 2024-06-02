function scrollPageDown() {
  let currentScroll = document.querySelector('.scroll-container').scrollTop;
  let nextPageOffset = window.innerHeight;
  
  document.querySelector('.scroll-container').scrollTo({
    top: currentScroll + nextPageOffset,
    behavior: "smooth",
  });
}