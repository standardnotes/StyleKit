export default class SKAlert {

  /*
  buttons: [{text, style, action}]
  */
  constructor({title, text, buttons}) {
    this.title = title;
    this.text = text;
    this.buttons = buttons;
  }

  buttonsString() {
    const genButton = function(buttonDesc, index) {
      return `
        <div id='button-${index}' class='sk-button ${buttonDesc.style}'>
          <div class='sk-label'>${buttonDesc.text}</div>
        </div>
      `
    }

    let buttonString = this.buttons.map(function(buttonDesc, index) {
      return genButton(buttonDesc, index);
    }).join("");

    let str = `
      <div class='sk-button-group'>
        ${buttonString}
      </div>
    `
    return str;
  }

  templateString() {

    let buttonsTemplate = this.buttonsString();
    let titleTemplate = this.title ? `<div class='sk-h3 sk-panel-section-title'>${this.title}</div>` : "";
    let messageTemplate = this.text ? `<p class='sk-p'>${this.text}</p>` : "";

    let template = `
      <div class="sk-modal">
        <div class="sk-modal-background"></div>
        <div class="sk-modal-content">
          <div class="sn-component">
            <div class="sk-panel" style='max-width: 500px;'>
              <div class="sk-panel-content">
                <div class="sk-panel-section">
                  ${titleTemplate}

                  <div class="sk-panel-row">
                    ${messageTemplate}
                  </div>

                  <div class="sk-panel-row" style='margin-top: 8px;'>
                    ${buttonsTemplate}
                  </div>
                </div>
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

    let background = div.querySelector(".sk-modal-background");
    background.addEventListener('click', function(){
      onElement.removeChild(div);
    });

    this.buttons.forEach(function(buttonDesc, index) {
      let buttonElem = div.querySelector(`#button-${index}`);
      buttonElem.onclick = function() {
        buttonDesc.action && buttonDesc.action();
        onElement.removeChild(div);
      }
    })

    onElement.appendChild(div);
  }
}
