export class KithModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields
    const schema = {}

    schema.description = new fields.HTMLField({
      initial: '',
      required: false,
      blank: true
    })

    schema.affinity = new fields.StringField({
      initial: '',
      required: false,
      blank: true
    })

    schema.gamesystem = new fields.StringField({
      initial: 'changeling',
      required: true,
      blank: false
    })

    schema.source = new fields.SchemaField(
      {
        book: new fields.StringField({
          required: false,
          blank: true,
          initial: ''
        }),
        page: new fields.StringField({
          required: false,
          blank: true,
          initial: ''
        })
      },
      {
        label: 'changeling-5e.Notes'
      }
    )

    return schema
  }
}
