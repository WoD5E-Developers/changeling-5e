// Mixin
const { HandlebarsApplicationMixin } = foundry.applications.api
const WoDItemBase = WOD5E.WoDItemBase

// Extend the base ActorSheet and put all our functionality here.
export class KithItemSheet extends HandlebarsApplicationMixin(WoDItemBase) {
  static DEFAULT_OPTIONS = {
    classes: ['wod5e', 'item', 'sheet'],
    actions: {}
  }

  static PARTS = {
    header: {
      template: 'modules/changeling-5e/templates/kith-sheet.hbs'
    },
    tabs: {
      template: 'templates/generic/tab-navigation.hbs'
    },
    description: {
      template: 'systems/wod5e/display/shared/items/parts/description.hbs'
    },
    modifiers: {
      template: 'systems/wod5e/display/shared/items/parts/modifiers.hbs'
    },
    settings: {
      template: 'systems/wod5e/display/shared/items/parts/item-settings.hbs'
    }
  }

  tabs = {
    description: {
      id: 'description',
      group: 'primary',
      label: 'WOD5E.Tabs.Description'
    },
    modifiers: {
      id: 'modifiers',
      group: 'primary',
      label: 'WOD5E.ItemsList.Modifiers'
    },
    settings: {
      id: 'settings',
      group: 'primary',
      label: 'WOD5E.ItemsList.ItemSettings'
    }
  }

  async _prepareContext() {
    // Top-level variables
    const context = await super._prepareContext()

    // The description field
    context.description = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
      this.document.system.description,
      {
        async: true,
        secrets: this.document.isOwner,
        relativeTo: this.document
      }
    )

    context.affinity = this.document.system.affinity

    return context
  }
}
