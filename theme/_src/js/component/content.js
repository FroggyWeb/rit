const btnMore = document.querySelector('.button-article-more .btn');
if (btnMore) {
  btnMore.addEventListener('click', () => {
    btnMore.closest('.article--limited').classList.remove('article--limited')
  })
}
