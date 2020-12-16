const autoRefreshAlertList = () => {
    isUpdatePossible = () => {
        //check we are on alert-list
        if (!document.getElementById('alert-list')){
            return false;
        }
        //search dialog open
        if (!(window.getComputedStyle(document.getElementById('assistant-frame')).display === "none")){
            return false;
        }
        //serch bar has focus
        if (document.querySelector('#editorA.ace_focus')){
            return false;
        }
        return true;
    } 
  return ({
    autoRefresh: () => {
        if (isUpdatePossible()){
            document.querySelector('div.og-saved-search__list__section__content__item--active').click();
        }
      }
    });
  };
const autoUpdate = autoRefreshAlertList()
setInterval(autoUpdate.autoRefresh,30000);
