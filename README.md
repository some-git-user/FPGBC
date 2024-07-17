# Funnyplaying GBC Compatibility
This repository is dedicated to game compatibility for the Funnyplaying FPGA Game Boy Color (FPGBC). Since I noticed problems with some games/modules, I decided to create this table to keep track of firmware updates and current incompatibilities. Feel free to extend it with your own findings and contributions to help improve the compatibility tracking.

P.S. If you notice any color or graphic glitches, try the following:
- If you're playing a GB module in GBC mode, turn on the GB_CLRFIX option.
- If you're playing a GBC module in GBC mode, turn off the GB_CLRFIX option.

## Module Compatibility Table
| Module Name         | Module Code | GB Core | GBC Core | FPGBC FW Version | Notes
|---------------------|-------------|---------|----------|------------------|-----------------------------------------------------------|
|Alleyway|DMG-AW-USA|❌|❌|1.08|Controls broken. Depending on your board's version. 1.11 and 1.1 requieres the removal of a resistor in the board, 1.12 should not need it. This is the same resistor you'd remove on the 1.08 firmware on the 1.1 boards for the Gameboy printer compatibility. Alleyway has some weird interaction with the serial port and that's why it's borked without the resistor removal
|Cannon Fodder|CGB-BCFE-USA|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
|Disney's Aladdin|DMG-ALAE-USA|✅|❌|1.09|In GBC mode needs the GB_CLRFIX, but has graphic glitches in transitions
|Doraemon Kart|DMG-ADRJ-JPN|❌|❌|1.09|In game graphic glitches, A, B buttons not responding to input, game is unplayable
|Everdrive X7|Model 17 Rev.C 20.02.2018|❌|❌|1.09|I get many, MANY!, error messages like "fat16 not supported", "FF", "FAT not found", "FAT error F3 FA F0", stuck on "OS Loading..."/"OS init...", white screen after game has loaded, "SD IO error disk read error D3", "SD card not found C0", "MEMORY ERROR", "Unexcpected error 80". Tested with Samsung 32GB 6 HC SD card. Often, it needs to be removed and reinserted, or to be powered  off and on again to work properly. Tested on Everdrive OS 1.06
|Killer Instinct|DMG-AKLE-USA|❌|❌|1.09|Playable, but has some minor graphical glitches. In GBC mode needs the GB_CLRFIX also
|Kirby - Tilt 'n' Tumble|CGB-KTNE-USA|❌|❌|1.09|works, but sound gradually goes away and randomly returns. random blank screen after powering on
|Medarot 2: Kabuto Version|DMG-A2MJ-JPN|✅|❌|1.09|In GBC core boots to blank screen
|Rampart|DMG-R8J|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
|Tarzan: Lord of the Jungle|DMG-ZK|❌|❌|1.09|works, but makes heavy use of digitized sound, which has an additional buzzing and off key sound
|Tetris Attack|DMG-AYLE-USA|✅|❌|1.09|Works on GB mode, but on GBC it has missing graphics, even with the CLRfix
|Wario Land 3 Mysterious Music Box|CGB-AW8A-JPN|✅|❌|1.09|Entering the first level "Out of the Woods" keeps resetting to the title screen
|Wave Race|DMG-WA-USA-1|❌|❌|1.09|works, but the map and info on the lower part of the screen do not flicker to emulate transparency
|Akira (Famicom)|CGB-AKIRA-EUR|✅|✅|1.09|A Remake of Akira (Famicom) with GB Studio
|America Oudan Ultra-Quiz Part 2|DMG-AUJ|✅|✅|1.09|
|Asteroids|DMG-ANE-0|✅|✅|1.09|
|Bokujou Monogatari|DMG-AYWJ-JPN|✅|✅|1.09|
|Bomber Boy|DMG-HBA|✅|✅|1.09|
|Cult Jump|DMG-C7J|✅|✅|1.09|
|Dead Heat Fighters World Heroes 2 Jet|DMG-AWJJ-JPN|✅|✅|1.09|
|Donkey Kong|DMG-QDA|✅|✅|1.09|
|Doraemon: Taiketsu Himitsu Dougu!!|DMG-DEJ|✅|✅|1.09|
|Dr. Mario|DMG-VUA|✅|✅|1.09|
|Elevator Action JPN|DMG-EAA|✅|✅|1.09|In GBC mode needs the GB_CLRFIX
|Elevator Action USA|DMG-EA-USA|✅|✅|1.09|In GBC mode needs the GB_CLRFIX
|F-1 Race|DMG-F1A|✅|✅|1.09|
|Fatal Fury 2: Dead Heat Fighters|DMG-X3J|✅|✅|1.09|
|Flipull|DMG-FPA|✅|✅|1.09|
|Galaga & Galaxian|DMG-AGCJ-JPN|✅|✅|1.09|
|Game de Hakken!! Tamagotchi|DMG-ATAJ-JPN|✅|✅|1.09|
|Game de Hakken!! Tamagotchi 2|DMG-AT3J-JPN|✅|✅|1.09|
|Gameboy Camera|MGB-006|✅|✅|1.08|
|Hamster Paradise 4|CGB-BCUJ-JPN|✅|✅|1.09|
|Hiryu no Ken Gaiden|DMG-HRJ|✅|✅|1.09|
|Hokuto No Ken (Fist of the North Star)|DMG-HKJ|✅|✅|1.09|
|Hoshi no Kirby|DMG-KYJ|✅|✅|1.09|
|Kirby no Kirakira Kids|DMG-AKCJ-JPN|✅|✅|1.09|
|Looney Tunes|DMG-LNJ|✅|✅|1.09|In GBC mode needs the GB_CLRFIX
|Medarot 2: Kuwagata Version|DMG-A2NJ-JPN|✅|✅|1.09|
|Megami Tensei Gaiden: Last Bible II|DMG-M9J|✅|✅|1.09|
|Metal Gear: Ghost Babel|CGB-BMGJ-JPN|✅|✅|1.09|
|Micro Machines 1 and 2: Twin Turbo|CGB-AT8E-USA|✅|✅|1.09|
|Motocross Maniacs|DMG-MXA|✅|✅|1.09|
|Nettou Real Bout Garou Densetsu Special|DMG-ARBJ-JPN|✅|✅|1.09|
|Onigashima Pachinko-Ten|DMG-OGJ|✅|✅|1.09|
|Pitman|DMG-PMA|✅|✅|1.09|
|Princess Poffin and the Spider Invasion|GB Studio Everdrive X7 1.06|✅|✅|1.09|
|QIX (World)|DMG-QXA|✅|✅|1.09|
|Quarth|DMG-QRJ|✅|✅|1.09|
|Robocop|DMG-CP-FAH|✅|✅|1.09|
|Solar Striker|DMG-SSA|✅|✅|1.09|
|Super Donkey Kong GB|DMG-YTJ-JPN|✅|✅|1.09|
|Super Mario Land|DMG-MLA|✅|✅|1.09|
|Super Mario Land 2 6 Golden Coins|DMG-L6J|✅|✅|1.09|
|Super Mario Land 3: Wario Land|DMG-WJA|✅|✅|1.09|
|Tetris|DMG-TR-USA|✅|✅|1.09|
|Tetris|DMG-TRA|✅|✅|1.09|
|Tetris DX|DMG-ATEA-JPN|✅|✅|1.09|
|Tokio Senki: Eiyuu Retsuden|DMG-TIJ|✅|✅|1.09|
|Wario Land 2: Nusumareta Zaihou|DMG-AW2J-JPN|✅|✅|1.09|
|Wario Land 3 Mysterious Music Box|CGB-AW8A-JPN|✅|✅|1.08|
|Wizardry Gaiden I: Queen's Passion|DMG-WIJ|✅|✅|1.09|
|Zelda no Densetsu - Yume o Miru Shima DX|DMG-AZLJ-JPN|✅|✅|1.09|
