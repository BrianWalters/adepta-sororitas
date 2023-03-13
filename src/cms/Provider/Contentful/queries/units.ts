export const allUnits = `
query {
  unitCollection(order: name_ASC) {
    items {
      name
      power
      image {
        title
        url
      }
    }
  }
}
`