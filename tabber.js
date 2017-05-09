export default class Tabber {
  constructor(tabGroup) {
    this.tabGroup = tabGroup
    if (!this.tabGroup) return;
    this.tabs = this.tabGroup.querySelectorAll('[role="tab"]');
    this.panels = this.tabGroup.querySelectorAll('[role="tabpanel"]');

    this.onTabClick = this.onTabClick.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.tabs.forEach(tab => tab.addEventListener('click', this.onTabClick));
  }

  onTabClick(event) {
    event.preventDefault();
    const tab = event.target;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    this.switchTab(tab, panel);
  }

  switchTab(tab, panel) {
    requestAnimationFrame(_ => {
      this.tabs.forEach(tab => tab.setAttribute('aria-selected', false));
      this.panels.forEach(panel => panel.setAttribute('aria-hidden', true));
      tab.setAttribute('aria-selected', true);
      panel.setAttribute('aria-hidden', false);
    });
  }
}
