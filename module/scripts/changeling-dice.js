const diceImageLocation = 'modules/changeling-5e/assets/icons/dice/'
const normalDiceFaces = {
  success: 'success.png',
  failure: 'failure.png',
  critical: 'critical.png'
}
const nightmareDiceFaces = {
  success: 'nightmare-success.png',
  failure: 'nightmare-failure.png',
  critical: 'nightmare-critical.png',
  panic: 'panic-failure.png'
}

WOD5E.DiceRegistry.registerBasic('changeling', {
  imgRoot: diceImageLocation,
  faces: normalDiceFaces,
  css: 'changeling-dice'
})

WOD5E.DiceRegistry.registerAdvanced('changeling', {
  imgRoot: diceImageLocation,
  faces: nightmareDiceFaces,
  css: 'nightmare-dice',
  resultMap: (num) => {
    if (num === 10) return 'critical'
    if (num > 5) return 'success'
    if (num > 1) return 'failure'
    return 'panic'
  }
})

/**
 * Extend the WOD5eDie class for Changeling (c) dice
 * @extends {WOD5eDie}
 */
export class ChangelingDie extends WOD5E.WOD5eDie {
  static GAME_SYSTEM = 'changeling'
  static DIE_TYPE = 'basic'

  /** @override */
  static DENOMINATION = 'c'

  /** @override */
  static getResultLabel(result) {
    return {
      1: `<img src="${diceImageLocation + normalDiceFaces.failure}" />`,
      2: `<img src="${diceImageLocation + normalDiceFaces.failure}" />`,
      3: `<img src="${diceImageLocation + normalDiceFaces.failure}" />`,
      4: `<img src="${diceImageLocation + normalDiceFaces.failure}" />`,
      5: `<img src="${diceImageLocation + normalDiceFaces.failure}" />`,
      6: `<img src="${diceImageLocation + normalDiceFaces.success}" />`,
      7: `<img src="${diceImageLocation + normalDiceFaces.success}" />`,
      8: `<img src="${diceImageLocation + normalDiceFaces.success}" />`,
      9: `<img src="${diceImageLocation + normalDiceFaces.success}" />`,
      10: `<img src="${diceImageLocation + normalDiceFaces.critical}" />`
    }[result]
  }
}

/**
 * Extend the WOD5eDie class for Nightmare (n) dice
 * @extends {WOD5eDie}
 */
export class ChangelingNightmareDie extends WOD5E.WOD5eDie {
  static GAME_SYSTEM = 'changeling'
  static DIE_TYPE = 'advanced'

  /** @override */
  static DENOMINATION = 'n'

  /** @override */
  static getResultLabel(result) {
    return {
      1: `<img src="${diceImageLocation + nightmareDiceFaces.bestial}" />`,
      2: `<img src="${diceImageLocation + nightmareDiceFaces.failure}" />`,
      3: `<img src="${diceImageLocation + nightmareDiceFaces.failure}" />`,
      4: `<img src="${diceImageLocation + nightmareDiceFaces.failure}" />`,
      5: `<img src="${diceImageLocation + nightmareDiceFaces.failure}" />`,
      6: `<img src="${diceImageLocation + nightmareDiceFaces.success}" />`,
      7: `<img src="${diceImageLocation + nightmareDiceFaces.success}" />`,
      8: `<img src="${diceImageLocation + nightmareDiceFaces.success}" />`,
      9: `<img src="${diceImageLocation + nightmareDiceFaces.success}" />`,
      10: `<img src="${diceImageLocation + nightmareDiceFaces.critical}" />`
    }[result]
  }
}
