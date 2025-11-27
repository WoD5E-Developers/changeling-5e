// Mixin
const { HandlebarsApplicationMixin } = foundry.applications.api
const WoDActorBase = WOD5E.WoDActorBase

// Extend the base ActorSheet and put all our functionality here.
export class ChangelingActorSheet extends HandlebarsApplicationMixin(WoDActorBase) {
  static DEFAULT_OPTIONS = {
    classes: ['wod5e', 'actor', 'sheet', 'changeling'],
    actions: {}
  }

  static PARTS = {
    header: {
      template: 'modules/changeling-5e/templates/changeling-sheet.hbs'
    },
    tabs: {
      template: 'systems/wod5e/display/shared/actors/parts/tab-navigation.hbs'
    },
    stats: {
      template: 'systems/wod5e/display/shared/actors/parts/stats.hbs'
    },
    experience: {
      template: 'systems/wod5e/display/shared/actors/parts/experience.hbs'
    },
    features: {
      template: 'systems/wod5e/display/shared/actors/parts/features.hbs'
    },
    equipment: {
      template: 'systems/wod5e/display/shared/actors/parts/equipment.hbs'
    },
    biography: {
      template: 'systems/wod5e/display/shared/actors/parts/biography.hbs'
    },
    notepad: {
      template: 'systems/wod5e/display/shared/actors/parts/notepad.hbs'
    },
    settings: {
      template: 'systems/wod5e/display/shared/actors/parts/actor-settings.hbs'
    },
    banner: {
      template: 'systems/wod5e/display/shared/actors/parts/type-banner.hbs'
    },
    limited: {
      template: 'systems/wod5e/display/shared/actors/limited-sheet.hbs'
    }
  }

  tabs = {
    stats: {
      id: 'stats',
      group: 'primary',
      title: 'WOD5E.Tabs.Stats',
      icon: '<i class="fa-regular fa-chart-line"></i>'
    },
    experience: {
      id: 'experience',
      group: 'primary',
      title: 'WOD5E.Tabs.Experience',
      icon: '<i class="fa-solid fa-file-contract"></i>'
    },
    features: {
      id: 'features',
      group: 'primary',
      title: 'WOD5E.Tabs.Features',
      icon: '<i class="fas fa-gem"></i>'
    },
    equipment: {
      id: 'equipment',
      group: 'primary',
      title: 'WOD5E.Tabs.Equipment',
      icon: '<i class="fa-solid fa-toolbox"></i>'
    },
    biography: {
      id: 'biography',
      group: 'primary',
      title: 'WOD5E.Tabs.Biography',
      icon: '<i class="fas fa-id-card"></i>'
    },
    notepad: {
      id: 'notepad',
      group: 'primary',
      title: 'WOD5E.Tabs.Notes',
      icon: '<i class="fas fa-sticky-note"></i>'
    },
    settings: {
      id: 'settings',
      group: 'primary',
      title: 'WOD5E.Tabs.Settings',
      icon: '<i class="fa-solid fa-gears"></i>'
    }
  }

  async prepareContext() {
    const context = await super._prepareContext()

    // The description field
    context.description = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
      this.object.system.description,
      {
        async: true,
        secrets: this.object.isOwner,
        relativeTo: this.object
      }
    )

    // Private and Public notes
    context.note = {
      public: await foundry.applications.ux.TextEditor.implementation.enrichHTML(
        this.object.system.note.public,
        {
          async: true,
          secrets: this.object.isOwner,
          relativeTo: this.object
        }
      ),
      private: await foundry.applications.ux.TextEditor.implementation.enrichHTML(
        this.object.system.note.private,
        {
          async: true,
          secrets: this.object.isOwner,
          relativeTo: this.object
        }
      )
    }
  }
}
