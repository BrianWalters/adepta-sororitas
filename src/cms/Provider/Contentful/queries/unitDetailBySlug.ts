export const unitDetailBySlug = `
query($slug: String) {
unitCollection(where:{ slug: $slug }) {
    items {
      name
    power
    image {
      title
      url
    }
    modelsCollection(limit: 4) {
      items {
        name
        movement
        weaponSkill
        ballisticSkill
        strength
        toughness
        wounds
        attacks
        leadership
        save
      }
    }
    keywordsCollection(limit: 5) {
      items {
        name
      }
    }
    intrinsicAbilitiesCollection(limit: 10) {
      items {
        name
        rules
      }
    }
    weaponsCollection(limit: 10) {
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
      }
    }
    availableWargearCollection(limit: 10) {
      items {
        name
        abilities
      }
    }
    }
  }
}
`