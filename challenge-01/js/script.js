"use strict";

//Closure to avoid declaring global variables
(() => {
  const ACTIVE_CLASS = 'active';

  const actionBtn = document.getElementById('action-btn');
  const shareLinks = document.getElementById('share-links');

  actionBtn.addEventListener('click', () => {
    const isActive = actionBtn.classList.contains(ACTIVE_CLASS);
    if (isActive) {
      actionBtn.classList.remove(ACTIVE_CLASS);
      shareLinks.classList.remove(ACTIVE_CLASS);
    } else {
      actionBtn.classList.add(ACTIVE_CLASS);
      shareLinks.classList.add(ACTIVE_CLASS);
    }
  });
})();
