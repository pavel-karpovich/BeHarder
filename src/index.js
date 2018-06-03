
window.onload = (e) => {
    const items = [
        document.getElementById('menu_item_1'),
        document.getElementById('menu_item_2'),
        document.getElementById('menu_item_3')
    ];
    
    items.forEach(
        item => {
            item.addEventListener('focus',
                e => e.target.parentElement.classList.add('menu-focus')
                );
            item.addEventListener('blur',
                e => e.target.parentElement.classList.remove('menu-focus')
                );
            item.addEventListener('drag',
                e => e.target.parentElement.classList.remove('menu-focus')
                );
            }
        );
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
};
