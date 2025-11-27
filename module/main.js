// Changeling scripts
import { ChangelingModel } from './changeling/changeling-model.js'
import { ChangelingActorSheet } from './changeling/changeling-actor-sheet.js'
// Kith scripts
import { KithItemSheet } from './kith/kith-item-sheet.js'
import { KithModel } from './kith/kith-model.js'
// Scripts
import { _preloadTemplates } from './scripts/preload-templates.js'
import { ChangelingDie, ChangelingNightmareDie } from './scripts/changeling-dice.js'

// Anything that needs to be ran alongside the initialisation of the world
Hooks.once('init', () => {
  CONFIG.Dice.terms.c = ChangelingDie
  CONFIG.Dice.terms.n = ChangelingNightmareDie

  // Register the changeling actor type
  Object.assign(CONFIG.Actor.dataModels, {
    'changeling-5e.changeling': ChangelingModel
  })
  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    Actor,
    'changeling-5e',
    ChangelingActorSheet,
    {
      types: ['changeling-5e.changeling'],
      makeDefault: true
    }
  )

  // Register the kith item type
  Object.assign(CONFIG.Item.dataModels, {
    'changeling-5e.kith': KithModel
  })
  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    Item,
    'changeling-5e',
    KithItemSheet,
    {
      types: ['changeling-5e.kith'],
      makeDefault: true
    }
  )

  // Preload any Handlebars partials we need
  _preloadTemplates()
})

Hooks.on('wod5e.handleFailure', (actor, system, failures) => {
  if (system === 'changeling' && failures > 0) {
    ui.notifications.warn(`${actor.name}'s nightmare increases!`)
  }
})
