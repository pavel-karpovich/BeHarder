'use strict';

window.onload = () => {

  document.getElementById('mobile_menu_btn')
    .addEventListener('click',
      e => {
        let cls = e.currentTarget.firstElementChild.classList;
        cls.toggle('icon-menu');
        cls.toggle('icon-close');
        let menu = document.getElementById('mobile_menu');
        menu.classList.toggle('mobile-menu-toggle');
      }
    );

  [].forEach.call(document.getElementsByClassName('cls-5-doc'),
    elm => elm.addEventListener('click',
      e => {
        console.log('1');
        let sqr = e.currentTarget;
        let check = document.getElementById('check_mark_' + sqr.id.slice(-1));
        check.classList.toggle('invisible');
      }
    )
  );
};
