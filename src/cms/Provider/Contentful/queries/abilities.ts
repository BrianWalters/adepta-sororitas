export const abilities = `
query {
  abilityCollection(order: name_ASC) {
    items {
      name
      rules
    }
  }
}
`