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
        this.rightSeciton = document.createElement('div');
        this.rightSeciton.classList.add('right-section')
        this.historyIcon = document.createElement('button');
        this.historyIcon.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRIid3Vv2oVURAG8N/1JmlCLCzuKwgaBAst/YOiIGosjIWpA4oIGrS1EgtBC32FNHkAnyCIRQQxicFobgSx0ioo/gHNtdhZ7rKeu7sXsYgfHA57vpn5zs4Mc/jfMYqLmMdrbOEbuljADMaaBuviaOF7Cm/Qq1kfMN1EoIcvOIa7hQCbuInDGEcH+3EFLwp2j9CuE+jhV+w/cRsjFT4tzMrS1sPjJgL5upOweYrFxPkRfA2/gekqC+TpStmkMKtfk2ThFxMi3SEEWvo1uTzoL+pQJQBXg1/4VwL7gl//W4HOAH5P8J9S5BM8U93LSxFgZYDIRPCfU85vg5ysEOhE8Fxkd4k/GNzL/GBXgXwee3FclPERJ7AaF9lb4o/Hvppyng715ZJwChM4VDprYy1inE05jeJ9GFyrEUhhLnzfqajj+TD6jpNDBD8jm0fbOFVn/KAgcl11utqySfsjfO43uU0LD/V7fg03ZEUdl3XOAdzCq4LdvSbBi7iADX/Op/LawOlhg+cYwSXZk7kum7BbsjacxzlDPJk7E78BiCOJMrCO34wAAAAASUVORK5CYII=" height="25" width="25" />';
        this.historyIcon.className = 'history-btn navbar-action-btn';
        this.calcNavbar.append(this.rightSeciton,this.historyIcon);

        //inner right-Section
        this.navbarIcon = document.createElement('button');
        this.navbarIcon.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg=="/>';
        this.navbarIcon.className = 'navbar-icon navbar-action-btn';
        this.standardTitele = document.createElement('div');
        this.standardTitele.classList.add('standart-title');
        this.standardTitele.textContent = 'Standard'
        this.keepOnTop = document.createElement('button');
        this.keepOnTop.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVQ4jc3Ur06DMRSG8R9kBCzJEAiCwYDbBUxvgSkUN7B5CAoxOQUXABq7JbuGze8KJliQ/PGoiRboyL6wfiD2qOY0ffKmpz2sOxvJ+hDVkp4XPKXCOu4wKSms4QrjSiwcY4hn7MXabYawg5NUCG0h+icXGcIqepAKe3jIkPxMCDZLCgr5d2FlSa0uNCllYPF+C/ktYQP3whtdiWXCkdCcGfbRX1VWJIQmumjh9a/CVPaWI+O7KR+Y4hQ3OMN73HsU/2kOW1E2xm7uYeFhd9KEBzHZOa7lT50aLlkcX9vYwVGJhF/ja/2ZA1+/IgSPRD66AAAAAElFTkSuQmCC"/>';
        this.keepOnTop.className = 'keep-on-top-btn navbar-action-btn';
        this.rightSeciton.append(this.navbarIcon,this.standardTitele,this.keepOnTop)

        //innner calc-input
        this.upperInput = document.createElement('div');
        this.upperInput.classList.add('upper-input');
        this.resualtInput = document.createElement('div');
        this.resualtInput.classList.add('resualt-input');
        this.resualtInput.textContent = 0;
        this.calcInput.append(this.upperInput,this.resualtInput);

        // inner calc-memory-btns






    }
}

new View();