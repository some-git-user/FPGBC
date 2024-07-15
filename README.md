# Funnyplaying GBC Compatibility
This repository is dedicated to game compatibility for the Funnyplaying FPGA Game Boy Color (FPGBC). Since I noticed problems with some games/modules, I decided to create this table to keep track of firmware updates and current incompatibilities. Feel free to extend it with your own findings and contributions to help improve the compatibility tracking.

P.S. If you notice any color or graphic glitches, try the following:
- If you're playing a GB module in GBC mode, turn on the GB_CLRFIX option.
- If you're playing a GBC module in GBC mode, turn off the GB_CLRFIX option.

## Module Compatibility Table
| Module Name         | Module Code | GB Core | GBC Core | FPGBC FW Version | Notes
|---------------------|-------------|---------|----------|------------------|-----------------------------------------------------------|
|Doraemon Kart|DMG-ADRJ-JPN|❌|❌|1.09|In game graphic glitches, A, B buttons not responding to input, game is unplayable
|Akira (Famicom)|GB Studio|✅|✅|1.09|A Remake of Akira (Famicom) with GB Studio
|America Oudan Ultra-Quiz Part 2|DMG-AUJ|✅|✅|1.09|
|Bokujou Monogatari|DMG-AYWJ-JPN|✅|✅|1.09|
|Cult Jump|DMG-C7J|✅|✅|1.09|
|Dead Heat Fighters World Heroes 2 Jet|DMG-AWJJ-JPN|✅|✅|1.09|
|Donkey Kong|DMG-QDA|✅|✅|1.09|
|Doraemon: Taiketsu Himitsu Dougu!!|DMG-DEJ|✅|✅|1.09|
|Dr. Mario|DMG-VUA|✅|✅|1.09|
|F-1 Race|DMG-F1A|✅|✅|1.09|
|Fatal Fury 2: Dead Heat Fighters|DMG-X3J|✅|✅|1.09|
|Galaga & Galaxian|DMG-AGCJ-JPN|✅|✅|1.09|
|Game de Hakken!! Tamagotchi|DMG-ATAJ-JPN|✅|✅|1.09|
|Game de Hakken!! Tamagotchi 2|DMG-AT3J-JPN|✅|✅|1.09|
|Hamster Paradise 4|CGB-BCUJ-JPN|✅|✅|1.09|
|Hiryu no Ken Gaiden|DMG-HRJ|✅|✅|1.09|
|Hokuto No Ken (Fist of the North Star)|DMG-HKJ|✅|✅|1.09|
|Hoshi no Kirby|DMG-KYJ|✅|✅|1.09|
|Kirby no Kirakira Kids|DMG-AKCJ-JPN|✅|✅|1.09|
|Megami Tensei Gaiden: Last Bible II|DMG-M9J|✅|✅|1.09|
|Metal Gear: Ghost Babel|CGB-BMGJ-JPN|✅|✅|1.09|
|Motocross Maniacs|DMG-MXA|✅|✅|1.09|
|Nettou Real Bout Garou Densetsu Special|DMG-ARBJ-JPN|✅|✅|1.09|
|Onigashima Pachinko-Ten|DMG-OGJ|✅|✅|1.09|
|QIX (World)|DMG-QXA|✅|✅|1.09|
|Quarth|DMG-QRJ|✅|✅|1.09|
|Robocop|DMG-CP-FAH|✅|✅|1.09|
|Solar Striker|DMG-SSA|✅|✅|1.09|
|Super Donkey Kong GB|DMG-YTJ-JPN|✅|✅|1.09|
|Super Mario Land 2 6 Golden Coins|DMG-L6J|✅|✅|1.09|
|Super Mario Land 3: Wario Land|DMG-WJA|✅|✅|1.09|
|Tetris|DMG-TR-USA|✅|✅|1.09|
|Tetris|DMG-TRA|✅|✅|1.09|
|Tetris DX|DMG-ATEA-JPN|✅|✅|1.09|
|Tokio Senki: Eiyuu Retsuden|DMG-TIJ|✅|✅|1.09|
|Wario Land 2: Nusumareta Zaihou|DMG-AW2J-JPN|✅|✅|1.09|
|Wizardry Gaiden I: Queen's Passion|DMG-WIJ|✅|✅|1.09|
|Zelda no Densetsu - Yume o Miru Shima DX|DMG-AZLJ-JPN|✅|✅|1.09|
|Alleyway|DMG-AW-USA|❌|❌|1.08|Controls broken. Depending on your board's version. 1.11 and 1.1 requieres the removal of a resistor in the board, 1.12 should not need it
|Tetris Attack|DMG-AYLE-USA|✅|❌|1.09|Works on GB mode, but on GBC it has missing graphics, even with the CLRfix
|Kirby - Tilt 'n' Tumble|CGB-KTNE-USA|❌|❌|1.09|works, but sound gradually goes away and randomly returns
|Wave Race|DMG-WA-USA-1|❌|❌|1.09|works, but the map and info on the lower part of the screen do not flicker to emulate transparency
|Cannon Fodder|CGB-BCFE-USA|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
|Tarzan: Lord of the Jungle|DMG-ZK|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
|Rampart|DMG-R8J|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
