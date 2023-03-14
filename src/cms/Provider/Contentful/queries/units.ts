export const unitListingsAlphabetical = `
query {
  unitCollection(order: name_ASC) {
    total
    items {
      name
      slug
      power
      image {
        title
        url
      }
      keywordsCollection(limit: 5) {
        items {
          name
        }
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