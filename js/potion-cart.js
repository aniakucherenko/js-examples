const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
     getPotions() {
        const { potions } = this;
        return potions;
    },
      addPotion(newPotion) {
          const { potions } = this;
          for (const potion of potions) {
              if (potion.name === newPotion.name) {
                  return `Error! Potion ${newPotion.name} is already in your inventory!`;
              }
          }
          potions.push(newPotion);
      },
      removePotion(potionName) {
          const { potions } = this;
        for (let i = 0; i < potions.length; i += 1){
            const { name } = this.potions[i];
            if (potionName === name) {
                potions.splice(i, 1);
          }
        }
    },
      updatePotionName(oldName, newName) {
          const { potions } = this;
          for (const potion of potions) {
              if (potion.name === oldName) {
                  potion.name = newName;
              }
          }
    },
  };