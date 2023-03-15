export const weaponsWithUnitReferences = `
query {
  weaponCollection(order: name_ASC) {
    items {
      name
      range
      weaponType {
        name
      }
      attacks
      strength
      armorPiercing
      damage
      abilities
      linkedFrom {
        unitCollection {
          items {
            name
            slug
          }
        }
      }
    }
  }
}
`