function autoRefresh() {
    document.querySelector('div.og-saved-search__list__section__content__item--active').click();
}
setInterval(autoRefresh,30000);