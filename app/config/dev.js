const appConfig = {
  /**
   * Properties used to control settings of Cells Bridge and the build process
   */
  cells_properties: {
    enableLitElement: true,
    onlyLitElements: true,
    transpile: true,
    transpileExclude: ['webcomponentsjs', 'moment', 'd3', 'bgadp*'],

    debug: true,
    logs: false,

    /**
     * Relative path to folder that contains dynamic pages (.json files)
     */
    templatesPath: './dynamicPages/',
    /**
     * Relative path to folder that contains static pages (.js files)
     */
    pagesPath: './pages/',
    prplLevel: 1,
    initialBundle: ['pokedex'],

    /* Internationalization options */
    locales: {
      languages: ['es-ES', 'en-US', 'es'],
      intlInputFileNames: ['locales'],
      intlFileName: 'locales'
    }
  },

  /**
   * These properties are especific to your application.
   * Here you can use your own properties, so it is an
   * open set of properties that you can use at your
   * convinience.
   * These variables will be available in your
   * application ins the window.AppConfig object
   */
  app_properties: {
    mock: true
  }
};

module.exports = appConfig;