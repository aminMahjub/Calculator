class View {
    constructor() {
        //root 
        this.root = document.querySelector('.root');
        //create origin div
        this.caclHeader = document.createElement('div');
        this.caclHeader.classList.add('calc-header');
        this.containerBody = document.createElement('div');
        this.containerBody.classList.add('container-body');
        this.root.append(this.caclHeader,this.containerBody);
        
        //inner container-body 
        this.calcNavbar = document.createElement('div');
        this.calcNavbar.classList.add('calc-navbar');
        this.calcInput = document.createElement('div');
        this.calcInput.classList.add('calc-input');
        this.calcMemoryBtns = document.createElement('div');
        this.calcMemoryBtns.classList.add('calc-memory-btns');
        this.calcBtns = document.createElement('div');
        this.calcBtns.classList.add('calc-btns');
        this.containerBody.append(this.calcNavbar,this.calcInput,this.calcMemoryBtns,this.calcBtns);

        //inner calc-header 
        this.headerTitle = document.createElement('div');
        this.headerTitle.textContent = 'Calculator';
        this.headerTitle.classList.add('header-title');
        this.computerIcon = document.createElement('div');
        this.computerIcon.classList.add('computer-icon');
        this.caclHeader.append(this.headerTitle,this.computerIcon);

        //inner computer-icon
        this.minizieIcon = document.createElement('button');
        this.minizieIcon.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAALUlEQVQokWNgGAX0A4xQWoKBgYGDBH0/GBgYXsA4BxgYGP6TgA9QzeZRQA8AAP3vEHhGTdJFAAAAAElFTkSuQmCC"/>'
        this.minizieIcon.className = 'minimize-icon header-action-btn';
        this.restoreDown = document.createElement('button');
        this.restoreDown.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAS0lEQVQ4jWNgGGjAiMR2gGJiwAEoZmAiwwAUdSxYTG4gYACKPBMuVcSCUQMGgwHo6cCBgXA6cGCApkIGBgYGZjIsfQA14AEZemkAACm/CR1y4eLyAAAAAElFTkSuQmCC"/>'
        this.restoreDown.className = 'restore-down-icon header-action-btn';
        this.maximizeIcon = document.createElement('button');
        this.maximizeIcon.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAWElEQVQ4jWNgGHGAEY1/hIGBQYZEM54wMDDYwDgsaJIyDAwMe6AGEwNsGBgYXJAF0A1kgBq2gHgHohrIRIJGosCogaMGDgYDseUUGyxiuACGWqoXDiMQAADHjghdpgG4DAAAAABJRU5ErkJggg=="/>'
        this.maximizeIcon.className = 'maximize-icon header-action-btn';
        this.closeIcon = document.createElement('button');
        this.closeIcon.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAoUlEQVQ4jeXTwQ2CMBjF8Z+CB0ZzCEdwBhMNm+iBeHEI4xJ6cQ+DHsSEECgFOek7ten7/n3t1/J3ShrzJVY4o+ypTbFBhluXaYcniqogBCsq77Yv8b4yHjugMZ5gweIbWAia4DAG9lH9norGeDCsLWlUsnkEdNYzj9akR25rwGQdTiPXBsNGQXPDv17e3K2uDHes8QgAS5y8H/wF11DKH9cLt1s66ZAoj0MAAAAASUVORK5CYII="/>';
        this.closeIcon.className = 'close-icon header-action-btn';
        this.computerIcon.append(this.minizieIcon,this.restoreDown,this.maximizeIcon,this.closeIcon);
        
        //inner calc-navbar
        



    }
}

new View();