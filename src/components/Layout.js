import '../css/Layout.css';

const TestComponent = () => {
  return (
    <div id="layout">
      <a href="#menu" id="menuLink" class="menu-link">
        <span></span>
      </a>

      <div id="menu">
        <div class="pure-menu">
          <a class="pure-menu-heading" href="#company">
            Company
          </a>

          <ul class="pure-menu-list">
            <li class="pure-menu-item">
              <a href="#home" class="pure-menu-link">
                Home
              </a>
            </li>
            <li class="pure-menu-item">
              <a href="#about" class="pure-menu-link">
                About
              </a>
            </li>

            <li class="pure-menu-item menu-item-divided pure-menu-selected">
              <a href="#" class="pure-menu-link">
                Services
              </a>
            </li>

            <li class="pure-menu-item">
              <a href="#contact" class="pure-menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="main">
        <div class="header">
          <h1>Page Title</h1>
          <h2>A subtitle for your page goes here</h2>
        </div>

        <div class="content">
          <h2 class="content-subhead">How to use this layout</h2>
          <p>
            To use this layout, you can just copy paste the HTML, along with the CSS in{' '}
            <a href="/layouts/side-menu/styles.css" alt="Side Menu CSS">
              side-menu.css
            </a>
            , and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla
            JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
          </p>

          <h2 class="content-subhead">Now Let's Speak Some Latin</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <div class="pure-g"></div>

          <h2 class="content-subhead">Try Resizing your Browser</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
