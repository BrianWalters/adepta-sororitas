export const unitListingsAlphabetical = `
query {
  unitCollection(order: name_ASC) {
    total
    items {
      name
      power
      image {
        title
        url
      }
      intrinsicAbilitiesCollection(limit: 10) {
        items {
          name
        }
      }
      weaponsCollection(limit: 10) {
        items {
          name
        }
      }
      availableWargearCollection(limit: 10) {
        items {
          name
        }
      }
    }
  }
}
`