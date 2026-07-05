// Set to [] if you don't want to use the tag system
const allTags = ["All", "Top Tracks", "Selects"];

// You can remove the attributes "tags" if you set allTags to []
var musicNameList = [

//// Super Mario Bros.
{
id: 0,
name: "Ground BGM - Super Mario Bros.",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 2,
name: "Invincibility BGM - Super Mario Bros.",
tags: ["All", "Top Tracks"],
},
{
id: 1,
name: "Underground BGM - Super Mario Bros.",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 3,
name: "Underwater BGM - Super Mario Bros.",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 4,
name: "Castle BGM - Super Mario Bros.",
tags: ["All", "Top Tracks"],
},
{
id: 5,
name: "Ending - Super Mario Bros.",
tags: ["All", "Top Tracks"],
},

//// Metroid
{
id: 6,
name: "Title Screen - Metroid",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 7,
name: "Brinstar (Rocky Zone) - Metroid",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 8,
name: "Miniboss Hideout I: Kraid - Metroid",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 9,
name: "Norfair (Fire Zone) - Metroid",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 10,
name: "Miniboss Hideout II: Ridley - Metroid",
tags: ["All", "Top Tracks"],
},
{
id: 11,
name: "Tourian (Central Base) - Metroid",
tags: ["All", "Top Tracks"],
},
{
id: 12,
name: "Escape - Metroid",
tags: ["All", "Top Tracks"],
},
{
id: 13,
name: "Ending - Metroid",
tags: ["All", "Top Tracks"],
},

//// Super Mario Bros. 2
{
id: 1048,
name: "Title BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1049,
name: "Please Select Player - Super Mario Bros. 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1050,
name: "Ground BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1051,
name: "Underground BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks"]
},
{
id: 1052,
name: "Sub-Space BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks"]
},
{
id: 1053,
name: "Boss BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks"]
},
{
id: 1054,
name: "Final Boss BGM - Super Mario Bros. 2",
tags: ["All", "Top Tracks"]
},
{
id: 1055,
name: "Ending - Super Mario Bros. 2",
tags: ["All", "Top Tracks", "Selects"]
},

//// Dr. Mario (Game Boy)
{
id: 14,
name: "Selection Screen - Dr. Mario (Game Boy)",
tags: ["All", "Top Tracks"],
},
{
id: 15,
name: "Fever - Dr. Mario (Game Boy)",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 16,
name: "Chill - Dr. Mario (Game Boy)",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 17,
name: "Level 20 Hi Clear (UFO) & Ending - Dr. Mario (Game Boy)",
tags: ["All", "Top Tracks"],
},

/// Super Mario World
{
id: 989,
name: "Title BGM - Super Mario World",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 990,
name: "Yoshi's Island (Map Screen) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 991,
name: "Ground BGM - Super Mario World",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 992,
name: "Donut Plains (Map Screen) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 993,
name: "Athletic BGM - Super Mario World",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 994,
name: "Bonus Game BGM - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 995,
name: "Vanilla Dome (Map Screen) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 996,
name: "Underground BGM - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 997,
name: "Underwater BGM - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 998,
name: "Forest of Illusion (Map Screen) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 999,
name: "Ghost House BGM - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 1000,
name: "Castle BGM - Super Mario World",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1001,
name: "Koopalings BGM - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 1002,
name: "Valley of Bowser (Map Screen) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 1003,
name: "Bowser BGM (Phase 1) - Super Mario World",
tags: ["All", "Top Tracks"]
},
{
id: 1004,
name: "Ending - Super Mario World",
tags: ["All", "Top Tracks"]
},

//// Kirby's Dream Land
{
id: 18,
name: "Welcome To Dream Land - Kirby's Dream Land",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 19,
name: "Green Greens - Kirby's Dream Land",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 20,
name: "Boss Theme - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 21,
name: "Castle Lololo - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 22,
name: "Invincible - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 23,
name: "Float Islands - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 24,
name: "Shooting - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 25,
name: "Bubbly Clouds - Kirby's Dream Land",
tags: ["All", "Top Tracks"],
},
{
id: 26,
name: "Mt. DeDeDe - Kirby's Dream Land",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 27,
name: "A New Wind for Tomorrow - Kirby's Dream Land",
tags: ["All", "Top Tracks", "Selects"],
},

//// Super Mario Kart
{
id: 930,
name: "Super Mario Kart Title Screen - Super Mario Kart",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 931,
name: "Selection Screens - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 932,
name: "Mario Circuit - Super Mario Kart",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 933,
name: "Donut Plains - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 934,
name: "Ghost Valley - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 935,
name: "Bowser Castle - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 936,
name: "Choco Island - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 937,
name: "Koopa Beach - Super Mario Kart",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 938,
name: "Vanilla Lake - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 939,
name: "Rainbow Road - Super Mario Kart",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 940,
name: "Race Results (Mario) - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 941,
name: "Awards Ceremony (1st – 3rd Place) - Super Mario Kart",
tags: ["All", "Top Tracks"]
},
{
id: 942,
name: "Staff Credits - Super Mario Kart",
tags: ["All", "Top Tracks"]
},

//// Donkey Kong Country
{
id: 28,
name: "Theme - Donkey Kong Country",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 29,
name: "Simian Segue - Donkey Kong Country",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 30,
name: "DK Island Swing - Donkey Kong Country",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 35,
name: "Bonus Room Blitz - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 31,
name: "Aquatic Ambiance - Donkey Kong Country",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 33,
name: "Funky's Fugue - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 32,
name: "Mine Cart Madness - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 34,
name: "Treetop Rock - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 38,
name: "Bad Boss Boogie - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 36,
name: "Northern Hemispheres - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 37,
name: "Fear Factory - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 39,
name: "Gang-Plank Galleon - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},
{
id: 40,
name: "The Credits Concerto - Donkey Kong Country",
tags: ["All", "Top Tracks"],
},

//// Super Mario World 2: Yoshi's Island
{
id: 41,
name: "Opening Melody - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 42,
name: "Yoshi's Island - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 51,
name: "Map Screen - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 43,
name: "Flower Field BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 44,
name: "Goal! - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 45,
name: "Underground BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 47,
name: "Stage Boss - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 48,
name: "Athletic BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 49,
name: "Ground BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 46,
name: "Castles & Forts BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 50,
name: "Big Boss BGM - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 52,
name: "Bowser - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},
{
id: 53,
name: "Ending - Super Mario World 2: Yoshi's Island",
tags: ["All", "Top Tracks"],
},

//// Donkey Kong Country 2: Diddy's Kong Quest
{
id: 709,
name: "K. Rool Returns (Title Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 710,
name: "Welcome to Crocodile Isle (Map Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 711,
name: "Klomp's Romp (Pirate Panic) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 712,
name: "Lockjaw's Saga (Lockjaw's Locker) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 713,
name: "Boss Bossanova (Boss Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 714,
name: "Hot-Head Bop (Hot-Head Hop) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 715,
name: "Kannon's Klanking (Kannon's Klaim) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 716,
name: "Funky the Main Monkey (Funky's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 717,
name: "Snakey Chantey (Rattle Battle) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 718,
name: "Stickerbush Symphony (Bramble Blast) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 719,
name: "Flight of the Zinger (Hornet Hole) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 720,
name: "Haunted Chase (Haunted Hall) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 721,
name: "Forest Interlude (Web Woods) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 722,
name: "Token Tango (Bonus Level) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 723,
name: "Krook's March (Chain Link Chamber) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 724,
name: "In a Snowbound Land (Clapper's Cavern) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 725,
name: "False Victory - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 726,
name: "Crocodile Cacophony (K. Rool's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},
{
id: 727,
name: "Donkey Kong Rescued (Credits Roll) - Donkey Kong Country 2: Diddy's Kong Quest",
tags: ["All", "Top Tracks"]
},

//// Super Mario 64
{
id: 854,
name: "Title Theme - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 855,
name: "File Select - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 856,
name: "Opening - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 857,
name: "Peach's Castle - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 858,
name: "Main Theme - Super Mario 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 859,
name: "Stage Boss - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 860,
name: "Slider - Super Mario 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 861,
name: "Dire, Dire Docks - Super Mario 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 862,
name: "Cool, Cool Mountain - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 863,
name: "Bowser's Road - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 864,
name: "Bowser's Theme - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 865,
name: "Powerful Mario - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 866,
name: "Big Boo's Haunt - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 867,
name: "Hazy Maze Cave - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 868,
name: "Lethal Lava Land - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 869,
name: "The Final Battle - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 870,
name: "Ending - Super Mario 64",
tags: ["All", "Top Tracks"]
},
{
id: 871,
name: "Staff Roll - Super Mario 64",
tags: ["All", "Top Tracks"]
},

/// Wave Race 64
{
id: 795,
name: "Title Theme - Wave Race 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 796,
name: "Dolphin Park - Wave Race 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 797,
name: "Sunny Beach (1996 Ver.) - Wave Race 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 798,
name: "Sunset Bay - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 799,
name: "Drake Lake - Wave Race 64",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 800,
name: "Marine Fortress - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 801,
name: "Port Blue - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 802,
name: "Twilight City - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 803,
name: "Glacier Coast - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 804,
name: "Southern Island (1996 Ver.) - Wave Race 64",
tags: ["All", "Top Tracks"]
},
{
id: 805,
name: "Championship Ending - Wave Race 64",
tags: ["All", "Top Tracks"]
},

//// Donkey Kong Country 3: Dixie Kong's Double Trouble!
{
id: 872,
name: "Dixie Beat - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 873,
name: "Northern Kremisphere - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 874,
name: "Hangin’ at Funky’s - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 875,
name: "Sub-Map Shuffle - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 877,
name: "Stilt Village - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 878,
name: "Frosty Frolics - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 886,
name: "Boss Boogie - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 879,
name: "Treetop Tumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 880,
name: "Hot Pursuit - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 876,
name: "Bonus Time - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 881,
name: "Cascade Capers - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 882,
name: "Nuts and Bolts - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 887,
name: "Crystal Chasm - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 883,
name: "Rockface Rumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 885,
name: "Cavern Caprice - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 884,
name: "Jungle Jitter - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 888,
name: "Big Boss Blues - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},
{
id: 889,
name: "Baddies on Parade - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
tags: ["All", "Top Tracks"]
},

//// Star Fox 64
{
id: 54,
name: "Opening Theme - Star Fox 64",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 55,
name: "Title Theme - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 56,
name: "Demo 1 - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 57,
name: "Corneria - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 71,
name: "Boss Battle 1 - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 76,
name: "Mission Complete - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 59,
name: "Meteo - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 69,
name: "Warp - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 60,
name: "Sector Y & Solar - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 58,
name: "Fichina & Sector Z - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 61,
name: "Katina - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 62,
name: "Aquas - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 72,
name: "Boss Battle 2 - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 63,
name: "Sector X - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 64,
name: "Zoness - Star Fox 64",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 65,
name: "Titania & Macbeth - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 67,
name: "Bolse - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 73,
name: "Boss Battle 3 - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 66,
name: "Area 6 - Star Fox 64",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 68,
name: "Venom - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 70,
name: "Star Wolf's Theme - Star Fox 64",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 74,
name: "Andross Battle - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 75,
name: "Final Battle - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 77,
name: "All Clear - Star Fox 64",
tags: ["All", "Top Tracks"],
},
{
id: 78,
name: "Credits Theme - Star Fox 64",
tags: ["All", "Top Tracks"],
},

//// F-Zero X
{
id: 751,
name: "Title BGM - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 752,
name: "Machine Select - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 742,
name: "Endless Challenge (Mute City) - F-Zero X",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 743,
name: "Dream Chaser (Silence) - F-Zero X",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 744,
name: "Fall Down to the Stream (Sand Ocean / Fire Field) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 745,
name: "Decided by the Eyes (Big Blue) - F-Zero X",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 746,
name: "A Devil's Call in Your Heart (Devil's Forest) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 747,
name: "Long-Distance Murder (Red Canyon / Space Plant) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 748,
name: "Crazy Crying Call (Port Town) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 749,
name: "Drivin' Through on MAX (Sector α / Sector β / Rainbow Road) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 750,
name: "Climb Up / Last Chance! (White Land / Big Hand) - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 753,
name: "Goal BGM - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 754,
name: "Grand Prix Ending - F-Zero X",
tags: ["All", "Top Tracks"]
},
{
id: 755,
name: "Staff Roll - F-Zero X",
tags: ["All", "Top Tracks"]
},

//// The Legend of Zelda: Ocarina of Time
{
id: 79,
name: "Title Theme - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 80,
name: "House - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 81,
name: "Kokiri Forest - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 82,
name: "Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 83,
name: "Inside the Deku Tree - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 84,
name: "Boss Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 85,
name: "Hyrule Field Main Theme - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 86,
name: "Market - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 87,
name: "Zelda's Theme - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 88,
name: "Lon Lon Ranch - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 89,
name: "Kakariko Village - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 90,
name: "Goron City - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 91,
name: "Lost Woods - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 92,
name: "Dodongo's Cavern - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 96,
name: "Great Fairy's Fountain - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 95,
name: "Zora's Domain - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 97,
name: "Inside Jabu-Jabu's Belly - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 98,
name: "Temple of Time - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 99,
name: "Ganondorf's Theme - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 100,
name: "Chamber of the Sages - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 101,
name: "Sheik's Theme - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 102,
name: "Kakariko Village Orchestral Ver. - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 103,
name: "Forest Temple - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 104,
name: "Fire Temple - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 94,
name: "Dinosaur Boss Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 105,
name: "Ice Cavern - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 106,
name: "Water Temple - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 93,
name: "Middle Boss Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 107,
name: "Shadow Temple - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 108,
name: "Gerudo Valley - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 109,
name: "Spirit Temple - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 110,
name: "Ganon's Tower - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 111,
name: "Ganondorf Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 112,
name: "Last Battle - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},
{
id: 113,
name: "End Credits - The Legend of Zelda: Ocarina of Time",
tags: ["All", "Top Tracks"],
},

//// Golden Sun
{
id: 1004,
name: "Main Theme (Title) - Golden Sun",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1005,
name: "Setting Off - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1006,
name: "Dungeon Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1007,
name: "Chance Meeting with Sworn Enemies - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1008,
name: "Village Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1009,
name: "Sol Sanctum - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1010,
name: "Elemental Stars - Golden Sun",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1011,
name: "A Long Journey - Golden Sun",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1012,
name: "Battle - Golden Sun",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1013,
name: "Wind Adepts - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1014,
name: "Cave Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1015,
name: "Forest Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1016,
name: "Battling a Powerful Foe - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1017,
name: "Mercury Lighthouse - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1018,
name: "Sworn Enemies Stand in Your Way - Golden Sun",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1019,
name: "Town Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1020,
name: "Temple Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1021,
name: "Port-Town Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1022,
name: "Tolbi - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1023,
name: "Labyrinth Theme - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1024,
name: "Colosseum Finals - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1025,
name: "Babi Lighthouse - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1026,
name: "Venus Lighthouse - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1027,
name: "Battle with Saturos & Menardi - Golden Sun",
tags: ["All", "Top Tracks"]
},
{
id: 1028,
name: "Battle with the Fusion Dragon - Golden Sun",
tags: ["All", "Top Tracks"]
},

//// Metroid Prime
{
id: 148,
name: "File Select - Metroid Prime",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 149,
name: "Prologue - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 150,
name: "Pirate Frigate - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 151,
name: "Parasite Queen Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 152,
name: "Tallon Overworld - Metroid Prime",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 153,
name: "Timeworn Chozo Remnants - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 154,
name: "Hive Mecha Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 155,
name: "Plated Beetle Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 156,
name: "Chozo Ruins - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 157,
name: "Flaahgra Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 158,
name: "Magmoor Caverns - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 159,
name: "Phendrana Drifts - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 160,
name: "Space Pirates Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 161,
name: "Thardus Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 162,
name: "Tallon Overworld Revisited - Metroid Prime",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 163,
name: "Chozo Ghosts Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 164,
name: "Phendrana Battle - Metroid Prime",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 165,
name: "Crashed Ship - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 166,
name: "Phazon Mines - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 167,
name: "Omega Pirate Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 168,
name: "Chozo Shrine - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 169,
name: "Meta Ridley Battle - Metroid Prime",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 170,
name: "Metroid Prime Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 171,
name: "Metroid Prime (Core) Battle - Metroid Prime",
tags: ["All", "Top Tracks"],
},
{
id: 172,
name: "Credits - Metroid Prime",
tags: ["All", "Top Tracks"],
},

//// The Legend of Zelda: The Wind Waker
{
id: 890,
name: "Title Theme - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 891,
name: "Legend of the Hero - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 892,
name: "Outset Island - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 893,
name: "Battle Theme - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 894,
name: "Grandma - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 895,
name: "Setting Sail - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 896,
name: "Pirates - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 897,
name: "Forsaken Fortress - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 898,
name: "Windfall Island - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 899,
name: "The Great Sea - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 900,
name: "Clash at Sea - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 902,
name: "Dragon Roost Island - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 903,
name: "Intense Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 904,
name: "Gohma Battle (Second Phase) - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 905,
name: "Forest Haven - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 906,
name: "Forbidden Woods - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 907,
name: "Kalle Demos - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 908,
name: "The Cursed Sea - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 901,
name: "Battle at Sea - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 909,
name: "Tower of the Gods - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 910,
name: "Gohdan Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 911,
name: "Hyrule Castle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 912,
name: "Phantom Ganon Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 913,
name: "Reunited with Aryll - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 914,
name: "Helmaroc King Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 915,
name: "Zelda's Theme - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 916,
name: "Fairy Queen - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 917,
name: "Sage Laruto - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 918,
name: "The Earth Temple - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 919,
name: "Jalhalla Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 920,
name: "Medli's Prayer - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 921,
name: "Sage Fado - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 922,
name: "Wind Temple - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 923,
name: "Molgera Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 924,
name: "Makar's Prayer - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 925,
name: "Hero of Winds - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 926,
name: "Ganon's Tower - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 927,
name: "Puppet Ganon (Snake Form) - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 928,
name: "Ganondorf Battle - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
{
id: 929,
name: "Staff Credits - The Legend of Zelda: The Wind Waker",
tags: ["All", "Top Tracks"]
},
  
//// Fire Emblem: The Blazing Blade
{
id: 114,
name: "Opening: History Unveiled - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 115,
name: "Fire Emblem Theme - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 140,
name: "Girl of the Plains: Lyn's Theme - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 117,
name: "Winds across the Plains - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 125,
name: "Strike - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 124,
name: "Winning Road - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 126,
name: "Victory Now! - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 138,
name: "Triumph - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 141,
name: "Light to Tomorrow - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 116,
name: "A Hint of Things to Come - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 142,
name: "One Heart: Eliwood's Theme - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 118,
name: "Precious Things - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 133,
name: "Together, We Ride! - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 144,
name: "Loyalty: Hector's Theme - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 120,
name: "Friendship and Adventure - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 135,
name: "What Comes from Darkness - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 132,
name: "An Unexpected Caller - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 146,
name: "Prepare to Charge - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 119,
name: "Companions - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks", "Selects"],
},
{
id: 121,
name: "Distant Travels - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 127,
name: "Rise to the Challenge - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 134,
name: "The Archsage Athos - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 136,
name: "Black Fang - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 122,
name: "Inescapable Fate - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 128,
name: "Softly with Grace - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 145,
name: "Reminiscence - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 137,
name: "Nergal's Wrath - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 143,
name: "Unshakable Faith - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 123,
name: "Dragon's Gate II - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 131,
name: "Blessing of the Eight Generals I - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 129,
name: "Everything into the Dark - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 130,
name: "Campaign of Fire - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 139,
name: "Main Theme Arrangement - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},
{
id: 147,
name: "Treasured Hope - Fire Emblem: The Blazing Blade",
tags: ["All", "Top Tracks"],
},

//// nintendogs
{
id: 173,
name: "nintendogs - nintendogs",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 174,
name: "Shop & Kennel - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 175,
name: "Reading - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 176,
name: "Walking - nintendogs",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 177,
name: "Agility Trials - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 178,
name: "Bathing - nintendogs",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 179,
name: "Dog Show: Judges' Commentary - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 180,
name: "Dog Show: Beginner - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 181,
name: "Dog Show: Expert - nintendogs",
tags: ["All", "Top Tracks"]
},
{
id: 182,
name: "Dog Show: Championship - nintendogs",
tags: ["All", "Top Tracks"]
},

//// Brain  Age: Train Your Brain in Minutes a Day!
{
id: 756,
name: "Title Theme - Brain Age: Train Your Brain in Minutes a Day!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 757,
name: "Menu Theme - Brain Age: Train Your Brain in Minutes a Day!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 758,
name: "Results - Brain Age: Train Your Brain in Minutes a Day!",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 759,
name: "Checking Answers - Brain Age: Train Your Brain in Minutes a Day!",
tags: ["All", "Top Tracks"]
},
{
id: 760,
name: "Staff Credits - Brain Age: Train Your Brain in Minutes a Day!",
tags: ["All", "Top Tracks", "Selects"]
},

//// Wii Channels
{
id: 200,
name: "Wii Menu - Wii Channels",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 201,
name: "Mii Plaza (Mii Channel) - Wii Channels",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 202,
name: "Mii Parade: Walking (Mii Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 203,
name: "Selecting Photos (Photo Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 204,
name: "Digital Camera / Cell Phone (Photo Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 205,
name: "View Wii Message Board Photos (Photo Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 206,
name: "Main Theme (Wii Shop Channel) - Wii Channels",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 207,
name: "Forecast: Daytime (Forecast Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 209,
name: "Forecast: Nighttime (Forecast Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 208,
name: "Globe: Daytime (Forecast Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 210,
name: "Globe: Nighttime (Forecast Channel) - Wii Channels",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 211,
name: "Menu (News Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 212,
name: "Checking the News: Daytime (News Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 213,
name: "Checking the News: Nighttime (News Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 214,
name: "Globe (News Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 215,
name: "Menu (Everybody Votes Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 216,
name: "Poll Screen (Everybody Votes Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 217,
name: "Results (Everybody Votes Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 218,
name: "Menu (Check Mii Out Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 219,
name: "Posting Plaza (Check Mii Out Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 220,
name: "Parade (Check Mii Out Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},
{
id: 221,
name: "Contests (Check Mii Out Channel) - Wii Channels",
tags: ["All", "Top Tracks"]
},

//// Wii Sports
{
id: 728,
name: "Title Theme - Wii Sports",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 729,
name: "Main Menu - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 730,
name: "Learning to Play - Wii Sports",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 731,
name: "Tennis: Player Selection - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 732,
name: "Tennis: Results - Wii Sports",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 733,
name: "Baseball: Results - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 734,
name: "Bowling: The Alley - Wii Sports",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 735,
name: "Bowling: Results - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 736,
name: "Golf: Course Selection - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 737,
name: "Golf: Results - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 738,
name: "Boxing: Results - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 739,
name: "Boxing: Training - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 740,
name: "Training: Earning a Medal - Wii Sports",
tags: ["All", "Top Tracks"]
},
{
id: 741,
name: "Wii Fitness: Menu - Wii Sports",
tags: ["All", "Top Tracks"]
},

//// Super Mario Galaxy
{
id: 222,
name: "Overture - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 243,
name: "Luma - Super Mario Galaxy",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 223,
name: "The Star Festival - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 244,
name: "Gateway Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 224,
name: "Enter the Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 225,
name: "Egg Planet - Super Mario Galaxy",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 245,
name: "Dino Piranha - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 248,
name: "Space Fantasy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 246,
name: "King Kaliente - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 226,
name: "The Honeyhive - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 241,
name: "Blue Sky Athletic - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 250,
name: "Space Athletic - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 230,
name: "Enter Bowser Jr.! - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 249,
name: "Megaleg - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 227,
name: "Space Junk Road - Super Mario Galaxy",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 263,
name: "Kamella - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 228,
name: "Battlerock Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 252,
name: "The Fiery Stronghold - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 235,
name: "King Bowser - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 229,
name: "Beach Bowl Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 255,
name: "Drip Drop Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 231,
name: "Waltz of the Boos - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 232,
name: "Buoy Base Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 247,
name: "Airship Armada - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 233,
name: "Gusty Garden Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 253,
name: "Major Burrows - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 257,
name: "Ice Mountain - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 261,
name: "A-wa-wa-wa! - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 258,
name: "Lava Path - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 259,
name: "Dusty Dune Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 234,
name: "Rosalina in the Observatory 3 - Super Mario Galaxy",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 242,
name: "Super Mario 2007 - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 260,
name: "Heavy Metal Mecha-Bowser - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 256,
name: "Kingfin - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 262,
name: "Deep Dark Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 236,
name: "Melty Molten Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 251,
name: "Speedy Comet - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 254,
name: "Cosmic Comet - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 240,
name: "Purple Comet - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 237,
name: "The Galaxy Reactor - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 238,
name: "Final Battle with Bowser - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},
{
id: 239,
name: "Super Mario Galaxy - Super Mario Galaxy",
tags: ["All", "Top Tracks"]
},

//// Tomodachi Collection
{
id: 197,
name: "Town Hall - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 183,
name: "Making a Friend - Tomodachi Collection",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 185,
name: "Afternoon on the Island - Tomodachi Collection",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 187,
name: "Mii News Report - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 184,
name: "Apartment Hangout - Tomodachi Collection",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 195,
name: "Let's Play a Game - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 188,
name: "Food Mart - Tomodachi Collection",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 189,
name: "Clothing Shop - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 190,
name: "Interiors Shop - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 191,
name: "Majority Rule - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 192,
name: "Compatibility Tester - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 193,
name: "Career Counselor - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 194,
name: "Q&A - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 186,
name: "Nighttime on the Island - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 196,
name: "Pent-Up Passion - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 198,
name: "Tying the Knot - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},
{
id: 199,
name: "Staff Credits - Tomodachi Collection",
tags: ["All", "Top Tracks"]
},

//// StreetPass Mii Plaza
{
id: 1029,
name: "Entrance (StreetPass Mii Plaza) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1030,
name: "Main Theme 1 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1031,
name: "Main Theme 4 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1032,
name: "Main Theme 7 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1033,
name: "Title (Puzzle Swap) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1034,
name: "Collected Pieces (Puzzle Swap) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1035,
name: "Title (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1036,
name: "Palace Theme (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1037,
name: "To Battle, Heroes! (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1038,
name: "Fight On, Heroes! (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1039,
name: "Armored Fiend (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1040,
name: "Ultimate Ghost (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1041,
name: "Ending (Find Mii) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1042,
name: "Title (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1043,
name: "Keep Fighting, Heroes! (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1044,
name: "Save the World, Heroes! (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1045,
name: "Armored Archfiend (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},
{
id: 1046,
name: "Dark Lord (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 1047,
name: "Ending (Find Mii II) - StreetPass Mii Plaza",
tags: ["All", "Top Tracks"]
},

//// The Legend of Zelda: Skyward Sword
{
id: 806,
name: "The Ballad of the Goddess (Main Theme) - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 807,
name: "Islands in the Sky - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 808,
name: "Skyloft - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 809,
name: "A Moment with Zelda - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 810,
name: "Groose Appears - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 811,
name: "The Wing Ceremony - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 812,
name: "Among the Clouds - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 813,
name: "The Black Tornado - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 814,
name: "Fi's Theme - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 815,
name: "Braving the Unknown - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 816,
name: "Gliding with a Loftwing - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 817,
name: "Battle Theme - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 818,
name: "The Sealed Temple - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 819,
name: "Faron Woods - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 820,
name: "The Skyview Temple - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 821,
name: "A Duel with Ghirahim - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 822,
name: "Eldin Volcano - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 823,
name: "The Earth Temple - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 824,
name: "Scaldera & Tentalus Battles - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 825,
name: "Lanayru Desert - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 826,
name: "The Lanayru Mining Facility - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 827,
name: "Moldarach & Koloktos Battles - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 828,
name: "Ghirahim's Assault - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 829,
name: "Learning the Ballad of the Goddess - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 830,
name: "The Imprisoned Battle - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 831,
name: "The Statue of the Goddess - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 832,
name: "Farore's Silent Realm - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 833,
name: "The Guardians Give Chase - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 834,
name: "Lake Floria - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 835,
name: "The Ancient Cistern - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 836,
name: "Koloktos Battle (Second Phase) - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 837,
name: "The Lanayru Sand Sea - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 838,
name: "A Strong Foe - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 839,
name: "The Fire Sanctuary - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 840,
name: "A Fierce Fight - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 841,
name: "Reuniting with Zelda - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 842,
name: "The Master Sword's Ultimate Form - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 843,
name: "Ocular Parasite Bilocyte Battle - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 844,
name: "Dragon's Den - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 845,
name: "The Song of the Hero - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 846,
name: "The Sky Keep - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 847,
name: "A Return to the Surface - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 848,
name: "Showdown with Ghirahim (Second Phase) - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 849,
name: "Demise Battle - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 850,
name: "Demise Strikes - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 851,
name: "Thank You, Master Link - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 852,
name: "A Tale of Origins - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},
{
id: 853,
name: "Staff Credits - The Legend of Zelda: Skyward Sword",
tags: ["All", "Top Tracks"]
},

//// The Legend of Zelda: Breath of the Wild
{
id: 264,
name: "Opening - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 272,
name: "Overworld (Battle): Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 265,
name: "The Shrine's Trial - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 266,
name: "Battle (Shrine): Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 267,
name: "The Great Plateau - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 268,
name: "In the Guardian's Sights - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 269,
name: "The Temple of Time - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 270,
name: "King Rhoam's Plea - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 271,
name: "Overworld (Day) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 273,
name: "Galloping (Day) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 274,
name: "Stone Talus Battle - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 275,
name: "Kakariko Village - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 276,
name: "Hateno Village - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 277,
name: "Hateno Ancient Tech Lab - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 278,
name: "Great Fairy Fountain - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 279,
name: "Overworld (Night) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 280,
name: "Kass's Theme - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 281,
name: "The Stables - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 282,
name: "Galloping (Night) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 283,
name: "Hinox Battle - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 285,
name: "Zora's Domain - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 284,
name: "Sidon's Theme - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 286,
name: "Battle with Divine Beast Vah Ruta - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 287,
name: "Battle with Waterblight Ganon - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 288,
name: "Reuniting with Mipha - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 289,
name: "Goron City - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 290,
name: "Meeting Yunobo - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 291,
name: "Battle with Divine Beast Vah Rudania - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 292,
name: "Battle with Fireblight Ganon - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 293,
name: "Reuniting with Daruk - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 294,
name: "Rito Village - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 295,
name: "Battle with Divine Beast Vah Medoh - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 296,
name: "Teba's Encouragement - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 297,
name: "Battle with Windblight Ganon - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 298,
name: "Reuniting with Revali - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 299,
name: "Gerudo Town - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 300,
name: "Meeting Riju - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 301,
name: "Battle with Master Kohga - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 302,
name: "Battle with Divine Beast Vah Naboris - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 303,
name: "Battle with Thunderblight Ganon - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 304,
name: "Reuniting with Urbosa - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 305,
name: "Molduga Battle - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 306,
name: "Tarrey Town - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 307,
name: "Korok Forest - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 308,
name: "Master Sword Obtained - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 309,
name: "Memories of the Sword - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 310,
name: "Lurelin Village - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 311,
name: "Malanya's Spring - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 312,
name: "Memory Recovered - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 313,
name: "Recovered Memory: Zelda's Awakening - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 314,
name: "Guardian Battle - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 315,
name: "Hyrule Castle - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 316,
name: "Calamity Ganon Appears - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 317,
name: "The Champions' Power Mobilized - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 318,
name: "Battle with Calamity Ganon (First Form) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 319,
name: "Battle with Calamity Ganon (Second Form) - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 320,
name: "Dark Beast Ganon Appears - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 321,
name: "Battle with Dark Beast Ganon - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 322,
name: "Do You Really Remember Me? - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 323,
name: "Staff Credits - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},
{
id: 324,
name: "Epilogue - The Legend of Zelda: Breath of the Wild",
tags: ["All", "Top Tracks"]
},

//// Mario Kart 8 Deluxe
{
id: 325,
name: "Mario Kart 8 Title Screen - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 326,
name: "Mario Kart Stadium - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 327,
name: "Water Park - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 328,
name: "Sweet Sweet Canyon - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 329,
name: "Thwomp Ruins - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 330,
name: "Mario Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 331,
name: "Toad Harbor - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 332,
name: "Twisted Mansion - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 333,
name: "Shy Guy Falls - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 334,
name: "Sunshine Airport - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 335,
name: "Dolphin Shoals (On the Sea) - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 336,
name: "Electrodrome - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 337,
name: "Mount Wario - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 338,
name: "Cloudtop Cruise - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 339,
name: "Bone-Dry Dunes - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 340,
name: "Bowser's Castle - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 341,
name: "Rainbow Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 342,
name: "Wii Moo Moo Meadows - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 343,
name: "GBA Mario Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 344,
name: "DS Cheep Cheep Beach - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 345,
name: "N64 Toad's Turnpike - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 346,
name: "GCN Dry Dry Desert - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 347,
name: "SNES Donut Plains 3 - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 348,
name: "N64 Royal Raceway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 349,
name: "3DS DK Jungle - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 350,
name: "DS Wario Stadium - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 351,
name: "GCN Sherbet Land - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 352,
name: "3DS Music Park - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 353,
name: "N64 Yoshi Valley - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 354,
name: "DS Tick-Tock Clock - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 355,
name: "3DS Piranha Plant Slide - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 356,
name: "Wii Grumble Volcano - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 357,
name: "N64 Rainbow Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 358,
name: "GCN Yoshi Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 359,
name: "Excitebike Arena - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 360,
name: "Dragon Driftway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 361,
name: "Mute City - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 362,
name: "Wii Wario's Gold Mine - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 363,
name: "SNES Rainbow Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 364,
name: "Ice Ice Outpost - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 365,
name: "Hyrule Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 366,
name: "GCN Baby Park - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 367,
name: "GBA Cheese Land - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 368,
name: "Wild Woods - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 369,
name: "Animal Crossing (Spring) - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 370,
name: "3DS Neo Bowser City - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 371,
name: "GBA Ribbon Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 372,
name: "Super Bell Subway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 373,
name: "Big Blue - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 374,
name: "Staff Credits - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 375,
name: "Tour Paris Promenade - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 376,
name: "3DS Toad Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 377,
name: "N64 Choco Mountain - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 378,
name: "Wii Coconut Mall - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 379,
name: "Tour Tokyo Blur - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 380,
name: "DS Shroom Ridge - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 381,
name: "GBA Sky Garden - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 382,
name: "Ninja Hideaway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 383,
name: "Tour New York Minute - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 384,
name: "SNES Mario Circuit 3 - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 385,
name: "N64 Kalimari Desert - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 386,
name: "Tour Sydney Sprint - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 387,
name: "GBA Snow Land - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 388,
name: "Wii Mushroom Gorge - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 389,
name: "Sky-High Sundae - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 390,
name: "Tour London Loop - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 391,
name: "GBA Boo Lake - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 392,
name: "3DS Rock Rock Mountain - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 393,
name: "Wii Maple Treeway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 394,
name: "Tour Berlin Byways - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 395,
name: "DS Peach Gardens - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 396,
name: "Merry Mountain - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 397,
name: "3DS Rainbow Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 398,
name: "Tour Amsterdam Drift - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 399,
name: "GBA Riverside Park - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 400,
name: "Wii DK Summit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 401,
name: "Yoshi's Island - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 402,
name: "Tour Bangkok Rush - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 403,
name: "DS Mario Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 404,
name: "GCN Waluigi Stadium - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 405,
name: "Tour Singapore Speedway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 406,
name: "Tour Athens Dash - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 407,
name: "GCN Daisy Cruiser - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 408,
name: "Wii Moonview Highway - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 409,
name: "Squeaky Clean Sprint - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 410,
name: "Tour Los Angeles Laps - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 411,
name: "GBA Sunset Wilds - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 412,
name: "Wii Koopa Cape - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 413,
name: "Tour Vancouver Velocity - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 414,
name: "Tour Rome Avanti - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 415,
name: "GCN DK Mountain - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 416,
name: "Wii Daisy Circuit - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 417,
name: "Piranha Plant Cove - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 418,
name: "Tour Madrid Drive - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 419,
name: "3DS Rosalina's Ice World - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 420,
name: "SNES Bowser Castle 3 - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 421,
name: "Wii Rainbow Road - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},
{
id: 422,
name: "Staff Credits (Booster Course Pass) - Mario Kart 8 Deluxe",
tags: ["All", "Top Tracks"]
},

//// Splatoon 2
{
id: 761,
name: "Opening / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 762,
name: "Inkoming! / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 763,
name: "Rip Entry / Wet Floor  - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 764,
name: "Undertow / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 765,
name: "Don't Slip / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 766,
name: "Endolphin Surge / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 767,
name: "Shipwreckin' / Bottom Feeders - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 768,
name: "Fins & Fiddles / Bottom Feeders - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 769,
name: "Seafoam Shanty / Bottom Feeders - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 770,
name: "Broken Coral / Ink Theory - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 771,
name: "Riptide Rupture / Ink Theory - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 772,
name: "Blitz It! / Chirpy Chips - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 773,
name: "Wave Prism / Chirpy Chips - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 774,
name: "Seasick / Diss-Pair - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 775,
name: "Kinetosis / Diss-Pair - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 776,
name: "Chopscrewey / SashiMori - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 777,
name: "Entropical / SashiMori - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 778,
name: "Now or Never! / Wet Floor - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 779,
name: "Happy Little Workers / Grizzco - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 780,
name: "Deluge Dirge / ω-3 - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 781,
name: "Fishing Frenzy / ω-3 - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 782,
name: "Color Pulse / Off the Hook - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 783,
name: "Ebb & Flow / Off the Hook - Splatoon 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 784,
name: "Acid Hues / Off the Hook - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 785,
name: "Muck Warfare / Off the Hook - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 786,
name: "Now or Never! / Off the Hook - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 787,
name: "Octo Canyon / Turquoise October - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 788,
name: "Octo Eight-Step / Turquoise October - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 789,
name: "Octoling Rendezvous / Turquoise October - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 790,
name: "Octarmaments / Turquoise October - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 791,
name: "Bomb Rush Blush / DJ Octavio feat. Callie - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 792,
name: "Tidal Rush / DJ Octavio feat. Callie vs. Marie - Splatoon 2",
tags: ["All", "Top Tracks"]
},
{
id: 793,
name: "Spicy Calamari Inkantation / Squid Sisters - Splatoon 2",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 794,
name: "Fresh Start / Squid Sisters - Splatoon 2",
tags: ["All", "Top Tracks"]
},

//// Super Mario Odyssey
{
id: 423,
name: "Title Screen - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 424,
name: "Bonneton - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 425,
name: "Battling the Broodals - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 426,
name: "Fossil Falls - Super Mario Odyssey",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 427,
name: "Battling Madame Broode - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 428,
name: "Tostarena Ruins - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 429,
name: "Inside the Inverted Pyramid - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 430,
name: "Knocking Out Knucklotec - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 431,
name: "Tostarena Town - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 432,
name: "Steam Gardens - Super Mario Odyssey",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 433,
name: "Tusseling with Torkdrift - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 434,
name: "Lake Lamode - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 435,
name: "Battling Bowser 1: Showdown in Nimbus Arena - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 436,
name: "The Forgotten Isle - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 437,
name: "Menacing Mechawiggler - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 438,
name: "New Donk City - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 439,
name: "The Band's All Here: Super Mario Bros. Ground BGM - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 440,
name: "Underground Power Plant - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 441,
name: "Jump Up, Super Star!: New Donk City Festival - Super Mario Odyssey",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 442,
name: "To the Next Kingdom - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 443,
name: "Shiveria Town - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 444,
name: "Ice Caves - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 445,
name: "The Bound Bowl Grand Prix - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 446,
name: "Bubblaine - Super Mario Odyssey",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 447,
name: "Battling Brigadier Mollusque-Lanceur III, Dauphin of Bubblaine - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 448,
name: "Mount Volbono - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 449,
name: "Peronza Plaza - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 450,
name: "Cooking Cookatiel - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 451,
name: "Rebuffing the Ruined Dragon - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 452,
name: "Bowser's Castle - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 453,
name: "Bowser's Castle: Main Courtyard - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 454,
name: "Wrecking RoboBrood - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 455,
name: "Honeylune Ridge - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 456,
name: "Underground Moon Caverns - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 457,
name: "The Wedding Hall - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 458,
name: "Battling Bowser 2: The Final Fight - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 459,
name: "Honeylune Ridge: Collapse - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 460,
name: "Break Free (Lead the Way) - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},
{
id: 461,
name: "The Super Mario Odyssey Crew - Super Mario Odyssey",
tags: ["All", "Top Tracks"]
},

//// Kirby Star Allies
{
id: 462,
name: "Twinkle☆Stars - Kirby Star Allies",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 463,
name: "Let's Be Friends♡ - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 464,
name: "A Rude Awakening - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 465,
name: "World of Peace: Dream Land - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 466,
name: "Green Gardens - Kirby Star Allies",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 467,
name: "Donut Dome - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 469,
name: "Friend Puzzle Solving - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 468,
name: "Honey Hill - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 470,
name: "Invincible - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 471,
name: "A Battle of Friends and Bonds - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 472,
name: "For the Brave - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 473,
name: "Macho of Dedede - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 474,
name: "Sudden Happy Ending - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 475,
name: "World of Miracles: Planet Popstar - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 476,
name: "Friendly Field - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 477,
name: "Reef Resort - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 478,
name: "Echo's Edge - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 479,
name: "Nature's Navel - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 480,
name: "Sacred Square - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 481,
name: "Twinkling☆Travelers - Kirby Star Allies",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 482,
name: "The Clash of Comrades' Blades - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 483,
name: "Fortress of Shadows: Jambastion! - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 484,
name: "Where Even Weeds Won't Grow - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 485,
name: "Adventures in Jambastion - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 486,
name: "Song of Supplication - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 487,
name: "True Friends Stand with You - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 488,
name: "A Forgotten Flash of Lightning - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 489,
name: "Far-Flung Starlight Heroes - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 490,
name: "Winds across Earthfall - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 491,
name: "Puzzle-Solving Galaxy - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 492,
name: "Misteen's Oceans - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 493,
name: "Caverna's Massive Mazes - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 494,
name: "Frostak's Arctic Tundra - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 495,
name: "Towara's Ancient Towers - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 496,
name: "Star Lavadom - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 497,
name: "Where Even Light Does Not Reach - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 498,
name: "Scarred Land of Dreams and New Greens - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 499,
name: "Path of Worship - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 500,
name: "Puppet Offering - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 501,
name: "La follia d'amore - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 502,
name: "Introduction: To Distant Seas of Stars - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 503,
name: "Suite: The Star-Conquering Traveler - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 504,
name: "The Star Allies Have Your Back! - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 505,
name: "Last Friends - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},
{
id: 506,
name: "Having Watched You All Along - Kirby Star Allies",
tags: ["All", "Top Tracks"]
},

//// Animal Crossing: New Horizons
{
id: 507,
name: "Opening Theme - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 534,
name: "Island-Wide Broadcast: Isabelle - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 513,
name: "5:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 514,
name: "6:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 536,
name: "Group Stretching - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 515,
name: "7:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 535,
name: "Resident Services - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 516,
name: "8:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 517,
name: "9:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 540,
name: "The Able Sisters - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 518,
name: "10:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 541,
name: "Nook's Cranny: Remodeled - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 519,
name: "11:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 520,
name: "12:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 537,
name: "Museum: Entrance - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 521,
name: "1:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 538,
name: "The Roost - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 522,
name: "2:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 523,
name: "3:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 539,
name: "Airport Lobby (Direct Feed Ver.) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 524,
name: "4:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 532,
name: "Mystery Island: Clear Afternoon - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 525,
name: "5:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 544,
name: "Harv's Island: Afternoon - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 526,
name: "6:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 527,
name: "7:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 546,
name: "Katrina's Fortune Reading - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 528,
name: "8:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 542,
name: "Jolly Redd's Treasure Trawler - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 529,
name: "9:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 530,
name: "10:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 547,
name: "Kapp'n's Sea Shanty: Outbound 1 - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 531,
name: "11:00 PM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 508,
name: "12:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 533,
name: "Mystery Island: Clear Evening - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 509,
name: "1:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 510,
name: "2:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 545,
name: "Harv's Island: Evening - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 511,
name: "3:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 512,
name: "4:00 AM: Clear - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 543,
name: "Dreaming of Luna - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 548,
name: "K.K. Cruisin' (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 549,
name: "Bubblegum K.K. (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 550,
name: "K.K. Bashment (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 551,
name: "K.K. Bossa (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 552,
name: "K.K. Lovers (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 553,
name: "K.K. Robot Synth (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 554,
name: "Drivin' (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 555,
name: "Stale Cupcakes (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 557,
name: "DJ K.K. (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},
{
id: 556,
name: "Welcome Horizons (Performance) - Animal Crossing: New Horizons",
tags: ["All", "Top Tracks"]
},

//// Pokémon Legends: Arceus
{
id: 943,
name: "Transported - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 944,
name: "Professor Laventon - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 945,
name: "A Meeting in Hisui - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 946,
name: "Jubilife Village - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 947,
name: "Galaxy Hall - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 948,
name: "Battle! (People of Hisui) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 949,
name: "Obsidian Fieldlands 1–1 - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 950,
name: "Battle! (Wild Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 951,
name: "Survey Report (Day) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 952,
name: "A Prelude to Battle (Alpha Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 953,
name: "Battle! (Alpha Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 954,
name: "A Tense Situation - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 955,
name: "Heartwood - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 956,
name: "Battle! (Noble Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 957,
name: "Case Closed - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 958,
name: "Crimson Mirelands 1–1 - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 959,
name: "Distortion - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 960,
name: "Settlement - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 961,
name: "Cobalt Coastlands 1–1 - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 962,
name: "Feelings - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 963,
name: "Night - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 964,
name: "Survey Report (Night) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 965,
name: "Firespit Island - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 966,
name: "Courage - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 967,
name: "Coronet Highlands - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 968,
name: "Battle! (People of Hisui 2) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 969,
name: "Alabaster Icelands 1–1 - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 970,
name: "Snowpoint Temple - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 971,
name: "Exiled - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 972,
name: "Disaster Looming - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 973,
name: "Battling during a Disaster (Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 974,
name: "Ancient Retreat - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 975,
name: "Stone Portal - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 976,
name: "Battle! (Dialga/Palkia) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 977,
name: "Temporary Retreat - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 978,
name: "Battle! (Origin Forme Dialga/Palkia) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 979,
name: "Finale - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 980,
name: "Ending Theme - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 981,
name: "Battle! (Azelf/Mesprit/Uxie) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 982,
name: "Battle! (Remarkable Pokémon) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 983,
name: "Volo’s Goal - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 984,
name: "Battle! (Volo) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 985,
name: "Battle! (Giratina) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 986,
name: "Azure Flute - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 987,
name: "Battle! (Arceus) - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},
{
id: 988,
name: "Title Screen - Pokémon Legends: Arceus",
tags: ["All", "Top Tracks"]
},

//// Splatoon 3
{
id: 558,
name: "Opening / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 559,
name: "Clickbait / C-Side - Splatoon 3",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 560,
name: "Headhammer / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 561,
name: "Triple Dip / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 562,
name: "Paintscraper / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 563,
name: "Splattack! / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 564,
name: "Sea Me Now / Front Roe - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 565,
name: "Sandy Side Up / Front Roe - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 566,
name: "Candy-Coated Rocks / Damp Socks feat. Off the Hook - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 567,
name: "Tentacle to the Metal / Damp Socks feat. Off the Hook - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 568,
name: "Now or Never! / C-Side - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 569,
name: "Happy Little Workers (24/7 Mix) / Grizzco - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 570,
name: "Frothy Waters / ω-3 - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 571,
name: "Toxic Anoxic / ω-3 - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 572,
name: "Bait & Click / ω-3 - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 583,
name: "Anarchy Poisons / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 584,
name: "Anarchy Rainbow / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 585,
name: "Fins in the Air / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 586,
name: "Till Depth Do Us Part / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 587,
name: "Liquid Sunshine / Squid Sisters feat. Ian BGM - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 588,
name: "Now or Never! / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 589,
name: "Tableturf Main Theme / Ancho-V Games - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 590,
name: "Tableturf Three Turns Remaining / Ancho-V Games - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 573,
name: "Crater Eighters Routine / Turquoise October - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 574,
name: "I'm Octavio (F34RME Remix) / DJ Octavio - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 575,
name: "Nine Out of Tension / Octoplush - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 576,
name: "With Flying Colors / Octoplush - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 577,
name: "Surprise and Shine / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 578,
name: "Hide and Sleek / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 579,
name: "Smeared Canvas / Deep Cut - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 580,
name: "Bear with Me / Grizzco - Splatoon 3",
tags: ["All", "Top Tracks"]
},
{
id: 581,
name: "Calamari Inkantation 3MIX / Deep Cut x Squid Sisters - Splatoon 3",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 582,
name: "Wave Goodbye / Squid Sisters - Splatoon 3",
tags: ["All", "Top Tracks"]
},

//// Pokémon Scarlet and Pokémon Violet
{
id: 591,
name: "Welcome to Paldea - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 592,
name: "Across the Skies of Paldea - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 593,
name: "Cabo Poco - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 594,
name: "First Meeting - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 595,
name: "Battle! (Nemona) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 596,
name: "Battle! (Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 597,
name: "By the Shore - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 598,
name: "Escape from the Cave - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 599,
name: "Battle! (Arven) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 600,
name: "South Province - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 601,
name: "Battle! (South Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 602,
name: "Pokémon Center - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 603,
name: "Los Platos - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 604,
name: "Mesagoza - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 605,
name: "Battle! (Team Star) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 606,
name: "The Academy - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 607,
name: "Professor Sada / Professor Turo - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 608,
name: "Battle! (Trainer) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 609,
name: "Let’s Make a Sandwich! - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 610,
name: "Gym Test - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 611,
name: "Battle & Victory! (Gym Leader) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 612,
name: "West Province - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 613,
name: "Battle! (West Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 614,
name: "Tera Raid Battle - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 615,
name: "Cascarrafa - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 616,
name: "Battle! (Titan) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 617,
name: "Medali - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 618,
name: "East Province - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 619,
name: "Battle! (East Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 620,
name: "Artazon - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 621,
name: "Levincia - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 622,
name: "Star Barrage - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 623,
name: "Battle! (Team Star Boss) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 624,
name: "North Province - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 625,
name: "Battle! (North Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 626,
name: "Montenevera - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 627,
name: "Alfornada - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 628,
name: "The Pokémon League Interview - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 629,
name: "Battle! (Elite Four) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 630,
name: "Battle! (Top Champion) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 631,
name: "Battle! (Champion Nemona) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 632,
name: "My One and Only Rival - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 633,
name: "Battle! (Director Clavell) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 634,
name: "Battle! (Cassiopeia) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 635,
name: "Hasta la Vistar! ☆ - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 636,
name: "Arven’s Treasure - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 637,
name: "To the Great Crater of Paldea - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 638,
name: "Area Zero - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 639,
name: "Battle! (Area Zero Pokémon) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 640,
name: "The Gate Opens - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 641,
name: "Activating Offensive Protocols - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 642,
name: "Battle! (Zero Lab) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 643,
name: "Paradise Protection Protocol Initialized - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 644,
name: "Battle Form - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 645,
name: "Batʇlə! (■■■) - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 646,
name: "I Bid You Adieu! - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 647,
name: "Get a Little More Fun Out of this Adventure! - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks"]
},
{
id: 648,
name: "Title Screen - Pokémon Scarlet and Pokémon Violet",
tags: ["All", "Top Tracks", "Selects"]
},

//// Pikmin 4
{
id: 649,
name: "Title Screen - Pikmin 4",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 650,
name: "Must Be Fate - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 653,
name: "Rescue Command Post - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 654,
name: "Sun-Speckled Terrace - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 664,
name: "Dandori Challenge 1 - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 651,
name: "Before Nightfall - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 652,
name: "Today's Rescue Results - Pikmin 4",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 655,
name: "Blossoming Arcadia - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 660,
name: "Spelunking - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 666,
name: "Nighttime Expedition - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 661,
name: "Battling a Strong Creature - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 656,
name: "Serene Shores - Pikmin 4",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 665,
name: "Dandori Battle (Toy Box) - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 662,
name: "Battling a Stronger Creature - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 657,
name: "Hero's Hideaway - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 667,
name: "Dandori Battle vs. Olimar? - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 668,
name: "Olimar Rescue Mission: Complete! - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 669,
name: "Olimar Aboard - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 670,
name: "Credits - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 658,
name: "Giant's Hearth - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 663,
name: "Battling an Even Stronger Creature - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 659,
name: "Primordial Thicket - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 671,
name: "Ancient Sirehound Battle - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 672,
name: "So Long, Pikmin - Pikmin 4",
tags: ["All", "Top Tracks"]
},
{
id: 673,
name: "Finale - Pikmin 4",
tags: ["All", "Top Tracks"]
},

//// Super Mario Bros. Wonder
{
id: 674,
name: "Title Screen - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 675,
name: "World Theme: Pipe-Rock Plateau - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 676,
name: "Grassland Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 677,
name: "Bendy-Boing Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 678,
name: "Piranha Plants on Parade - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 679,
name: "World Theme: Petal Isles - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 680,
name: "Coast Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 681,
name: "Stretchy-Shadow Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 682,
name: "World Theme: Fluff-Puff Peaks - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 683,
name: "Snowy-Mountain Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 684,
name: "Athletic Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 685,
name: "Medley-Mix Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 686,
name: "Palace Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 687,
name: "Bowser Jr. Battle - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 688,
name: "World Theme: Shining Falls - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 689,
name: "Shining Falls Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 690,
name: "Shapey-Shift Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 691,
name: "World Theme: Sunbaked Desert - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 692,
name: "Desert Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 693,
name: "Ninji Disco - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks", "Selects"]
},
{
id: 694,
name: "World Theme: Fungi Mines - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 695,
name: "Poison-Swamp Underground Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 696,
name: "A Night at Boo's Opera - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 697,
name: "World Theme: Deep Magma Bog - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 698,
name: "Lava Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 699,
name: "Flowy-Flight Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 700,
name: "Flying Battleship Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 701,
name: "Doomy-Gloom Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 702,
name: "Mecha Maker Battle - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 703,
name: "World Theme: Petal Isles (Castle Bowser) - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 704,
name: "Castle Bowser Theme - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 705,
name: "Zappy-Zone Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 706,
name: "Bowser's Wonder Rush - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 707,
name: "Castle Bowser Battle - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
{
id: 708,
name: "Starry-Staff Wonder - Super Mario Bros. Wonder",
tags: ["All", "Top Tracks"]
},
];
