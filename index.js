const hideTabContent = (selector) => {
    document.querySelectorAll(selector).forEach(t => {
        t.classList.add('hidden')
    });
}

const showCorrectPageContent = (selector, event) => {
    hideTabContent(selector);
    document.querySelector(`#${event.target.id}_page`).classList.remove('hidden');
}

let mainTabs = document.querySelector('#main_tab');
mainTabs.addEventListener('click', (e) => {
    if(e.target.tagName === "INPUT"){
        showCorrectPageContent('.root-page', e);
    }
})

let orderTabs = document.querySelector('#order_tabs');
orderTabs.addEventListener('click', (e) => {
    if(e.target.tagName === "INPUT"){
        showCorrectPageContent('.order-sub-page', e);
    }
})

let orderHeaderTabs = document.querySelector('#order_header_page');
orderHeaderTabs.addEventListener('click', (e) => {
    if(e.target.tagName === "INPUT"){
        showCorrectPageContent('.order-header-sub-tab', e);
    }
})

let orderLineTabs = document.querySelector('#order_line_page');
orderLineTabs.addEventListener('click', (e) => {
    if(e.target.tagName === "INPUT"){
        showCorrectPageContent('.order-line-sub-tab', e);
    }
})