export class ChangelingModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields

    const schema = {}

    /**
     * Locked Field
     */
    schema.locked = new fields.BooleanField({ initial: false })

    /**
     * Group Field
     */
    schema.group = new fields.StringField({ initial: '' })

    /**
     * Bio Fields
     */
    schema.bio = new fields.SchemaField({
      age: new fields.SchemaField({
        trueage: new fields.StringField({ initial: '' })
      }),
      dateof: new fields.SchemaField({
        birth: new fields.StringField({ initial: '' })
      }),
      history: new fields.HTMLField({ initial: '' })
    })

    /**
     * Headers
     */
    schema.headers = new fields.SchemaField({
      concept: new fields.StringField({ initial: '' }),
      chronicle: new fields.StringField({ initial: '' }),
      desire: new fields.StringField({ initial: '' }),
      touchstones: new fields.HTMLField({ initial: '' }),
      tenets: new fields.HTMLField({ initial: '' })
    })

    /**
     * XP Fields
     */
    schema.exp = new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 0 })
    })

    schema.derivedXP = new fields.SchemaField({
      totalXP: new fields.NumberField({ initial: 0 }),
      remainingXP: new fields.NumberField({ initial: 0 })
    })

    /**
     * Humanity
     */
    schema.humanity = new fields.SchemaField({
      value: new fields.NumberField({ initial: 7 }),
      stains: new fields.NumberField({ initial: 0 })
    })

    /**
     * Health
     */
    schema.health = new fields.SchemaField({
      aggravated: new fields.NumberField({ initial: 0 }),
      superficial: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 5 }),
      value: new fields.NumberField({ initial: 5 })
    })

    /**
     * Willpower
     */
    schema.willpower = new fields.SchemaField({
      aggravated: new fields.NumberField({ initial: 0 }),
      superficial: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 5 }),
      value: new fields.NumberField({ initial: 5 })
    })

    /**
     * Attributes
     */
    schema.attributes = new fields.SchemaField({
      strength: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      charisma: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      intelligence: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      dexterity: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      manipulation: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      wits: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      stamina: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      composure: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      }),
      resolve: new fields.SchemaField({
        value: new fields.NumberField({ initial: 1 })
      })
    })

    /**
     * Various other HTML fields
     */
    schema.description = new fields.HTMLField({ initial: '' })
    schema.notes = new fields.HTMLField({ initial: '' })
    schema.privatenotes = new fields.HTMLField({ initial: '' })
    schema.biography = new fields.HTMLField({ initial: '' })
    schema.appearance = new fields.HTMLField({ initial: '' })
    schema.equipment = new fields.HTMLField({ initial: '' })

    return schema
  }
}
