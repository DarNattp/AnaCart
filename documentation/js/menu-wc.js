'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ana-cart documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' : 'data-bs-target="#xs-components-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' :
                                            'id="xs-components-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnaBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnaBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnaCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnaCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnaCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnaCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnaPageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnaPageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnafooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnafooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnaheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnaheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' :
                                        'id="xs-injectables-links-module-AppModule-8830b3b5cef280c8fbb5fab035da80798936331a9e21f462e1744dbfb9614610bab60506ef9955d5767ca65048777f205c494316211f8119720e5ddd35eade36"' }>
                                        <li class="link">
                                            <a href="injectables/CardDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardDetailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialExampleModule.html" data-type="entity-link" >MaterialExampleModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/stock.html" data-type="entity-link" >stock</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardDetailsService.html" data-type="entity-link" >CardDetailsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});