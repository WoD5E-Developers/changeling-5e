/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const _preloadTemplates = async function () {
  console.log('Preloading partials for the Changeling the Dreaming 5e module.')

  // Define template paths to load
  const templatePaths = [
    // Changeling sheet
    'modules/changeling-5e/templates/changeling-sheet.hbs',

    // Kith sheet
    'modules/changeling-5e/templates/kith-sheet.hbs'
  ]

  /* Load the template parts
   */
  return foundry.applications.handlebars.loadTemplates(templatePaths)
}
