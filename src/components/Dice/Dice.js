import './style.css'
import DiceBox from '@3d-dice/dice-box'
import { DisplayResults, AdvancedRoller, BoxControls } from '@3d-dice/dice-ui'

let Box = new DiceBox("#dice-box",{
  assetPath: '/assets/dice-box/',
})

document.addEventListener("DOMContentLoaded", async() => {

  Box.init().then(() => {

    // create dat.gui controls
    const Controls = new BoxControls({
      themes: ["default", "rust", "diceOfRolling", "gemstone"],
      themeColor: world.config.themeColor,
      onUpdate: (updates) => {
        Box.updateConfig(updates);
      }
    });
    Controls.themeSelect.setValue(world.config.theme);
    Box.onThemeConfigLoaded = (themeData) => {
      if (themeData.themeColor) {
        Controls.themeColorPicker.setValue(themeData.themeColor);
      }
    };

    // create display overlay
    const Display = new DisplayResults("#dice-box")

    // create Roller Input
    const Roller = new AdvancedRoller({
      target: '#dice-box',
      onSubmit: (notation) => Box.roll(notation),
      onClear: () => {
        Box.clear()
        Display.clear()
      },
      onReroll: (rolls) => {
        // loop through parsed roll notations and send them to the Box
        rolls.forEach(roll => Box.add(roll))
      },
      onResults: (results) => {
        Display.showResults(results)
      }
    })

    // pass dice rolls to Advanced Roller to handle
    Box.onRollComplete = (results) => {
      Roller.handleResults(results)
    }
  }) // end Box.init
}) // end DOMContentLoaded