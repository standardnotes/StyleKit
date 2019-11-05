export default class Alert {

  constructor(title, message, buttons) {
    this.title = title;
    this.message = message;
    this.buttons = buttons;
  }

  templateString() {
    let template = `
      <div class="sk-modal">
        <div class="sk-modal-background onclick=''"></div>
        <div class="sk-modal-content">
          <div class="sn-component">
            <div class="sk-panel">
              <div class="sk-panel-header">
              </div>
              <div class="sk-panel-content">
                ${this.title}
                ${this.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    return template;
  }

  present({onElement} = {}) {
    if(!onElement) {onElement = document.body;}

    let div = document.createElement('div');
    div.innerHTML = this.templateString().trim();

    onElement.appendChild(div);
  }

}
