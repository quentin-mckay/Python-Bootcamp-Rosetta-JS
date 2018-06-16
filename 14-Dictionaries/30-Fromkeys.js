let gameProperties = ["current_score", "high_score", "number_of_lives", "items_in_inventory", "power_ups", "ammo", "enemies_on_screen", "enemy_kills", "enemy_kill_streaks", "minutes_played", "notications", "achievements"]

let initialGameState = {}
gameProperties.forEach(prop => initialGameState[prop] = 0)

// using reduce?