
const __RT_BASE__ = (() => {
  const host = window.location.hostname;
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (host.endsWith('github.io') && parts.length > 0) return '/' + parts[0];
  return '';
})();

const __rtAsset = path => {
  const clean = String(path || '').replace(/^\/+/, '');
  const current = window.location.pathname.replace(/\/+$/, '');
  const toolPages = new Set([
    'loadout-randomizer',
    'loadout-screen',
    'thumbnail-builder',
    'tier-list-builder',
    'challenge-road'
  ]);
  const last = current.split('/').filter(Boolean).pop() || '';
  const prefix = toolPages.has(last) ? '../' : '';
  return `${prefix}${clean}`;
};

const embeddedImages = {"Distortion":__rtAsset("Weapons/Distortion_Icon.webp"),"Permafrost":__rtAsset("Weapons/Permafrost_Icon.webp"),"Energy Rifle":__rtAsset("Weapons/Energy_Rifle_29.webp"),"Flamethrower":__rtAsset("Weapons/Flamethrower_Icon.webp"),"Grenade Launcher":__rtAsset("Weapons/GrenadeLauncher_Icon.webp"),"Minigun":__rtAsset("Weapons/Minigun_Icon.webp"),"Paintball Gun":__rtAsset("Weapons/PaintballGun_Icon.webp"),"Assault Rifle":__rtAsset("Weapons/AssaultRifle_Icon.webp"),"Bow":__rtAsset("Weapons/Bow_Icon.webp"),"Burst Rifle":__rtAsset("Weapons/BurstRifle_Icon.webp"),"Crossbow":__rtAsset("Weapons/Crossbow_Icon.webp"),"Gunblade":__rtAsset("Weapons/Gunblade_Icon.webp"),"RPG":__rtAsset("Weapons/RPG_Icon.webp"),"Shotgun":__rtAsset("Weapons/Shotgun_Icon.webp"),"Sniper":__rtAsset("Weapons/Sniper_Icon.webp"),"Scepter":__rtAsset("Weapons/Scepter_Icon.webp"),"Warper":__rtAsset("Weapons/Warper_Icon.webp"),"Energy Pistols":__rtAsset("Weapons/EnergyPistols_Icon.webp"),"Exogun":__rtAsset("Weapons/Exogun_Icon.webp"),"Slingshot":__rtAsset("Weapons/Slingshot_Icon.webp"),"Daggers":__rtAsset("Weapons/Daggers_Icon.webp"),"Flare Gun":__rtAsset("Weapons/FlareGun_Icon.webp"),"Handgun":__rtAsset("Weapons/Handgun_Icon.webp"),"Revolver":__rtAsset("Weapons/Revolver_Icon.webp"),"Shorty":__rtAsset("Weapons/Shorty_Icon.webp"),"Spray":__rtAsset("Weapons/Spray_Icon.webp"),"Uzi":__rtAsset("Weapons/Uzi_Icon.webp"),"Glass Cannon":__rtAsset("assets/embedded/img_0013_f2d06b26fcc2.webp"),"Maul":__rtAsset("Weapons/Maul_Icon.webp"),"Spear":__rtAsset("Weapons/Spear_Icon.webp"),"Trowel":__rtAsset("Weapons/Trowel_Icon.webp"),"Battle Axe":__rtAsset("Weapons/BattleAxe_Icon.webp"),"Chainsaw":__rtAsset("Weapons/Chainsaw_Icon.webp"),"Fists":__rtAsset("Weapons/Fists_Icon.webp"),"Katana":__rtAsset("Weapons/Katana_Icon.webp"),"Knife":__rtAsset("Weapons/Knife_Icon.webp"),"Riot Shield":__rtAsset("Weapons/RiotShield_Icon.webp"),"Scythe":__rtAsset("Weapons/Scythe_Icon.webp"),"Glass Shard":__rtAsset("assets/embedded/img_0014_d69d6b9004b6.webp"),"Grappler":__rtAsset("Weapons/Grappler_Icon.webp"),"Medkit":__rtAsset("Weapons/Medkit_Icon.webp"),"Subspace Tripmine":__rtAsset("Weapons/SubspaceTripmine_Icon.webp"),"Warpstone":__rtAsset("Weapons/Warpstone_Icon.webp"),"Flashbang":__rtAsset("Weapons/Flashbang_Icon.webp"),"Freeze Ray":__rtAsset("Weapons/FreezeRay_Icon.webp"),"Grenade":__rtAsset("Weapons/Grenade_Icon.webp"),"Jump Pad":__rtAsset("Weapons/JumpPad_Icon.webp"),"Molotov":__rtAsset("Weapons/Molotov_Icon.webp"),"Satchel":__rtAsset("Weapons/Satchel_Icon.webp"),"Smoke Grenade":__rtAsset("Weapons/SmokeGrenade_Icon.webp"),"War Horn":__rtAsset("Weapons/WarHorn_Icon.webp"),"Elixir":__rtAsset("assets/embedded/img_0015_36ee11bc7997.webp"),"RNG Dice":__rtAsset("assets/embedded/img_0016_43eec6a9ad4f.webp")};
    const embeddedSkinsByWeapon = {"Assault Rifle":[{"name":"Glorious Assault Rifle","rarity":"Glorious","file":"GloriousAssaultRifle_Icon.png"},{"name":"10B Visits","rarity":"Unique","file":"10BVisits_Icon.png"},{"name":"AK-47","rarity":"Skin","file":"AK-47_Icon.png"},{"name":"AKEY-47","rarity":"Mythical","file":"AKEY-47 Icon.png"},{"name":"AUG","rarity":"Skin","file":"AUG_Icon.png"},{"name":"Boneclaw Assault Rifle","rarity":"Skin","file":"BoneclawAssaultRifle_Icon.png"},{"name":"Gingerbread Aug","rarity":"Skin","file":"GingerbreadAug_Icon.png"},{"name":"Phoenix Rifle","rarity":"Skin","file":"PhoenixRifle_Icon.png"},{"name":"Tommy Gun","rarity":"Skin","file":"TommyGun_Icon.png"}],"Battle Axe":[{"name":"Glorious Battle Axe","rarity":"Glorious","file":"GloriousBattleAxe_Icon.png"},{"name":"Balloon Axe","rarity":"Skin","file":"BalloonAxe_Icon.png"},{"name":"Ban Axe","rarity":"Skin","file":"BanAxe_Icon.png"},{"name":"Cerulean Axe","rarity":"Skin","file":"CeruleanAxe_Icon.png"},{"name":"Keyttle Axe","rarity":"Mythical","file":"KeyttleAxe Icon.png"},{"name":"Mimic Axe","rarity":"Skin","file":"MimicAxe_Icon.png"},{"name":"Nordic Axe","rarity":"Skin","file":"NordicAxe_Icon.png"},{"name":"Street Sign","rarity":"Skin","file":"StreetSign_Icon.png"},{"name":"The Shred","rarity":"Skin","file":"TheShred_Icon.png"}],"Bow":[{"name":"Glorious Bow","rarity":"Glorious","file":"GloriousBow_Icon.png"},{"name":"Balloon Bow","rarity":"Skin","file":"BalloonBow_Icon.png"},{"name":"Bat Bow","rarity":"Skin","file":"BatBow_Icon.png"},{"name":"Compound Bow","rarity":"Skin","file":"CompoundBow_Icon.png"},{"name":"Cupid s Bow","rarity":"Skin","file":"Cupid_sBow_Icon.png"},{"name":"Dream Bow","rarity":"Skin","file":"DreamBow_Icon.png"},{"name":"Frostbite Bow","rarity":"Skin","file":"FrostbiteBow_Icon.png"},{"name":"Keybow","rarity":"Mythical","file":"Keybow Icon.png"},{"name":"Raven Bow","rarity":"Skin","file":"RavenBow Icon.png"}],"Burst Rifle":[{"name":"Glorious Burst Rifle","rarity":"Glorious","file":"GloriousBurstRifle_Icon.png"},{"name":"Aqua Burst","rarity":"Skin","file":"AquaBurst_Icon.png"},{"name":"Electro Rifle","rarity":"Skin","file":"ElectroRifle_Icon.png"},{"name":"Famas","rarity":"Skin","file":"Famas_Icon.png"},{"name":"Keyst Rifle","rarity":"Mythical","file":"KeystRifle Icon.png"},{"name":"Pine Burst","rarity":"Skin","file":"PineBurst_Icon.png"},{"name":"Pixel Burst","rarity":"Skin","file":"PixelBurst_Icon.png"},{"name":"Spectral Burst","rarity":"Skin","file":"SpectralBurst_Icon.png"}],"Chainsaw":[{"name":"Glorious Chainsaw","rarity":"Glorious","file":"GloriousChainsaw_Icon.png"},{"name":"Blobsaw","rarity":"Skin","file":"Blobsaw_Icon.png"},{"name":"Buzz Saw","rarity":"Skin","file":"BuzzSaw_Icon.png"},{"name":"Festive Buzzsaw","rarity":"Skin","file":"FestiveBuzzsaw_Icon.png"},{"name":"Handsaws","rarity":"Skin","file":"Handsaws_Icon.png"},{"name":"Mega Drill","rarity":"Skin","file":"MegaDrill_Icon.png"}],"Crossbow":[{"name":"Glorious Crossbow","rarity":"Glorious","file":"GloriousCrossbow_Icon.png"},{"name":"Arch Crossbow","rarity":"Mythical","file":"ArchCrossbow Icon.png"},{"name":"Crossbone","rarity":"Skin","file":"Crossbone_Icon.png"},{"name":"Frostbite Cross Bow","rarity":"Skin","file":"FrostbiteCrossBow_Icon.png"},{"name":"Harpoon Crossbow","rarity":"Skin","file":"HarpoonCrossbow_Icon.png"},{"name":"Pixel Crossbow","rarity":"Skin","file":"PixelCrossbow_Icon.png"},{"name":"Violin Crossbow","rarity":"Skin","file":"ViolinCrossbow_Icon.png"}],"Daggers":[{"name":"Glorious Daggers","rarity":"Glorious","file":"GloriousDaggers_Icon.png"},{"name":"Aces","rarity":"Skin","file":"Aces_Icon.png"},{"name":"Bat Daggers","rarity":"Skin","file":"BatDaggers_Icon.png"},{"name":"Broken Hearts","rarity":"Skin","file":"BrokenHearts_Icon.png"},{"name":"Cookies","rarity":"Skin","file":"Cookies_Icon.png"},{"name":"Crystal Daggers","rarity":"Mythical","file":"CrystalDaggers Icon.png"},{"name":"Keynais","rarity":"Mythical","file":"Keynais Icon.png"},{"name":"Paper Airplanes","rarity":"Skin","file":"PaperAirplanes Icon.png"},{"name":"Shurikens","rarity":"Skin","file":"Shurikens_Icon.png"},{"name":"Toaster","rarity":"Skin","file":"Toaster_Icon.png"}],"Distortion":[{"name":"Glorious Distortion","rarity":"Glorious","file":"GloriousDistortion_Icon.png"},{"name":"Cyber Distortion","rarity":"Skin","file":"CyberDistortion_Icon.png"},{"name":"Electropunk Distortion","rarity":"Skin","file":"ElectropunkDistortion_Icon.png"},{"name":"Experiment D15","rarity":"Skin","file":"ExperimentD15_Icon.png"},{"name":"Magma Distortion","rarity":"Skin","file":"MagmaDistortion_Icon.png"},{"name":"Plasma Distortion","rarity":"Skin","file":"PlasmaDistortion_Icon.png"},{"name":"Sleighstortion","rarity":"Skin","file":"Sleighstortion_Icon.png"}],"Energy Rifle":[{"name":"Glorious Energy Rifle","rarity":"Glorious","file":"GloriousEnergyRifle_Icon.png"},{"name":"Apex Rifle","rarity":"Skin","file":"ApexRifle_Icon.png"},{"name":"Hacker Rifle","rarity":"Skin","file":"HackerRifle_Icon.png"},{"name":"Hydro Rifle","rarity":"Skin","file":"HydroRifle_Icon.png"},{"name":"New Years Energy Rifle","rarity":"Skin","file":"NewYearsEnergyRifle_Icon.png"},{"name":"Soul Rifle","rarity":"Skin","file":"SoulRifle_Icon.png"},{"name":"Void Rifle","rarity":"Skin","file":"VoidRifle_Icon.png"}],"Energy Pistols":[{"name":"Glorious Energy Pistols","rarity":"Glorious","file":"GloriousEnergyPistols_Icon.png"},{"name":"Apex Pistols","rarity":"Skin","file":"ApexPistols_Icon.png"},{"name":"Hacker Pistols","rarity":"Skin","file":"HackerPistols_Icon.png"},{"name":"Hydro Pistols","rarity":"Skin","file":"HydroPistols_Icon.png"},{"name":"Hyper Laser Guns","rarity":"Skin","file":"HyperLaserGuns_Icon.png"},{"name":"New Years Energy Pistols","rarity":"Skin","file":"NewYearsEnergyPistols_Icon.png"},{"name":"Soul Pistols","rarity":"Skin","file":"SoulPistols_Icon.png"},{"name":"Void Pistols","rarity":"Skin","file":"VoidPistols_Icon.png"}],"Exogun":[{"name":"Glorious Exogun","rarity":"Glorious","file":"GloriousExogun_Icon.png"},{"name":"Exogourd","rarity":"Skin","file":"Exogourd_Icon.png"},{"name":"Midnight Exogun","rarity":"Skin","file":"MidnightExogun Icon.png"},{"name":"Ray Gun","rarity":"Skin","file":"RayGun_Icon.png"},{"name":"Repulsor","rarity":"Skin","file":"Repulsor_Icon.png"},{"name":"Singularity","rarity":"Skin","file":"Singularity_Icon.png"},{"name":"Wondergun","rarity":"Skin","file":"Wondergun_Icon.png"}],"Flashbang":[{"name":"Glorious Flashbang","rarity":"Glorious","file":"GloriousFlashbang_Icon.png"},{"name":"Camera","rarity":"Skin","file":"Camera Icon.png"},{"name":"Disco Ball","rarity":"Skin","file":"DiscoBall_Icon.png"},{"name":"Jingle Bell","rarity":"Skin","file":"JingleBell_Icon.png"},{"name":"Lightbulb","rarity":"Skin","file":"Lightbulb_Icon.png"},{"name":"Pixel Flashbang","rarity":"Skin","file":"PixelFlashbang_Icon.png"},{"name":"Santa","rarity":"Skin","file":"Santa_Icon.png"},{"name":"Shining Star","rarity":"Skin","file":"ShiningStar_Icon.png"},{"name":"Skullbang","rarity":"Skin","file":"Skullbang_Icon.png"}],"Flare Gun":[{"name":"Glorious Flare Gun","rarity":"Glorious","file":"GloriousFlareGun_Icon.png"},{"name":"Banana Flare","rarity":"Skin","file":"BananaFlare_Icon.png"},{"name":"Dynamite Gun","rarity":"Skin","file":"DynamiteGun_Icon.png"},{"name":"Firework Gun","rarity":"Skin","file":"FireworkGun_Icon.png"},{"name":"Vexed Flare Gun","rarity":"Skin","file":"VexedFlareGun_Icon.png"},{"name":"Wrapped Flare Gun","rarity":"Skin","file":"WrappedFlareGun_Icon.png"}],"Flamethrower":[{"name":"Glorious Flamethrower","rarity":"Glorious","file":"GloriousFlamethrower_Icon.png"},{"name":"Extinguisher","rarity":"Skin","file":"Extinguisher_Icon.png"},{"name":"Glitterthrower","rarity":"Skin","file":"Glitterthrower_Icon.png"},{"name":"Jack O Thrower","rarity":"Skin","file":"JackO_Thrower_Icon.png"},{"name":"Keythrower","rarity":"Mythical","file":"Keythrower Icon.png"},{"name":"Lamethrower","rarity":"Skin","file":"Lamethrower_Icon.png"},{"name":"Pixel flamethrower","rarity":"Skin","file":"Pixel_flamethrower.png"},{"name":"Rainbow Thrower","rarity":"Skin","file":"RainbowThrower Icon.png"},{"name":"Snowblower","rarity":"Skin","file":"Snowblower_Icon.png"}],"Fists":[{"name":"Glorious Fists","rarity":"Glorious","file":"GloriousFists_Icon.png"},{"name":"Boxing Gloves","rarity":"Skin","file":"BoxingGloves_Icon.png"},{"name":"Brass Knuckles","rarity":"Skin","file":"BrassKnuckles_Icon.png"},{"name":"Festive Fists","rarity":"Skin","file":"FestiveFists_Icon.png"},{"name":"Fist","rarity":"Skin","file":"Fist_Icon.png"},{"name":"Fists Of Hurt","rarity":"Skin","file":"FistsOfHurt_Icon.png"},{"name":"Pumpkin Claws","rarity":"Skin","file":"PumpkinClaws_Icon.png"},{"name":"Spy Gloves","rarity":"Skin","file":"SpyGloves_Icon.png"}],"Freeze Ray":[{"name":"Glorious Freeze Ray","rarity":"Glorious","file":"GloriousFreezeRay_Icon.png"},{"name":"Bubble Ray","rarity":"Skin","file":"BubbleRay_Icon.png"},{"name":"Gum Ray","rarity":"Skin","file":"GumRay_Icon.png"},{"name":"Spider Ray","rarity":"Skin","file":"SpiderRay_Icon.png"},{"name":"Temporal Ray","rarity":"Skin","file":"TemporalRay_Icon.png"},{"name":"Wrapped Freeze Ray","rarity":"Skin","file":"WrappedFreezeRay_Icon.png"}],"Grenade":[{"name":"Glorious Grenade","rarity":"Glorious","file":"GloriousGrenade_Icon.png"},{"name":"Balloon Grenade Launcher","rarity":"Skin","file":"BalloonGrenadeLauncher_Icon.png"},{"name":"Cuddle Bomb","rarity":"Skin","file":"CuddleBomb_Icon.png"},{"name":"Dynamite","rarity":"Skin","file":"Dynamite_Icon.png"},{"name":"Ice Grenade","rarity":"Skin","file":"IceGrenade Icon.png"},{"name":"Keynade","rarity":"Mythical","file":"Keynade Icon.png"},{"name":"Soul Grenade","rarity":"Skin","file":"SoulGrenade_Icon.png"},{"name":"Water Balloon","rarity":"Skin","file":"WaterBalloon_Icon.png"},{"name":"Whoopee Cushion","rarity":"Skin","file":"WhoopeeCushion_Icon.png"}],"Grenade Launcher":[{"name":"Glorious Grenade Launcher","rarity":"Glorious","file":"GloriousGrenadeLauncher_Icon.png"},{"name":"Gearnade Launcher","rarity":"Skin","file":"GearnadeLauncher_Icon.png"},{"name":"Skull Launcher","rarity":"Skin","file":"SkullLauncher_Icon.png"},{"name":"Snowball Launcher","rarity":"Skin","file":"SnowballLauncher_Icon.png"},{"name":"Swashbuckler","rarity":"Skin","file":"Swashbuckler_Icon.png"},{"name":"Uranium Launcher","rarity":"Skin","file":"UraniumLauncher_Icon.png"}],"Grappler":[{"name":"Glorious Grappler","rarity":"Glorious","file":"GloriousGrappler_Icon.png"},{"name":"Lasso","rarity":"Skin","file":"Lasso_Icon.png"}],"Gunblade":[{"name":"Glorious Gunblade","rarity":"Glorious","file":"GloriousGunblade_Icon.png"},{"name":"Boneblade","rarity":"Skin","file":"Boneblade_Icon.png"},{"name":"Crude Gunblade","rarity":"Skin","file":"CrudeGunblade_Icon.png"},{"name":"Elf s Gunblade","rarity":"Skin","file":"Elf_sGunblade Icon.png"},{"name":"Gunsaw","rarity":"Skin","file":"Gunsaw_Icon.png"},{"name":"Hyper Gunblade","rarity":"Skin","file":"HyperGunblade_Icon.png"},{"name":"Keyblade","rarity":"Mythical","file":"Keyblade Icon.png"}],"Handgun":[{"name":"Glorious Handgun","rarity":"Glorious","file":"GloriousHandgun_Icon.png"},{"name":"Blaster","rarity":"Skin","file":"Blaster_Icon.png"},{"name":"Gingerbread Handgun","rarity":"Skin","file":"GingerbreadHandgun_Icon.png"},{"name":"Gumball Handgun","rarity":"Skin","file":"GumballHandgun_Icon.png"},{"name":"Hand Gun","rarity":"Skin","file":"HandGun Icon.png"},{"name":"Pixel Handgun","rarity":"Skin","file":"PixelHandgun_Icon.png"},{"name":"Pumpkin Handgun","rarity":"Skin","file":"PumpkinHandgun_Icon.png"},{"name":"Stealth Handgun","rarity":"Unobtainable","file":"StealthHandgun_Icon.png"},{"name":"Towerstone Handgun","rarity":"Skin","file":"TowerstoneHandgun_Icon.png"},{"name":"Warper Handgun","rarity":"Skin","file":"WarperHandgun Icon.png"}],"Jump Pad":[{"name":"Glorious Jump Pad","rarity":"Glorious","file":"GloriousJumpPad_Icon.png"},{"name":"Bounce House","rarity":"Skin","file":"BounceHouse_Icon.png"},{"name":"Sandwich","rarity":"Skin","file":"Sandwhich_Icon.png"},{"name":"Shady Chicken Sandwich","rarity":"Skin","file":"ShadyChickenSandwhich_Icon.png"},{"name":"Spider Web","rarity":"Skin","file":"SpiderWeb_Icon.png"},{"name":"Trampoline","rarity":"Skin","file":"Trampoline_Icon.png"}],"Katana":[{"name":"Glorious Katana","rarity":"Glorious","file":"GloriousKatana_Icon.png"},{"name":"Arch Katana","rarity":"Mythical","file":"ArchKatana Icon.png"},{"name":"Crystal Katana","rarity":"Mythical","file":"CrystalKatana Icon.png"},{"name":"Evil Trident","rarity":"Skin","file":"Evil Trident_Icon.png"},{"name":"Keytana","rarity":"Mythical","file":"Keytana Icon.png"},{"name":"Lightning Bolt","rarity":"Skin","file":"LightningBolt_Icon.png"},{"name":"Linked Sword","rarity":"Skin","file":"LinkedSword_Icon.png"},{"name":"New Years Katana","rarity":"Skin","file":"NewYearsKatana_Icon.png"},{"name":"Pixel Katana","rarity":"Skin","file":"PixelKatana_Icon.png"},{"name":"Saber","rarity":"Skin","file":"Saber_Icon.png"},{"name":"Stellar Katana","rarity":"Skin","file":"StellarKatana_Icon.png"}],"Knife":[{"name":"Glorious Knife","rarity":"Glorious","file":"GloriousKnife_Icon.png"},{"name":"Armature001","rarity":"Unobtainable","file":"Armature001_Icon.png"},{"name":"Balisong","rarity":"Skin","file":"Balisong_Icon.png"},{"name":"Caladbolg","rarity":"Skin","file":"Caladbolg_Icon.png"},{"name":"Candy Cane","rarity":"Skin","file":"CandyCane_Icon.png"},{"name":"Chancla","rarity":"Skin","file":"Chancla_Icon.png"},{"name":"Karambit","rarity":"Skin","file":"Karambit_Icon.png"},{"name":"Keylisong","rarity":"Mythical","file":"Keylisong Icon.png"},{"name":"Keyrambit","rarity":"Mythical","file":"Keyrambit Icon.png"},{"name":"Machete","rarity":"Skin","file":"Machete_Icon.png"},{"name":"Pencil","rarity":"Skin","file":"Pencil_Icon.png"}],"Maul":[{"name":"Glorious Maul","rarity":"Glorious","file":"GloriousMaul_Icon.png"},{"name":"Ban Hammer","rarity":"Skin","file":"BanHammer_Icon.png"},{"name":"Ice Maul","rarity":"Skin","file":"IceMaul_Icon.png"},{"name":"Sleigh Hammer","rarity":"Skin","file":"SleighHammer_Icon.png"}],"Medkit":[{"name":"Glorious Medkit","rarity":"Glorious","file":"GloriousMedkit_Icon.png"},{"name":"Box Of Chocolates","rarity":"Skin","file":"BoxOfChocolates_Icon.png"},{"name":"Briefcase","rarity":"Skin","file":"Briefcase_Icon.png"},{"name":"Bucket Of Candy","rarity":"Skin","file":"BucketOfCandy_Icon.png"},{"name":"Laptop","rarity":"Skin","file":"Laptop_Icon.png"},{"name":"Medkitty","rarity":"Skin","file":"Medkitty_Icon.png"},{"name":"Milk Cookies","rarity":"Skin","file":"Milk_Cookies_Icon.png"}],"Minigun":[{"name":"Glorious Minigun","rarity":"Glorious","file":"GloriousMinigun_Icon.png"},{"name":"Fighter Jet","rarity":"Skin","file":"FighterJet_Icon.png"},{"name":"Lasergun 3000","rarity":"Skin","file":"Lasergun3000_Icon.png"},{"name":"Pixel Minigun","rarity":"Skin","file":"PixelMinigun_Icon.png"},{"name":"Pumpkin Minigun","rarity":"Skin","file":"PumpkinMinigun_Icon.png"},{"name":"Wrapped Minigun","rarity":"Skin","file":"WrappedMinigun_Icon.png"}],"Molotov":[{"name":"Glorious Molotov","rarity":"Glorious","file":"GloriousMolotov_Icon.png"},{"name":"Arch Molotov","rarity":"Mythical","file":"ArchMolotov Icon.png"},{"name":"Coffee","rarity":"Skin","file":"Coffee_Icon.png"},{"name":"Hot Coals","rarity":"Skin","file":"HotCoals_Icon.png"},{"name":"Lava Lamp","rarity":"Skin","file":"LavaLamp_Icon.png"},{"name":"Torch","rarity":"Skin","file":"Torch Icon.png"},{"name":"Vexed Candle","rarity":"Skin","file":"VexedCandle_Icon.png"}],"Paintball Gun":[{"name":"Glorious Paintball Gun","rarity":"Glorious","file":"GloriousPaintballGun_Icon.png"},{"name":"Balloon Paintball Gun","rarity":"Skin","file":"BalloonPaintballGun Icon.png"},{"name":"Boba Gun","rarity":"Skin","file":"RIVALSSKIN Boba Gun.webp"},{"name":"Brain Gun","rarity":"Skin","file":"BrainGun_Icon.png"},{"name":"Ketchup Gun","rarity":"Skin","file":"KetchupGun_Icon.png"},{"name":"Slime Gun","rarity":"Skin","file":"SlimeGun_Icon.png"},{"name":"Snowball Gun","rarity":"Skin","file":"SnowballGun_Icon.png"}],"Permafrost":[{"name":"Glorious Permafrost","rarity":"Glorious","file":"GloriousPermafrost_Icon.png"},{"name":"Ice Permafrost","rarity":"Skin","file":"IcePermafrost_Icon.png"},{"name":"Snowman Permafrost","rarity":"Skin","file":"SnowmanPermafrost_Icon.png"}],"Revolver":[{"name":"Glorious Revolver","rarity":"Glorious","file":"GloriousRevolver_Icon.png"},{"name":"Boneclaw Revolver","rarity":"Skin","file":"BoneclawRevolver_Icon.png"},{"name":"Desert Eagle","rarity":"Skin","file":"DesertEagle_Icon.png"},{"name":"Keyvolver","rarity":"Mythical","file":"Keyvolver Icon.png"},{"name":"Peppergun","rarity":"Skin","file":"Peppergun_Icon.png"},{"name":"Peppermint Sheriff","rarity":"Skin","file":"PeppermintSheriff_Icon.png"},{"name":"Sheriff","rarity":"Skin","file":"Sheriff_Icon.png"}],"Riot Shield":[{"name":"Glorious Riot Shield","rarity":"Glorious","file":"GloriousRiotShield_Icon.png"},{"name":"Door","rarity":"Skin","file":"Door_Icon.png"},{"name":"Energy Shield","rarity":"Skin","file":"EnergyShield_Icon.png"},{"name":"Sled","rarity":"Skin","file":"Sled_Icon.png"},{"name":"Tombstone Shield","rarity":"Skin","file":"TombstoneShield_Icon.png"}],"RPG":[{"name":"Glorious RPG","rarity":"Glorious","file":"GloriousRPG_Icon.png"},{"name":"Firework Launcher","rarity":"Skin","file":"FireworkLauncher_Icon.png"},{"name":"Nuke Launcher","rarity":"Skin","file":"NukeLauncher_Icon.png"},{"name":"Pencil Launcher","rarity":"Skin","file":"PencilLauncher_Icon.png"},{"name":"Pumpkin Launcher","rarity":"Skin","file":"PumpkinLauncher_Icon.png"},{"name":"Rocket Launcher","rarity":"Skin","file":"RocketLauncher_Icon.png"},{"name":"RPKey","rarity":"Mythical","file":"RPKey Icon.png"},{"name":"Spaceship Launcher","rarity":"Skin","file":"SpaceshipLauncher_Icon.png"},{"name":"Squid Launcher","rarity":"Skin","file":"SquidLauncher_Icon.png"}],"Satchel":[{"name":"Glorious Satchel","rarity":"Glorious","file":"GloriousSatchel_Icon.png"},{"name":"Advanced Satchel","rarity":"Skin","file":"AdvancedSatchel_Icon.png"},{"name":"Bag o' Money","rarity":"Skin","file":"BagO_Money_Icon.png"},{"name":"Notebook Satchel","rarity":"Skin","file":"NotebookSatchel_Icon.png"},{"name":"Pizza Box","rarity":"Skin","file":"PizzaBox_Icon.png"},{"name":"Potion Satchel","rarity":"Skin","file":"PotionSatchel_Icon.png"},{"name":"Suspicious Gift","rarity":"Skin","file":"SuspiciousGift_Icon.png"}],"Scythe":[{"name":"Glorious Scythe","rarity":"Glorious","file":"GloriousScythe_Icon.png"},{"name":"Anchor","rarity":"Skin","file":"Anchor_Icon.png"},{"name":"Bat Scythe","rarity":"Skin","file":"BatScythe_Icon.png"},{"name":"Bug Net","rarity":"Unobtainable","file":"BugNet_Icon.png"},{"name":"Cryo Scythe","rarity":"Skin","file":"CryoScythe_Icon.png"},{"name":"Crystal Scythe","rarity":"Mythical","file":"CrystalScythe Icon.png"},{"name":"Keythe","rarity":"Mythical","file":"Keythe Icon.png"},{"name":"Sakura Scythe","rarity":"Skin","file":"SakuraScythe_Icon.png"},{"name":"Scythe Of Death","rarity":"Skin","file":"ScytheOfDeath_Icon.png"}],"Shorty":[{"name":"Glorious Shorty","rarity":"Glorious","file":"GloriousShorty_Icon.png"},{"name":"Demon Shorty","rarity":"Skin","file":"DemonShorty_Icon.png"},{"name":"Lovely Shorty","rarity":"Skin","file":"LovelyShorty_Icon.png"},{"name":"Not So Shorty","rarity":"Skin","file":"NotSoShorty_Icon.png"},{"name":"Too Shorty","rarity":"Skin","file":"TooShorty_Icon.png"},{"name":"Wrapped Shorty","rarity":"Skin","file":"WrappedShorty_Icon.png"}],"Shotgun":[{"name":"Glorious Shotgun","rarity":"Glorious","file":"GloriousShotgun_Icon.png"},{"name":"Balloon Shotgun","rarity":"Skin","file":"BalloonShotgun_Icon.png"},{"name":"Broom Stick","rarity":"Skin","file":"BroomStick Icon.png"},{"name":"Hyper Shotgun","rarity":"Skin","file":"HyperShotgun_Icon.png"},{"name":"Shotkey","rarity":"Skin","file":"Shotkey Icon.png"}],"Slingshot":[{"name":"Glorious Slingshot","rarity":"Glorious","file":"GloriousSlingshot_Icon.png"},{"name":"Boneshot","rarity":"Skin","file":"Boneshot_Icon.png"},{"name":"Goalpost","rarity":"Skin","file":"Goalpost Icon.png"},{"name":"Harp","rarity":"Skin","file":"Harp_Icon.png"},{"name":"Keyshot","rarity":"Mythical","file":"Keyshot Icon.png"},{"name":"Lucky Horshoe","rarity":"Skin","file":"LuckyHorshoe_Icon.png"},{"name":"Reindeer Slingshot","rarity":"Skin","file":"ReindeerSlingshot_Icon.png"},{"name":"Stick","rarity":"Skin","file":"Stick_Icon.png"}],"Smoke Grenade":[{"name":"Glorious Smoke Grenade","rarity":"Glorious","file":"GloriousSmokeGrenade_Icon.png"},{"name":"Balance","rarity":"Skin","file":"Balance_Icon.png"},{"name":"Emoji Cloud","rarity":"Skin","file":"EmojiCloud_Icon.png"},{"name":"Eyeball","rarity":"Skin","file":"Eyeball_Icon.png"},{"name":"Hourglass","rarity":"Skin","file":"Hourglass_Icon.png"},{"name":"Snowglobe","rarity":"Skin","file":"Snowglobe_Icon.png"}],"Sniper":[{"name":"Glorious Sniper","rarity":"Glorious","file":"GloriousSniper_Icon.png"},{"name":"Event Horizon","rarity":"Skin","file":"EventHorizon_Icon.png"},{"name":"Eyething Sniper","rarity":"Skin","file":"EyethingSniper Icon.png"},{"name":"Gingerbread Sniper","rarity":"Skin","file":"GingerbreadSniper_Icon.png"},{"name":"Hyper Sniper","rarity":"Skin","file":"HyperSniper_Icon.png"},{"name":"Keyper","rarity":"Mythical","file":"Keyper Icon.png"},{"name":"Pixel Sniper","rarity":"Skin","file":"PixelSniper_Icon.png"}],"Spear":[{"name":"Glorious Spear","rarity":"Glorious","file":"GloriousSpear_Icon.png"},{"name":"Giant Pencil","rarity":"Skin","file":"GiantPencil_Icon.png"},{"name":"Studio Light","rarity":"Skin","file":"StudioLight_Icon.png"}],"Spray":[{"name":"Glorious Spray","rarity":"Glorious","file":"GloriousSpray_Icon.png"},{"name":"Boneclaw Spray","rarity":"Skin","file":"BoneclawSpray_Icon.png"},{"name":"Keyspray","rarity":"Mythical","file":"Keyspray Icon.png"},{"name":"Lovely Spray","rarity":"Skin","file":"LovelySpray_Icon.png"},{"name":"Nailgun","rarity":"Skin","file":"Nailgun Icon.png"},{"name":"Pine Spray","rarity":"Skin","file":"PineSpray_Icon.png"},{"name":"Spray Bottle","rarity":"Skin","file":"SprayBottle_Icon.png"}],"Subspace Tripmine":[{"name":"Glorious Subspace Tripmine","rarity":"Glorious","file":"GloriousSubspaceTripmine_Icon.png"},{"name":"Dev-in-the-Box","rarity":"Skin","file":"Dev-In-The-Box_Icon.png"},{"name":"DIYTripmine","rarity":"Skin","file":"DIYTripmine_Icon.png"},{"name":"Don t Press","rarity":"Skin","file":"Don_tPress_Icon.png"},{"name":"Pot o' Keys","rarity":"Mythical","file":"PotO_Keys_Icon.png"},{"name":"Spring","rarity":"Skin","file":"Spring_Icon.png"},{"name":"Trick Or Treat","rarity":"Skin","file":"TrickOrTreat Icon.png"}],"Trowel":[{"name":"Glorious Trowel","rarity":"Glorious","file":"GloriousTrowel_Icon.png"},{"name":"Garden Shovel","rarity":"Skin","file":"GardenShovel_Icon.png"},{"name":"Paintbrush","rarity":"Skin","file":"Paintbrush_Icon.png"},{"name":"Plastic Shovel","rarity":"Skin","file":"PlasticShovel_Icon.png"},{"name":"Pumpkin Carver","rarity":"Skin","file":"PumpkinCarver_Icon.png"},{"name":"Snow Shovel","rarity":"Skin","file":"SnowShovel_Icon.png"}],"Uzi":[{"name":"Glorious Uzi","rarity":"Glorious","file":"GloriousUzi_Icon.png"},{"name":"Demon Uzi","rarity":"Skin","file":"DemonUzi_Icon.png"},{"name":"Electro Uzi","rarity":"Skin","file":"ElectroUzi_Icon.png"},{"name":"Keyzi","rarity":"Mythical","file":"Keyzi Icon.png"},{"name":"Money Gun","rarity":"Skin","file":"MoneyGun_Icon.png"},{"name":"Pine Uzi","rarity":"Skin","file":"PineUzi_Icon.png"},{"name":"Water Uzi","rarity":"Skin","file":"WaterUzi_Icon.png"}],"War Horn":[{"name":"Glorious War Horn","rarity":"Glorious","file":"GloriousWarHorn_Icon.png"},{"name":"Air Horn","rarity":"Skin","file":"AirHorn_Icon.png"},{"name":"Boneclaw Warhorn","rarity":"Skin","file":"BoneclawWarhorn Icon.png"},{"name":"Mammoth Horn","rarity":"Skin","file":"MammothHorn_Icon.png"},{"name":"Megaphone","rarity":"Skin","file":"Megaphone_Icon.png"},{"name":"Trumpet","rarity":"Skin","file":"Trumpet_Icon.png"}],"Warper":[{"name":"Glorious Warper","rarity":"Glorious","file":"GloriousWarper_Icon.png"},{"name":"Arcane Warper","rarity":"Skin","file":"ArcaneWarper_Icon.png"},{"name":"Electropunk Warper","rarity":"Skin","file":"ElectropunkWarper_Icon.png"},{"name":"Experiment W4","rarity":"Skin","file":"ExperimentW4_Icon.png"},{"name":"Frost Warper","rarity":"Skin","file":"FrostWarper_Icon.png"},{"name":"Glitter Warper","rarity":"Skin","file":"GlitterWarper_Icon.png"},{"name":"Hotel Bell","rarity":"Skin","file":"HotelBell_Icon.png"}],"Warpstone":[{"name":"Glorious Warpstone","rarity":"Glorious","file":"GloriousWarpstone_Icon.png"},{"name":"Cyber Warpstone","rarity":"Skin","file":"CyberWarpstone_Icon.png"},{"name":"Electropunk Warpstone","rarity":"Skin","file":"ElectropunkWarpstone_Icon.png"},{"name":"Teleport Disc","rarity":"Skin","file":"TeleportDisc_Icon.png"},{"name":"Unstable Warpstone","rarity":"Skin","file":"UnstableWarpstone Icon.png"},{"name":"Warpbone","rarity":"Skin","file":"Warpbone_Icon.png"},{"name":"Warpeye","rarity":"Mythical","file":"Warpeye Icon.png"},{"name":"Warpstar","rarity":"Skin","file":"Warpstar_Icon.png"}]};

    const weaponData = {"Primary":[["Distortion",5],["Permafrost",5],["Energy Rifle",4.8],["Flamethrower",4.2],["Grenade Launcher",4.25],["Minigun",4.15],["Paintball Gun",4.05],["Assault Rifle",2.1],["Bow",2.7],["Burst Rifle",2.5],["Crossbow",3.45],["Gunblade",4.15],["RPG",4.05],["Shotgun",3.05],["Sniper",3.65],["Scepter",4.55]],"Secondary":[["Warper",5],["Energy Pistols",4.75],["Exogun",4.55],["Slingshot",3.9],["Daggers",3.55],["Flare Gun",3.25],["Handgun",1.4],["Revolver",2.9],["Shorty",3.05],["Spray",2.2],["Uzi",2.55],["Glass Cannon",4.65]],"Melee":[["Maul",4.85],["Spear",4.75],["Trowel",4.65],["Battle Axe",4.1],["Chainsaw",4],["Fists",1.1],["Katana",3.6],["Knife",2],["Riot Shield",3.4],["Scythe",4.45],["Glass Shard",4.9]],"Utility":[["Grappler",4.95],["Medkit",4.25],["Subspace Tripmine",4.75],["Warpstone",5],["Flashbang",2.55],["Freeze Ray",4.4],["Grenade",1.3],["Jump Pad",2.1],["Molotov",3.05],["Satchel",3.5],["Smoke Grenade",1.7],["War Horn",3.65],["Elixir",4.35],["RNG Dice",4.55]]};

    const autoDisabledWeaponNames = new Set(["Glass Cannon", "Glass Shard", "Scepter", "RNG Dice", "Elixir"]);

    const weaponsBySlot = Object.fromEntries(
      Object.entries(weaponData).map(([slot, items]) => [
        slot,
        items.map(([name, power]) => w(name, power, slot))
      ])
    );

    const allWeapons = Object.values(weaponsBySlot).flat();

    const luckExponents = {
      1: 0.85,
      2: 1.2,
      5: 1.75,
      8: 2.25,
      15: 3.05
    };

    const slots = ["Primary", "Secondary", "Melee", "Utility"];
    let selectedLuck = 1;
    let customLuckActive = false;
    let selectedRarity = "All";
    let currentLoadout = {};
    let isSpinning = false;
    let completelyRandom = false;
    let noRepeatsMode = false;
    let rngMode = false;
    let disableRareAnimations = false;
    let currentRngResult = null;
    const repeatedWeapons = new Set();
    const disabledWeapons = new Set(autoDisabledWeaponNames);
    const rarityOrder = ["Common", "Rare", "Epic", "Legendary", "Unobtainable"];
    let audioContext = null;
    let spinSoundTimer = null;

    const spinBtn = document.getElementById("spinBtn");
    const loadoutGrid = document.getElementById("loadoutGrid");
    const randomModeBtn = document.getElementById("randomModeBtn");
    const noRepeatsBtn = document.getElementById("noRepeatsBtn");
    const rngModeBtn = document.getElementById("rngModeBtn");
    const disableRareAnimBtn = document.getElementById("disableRareAnimBtn");
    const resetRepeatsBtn = document.getElementById("resetRepeatsBtn");
    const statusText = document.getElementById("statusText");
    const luckRow = document.getElementById("luckRow");
    const rarityRow = document.getElementById("rarityRow");
    const customLuckBtn = document.getElementById("customLuckBtn");
    const customLuckModal = document.getElementById("customLuckModal");
    const customLuckInput = document.getElementById("customLuckInput");
    const applyCustomLuck = document.getElementById("applyCustomLuck");
    const cancelCustomLuck = document.getElementById("cancelCustomLuck");
    const weaponDrawer = document.getElementById("weaponDrawer");
    const weaponList = document.getElementById("weaponList");

    function rarityTier(power) {
      if (power >= 4.55) return "Legendary";
      if (power >= 3.75) return "Epic";
      if (power >= 3.05) return "Rare";
      return "Common";
    }

    function w(name, power, category) {
      return {
        name,
        power,
        category,
        tier: autoDisabledWeaponNames.has(name) ? "Unobtainable" : rarityTier(power),
        img: embeddedImages[name] || ""
      };
    }

    function placeholderSvg(name, slot) {
      const initials = name.split(/\s+/).map(part => part[0]).join("").slice(0, 3).toUpperCase();
      const safeName = escapeHtml(name);
      const safeSlot = escapeHtml(slot);
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="260" height="190" viewBox="0 0 260 190">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stop-color="#353b69"/>
              <stop offset="1" stop-color="#14182f"/>
            </linearGradient>
            <radialGradient id="r" cx="50%" cy="35%" r="65%">
              <stop offset="0" stop-color="#7257ff" stop-opacity="0.55"/>
              <stop offset="1" stop-color="#7257ff" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="260" height="190" rx="22" fill="url(#g)"/>
          <rect width="260" height="190" rx="22" fill="url(#r)"/>
          <text x="130" y="92" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="900" fill="#ffffff">${initials}</text>
          <text x="130" y="126" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="800" fill="#d9ddff">${safeName}</text>
          <text x="130" y="148" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="900" letter-spacing="3" fill="#aeb6dd">${safeSlot.toUpperCase()}</text>
        </svg>`;
      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function unavailableWeapon(slot) {
      return {
        name: `No enabled ${slot}`,
        power: 0,
        category: slot,
        tier: "Disabled",
        img: placeholderSvg("No enabled weapons", slot)
      };
    }

    function enabledPool(pool) {
      return pool.filter(weapon => !disabledWeapons.has(weapon.name));
    }

    function repeatFilteredPool(pool, extraTaken = new Set()) {
      if (!noRepeatsMode) return pool;
      return pool.filter(weapon => !repeatedWeapons.has(weapon.name) && !extraTaken.has(weapon.name));
    }

    function rarityFilteredPool(pool) {
      if (selectedRarity === "All") return pool;
      return pool.filter(weapon => weapon.tier === selectedRarity);
    }

    function emptyPoolLabel(slot) {
      const base = completelyRandom ? "weapons" : slot;
      return selectedRarity === "All" ? base : `${selectedRarity} ${base}`;
    }

    function tierClass(tier) {
      return String(tier).toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }

    function slotTitle(slot, index) {
      return completelyRandom ? `Slot ${index + 1}` : slot;
    }

    function diceFace(value) {
      return ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][Math.max(1, Math.min(6, Number(value) || 1)) - 1];
    }

    function getRngRollCount() {
      return Math.max(1, Math.min(1000, Math.round(Number(selectedLuck) || 1)));
    }

    function rollRngDice(count) {
      const rolls = [];
      for (let i = 0; i < count; i++) rolls.push(1 + Math.floor(Math.random() * 6));
      return {
        rolls,
        best: Math.max(...rolls),
        last: rolls[rolls.length - 1]
      };
    }

    function renderRngDice(value = 1, rolling = false, rollCount = getRngRollCount()) {
      loadoutGrid.classList.add("rng-grid");
      const displayValue = Math.max(1, Math.min(6, Number(value) || 1));
      loadoutGrid.innerHTML = `
        <article class="rng-panel ${displayValue >= 6 && !rolling ? "lucky" : ""}" id="rngPanel">
          <div>
            <div class="rng-kicker">RNG Spins Mode</div>
            <div class="rng-number" data-rng-number>${displayValue}</div>
            <div class="rng-dice ${rolling ? "rolling" : ""}" data-dice>${diceFace(displayValue)}</div>
            <div class="rng-result" data-rng-result>${rolling ? "Rolling..." : `Landed on ${displayValue}`}</div>
            <div class="rng-subtext" data-rng-subtext>Best of ${rollCount.toLocaleString()} roll${rollCount === 1 ? "" : "s"}</div>
          </div>
        </article>`;
    }

    function createSlot(slot, index) {
      const title = slotTitle(slot, index);
      const badgeText = completelyRandom ? "ANY" : "COMMON";
      const badgeClass = completelyRandom ? "any" : "common";
      return `
        <div class="slot-title">
          <span>${title}</span>
          <span class="tier-badge ${badgeClass}" data-tier>${badgeText}</span>
        </div>
        <div class="weapon-card" data-card>
          <div class="image-wrap">
            <img decoding="async" loading="lazy" class="weapon-img" alt="" data-img />
          </div>
          <div class="weapon-info">
            <div class="weapon-name" data-name>Waiting...</div>
            <div class="weapon-type" data-type>${completelyRandom ? "ANY" : slot}</div>
            <div class="power-row" aria-hidden="true"><div class="power-fill" data-power></div></div>
          </div>
        </div>`;
    }

    function renderSlots() {
      loadoutGrid.classList.remove("rng-grid");
      loadoutGrid.innerHTML = slots.map(slot => `<article class="slot" data-slot="${slot}"></article>`).join("");
      document.querySelectorAll(".slot").forEach((slotEl, index) => {
        const slot = slotEl.dataset.slot;
        slotEl.classList.toggle("random-slot", completelyRandom);
        slotEl.classList.remove("lucky");
        slotEl.innerHTML = createSlot(slot, index);
        const pool = poolForSlot(slot);
        const first = pool.length ? randomItem(pool) : unavailableWeapon(emptyPoolLabel(slot));
        updateSlot(slot, first, false);
      });
    }

    function updateSlot(slot, weapon, spinning = false, options = {}) {
      currentLoadout[slot] = weapon;
      const slotEl = document.querySelector(`.slot[data-slot="${slot}"]`);
      const card = slotEl.querySelector("[data-card]");
      const img = slotEl.querySelector("[data-img]");
      const name = slotEl.querySelector("[data-name]");
      const type = slotEl.querySelector("[data-type]");
      const badge = slotEl.querySelector("[data-tier]");
      const power = slotEl.querySelector("[data-power]");

      card.classList.toggle("spinning", spinning);
      name.textContent = weapon.name;
      type.textContent = weapon.category;

      if (weapon.power <= 0) {
        badge.textContent = "DISABLED";
        badge.className = "tier-badge";
      } else if (completelyRandom && selectedRarity === "All") {
        badge.textContent = "ANY";
        badge.className = "tier-badge any";
      } else {
        badge.textContent = weapon.tier.toUpperCase();
        badge.className = "tier-badge " + tierClass(weapon.tier);
      }

      if (!options.preservePower) {
        power.classList.remove("charging");
        power.style.removeProperty("--charge-time");
        setPowerProgress(power, powerPercent(weapon));
      }

      img.alt = weapon.name;
      img.onerror = () => {
        img.onerror = null;
        img.src = placeholderSvg(weapon.name, weapon.category);
      };
      img.src = weapon.img || placeholderSvg(weapon.name, weapon.category);
    }

    function powerPercent(weapon) {
      return Math.round((Math.max(0, weapon.power) / 5) * 100);
    }

    function setPowerProgress(powerEl, percent) {
      const safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
      let gradient = "linear-gradient(90deg, #ff3b3b 0%, #ff3b3b 100%)";
      if (safePercent >= 75) {
        gradient = "linear-gradient(90deg, #ff3b3b 0%, #ff9326 34%, #ffdc3d 74%, #39db72 100%)";
      } else if (safePercent >= 50) {
        gradient = "linear-gradient(90deg, #ff3b3b 0%, #ff9326 48%, #ffdc3d 100%)";
      } else if (safePercent >= 25) {
        gradient = "linear-gradient(90deg, #ff3b3b 0%, #ff9326 100%)";
      }
      powerEl.style.setProperty("--bar-gradient", gradient);
      powerEl.style.setProperty("--power-scale", String(safePercent / 100));
      powerEl.style.setProperty("--power-pct", `${safePercent}%`);
    }

    function chargePowerBar(slot, weapon, duration) {
      const slotEl = document.querySelector(`.slot[data-slot="${slot}"]`);
      const power = slotEl.querySelector("[data-power]");

      // Hard-reset the bar to 0 before every spin, then animate up to the pre-picked result.
      power.classList.remove("charging");
      power.style.removeProperty("--charge-time");
      power.style.transition = "none";
      setPowerProgress(power, 0);

      // Force the browser to visually apply 0 first instead of blending from the last spin.
      void power.offsetHeight;

      power.style.removeProperty("transition");
      power.classList.add("charging");
      power.style.setProperty("--charge-time", `${duration}ms`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPowerProgress(power, powerPercent(weapon));
        });
      });
    }

    function finishPowerBar(slot, weapon) {
      const slotEl = document.querySelector(`.slot[data-slot="${slot}"]`);
      const power = slotEl.querySelector("[data-power]");
      power.classList.remove("charging");
      power.style.removeProperty("--charge-time");
      setPowerProgress(power, powerPercent(weapon));
    }

    function getAudioContext() {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!audioContext) audioContext = new AudioCtx();
      if (audioContext.state === "suspended") audioContext.resume();
      return audioContext;
    }

    function playSpinTick(frequency = 460, length = 0.045, volume = 0.025) {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + length);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + length);
    }

    function playBubbleClick() {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const master = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(620, now);
      filter.Q.setValueAtTime(0.55, now);

      master.gain.setValueAtTime(0.0001, now);
      master.gain.linearRampToValueAtTime(0.022, now + 0.008);
      master.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

      filter.connect(master);
      master.connect(ctx.destination);

      const low = ctx.createOscillator();
      const mid = ctx.createOscillator();
      const lowGain = ctx.createGain();
      const midGain = ctx.createGain();

      low.type = "sine";
      low.frequency.setValueAtTime(220, now);
      low.frequency.exponentialRampToValueAtTime(128, now + 0.08);

      mid.type = "triangle";
      mid.frequency.setValueAtTime(360, now + 0.004);
      mid.frequency.exponentialRampToValueAtTime(235, now + 0.07);

      lowGain.gain.setValueAtTime(0.0001, now);
      lowGain.gain.linearRampToValueAtTime(0.9, now + 0.009);
      lowGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      midGain.gain.setValueAtTime(0.0001, now + 0.004);
      midGain.gain.linearRampToValueAtTime(0.38, now + 0.014);
      midGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

      low.connect(lowGain);
      mid.connect(midGain);
      lowGain.connect(filter);
      midGain.connect(filter);

      low.start(now);
      mid.start(now + 0.004);
      low.stop(now + 0.105);
      mid.stop(now + 0.09);
    }

    function playLandingDing(slotIndex = 0) {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const speed = 1 + slotIndex * 0.12;
      const spacing = 0.105 / speed;
      const rampTime = 0.08 / speed;
      const fadeTime = 0.16 / speed;
      const stopTime = 0.18 / speed;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1350, now);
      filter.Q.setValueAtTime(0.7, now);
      filter.connect(ctx.destination);

      [330, 392, 494].forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + index * spacing;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(frequency + slotIndex * 12, start);
        osc.frequency.exponentialRampToValueAtTime((frequency + slotIndex * 12) * 1.04, start + rampTime);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.042, start + (0.014 / speed));
        gain.gain.exponentialRampToValueAtTime(0.0001, start + fadeTime);
        osc.connect(gain);
        gain.connect(filter);
        osc.start(start);
        osc.stop(start + stopTime);
      });
    }

    function playBonusBoost() {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      [620, 860, 1180].forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + index * 0.045;
        osc.type = index === 1 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(frequency, start);
        osc.frequency.exponentialRampToValueAtTime(frequency * 1.65, start + 0.18);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.06, start + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.3);
      });

      setTimeout(() => playSpinTick(1450, 0.055, 0.035), 155);
    }

    function triggerLuckyLanding(slot, weapon) {
      if (disableRareAnimations) return;
      if (!weapon || weapon.power <= 0 || powerPercent(weapon) < 75) return;
      const slotEl = document.querySelector(`.slot[data-slot="${slot}"]`);
      slotEl.classList.remove("lucky");
      void slotEl.offsetWidth;
      slotEl.classList.add("lucky");
      playBonusBoost();
    }

    function startSpinSound() {
      stopSpinSound(false);
      let tick = 0;
      playSpinTick(520, 0.05, 0.03);
      spinSoundTimer = setInterval(() => {
        const frequency = 420 + ((tick % 7) * 34);
        playSpinTick(frequency, 0.04, 0.022);
        tick++;
      }, 92);
    }

    function stopSpinSound(playFinish = true) {
      if (spinSoundTimer) {
        clearInterval(spinSoundTimer);
        spinSoundTimer = null;
      }
      if (playFinish) {
        playSpinTick(760, 0.065, 0.035);
        setTimeout(() => playSpinTick(980, 0.07, 0.03), 70);
      }
    }

    function randomItem(arr) {
      if (!arr.length) return null;
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getLuckExponent() {
      const luck = Math.max(1, Math.min(1000, Number(selectedLuck) || 1));
      return luckExponents[luck] || Math.min(8.25, 0.85 + Math.log2(luck) * 0.72);
    }

    function weightedPick(pool) {
      if (!pool.length) return null;
      const safeLuck = Math.max(1, Math.min(1000, Number(selectedLuck) || 1));
      const exponent = getLuckExponent();
      const weighted = pool.map(item => ({
        item,
        weight: Math.pow(item.power, exponent) * (1 + safeLuck / 80) * (item.tier === "Unobtainable" ? 0.003 : 1)
      }));
      const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      let roll = Math.random() * total;
      for (const entry of weighted) {
        roll -= entry.weight;
        if (roll <= 0) return entry.item;
      }
      return weighted[weighted.length - 1].item;
    }

    function poolForSlot(slot, extraTaken = new Set()) {
      const basePool = completelyRandom ? allWeapons : weaponsBySlot[slot];
      return repeatFilteredPool(rarityFilteredPool(enabledPool(basePool)), extraTaken);
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function spinLoadout() {
      if (isSpinning) return;
      const anyEnabled = slots.some(slot => poolForSlot(slot).length > 0);
      if (!anyEnabled) {
        statusText.textContent = "NO WEAPONS ENABLED";
        return;
      }

      const spinDurations = [650, 1510, 2580, 3860];
      const finalPicks = {};
      const currentSpinTaken = new Set();
      slots.forEach(slot => {
        const pool = poolForSlot(slot, currentSpinTaken);
        const pick = pool.length ? weightedPick(pool) : unavailableWeapon(emptyPoolLabel(slot));
        finalPicks[slot] = pick;
        if (noRepeatsMode && pick && pick.power > 0) currentSpinTaken.add(pick.name);
      });

      document.querySelectorAll(".slot").forEach(slotEl => slotEl.classList.remove("lucky"));

      isSpinning = true;
      spinBtn.disabled = true;
      randomModeBtn.disabled = true;
      noRepeatsBtn.disabled = true;
      rngModeBtn.disabled = true;
      resetRepeatsBtn.disabled = true;
      statusText.textContent = noRepeatsMode ? "NO REPEATS ROLL..." : (completelyRandom ? "FULL RANDOM..." : "ROLLING...");
      startSpinSound();

      const intervals = {};
      slots.forEach((slot, index) => {
        const card = document.querySelector(`.slot[data-slot="${slot}"] [data-card]`);
        const pool = poolForSlot(slot);
        const finalPick = finalPicks[slot];
        if (!pool.length) {
          updateSlot(slot, finalPick, false);
          finishPowerBar(slot, finalPick);
          return;
        }

        card.classList.add("spinning");
        chargePowerBar(slot, finalPick, spinDurations[index]);
        intervals[slot] = setInterval(() => {
          const nextWeapon = randomItem(poolForSlot(slot));
          updateSlot(slot, nextWeapon || finalPick, true, { preservePower: true });
        }, 80 + index * 15);
      });

      for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        await wait(i === 0 ? spinDurations[i] : spinDurations[i] - spinDurations[i - 1]);
        if (intervals[slot]) clearInterval(intervals[slot]);
        const picked = finalPicks[slot];
        updateSlot(slot, picked, false, { preservePower: true });
        finishPowerBar(slot, picked);
        playLandingDing(i);
        if (noRepeatsMode && picked && picked.power > 0) {
          repeatedWeapons.add(picked.name);
          renderWeaponList();
        }
        if (powerPercent(picked) >= 75) {
          triggerLuckyLanding(slot, picked);
        }
      }

      await wait(180);
      stopSpinSound(false);
      statusText.textContent = "LOADOUT READY";
      spinBtn.disabled = false;
      randomModeBtn.disabled = false;
      noRepeatsBtn.disabled = false;
      rngModeBtn.disabled = false;
      resetRepeatsBtn.disabled = false;
      isSpinning = false;
    }

    async function spinRngRolls() {
      if (isSpinning) return;
      const rollCount = getRngRollCount();
      const result = rollRngDice(rollCount);
      currentRngResult = result.best;

      isSpinning = true;
      spinBtn.disabled = true;
      randomModeBtn.disabled = true;
      noRepeatsBtn.disabled = true;
      rngModeBtn.disabled = true;
      resetRepeatsBtn.disabled = true;
      rarityRow.hidden = true;
      statusText.textContent = `ROLLING ${rollCount.toLocaleString()} ROLL${rollCount === 1 ? "" : "S"}...`;
      renderRngDice(randomItem([1, 2, 3, 4, 5, 6]), true, rollCount);
      startSpinSound();

      const dice = () => document.querySelector("[data-dice]");
      const number = () => document.querySelector("[data-rng-number]");
      const resultText = () => document.querySelector("[data-rng-result]");
      const subText = () => document.querySelector("[data-rng-subtext]");
      let tick = 0;
      const interval = setInterval(() => {
        const value = 1 + Math.floor(Math.random() * 6);
        if (dice()) dice().textContent = diceFace(value);
        if (number()) number().textContent = value;
        if (resultText()) resultText().textContent = tick % 2 === 0 ? "Rolling..." : "Rolling luck...";
        tick++;
      }, 72);

      const animationTime = Math.min(3300, 1550 + Math.log2(rollCount + 1) * 230);
      await wait(animationTime);
      clearInterval(interval);
      renderRngDice(result.best, false, rollCount);
      const displaySubtext = document.querySelector("[data-rng-subtext]");
      if (displaySubtext) {
        displaySubtext.textContent = `Best of ${rollCount.toLocaleString()} roll${rollCount === 1 ? "" : "s"}${rollCount > 1 ? ` • Last raw roll: ${result.last}` : ""}`;
      }
      playLandingDing(Math.min(3, Math.max(0, result.best - 3)));
      if (result.best >= 6) playBonusBoost();

      await wait(220);
      stopSpinSound(false);
      statusText.textContent = "RNG SPINS READY";
      spinBtn.disabled = false;
      randomModeBtn.disabled = false;
      noRepeatsBtn.disabled = false;
      rngModeBtn.disabled = false;
      resetRepeatsBtn.disabled = false;
      resetRepeatsBtn.hidden = !noRepeatsMode || rngMode;
      isSpinning = false;
    }

    function updateLuckButtons() {
      document.querySelectorAll(".luck-btn").forEach(btn => {
        if (btn.dataset.luck === "custom") {
          btn.classList.toggle("active", customLuckActive);
          btn.innerHTML = customLuckActive ? `<span>✦</span>${selectedLuck}x Luck` : `<span>✦</span>Custom`;
        } else {
          btn.classList.toggle("active", !customLuckActive && Number(btn.dataset.luck) === selectedLuck);
        }
      });
    }

    function setLuck(value, custom = false) {
      const safeLuck = Math.max(1, Math.min(1000, Math.round(Number(value) || 1)));
      selectedLuck = safeLuck;
      customLuckActive = Boolean(custom);
      updateLuckButtons();
      statusText.textContent = `${selectedLuck}X LUCK READY`;
      if (rngMode) renderRngDice(currentRngResult || 1, false, getRngRollCount());
    }

    function openCustomLuckModal() {
      if (isSpinning) return;
      customLuckInput.value = String(customLuckActive ? selectedLuck : Math.min(1000, Math.max(1, Number(customLuckInput.value) || 25)));
      customLuckModal.classList.add("open");
      customLuckModal.setAttribute("aria-hidden", "false");
      setTimeout(() => customLuckInput.select(), 30);
    }

    function closeCustomLuckModal() {
      customLuckModal.classList.remove("open");
      customLuckModal.setAttribute("aria-hidden", "true");
    }

    function applyCustomLuckValue() {
      const value = Math.max(1, Math.min(1000, Math.round(Number(customLuckInput.value) || 1)));
      customLuckInput.value = String(value);
      setLuck(value, true);
      closeCustomLuckModal();
    }

    function setRarityFilter(rarity) {
      selectedRarity = rarity || "All";
      document.querySelectorAll(".rarity-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.rarity === selectedRarity);
      });
      statusText.textContent = selectedRarity === "All" ? "ALL RARITIES" : `${selectedRarity.toUpperCase()} ONLY`;
      if (!rngMode) renderSlots();
    }

    function setCompletelyRandom(value) {
      completelyRandom = Boolean(value);
      randomModeBtn.classList.toggle("active", completelyRandom);
      randomModeBtn.setAttribute("aria-pressed", String(completelyRandom));
      randomModeBtn.textContent = completelyRandom ? "Completely Random: ON" : "Completely Random: OFF";
      statusText.textContent = completelyRandom ? "ANY SLOT MODE" : "NORMAL MODE";
      if (rngMode) renderRngDice(currentRngResult || 1, false, getRngRollCount());
      else renderSlots();
    }

    function setNoRepeats(value) {
      noRepeatsMode = Boolean(value);
      document.body.classList.toggle("no-repeats-theme", noRepeatsMode);
      noRepeatsBtn.classList.toggle("active", noRepeatsMode);
      noRepeatsBtn.setAttribute("aria-pressed", String(noRepeatsMode));
      noRepeatsBtn.textContent = noRepeatsMode ? "No Repeats: ON" : "No Repeats: OFF";
      resetRepeatsBtn.hidden = !noRepeatsMode || rngMode;
      statusText.textContent = noRepeatsMode ? "NO REPEATS MODE" : "REPEATS ALLOWED";
      renderWeaponList();
      if (rngMode) renderRngDice(currentRngResult || 1, false, getRngRollCount());
      else renderSlots();
    }

    function resetRepeats() {
      repeatedWeapons.clear();
      renderWeaponList();
      renderSlots();
      statusText.textContent = "REPEATS RESET";
    }

    
    function setDisableRareAnimations(value) {
      disableRareAnimations = Boolean(value);
      if (!disableRareAnimBtn) return;
      disableRareAnimBtn.textContent = `Disable Rare Animation: ${disableRareAnimations ? "ON" : "OFF"}`;
      disableRareAnimBtn.setAttribute("aria-pressed", String(disableRareAnimations));
      disableRareAnimBtn.classList.toggle("active", disableRareAnimations);
    }

function setRngMode(value) {
      rngMode = Boolean(value);
      document.body.classList.toggle("rng-theme", rngMode);
      rngModeBtn.classList.toggle("active", rngMode);
      rngModeBtn.setAttribute("aria-pressed", String(rngMode));
      rngModeBtn.textContent = rngMode ? "RNG Spins: ON" : "RNG Spins: OFF";
      rarityRow.hidden = rngMode;
      spinBtn.textContent = rngMode ? "Spin Rolls" : "Spin Loadout";
      resetRepeatsBtn.hidden = !noRepeatsMode || rngMode;
      if (rngMode) {
        statusText.textContent = "RNG SPINS READY";
        renderRngDice(currentRngResult || 1, false, getRngRollCount());
      } else {
        statusText.textContent = "LOADOUT READY";
        renderSlots();
      }
    }

    function renderWeaponList() {
      weaponList.innerHTML = slots.map(category => {
        const categoryWeapons = (weaponsBySlot[category] || []).slice();
        if (!categoryWeapons.length) return "";
        return `
          <div class="rarity-group category-group">
            <strong>${category}</strong>
            <div class="rarity-weapons">
              ${categoryWeapons.map(weapon => {
                const isDisabled = disabledWeapons.has(weapon.name);
                const wasUsed = repeatedWeapons.has(weapon.name);
                const safeName = escapeHtml(weapon.name);
                const safeTier = escapeHtml(weapon.tier);
                return `
                  <div class="weapon-row ${isDisabled ? "disabled" : ""} ${wasUsed ? "used" : ""}">
                    <span class="weapon-list-info">
                      <span class="weapon-list-name" title="${safeName}">${safeName}</span>
                      <span class="weapon-list-tier ${tierClass(weapon.tier)}">${safeTier}</span>
                      ${wasUsed ? `<span class="weapon-used">Used</span>` : ""}
                    </span>
                    <button
                      class="weapon-toggle ${isDisabled ? "disabled" : ""}"
                      data-weapon="${safeName}"
                      aria-pressed="${isDisabled ? "true" : "false"}"
                    >${isDisabled ? "Disabled" : "Enabled"}</button>
                  </div>`;
              }).join("")}
            </div>
          </div>`;
      }).join("");
    }

    function toggleWeapon(name) {
      if (disabledWeapons.has(name)) {
        disabledWeapons.delete(name);
      } else {
        disabledWeapons.add(name);
      }
      renderWeaponList();
      if (rngMode) renderRngDice(currentRngResult || 1, false, getRngRollCount());
      else renderSlots();
      statusText.textContent = disabledWeapons.size ? `${disabledWeapons.size} DISABLED` : "ALL WEAPONS ENABLED";
    }

    async function copyCurrentLoadout() {
      const text = rngMode
        ? `RNG Spins: ${currentRngResult || "None"} (Best of ${getRngRollCount().toLocaleString()} roll${getRngRollCount() === 1 ? "" : "s"})`
        : slots.map((slot, index) => {
        const weapon = currentLoadout[slot];
        const label = completelyRandom ? `Slot ${index + 1}` : slot;
        const category = weapon ? ` (${weapon.category})` : "";
        return `${label}: ${weapon?.name || "None"}${category}`;
      }).join("\n");
      try {
        await navigator.clipboard.writeText(text);
        statusText.textContent = "COPIED";
      } catch (err) {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
        statusText.textContent = "COPIED";
      }
      setTimeout(() => statusText.textContent = "LOADOUT READY", 950);
    }

    document.addEventListener("click", event => {
      const btn = event.target.closest("button");
      if (!btn || btn.disabled) return;
      playBubbleClick();
    }, true);

    luckRow.addEventListener("click", event => {
      const btn = event.target.closest(".luck-btn");
      if (!btn || isSpinning) return;
      if (btn.dataset.luck === "custom") {
        openCustomLuckModal();
        return;
      }
      setLuck(btn.dataset.luck, false);
    });

    rarityRow.addEventListener("click", event => {
      const btn = event.target.closest(".rarity-btn");
      if (!btn || isSpinning) return;
      setRarityFilter(btn.dataset.rarity);
    });

    applyCustomLuck.addEventListener("click", applyCustomLuckValue);
    cancelCustomLuck.addEventListener("click", closeCustomLuckModal);
    customLuckInput.addEventListener("keydown", event => {
      if (event.key === "Enter") applyCustomLuckValue();
      if (event.key === "Escape") closeCustomLuckModal();
    });
    customLuckModal.addEventListener("click", event => {
      if (event.target === customLuckModal) closeCustomLuckModal();
    });

    randomModeBtn.addEventListener("click", () => {
      if (isSpinning) return;
      setCompletelyRandom(!completelyRandom);
    });

    noRepeatsBtn.addEventListener("click", () => {
      if (isSpinning) return;
      setNoRepeats(!noRepeatsMode);
    });

    rngModeBtn.addEventListener("click", () => {
      if (isSpinning) return;
      setRngMode(!rngMode);
    });

    disableRareAnimBtn?.addEventListener("click", () => {
      if (isSpinning) return;
      setDisableRareAnimations(!disableRareAnimations);
    });

    resetRepeatsBtn.addEventListener("click", () => {
      if (isSpinning) return;
      resetRepeats();
    });

    spinBtn.addEventListener("click", () => rngMode ? spinRngRolls() : spinLoadout());
    weaponList.addEventListener("click", event => {
      const btn = event.target.closest(".weapon-toggle");
      if (!btn || isSpinning) return;
      toggleWeapon(btn.dataset.weapon);
    });

    document.getElementById("toggleList").addEventListener("click", () => {
      weaponDrawer.classList.toggle("open");
      document.getElementById("toggleList").textContent = weaponDrawer.classList.contains("open") ? "Hide all weapons" : "Show all weapons";
    });
    document.getElementById("copyLoadout").addEventListener("click", copyCurrentLoadout);

    window.addEventListener("keydown", event => {
      if (event.key === "Escape" && customLuckModal.classList.contains("open")) {
        closeCustomLuckModal();
        return;
      }
      if (event.code === "Space" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !customLuckModal.classList.contains("open")) {
        event.preventDefault();
        rngMode ? spinRngRolls() : spinLoadout();
      }
    });

    setDisableRareAnimations(false);
    renderSlots();
    renderWeaponList();




    (function setupLoadoutScreenPage(){
      const pageTabs = document.getElementById("pageTabs");
      const homePage = document.getElementById("homePage");
      const thumbnailBuilderPage = document.getElementById("thumbnailBuilderPage");
      const titleImage = document.querySelector(".title-img");
      const randomizerTitleSrc = __rtAsset("assets/embedded/img_0004_dd1122bc9e0b.svg");
      window.__kudaRandomizerTitleSrc = randomizerTitleSrc;
      if (titleImage) titleImage.src = randomizerTitleSrc;
      const homeTitleSrc = __rtAsset("assets/embedded/img_0017_24821be00405.svg");
      window.__kudaHomeTitleSrc = homeTitleSrc;
      const screenTitleSrc = __rtAsset("assets/embedded/img_0018_b54f77a90382.svg");
      window.__kudaScreenTitleSrc = screenTitleSrc;
      const thumbnailTitleSrc = __rtAsset("assets/embedded/img_0019_a15d73f870b8.svg");
      window.__kudaThumbnailTitleSrc = thumbnailTitleSrc;
      const tierTitleSrc = __rtAsset("assets/embedded/img_0020_7da9785e0e22.svg");
      window.__kudaTierTitleSrc = tierTitleSrc;
      const challengeTitleSrc = __rtAsset("assets/embedded/img_0021_f00d9de86b4c.svg");
      window.__kudaChallengeTitleSrc = challengeTitleSrc;
      const fusionTitleSrc = __rtAsset("assets/embedded/weapon_fusions_title.svg");
      window.__kudaFusionTitleSrc = fusionTitleSrc;
      const tierListPage = document.getElementById("tierListPage");
      const loadoutScreenPage = document.getElementById("loadoutScreenPage");
      const screenStage = document.getElementById("screenStage");
      const screenSlotRow = document.getElementById("screenSlotRow");
      const screenBgImage = document.getElementById("screenBgImage");
      const screenZoom = document.getElementById("screenZoom");
      const screenLoadoutTitle = document.getElementById("screenLoadoutTitle");
      const screenShowTitle = document.getElementById("screenShowTitle");
      const screenTitleText = document.getElementById("screenTitleText");
      const screenTitleX = document.getElementById("screenTitleX");
      const screenTitleY = document.getElementById("screenTitleY");
      const screenTitleScale = document.getElementById("screenTitleScale");
      const screenTitleOutlineColor = document.getElementById("screenTitleOutlineColor");
      const screenTitleOutlineSize = document.getElementById("screenTitleOutlineSize");
      const screenFontButtons = Array.from(document.querySelectorAll(".screen-font-btn"));
      const screenUploadFontBtn = document.getElementById("screenUploadFontBtn");
      const screenWeaponScaleInputs = Array.from(document.querySelectorAll(".slot-weapon-scale"));
      const screenWeaponMoveInputs = Array.from(document.querySelectorAll(".slot-weapon-x, .slot-weapon-y"));
      const screenSlotStretch = document.getElementById("screenSlotStretch");
      const screenSlotsX = document.getElementById("screenSlotsX");
      const screenSlotsY = document.getElementById("screenSlotsY");
      const screenSlotsScale = document.getElementById("screenSlotsScale");
      const screenBrightness = document.getElementById("screenBrightness");
      const screenSaturation = document.getElementById("screenSaturation");
      const screenBlur = document.getElementById("screenBlur");
      const screenBgOptions = document.getElementById("screenBgOptions");
      const screenCustomWeaponImage = document.getElementById("screenCustomWeaponImage");
      const screenCustomBgImage = document.getElementById("screenCustomBgImage");
      const screenCustomFontInput = document.getElementById("screenCustomFontInput");
      const screenPickerTitle = document.getElementById("screenPickerTitle");
      const screenPickerSubtext = document.querySelector(".screen-picker-head p");
      const screenFullscreenBtn = document.getElementById("screenFullscreenBtn");
      const screenDownloadBtn = document.getElementById("screenDownloadBtn");
      const screenBackgrounds = {
        grid: screenBgImage ? screenBgImage.getAttribute("src") : "",
        waterpark: __rtAsset("assets/embedded/img_0022_730eb59387bd.webp"),
        dockyard: __rtAsset("assets/embedded/img_0023_cea075477c0a.webp")
      };
      const screenClearBtn = document.getElementById("screenClearBtn");
      const screenWeaponPicker = document.getElementById("screenWeaponPicker");
      const screenPickerList = document.getElementById("screenPickerList");
      const screenPickerClose = document.getElementById("screenPickerClose");
      const screenSlots = Array.from(document.querySelectorAll(".screen-loadout-slot"));
      const screenSelections = Array(screenSlots.length).fill(null);
      let activeScreenSlot = 0;
      let activeSkinWeapon = null;
      let currentScreenFont = "rubik";
      let activePage = "home";

      const setActivePage = page => {
        activePage = page === "screen" ? "screen" : page === "randomizer" ? "randomizer" : page === "thumbnail" ? "thumbnail" : page === "tier" ? "tier" : page === "challenge" ? "challenge" : page === "fusion" ? "fusion" : "home";
        if (activePage !== "thumbnail") document.body.classList.remove('thumb2-template-active');
        else if (typeof currentThumbnailTemplate !== 'undefined') document.body.classList.toggle('thumb2-template-active', currentThumbnailTemplate === '2');
        document.body.classList.toggle("home-page", activePage === "home");
        document.body.classList.toggle("screen-page", activePage === "screen");
        document.body.classList.toggle("thumbnail-page", activePage === "thumbnail");
        document.body.classList.toggle("tier-page", activePage === "tier");
        document.body.classList.toggle("challenge-page", activePage === "challenge");
        document.body.classList.toggle("fusion-page", activePage === "fusion");
        pageTabs.querySelectorAll(".page-tab").forEach(btn => {
          const isActive = btn.dataset.page === activePage;
          btn.classList.toggle("active", isActive);
          btn.setAttribute("aria-pressed", String(isActive));
        });

        if (titleImage) {
          titleImage.src = activePage === "screen" ? screenTitleSrc : activePage === "thumbnail" ? thumbnailTitleSrc : activePage === "tier" ? tierTitleSrc : activePage === "challenge" ? challengeTitleSrc : activePage === "fusion" ? fusionTitleSrc : activePage === "home" ? homeTitleSrc : randomizerTitleSrc;
          titleImage.alt = activePage === "screen" ? "Loadout Screen" : activePage === "thumbnail" ? "Thumbnail Builder" : activePage === "tier" ? "Tier List Builder" : activePage === "challenge" ? "Challenge Road Builder" : activePage === "fusion" ? "Weapon Fusions" : activePage === "home" ? "RivalsTools.net" : "Loadout Randomizer";
        }

        if (activePage === "screen") {
          /* auto-scroll disabled */
        } else if (activePage === "thumbnail") {
          /* auto-scroll disabled */
        } else if (activePage === "tier") {
          /* auto-scroll disabled */
        } else if (activePage === "home") {
          /* auto-scroll disabled */
        } else {
          statusText.textContent = rngMode ? "RNG SPINS READY" : "LOADOUT READY";
        }
      };

      const renderScreenSlots = () => {
        screenSlots.forEach((slot, index) => {
          const weapon = screenSelections[index];
          const plus = slot.querySelector(".screen-plus");
          const img = slot.querySelector(".screen-selected-weapon");
          slot.classList.toggle("has-weapon", Boolean(weapon));
          if (weapon) {
            if (weapon.skinFile) {
              setSkinFileImage(img, weapon.skinFile, weapon.img || placeholderSvg(weapon.name, weapon.category));
            } else {
              img.onerror = null;
              img.src = weapon.img || placeholderSvg(weapon.name, weapon.category);
            }
            img.alt = weapon.skinName && weapon.baseWeapon ? `${weapon.baseWeapon} - ${weapon.skinName}` : weapon.name;
            img.hidden = false;
            plus.hidden = true;
            const displayName = weapon.skinName && weapon.baseWeapon ? `${weapon.baseWeapon} - ${weapon.skinName}` : weapon.name;
            slot.setAttribute("aria-label", `Change slot ${index + 1}: ${displayName}`);
            slot.title = `Change ${displayName}`;
          } else {
            img.removeAttribute("src");
            img.alt = "";
            img.hidden = true;
            plus.hidden = false;
            slot.setAttribute("aria-label", `Choose weapon for slot ${index + 1}`);
            slot.title = "Choose weapon";
          }
        });
      };


      const fileToDataUrl = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const stripWikiText = value => String(value || "")
        .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
        .replace(/\[\[([^\]]+)\]\]/g, "$1")
        .replace(/'''/g, "")
        .replace(/\{\{[^}]+\}\}/g, "")
        .trim();

      const normalizeWeaponName = value => {
        const cleaned = stripWikiText(value);
        const aliases = {
          "Grappling Hook": "Grappler",
          "Grappling hook": "Grappler"
        };
        return aliases[cleaned] || cleaned;
      };

      let skinDataPromise = null;
      const skinDataByWeapon = new Map();
      const skinImageCache = new Map();
      const skinAssetFolders = ["Skins", "Skins2", "Skins3", "Skins4", "Skins5", "skins", "skins1", "skins2", "skins3", "skins4", "skins5"];
      const mapAssetFolders = ["Maps", "maps", "map", "Map"];
      const assetFileUrl = (folder, file) => __rtAsset(`${folder}/${String(file).split("/").map(part => encodeURIComponent(part)).join("/")}`);
      const camelToUnderscore = value => String(value || "").replace(/([a-z0-9])([A-Z])/g, "$1_$2");
      const stripExt = value => String(value || "").replace(/\.(png|webp|jpg|jpeg)$/i, "");
      const extOf = value => (String(value || "").match(/\.(png|webp|jpg|jpeg)$/i)?.[1] || "png").toLowerCase();
      const uniqueList = list => [...new Set(list.filter(Boolean))];
      const assetFileCandidates = file => {
        const original = String(file || "").trim();
        if (!original) return [];
        const ext = extOf(original);
        const base = stripExt(original);
        const noIcon = base.replace(/(?:_|\s)?Icon$/i, "");
        const underscored = camelToUnderscore(noIcon).replace(/\s+/g, "_");
        const compact = noIcon.replace(/[\s_]+/g, "");
        const spaced = camelToUnderscore(noIcon).replace(/_/g, " ");
        const bases = uniqueList([
          base,
          base.replace(/\s+/g, "_"),
          base.replace(/\s+/g, ""),
          camelToUnderscore(base),
          noIcon,
          underscored,
          compact,
          spaced,
          `${noIcon}_Icon`,
          `${underscored}_Icon`,
          `${compact}_Icon`,
          `${noIcon} Icon`,
          `${underscored} Icon`,
          `${compact} Icon`,
          `${noIcon}icon`,
          `${compact}icon`,
          `${underscored}icon`
        ]);
        const exts = uniqueList([ext, "png", "webp", "jpg", "jpeg"]);
        return uniqueList([
          original,
          ...bases.flatMap(b => exts.map(e => `${b}.${e}`))
        ]);
      };
const exactAssetFileMap = {"10bvisits":["Skins2/10BVisits_Icon.png"],"10bvisitsicon":["Skins2/10BVisits_Icon.png"],"10bvisitsiconpng":["Skins2/10BVisits_Icon.png"],"aces":["Skins2/Aces_Icon.png"],"acesicon":["Skins2/Aces_Icon.png"],"acesiconpng":["Skins2/Aces_Icon.png"],"advancedsatchel":["Skins2/AdvancedSatchel_Icon.png"],"advancedsatchelicon":["Skins2/AdvancedSatchel_Icon.png"],"advancedsatcheliconpng":["Skins2/AdvancedSatchel_Icon.png"],"airhorn":["Skins2/AirHorn_Icon.png"],"airhornicon":["Skins2/AirHorn_Icon.png"],"airhorniconpng":["Skins2/AirHorn_Icon.png"],"ak47":["Skins2/AK-47_Icon.png"],"ak47icon":["Skins2/AK-47_Icon.png"],"ak47iconpng":["Skins2/AK-47_Icon.png"],"akey47":["Skins2/AKEY-47 Icon.png"],"akey47icon":["Skins2/AKEY-47 Icon.png"],"akey47iconpng":["Skins2/AKEY-47 Icon.png"],"anchor":["Skins2/Anchor_Icon.png"],"anchoricon":["Skins2/Anchor_Icon.png"],"anchoriconpng":["Skins2/Anchor_Icon.png"],"apexpistols":["Skins2/ApexPistols_Icon.png"],"apexpistolsicon":["Skins2/ApexPistols_Icon.png"],"apexpistolsiconpng":["Skins2/ApexPistols_Icon.png"],"apexrifle":["Skins2/ApexRifle_Icon.png"],"apexrifleicon":["Skins2/ApexRifle_Icon.png"],"apexrifleiconpng":["Skins2/ApexRifle_Icon.png"],"aquaburst":["Skins2/AquaBurst_Icon.png"],"aquabursticon":["Skins2/AquaBurst_Icon.png"],"aquabursticonpng":["Skins2/AquaBurst_Icon.png"],"arcanewarper":["Skins2/ArcaneWarper_Icon.png"],"arcanewarpericon":["Skins2/ArcaneWarper_Icon.png"],"arcanewarpericonpng":["Skins2/ArcaneWarper_Icon.png"],"archcrossbow":["Skins2/ArchCrossbow Icon.png"],"archcrossbowicon":["Skins2/ArchCrossbow Icon.png"],"archcrossbowiconpng":["Skins2/ArchCrossbow Icon.png"],"archkatana":["Skins2/ArchKatana Icon.png"],"archkatanaicon":["Skins2/ArchKatana Icon.png"],"archkatanaiconpng":["Skins2/ArchKatana Icon.png"],"archmolotov":["Skins2/ArchMolotov Icon.png"],"archmolotovicon":["Skins2/ArchMolotov Icon.png"],"archmolotoviconpng":["Skins2/ArchMolotov Icon.png"],"arena":["Maps/Arenaicon.PNG"],"arenaicon":["Maps/Arenaicon.PNG"],"arenaiconpng":["Maps/Arenaicon.PNG"],"armature001":["Skins2/Armature001_Icon.png"],"armature001icon":["Skins2/Armature001_Icon.png"],"armature001iconpng":["Skins2/Armature001_Icon.png"],"assaultrifle":["Weapons/AssaultRifle_Icon.webp"],"assaultrifleicon":["Weapons/AssaultRifle_Icon.webp"],"assaultrifleiconwebp":["Weapons/AssaultRifle_Icon.webp"],"aug":["Skins2/AUG_Icon.png"],"augicon":["Skins2/AUG_Icon.png"],"augiconpng":["Skins2/AUG_Icon.png"],"backrooms":["Maps/Backroomsicon.PNG"],"backroomsicon":["Maps/Backroomsicon.PNG"],"backroomsiconpng":["Maps/Backroomsicon.PNG"],"bagomoney":["Skins2/BagO_Money_Icon.png"],"bagomoneyicon":["Skins2/BagO_Money_Icon.png"],"bagomoneyiconpng":["Skins2/BagO_Money_Icon.png"],"balance":["Skins2/Balance_Icon.png"],"balanceicon":["Skins2/Balance_Icon.png"],"balanceiconpng":["Skins2/Balance_Icon.png"],"balisong":["Skins2/Balisong_Icon.png"],"balisongicon":["Skins2/Balisong_Icon.png"],"balisongiconpng":["Skins2/Balisong_Icon.png"],"balloonaxe":["Skins2/BalloonAxe_Icon.png"],"balloonaxeicon":["Skins2/BalloonAxe_Icon.png"],"balloonaxeiconpng":["Skins2/BalloonAxe_Icon.png"],"balloonbow":["Skins2/BalloonBow_Icon.png"],"balloonbowicon":["Skins2/BalloonBow_Icon.png"],"balloonbowiconpng":["Skins2/BalloonBow_Icon.png"],"balloongrenadelauncher":["Skins2/BalloonGrenadeLauncher_Icon.png"],"balloongrenadelaunchericon":["Skins2/BalloonGrenadeLauncher_Icon.png"],"balloongrenadelaunchericonpng":["Skins2/BalloonGrenadeLauncher_Icon.png"],"balloonpaintballgun":["Skins2/BalloonPaintballGun Icon.png"],"balloonpaintballgunicon":["Skins2/BalloonPaintballGun Icon.png"],"balloonpaintballguniconpng":["Skins2/BalloonPaintballGun Icon.png"],"balloonshotgun":["Skins2/BalloonShotgun_Icon.png"],"balloonshotgunicon":["Skins2/BalloonShotgun_Icon.png"],"balloonshotguniconpng":["Skins2/BalloonShotgun_Icon.png"],"bananaflare":["Skins2/BananaFlare_Icon.png"],"bananaflareicon":["Skins2/BananaFlare_Icon.png"],"bananaflareiconpng":["Skins2/BananaFlare_Icon.png"],"banaxe":["Skins2/BanAxe_Icon.png"],"banaxeicon":["Skins2/BanAxe_Icon.png"],"banaxeiconpng":["Skins2/BanAxe_Icon.png"],"banhammer":["Skins2/BanHammer_Icon.png"],"banhammericon":["Skins2/BanHammer_Icon.png"],"banhammericonpng":["Skins2/BanHammer_Icon.png"],"baseplate":["Maps/Baseplateicon.PNG"],"baseplateicon":["Maps/Baseplateicon.PNG"],"baseplateiconpng":["Maps/Baseplateicon.PNG"],"batbow":["Skins2/BatBow_Icon.png"],"batbowicon":["Skins2/BatBow_Icon.png"],"batbowiconpng":["Skins2/BatBow_Icon.png"],"batdaggers":["Skins2/BatDaggers_Icon.png"],"batdaggersicon":["Skins2/BatDaggers_Icon.png"],"batdaggersiconpng":["Skins2/BatDaggers_Icon.png"],"batscythe":["Skins2/BatScythe_Icon.png"],"batscytheicon":["Skins2/BatScythe_Icon.png"],"batscytheiconpng":["Skins2/BatScythe_Icon.png"],"battelgrounds":["Maps/Battelgroundsicon.PNG"],"battelgroundsicon":["Maps/Battelgroundsicon.PNG"],"battelgroundsiconpng":["Maps/Battelgroundsicon.PNG"],"battleaxe":["Weapons/BattleAxe_Icon.webp"],"battleaxeicon":["Weapons/BattleAxe_Icon.webp"],"battleaxeiconwebp":["Weapons/BattleAxe_Icon.webp"],"bigarena":["Maps/Bigarena.PNG"],"bigarenapng":["Maps/Bigarena.PNG"],"bigbackrooms":["Maps/Bigbackroomsicon.png"],"bigbackroomsicon":["Maps/Bigbackroomsicon.png"],"bigbackroomsiconpng":["Maps/Bigbackroomsicon.png"],"bigcrossroads":["Maps/Bigcrossroadsicon.png"],"bigcrossroadsicon":["Maps/Bigcrossroadsicon.png"],"bigcrossroadsiconpng":["Maps/Bigcrossroadsicon.png"],"biggraveyard":["Maps/Biggraveyardicon.png","Maps/BigGraveyardMap.webp"],"biggraveyardicon":["Maps/Biggraveyardicon.png"],"biggraveyardiconpng":["Maps/Biggraveyardicon.png"],"biggraveyardmap":["Maps/BigGraveyardMap.webp"],"biggraveyardmapwebp":["Maps/BigGraveyardMap.webp"],"bigonyx":["Maps/Bigonyxicon.png","Maps/BigOnyxMap.webp"],"bigonyxicon":["Maps/Bigonyxicon.png"],"bigonyxiconpng":["Maps/Bigonyxicon.png"],"bigonyxmap":["Maps/BigOnyxMap.webp"],"bigonyxmapwebp":["Maps/BigOnyxMap.webp"],"bigsplash":["Maps/Bigsplashicon.png"],"bigsplashicon":["Maps/Bigsplashicon.png"],"bigsplashiconpng":["Maps/Bigsplashicon.png"],"bigstation":["Maps/BigStation.png"],"bigstationpng":["Maps/BigStation.png"],"blaster":["Skins2/Blaster_Icon.png"],"blastericon":["Skins2/Blaster_Icon.png"],"blastericonpng":["Skins2/Blaster_Icon.png"],"blobsaw":["Skins2/Blobsaw_Icon.png"],"blobsawicon":["Skins2/Blobsaw_Icon.png"],"blobsawiconpng":["Skins2/Blobsaw_Icon.png"],"boneblade":["Skins2/Boneblade_Icon.png"],"bonebladeicon":["Skins2/Boneblade_Icon.png"],"bonebladeiconpng":["Skins2/Boneblade_Icon.png"],"boneclawassaultrifle":["Skins2/BoneclawAssaultRifle_Icon.png"],"boneclawassaultrifleicon":["Skins2/BoneclawAssaultRifle_Icon.png"],"boneclawassaultrifleiconpng":["Skins2/BoneclawAssaultRifle_Icon.png"],"boneclawrevolver":["Skins2/BoneclawRevolver_Icon.png"],"boneclawrevolvericon":["Skins2/BoneclawRevolver_Icon.png"],"boneclawrevolvericonpng":["Skins2/BoneclawRevolver_Icon.png"],"boneclawspray":["Skins2/BoneclawSpray_Icon.png"],"boneclawsprayicon":["Skins2/BoneclawSpray_Icon.png"],"boneclawsprayiconpng":["Skins2/BoneclawSpray_Icon.png"],"boneclawwarhorn":["Skins2/BoneclawWarhorn Icon.png"],"boneclawwarhornicon":["Skins2/BoneclawWarhorn Icon.png"],"boneclawwarhorniconpng":["Skins2/BoneclawWarhorn Icon.png"],"boneshot":["Skins2/Boneshot_Icon.png"],"boneshoticon":["Skins2/Boneshot_Icon.png"],"boneshoticonpng":["Skins2/Boneshot_Icon.png"],"bouncehouse":["Skins2/BounceHouse_Icon.png"],"bouncehouseicon":["Skins2/BounceHouse_Icon.png"],"bouncehouseiconpng":["Skins2/BounceHouse_Icon.png"],"bow":["Weapons/Bow_Icon.webp"],"bowicon":["Weapons/Bow_Icon.webp"],"bowiconwebp":["Weapons/Bow_Icon.webp"],"boxinggloves":["Skins2/BoxingGloves_Icon.png"],"boxingglovesicon":["Skins2/BoxingGloves_Icon.png"],"boxingglovesiconpng":["Skins2/BoxingGloves_Icon.png"],"boxofchocolates":["Skins2/BoxOfChocolates_Icon.png"],"boxofchocolatesicon":["Skins2/BoxOfChocolates_Icon.png"],"boxofchocolatesiconpng":["Skins2/BoxOfChocolates_Icon.png"],"braingun":["Skins2/BrainGun_Icon.png"],"braingunicon":["Skins2/BrainGun_Icon.png"],"brainguniconpng":["Skins2/BrainGun_Icon.png"],"brassknuckles":["Skins2/BrassKnuckles_Icon.png"],"brassknucklesicon":["Skins2/BrassKnuckles_Icon.png"],"brassknucklesiconpng":["Skins2/BrassKnuckles_Icon.png"],"bridge":["Maps/Bridgeicon.PNG"],"bridgeicon":["Maps/Bridgeicon.PNG"],"bridgeiconpng":["Maps/Bridgeicon.PNG"],"briefcase":["Skins2/Briefcase_Icon.png"],"briefcaseicon":["Skins2/Briefcase_Icon.png"],"briefcaseiconpng":["Skins2/Briefcase_Icon.png"],"brokenhearts":["Skins2/BrokenHearts_Icon.png"],"brokenheartsicon":["Skins2/BrokenHearts_Icon.png"],"brokenheartsiconpng":["Skins2/BrokenHearts_Icon.png"],"broomstick":["Skins2/BroomStick Icon.png"],"broomstickicon":["Skins2/BroomStick Icon.png"],"broomstickiconpng":["Skins2/BroomStick Icon.png"],"bubbleray":["Skins2/BubbleRay_Icon.png"],"bubblerayicon":["Skins2/BubbleRay_Icon.png"],"bubblerayiconpng":["Skins2/BubbleRay_Icon.png"],"bucketofcandy":["Skins2/BucketOfCandy_Icon.png"],"bucketofcandyicon":["Skins2/BucketOfCandy_Icon.png"],"bucketofcandyiconpng":["Skins2/BucketOfCandy_Icon.png"],"bugnet":["Skins2/BugNet_Icon.png"],"bugneticon":["Skins2/BugNet_Icon.png"],"bugneticonpng":["Skins2/BugNet_Icon.png"],"burstrifle":["Weapons/BurstRifle_Icon.webp"],"burstrifleicon":["Weapons/BurstRifle_Icon.webp"],"burstrifleiconwebp":["Weapons/BurstRifle_Icon.webp"],"buzzsaw":["Skins2/BuzzSaw_Icon.png"],"buzzsawicon":["Skins2/BuzzSaw_Icon.png"],"buzzsawiconpng":["Skins2/BuzzSaw_Icon.png"],"caladbolg":["Skins2/Caladbolg_Icon.png"],"caladbolgicon":["Skins2/Caladbolg_Icon.png"],"caladbolgiconpng":["Skins2/Caladbolg_Icon.png"],"camera":["Skins2/Camera Icon.png"],"cameraicon":["Skins2/Camera Icon.png"],"cameraiconpng":["Skins2/Camera Icon.png"],"candycane":["Skins2/CandyCane_Icon.png"],"candycaneicon":["Skins2/CandyCane_Icon.png"],"candycaneiconpng":["Skins2/CandyCane_Icon.png"],"ceruleanaxe":["Skins2/CeruleanAxe_Icon.png"],"ceruleanaxeicon":["Skins2/CeruleanAxe_Icon.png"],"ceruleanaxeiconpng":["Skins2/CeruleanAxe_Icon.png"],"chainsaw":["Weapons/Chainsaw_Icon.webp"],"chainsawicon":["Weapons/Chainsaw_Icon.webp"],"chainsawiconwebp":["Weapons/Chainsaw_Icon.webp"],"chancla":["Skins2/Chancla_Icon.png"],"chanclaicon":["Skins2/Chancla_Icon.png"],"chanclaiconpng":["Skins2/Chancla_Icon.png"],"chess":["Maps/Chess_map.png"],"chessmap":["Maps/Chess_map.png"],"chessmappng":["Maps/Chess_map.png"],"coffee":["Skins2/Coffee_Icon.png"],"coffeeicon":["Skins2/Coffee_Icon.png"],"coffeeiconpng":["Skins2/Coffee_Icon.png"],"compoundbow":["Skins2/CompoundBow_Icon.png"],"compoundbowicon":["Skins2/CompoundBow_Icon.png"],"compoundbowiconpng":["Skins2/CompoundBow_Icon.png"],"construction":["Maps/Constructionicon.PNG"],"constructionicon":["Maps/Constructionicon.PNG"],"constructioniconpng":["Maps/Constructionicon.PNG"],"cookies":["Skins2/Cookies_Icon.png"],"cookiesicon":["Skins2/Cookies_Icon.png"],"cookiesiconpng":["Skins2/Cookies_Icon.png"],"crossbone":["Skins2/Crossbone_Icon.png"],"crossboneicon":["Skins2/Crossbone_Icon.png"],"crossboneiconpng":["Skins2/Crossbone_Icon.png"],"crossbow":["Weapons/Crossbow_Icon.webp"],"crossbowicon":["Weapons/Crossbow_Icon.webp"],"crossbowiconwebp":["Weapons/Crossbow_Icon.webp"],"crossroads":["Maps/Crossroadsicon.PNG"],"crossroadsicon":["Maps/Crossroadsicon.PNG"],"crossroadsiconpng":["Maps/Crossroadsicon.PNG"],"crudegunblade":["Skins2/CrudeGunblade_Icon.png"],"crudegunbladeicon":["Skins2/CrudeGunblade_Icon.png"],"crudegunbladeiconpng":["Skins2/CrudeGunblade_Icon.png"],"cryoscythe":["Skins2/CryoScythe_Icon.png"],"cryoscytheicon":["Skins2/CryoScythe_Icon.png"],"cryoscytheiconpng":["Skins2/CryoScythe_Icon.png"],"crystaldaggers":["Skins2/CrystalDaggers Icon.png","Skins2/CrystalDaggers_Icon.png"],"crystaldaggersicon":["Skins2/CrystalDaggers Icon.png","Skins2/CrystalDaggers_Icon.png"],"crystaldaggersiconpng":["Skins2/CrystalDaggers Icon.png","Skins2/CrystalDaggers_Icon.png"],"crystalkatana":["Skins2/CrystalKatana Icon.png"],"crystalkatanaicon":["Skins2/CrystalKatana Icon.png"],"crystalkatanaiconpng":["Skins2/CrystalKatana Icon.png"],"crystalscythe":["Skins2/CrystalScythe Icon.png"],"crystalscytheicon":["Skins2/CrystalScythe Icon.png"],"crystalscytheiconpng":["Skins2/CrystalScythe Icon.png"],"cuddlebomb":["Skins2/CuddleBomb_Icon.png"],"cuddlebombicon":["Skins2/CuddleBomb_Icon.png"],"cuddlebombiconpng":["Skins2/CuddleBomb_Icon.png"],"cupidsbow":["Skins2/Cupid_sBow_Icon.png"],"cupidsbowicon":["Skins2/Cupid_sBow_Icon.png"],"cupidsbowiconpng":["Skins2/Cupid_sBow_Icon.png"],"cyberdistortion":["Skins2/CyberDistortion_Icon.png"],"cyberdistortionicon":["Skins2/CyberDistortion_Icon.png"],"cyberdistortioniconpng":["Skins2/CyberDistortion_Icon.png"],"cyberwarpstone":["Skins2/CyberWarpstone_Icon.png"],"cyberwarpstoneicon":["Skins2/CyberWarpstone_Icon.png"],"cyberwarpstoneiconpng":["Skins2/CyberWarpstone_Icon.png"],"daggers":["Weapons/Daggers_Icon.webp"],"daggersicon":["Weapons/Daggers_Icon.webp"],"daggersiconwebp":["Weapons/Daggers_Icon.webp"],"demonshorty":["Skins2/DemonShorty_Icon.png"],"demonshortyicon":["Skins2/DemonShorty_Icon.png"],"demonshortyiconpng":["Skins2/DemonShorty_Icon.png"],"demonuzi":["Skins2/DemonUzi_Icon.png"],"demonuziicon":["Skins2/DemonUzi_Icon.png"],"demonuziiconpng":["Skins2/DemonUzi_Icon.png"],"deserteagle":["Skins2/DesertEagle_Icon.png"],"deserteagleicon":["Skins2/DesertEagle_Icon.png"],"deserteagleiconpng":["Skins2/DesertEagle_Icon.png"],"devinthebox":["Skins2/Dev-In-The-Box_Icon.png"],"devintheboxicon":["Skins2/Dev-In-The-Box_Icon.png"],"devintheboxiconpng":["Skins2/Dev-In-The-Box_Icon.png"],"dimension":["Maps/Dimensionicon.PNG"],"dimensionicon":["Maps/Dimensionicon.PNG"],"dimensioniconpng":["Maps/Dimensionicon.PNG"],"discoball":["Skins2/DiscoBall_Icon.png"],"discoballicon":["Skins2/DiscoBall_Icon.png"],"discoballiconpng":["Skins2/DiscoBall_Icon.png"],"distortion":["Weapons/Distortion_Icon.webp"],"distortionicon":["Weapons/Distortion_Icon.webp"],"distortioniconwebp":["Weapons/Distortion_Icon.webp"],"diytripmine":["Skins2/DIYTripmine_Icon.png"],"diytripmineicon":["Skins2/DIYTripmine_Icon.png"],"diytripmineiconpng":["Skins2/DIYTripmine_Icon.png"],"docks":["Maps/Docksicon.PNG"],"docksicon":["Maps/Docksicon.PNG"],"docksiconpng":["Maps/Docksicon.PNG"],"dontpress":["Skins2/Don_tPress_Icon.png"],"dontpressicon":["Skins2/Don_tPress_Icon.png"],"dontpressiconpng":["Skins2/Don_tPress_Icon.png"],"door":["Skins2/Door_Icon.png"],"dooricon":["Skins2/Door_Icon.png"],"dooriconpng":["Skins2/Door_Icon.png"],"dreambow":["Skins2/DreamBow_Icon.png"],"dreambowicon":["Skins2/DreamBow_Icon.png"],"dreambowiconpng":["Skins2/DreamBow_Icon.png"],"dynamite":["Skins2/Dynamite_Icon.png"],"dynamitegun":["Skins2/DynamiteGun_Icon.png"],"dynamitegunicon":["Skins2/DynamiteGun_Icon.png"],"dynamiteguniconpng":["Skins2/DynamiteGun_Icon.png"],"dynamiteicon":["Skins2/Dynamite_Icon.png"],"dynamiteiconpng":["Skins2/Dynamite_Icon.png"],"electropunkdistortion":["Skins2/ElectropunkDistortion_Icon.png"],"electropunkdistortionicon":["Skins2/ElectropunkDistortion_Icon.png"],"electropunkdistortioniconpng":["Skins2/ElectropunkDistortion_Icon.png"],"electropunkwarper":["Skins2/ElectropunkWarper_Icon.png"],"electropunkwarpericon":["Skins2/ElectropunkWarper_Icon.png"],"electropunkwarpericonpng":["Skins2/ElectropunkWarper_Icon.png"],"electropunkwarpstone":["Skins4/ElectropunkWarpstone_Icon.png"],"electropunkwarpstoneicon":["Skins4/ElectropunkWarpstone_Icon.png"],"electropunkwarpstoneiconpng":["Skins4/ElectropunkWarpstone_Icon.png"],"electrorifle":["Skins4/ElectroRifle_Icon.png"],"electrorifleicon":["Skins4/ElectroRifle_Icon.png"],"electrorifleiconpng":["Skins4/ElectroRifle_Icon.png"],"electrouzi":["Skins4/ElectroUzi_Icon.png"],"electrouziicon":["Skins4/ElectroUzi_Icon.png"],"electrouziiconpng":["Skins4/ElectroUzi_Icon.png"],"elfsgunblade":["Skins4/Elf_sGunblade Icon.png"],"elfsgunbladeicon":["Skins4/Elf_sGunblade Icon.png"],"elfsgunbladeiconpng":["Skins4/Elf_sGunblade Icon.png"],"emojicloud":["Skins4/EmojiCloud_Icon.png"],"emojicloudicon":["Skins4/EmojiCloud_Icon.png"],"emojicloudiconpng":["Skins4/EmojiCloud_Icon.png"],"energypistols":["Weapons/EnergyPistols_Icon.webp"],"energypistolsicon":["Weapons/EnergyPistols_Icon.webp"],"energypistolsiconwebp":["Weapons/EnergyPistols_Icon.webp"],"energyrifle29":["Weapons/Energy_Rifle_29.webp"],"energyrifle29webp":["Weapons/Energy_Rifle_29.webp"],"energyshield":["Skins4/EnergyShield_Icon.png"],"energyshieldicon":["Skins4/EnergyShield_Icon.png"],"energyshieldiconpng":["Skins4/EnergyShield_Icon.png"],"eventhorizon":["Skins4/EventHorizon_Icon.png"],"eventhorizonicon":["Skins4/EventHorizon_Icon.png"],"eventhorizoniconpng":["Skins4/EventHorizon_Icon.png"],"eviltrident":["Skins4/Evil Trident_Icon.png"],"eviltridenticon":["Skins4/Evil Trident_Icon.png"],"eviltridenticonpng":["Skins4/Evil Trident_Icon.png"],"exogourd":["Skins4/Exogourd_Icon.png"],"exogourdicon":["Skins4/Exogourd_Icon.png"],"exogourdiconpng":["Skins4/Exogourd_Icon.png"],"exogun":["Weapons/Exogun_Icon.webp"],"exogunicon":["Weapons/Exogun_Icon.webp"],"exoguniconwebp":["Weapons/Exogun_Icon.webp"],"experimentd15":["Skins4/ExperimentD15_Icon.png"],"experimentd15icon":["Skins4/ExperimentD15_Icon.png"],"experimentd15iconpng":["Skins4/ExperimentD15_Icon.png"],"experimentw4":["Skins4/ExperimentW4_Icon.png"],"experimentw4icon":["Skins4/ExperimentW4_Icon.png"],"experimentw4iconpng":["Skins4/ExperimentW4_Icon.png"],"extinguisher":["Skins4/Extinguisher_Icon.png"],"extinguishericon":["Skins4/Extinguisher_Icon.png"],"extinguishericonpng":["Skins4/Extinguisher_Icon.png"],"eyeball":["Skins4/Eyeball_Icon.png"],"eyeballicon":["Skins4/Eyeball_Icon.png"],"eyeballiconpng":["Skins4/Eyeball_Icon.png"],"eyethingsniper":["Skins4/EyethingSniper Icon.png"],"eyethingsnipericon":["Skins4/EyethingSniper Icon.png"],"eyethingsnipericonpng":["Skins4/EyethingSniper Icon.png"],"famas":["Skins4/Famas_Icon.png"],"famasicon":["Skins4/Famas_Icon.png"],"famasiconpng":["Skins4/Famas_Icon.png"],"festivebuzzsaw":["Skins4/FestiveBuzzsaw_Icon.png"],"festivebuzzsawicon":["Skins4/FestiveBuzzsaw_Icon.png"],"festivebuzzsawiconpng":["Skins4/FestiveBuzzsaw_Icon.png"],"festivefists":["Skins4/FestiveFists_Icon.png"],"festivefistsicon":["Skins4/FestiveFists_Icon.png"],"festivefistsiconpng":["Skins4/FestiveFists_Icon.png"],"fighterjet":["Skins4/FighterJet_Icon.png"],"fighterjeticon":["Skins4/FighterJet_Icon.png"],"fighterjeticonpng":["Skins4/FighterJet_Icon.png"],"fireworkgun":["Skins4/FireworkGun_Icon.png"],"fireworkgunicon":["Skins4/FireworkGun_Icon.png"],"fireworkguniconpng":["Skins4/FireworkGun_Icon.png"],"fireworklauncher":["Skins4/FireworkLauncher_Icon.png"],"fireworklaunchericon":["Skins4/FireworkLauncher_Icon.png"],"fireworklaunchericonpng":["Skins4/FireworkLauncher_Icon.png"],"fist":["Skins4/Fist_Icon.png"],"fisticon":["Skins4/Fist_Icon.png"],"fisticonpng":["Skins4/Fist_Icon.png"],"fists":["Weapons/Fists_Icon.webp"],"fistsicon":["Weapons/Fists_Icon.webp"],"fistsiconwebp":["Weapons/Fists_Icon.webp"],"fistsofhurt":["Skins4/FistsOfHurt_Icon.png"],"fistsofhurticon":["Skins4/FistsOfHurt_Icon.png"],"fistsofhurticonpng":["Skins4/FistsOfHurt_Icon.png"],"flamethrower":["Weapons/Flamethrower_Icon.webp"],"flamethrowericon":["Weapons/Flamethrower_Icon.webp"],"flamethrowericonwebp":["Weapons/Flamethrower_Icon.webp"],"flaregun":["Weapons/FlareGun_Icon.webp"],"flaregunicon":["Weapons/FlareGun_Icon.webp"],"flareguniconwebp":["Weapons/FlareGun_Icon.webp"],"flashbang":["Weapons/Flashbang_Icon.webp"],"flashbangicon":["Weapons/Flashbang_Icon.webp"],"flashbangiconwebp":["Weapons/Flashbang_Icon.webp"],"freezeray":["Weapons/FreezeRay_Icon.webp"],"freezerayicon":["Weapons/FreezeRay_Icon.webp"],"freezerayiconwebp":["Weapons/FreezeRay_Icon.webp"],"frostbitebow":["Skins4/FrostbiteBow_Icon.png"],"frostbitebowicon":["Skins4/FrostbiteBow_Icon.png"],"frostbitebowiconpng":["Skins4/FrostbiteBow_Icon.png"],"frostbitecrossbow":["Skins4/FrostbiteCrossBow_Icon.png"],"frostbitecrossbowicon":["Skins4/FrostbiteCrossBow_Icon.png"],"frostbitecrossbowiconpng":["Skins4/FrostbiteCrossBow_Icon.png"],"frostwarper":["Skins4/FrostWarper_Icon.png"],"frostwarpericon":["Skins4/FrostWarper_Icon.png"],"frostwarpericonpng":["Skins4/FrostWarper_Icon.png"],"gardenshovel":["Skins4/GardenShovel_Icon.png"],"gardenshovelicon":["Skins4/GardenShovel_Icon.png"],"gardenshoveliconpng":["Skins4/GardenShovel_Icon.png"],"gearnadelauncher":["Skins4/GearnadeLauncher_Icon.png"],"gearnadelaunchericon":["Skins4/GearnadeLauncher_Icon.png"],"gearnadelaunchericonpng":["Skins4/GearnadeLauncher_Icon.png"],"giantpencil":["Skins4/GiantPencil_Icon.png"],"giantpencilicon":["Skins4/GiantPencil_Icon.png"],"giantpenciliconpng":["Skins4/GiantPencil_Icon.png"],"gingerbreadaug":["Skins4/GingerbreadAug_Icon.png"],"gingerbreadaugicon":["Skins4/GingerbreadAug_Icon.png"],"gingerbreadaugiconpng":["Skins4/GingerbreadAug_Icon.png"],"gingerbreadhandgun":["Skins4/GingerbreadHandgun_Icon.png"],"gingerbreadhandgunicon":["Skins4/GingerbreadHandgun_Icon.png"],"gingerbreadhandguniconpng":["Skins4/GingerbreadHandgun_Icon.png"],"gingerbreadsniper":["Skins4/GingerbreadSniper_Icon.png"],"gingerbreadsnipericon":["Skins4/GingerbreadSniper_Icon.png"],"gingerbreadsnipericonpng":["Skins4/GingerbreadSniper_Icon.png"],"glitterthrower":["Skins4/Glitterthrower_Icon.png"],"glitterthrowericon":["Skins4/Glitterthrower_Icon.png"],"glitterthrowericonpng":["Skins4/Glitterthrower_Icon.png"],"glitterwarper":["Skins4/GlitterWarper_Icon.png"],"glitterwarpericon":["Skins4/GlitterWarper_Icon.png"],"glitterwarpericonpng":["Skins4/GlitterWarper_Icon.png"],"gloriousassaultrifle":["Skins4/GloriousAssaultRifle_Icon.png"],"gloriousassaultrifleicon":["Skins4/GloriousAssaultRifle_Icon.png"],"gloriousassaultrifleiconpng":["Skins4/GloriousAssaultRifle_Icon.png"],"gloriousbattleaxe":["Skins4/GloriousBattleAxe_Icon.png"],"gloriousbattleaxeicon":["Skins4/GloriousBattleAxe_Icon.png"],"gloriousbattleaxeiconpng":["Skins4/GloriousBattleAxe_Icon.png"],"gloriousbow":["Skins4/GloriousBow_Icon.png"],"gloriousbowicon":["Skins4/GloriousBow_Icon.png"],"gloriousbowiconpng":["Skins4/GloriousBow_Icon.png"],"gloriousburstrifle":["Skins4/GloriousBurstRifle_Icon.png"],"gloriousburstrifleicon":["Skins4/GloriousBurstRifle_Icon.png"],"gloriousburstrifleiconpng":["Skins4/GloriousBurstRifle_Icon.png"],"gloriouschainsaw":["Skins4/GloriousChainsaw_Icon.png"],"gloriouschainsawicon":["Skins4/GloriousChainsaw_Icon.png"],"gloriouschainsawiconpng":["Skins4/GloriousChainsaw_Icon.png"],"gloriouscrossbow":["Skins4/GloriousCrossbow_Icon.png"],"gloriouscrossbowicon":["Skins4/GloriousCrossbow_Icon.png"],"gloriouscrossbowiconpng":["Skins4/GloriousCrossbow_Icon.png"],"gloriousdaggers":["Skins4/GloriousDaggers_Icon.png"],"gloriousdaggersicon":["Skins4/GloriousDaggers_Icon.png"],"gloriousdaggersiconpng":["Skins4/GloriousDaggers_Icon.png"],"gloriousdistortion":["Skins4/GloriousDistortion_Icon.png"],"gloriousdistortionicon":["Skins4/GloriousDistortion_Icon.png"],"gloriousdistortioniconpng":["Skins4/GloriousDistortion_Icon.png"],"gloriousenergypistols":["Skins4/GloriousEnergyPistols_Icon.png"],"gloriousenergypistolsicon":["Skins4/GloriousEnergyPistols_Icon.png"],"gloriousenergypistolsiconpng":["Skins4/GloriousEnergyPistols_Icon.png"],"gloriousenergyrifle":["Skins4/GloriousEnergyRifle_Icon.png"],"gloriousenergyrifleicon":["Skins4/GloriousEnergyRifle_Icon.png"],"gloriousenergyrifleiconpng":["Skins4/GloriousEnergyRifle_Icon.png"],"gloriousexogun":["Skins4/GloriousExogun_Icon.png"],"gloriousexogunicon":["Skins4/GloriousExogun_Icon.png"],"gloriousexoguniconpng":["Skins4/GloriousExogun_Icon.png"],"gloriousfists":["Skins4/GloriousFists_Icon.png"],"gloriousfistsicon":["Skins4/GloriousFists_Icon.png"],"gloriousfistsiconpng":["Skins4/GloriousFists_Icon.png"],"gloriousflamethrower":["Skins4/GloriousFlamethrower_Icon.png"],"gloriousflamethrowericon":["Skins4/GloriousFlamethrower_Icon.png"],"gloriousflamethrowericonpng":["Skins4/GloriousFlamethrower_Icon.png"],"gloriousflaregun":["Skins4/GloriousFlareGun_Icon.png"],"gloriousflaregunicon":["Skins4/GloriousFlareGun_Icon.png"],"gloriousflareguniconpng":["Skins4/GloriousFlareGun_Icon.png"],"gloriousflashbang":["Skins4/GloriousFlashbang_Icon.png"],"gloriousflashbangicon":["Skins4/GloriousFlashbang_Icon.png"],"gloriousflashbangiconpng":["Skins4/GloriousFlashbang_Icon.png"],"gloriousfreezeray":["Skins4/GloriousFreezeRay_Icon.png"],"gloriousfreezerayicon":["Skins4/GloriousFreezeRay_Icon.png"],"gloriousfreezerayiconpng":["Skins4/GloriousFreezeRay_Icon.png"],"gloriousgrappler":["Skins4/GloriousGrappler_Icon.png"],"gloriousgrapplericon":["Skins4/GloriousGrappler_Icon.png"],"gloriousgrapplericonpng":["Skins4/GloriousGrappler_Icon.png"],"gloriousgrenade":["Skins4/GloriousGrenade_Icon.png"],"gloriousgrenadeicon":["Skins4/GloriousGrenade_Icon.png"],"gloriousgrenadeiconpng":["Skins4/GloriousGrenade_Icon.png"],"gloriousgrenadelauncher":["Skins4/GloriousGrenadeLauncher_Icon.png"],"gloriousgrenadelaunchericon":["Skins4/GloriousGrenadeLauncher_Icon.png"],"gloriousgrenadelaunchericonpng":["Skins4/GloriousGrenadeLauncher_Icon.png"],"gloriousgunblade":["Skins4/GloriousGunblade_Icon.png"],"gloriousgunbladeicon":["Skins4/GloriousGunblade_Icon.png"],"gloriousgunbladeiconpng":["Skins4/GloriousGunblade_Icon.png"],"glorioushandgun":["Skins4/GloriousHandgun_Icon.png"],"glorioushandgunicon":["Skins4/GloriousHandgun_Icon.png"],"glorioushandguniconpng":["Skins4/GloriousHandgun_Icon.png"],"gloriousjumppad":["Skins4/GloriousJumpPad_Icon.png"],"gloriousjumppadicon":["Skins4/GloriousJumpPad_Icon.png"],"gloriousjumppadiconpng":["Skins4/GloriousJumpPad_Icon.png"],"gloriouskatana":["Skins4/GloriousKatana_Icon.png"],"gloriouskatanaicon":["Skins4/GloriousKatana_Icon.png"],"gloriouskatanaiconpng":["Skins4/GloriousKatana_Icon.png"],"gloriousknife":["Skins4/GloriousKnife_Icon.png"],"gloriousknifeicon":["Skins4/GloriousKnife_Icon.png"],"gloriousknifeiconpng":["Skins4/GloriousKnife_Icon.png"],"gloriousmaul":["Skins4/GloriousMaul_Icon.png"],"gloriousmaulicon":["Skins4/GloriousMaul_Icon.png"],"gloriousmauliconpng":["Skins4/GloriousMaul_Icon.png"],"gloriousmedkit":["Skins4/GloriousMedkit_Icon.png"],"gloriousmedkiticon":["Skins4/GloriousMedkit_Icon.png"],"gloriousmedkiticonpng":["Skins4/GloriousMedkit_Icon.png"],"gloriousminigun":["Skins4/GloriousMinigun_Icon.png"],"gloriousminigunicon":["Skins4/GloriousMinigun_Icon.png"],"gloriousminiguniconpng":["Skins4/GloriousMinigun_Icon.png"],"gloriousmolotov":["Skins4/GloriousMolotov_Icon.png"],"gloriousmolotovicon":["Skins4/GloriousMolotov_Icon.png"],"gloriousmolotoviconpng":["Skins4/GloriousMolotov_Icon.png"],"gloriouspaintballgun":["Skins4/GloriousPaintballGun_Icon.png"],"gloriouspaintballgunicon":["Skins4/GloriousPaintballGun_Icon.png"],"gloriouspaintballguniconpng":["Skins4/GloriousPaintballGun_Icon.png"],"gloriouspermafrost":["Skins4/GloriousPermafrost_Icon.png"],"gloriouspermafrosticon":["Skins4/GloriousPermafrost_Icon.png"],"gloriouspermafrosticonpng":["Skins4/GloriousPermafrost_Icon.png"],"gloriousrevolver":["Skins4/GloriousRevolver_Icon.png"],"gloriousrevolvericon":["Skins4/GloriousRevolver_Icon.png"],"gloriousrevolvericonpng":["Skins4/GloriousRevolver_Icon.png"],"gloriousriotshield":["Skins4/GloriousRiotShield_Icon.png"],"gloriousriotshieldicon":["Skins4/GloriousRiotShield_Icon.png"],"gloriousriotshieldiconpng":["Skins4/GloriousRiotShield_Icon.png"],"gloriousrpg":["Skins4/GloriousRPG_Icon.png"],"gloriousrpgicon":["Skins4/GloriousRPG_Icon.png"],"gloriousrpgiconpng":["Skins4/GloriousRPG_Icon.png"],"glorioussatchel":["Skins4/GloriousSatchel_Icon.png"],"glorioussatchelicon":["Skins4/GloriousSatchel_Icon.png"],"glorioussatcheliconpng":["Skins4/GloriousSatchel_Icon.png"],"gloriousscythe":["Skins4/GloriousScythe_Icon.png"],"gloriousscytheicon":["Skins4/GloriousScythe_Icon.png"],"gloriousscytheiconpng":["Skins4/GloriousScythe_Icon.png"],"gloriousshorty":["Skins4/GloriousShorty_Icon.png"],"gloriousshortyicon":["Skins4/GloriousShorty_Icon.png"],"gloriousshortyiconpng":["Skins4/GloriousShorty_Icon.png"],"gloriousshotgun":["Skins4/GloriousShotgun_Icon.png"],"gloriousshotgunicon":["Skins4/GloriousShotgun_Icon.png"],"gloriousshotguniconpng":["Skins4/GloriousShotgun_Icon.png"],"gloriousslingshot":["Skins4/GloriousSlingshot_Icon.png"],"gloriousslingshoticon":["Skins4/GloriousSlingshot_Icon.png"],"gloriousslingshoticonpng":["Skins4/GloriousSlingshot_Icon.png"],"glorioussmokegrenade":["Skins4/GloriousSmokeGrenade_Icon.png"],"glorioussmokegrenadeicon":["Skins4/GloriousSmokeGrenade_Icon.png"],"glorioussmokegrenadeiconpng":["Skins4/GloriousSmokeGrenade_Icon.png"],"glorioussniper":["Skins4/GloriousSniper_Icon.png"],"glorioussnipericon":["Skins4/GloriousSniper_Icon.png"],"glorioussnipericonpng":["Skins4/GloriousSniper_Icon.png"],"gloriousspear":["Skins4/GloriousSpear_Icon.png"],"gloriousspearicon":["Skins4/GloriousSpear_Icon.png"],"gloriousspeariconpng":["Skins4/GloriousSpear_Icon.png"],"gloriousspray":["Skins4/GloriousSpray_Icon.png"],"glorioussprayicon":["Skins4/GloriousSpray_Icon.png"],"glorioussprayiconpng":["Skins4/GloriousSpray_Icon.png"],"glorioussubspacetripmine":["Skins4/GloriousSubspaceTripmine_Icon.png"],"glorioussubspacetripmineicon":["Skins4/GloriousSubspaceTripmine_Icon.png"],"glorioussubspacetripmineiconpng":["Skins4/GloriousSubspaceTripmine_Icon.png"],"glorioustrowel":["Skins4/GloriousTrowel_Icon.png"],"glorioustrowelicon":["Skins4/GloriousTrowel_Icon.png"],"glorioustroweliconpng":["Skins4/GloriousTrowel_Icon.png"],"gloriousuzi":["Skins4/GloriousUzi_Icon.png"],"gloriousuziicon":["Skins4/GloriousUzi_Icon.png"],"gloriousuziiconpng":["Skins4/GloriousUzi_Icon.png"],"gloriouswarhorn":["Skins4/GloriousWarHorn_Icon.png"],"gloriouswarhornicon":["Skins4/GloriousWarHorn_Icon.png"],"gloriouswarhorniconpng":["Skins4/GloriousWarHorn_Icon.png"],"gloriouswarper":["Skins4/GloriousWarper_Icon.png"],"gloriouswarpericon":["Skins4/GloriousWarper_Icon.png"],"gloriouswarpericonpng":["Skins4/GloriousWarper_Icon.png"],"gloriouswarpstone":["Skins4/GloriousWarpstone_Icon.png"],"gloriouswarpstoneicon":["Skins4/GloriousWarpstone_Icon.png"],"gloriouswarpstoneiconpng":["Skins4/GloriousWarpstone_Icon.png"],"goalpost":["Skins4/Goalpost Icon.png"],"goalposticon":["Skins4/Goalpost Icon.png"],"goalposticonpng":["Skins4/Goalpost Icon.png"],"grappler":["Weapons/Grappler_Icon.webp"],"grapplericon":["Weapons/Grappler_Icon.webp"],"grapplericonwebp":["Weapons/Grappler_Icon.webp"],"graveyard":["Maps/Graveyardicon.PNG"],"graveyardicon":["Maps/Graveyardicon.PNG"],"graveyardiconpng":["Maps/Graveyardicon.PNG"],"grenade":["Weapons/Grenade_Icon.webp"],"grenadeicon":["Weapons/Grenade_Icon.webp"],"grenadeiconwebp":["Weapons/Grenade_Icon.webp"],"grenadelauncher":["Weapons/GrenadeLauncher_Icon.webp"],"grenadelaunchericon":["Weapons/GrenadeLauncher_Icon.webp"],"grenadelaunchericonwebp":["Weapons/GrenadeLauncher_Icon.webp"],"gumballhandgun":["Skins5/GumballHandgun_Icon.png"],"gumballhandgunicon":["Skins5/GumballHandgun_Icon.png"],"gumballhandguniconpng":["Skins5/GumballHandgun_Icon.png"],"gumray":["Skins5/GumRay_Icon.png"],"gumrayicon":["Skins5/GumRay_Icon.png"],"gumrayiconpng":["Skins5/GumRay_Icon.png"],"gunblade":["Weapons/Gunblade_Icon.webp"],"gunbladeicon":["Weapons/Gunblade_Icon.webp"],"gunbladeiconwebp":["Weapons/Gunblade_Icon.webp"],"gunsaw":["Skins5/Gunsaw_Icon.png"],"gunsawicon":["Skins5/Gunsaw_Icon.png"],"gunsawiconpng":["Skins5/Gunsaw_Icon.png"],"hackerpistols":["Skins5/HackerPistols_Icon.png"],"hackerpistolsicon":["Skins5/HackerPistols_Icon.png"],"hackerpistolsiconpng":["Skins5/HackerPistols_Icon.png"],"hackerrifle":["Skins5/HackerRifle_Icon.png"],"hackerrifleicon":["Skins5/HackerRifle_Icon.png"],"hackerrifleiconpng":["Skins5/HackerRifle_Icon.png"],"handgun":["Skins5/HandGun Icon.png","Weapons/Handgun_Icon.webp"],"handgunicon":["Skins5/HandGun Icon.png","Weapons/Handgun_Icon.webp"],"handguniconpng":["Skins5/HandGun Icon.png"],"handguniconwebp":["Weapons/Handgun_Icon.webp"],"handsaws":["Skins5/Handsaws_Icon.png"],"handsawsicon":["Skins5/Handsaws_Icon.png"],"handsawsiconpng":["Skins5/Handsaws_Icon.png"],"harp":["Skins5/Harp_Icon.png"],"harpicon":["Skins5/Harp_Icon.png"],"harpiconpng":["Skins5/Harp_Icon.png"],"harpooncrossbow":["Skins5/HarpoonCrossbow_Icon.png"],"harpooncrossbowicon":["Skins5/HarpoonCrossbow_Icon.png"],"harpooncrossbowiconpng":["Skins5/HarpoonCrossbow_Icon.png"],"hotcoals":["Skins5/HotCoals_Icon.png"],"hotcoalsicon":["Skins5/HotCoals_Icon.png"],"hotcoalsiconpng":["Skins5/HotCoals_Icon.png"],"hotelbell":["Skins5/HotelBell_Icon.png"],"hotelbellicon":["Skins5/HotelBell_Icon.png"],"hotelbelliconpng":["Skins5/HotelBell_Icon.png"],"hourglass":["Skins5/Hourglass_Icon.png"],"hourglassicon":["Skins5/Hourglass_Icon.png"],"hourglassiconpng":["Skins5/Hourglass_Icon.png"],"hydropistols":["Skins5/HydroPistols_Icon.png"],"hydropistolsicon":["Skins5/HydroPistols_Icon.png"],"hydropistolsiconpng":["Skins5/HydroPistols_Icon.png"],"hydrorifle":["Skins5/HydroRifle_Icon.png"],"hydrorifleicon":["Skins5/HydroRifle_Icon.png"],"hydrorifleiconpng":["Skins5/HydroRifle_Icon.png"],"hypergunblade":["Skins5/HyperGunblade_Icon.png"],"hypergunbladeicon":["Skins5/HyperGunblade_Icon.png"],"hypergunbladeiconpng":["Skins5/HyperGunblade_Icon.png"],"hyperlaserguns":["Skins5/HyperLaserGuns_Icon.png"],"hyperlasergunsicon":["Skins5/HyperLaserGuns_Icon.png"],"hyperlasergunsiconpng":["Skins5/HyperLaserGuns_Icon.png"],"hypershotgun":["Skins5/HyperShotgun_Icon.png"],"hypershotgunicon":["Skins5/HyperShotgun_Icon.png"],"hypershotguniconpng":["Skins5/HyperShotgun_Icon.png"],"hypersniper":["Skins5/HyperSniper_Icon.png"],"hypersnipericon":["Skins5/HyperSniper_Icon.png"],"hypersnipericonpng":["Skins5/HyperSniper_Icon.png"],"iceberg":["Maps/Iceberg.jpg"],"icebergjpg":["Maps/Iceberg.jpg"],"icegrenade":["Skins5/IceGrenade Icon.png"],"icegrenadeicon":["Skins5/IceGrenade Icon.png"],"icegrenadeiconpng":["Skins5/IceGrenade Icon.png"],"icemaul":["Skins5/IceMaul_Icon.png"],"icemaulicon":["Skins5/IceMaul_Icon.png"],"icemauliconpng":["Skins5/IceMaul_Icon.png"],"icepermafrost":["Skins5/IcePermafrost_Icon.png"],"icepermafrosticon":["Skins5/IcePermafrost_Icon.png"],"icepermafrosticonpng":["Skins5/IcePermafrost_Icon.png"],"jackothrower":["Skins5/JackO_Thrower_Icon.png"],"jackothrowericon":["Skins5/JackO_Thrower_Icon.png"],"jackothrowericonpng":["Skins5/JackO_Thrower_Icon.png"],"jinglebell":["Skins5/JingleBell_Icon.png"],"jinglebellicon":["Skins5/JingleBell_Icon.png"],"jinglebelliconpng":["Skins5/JingleBell_Icon.png"],"jumppad":["Weapons/JumpPad_Icon.webp"],"jumppadicon":["Weapons/JumpPad_Icon.webp"],"jumppadiconwebp":["Weapons/JumpPad_Icon.webp"],"karambit":["Skins5/Karambit_Icon.png"],"karambiticon":["Skins5/Karambit_Icon.png"],"karambiticonpng":["Skins5/Karambit_Icon.png"],"katana":["Weapons/Katana_Icon.webp"],"katanaicon":["Weapons/Katana_Icon.webp"],"katanaiconwebp":["Weapons/Katana_Icon.webp"],"ketchupgun":["Skins5/KetchupGun_Icon.png"],"ketchupgunicon":["Skins5/KetchupGun_Icon.png"],"ketchupguniconpng":["Skins5/KetchupGun_Icon.png"],"keyblade":["Skins5/Keyblade Icon.png"],"keybladeicon":["Skins5/Keyblade Icon.png"],"keybladeiconpng":["Skins5/Keyblade Icon.png"],"keybow":["Skins5/Keybow Icon.png"],"keybowicon":["Skins5/Keybow Icon.png"],"keybowiconpng":["Skins5/Keybow Icon.png"],"keylisong":["Skins5/Keylisong Icon.png"],"keylisongicon":["Skins5/Keylisong Icon.png"],"keylisongiconpng":["Skins5/Keylisong Icon.png"],"keynade":["Skins5/Keynade Icon.png"],"keynadeicon":["Skins5/Keynade Icon.png"],"keynadeiconpng":["Skins5/Keynade Icon.png"],"keynais":["Skins5/Keynais Icon.png"],"keynaisicon":["Skins5/Keynais Icon.png"],"keynaisiconpng":["Skins5/Keynais Icon.png"],"keyper":["Skins5/Keyper Icon.png"],"keypericon":["Skins5/Keyper Icon.png"],"keypericonpng":["Skins5/Keyper Icon.png"],"keyrambit":["Skins5/Keyrambit Icon.png"],"keyrambiticon":["Skins5/Keyrambit Icon.png"],"keyrambiticonpng":["Skins5/Keyrambit Icon.png"],"keyshot":["Skins5/Keyshot Icon.png"],"keyshoticon":["Skins5/Keyshot Icon.png"],"keyshoticonpng":["Skins5/Keyshot Icon.png"],"keyspray":["Skins5/Keyspray Icon.png"],"keysprayicon":["Skins5/Keyspray Icon.png"],"keysprayiconpng":["Skins5/Keyspray Icon.png"],"keystrifle":["Skins5/KeystRifle Icon.png"],"keystrifleicon":["Skins5/KeystRifle Icon.png"],"keystrifleiconpng":["Skins5/KeystRifle Icon.png"],"keytana":["Skins5/Keytana Icon.png"],"keytanaicon":["Skins5/Keytana Icon.png"],"keytanaiconpng":["Skins5/Keytana Icon.png"],"keythe":["Skins5/Keythe Icon.png"],"keytheicon":["Skins5/Keythe Icon.png"],"keytheiconpng":["Skins5/Keythe Icon.png"],"keythrower":["Skins5/Keythrower Icon.png"],"keythrowericon":["Skins5/Keythrower Icon.png"],"keythrowericonpng":["Skins5/Keythrower Icon.png"],"keyttleaxe":["Skins5/KeyttleAxe Icon.png"],"keyttleaxeicon":["Skins5/KeyttleAxe Icon.png"],"keyttleaxeiconpng":["Skins5/KeyttleAxe Icon.png"],"keyvolver":["Skins5/Keyvolver Icon.png"],"keyvolvericon":["Skins5/Keyvolver Icon.png"],"keyvolvericonpng":["Skins5/Keyvolver Icon.png"],"keyzi":["Skins3/Keyzi Icon.png"],"keyziicon":["Skins3/Keyzi Icon.png"],"keyziiconpng":["Skins3/Keyzi Icon.png"],"knife":["Weapons/Knife_Icon.webp"],"knifeicon":["Weapons/Knife_Icon.webp"],"knifeiconwebp":["Weapons/Knife_Icon.webp"],"lamethrower":["Skins3/Lamethrower_Icon.png"],"lamethrowericon":["Skins3/Lamethrower_Icon.png"],"lamethrowericonpng":["Skins3/Lamethrower_Icon.png"],"laptop":["Skins3/Laptop_Icon.png"],"laptopicon":["Skins3/Laptop_Icon.png"],"laptopiconpng":["Skins3/Laptop_Icon.png"],"lasergun3000":["Skins3/Lasergun3000_Icon.png"],"lasergun3000icon":["Skins3/Lasergun3000_Icon.png"],"lasergun3000iconpng":["Skins3/Lasergun3000_Icon.png"],"lasso":["Skins3/Lasso_Icon.png"],"lassoicon":["Skins3/Lasso_Icon.png"],"lassoiconpng":["Skins3/Lasso_Icon.png"],"lavalamp":["Skins3/LavaLamp_Icon.png"],"lavalampicon":["Skins3/LavaLamp_Icon.png"],"lavalampiconpng":["Skins3/LavaLamp_Icon.png"],"legacybackrooms":["Maps/Legacybackroomsicon.PNG"],"legacybackroomsicon":["Maps/Legacybackroomsicon.PNG"],"legacybackroomsiconpng":["Maps/Legacybackroomsicon.PNG"],"legacybattlegrounds":["Maps/Legacybattlegroundsicon.PNG"],"legacybattlegroundsicon":["Maps/Legacybattlegroundsicon.PNG"],"legacybattlegroundsiconpng":["Maps/Legacybattlegroundsicon.PNG"],"legacybigdocks":["Maps/Legacybigdocksicon.PNG"],"legacybigdocksicon":["Maps/Legacybigdocksicon.PNG"],"legacybigdocksiconpng":["Maps/Legacybigdocksicon.PNG"],"legacycrossroads":["Maps/Legacycrossroadsicon.PNG"],"legacycrossroadsicon":["Maps/Legacycrossroadsicon.PNG"],"legacycrossroadsiconpng":["Maps/Legacycrossroadsicon.PNG"],"legacydocks":["Maps/Legacydocksicon.PNG"],"legacydocksicon":["Maps/Legacydocksicon.PNG"],"legacydocksiconpng":["Maps/Legacydocksicon.PNG"],"legacyonyx":["Maps/Legacyonyxicon.PNG"],"legacyonyxicon":["Maps/Legacyonyxicon.PNG"],"legacyonyxiconpng":["Maps/Legacyonyxicon.PNG"],"legacysplash":["Maps/Legacysplashicon.PNG"],"legacysplashicon":["Maps/Legacysplashicon.PNG"],"legacysplashiconpng":["Maps/Legacysplashicon.PNG"],"lightbulb":["Skins3/Lightbulb_Icon.png"],"lightbulbicon":["Skins3/Lightbulb_Icon.png"],"lightbulbiconpng":["Skins3/Lightbulb_Icon.png"],"lightningbolt":["Skins3/LightningBolt_Icon.png"],"lightningbolticon":["Skins3/LightningBolt_Icon.png"],"lightningbolticonpng":["Skins3/LightningBolt_Icon.png"],"linkedsword":["Skins3/LinkedSword_Icon.png"],"linkedswordicon":["Skins3/LinkedSword_Icon.png"],"linkedswordiconpng":["Skins3/LinkedSword_Icon.png"],"lovelyshorty":["Skins3/LovelyShorty_Icon.png"],"lovelyshortyicon":["Skins3/LovelyShorty_Icon.png"],"lovelyshortyiconpng":["Skins3/LovelyShorty_Icon.png"],"lovelyspray":["Skins3/LovelySpray_Icon.png"],"lovelysprayicon":["Skins3/LovelySpray_Icon.png"],"lovelysprayiconpng":["Skins3/LovelySpray_Icon.png"],"luckyhorshoe":["Skins3/LuckyHorshoe_Icon.png"],"luckyhorshoeicon":["Skins3/LuckyHorshoe_Icon.png"],"luckyhorshoeiconpng":["Skins3/LuckyHorshoe_Icon.png"],"machete":["Skins3/Machete_Icon.png"],"macheteicon":["Skins3/Machete_Icon.png"],"macheteiconpng":["Skins3/Machete_Icon.png"],"magmadistortion":["Skins3/MagmaDistortion_Icon.png"],"magmadistortionicon":["Skins3/MagmaDistortion_Icon.png"],"magmadistortioniconpng":["Skins3/MagmaDistortion_Icon.png"],"mammothhorn":["Skins3/MammothHorn_Icon.png"],"mammothhornicon":["Skins3/MammothHorn_Icon.png"],"mammothhorniconpng":["Skins3/MammothHorn_Icon.png"],"masterpiece":["Skins3/Masterpiece_Icon.gif"],"masterpieceicon":["Skins3/Masterpiece_Icon.gif"],"masterpieceicongif":["Skins3/Masterpiece_Icon.gif"],"maul":["Weapons/Maul_Icon.webp"],"maulicon":["Weapons/Maul_Icon.webp"],"mauliconwebp":["Weapons/Maul_Icon.webp"],"medkit":["Weapons/Medkit_Icon.webp"],"medkiticon":["Weapons/Medkit_Icon.webp"],"medkiticonwebp":["Weapons/Medkit_Icon.webp"],"medkitty":["Skins3/Medkitty_Icon.png"],"medkittyicon":["Skins3/Medkitty_Icon.png"],"medkittyiconpng":["Skins3/Medkitty_Icon.png"],"megadrill":["Skins3/MegaDrill_Icon.png"],"megadrillicon":["Skins3/MegaDrill_Icon.png"],"megadrilliconpng":["Skins3/MegaDrill_Icon.png"],"megaphone":["Skins3/Megaphone_Icon.png"],"megaphoneicon":["Skins3/Megaphone_Icon.png"],"megaphoneiconpng":["Skins3/Megaphone_Icon.png"],"midnightexogun":["Skins3/MidnightExogun Icon.png"],"midnightexogunicon":["Skins3/MidnightExogun Icon.png"],"midnightexoguniconpng":["Skins3/MidnightExogun Icon.png"],"milkcookies":["Skins3/Milk_Cookies_Icon.png"],"milkcookiesicon":["Skins3/Milk_Cookies_Icon.png"],"milkcookiesiconpng":["Skins3/Milk_Cookies_Icon.png"],"mimicaxe":["Skins3/MimicAxe_Icon.png"],"mimicaxeicon":["Skins3/MimicAxe_Icon.png"],"mimicaxeiconpng":["Skins3/MimicAxe_Icon.png"],"minigun":["Weapons/Minigun_Icon.webp"],"minigunicon":["Weapons/Minigun_Icon.webp"],"miniguniconwebp":["Weapons/Minigun_Icon.webp"],"molotov":["Weapons/Molotov_Icon.webp"],"molotovicon":["Weapons/Molotov_Icon.webp"],"molotoviconwebp":["Weapons/Molotov_Icon.webp"],"moneygun":["Skins3/MoneyGun_Icon.png"],"moneygunicon":["Skins3/MoneyGun_Icon.png"],"moneyguniconpng":["Skins3/MoneyGun_Icon.png"],"nailgun":["Skins3/Nailgun Icon.png"],"nailgunicon":["Skins3/Nailgun Icon.png"],"nailguniconpng":["Skins3/Nailgun Icon.png"],"newyearsenergypistols":["Skins3/NewYearsEnergyPistols_Icon.png"],"newyearsenergypistolsicon":["Skins3/NewYearsEnergyPistols_Icon.png"],"newyearsenergypistolsiconpng":["Skins3/NewYearsEnergyPistols_Icon.png"],"newyearsenergyrifle":["Skins3/NewYearsEnergyRifle_Icon.png"],"newyearsenergyrifleicon":["Skins3/NewYearsEnergyRifle_Icon.png"],"newyearsenergyrifleiconpng":["Skins3/NewYearsEnergyRifle_Icon.png"],"newyearskatana":["Skins3/NewYearsKatana_Icon.png"],"newyearskatanaicon":["Skins3/NewYearsKatana_Icon.png"],"newyearskatanaiconpng":["Skins3/NewYearsKatana_Icon.png"],"nordicaxe":["Skins3/NordicAxe_Icon.png"],"nordicaxeicon":["Skins3/NordicAxe_Icon.png"],"nordicaxeiconpng":["Skins3/NordicAxe_Icon.png"],"notebooksatchel":["Skins3/NotebookSatchel_Icon.png"],"notebooksatchelicon":["Skins3/NotebookSatchel_Icon.png"],"notebooksatcheliconpng":["Skins3/NotebookSatchel_Icon.png"],"notsoshorty":["Skins3/NotSoShorty_Icon.png"],"notsoshortyicon":["Skins3/NotSoShorty_Icon.png"],"notsoshortyiconpng":["Skins3/NotSoShorty_Icon.png"],"nukelauncher":["Skins3/NukeLauncher_Icon.png"],"nukelaunchericon":["Skins3/NukeLauncher_Icon.png"],"nukelaunchericonpng":["Skins3/NukeLauncher_Icon.png"],"onyx":["Maps/Onyxicon.PNG"],"onyxicon":["Maps/Onyxicon.PNG"],"onyxiconpng":["Maps/Onyxicon.PNG"],"paintballgun":["Weapons/PaintballGun_Icon.webp"],"paintballgunicon":["Weapons/PaintballGun_Icon.webp"],"paintballguniconwebp":["Weapons/PaintballGun_Icon.webp"],"paintbrush":["Skins3/Paintbrush_Icon.png"],"paintbrushicon":["Skins3/Paintbrush_Icon.png"],"paintbrushiconpng":["Skins3/Paintbrush_Icon.png"],"paperairplanes":["Skins3/PaperAirplanes Icon.png"],"paperairplanesicon":["Skins3/PaperAirplanes Icon.png"],"paperairplanesiconpng":["Skins3/PaperAirplanes Icon.png"],"pencil":["Skins3/Pencil_Icon.png"],"pencilicon":["Skins3/Pencil_Icon.png"],"penciliconpng":["Skins3/Pencil_Icon.png"],"pencillauncher":["Skins3/PencilLauncher_Icon.png"],"pencillaunchericon":["Skins3/PencilLauncher_Icon.png"],"pencillaunchericonpng":["Skins3/PencilLauncher_Icon.png"],"peppergun":["Skins3/Peppergun_Icon.png"],"peppergunicon":["Skins3/Peppergun_Icon.png"],"pepperguniconpng":["Skins3/Peppergun_Icon.png"],"peppermintsheriff":["Skins3/PeppermintSheriff_Icon.png"],"peppermintsherifficon":["Skins3/PeppermintSheriff_Icon.png"],"peppermintsherifficonpng":["Skins3/PeppermintSheriff_Icon.png"],"permafrost":["Weapons/Permafrost_Icon.webp"],"permafrosticon":["Weapons/Permafrost_Icon.webp"],"permafrosticonwebp":["Weapons/Permafrost_Icon.webp"],"phoenixrifle":["Skins3/PhoenixRifle_Icon.png"],"phoenixrifleicon":["Skins3/PhoenixRifle_Icon.png"],"phoenixrifleiconpng":["Skins3/PhoenixRifle_Icon.png"],"pineburst":["Skins3/PineBurst_Icon.png"],"pinebursticon":["Skins3/PineBurst_Icon.png"],"pinebursticonpng":["Skins3/PineBurst_Icon.png"],"pinespray":["Skins3/PineSpray_Icon.png"],"pinesprayicon":["Skins3/PineSpray_Icon.png"],"pinesprayiconpng":["Skins3/PineSpray_Icon.png"],"pineuzi":["Skins3/PineUzi_Icon.png"],"pineuziicon":["Skins3/PineUzi_Icon.png"],"pineuziiconpng":["Skins3/PineUzi_Icon.png"],"pixelburst":["Skins3/PixelBurst_Icon.png"],"pixelbursticon":["Skins3/PixelBurst_Icon.png"],"pixelbursticonpng":["Skins3/PixelBurst_Icon.png"],"pixelcrossbow":["Skins3/PixelCrossbow_Icon.png"],"pixelcrossbowicon":["Skins3/PixelCrossbow_Icon.png"],"pixelcrossbowiconpng":["Skins3/PixelCrossbow_Icon.png"],"pixelflamethrower":["Skins3/Pixel_flamethrower.png"],"pixelflamethrowerpng":["Skins3/Pixel_flamethrower.png"],"pixelflashbang":["Skins3/PixelFlashbang_Icon.png"],"pixelflashbangicon":["Skins3/PixelFlashbang_Icon.png"],"pixelflashbangiconpng":["Skins3/PixelFlashbang_Icon.png"],"pixelhandgun":["Skins3/PixelHandgun_Icon.png"],"pixelhandgunicon":["Skins3/PixelHandgun_Icon.png"],"pixelhandguniconpng":["Skins3/PixelHandgun_Icon.png"],"pixelkatana":["Skins3/PixelKatana_Icon.png"],"pixelkatanaicon":["Skins3/PixelKatana_Icon.png"],"pixelkatanaiconpng":["Skins3/PixelKatana_Icon.png"],"pixelminigun":["Skins3/PixelMinigun_Icon.png"],"pixelminigunicon":["Skins3/PixelMinigun_Icon.png"],"pixelminiguniconpng":["Skins3/PixelMinigun_Icon.png"],"pixelsniper":["Skins3/PixelSniper_Icon.png"],"pixelsnipericon":["Skins3/PixelSniper_Icon.png"],"pixelsnipericonpng":["Skins3/PixelSniper_Icon.png"],"pizzabox":["Skins3/PizzaBox_Icon.png"],"pizzaboxicon":["Skins3/PizzaBox_Icon.png"],"pizzaboxiconpng":["Skins3/PizzaBox_Icon.png"],"plasmadistortion":["Skins3/PlasmaDistortion_Icon.png"],"plasmadistortionicon":["Skins3/PlasmaDistortion_Icon.png"],"plasmadistortioniconpng":["Skins3/PlasmaDistortion_Icon.png"],"plasticshovel":["Skins3/PlasticShovel_Icon.png"],"plasticshovelicon":["Skins3/PlasticShovel_Icon.png"],"plasticshoveliconpng":["Skins3/PlasticShovel_Icon.png"],"playground":["Maps/Playgroundicon.PNG"],"playgroundicon":["Maps/Playgroundicon.PNG"],"playgroundiconpng":["Maps/Playgroundicon.PNG"],"potionsatchel":["Skins3/PotionSatchel_Icon.png"],"potionsatchelicon":["Skins3/PotionSatchel_Icon.png"],"potionsatcheliconpng":["Skins3/PotionSatchel_Icon.png"],"potokeys":["Skins3/PotO_Keys_Icon.png"],"potokeysicon":["Skins3/PotO_Keys_Icon.png"],"potokeysiconpng":["Skins3/PotO_Keys_Icon.png"],"pumpkincarver":["Skins3/PumpkinCarver_Icon.png"],"pumpkincarvericon":["Skins3/PumpkinCarver_Icon.png"],"pumpkincarvericonpng":["Skins3/PumpkinCarver_Icon.png"],"pumpkinclaws":["Skins3/PumpkinClaws_Icon.png"],"pumpkinclawsicon":["Skins3/PumpkinClaws_Icon.png"],"pumpkinclawsiconpng":["Skins3/PumpkinClaws_Icon.png"],"pumpkinhandgun":["Skins3/PumpkinHandgun_Icon.png"],"pumpkinhandgunicon":["Skins3/PumpkinHandgun_Icon.png"],"pumpkinhandguniconpng":["Skins3/PumpkinHandgun_Icon.png"],"pumpkinlauncher":["Skins3/PumpkinLauncher_Icon.png"],"pumpkinlaunchericon":["Skins3/PumpkinLauncher_Icon.png"],"pumpkinlaunchericonpng":["Skins3/PumpkinLauncher_Icon.png"],"pumpkinminigun":["Skins3/PumpkinMinigun_Icon.png"],"pumpkinminigunicon":["Skins3/PumpkinMinigun_Icon.png"],"pumpkinminiguniconpng":["Skins3/PumpkinMinigun_Icon.png"],"rainbowthrower":["Skins3/RainbowThrower Icon.png"],"rainbowthrowericon":["Skins3/RainbowThrower Icon.png"],"rainbowthrowericonpng":["Skins3/RainbowThrower Icon.png"],"ravenbow":["Skins3/RavenBow Icon.png"],"ravenbowicon":["Skins3/RavenBow Icon.png"],"ravenbowiconpng":["Skins3/RavenBow Icon.png"],"raygun":["Skins3/RayGun_Icon.png"],"raygunicon":["Skins3/RayGun_Icon.png"],"rayguniconpng":["Skins3/RayGun_Icon.png"],"reindeerslingshot":["Skins3/ReindeerSlingshot_Icon.png"],"reindeerslingshoticon":["Skins3/ReindeerSlingshot_Icon.png"],"reindeerslingshoticonpng":["Skins3/ReindeerSlingshot_Icon.png"],"repulsor":["Skins3/Repulsor_Icon.png"],"repulsoricon":["Skins3/Repulsor_Icon.png"],"repulsoriconpng":["Skins3/Repulsor_Icon.png"],"revolver":["Weapons/Revolver_Icon.webp"],"revolvericon":["Weapons/Revolver_Icon.webp"],"revolvericonwebp":["Weapons/Revolver_Icon.webp"],"riotshield":["Weapons/RiotShield_Icon.webp"],"riotshieldicon":["Weapons/RiotShield_Icon.webp"],"riotshieldiconwebp":["Weapons/RiotShield_Icon.webp"],"rivalsskinbobagun":["Skins3/RIVALSSKIN Boba Gun.webp"],"rivalsskinbobagunwebp":["Skins3/RIVALSSKIN Boba Gun.webp"],"rocketlauncher":["Skins3/RocketLauncher_Icon.png"],"rocketlaunchericon":["Skins3/RocketLauncher_Icon.png"],"rocketlaunchericonpng":["Skins3/RocketLauncher_Icon.png"],"rpg":["Weapons/RPG_Icon.webp"],"rpgicon":["Weapons/RPG_Icon.webp"],"rpgiconwebp":["Weapons/RPG_Icon.webp"],"rpkey":["Skins3/RPKey Icon.png"],"rpkeyicon":["Skins3/RPKey Icon.png"],"rpkeyiconpng":["Skins3/RPKey Icon.png"],"saber":["Skins3/Saber_Icon.png"],"sabericon":["Skins3/Saber_Icon.png"],"sabericonpng":["Skins3/Saber_Icon.png"],"sakurascythe":["Skins3/SakuraScythe_Icon.png"],"sakurascytheicon":["Skins3/SakuraScythe_Icon.png"],"sakurascytheiconpng":["Skins3/SakuraScythe_Icon.png"],"sandbox":["Maps/Sandbox.jpg"],"sandboxjpg":["Maps/Sandbox.jpg"],"sandwhich":["Skins3/Sandwhich_Icon.png"],"sandwhichicon":["Skins3/Sandwhich_Icon.png"],"sandwhichiconpng":["Skins3/Sandwhich_Icon.png"],"santa":["Skins3/Santa_Icon.png"],"santaicon":["Skins3/Santa_Icon.png"],"santaiconpng":["Skins3/Santa_Icon.png"],"satchel":["Weapons/Satchel_Icon.webp"],"satchelicon":["Weapons/Satchel_Icon.webp"],"satcheliconwebp":["Weapons/Satchel_Icon.webp"],"scepter":["Weapons/Scepter_Icon.webp"],"sceptericon":["Weapons/Scepter_Icon.webp"],"sceptericonwebp":["Weapons/Scepter_Icon.webp"],"scythe":["Weapons/Scythe_Icon.webp"],"scytheicon":["Weapons/Scythe_Icon.webp"],"scytheiconwebp":["Weapons/Scythe_Icon.webp"],"scytheofdeath":["Skins3/ScytheOfDeath_Icon.png"],"scytheofdeathicon":["Skins3/ScytheOfDeath_Icon.png"],"scytheofdeathiconpng":["Skins3/ScytheOfDeath_Icon.png"],"shadychickensandwhich":["Skins/ShadyChickenSandwhich_Icon.png"],"shadychickensandwhichicon":["Skins/ShadyChickenSandwhich_Icon.png"],"shadychickensandwhichiconpng":["Skins/ShadyChickenSandwhich_Icon.png"],"sheriff":["Skins/Sheriff_Icon.png"],"sherifficon":["Skins/Sheriff_Icon.png"],"sherifficonpng":["Skins/Sheriff_Icon.png"],"shiningstar":["Skins/ShiningStar_Icon.png"],"shiningstaricon":["Skins/ShiningStar_Icon.png"],"shiningstariconpng":["Skins/ShiningStar_Icon.png"],"shootingrange":["Maps/Shootingrangeicon.png","Maps/ShootingRangeMap.jpeg"],"shootingrangeicon":["Maps/Shootingrangeicon.png"],"shootingrangeiconpng":["Maps/Shootingrangeicon.png"],"shootingrangemap":["Maps/ShootingRangeMap.jpeg"],"shootingrangemapjpeg":["Maps/ShootingRangeMap.jpeg"],"shorty":["Weapons/Shorty_Icon.webp"],"shortyicon":["Weapons/Shorty_Icon.webp"],"shortyiconwebp":["Weapons/Shorty_Icon.webp"],"shotgun":["Weapons/Shotgun_Icon.webp"],"shotgunicon":["Weapons/Shotgun_Icon.webp"],"shotguniconwebp":["Weapons/Shotgun_Icon.webp"],"shotkey":["Skins/Shotkey Icon.png"],"shotkeyicon":["Skins/Shotkey Icon.png"],"shotkeyiconpng":["Skins/Shotkey Icon.png"],"shurikens":["Skins/Shurikens_Icon.png"],"shurikensicon":["Skins/Shurikens_Icon.png"],"shurikensiconpng":["Skins/Shurikens_Icon.png"],"singularity":["Skins/Singularity_Icon.png"],"singularityicon":["Skins/Singularity_Icon.png"],"singularityiconpng":["Skins/Singularity_Icon.png"],"skullbang":["Skins/Skullbang_Icon.png"],"skullbangicon":["Skins/Skullbang_Icon.png"],"skullbangiconpng":["Skins/Skullbang_Icon.png"],"skulllauncher":["Skins/SkullLauncher_Icon.png"],"skulllaunchericon":["Skins/SkullLauncher_Icon.png"],"skulllaunchericonpng":["Skins/SkullLauncher_Icon.png"],"sled":["Skins/Sled_Icon.png"],"sledicon":["Skins/Sled_Icon.png"],"slediconpng":["Skins/Sled_Icon.png"],"sleighhammer":["Skins/SleighHammer_Icon.png"],"sleighhammericon":["Skins/SleighHammer_Icon.png"],"sleighhammericonpng":["Skins/SleighHammer_Icon.png"],"sleighstortion":["Skins/Sleighstortion_Icon.png"],"sleighstortionicon":["Skins/Sleighstortion_Icon.png"],"sleighstortioniconpng":["Skins/Sleighstortion_Icon.png"],"slimegun":["Skins/SlimeGun_Icon.png"],"slimegunicon":["Skins/SlimeGun_Icon.png"],"slimeguniconpng":["Skins/SlimeGun_Icon.png"],"slingshot":["Weapons/Slingshot_Icon.webp"],"slingshoticon":["Weapons/Slingshot_Icon.webp"],"slingshoticonwebp":["Weapons/Slingshot_Icon.webp"],"smokegrenade":["Weapons/SmokeGrenade_Icon.webp"],"smokegrenadeicon":["Weapons/SmokeGrenade_Icon.webp"],"smokegrenadeiconwebp":["Weapons/SmokeGrenade_Icon.webp"],"sniper":["Weapons/Sniper_Icon.webp"],"snipericon":["Weapons/Sniper_Icon.webp"],"snipericonwebp":["Weapons/Sniper_Icon.webp"],"snowballgun":["Skins/SnowballGun_Icon.png"],"snowballgunicon":["Skins/SnowballGun_Icon.png"],"snowballguniconpng":["Skins/SnowballGun_Icon.png"],"snowballlauncher":["Skins/SnowballLauncher_Icon.png"],"snowballlaunchericon":["Skins/SnowballLauncher_Icon.png"],"snowballlaunchericonpng":["Skins/SnowballLauncher_Icon.png"],"snowblower":["Skins/Snowblower_Icon.png"],"snowblowericon":["Skins/Snowblower_Icon.png"],"snowblowericonpng":["Skins/Snowblower_Icon.png"],"snowglobe":["Skins/Snowglobe_Icon.png"],"snowglobeicon":["Skins/Snowglobe_Icon.png"],"snowglobeiconpng":["Skins/Snowglobe_Icon.png"],"snowmanpermafrost":["Skins/SnowmanPermafrost_Icon.png"],"snowmanpermafrosticon":["Skins/SnowmanPermafrost_Icon.png"],"snowmanpermafrosticonpng":["Skins/SnowmanPermafrost_Icon.png"],"snowshovel":["Skins/SnowShovel_Icon.png"],"snowshovelicon":["Skins/SnowShovel_Icon.png"],"snowshoveliconpng":["Skins/SnowShovel_Icon.png"],"soulgrenade":["Skins/SoulGrenade_Icon.png"],"soulgrenadeicon":["Skins/SoulGrenade_Icon.png"],"soulgrenadeiconpng":["Skins/SoulGrenade_Icon.png"],"soulpistols":["Skins/SoulPistols_Icon.png"],"soulpistolsicon":["Skins/SoulPistols_Icon.png"],"soulpistolsiconpng":["Skins/SoulPistols_Icon.png"],"soulrifle":["Skins/SoulRifle_Icon.png"],"soulrifleicon":["Skins/SoulRifle_Icon.png"],"soulrifleiconpng":["Skins/SoulRifle_Icon.png"],"spaceshiplauncher":["Skins/SpaceshipLauncher_Icon.png"],"spaceshiplaunchericon":["Skins/SpaceshipLauncher_Icon.png"],"spaceshiplaunchericonpng":["Skins/SpaceshipLauncher_Icon.png"],"spear":["Weapons/Spear_Icon.webp"],"spearicon":["Weapons/Spear_Icon.webp"],"speariconwebp":["Weapons/Spear_Icon.webp"],"spectralburst":["Skins/SpectralBurst_Icon.png"],"spectralbursticon":["Skins/SpectralBurst_Icon.png"],"spectralbursticonpng":["Skins/SpectralBurst_Icon.png"],"spiderray":["Skins/SpiderRay_Icon.png"],"spiderrayicon":["Skins/SpiderRay_Icon.png"],"spiderrayiconpng":["Skins/SpiderRay_Icon.png"],"spiderweb":["Skins/SpiderWeb_Icon.png"],"spiderwebicon":["Skins/SpiderWeb_Icon.png"],"spiderwebiconpng":["Skins/SpiderWeb_Icon.png"],"splash":["Maps/Splashicon.PNG"],"splashicon":["Maps/Splashicon.PNG"],"splashiconpng":["Maps/Splashicon.PNG"],"spray":["Weapons/Spray_Icon.webp"],"spraybottle":["Skins/SprayBottle_Icon.png"],"spraybottleicon":["Skins/SprayBottle_Icon.png"],"spraybottleiconpng":["Skins/SprayBottle_Icon.png"],"sprayicon":["Weapons/Spray_Icon.webp"],"sprayiconwebp":["Weapons/Spray_Icon.webp"],"spring":["Skins/Spring_Icon.png"],"springicon":["Skins/Spring_Icon.png"],"springiconpng":["Skins/Spring_Icon.png"],"spygloves":["Skins/SpyGloves_Icon.png"],"spyglovesicon":["Skins/SpyGloves_Icon.png"],"spyglovesiconpng":["Skins/SpyGloves_Icon.png"],"squidlauncher":["Skins/SquidLauncher_Icon.png"],"squidlaunchericon":["Skins/SquidLauncher_Icon.png"],"squidlaunchericonpng":["Skins/SquidLauncher_Icon.png"],"station":["Maps/Stationicon.PNG"],"stationicon":["Maps/Stationicon.PNG"],"stationiconpng":["Maps/Stationicon.PNG"],"stealthhandgun":["Skins/StealthHandgun_Icon.png"],"stealthhandgunicon":["Skins/StealthHandgun_Icon.png"],"stealthhandguniconpng":["Skins/StealthHandgun_Icon.png"],"stellarkatana":["Skins/StellarKatana_Icon.png"],"stellarkatanaicon":["Skins/StellarKatana_Icon.png"],"stellarkatanaiconpng":["Skins/StellarKatana_Icon.png"],"stick":["Skins/Stick_Icon.png"],"stickicon":["Skins/Stick_Icon.png"],"stickiconpng":["Skins/Stick_Icon.png"],"streetsign":["Skins/StreetSign_Icon.png"],"streetsignicon":["Skins/StreetSign_Icon.png"],"streetsigniconpng":["Skins/StreetSign_Icon.png"],"studiolight":["Skins/StudioLight_Icon.png"],"studiolighticon":["Skins/StudioLight_Icon.png"],"studiolighticonpng":["Skins/StudioLight_Icon.png"],"subspacetripmine":["Weapons/SubspaceTripmine_Icon.webp"],"subspacetripmineicon":["Weapons/SubspaceTripmine_Icon.webp"],"subspacetripmineiconwebp":["Weapons/SubspaceTripmine_Icon.webp"],"suspiciousgift":["Skins/SuspiciousGift_Icon.png"],"suspiciousgifticon":["Skins/SuspiciousGift_Icon.png"],"suspiciousgifticonpng":["Skins/SuspiciousGift_Icon.png"],"swashbuckler":["Skins/Swashbuckler_Icon.png"],"swashbucklericon":["Skins/Swashbuckler_Icon.png"],"swashbucklericonpng":["Skins/Swashbuckler_Icon.png"],"teleportdisc":["Skins/TeleportDisc_Icon.png"],"teleportdiscicon":["Skins/TeleportDisc_Icon.png"],"teleportdisciconpng":["Skins/TeleportDisc_Icon.png"],"temporalray":["Skins/TemporalRay_Icon.png"],"temporalrayicon":["Skins/TemporalRay_Icon.png"],"temporalrayiconpng":["Skins/TemporalRay_Icon.png"],"theshred":["Skins/TheShred_Icon.png"],"theshredicon":["Skins/TheShred_Icon.png"],"theshrediconpng":["Skins/TheShred_Icon.png"],"toaster":["Skins/Toaster_Icon.png"],"toastericon":["Skins/Toaster_Icon.png"],"toastericonpng":["Skins/Toaster_Icon.png"],"tombstoneshield":["Skins/TombstoneShield_Icon.png"],"tombstoneshieldicon":["Skins/TombstoneShield_Icon.png"],"tombstoneshieldiconpng":["Skins/TombstoneShield_Icon.png"],"tommygun":["Skins/TommyGun_Icon.png"],"tommygunicon":["Skins/TommyGun_Icon.png"],"tommyguniconpng":["Skins/TommyGun_Icon.png"],"tooshorty":["Skins/TooShorty_Icon.png"],"tooshortyicon":["Skins/TooShorty_Icon.png"],"tooshortyiconpng":["Skins/TooShorty_Icon.png"],"torch":["Skins/Torch Icon.png"],"torchicon":["Skins/Torch Icon.png"],"torchiconpng":["Skins/Torch Icon.png"],"towerstonehandgun":["Skins/TowerstoneHandgun_Icon.png"],"towerstonehandgunicon":["Skins/TowerstoneHandgun_Icon.png"],"towerstonehandguniconpng":["Skins/TowerstoneHandgun_Icon.png"],"trampoline":["Skins/Trampoline_Icon.png"],"trampolineicon":["Skins/Trampoline_Icon.png"],"trampolineiconpng":["Skins/Trampoline_Icon.png"],"trickortreat":["Skins/TrickOrTreat Icon.png"],"trickortreaticon":["Skins/TrickOrTreat Icon.png"],"trickortreaticonpng":["Skins/TrickOrTreat Icon.png"],"trowel":["Weapons/Trowel_Icon.webp"],"trowelicon":["Weapons/Trowel_Icon.webp"],"troweliconwebp":["Weapons/Trowel_Icon.webp"],"trumpet":["Skins/Trumpet_Icon.png"],"trumpeticon":["Skins/Trumpet_Icon.png"],"trumpeticonpng":["Skins/Trumpet_Icon.png"],"unstablewarpstone":["Skins/UnstableWarpstone Icon.png"],"unstablewarpstoneicon":["Skins/UnstableWarpstone Icon.png"],"unstablewarpstoneiconpng":["Skins/UnstableWarpstone Icon.png"],"uraniumlauncher":["Skins/UraniumLauncher_Icon.png"],"uraniumlaunchericon":["Skins/UraniumLauncher_Icon.png"],"uraniumlaunchericonpng":["Skins/UraniumLauncher_Icon.png"],"uzi":["Weapons/Uzi_Icon.webp"],"uziicon":["Weapons/Uzi_Icon.webp"],"uziiconwebp":["Weapons/Uzi_Icon.webp"],"vexedcandle":["Skins/VexedCandle_Icon.png"],"vexedcandleicon":["Skins/VexedCandle_Icon.png"],"vexedcandleiconpng":["Skins/VexedCandle_Icon.png"],"vexedflaregun":["Skins/VexedFlareGun_Icon.png"],"vexedflaregunicon":["Skins/VexedFlareGun_Icon.png"],"vexedflareguniconpng":["Skins/VexedFlareGun_Icon.png"],"village":["Maps/Villagethumbnail.png"],"villagethumbnail":["Maps/Villagethumbnail.png"],"villagethumbnailpng":["Maps/Villagethumbnail.png"],"violincrossbow":["Skins/ViolinCrossbow_Icon.png"],"violincrossbowicon":["Skins/ViolinCrossbow_Icon.png"],"violincrossbowiconpng":["Skins/ViolinCrossbow_Icon.png"],"voidpistols":["Skins/VoidPistols_Icon.png"],"voidpistolsicon":["Skins/VoidPistols_Icon.png"],"voidpistolsiconpng":["Skins/VoidPistols_Icon.png"],"voidrifle":["Skins/VoidRifle_Icon.png"],"voidrifleicon":["Skins/VoidRifle_Icon.png"],"voidrifleiconpng":["Skins/VoidRifle_Icon.png"],"warhorn":["Weapons/WarHorn_Icon.webp"],"warhornicon":["Weapons/WarHorn_Icon.webp"],"warhorniconwebp":["Weapons/WarHorn_Icon.webp"],"warpbone":["Skins/Warpbone_Icon.png"],"warpboneicon":["Skins/Warpbone_Icon.png"],"warpboneiconpng":["Skins/Warpbone_Icon.png"],"warper":["Weapons/Warper_Icon.webp"],"warperhandgun":["Skins/WarperHandgun Icon.png"],"warperhandgunicon":["Skins/WarperHandgun Icon.png"],"warperhandguniconpng":["Skins/WarperHandgun Icon.png"],"warpericon":["Weapons/Warper_Icon.webp"],"warpericonwebp":["Weapons/Warper_Icon.webp"],"warpeye":["Skins/Warpeye Icon.png"],"warpeyeicon":["Skins/Warpeye Icon.png"],"warpeyeiconpng":["Skins/Warpeye Icon.png"],"warpstar":["Skins/Warpstar_Icon.png"],"warpstaricon":["Skins/Warpstar_Icon.png"],"warpstariconpng":["Skins/Warpstar_Icon.png"],"warpstone":["Weapons/Warpstone_Icon.webp"],"warpstoneicon":["Weapons/Warpstone_Icon.webp"],"warpstoneiconwebp":["Weapons/Warpstone_Icon.webp"],"waterballoon":["Skins/WaterBalloon_Icon.png"],"waterballoonicon":["Skins/WaterBalloon_Icon.png"],"waterballooniconpng":["Skins/WaterBalloon_Icon.png"],"wateruzi":["Skins/WaterUzi_Icon.png"],"wateruziicon":["Skins/WaterUzi_Icon.png"],"wateruziiconpng":["Skins/WaterUzi_Icon.png"],"whoopeecushion":["Skins/WhoopeeCushion_Icon.png"],"whoopeecushionicon":["Skins/WhoopeeCushion_Icon.png"],"whoopeecushioniconpng":["Skins/WhoopeeCushion_Icon.png"],"wondergun":["Skins/Wondergun_Icon.png"],"wondergunicon":["Skins/Wondergun_Icon.png"],"wonderguniconpng":["Skins/Wondergun_Icon.png"],"wrappedflaregun":["Skins/WrappedFlareGun_Icon.png"],"wrappedflaregunicon":["Skins/WrappedFlareGun_Icon.png"],"wrappedflareguniconpng":["Skins/WrappedFlareGun_Icon.png"],"wrappedfreezeray":["Skins/WrappedFreezeRay_Icon.png"],"wrappedfreezerayicon":["Skins/WrappedFreezeRay_Icon.png"],"wrappedfreezerayiconpng":["Skins/WrappedFreezeRay_Icon.png"],"wrappedminigun":["Skins/WrappedMinigun_Icon.png"],"wrappedminigunicon":["Skins/WrappedMinigun_Icon.png"],"wrappedminiguniconpng":["Skins/WrappedMinigun_Icon.png"],"wrappedshorty":["Skins/WrappedShorty_Icon.png"],"wrappedshortyicon":["Skins/WrappedShorty_Icon.png"],"wrappedshortyiconpng":["Skins/WrappedShorty_Icon.png"]};

      const exactAssetKeys = file => {
        const raw = String(file || "").trim();
        if (!raw) return [];
        const base = raw.split("/").pop().replace(/\.(png|webp|jpg|jpeg|gif)$/i, "");
        const noIcon = base.replace(/(?:_|\s|-)?Icon$/i, "").replace(/(?:_|\s|-)?Thumbnail$/i, "").replace(/(?:_|\s|-)?Map$/i, "");
        return uniqueList([
          raw.toLowerCase().replace(/[^a-z0-9]+/g, ""),
          base.toLowerCase().replace(/[^a-z0-9]+/g, ""),
          noIcon.toLowerCase().replace(/[^a-z0-9]+/g, "")
        ]);
      };
      const exactAssetPaths = file => uniqueList(exactAssetKeys(file).flatMap(key => exactAssetFileMap[key] || []).map(path => __rtAsset(path)));

            const skinFileUrl = (file, folderIndex = 0) => assetFileUrl(skinAssetFolders[folderIndex] || skinAssetFolders[0], file);
      const mapFileUrl = (file, folderIndex = 0) => assetFileUrl(mapAssetFolders[folderIndex] || mapAssetFolders[0], file);

      function setSkinFileImage(img, file, fallbackSrc = "") {
        if (!img || !file) return;
        const candidates = assetFileCandidates(file);
        const attempts = uniqueList([
          ...exactAssetPaths(file),
          ...skinAssetFolders.flatMap(folder => candidates.map(candidate => assetFileUrl(folder, candidate)))
        ]);
        let attempt = 0;
        img.onerror = () => {
          attempt += 1;
          if (attempt < attempts.length) {
            img.src = attempts[attempt];
          } else {
            img.onerror = null;
            if (fallbackSrc) img.src = fallbackSrc;
          }
        };
        if (attempts.length) img.src = attempts[0];
        else if (fallbackSrc) img.src = fallbackSrc;
      }

      function setMapFileImage(img, files, fallbackSrc = "") {
        if (!img) return;
        const rawCandidates = (Array.isArray(files) ? files : [files]).filter(Boolean);
        const candidates = uniqueList(rawCandidates.flatMap(assetFileCandidates));
        const attempts = uniqueList([
          ...rawCandidates.flatMap(exactAssetPaths),
          ...candidates.flatMap(exactAssetPaths),
          ...mapAssetFolders.flatMap(folder => candidates.map(file => assetFileUrl(folder, file)))
        ]);
        let attempt = 0;
        img.onerror = () => {
          attempt += 1;
          if (attempt < attempts.length) {
            img.src = attempts[attempt];
          } else {
            img.onerror = null;
            if (fallbackSrc) img.src = fallbackSrc;
          }
        };
        if (attempts.length) img.src = attempts[0];
        else if (fallbackSrc) img.src = fallbackSrc;
      }

      function hydrateSkinFallbackImages(root, fallbackSrc = "") {
        root.querySelectorAll("[data-skin-file]").forEach(node => {
          const img = node.matches("img") ? node : node.querySelector("img");
          const file = node.dataset.skinFile || node.closest("[data-skin-file]")?.dataset.skinFile;
          if (img && file) setSkinFileImage(img, file, fallbackSrc);
        });
      }

      async function fandomApi(params) {
        const url = "https://robloxrivals.fandom.com/api.php?" + new URLSearchParams({
          ...params,
          format: "json",
          origin: "*"
        }).toString();
        const response = await fetch(url);
        if (!response.ok) throw new Error("Fandom request failed");
        return response.json();
      }

      function parseSkinWikitext(source) {
        const sections = [
          ["Common", source.indexOf("{{Common}} Skins")],
          ["Rare", source.indexOf("{{Rare}} Skins")],
          ["Legendary", source.indexOf("{{Legendary}} Skins")],
          ["Mythical", source.indexOf("{{Mythical}} Skins")],
          ["Unique", source.indexOf("{{Unique}} Skins")],
          ["Glorious", source.indexOf("{{Glorious}} Skins")],
          ["Unobtainable", source.indexOf("{{Unobtainable}} Skins")]
        ].filter(([, index]) => index >= 0).sort((a, b) => a[1] - b[1]);

        const getRarityAt = index => {
          let current = "Skin";
          for (const [name, start] of sections) {
            if (index >= start) current = name;
            else break;
          }
          return current;
        };

        const rows = [];
        const rowRegex = /\|\-\s*\|([\s\S]*?)(?=\n?\|\-|\n?\|\}|<\/div>|$)/g;
        let match;
        while ((match = rowRegex.exec(source))) {
          const row = match[1];
          const fileMatches = [...row.matchAll(/\[\[File:([^\]|]+)[^\]]*\]\]/g)].map(item => item[1]);
          if (!fileMatches.length) continue;

          const cleaned = row.replace(/\[\[File:[^\]]+\]\]/g, "FILECOL");
          const parts = cleaned.split("|").map(part => part.trim()).filter(Boolean);
          const fileCount = parts.filter(part => part === "FILECOL").length;
          if (fileCount < 1) continue;

          const firstDataIndex = parts.findIndex(part => part === "FILECOL") + fileCount;
          const skinName = stripWikiText(parts[firstDataIndex]);
          const weaponName = normalizeWeaponName(parts[firstDataIndex + 1]);
          if (!skinName || !weaponName || skinName === "Skin Name" || weaponName === "Weapon") continue;

          rows.push({
            name: skinName,
            weapon: weaponName,
            rarity: getRarityAt(match.index),
            file: fileMatches[1] || fileMatches[0] || ""
          });
        }

        const grouped = new Map();
        for (const skin of rows) {
          if (!grouped.has(skin.weapon)) grouped.set(skin.weapon, []);
          const list = grouped.get(skin.weapon);
          if (!list.some(item => item.name === skin.name)) list.push(skin);
        }
        return grouped;
      }

      async function loadSkinData() {
        if (skinDataPromise) return skinDataPromise;
        skinDataPromise = Promise.resolve((() => {
          skinDataByWeapon.clear();
          Object.entries(embeddedSkinsByWeapon || {}).forEach(([weaponName, skins]) => {
            skinDataByWeapon.set(weaponName, skins);
          });
          return skinDataByWeapon;
        })());
        return skinDataPromise;
      }

      async function resolveSkinImage(fileName) {
        return fileName || "";
      }

      const renderPicker = () => {
        activeSkinWeapon = null;
        screenPickerTitle.textContent = "Choose a Weapon";
        screenPickerSubtext.textContent = "Pick any Rivals weapon to place it into this slot.";
        screenPickerList.innerHTML = `
          <div class="screen-picker-actions">
            <button class="screen-picker-weapon custom-upload-tile" type="button" data-custom-upload="weapon">
              <span class="custom-plus">+</span>
              <span>Upload Custom Image</span>
              <small>Use your own weapon image</small>
            </button>
          </div>
          ${slots.map(category => {
            const categoryWeapons = weaponsBySlot[category] || [];
            return `
              <div class="screen-picker-category">
                <strong>${escapeHtml(category)}</strong>
                <div class="screen-picker-grid">
                  ${categoryWeapons.map(weapon => `
                    <button class="screen-picker-weapon" type="button" data-weapon="${escapeHtml(weapon.name)}">
                      <img decoding="async" loading="lazy" src="${weapon.img || placeholderSvg(weapon.name, weapon.category)}" alt="" draggable="false" referrerpolicy="no-referrer" crossorigin="anonymous" />
                      <span>${escapeHtml(weapon.name)}</span>
                      <small>${escapeHtml(weapon.tier)}</small>
                    </button>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        `;
      };

      const renderSkinPicker = async weapon => {
        screenPickerTitle.textContent = `${weapon.name} Skins`;
        screenPickerSubtext.textContent = "Choose Default, upload your own image, or select one of the embedded skins.";
        screenPickerList.innerHTML = `
          <button class="screen-picker-back" type="button" data-back-to-weapons="true">← Back to Weapons</button>
          <div class="screen-picker-actions">
            <button class="screen-picker-custom" type="button" data-default-skin="true">
              Default
              <small>Use the normal ${escapeHtml(weapon.name)} image</small>
            </button>
            <button class="screen-picker-custom" type="button" data-custom-upload="weapon">
              Upload Custom Image
              <small>Use your own skin/render</small>
            </button>
          </div>
          <div class="screen-picker-message">Loading embedded skins...</div>
        `;

        const data = await loadSkinData();
        const skins = data.get(weapon.name) || [];
        const skinsHtml = skins.length
          ? `<div class="screen-picker-category">
              <strong>${escapeHtml(weapon.name)} Skins</strong>
              <div class="screen-picker-grid">
                ${skins.map((skin, index) => `
                  <button class="screen-picker-skin" type="button" data-skin-index="${index}" data-skin-file="${escapeHtml(skin.file || "")}">
                    <img decoding="async" loading="lazy" src="${skin.file ? skinFileUrl(skin.file) : (weapon.img || placeholderSvg(weapon.name, weapon.category))}" alt="" draggable="false" />
                    <span>${escapeHtml(skin.name)}</span>
                    <small>${escapeHtml(skin.rarity || "Skin")}</small>
                  </button>
                `).join("")}
              </div>
            </div>`
          : `<div class="screen-picker-message">No embedded skins were found for ${escapeHtml(weapon.name)}. You can still use Default or upload a custom image.</div>`;

        screenPickerList.innerHTML = `
          <button class="screen-picker-back" type="button" data-back-to-weapons="true">← Back to Weapons</button>
          <div class="screen-picker-actions">
            <button class="screen-picker-custom" type="button" data-default-skin="true">
              Default
              <small>Use the normal ${escapeHtml(weapon.name)} image</small>
            </button>
            <button class="screen-picker-custom" type="button" data-custom-upload="weapon">
              Upload Custom Image
              <small>Use your own skin/render</small>
            </button>
          </div>
          ${skinsHtml}
        `;
        hydrateSkinFallbackImages(screenPickerList, weapon.img || placeholderSvg(weapon.name, weapon.category));
      };

      const openPicker = index => {
        activeScreenSlot = Number(index) || 0;
        renderPicker();
        screenWeaponPicker.classList.add("open");
        screenWeaponPicker.setAttribute("aria-hidden", "false");
      };

      const closePicker = () => {
        screenWeaponPicker.classList.remove("open");
        screenWeaponPicker.setAttribute("aria-hidden", "true");
      };

      const PAGE_SWITCH_COOLDOWN_MS = 10000;
      const PAGE_SWITCH_KEY = "rivalsTools:lastPageSwitch";
      let pageCooldownTimer = null;
      let pageCooldownHideTimer = null;

      const getLastPageSwitch = () => {
        try { return Number(localStorage.getItem(PAGE_SWITCH_KEY) || 0); }
        catch (err) { return 0; }
      };

      const markPageSwitchCooldown = () => {
        try { localStorage.setItem(PAGE_SWITCH_KEY, String(Date.now())); }
        catch (err) {}
      };

      const ensurePageCooldownToast = () => {
        let toast = document.getElementById("pageSwitchCooldownToast");
        if (toast) return toast;

        toast = document.createElement("div");
        toast.id = "pageSwitchCooldownToast";
        toast.className = "page-switch-toast";
        toast.innerHTML = `
          <div class="page-switch-toast-title">Page switch cooldown</div>
          <div class="page-switch-toast-message">Please wait <strong data-page-cooldown-seconds>10</strong> seconds before switching</div>
          <div class="page-switch-toast-track"><span data-page-cooldown-bar></span></div>
        `;
        document.body.appendChild(toast);
        return toast;
      };

      const showPageCooldownToast = msLeft => {
        const toast = ensurePageCooldownToast();
        const secondsEl = toast.querySelector("[data-page-cooldown-seconds]");
        const bar = toast.querySelector("[data-page-cooldown-bar]");
        const startedAt = Date.now();
        const total = Math.max(1, msLeft);

        clearInterval(pageCooldownTimer);
        clearTimeout(pageCooldownHideTimer);

        const update = () => {
          const left = Math.max(0, total - (Date.now() - startedAt));
          const seconds = Math.ceil(left / 1000);
          if (secondsEl) secondsEl.textContent = String(seconds);
          if (bar) bar.style.transform = `scaleX(${left / total})`;

          if (left <= 0) {
            clearInterval(pageCooldownTimer);
            toast.classList.add("leaving");
            pageCooldownHideTimer = setTimeout(() => {
              toast.classList.remove("show", "leaving");
            }, 5000);
          }
        };

        toast.classList.remove("leaving");
        toast.classList.add("show");
        update();
        pageCooldownTimer = setInterval(update, 120);
      };

      const routeToPage = page => {
        const routes = {
          home: __RT_BASE__ + "/",
          randomizer: __RT_BASE__ + "/loadout-randomizer/",
          screen: __RT_BASE__ + "/loadout-screen/",
          thumbnail: __RT_BASE__ + "/thumbnail-builder/",
          tier: __RT_BASE__ + "/tier-list-builder/",
          challenge: __RT_BASE__ + "/challenge-road/",
          fusion: __RT_BASE__ + "/weapon-fusions/"
        };

        const destination = routes[page] || routes.home;
        const current = window.location.pathname.replace(/\/+$/, "/");
        const destinationPath = new URL(destination, window.location.origin).pathname.replace(/\/+$/, "/");
        if (current === destinationPath) return;

        const now = Date.now();
        const lastSwitch = getLastPageSwitch();
        const elapsed = now - lastSwitch;
        const left = PAGE_SWITCH_COOLDOWN_MS - elapsed;

        if (left > 0) {
          showPageCooldownToast(left);
          return;
        }

        markPageSwitchCooldown();
        window.location.href = destination;
      };

      if (window.__RIVALS_TOOLS_PAGE__ && window.__RIVALS_TOOLS_PAGE__ !== "home") {
        markPageSwitchCooldown();
      }

      pageTabs?.addEventListener("click", event => {
        const btn = event.target.closest(".page-tab");
        if (!btn || isSpinning) return;
        event.preventDefault();
        event.stopPropagation();
        routeToPage(btn.dataset.page);
      });

      homePage?.addEventListener("click", event => {
        const card = event.target.closest("[data-home-page]");
        if (!card || isSpinning) return;
        event.preventDefault();
        event.stopPropagation();
        routeToPage(card.dataset.homePage);
      });

      const setScreenInput = (input, value) => {
        if (!input) return 0;
        const min = Number(input.min || -Infinity);
        const max = Number(input.max || Infinity);
        const next = Math.max(min, Math.min(max, Number(value) || 0));
        input.value = String(next);
        return next;
      };

      let screenDrag = null;
      screenStage?.addEventListener("pointerdown", event => {
        if (event.button !== 0) return;
        if (screenWeaponPicker?.classList.contains("open")) return;
        const title = event.target.closest?.(".screen-loadout-title");
        const weaponSlot = event.target.closest?.(".screen-loadout-slot");
        const row = event.target.closest?.(".screen-slot-row");
        if (title) {
          event.preventDefault();
          title.classList.add("is-dragging");
          screenDrag = { type: "title", el: title, startX: event.clientX, startY: event.clientY, startValX: Number(screenTitleX?.value || 0), startValY: Number(screenTitleY?.value || 0), moved: false };
          title.setPointerCapture?.(event.pointerId);
          return;
        }
        if (weaponSlot) {
          event.preventDefault();
          const index = Number(weaponSlot.dataset.screenSlot);
          weaponSlot.classList.add("is-dragging");
          screenDrag = {
            type: "slot",
            index,
            el: weaponSlot,
            startX: event.clientX,
            startY: event.clientY,
            startValX: Number(document.getElementById(`screenWeaponX${index}`)?.value || 0),
            startValY: Number(document.getElementById(`screenWeaponY${index}`)?.value || 0),
            moved: false
          };
          weaponSlot.setPointerCapture?.(event.pointerId);
          return;
        }
        if (row && event.target === row) {
          event.preventDefault();
          row.classList.add("is-dragging");
          screenDrag = { type: "row", el: row, startX: event.clientX, startY: event.clientY, startValX: Number(screenSlotsX?.value || 0), startValY: Number(screenSlotsY?.value || 0), moved: false };
          row.setPointerCapture?.(event.pointerId);
        }
      }, true);

      screenStage?.addEventListener("pointermove", event => {
        if (!screenDrag) return;
        const dx = event.clientX - screenDrag.startX;
        const dy = event.clientY - screenDrag.startY;
        if (Math.abs(dx) + Math.abs(dy) > 3) screenDrag.moved = true;
        if (screenDrag.type === "title") {
          setScreenInput(screenTitleX, screenDrag.startValX + dx);
          setScreenInput(screenTitleY, screenDrag.startValY + dy);
          applyScreenTitle();
        } else if (screenDrag.type === "row") {
          setScreenInput(screenSlotsX, screenDrag.startValX + dx);
          setScreenInput(screenSlotsY, screenDrag.startValY + dy);
          applyScreenSlotsLayout();
        } else if (screenDrag.type === "slot") {
          const xInput = document.getElementById(`screenWeaponX${screenDrag.index}`);
          const yInput = document.getElementById(`screenWeaponY${screenDrag.index}`);
          setScreenInput(xInput, screenDrag.startValX + dx);
          setScreenInput(yInput, screenDrag.startValY + dy);
          if (xInput) applyWeaponMove(xInput);
          if (yInput) applyWeaponMove(yInput);
        }
      }, true);

      const finishScreenDrag = () => {
        if (!screenDrag) return;
        const moved = screenDrag.moved;
        const el = screenDrag.el;
        el?.classList.remove("is-dragging");
        if (moved) {
          el.__kudaDragSuppressClick = true;
          setTimeout(() => { if (el) el.__kudaDragSuppressClick = false; }, 0);
          updateScreenFloatingPreview();
        }
        screenDrag = null;
      };
      screenStage?.addEventListener("pointerup", finishScreenDrag, true);
      screenStage?.addEventListener("pointercancel", finishScreenDrag, true);
      screenStage?.addEventListener("click", event => {
        const target = event.target.closest?.(".screen-loadout-slot, .screen-loadout-title, .screen-slot-row");
        if (target?.__kudaDragSuppressClick) {
          event.preventDefault();
          event.stopImmediatePropagation();
          target.__kudaDragSuppressClick = false;
        }
      }, true);

      screenSlots.forEach(slot => {
        slot.addEventListener("click", () => openPicker(slot.dataset.screenSlot));
      });

      screenPickerList?.addEventListener("click", async event => {
        const backBtn = event.target.closest("[data-back-to-weapons]");
        if (backBtn) {
          activeSkinWeapon = null;
          renderPicker();
          return;
        }

        const uploadBtn = event.target.closest("[data-custom-upload='weapon']");
        if (uploadBtn) {
          screenCustomWeaponImage.value = "";
          screenCustomWeaponImage.click();
          return;
        }

        const defaultBtn = event.target.closest("[data-default-skin]");
        if (defaultBtn && activeSkinWeapon) {
          screenSelections[activeScreenSlot] = {
            ...activeSkinWeapon,
            skinName: "Default",
            baseWeapon: activeSkinWeapon.name,
            img: activeSkinWeapon.img || placeholderSvg(activeSkinWeapon.name, activeSkinWeapon.category)
          };
          renderScreenSlots();
          updateScreenFloatingPreview();
          closePicker();
          return;
        }

        const skinBtn = event.target.closest(".screen-picker-skin");
        if (skinBtn && activeSkinWeapon) {
          const skins = skinDataByWeapon.get(activeSkinWeapon.name) || [];
          const skin = skins[Number(skinBtn.dataset.skinIndex)];
          if (!skin) return;
          screenSelections[activeScreenSlot] = {
            ...activeSkinWeapon,
            name: skin.name,
            skinName: skin.name,
            baseWeapon: activeSkinWeapon.name,
            tier: skin.rarity || activeSkinWeapon.tier,
            skinFile: skin.file || "",
            img: activeSkinWeapon.img || placeholderSvg(activeSkinWeapon.name, activeSkinWeapon.category)
          };
          renderScreenSlots();
          updateScreenFloatingPreview();
          closePicker();
          return;
        }

        const btn = event.target.closest(".screen-picker-weapon");
        if (!btn || btn.dataset.customUpload) return;
        const weapon = allWeapons.find(item => item.name === btn.dataset.weapon);
        if (!weapon) return;
        activeSkinWeapon = weapon;
        renderSkinPicker(weapon);
      });

      screenCustomWeaponImage?.addEventListener("change", async () => {
        const file = screenCustomWeaponImage.files?.[0];
        if (!file) return;
        const image = await fileToDataUrl(file);
        const name = file.name ? file.name.replace(/\.[^.]+$/, "") : "Custom Image";
        screenSelections[activeScreenSlot] = {
          name: name || "Custom Image",
          category: "Custom",
          tier: "Custom",
          skinName: "Custom",
          baseWeapon: activeSkinWeapon?.name || "Custom",
          img: image
        };
        renderScreenSlots();
        updateScreenFloatingPreview();
        closePicker();
      });

      screenCustomBgImage?.addEventListener("change", async () => {
        const file = screenCustomBgImage.files?.[0];
        if (!file) return;
        const image = await fileToDataUrl(file);
        screenBackgrounds.custom = image;
        screenBgImage.src = image;
        screenBgOptions.querySelectorAll(".bg-option").forEach(option => {
          option.classList.toggle("active", option.dataset.bg === "custom");
        });
        updateScreenFloatingPreview();
      });

      screenPickerClose?.addEventListener("click", closePicker);
      screenWeaponPicker?.addEventListener("click", event => {
        if (event.target === screenWeaponPicker) closePicker();
      });

      screenZoom?.addEventListener("input", () => {
        const zoom = Math.max(1, Math.min(1.65, Number(screenZoom.value) || 1));
        screenStage.style.setProperty("--screen-zoom", zoom);
      });

      const applyScreenTitle = () => {
        if (screenLoadoutTitle) screenLoadoutTitle.textContent = (screenTitleText?.value || "LOADOUT 1").trim().toUpperCase();
        screenStage.classList.toggle("hide-screen-title", screenShowTitle?.checked === false);
        screenStage.style.setProperty("--screen-title-x", `${Number(screenTitleX?.value || 0)}px`);
        screenStage.style.setProperty("--screen-title-y", `${Number(screenTitleY?.value || 0)}px`);
        screenStage.style.setProperty("--screen-title-scale", Number(screenTitleScale?.value || 1));
        screenStage.style.setProperty("--screen-title-outline-color", screenTitleOutlineColor?.value || "#000000");
        screenStage.style.setProperty("--screen-title-outline-size", `${Number(screenTitleOutlineSize?.value || 6)}px`);
        screenStage.dataset.screenFont = currentScreenFont || "rubik";
        screenFontButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.screenFontChoice === currentScreenFont));
      };

      [screenShowTitle, screenTitleText, screenTitleX, screenTitleY, screenTitleScale, screenTitleOutlineColor, screenTitleOutlineSize].forEach(input => {
        input?.addEventListener("input", () => { applyScreenTitle(); updateScreenFloatingPreview(); });
        input?.addEventListener("change", () => { applyScreenTitle(); updateScreenFloatingPreview(); });
      });

      screenFontButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          currentScreenFont = btn.dataset.screenFontChoice || "rubik";
          applyScreenTitle();
          updateScreenFloatingPreview();
        });
      });

      screenUploadFontBtn?.addEventListener("click", () => {
        screenCustomFontInput.value = "";
        screenCustomFontInput.click();
      });

      screenCustomFontInput?.addEventListener("change", async () => {
        const file = screenCustomFontInput.files?.[0];
        if (!file) return;
        const fontUrl = await fileToDataUrl(file);
        let style = document.getElementById("screenCustomFontStyle");
        if (!style) {
          style = document.createElement("style");
          style.id = "screenCustomFontStyle";
          document.head.appendChild(style);
        }
        style.textContent = `@font-face{font-family:"RivalsToolsScreenCustomFont";src:url("${fontUrl}");font-weight:100 1000;font-style:normal;font-display:swap;}`;
        currentScreenFont = "custom";
        applyScreenTitle();
        updateScreenFloatingPreview();
      });

      const applyWeaponScale = input => {
        const index = Number(input.dataset.scaleSlot);
        const slot = screenSlots[index];
        if (!slot) return;
        const scale = Math.max(0.45, Math.min(4.4, Number(input.value) || 1.18));
        slot.style.setProperty("--slot-weapon-scale", scale);
      };

      const applyWeaponMove = input => {
        const index = Number(input.dataset.moveSlot);
        const prop = input.dataset.moveProp;
        const slot = screenSlots[index];
        if (!slot || !prop) return;
        const value = Number(input.value) || 0;
        slot.style.setProperty(prop === "x" ? "--screen-slot-x" : "--screen-slot-y", `${value}px`);
      };

      screenWeaponScaleInputs.forEach(input => {
        applyWeaponScale(input);
        input.addEventListener("input", () => { applyWeaponScale(input); updateScreenFloatingPreview(); });
      });

      screenWeaponMoveInputs.forEach(input => {
        applyWeaponMove(input);
        input.addEventListener("input", () => { applyWeaponMove(input); updateScreenFloatingPreview(); });
      });

      const applyScreenStretch = () => {
        const percent = Math.max(0, Math.min(100, Number(screenSlotStretch?.value) || 70));
        screenStage.style.setProperty("--slot-stretch", percent / 100);
      };

      const applyScreenSlotsLayout = () => {
        if (!screenSlotRow) return;
        screenSlotRow.style.setProperty("--screen-slots-x", `${Number(screenSlotsX?.value || 0)}px`);
        screenSlotRow.style.setProperty("--screen-slots-y", `${Number(screenSlotsY?.value || 0)}px`);
        screenSlotRow.style.setProperty("--screen-slots-scale", Number(screenSlotsScale?.value || 1));
      };

      const applyScreenBrightness = () => {
        const brightness = Math.max(0.7, Math.min(1.8, Number(screenBrightness?.value) || 1.2));
        screenStage.style.setProperty("--screen-brightness", brightness);
      };

      const applyScreenSaturation = () => {
        const saturation = Math.max(0.4, Math.min(2.4, Number(screenSaturation?.value) || 1.2));
        screenStage.style.setProperty("--screen-saturation", saturation);
      };

      let screenPreviewTimer = null;

      const updateScreenFloatingPreview = () => {
        if (activePage !== "screen" || !screenStage) return;
        let preview = document.getElementById("screenFloatingPreview");
        if (!preview) {
          preview = document.createElement("div");
          preview.id = "screenFloatingPreview";
          preview.className = "screen-floating-preview";
          document.body.appendChild(preview);
        }

        const clone = screenStage.cloneNode(true);
        clone.removeAttribute("id");
        clone.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
        const holder = document.createElement("div");
        holder.className = "screen-preview-scale";
        holder.appendChild(clone);
        preview.innerHTML = "";
        preview.appendChild(holder);
        preview.classList.add("show");
        const rect = preview.getBoundingClientRect();
        const scale = Math.min(rect.width / 1120, rect.height / 630);
        preview.style.setProperty("--screen-preview-scale", String(scale));

        clearTimeout(screenPreviewTimer);
        screenPreviewTimer = setTimeout(() => {
          preview.classList.remove("show");
        }, 1700);
      };

      screenSlotStretch?.addEventListener("input", () => { applyScreenStretch(); updateScreenFloatingPreview(); });
      [screenSlotsX, screenSlotsY, screenSlotsScale].forEach(input => {
        input?.addEventListener("input", event => {
          showRangeTooltip(input, event);
          applyScreenSlotsLayout();
          updateScreenFloatingPreview();
        });
      });
      screenBrightness?.addEventListener("input", () => { applyScreenBrightness(); updateScreenFloatingPreview(); });
      screenSaturation?.addEventListener("input", () => { applyScreenSaturation(); updateScreenFloatingPreview(); });

      screenBlur?.addEventListener("input", () => {
        const blur = Math.max(0, Math.min(8, Number(screenBlur.value) || 0));
        screenStage.style.setProperty("--screen-blur", `${blur}px`);
        screenStage.style.setProperty("--screen-blur-num", blur);
        updateScreenFloatingPreview();
      });

      applyScreenTitle();
      applyScreenStretch();
      applyScreenSlotsLayout();
      applyScreenBrightness();
      applyScreenSaturation();

      screenBgOptions?.addEventListener("click", event => {
        const btn = event.target.closest(".bg-option");
        if (!btn) return;
        const key = btn.dataset.bg;
        if (key === "custom" && !screenBackgrounds.custom) {
          screenCustomBgImage.value = "";
          screenCustomBgImage.click();
          return;
        }
        if (!screenBackgrounds[key]) return;
        screenBgImage.src = screenBackgrounds[key];
        screenBgOptions.querySelectorAll(".bg-option").forEach(option => {
          option.classList.toggle("active", option === btn);
        });
        updateScreenFloatingPreview();
      });


      const screenLoadImage = src => new Promise((resolve, reject) => {
        if (!src) return reject(new Error("Missing image"));
        const img = new Image();
        if (!src.startsWith("data:") && !src.startsWith("blob:")) img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Could not load image: ${src}`));
        img.src = src;
      });

      const screenDrawImageCover = (ctx, img, x, y, w, h, zoom = 1) => {
        const ir = img.naturalWidth / img.naturalHeight;
        const cr = w / h;
        let dw, dh;
        if (ir > cr) {
          dh = h;
          dw = h * ir;
        } else {
          dw = w;
          dh = w / ir;
        }
        dw *= zoom;
        dh *= zoom;
        ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
      };

      const screenDrawImageContain = (ctx, img, cx, cy, maxW, maxH) => {
        const ir = img.naturalWidth / img.naturalHeight;
        let dw = maxW;
        let dh = maxW / ir;
        if (dh > maxH) {
          dh = maxH;
          dw = maxH * ir;
        }
        ctx.drawImage(img, cx - dw / 2, cy - dh / 2, dw, dh);
      };

      const screenCanvasFontFamily = () => {
        if (currentScreenFont === "rubik") return '"Rubik", Arial, sans-serif';
        if (currentScreenFont === "custom") return '"RivalsToolsScreenCustomFont", "Rubik", Arial, sans-serif';
        return 'Impact, "Arial Black", sans-serif';
      };

      const screenDrawStrokeText = (ctx, text, x, y, fontSize, outlineSize, outlineColor) => {
        ctx.save();
        ctx.font = `900 ${fontSize}px ${screenCanvasFontFamily()}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.lineJoin = "round";
        ctx.shadowColor = "rgba(0,0,0,0.42)";
        ctx.shadowBlur = fontSize * 0.08;
        ctx.shadowOffsetY = fontSize * 0.09;
        if (outlineSize > 0) {
          ctx.lineWidth = outlineSize;
          ctx.strokeStyle = outlineColor || "#000000";
          ctx.strokeText(text, x, y);
        }
        ctx.fillStyle = "#ffffff";
        ctx.fillText(text, x, y);
        ctx.restore();
      };

      const exportLoadoutScreenCanvas = async () => {
        const W = 1920;
        const H = 1080;
        const output = document.createElement("canvas");
        output.width = W;
        output.height = H;
        const finalCtx = output.getContext("2d");
        const layer = document.createElement("canvas");
        layer.width = W;
        layer.height = H;
        const ctx = layer.getContext("2d");

        if (document.fonts?.ready) {
          try { await document.fonts.ready; } catch (err) {}
        }

        const waitForImage = img => new Promise(resolve => {
          if (!img) return resolve(null);
          if (img.complete && img.naturalWidth > 0) return resolve(img);
          const done = () => resolve(img.complete && img.naturalWidth > 0 ? img : null);
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", () => resolve(null), { once: true });
          setTimeout(done, 1200);
        });

        const drawDomImage = async (img, x, y, w, h, options = {}) => {
          const loaded = await waitForImage(img);
          if (!loaded) return false;
          ctx.save();
          if (options.alpha != null) ctx.globalAlpha = options.alpha;
          if (options.shadow) {
            ctx.shadowColor = options.shadow.color || "rgba(0,0,0,0.40)";
            ctx.shadowBlur = options.shadow.blur || 16;
            ctx.shadowOffsetX = options.shadow.x || 0;
            ctx.shadowOffsetY = options.shadow.y || 12;
          }
          if (options.rotate) {
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(options.rotate);
            ctx.drawImage(loaded, -w / 2, -h / 2, w, h);
          } else {
            ctx.drawImage(loaded, x, y, w, h);
          }
          ctx.restore();
          return true;
        };

        const stageRect = screenStage.getBoundingClientRect();
        const sx = W / Math.max(stageRect.width, 1);
        const sy = H / Math.max(stageRect.height, 1);
        const mapRect = rect => ({
          x: (rect.left - stageRect.left) * sx,
          y: (rect.top - stageRect.top) * sy,
          w: rect.width * sx,
          h: rect.height * sy
        });

        const zoom = Math.max(1, Math.min(1.65, Number(screenZoom?.value) || 1));
        const blur = Math.max(0, Math.min(8, Number(screenBlur?.value) || 0));
        const brightness = Math.max(0.7, Math.min(1.8, Number(screenBrightness?.value) || 1.2));
        const saturation = Math.max(0.4, Math.min(2.4, Number(screenSaturation?.value) || 1.2));

        try {
          const bg = await screenLoadImage(screenBgImage.src);
          ctx.save();
          ctx.filter = `blur(${blur}px)`;
          screenDrawImageCover(ctx, bg, 0, 0, W, H, zoom + blur * 0.006);
          ctx.restore();
        } catch (err) {
          ctx.fillStyle = "#a7adba";
          ctx.fillRect(0, 0, W, H);
        }

        ctx.save();
        const overlay = ctx.createLinearGradient(0, 0, 0, H);
        overlay.addColorStop(0, "rgba(255,255,255,0.06)");
        overlay.addColorStop(1, "rgba(0,0,0,0.03)");
        ctx.fillStyle = overlay;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();

        for (let i = 0; i < screenSlots.length; i++) {
          const slot = screenSlots[i];
          const slotBg = slot.querySelector(".screen-slot-bg");
          const bgBox = mapRect(slotBg.getBoundingClientRect());
          await drawDomImage(slotBg, bgBox.x, bgBox.y, bgBox.w, bgBox.h, {
            alpha: Number(getComputedStyle(slotBg).opacity || 0.58),
            rotate: slot.classList.contains("flipped") ? Math.PI : 0
          });
        }

        for (let i = 0; i < screenSlots.length; i++) {
          const slot = screenSlots[i];
          const liveImg = slot.querySelector(".screen-selected-weapon");
          if (!liveImg || liveImg.hidden || !liveImg.src) continue;
          const box = mapRect(liveImg.getBoundingClientRect());
          await drawDomImage(liveImg, box.x, box.y, box.w, box.h, {
            shadow: { color: "rgba(0,0,0,0.40)", blur: 22, y: 14 }
          });
        }

        if (screenShowTitle?.checked !== false && screenLoadoutTitle) {
          const titleText = (screenTitleText?.value || "LOADOUT 1").trim().toUpperCase();
          const titleRect = mapRect(screenLoadoutTitle.getBoundingClientRect());
          const style = getComputedStyle(screenLoadoutTitle);
          const fontPx = parseFloat(style.fontSize || "80") * sx;
          const outlinePx = Number(screenTitleOutlineSize?.value || 6) * sx;
          const outlineColor = screenTitleOutlineColor?.value || "#000000";
          ctx.save();
          ctx.font = `900 ${fontPx}px ${screenCanvasFontFamily()}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.lineJoin = "round";
          ctx.shadowColor = "rgba(0,0,0,0.42)";
          ctx.shadowBlur = fontPx * 0.08;
          ctx.shadowOffsetY = fontPx * 0.08;
          if (outlinePx > 0) {
            ctx.lineWidth = outlinePx;
            ctx.strokeStyle = outlineColor;
            ctx.strokeText(titleText, titleRect.x + titleRect.w / 2, titleRect.y);
          }
          ctx.fillStyle = "#ffffff";
          ctx.fillText(titleText, titleRect.x + titleRect.w / 2, titleRect.y);
          ctx.restore();
        }

        finalCtx.save();
        finalCtx.filter = `brightness(${brightness}) saturate(${saturation})`;
        finalCtx.drawImage(layer, 0, 0);
        finalCtx.restore();

        return output;
      };

      screenDownloadBtn?.addEventListener("click", async () => {
        try {
          statusText.textContent = "RENDERING SCREEN";
          const canvas = await exportLoadoutScreenCanvas();
          canvas.toBlob(blob => {
            if (!blob) {
              statusText.textContent = "DOWNLOAD FAILED";
              return;
            }
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "kuda-loadout-screen.png";
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
              URL.revokeObjectURL(a.href);
              a.remove();
              if (activePage === "screen") statusText.textContent = "LOADOUT SCREEN";
            }, 250);
          }, "image/png");
        } catch (err) {
          console.error(err);
          statusText.textContent = "DOWNLOAD FAILED";
          alert("Download failed. Try running the site through localhost or GitHub Pages so the browser can export images.");
        }
      });

      screenFullscreenBtn?.addEventListener("click", async () => {
        try {
          if (!document.fullscreenElement && screenStage.requestFullscreen) {
            await screenStage.requestFullscreen();
          } else if (document.exitFullscreen) {
            await document.exitFullscreen();
          }
        } catch (err) {
          statusText.textContent = "FULLSCREEN BLOCKED";
          setTimeout(() => {
            if (activePage === "screen") statusText.textContent = "LOADOUT SCREEN";
          }, 1100);
        }
      });

      screenClearBtn?.addEventListener("click", () => {
        screenSelections.fill(null);
        renderScreenSlots();
        updateScreenFloatingPreview();
      });

      window.addEventListener("keydown", event => {
        if (event.key === "Escape" && screenWeaponPicker.classList.contains("open")) {
          closePicker();
        }
      });





      function setupThumbnailBuilder(){
        const thumbStage = document.getElementById("thumbStage");
        const thumbCanvas = document.getElementById("thumbCanvas");
        const thumbPicker = document.getElementById("thumbWeaponPicker");
        const thumbPickerList = document.getElementById("thumbPickerList");
        const thumbPickerClose = document.getElementById("thumbPickerClose");
        const thumbCustomBgInput = document.getElementById("thumbCustomBgInput");
        const thumbCustomWeaponInput = document.getElementById("thumbCustomWeaponInput");
        const thumbCustomFontInput = document.getElementById("thumbCustomFontInput");
        const thumbUploadFontBtn = document.getElementById("thumbUploadFontBtn");
        const thumbTopOutlineColor = document.getElementById("thumbTopOutlineColor");
        const thumbTopOutlineSize = document.getElementById("thumbTopOutlineSize");
        const thumbNameOutlineColor = document.getElementById("thumbNameOutlineColor");
        const thumbNameOutlineSize = document.getElementById("thumbNameOutlineSize");
        const thumbShowTopText = document.getElementById("thumbShowTopText");
        const thumbShowNames = document.getElementById("thumbShowNames");
        const thumbSaturation = document.getElementById("thumbSaturation");
        const thumbFontButtons = Array.from(document.querySelectorAll(".thumb-font-btn"));
        const thumbFullscreenBtn = document.getElementById("thumbFullscreenBtn");
        const thumbDownloadBtn = document.getElementById("thumbDownloadBtn");
        const thumbClearBtn = document.getElementById("thumbClearBtn");
        const thumbSlots = Array.from(document.querySelectorAll(".thumb-item-slot"));
        const thumbSlotTitleEls = Array.from(document.querySelectorAll("[data-thumb-slot-title]"));
        const thumbBgImages = {
          left: document.querySelector('[data-thumb-bg="left"]'),
          right: document.querySelector('[data-thumb-bg="right"]')
        };
        const thumbTitles = {
          left: document.querySelector('[data-thumb-title="left"]'),
          right: document.querySelector('[data-thumb-title="right"]')
        };

        const thumbBackgrounds = {
          arena: screenBackgrounds.grid,
          splash: screenBackgrounds.waterpark,
          docks: screenBackgrounds.dockyard,
          customLeft: "",
          customRight: ""
        };

        const thumbSideState = {
          left: { bg: "arena", zoom: 1, brightness: 1.3, blur: 0 },
          right: { bg: "splash", zoom: 1, brightness: 1.3, blur: 0 }
        };

        const thumbTopState = {
          left: { text: "ARENA", position: "top", x: 0, y: 0, scale: 1 },
          right: { text: "SPLASH", position: "top", x: 0, y: 0, scale: 1 }
        };

        const thumbSlotState = Array.from({ length: 8 }, (_, index) => ({
          weapon: null,
          scale: 1,
          color: index < 4 ? "grey" : "yellow",
          glow: index >= 4,
          labelX: 0,
          labelY: 0,
          labelScale: 1,
          imageX: 0,
          imageY: 0,
          boxDarkTop: false,
          boxOpacity: 0.75,
          boxRadius: 14,
          boxX: 0,
          boxY: 0
        }));

        let activeThumbSlot = 0;
        let activeThumbBgSide = "left";
        let activeThumbSkinWeapon = null;
        let currentThumbFont = "rubik";
        let pendingThumbWeapon = null;
        let pendingThumbGlowChoice = false;
        let pendingThumbLabelMode = "base";
        const clampValue = (value, min, max) => Math.max(min, Math.min(max, value));
        const setInputValue = (selector, value) => {
          const input = document.querySelector(selector);
          if (!input) return;
          const min = Number(input.min || -Infinity);
          const max = Number(input.max || Infinity);
          input.value = String(clampValue(Number(value) || 0, min, max));
        };
        document.querySelectorAll(".thumb-slot-control").forEach((control, index) => {
          if (control.querySelector(".thumb-box-position")) return;
          const h4 = control.querySelector("h4");
          const boxX = document.createElement("label");
          boxX.className = "thumb-mini-control";
          boxX.innerHTML = `<span>Box X</span><input class="thumb-box-position" type="range" min="-220" max="220" value="0" step="1" data-thumb-box-pos-slot="${index}" data-thumb-box-pos-prop="x" />`;
          const boxY = document.createElement("label");
          boxY.className = "thumb-mini-control";
          boxY.innerHTML = `<span>Box Y</span><input class="thumb-box-position" type="range" min="-160" max="160" value="0" step="1" data-thumb-box-pos-slot="${index}" data-thumb-box-pos-prop="y" />`;
          h4?.insertAdjacentElement("afterend", boxY);
          h4?.insertAdjacentElement("afterend", boxX);
        });
        let livePreviewTimer = null;
        let lastHoverTickElement = null;
        let lastHoverTickTime = 0;

        const thumbBgKey = side => {
          const state = thumbSideState[side];
          if (state.bg === "custom") return side === "left" ? "customLeft" : "customRight";
          return state.bg;
        };

        const updateThumbMetrics = () => {
          const width = Math.max(thumbCanvas?.getBoundingClientRect().width || 1000, 320);
          thumbStage?.style.setProperty("--thumb-stage-width", `${width}px`);
        };

        const ensureFloatingPreview = () => {
          let preview = document.getElementById("thumbFloatingPreview");
          if (!preview) {
            preview = document.createElement("div");
            preview.id = "thumbFloatingPreview";
            preview.className = "thumb-floating-preview";
            document.body.appendChild(preview);
          }
          return preview;
        };

        const updateFloatingPreview = () => {
          const preview = ensureFloatingPreview();
          if (!thumbCanvas) return;
          const clone = thumbCanvas.cloneNode(true);
          clone.removeAttribute("id");
          clone.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
          preview.innerHTML = "";
          preview.appendChild(clone);
          preview.classList.add("show");
          clearTimeout(livePreviewTimer);
          livePreviewTimer = setTimeout(() => preview.classList.remove("show"), 1700);
        };

        const showRangeTooltip = (input, event) => {
          let tip = document.getElementById("rangeTooltip");
          if (!tip) {
            tip = document.createElement("div");
            tip.id = "rangeTooltip";
            tip.className = "range-tooltip";
            document.body.appendChild(tip);
          }
          const value = Number(input.value);
          const prop = input.dataset.thumbProp || input.dataset.thumbTextProp || input.dataset.thumbTopProp || input.dataset.thumbImageProp || input.dataset.thumbOpacitySelect || input.dataset.thumbRadiusSelect || input.id || "";
          let text;
          if (input.id === "screenSlotStretch") text = `${Math.round(value)}%`;
          else if (prop === "x" || prop === "y") text = `${Math.round(value)}px`;
          else if (prop === "blur") text = `${value.toFixed(1)}px`;
          else if (String(prop).includes("Radius") || String(prop).includes("radius") || input.classList.contains("thumb-box-radius")) text = `${Math.round(value)}px`;
          else if (String(prop).includes("OutlineSize")) text = `${value}px`;
          else text = `${Math.round(value * 100)}%`;

          tip.textContent = text;
          const rect = input.getBoundingClientRect();
          const min = Number(input.min || 0);
          const max = Number(input.max || 100);
          const ratio = max === min ? 0 : (value - min) / (max - min);
          const x = event?.clientX || rect.left + rect.width * ratio;
          const y = rect.top;
          tip.style.left = `${x}px`;
          tip.style.top = `${y}px`;
          tip.style.display = "block";
          clearTimeout(tip.__hideTimer);
          tip.__hideTimer = setTimeout(() => tip.style.display = "none", 950);
        };

        const compactSkinLabel = (skinName, baseWeapon) => {
          let label = String(skinName || "").trim();
          const base = String(baseWeapon || "").trim();
          if (!label) return base || "";
          if (!base) return label;
          const esc = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          label = label.replace(new RegExp(`^${esc}[\\s\\-_:]*`, "i"), "");
          label = label.replace(new RegExp(`[\\s\\-_:]*${esc}$`, "i"), "");
          label = label.replace(/\s{2,}/g, " ").trim();
          if (!label) return skinName;
          return label;
        };

        const applyThumbSide = side => {
          const state = thumbSideState[side];
          const sideEl = document.querySelector(`.thumb-side[data-thumb-side="${side}"]`);
          const img = thumbBgImages[side];
          if (!sideEl || !img) return;
          img.src = thumbBackgrounds[thumbBgKey(side)] || thumbBackgrounds.arena;
          sideEl.style.setProperty("--thumb-bg-zoom", state.zoom);
          sideEl.style.setProperty("--thumb-brightness", state.brightness);
          sideEl.style.setProperty("--thumb-bg-blur", `${state.blur}px`);
        };

        const renderTopTitle = side => {
          const node = thumbTitles[side];
          const state = thumbTopState[side];
          if (!node || !state) return;
          node.textContent = (state.text || (side === "left" ? "ARENA" : "SPLASH")).trim().toUpperCase();
          node.dataset.thumbPosition = state.position === "bottom" ? "bottom" : "top";
          node.style.setProperty("--thumb-title-x", `${state.x}px`);
          node.style.setProperty("--thumb-title-y", `${state.y}px`);
          node.style.setProperty("--thumb-title-scale", state.scale);
        };

        const setThumbWeaponImage = (img, weapon) => {
          if (!img || !weapon) return;
          if (weapon.skinFile && typeof setSkinFileImage === "function") {
            setSkinFileImage(img, weapon.skinFile, weapon.img || placeholderSvg(weapon.name, weapon.category || "Weapon"));
          } else {
            img.onerror = null;
            img.src = weapon.img || placeholderSvg(weapon.name, weapon.category || "Weapon");
          }
        };

        const getThumbDisplayName = weapon => {
          if (!weapon) return "";
          return weapon.labelName || weapon.baseWeapon || weapon.name;
        };

        const renderThumbSlot = index => {
          const slot = thumbSlots[index];
          const state = thumbSlotState[index];
          if (!slot || !state) return;
          const img = slot.querySelector(".thumb-weapon-img");
          const label = slot.querySelector(".thumb-weapon-label");
          const titleEl = thumbSlotTitleEls[index];
          const weapon = state.weapon;

          slot.dataset.thumbColor = state.color;
          slot.dataset.thumbGlow = state.glow ? "on" : "off";
          slot.dataset.thumbDark = state.boxDarkTop ? "top" : "bottom";
          const boxOpacity = Math.max(0.15, Math.min(1, Number(state.boxOpacity) || 1));
          slot.style.setProperty("--thumb-box-opacity", boxOpacity);
          slot.style.setProperty("--thumb-box-highlight-alpha", 0.20 * boxOpacity);
          slot.style.setProperty("--thumb-box-dark-alpha", 0.24 * boxOpacity);
          slot.style.setProperty("--thumb-box-radius", `${Math.max(0, Number(state.boxRadius) || 0)}px`);
          slot.style.setProperty("--thumb-slot-x", `${Number(state.boxX || 0)}px`);
          slot.style.setProperty("--thumb-slot-y", `${Number(state.boxY || 0)}px`);
          slot.style.setProperty("--thumb-item-scale", state.scale);
          slot.style.setProperty("--thumb-label-x", `${state.labelX}px`);
          slot.style.setProperty("--thumb-label-y", `${state.labelY}px`);
          slot.style.setProperty("--thumb-label-scale", state.labelScale);
          slot.style.setProperty("--thumb-image-x", `${state.imageX}px`);
          slot.style.setProperty("--thumb-image-y", `${state.imageY}px`);
          slot.classList.toggle("has-weapon", Boolean(weapon));
          if (titleEl) titleEl.textContent = weapon ? getThumbDisplayName(weapon) : `Weapon ${index + 1}`;

          if (weapon) {
            setThumbWeaponImage(img, weapon);
            img.alt = getThumbDisplayName(weapon);
            img.hidden = false;
            label.textContent = getThumbDisplayName(weapon);
            slot.title = `Change ${getThumbDisplayName(weapon)}`;
          } else {
            img.removeAttribute("src");
            img.alt = "";
            img.hidden = true;
            label.textContent = "";
            slot.title = "Choose weapon";
          }
        };

        const renderAllThumbSlots = () => {
          thumbSlots.forEach((_, index) => renderThumbSlot(index));
          thumbStage.classList.toggle("hide-names", !thumbShowNames.checked);
          thumbStage.classList.toggle("no-top-text", !thumbShowTopText.checked);
          thumbCanvas?.style.setProperty("--thumb-saturation", Number(thumbSaturation?.value || 1.3));
          thumbCanvas?.style.setProperty("--thumb-top-outline-color", thumbTopOutlineColor?.value || "#000000");
          thumbCanvas?.style.setProperty("--thumb-top-outline-size", `${Number(thumbTopOutlineSize?.value || 6)}px`);
          thumbCanvas?.style.setProperty("--thumb-name-outline-color", thumbNameOutlineColor?.value || "#000000");
          thumbCanvas?.style.setProperty("--thumb-name-outline-size", `${Number(thumbNameOutlineSize?.value || 4)}px`);
          thumbCanvas?.setAttribute("data-thumb-font", currentThumbFont || "rubik");
          thumbFontButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.thumbFontChoice === currentThumbFont));
          renderTopTitle("left");
          renderTopTitle("right");
          updateThumbMetrics();
        };

        const renderThumbWeaponPicker = () => {
          activeThumbSkinWeapon = null;
          pendingThumbWeapon = null;
          document.getElementById("thumbPickerTitle").textContent = "Choose a Weapon";
          document.querySelector("#thumbWeaponPicker .screen-picker-head p").textContent = "Pick a weapon, then choose a skin and box color.";
          thumbPickerList.innerHTML = `
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb-clear="true">
                Clear Slot
                <small>Remove this weapon</small>
              </button>
              <button class="screen-picker-custom" type="button" data-thumb-custom-upload="true">
                Upload Custom Image
                <small>Use your own render</small>
              </button>
            </div>
            ${slots.map(category => {
              const categoryWeapons = weaponsBySlot[category] || [];
              return `
                <div class="screen-picker-category">
                  <strong>${escapeHtml(category)}</strong>
                  <div class="screen-picker-grid">
                    ${categoryWeapons.map(weapon => `
                      <button class="screen-picker-weapon" type="button" data-thumb-weapon="${escapeHtml(weapon.name)}">
                        <img decoding="async" loading="lazy" src="${weapon.img || placeholderSvg(weapon.name, weapon.category)}" alt="" draggable="false" />
                        <span>${escapeHtml(weapon.name)}</span>
                        <small>${escapeHtml(weapon.tier)}</small>
                      </button>
                    `).join("")}
                  </div>
                </div>
              `;
            }).join("")}
          `;
        };

        const renderThumbSkinPicker = async weapon => {
          activeThumbSkinWeapon = weapon;
          document.getElementById("thumbPickerTitle").textContent = `${weapon.name} Skins`;
          document.querySelector("#thumbWeaponPicker .screen-picker-head p").textContent = "Choose Default, upload your own image, or pick an embedded skin.";
          thumbPickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb-back-weapons="true">← Back to Weapons</button>
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb-default-skin="true">
                Default
                <small>Use the normal ${escapeHtml(weapon.name)} image</small>
              </button>
              <button class="screen-picker-custom" type="button" data-thumb-custom-upload="true">
                Upload Custom Image
                <small>Use your own skin/render</small>
              </button>
            </div>
            <div class="screen-picker-message">Loading embedded skins...</div>
          `;

          const data = await loadSkinData();
          const skins = data.get(weapon.name) || [];
          const skinsHtml = skins.length
            ? `<div class="screen-picker-category">
                <strong>${escapeHtml(weapon.name)} Skins</strong>
                <div class="screen-picker-grid">
                  ${skins.map((skin, index) => `
                    <button class="screen-picker-skin" type="button" data-thumb-skin-index="${index}" data-skin-file="${escapeHtml(skin.file || "")}">
                      <img decoding="async" loading="lazy" src="${skin.file ? skinFileUrl(skin.file) : (weapon.img || placeholderSvg(weapon.name, weapon.category))}" alt="" draggable="false" />
                      <span>${escapeHtml(skin.name)}</span>
                      <small>${escapeHtml(skin.rarity || "Skin")}</small>
                    </button>
                  `).join("")}
                </div>
              </div>`
            : `<div class="screen-picker-message">No embedded skins were found for ${escapeHtml(weapon.name)}. You can still use Default or upload a custom image.</div>`;

          thumbPickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb-back-weapons="true">← Back to Weapons</button>
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb-default-skin="true">
                Default
                <small>Use the normal ${escapeHtml(weapon.name)} image</small>
              </button>
              <button class="screen-picker-custom" type="button" data-thumb-custom-upload="true">
                Upload Custom Image
                <small>Use your own skin/render</small>
              </button>
            </div>
            ${skinsHtml}
          `;
          if (typeof hydrateSkinFallbackImages === "function") {
            hydrateSkinFallbackImages(thumbPickerList, weapon.img || placeholderSvg(weapon.name, weapon.category));
          }
        };

        const renderThumbSkinNamePrompt = weaponPayload => {
          pendingThumbWeapon = weaponPayload;
          document.getElementById("thumbPickerTitle").textContent = "Use skin's name?";
          document.querySelector("#thumbWeaponPicker .screen-picker-head p").textContent = "Choose whether the label should use the skin name or the default weapon name.";
          const previewLabel = compactSkinLabel(weaponPayload.skinName || weaponPayload.name, weaponPayload.baseWeapon || weaponPayload.name);
          thumbPickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb-back-skins="true">← Back to Skins</button>
            <div class="thumb-name-question">
              <div class="thumb-name-question-preview">
                <img decoding="async" loading="lazy" id="thumbNamePromptImage" alt="" draggable="false" />
                <div><strong>${escapeHtml(weaponPayload.skinName || weaponPayload.name)}</strong></div>
                <div>Use the skin label <strong>${escapeHtml(previewLabel)}</strong>, or keep the default weapon label <strong>${escapeHtml(weaponPayload.baseWeapon || weaponPayload.name)}</strong>?</div>
              </div>
              <div class="thumb-name-question-actions">
                <button type="button" data-thumb-skin-name-choice="yes">
                  Yes
                  <small>Show ${escapeHtml(previewLabel)}</small>
                </button>
                <button type="button" data-thumb-skin-name-choice="no">
                  No
                  <small>Show ${escapeHtml(weaponPayload.baseWeapon || weaponPayload.name)}</small>
                </button>
              </div>
            </div>
          `;
          const promptImg = document.getElementById("thumbNamePromptImage");
          setThumbWeaponImage(promptImg, weaponPayload);
        };

        const renderThumbColorPicker = weapon => {
          pendingThumbWeapon = weapon;
          pendingThumbGlowChoice = thumbSlotState[activeThumbSlot]?.glow || false;
          document.getElementById("thumbPickerTitle").textContent = "Choose Box Color";
          document.querySelector("#thumbWeaponPicker .screen-picker-head p").textContent = "Pick the colored box for this weapon.";
          const colors = ["grey", "green", "blue", "pink", "red", "yellow", "purple"];
          thumbPickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb-back-skins="true">← Back to Skins</button>
            <div class="thumb-color-picker-grid">
              ${colors.map(color => `
                <button class="thumb-color-choice" type="button" data-thumb-pick-color="${color}" data-color="${color}">
                  <span class="thumb-color-choice-box ${pendingThumbGlowChoice ? "glow" : ""}" data-color="${color}">
                    <img decoding="async" loading="lazy" alt="" draggable="false" />
                  </span>
                  <span>${color}</span>
                </button>
              `).join("")}
              <div class="thumb-color-extra">
                <label><input id="thumbColorGlowChoice" type="checkbox" ${pendingThumbGlowChoice ? "checked" : ""} /> Enable Glow?</label>
              </div>
            </div>
          `;

          thumbPickerList.querySelectorAll(".thumb-color-choice img").forEach(img => setThumbWeaponImage(img, weapon));
        };

        const openThumbPicker = index => {
          activeThumbSlot = Number(index) || 0;
          renderThumbWeaponPicker();
          thumbPicker.classList.add("open");
          thumbPicker.setAttribute("aria-hidden", "false");
        };

        const closeThumbPicker = () => {
          thumbPicker.classList.remove("open");
          thumbPicker.setAttribute("aria-hidden", "true");
        };

        const applyPendingWeaponWithColor = color => {
          if (!pendingThumbWeapon) return;
          thumbSlotState[activeThumbSlot].weapon = pendingThumbWeapon;
          thumbSlotState[activeThumbSlot].color = color || thumbSlotState[activeThumbSlot].color || "grey";
          thumbSlotState[activeThumbSlot].glow = Boolean(pendingThumbGlowChoice);
          const select = document.querySelector(`.thumb-box-color[data-thumb-color-select="${activeThumbSlot}"]`);
          if (select) select.value = thumbSlotState[activeThumbSlot].color;
          const glowCheck = document.querySelector(`.thumb-box-glow[data-thumb-glow-select="${activeThumbSlot}"]`);
          if (glowCheck) glowCheck.checked = thumbSlotState[activeThumbSlot].glow;
          renderThumbSlot(activeThumbSlot);
          updateFloatingPreview();
          closeThumbPicker();
        };

        const createCustomThumbWeapon = async file => {
          const image = await fileToDataUrl(file);
          const name = file.name ? file.name.replace(/\.[^.]+$/, "") : "Custom Image";
          return {
            name: name || "Custom Image",
            labelName: name || "Custom Image",
            category: "Custom",
            tier: "Custom",
            img: image
          };
        };

        const findSkinByLooseName = (baseName, targetName) => {
          const pool = skinDataByWeapon.get(baseName) || [];
          const norm = value => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
          const target = norm(targetName);
          return pool.find(s => norm(s.name) === target) || pool.find(s => norm(s.name).includes(target)) || null;
        };

        const makePresetSkinWeapon = (baseName, desiredLabel) => {
          const base = allWeapons.find(item => item.name === baseName);
          if (!base) return null;
          const skin = findSkinByLooseName(baseName, desiredLabel);
          if (skin) {
            return {
              ...base,
              name: skin.name,
              skinName: skin.name,
              baseWeapon: base.name,
              labelName: desiredLabel,
              tier: skin.rarity || base.tier,
              skinFile: skin.file || "",
              img: base.img || placeholderSvg(base.name, base.category)
            };
          }
          return {
            ...base,
            name: base.name,
            baseWeapon: base.name,
            labelName: desiredLabel,
            tier: base.tier,
            img: base.img || placeholderSvg(base.name, base.category)
          };
        };

        const applyInitialRightSidePreset = async () => {
          try {
            await loadSkinData();
          } catch (err) {}
          const presets = [
            makePresetSkinWeapon("Sniper", "Keyper"),
            makePresetSkinWeapon("Daggers", "Keynais"),
            makePresetSkinWeapon("Scythe", "Keythe"),
            makePresetSkinWeapon("Grenade", "Keynade")
          ];
          [4,5,6,7].forEach((slotIndex, i) => {
            if (presets[i]) thumbSlotState[slotIndex].weapon = presets[i];
            thumbSlotState[slotIndex].color = "yellow";
            thumbSlotState[slotIndex].glow = true;
          });
          renderAllThumbSlots();
        };

        const setThumbBoxPosition = (index, x, y) => {
          const state = thumbSlotState[index];
          if (!state) return;
          state.boxX = clampValue(x, -220, 220);
          state.boxY = clampValue(y, -160, 160);
          setInputValue(`.thumb-box-position[data-thumb-box-pos-slot="${index}"][data-thumb-box-pos-prop="x"]`, state.boxX);
          setInputValue(`.thumb-box-position[data-thumb-box-pos-slot="${index}"][data-thumb-box-pos-prop="y"]`, state.boxY);
          renderThumbSlot(index);
        };

        const setThumbTopPosition = (side, x, y) => {
          const state = thumbTopState[side];
          if (!state) return;
          state.x = clampValue(x, -260, 260);
          state.y = clampValue(y, -140, 140);
          setInputValue(`.thumb-top-control[data-thumb-top-side="${side}"][data-thumb-top-prop="x"]`, state.x);
          setInputValue(`.thumb-top-control[data-thumb-top-side="${side}"][data-thumb-top-prop="y"]`, state.y);
          renderTopTitle(side);
        };

        const setThumbLabelPosition = (index, x, y) => {
          const state = thumbSlotState[index];
          if (!state) return;
          state.labelX = clampValue(x, -120, 120);
          state.labelY = clampValue(y, -90, 90);
          setInputValue(`.thumb-text-control[data-thumb-text-slot="${index}"][data-thumb-text-prop="x"]`, state.labelX);
          setInputValue(`.thumb-text-control[data-thumb-text-slot="${index}"][data-thumb-text-prop="y"]`, state.labelY);
          renderThumbSlot(index);
        };

        let thumbDrag = null;
        thumbStage?.addEventListener("pointerdown", event => {
          if (event.button !== 0) return;
          if (thumbPicker?.classList.contains("open")) return;
          const title = event.target.closest?.(".thumb-top-title");
          const label = event.target.closest?.(".thumb-weapon-label");
          const slot = event.target.closest?.(".thumb-item-slot");
          if (label) {
            const labelSlot = label.closest(".thumb-item-slot");
            const index = Number(labelSlot?.dataset.thumbSlot);
            if (!thumbSlotState[index]) return;
            event.preventDefault();
            label.classList.add("is-dragging");
            thumbDrag = { type: "label", index, el: label, startX: event.clientX, startY: event.clientY, startValX: Number(thumbSlotState[index].labelX || 0), startValY: Number(thumbSlotState[index].labelY || 0), moved: false };
            label.setPointerCapture?.(event.pointerId);
            return;
          }
          if (title) {
            const side = title.dataset.thumbTitle;
            if (!thumbTopState[side]) return;
            event.preventDefault();
            title.classList.add("is-dragging");
            thumbDrag = { type: "top", side, el: title, startX: event.clientX, startY: event.clientY, startValX: Number(thumbTopState[side].x || 0), startValY: Number(thumbTopState[side].y || 0), moved: false };
            title.setPointerCapture?.(event.pointerId);
            return;
          }
          if (slot) {
            const index = Number(slot.dataset.thumbSlot);
            if (!thumbSlotState[index]) return;
            event.preventDefault();
            slot.classList.add("is-dragging");
            thumbDrag = { type: "slot", index, el: slot, startX: event.clientX, startY: event.clientY, startValX: Number(thumbSlotState[index].boxX || 0), startValY: Number(thumbSlotState[index].boxY || 0), moved: false };
            slot.setPointerCapture?.(event.pointerId);
          }
        }, true);

        thumbStage?.addEventListener("pointermove", event => {
          if (!thumbDrag) return;
          const dx = event.clientX - thumbDrag.startX;
          const dy = event.clientY - thumbDrag.startY;
          if (Math.abs(dx) + Math.abs(dy) > 3) thumbDrag.moved = true;
          if (thumbDrag.type === "slot") setThumbBoxPosition(thumbDrag.index, thumbDrag.startValX + dx, thumbDrag.startValY + dy);
          if (thumbDrag.type === "label") setThumbLabelPosition(thumbDrag.index, thumbDrag.startValX + dx, thumbDrag.startValY + dy);
          if (thumbDrag.type === "top") setThumbTopPosition(thumbDrag.side, thumbDrag.startValX + dx, thumbDrag.startValY + dy);
        }, true);

        const finishThumbDrag = () => {
          if (!thumbDrag) return;
          const moved = thumbDrag.moved;
          thumbDrag.el?.classList.remove("is-dragging");
          if (moved) {
            thumbDrag.el.__kudaDragSuppressClick = true;
            setTimeout(() => { if (thumbDrag?.el) thumbDrag.el.__kudaDragSuppressClick = false; }, 0);
            updateFloatingPreview();
          }
          thumbDrag = null;
        };
        thumbStage?.addEventListener("pointerup", finishThumbDrag, true);
        thumbStage?.addEventListener("pointercancel", finishThumbDrag, true);
        thumbStage?.addEventListener("click", event => {
          const target = event.target.closest?.(".thumb-item-slot, .thumb-top-title, .thumb-weapon-label");
          if (target?.__kudaDragSuppressClick) {
            event.preventDefault();
            event.stopImmediatePropagation();
            target.__kudaDragSuppressClick = false;
          }
        }, true);

        thumbSlots.forEach(slot => {
          slot.addEventListener("click", () => openThumbPicker(slot.dataset.thumbSlot));
        });

        thumbPickerList?.addEventListener("click", async event => {
          const clear = event.target.closest("[data-thumb-clear]");
          if (clear) {
            thumbSlotState[activeThumbSlot].weapon = null;
            renderThumbSlot(activeThumbSlot);
            updateFloatingPreview();
            closeThumbPicker();
            return;
          }

          if (event.target.closest("[data-thumb-back-weapons]")) {
            renderThumbWeaponPicker();
            return;
          }

          if (event.target.closest("[data-thumb-back-skins]")) {
            if (activeThumbSkinWeapon) renderThumbSkinPicker(activeThumbSkinWeapon);
            else renderThumbWeaponPicker();
            return;
          }

          if (event.target.closest("[data-thumb-custom-upload]")) {
            thumbCustomWeaponInput.value = "";
            thumbCustomWeaponInput.click();
            return;
          }

          if (event.target.closest("[data-thumb-default-skin]") && activeThumbSkinWeapon) {
            renderThumbColorPicker({
              ...activeThumbSkinWeapon,
              labelName: activeThumbSkinWeapon.name,
              skinName: "Default",
              baseWeapon: activeThumbSkinWeapon.name,
              img: activeThumbSkinWeapon.img || placeholderSvg(activeThumbSkinWeapon.name, activeThumbSkinWeapon.category)
            });
            return;
          }

          const skinBtn = event.target.closest("[data-thumb-skin-index]");
          if (skinBtn && activeThumbSkinWeapon) {
            const skins = skinDataByWeapon.get(activeThumbSkinWeapon.name) || [];
            const skin = skins[Number(skinBtn.dataset.thumbSkinIndex)];
            if (!skin) return;
            renderThumbSkinNamePrompt({
              ...activeThumbSkinWeapon,
              name: skin.name,
              skinName: skin.name,
              baseWeapon: activeThumbSkinWeapon.name,
              tier: skin.rarity || activeThumbSkinWeapon.tier,
              skinFile: skin.file || "",
              img: activeThumbSkinWeapon.img || placeholderSvg(activeThumbSkinWeapon.name, activeThumbSkinWeapon.category)
            });
            return;
          }

          const choiceBtn = event.target.closest("[data-thumb-skin-name-choice]");
          if (choiceBtn && pendingThumbWeapon) {
            const yes = choiceBtn.dataset.thumbSkinNameChoice === "yes";
            pendingThumbWeapon = {
              ...pendingThumbWeapon,
              labelName: yes
                ? compactSkinLabel(pendingThumbWeapon.skinName || pendingThumbWeapon.name, pendingThumbWeapon.baseWeapon || pendingThumbWeapon.name)
                : (pendingThumbWeapon.baseWeapon || pendingThumbWeapon.name)
            };
            renderThumbColorPicker(pendingThumbWeapon);
            return;
          }

          const colorBtn = event.target.closest("[data-thumb-pick-color]");
          if (colorBtn) {
            applyPendingWeaponWithColor(colorBtn.dataset.thumbPickColor);
            return;
          }

          const btn = event.target.closest("[data-thumb-weapon]");
          if (!btn) return;
          const weapon = allWeapons.find(item => item.name === btn.dataset.thumbWeapon);
          if (!weapon) return;
          renderThumbSkinPicker(weapon);
        });

        thumbPickerList?.addEventListener("change", event => {
          const glowChoice = event.target.closest("#thumbColorGlowChoice");
          if (!glowChoice) return;
          pendingThumbGlowChoice = Boolean(glowChoice.checked);
          thumbPickerList.querySelectorAll(".thumb-color-choice-box").forEach(box => {
            box.classList.toggle("glow", pendingThumbGlowChoice);
          });
        });

        thumbCustomWeaponInput?.addEventListener("change", async () => {
          const file = thumbCustomWeaponInput.files?.[0];
          if (!file) return;
          const customWeapon = await createCustomThumbWeapon(file);
          renderThumbColorPicker(customWeapon);
        });

        thumbPickerClose?.addEventListener("click", closeThumbPicker);
        thumbPicker?.addEventListener("click", event => {
          if (event.target === thumbPicker) closeThumbPicker();
        });

        thumbnailBuilderPage?.addEventListener("click", async event => {
          const bgBtn = event.target.closest(".thumb-bg-btn");
          if (bgBtn) {
            const wrap = bgBtn.closest("[data-thumb-bg-buttons]");
            const side = wrap?.dataset.thumbBgButtons;
            const key = bgBtn.dataset.thumbBgKey;
            if (!side || !key) return;
            if (key === "custom" && !thumbBackgrounds[side === "left" ? "customLeft" : "customRight"]) {
              activeThumbBgSide = side;
              thumbCustomBgInput.value = "";
              thumbCustomBgInput.click();
              return;
            }
            thumbSideState[side].bg = key;
            wrap.querySelectorAll(".thumb-bg-btn").forEach(btn => btn.classList.toggle("active", btn === bgBtn));
            applyThumbSide(side);
            updateFloatingPreview();
          }
        });

        thumbCustomBgInput?.addEventListener("change", async () => {
          const file = thumbCustomBgInput.files?.[0];
          if (!file) return;
          const image = await fileToDataUrl(file);
          const key = activeThumbBgSide === "left" ? "customLeft" : "customRight";
          thumbBackgrounds[key] = image;
          thumbSideState[activeThumbBgSide].bg = "custom";
          document.querySelectorAll(`[data-thumb-bg-buttons="${activeThumbBgSide}"] .thumb-bg-btn`).forEach(btn => {
            btn.classList.toggle("active", btn.dataset.thumbBgKey === "custom");
          });
          applyThumbSide(activeThumbBgSide);
          updateFloatingPreview();
        });

        thumbnailBuilderPage?.addEventListener("input", event => {
          const rangeInput = event.target.matches('input[type="range"]') ? event.target : event.target.closest('input[type="range"]');
          if (rangeInput) {
            showRangeTooltip(rangeInput, event);
            updateFloatingPreview();
          }

          const range = event.target.closest(".thumb-side-range");
          if (range) {
            const side = range.dataset.thumbSideRange;
            const prop = range.dataset.thumbProp;
            const value = Number(range.value);
            if (thumbSideState[side] && prop) {
              thumbSideState[side][prop] = value;
              applyThumbSide(side);
            }
            return;
          }

          const boxPosition = event.target.closest(".thumb-box-position");
          if (boxPosition) {
            const index = Number(boxPosition.dataset.thumbBoxPosSlot);
            const prop = boxPosition.dataset.thumbBoxPosProp;
            if (thumbSlotState[index] && prop) {
              if (prop === "x") thumbSlotState[index].boxX = Number(boxPosition.value) || 0;
              if (prop === "y") thumbSlotState[index].boxY = Number(boxPosition.value) || 0;
              renderThumbSlot(index);
            }
            return;
          }

          const imageControl = event.target.closest(".thumb-image-control");
          if (imageControl) {
            const index = Number(imageControl.dataset.thumbImageSlot);
            const prop = imageControl.dataset.thumbImageProp;
            if (thumbSlotState[index] && prop) {
              if (prop === "x") thumbSlotState[index].imageX = Number(imageControl.value) || 0;
              if (prop === "y") thumbSlotState[index].imageY = Number(imageControl.value) || 0;
              renderThumbSlot(index);
            }
            return;
          }

          const scale = event.target.closest(".thumb-weapon-scale");
          if (scale) {
            const index = Number(scale.dataset.thumbScale);
            if (thumbSlotState[index]) {
              thumbSlotState[index].scale = Number(scale.value) || 1;
              renderThumbSlot(index);
            }
            return;
          }

          const textControl = event.target.closest(".thumb-text-control");
          if (textControl) {
            const index = Number(textControl.dataset.thumbTextSlot);
            const prop = textControl.dataset.thumbTextProp;
            if (thumbSlotState[index] && prop) {
              if (prop === "x") thumbSlotState[index].labelX = Number(textControl.value) || 0;
              if (prop === "y") thumbSlotState[index].labelY = Number(textControl.value) || 0;
              if (prop === "scale") thumbSlotState[index].labelScale = Number(textControl.value) || 1;
              renderThumbSlot(index);
            }
            return;
          }

          const color = event.target.closest(".thumb-box-color");
          if (color) {
            const index = Number(color.dataset.thumbColorSelect);
            if (thumbSlotState[index]) {
              thumbSlotState[index].color = color.value;
              renderThumbSlot(index);
              updateFloatingPreview();
            }
            return;
          }

          const opacity = event.target.closest(".thumb-box-opacity");
          if (opacity) {
            const index = Number(opacity.dataset.thumbOpacitySelect);
            if (thumbSlotState[index]) {
              thumbSlotState[index].boxOpacity = Number(opacity.value) || 1;
              renderThumbSlot(index);
              updateFloatingPreview();
            }
            return;
          }

          const radius = event.target.closest(".thumb-box-radius");
          if (radius) {
            const index = Number(radius.dataset.thumbRadiusSelect);
            if (thumbSlotState[index]) {
              thumbSlotState[index].boxRadius = Number(radius.value) || 0;
              renderThumbSlot(index);
              updateFloatingPreview();
            }
            return;
          }

          if ([thumbTopOutlineColor, thumbTopOutlineSize, thumbNameOutlineColor, thumbNameOutlineSize].includes(event.target)) {
            renderAllThumbSlots();
            updateFloatingPreview();
            return;
          }

          const topControl = event.target.closest(".thumb-top-control, .thumb-top-input, .thumb-top-select");
          if (topControl) {
            const side = topControl.dataset.thumbTopSide;
            const prop = topControl.dataset.thumbTopProp;
            if (thumbTopState[side] && prop) {
              if (prop === "text") thumbTopState[side].text = topControl.value;
              if (prop === "position") thumbTopState[side].position = topControl.value === "bottom" ? "bottom" : "top";
              if (prop === "x") thumbTopState[side].x = Number(topControl.value) || 0;
              if (prop === "y") thumbTopState[side].y = Number(topControl.value) || 0;
              if (prop === "scale") thumbTopState[side].scale = Number(topControl.value) || 1;
              renderTopTitle(side);
              updateFloatingPreview();
            }
            return;
          }

          if (event.target === thumbSaturation) {
            thumbCanvas?.style.setProperty("--thumb-saturation", Number(thumbSaturation.value || 1.3));
            updateFloatingPreview();
            return;
          }

          
        });

        thumbnailBuilderPage?.addEventListener("change", event => {
          const glow = event.target.closest(".thumb-box-glow");
          if (glow) {
            const index = Number(glow.dataset.thumbGlowSelect);
            if (thumbSlotState[index]) {
              thumbSlotState[index].glow = Boolean(glow.checked);
              renderThumbSlot(index);
              updateFloatingPreview();
            }
            return;
          }

          const darkTop = event.target.closest(".thumb-box-dark-top");
          if (darkTop) {
            const index = Number(darkTop.dataset.thumbDarkTopSelect);
            if (thumbSlotState[index]) {
              thumbSlotState[index].boxDarkTop = Boolean(darkTop.checked);
              renderThumbSlot(index);
              updateFloatingPreview();
            }
            return;
          }

          const topSelect = event.target.closest(".thumb-top-select");
          if (topSelect) {
            const side = topSelect.dataset.thumbTopSide;
            if (thumbTopState[side]) {
              thumbTopState[side].position = topSelect.value === "bottom" ? "bottom" : "top";
              renderTopTitle(side);
              updateFloatingPreview();
            }
            return;
          }

          

          if (event.target === thumbShowTopText || event.target === thumbShowNames) {
            renderAllThumbSlots();
            updateFloatingPreview();
          }
        });

        document.addEventListener("input", event => {
          const range = event.target.matches?.('input[type="range"]') ? event.target : null;
          if (range) showRangeTooltip(range, event);
        }, true);

        document.addEventListener("mouseover", event => {
          const target = event.target.closest?.("button:not(:disabled), a[href], select, label, input[type='checkbox'], input[type='range'], input[type='file'], .home-tool-card, .page-tab, .thumb-template-tab, .screen-picker-weapon, .screen-picker-skin, .thumb-item-slot, .thumb2-slot, .screen-loadout-slot, .bg-option, .thumb-bg-btn, .luck-btn, .mode-btn, .rarity-btn, .tier-item-card, .tier-picker-option, .fusion-picker-card, .fusion-select-slot, [role='button'], [data-home-page], [data-page]");
          if (!target || target === lastHoverTickElement) return;
          const now = Date.now();
          if (now - lastHoverTickTime < 55) return;
          lastHoverTickElement = target;
          lastHoverTickTime = now;
          try {
            const ctx = window.__kudaHoverAudio || new (window.AudioContext || window.webkitAudioContext)();
            window.__kudaHoverAudio = ctx;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(520, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.035);
            gain.gain.setValueAtTime(0.0001, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.005);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.045);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
          } catch (err) {}
        }, true);

        thumbFontButtons.forEach(btn => {
          btn.addEventListener("click", () => {
            currentThumbFont = btn.dataset.thumbFontChoice || "rubik";
            renderAllThumbSlots();
            updateFloatingPreview();
          });
        });

        thumbUploadFontBtn?.addEventListener("click", () => {
          thumbCustomFontInput.value = "";
          thumbCustomFontInput.click();
        });

        thumbCustomFontInput?.addEventListener("change", async () => {
          const file = thumbCustomFontInput.files?.[0];
          if (!file) return;
          const fontUrl = await fileToDataUrl(file);
          let style = document.getElementById("thumbCustomFontStyle");
          if (!style) {
            style = document.createElement("style");
            style.id = "thumbCustomFontStyle";
            document.head.appendChild(style);
          }
          style.textContent = `@font-face{font-family:"RivalsToolsCustomFont";src:url("${fontUrl}");font-weight:100 1000;font-style:normal;font-display:swap;}`;
          currentThumbFont = "custom";
          renderAllThumbSlots();
          updateFloatingPreview();
        });

        thumbFullscreenBtn?.addEventListener("click", async () => {
          try {
            if (!document.fullscreenElement && thumbStage.requestFullscreen) {
              await thumbStage.requestFullscreen();
            } else if (document.exitFullscreen) {
              await document.exitFullscreen();
            }
            setTimeout(updateThumbMetrics, 60);
          } catch (err) {
            statusText.textContent = "FULLSCREEN BLOCKED";
          }
        });

        
        const thumbColorMap = {
          grey: { a: [118,124,134], b: [46,50,58], glow: [190,196,205] },
          green: { a: [87,255,128], b: [19,100,43], glow: [75,255,127] },
          blue: { a: [82,185,255], b: [18,68,145], glow: [82,185,255] },
          pink: { a: [255,102,213], b: [128,31,104], glow: [255,102,213] },
          red: { a: [255,79,88], b: [132,20,34], glow: [255,79,88] },
          yellow: { a: [255,232,61], b: [184,143,0], glow: [255,232,61] },
          purple: { a: [159,111,255], b: [80,45,160], glow: [159,111,255] }
        };

        const rgba = (rgb, alpha = 1) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;

        const loadCanvasImage = src => new Promise((resolve, reject) => {
          if (!src) return reject(new Error("Missing image source"));
          const img = new Image();
          if (!src.startsWith("data:") && !src.startsWith("blob:")) img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Could not load image: ${src}`));
          img.src = src;
        });

        const drawRoundedRectPath = (ctx, x, y, w, h, r) => {
          const radius = Math.max(0, Math.min(r, w / 2, h / 2));
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + w - radius, y);
          ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
          ctx.lineTo(x + w, y + h - radius);
          ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
          ctx.lineTo(x + radius, y + h);
          ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
        };

        const drawImageCover = (ctx, img, x, y, w, h, zoom = 1) => {
          const ir = img.naturalWidth / img.naturalHeight;
          const cr = w / h;
          let dw, dh;
          if (ir > cr) {
            dh = h;
            dw = h * ir;
          } else {
            dw = w;
            dh = w / ir;
          }
          dw *= zoom;
          dh *= zoom;
          ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
        };

        const drawImageContain = (ctx, img, cx, cy, maxW, maxH) => {
          const ir = img.naturalWidth / img.naturalHeight;
          let dw = maxW;
          let dh = maxW / ir;
          if (dh > maxH) {
            dh = maxH;
            dw = maxH * ir;
          }
          ctx.drawImage(img, cx - dw / 2, cy - dh / 2, dw, dh);
        };

        const canvasFontFamily = () => {
          if (currentThumbFont === "rubik") return '"Rubik", Arial, sans-serif';
          if (currentThumbFont === "custom") return '"RivalsToolsCustomFont", Impact, Arial, sans-serif';
          return 'Impact, "Arial Black", sans-serif';
        };

        const drawStrokeFillText = (ctx, text, x, y, fontSize, outlineSize, outlineColor, align = "center", baseline = "top") => {
          if (!text) return;
          ctx.save();
          ctx.font = `900 ${fontSize}px ${canvasFontFamily()}`;
          ctx.textAlign = align;
          ctx.textBaseline = baseline;
          ctx.lineJoin = "round";
          ctx.miterLimit = 2;
          ctx.shadowColor = "rgba(0,0,0,0.42)";
          ctx.shadowBlur = fontSize * 0.08;
          ctx.shadowOffsetY = fontSize * 0.08;
          if (outlineSize > 0) {
            ctx.lineWidth = outlineSize;
            ctx.strokeStyle = outlineColor || "#000000";
            ctx.strokeText(text, x, y);
          }
          ctx.fillStyle = "#ffffff";
          ctx.fillText(text, x, y);
          ctx.restore();
        };

        const drawThumbBox = (ctx, x, y, w, h, state, uiScale) => {
          const color = thumbColorMap[state.color] || thumbColorMap.grey;
          const opacity = Math.max(0.15, Math.min(1, Number(state.boxOpacity) || 0.75));
          const radius = Math.max(0, Number(state.boxRadius) || 14) * uiScale;

          ctx.save();
          drawRoundedRectPath(ctx, x, y, w, h, radius);
          ctx.clip();

          const colorGradient = ctx.createLinearGradient(x, y, x + w, y + h);
          colorGradient.addColorStop(0, rgba(color.a, opacity));
          colorGradient.addColorStop(1, rgba(color.b, opacity));
          ctx.fillStyle = colorGradient;
          ctx.fillRect(x, y, w, h);

          const darkGradient = ctx.createLinearGradient(x, y, x, y + h);
          if (state.boxDarkTop) {
            darkGradient.addColorStop(0, `rgba(0,0,0,${0.24 * opacity})`);
            darkGradient.addColorStop(1, `rgba(255,255,255,${0.20 * opacity})`);
          } else {
            darkGradient.addColorStop(0, `rgba(255,255,255,${0.20 * opacity})`);
            darkGradient.addColorStop(1, `rgba(0,0,0,${0.24 * opacity})`);
          }
          ctx.fillStyle = darkGradient;
          ctx.fillRect(x, y, w, h);
          ctx.restore();

          ctx.save();
          drawRoundedRectPath(ctx, x, y, w, h, radius);
          ctx.lineWidth = Math.max(2, 4 * uiScale);
          ctx.strokeStyle = rgba(color.glow, state.glow ? 1 : 0.70);
          if (state.glow) {
            ctx.shadowColor = rgba(color.glow, 0.75);
            ctx.shadowBlur = 14 * uiScale;
          } else {
            ctx.shadowColor = rgba(color.glow, 0.25);
            ctx.shadowBlur = 7 * uiScale;
          }
          ctx.stroke();
          ctx.restore();
        };

        const exportThumbnailCanvas = async () => {
          const W = 1920;
          const H = 1080;
          const displayWidth = Math.max(thumbCanvas?.getBoundingClientRect().width || 1120, 320);
          const uiScale = W / displayWidth;
          const output = document.createElement("canvas");
          output.width = W;
          output.height = H;
          const outCtx = output.getContext("2d");

          if (document.fonts?.ready) {
            try { await document.fonts.ready; } catch (err) {}
          }

          const showTop = thumbShowTopText?.checked !== false;
          const showNames = thumbShowNames?.checked !== false;
          const saturation = Number(thumbSaturation?.value || 1.3);
          const sideW = W / 2;
          const sideH = H;

          const bgSources = {
            left: thumbBackgrounds[thumbBgKey("left")] || thumbBackgrounds.arena,
            right: thumbBackgrounds[thumbBgKey("right")] || thumbBackgrounds.splash
          };

          for (const side of ["left", "right"]) {
            const sideIndex = side === "left" ? 0 : 1;
            const sideLayer = document.createElement("canvas");
            sideLayer.width = sideW;
            sideLayer.height = sideH;
            const ctx = sideLayer.getContext("2d");
            const sideState = thumbSideState[side];
            const sideX = sideIndex * sideW;

            try {
              const bg = await loadCanvasImage(bgSources[side]);
              ctx.save();
              ctx.filter = `blur(${Number(sideState.blur || 0) * uiScale}px)`;
              drawImageCover(ctx, bg, 0, 0, sideW, sideH, Number(sideState.zoom || 1));
              ctx.restore();
            } catch (err) {
              ctx.fillStyle = side === "left" ? "#aeb6c6" : "#69b9df";
              ctx.fillRect(0, 0, sideW, sideH);
            }

            const overlay = ctx.createRadialGradient(sideW / 2, sideH * 0.45, 0, sideW / 2, sideH * 0.45, sideW * 0.55);
            overlay.addColorStop(0, side === "right" ? "rgba(255,221,87,0.14)" : "rgba(255,255,255,0.08)");
            overlay.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = overlay;
            ctx.fillRect(0, 0, sideW, sideH);

            const gridW = sideW * 0.78;
            const gridH = sideH * (showTop ? 0.58 : 0.64);
            const gridCenterY = sideH * (showTop ? 0.61 : 0.50);
            const gridX = sideW / 2 - gridW / 2;
            const gridY = gridCenterY - gridH / 2;
            const gapX = gridW * 0.11;
            const gapY = gridH * 0.09;
            const boxW = (gridW - gapX) / 2;
            const boxH = (gridH - gapY) / 2;

            const startIndex = side === "left" ? 0 : 4;
            for (let local = 0; local < 4; local++) {
              const index = startIndex + local;
              const state = thumbSlotState[index];
              const col = local % 2;
              const row = Math.floor(local / 2);
              const x = gridX + col * (boxW + gapX) + Number(state.boxX || 0) * uiScale;
              const y = gridY + row * (boxH + gapY) + Number(state.boxY || 0) * uiScale;
              drawThumbBox(ctx, x, y, boxW, boxH, state, uiScale);

              if (state.weapon) {
                let src = "";
                const liveImg = thumbSlots[index]?.querySelector(".thumb-weapon-img");
                if (liveImg?.src) src = liveImg.src;
                else if (state.weapon.skinFile) src = skinFileUrl(state.weapon.skinFile);
                else src = state.weapon.img;

                try {
                  const weaponImg = await loadCanvasImage(src);
                  ctx.save();
                  ctx.shadowColor = "rgba(0,0,0,0.44)";
                  ctx.shadowBlur = 12 * uiScale;
                  ctx.shadowOffsetX = 0;
                  ctx.shadowOffsetY = 10 * uiScale;
                  drawImageContain(
                    ctx,
                    weaponImg,
                    x + boxW / 2 + Number(state.imageX || 0) * uiScale,
                    y + boxH * 0.43 + Number(state.imageY || 0) * uiScale,
                    boxW * 1.35 * Number(state.scale || 1),
                    boxH * 1.25 * Number(state.scale || 1)
                  );
                  ctx.restore();
                } catch (err) {}

                if (showNames) {
                  const label = getThumbDisplayName(state.weapon);
                  const fontSize = W * 0.032 * Number(state.labelScale || 1);
                  const outline = Number(thumbNameOutlineSize?.value || 4) * uiScale;
                  const outlineColor = thumbNameOutlineColor?.value || "#000000";
                  drawStrokeFillText(
                    ctx,
                    label,
                    x + boxW / 2 + Number(state.labelX || 0) * uiScale,
                    y + boxH - (boxH * 0.06) + Number(state.labelY || 0) * uiScale,
                    fontSize,
                    outline,
                    outlineColor,
                    "center",
                    "bottom"
                  );
                }
              }
            }

            if (showTop) {
              const titleState = thumbTopState[side];
              const fontSize = W * 0.088 * Number(titleState.scale || 1);
              const outline = Number(thumbTopOutlineSize?.value || 6) * uiScale;
              const outlineColor = thumbTopOutlineColor?.value || "#000000";
              const titleText = String(titleState.text || (side === "left" ? "ARENA" : "SPLASH")).trim().toUpperCase();
              const x = sideW / 2 + Number(titleState.x || 0) * uiScale;
              const y = titleState.position === "bottom"
                ? sideH - sideH * 0.045 - fontSize * 0.9 + Number(titleState.y || 0) * uiScale
                : sideH * 0.045 + Number(titleState.y || 0) * uiScale;
              drawStrokeFillText(ctx, titleText, x, y, fontSize, outline, outlineColor, "center", "top");
            }

            outCtx.save();
            outCtx.filter = `brightness(${Number(sideState.brightness || 1)}) saturate(${saturation})`;
            outCtx.drawImage(sideLayer, sideX, 0);
            outCtx.restore();
          }

          outCtx.save();
          outCtx.fillStyle = "rgba(255,255,255,0.95)";
          outCtx.shadowColor = "rgba(255,255,255,0.35)";
          outCtx.shadowBlur = 20 * uiScale;
          outCtx.fillRect(W / 2 - 2.5 * uiScale, -H * 0.02, 5 * uiScale, H * 1.04);
          outCtx.restore();

          return output;
        };

        thumbDownloadBtn?.addEventListener("click", async () => {
          try {
            statusText.textContent = "RENDERING THUMBNAIL";
            const canvas = await exportThumbnailCanvas();
            canvas.toBlob(blob => {
              if (!blob) {
                statusText.textContent = "DOWNLOAD FAILED";
                return;
              }
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "kuda-thumbnail.png";
              document.body.appendChild(a);
              a.click();
              setTimeout(() => {
                URL.revokeObjectURL(a.href);
                a.remove();
                statusText.textContent = activePage === "thumbnail" ? "THUMBNAIL READY" : statusText.textContent;
              }, 250);
            }, "image/png");
          } catch (err) {
            console.error(err);
            statusText.textContent = "DOWNLOAD FAILED";
            alert("Download failed. If you opened the HTML by double-clicking it, run the site through localhost or GitHub Pages so the browser is allowed to export local images.");
          }
        });

thumbClearBtn?.addEventListener("click", () => {
          thumbSlotState.forEach(state => state.weapon = null);
          renderAllThumbSlots();
          updateFloatingPreview();
        });

        window.addEventListener("keydown", event => {
          if (event.key === "Escape" && thumbPicker.classList.contains("open")) {
            closeThumbPicker();
          }
        });

        window.addEventListener("resize", updateThumbMetrics);
        document.addEventListener("fullscreenchange", () => setTimeout(updateThumbMetrics, 60));

        if (window.ResizeObserver && thumbCanvas) {
          const ro = new ResizeObserver(updateThumbMetrics);
          ro.observe(thumbCanvas);
        }

        document.querySelectorAll(".thumb-box-color").forEach(select => {
          const index = Number(select.dataset.thumbColorSelect);
          if (thumbSlotState[index]) select.value = thumbSlotState[index].color;
        });

        document.querySelectorAll(".thumb-box-glow").forEach(check => {
          const index = Number(check.dataset.thumbGlowSelect);
          if (thumbSlotState[index]) check.checked = thumbSlotState[index].glow;
        });

        document.querySelectorAll(".thumb-box-dark-top").forEach(check => {
          const index = Number(check.dataset.thumbDarkTopSelect);
          if (thumbSlotState[index]) check.checked = thumbSlotState[index].boxDarkTop;
        });

        document.querySelectorAll(".thumb-box-opacity").forEach(input => {
          const index = Number(input.dataset.thumbOpacitySelect);
          if (thumbSlotState[index]) input.value = thumbSlotState[index].boxOpacity;
        });

        document.querySelectorAll(".thumb-box-radius").forEach(input => {
          const index = Number(input.dataset.thumbRadiusSelect);
          if (thumbSlotState[index]) input.value = thumbSlotState[index].boxRadius;
        });

        if (thumbTopOutlineColor) thumbTopOutlineColor.value = "#000000";
        if (thumbNameOutlineColor) thumbNameOutlineColor.value = "#000000";
        if (thumbTopOutlineSize) thumbTopOutlineSize.value = "6";
        if (thumbNameOutlineSize) thumbNameOutlineSize.value = "4";

        document.querySelectorAll(".thumb-top-select").forEach(select => {
          const side = select.dataset.thumbTopSide;
          if (thumbTopState[side]) select.value = thumbTopState[side].position;
        });

        if (thumbSaturation) thumbSaturation.value = "1.3";

        applyThumbSide("left");
        applyThumbSide("right");
        renderAllThumbSlots();
        applyInitialRightSidePreset();

        /* Thumbnail 2 */
        const thumbBuilderPageEl = document.getElementById("thumbnailBuilderPage");
        const thumbTemplateTabs = Array.from(document.querySelectorAll(".thumb-template-tab"));
        const thumbTemplate1Btn = document.getElementById("thumbTemplate1Btn");
        const thumbTemplate2Btn = document.getElementById("thumbTemplate2Btn");
        const thumb2Stage = document.getElementById("thumb2Stage");
        const thumb2Canvas = document.getElementById("thumb2Canvas");
        const thumb2BgImg = document.getElementById("thumb2BgImg");
        const thumb2TitleEl = document.getElementById("thumb2Title");
        const thumb2Arrow = document.getElementById("thumb2Arrow");
        const thumb2Slots = Array.from(document.querySelectorAll('.thumb2-slot'));
        const thumb2SlotBgs = Array.from(document.querySelectorAll('.thumb2-slot-bg'));
        const thumb2SlotBgSrc = document.querySelector('.screen-slot-bg')?.getAttribute('src') || document.querySelector('.screen-slot-bg')?.src || '';
        thumb2SlotBgs.forEach(img => { if (thumb2SlotBgSrc) img.src = thumb2SlotBgSrc; });
        const thumb2SlotTitleEls = Array.from(document.querySelectorAll('[data-thumb2-slot-title]'));
        const thumb2ShowText = document.getElementById('thumb2ShowText');
        const thumb2ShowWeaponText = document.getElementById('thumb2ShowWeaponText');
        const thumb2ShowKeybinds = document.getElementById('thumb2ShowKeybinds');
        const thumb2FeaturedSlot = document.getElementById('thumb2FeaturedSlot');
        const thumb2Text = document.getElementById('thumb2Text');
        const thumb2Saturation = document.getElementById('thumb2Saturation');
        const thumb2OutlineColor = document.getElementById('thumb2OutlineColor');
        const thumb2OutlineSize = document.getElementById('thumb2OutlineSize');
        const thumb2TextX = document.getElementById('thumb2TextX');
        const thumb2TextY = document.getElementById('thumb2TextY');
        const thumb2TextScale = document.getElementById('thumb2TextScale');
        const thumb2ShowArrow = document.getElementById('thumb2ShowArrow');
        const thumb2ArrowX = document.getElementById('thumb2ArrowX');
        const thumb2ArrowY = document.getElementById('thumb2ArrowY');
        const thumb2ArrowScale = document.getElementById('thumb2ArrowScale');
        const thumb2BgButtons = document.getElementById('thumb2BgButtons');
        const thumb2BgZoom = document.getElementById('thumb2BgZoom');
        const thumb2Brightness = document.getElementById('thumb2Brightness');
        const thumb2Blur = document.getElementById('thumb2Blur');
        const thumb2FullscreenBtn = document.getElementById('thumb2FullscreenBtn');
        const thumb2DownloadBtn = document.getElementById('thumb2DownloadBtn');
        const thumb2ClearBtn = document.getElementById('thumb2ClearBtn');
        const thumb2CustomWeaponInput = document.getElementById('thumb2CustomWeaponInput');
        const thumb2CustomBgInput = document.getElementById('thumb2CustomBgInput');
        const thumb2CustomFontInput = document.getElementById('thumb2CustomFontInput');
        const thumb2UploadFontBtn = document.getElementById('thumb2UploadFontBtn');
        const thumb2FontButtons = Array.from(document.querySelectorAll('.thumb2-font-btn'));
        const thumb2Picker = document.getElementById('thumb2WeaponPicker');
        const thumb2PickerList = document.getElementById('thumb2PickerList');
        const thumb2PickerClose = document.getElementById('thumb2PickerClose');

        let currentThumbnailTemplate = '1';
        let activeThumb2Slot = 0;
        let activeThumb2SkinWeapon = null;
        let pendingThumb2Weapon = null;
        let currentThumb2Font = 'rubik';
        const thumb2ArrowExportSrc = '/assets/embedded/img_0002_f0ead62452ee.png';
        let thumb2Bg = 'arena';
        const thumb2Backgrounds = { arena: screenBackgrounds.grid, splash: screenBackgrounds.waterpark, docks: screenBackgrounds.dockyard, custom: '' };
        const thumb2State = {
          text: 'ALL FREE', showText: true, showWeaponText: true, showKeybinds: true, showArrow: true, featuredSlot: 2, saturation: 1.3, textX: 0, textY: 0, textScale: 1,
          arrowX: 0, arrowY: 0, arrowScale: 1,
          bgZoom: 1, brightness: 1.3, blur: 0, outlineColor: '#000000', outlineSize: 6
        };
        const thumb2SlotState = Array.from({length:4}, () => ({ weapon: null, scale:1, imageX:0, imageY:0, labelX:0, labelY:0, labelScale:1 }));
        let thumb2PreviewTimer = null;

        const setThumbnailTemplate = value => {
          currentThumbnailTemplate = value === '2' ? '2' : '1';
          if (thumbBuilderPageEl) thumbBuilderPageEl.setAttribute('data-thumb-template', currentThumbnailTemplate);
          document.body.classList.toggle('thumb2-template-active', currentThumbnailTemplate === '2');
          thumbTemplateTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.thumbTemplate === currentThumbnailTemplate));
          setTimeout(updateThumb2LayoutScale, 40);
        };

        const updateThumb2LayoutScale = () => {
          if (!thumb2Stage || !thumb2Canvas) return;
          const rect = thumb2Stage.getBoundingClientRect();
          let scale;
          if (document.fullscreenElement === thumb2Stage) {
            scale = Math.min((rect.width || window.innerWidth) / 1280, (rect.height || window.innerHeight) / 720);
          } else {
            scale = (rect.width || 1280) / 1280;
          }
          if (!Number.isFinite(scale) || scale <= 0) scale = 1;
          thumb2Stage.style.setProperty('--thumb2-render-scale', String(scale));
        };

        const ensureThumb2Preview = () => {
          let preview = document.getElementById('thumb2FloatingPreview');
          if (!preview) {
            preview = document.createElement('div');
            preview.id = 'thumb2FloatingPreview';
            preview.className = 'thumb2-floating-preview';
            document.body.appendChild(preview);
          }
          return preview;
        };

        const updateThumb2Preview = () => {
          if (currentThumbnailTemplate !== '2' || !thumb2Stage || !thumb2Canvas) return;
          updateThumb2LayoutScale();
          const preview = ensureThumb2Preview();
          const sourceRect = thumb2Stage.getBoundingClientRect();
          const sourceW = Math.max(sourceRect.width || 1120, 320);
          const sourceH = Math.max(sourceRect.height || sourceW * 9 / 16, 180);
          const clone = thumb2Stage.cloneNode(true);
          clone.removeAttribute('id');
          clone.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));

          const wrap = document.createElement('div');
          wrap.className = 'thumb2-preview-scale';
          wrap.style.setProperty('--thumb2-preview-source-w', `${sourceW}px`);
          wrap.style.setProperty('--thumb2-preview-source-h', `${sourceH}px`);
          wrap.appendChild(clone);

          preview.innerHTML = '';
          preview.appendChild(wrap);
          preview.classList.add('show');

          const previewRect = preview.getBoundingClientRect();
          const scale = Math.min(previewRect.width / sourceW, previewRect.height / sourceH);
          wrap.style.setProperty('--thumb2-preview-scale', String(scale));

          clearTimeout(thumb2PreviewTimer);
          thumb2PreviewTimer = setTimeout(() => preview.classList.remove('show'), 1700);
        };

        const getThumb2DisplayName = weapon => weapon ? (weapon.labelName || weapon.baseWeapon || weapon.name) : '';
        const setThumb2WeaponImage = (img, weapon) => {
          if (!img || !weapon) return;
          if (weapon.skinFile && typeof setSkinFileImage === 'function') setSkinFileImage(img, weapon.skinFile, weapon.img || placeholderSvg(weapon.name, weapon.category || 'Weapon'));
          else { img.onerror = null; img.src = weapon.img || placeholderSvg(weapon.name, weapon.category || 'Weapon'); }
        };

        const applyThumb2Global = () => {
          if (!thumb2Canvas) return;
          thumb2Canvas.style.setProperty('--thumb2-saturation', String(thumb2State.saturation));
          thumb2Canvas.style.setProperty('--thumb2-title-x', `${thumb2State.textX}px`);
          thumb2Canvas.style.setProperty('--thumb2-title-y', `${thumb2State.textY}px`);
          thumb2Canvas.style.setProperty('--thumb2-title-scale', String(thumb2State.textScale));
          thumb2Canvas.style.setProperty('--thumb2-title-outline-color', thumb2State.outlineColor);
          thumb2Canvas.style.setProperty('--thumb2-title-outline-size', `${thumb2State.outlineSize}px`);
          thumb2Canvas.style.setProperty('--thumb2-arrow-x', `${thumb2State.arrowX}px`);
          thumb2Canvas.style.setProperty('--thumb2-arrow-y', `${thumb2State.arrowY}px`);
          thumb2Canvas.style.setProperty('--thumb2-arrow-scale', String(thumb2State.arrowScale));
          thumb2Canvas.classList.toggle('hide-title', !thumb2State.showText);
          thumb2Canvas.classList.toggle('hide-weapon-text', !thumb2State.showWeaponText);
          thumb2Canvas.classList.toggle('hide-keybinds', !thumb2State.showKeybinds);
          thumb2Canvas.classList.toggle('hide-arrow', !thumb2State.showArrow);
          if (thumb2Arrow) thumb2Arrow.style.backgroundImage = `url("${thumb2ArrowExportSrc}")`;
          thumb2Slots.forEach((slot, index) => { slot.dataset.featured = Number(thumb2State.featuredSlot) === index ? 'true' : 'false'; });
          thumb2Canvas.setAttribute('data-thumb2-font', currentThumb2Font || 'rubik');
          thumb2BgImg.src = thumb2Backgrounds[thumb2Bg] || thumb2Backgrounds.arena;
          thumb2BgImg.style.setProperty('--nothing','1');
          thumb2Canvas.style.setProperty('--thumb2-bg-zoom', String(thumb2State.bgZoom));
          thumb2Canvas.style.setProperty('--thumb2-brightness', String(thumb2State.brightness));
          thumb2Canvas.style.setProperty('--thumb2-blur', `${thumb2State.blur}px`);
          if (thumb2TitleEl) thumb2TitleEl.textContent = (thumb2State.text || 'ALL FREE').trim().toUpperCase();
          thumb2FontButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.thumb2FontChoice === currentThumb2Font));
        };

        const renderThumb2Slot = index => {
          const slot = thumb2Slots[index];
          const state = thumb2SlotState[index];
          if (!slot || !state) return;
          const img = slot.querySelector('.thumb2-weapon-img');
          const label = slot.querySelector('.thumb2-weapon-label');
          const titleEl = thumb2SlotTitleEls[index];
          slot.style.setProperty('--thumb2-item-scale', state.scale);
          slot.style.setProperty('--thumb2-image-x', `${state.imageX}px`);
          slot.style.setProperty('--thumb2-image-y', `${state.imageY}px`);
          slot.style.setProperty('--thumb2-label-x', `${state.labelX}px`);
          slot.style.setProperty('--thumb2-label-y', `${state.labelY}px`);
          slot.style.setProperty('--thumb2-label-scale', state.labelScale);
          slot.classList.toggle('has-weapon', Boolean(state.weapon));
          if (state.weapon) {
            setThumb2WeaponImage(img, state.weapon);
            img.hidden = false;
            img.alt = getThumb2DisplayName(state.weapon);
            label.textContent = getThumb2DisplayName(state.weapon);
            slot.title = `Change ${getThumb2DisplayName(state.weapon)}`;
          } else {
            img.removeAttribute('src'); img.hidden = true; img.alt = ''; label.textContent = ''; slot.title = 'Choose weapon';
          }
          if (titleEl) titleEl.textContent = state.weapon ? getThumb2DisplayName(state.weapon) : `Weapon ${index+1}`;
        };

        const renderAllThumb2Slots = () => { thumb2Slots.forEach((_,i)=>renderThumb2Slot(i)); applyThumb2Global(); };

        const thumb2FindWeapon = (preferred, fallbacks=[]) => {
          const list = [preferred, ...fallbacks];
          for (const name of list) { const found = allWeapons.find(item => item.name === name); if (found) return found; }
          return null;
        };

        const thumb2ApplyDefaultPreset = () => {
          const defaults = [
            thumb2FindWeapon('Assault Rifle'),
            thumb2FindWeapon('Pistol', ['Handgun']),
            thumb2FindWeapon('Fists'),
            thumb2FindWeapon('Grenade')
          ];
          defaults.forEach((weapon, i) => { if (weapon) thumb2SlotState[i].weapon = { ...weapon, labelName: weapon.name }; });
          renderAllThumb2Slots();
        };

        const renderThumb2WeaponPicker = () => {
          activeThumb2SkinWeapon = null; pendingThumb2Weapon = null;
          document.getElementById('thumb2PickerTitle').textContent = 'Choose a Weapon';
          thumb2Picker.querySelector('.screen-picker-head p').textContent = 'Pick a weapon, then choose a skin or upload your own image.';
          thumb2PickerList.innerHTML = `
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb2-clear="true">Clear Slot<small>Remove this weapon</small></button>
              <button class="screen-picker-custom" type="button" data-thumb2-custom-upload="true">Upload Custom Image<small>Use your own render</small></button>
            </div>
            ${slots.map(category => {
              const categoryWeapons = weaponsBySlot[category] || [];
              return `
                <div class="screen-picker-category">
                  <strong>${escapeHtml(category)}</strong>
                  <div class="screen-picker-grid">
                    ${categoryWeapons.map(weapon => `
                      <button class="screen-picker-weapon" type="button" data-thumb2-weapon="${escapeHtml(weapon.name)}">
                        <img decoding="async" loading="lazy" src="${weapon.img || placeholderSvg(weapon.name, weapon.category)}" alt="" draggable="false" />
                        <span>${escapeHtml(weapon.name)}</span>
                        <small>${escapeHtml(weapon.tier)}</small>
                      </button>
                    `).join('')}
                  </div>
                </div>`;
            }).join('')}
          `;
        };

        const renderThumb2SkinPicker = async weapon => {
          activeThumb2SkinWeapon = weapon;
          document.getElementById('thumb2PickerTitle').textContent = `${weapon.name} Skins`;
          thumb2Picker.querySelector('.screen-picker-head p').textContent = 'Choose Default, upload your own image, or pick an embedded skin.';
          thumb2PickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb2-back-weapons="true">← Back to Weapons</button>
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb2-default-skin="true">Default<small>Use the normal ${escapeHtml(weapon.name)} image</small></button>
              <button class="screen-picker-custom" type="button" data-thumb2-custom-upload="true">Upload Custom Image<small>Use your own skin/render</small></button>
            </div>
            <div class="screen-picker-message">Loading embedded skins...</div>`;
          const data = await loadSkinData();
          const skins = data.get(weapon.name) || [];
          const skinsHtml = skins.length ? `
            <div class="screen-picker-category">
              <strong>${escapeHtml(weapon.name)} Skins</strong>
              <div class="screen-picker-grid">
                ${skins.map((skin, index) => `
                  <button class="screen-picker-skin" type="button" data-thumb2-skin-index="${index}">
                    <img decoding="async" loading="lazy" src="${skin.file ? skinFileUrl(skin.file) : (weapon.img || placeholderSvg(weapon.name, weapon.category))}" alt="" draggable="false" />
                    <span>${escapeHtml(skin.name)}</span>
                    <small>${escapeHtml(skin.rarity || 'Skin')}</small>
                  </button>`).join('')}
              </div>
            </div>` : `<div class="screen-picker-message">No embedded skins were found for ${escapeHtml(weapon.name)}. You can still use Default or upload a custom image.</div>`;
          thumb2PickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb2-back-weapons="true">← Back to Weapons</button>
            <div class="screen-picker-actions">
              <button class="screen-picker-custom" type="button" data-thumb2-default-skin="true">Default<small>Use the normal ${escapeHtml(weapon.name)} image</small></button>
              <button class="screen-picker-custom" type="button" data-thumb2-custom-upload="true">Upload Custom Image<small>Use your own skin/render</small></button>
            </div>
            ${skinsHtml}`;
          if (typeof hydrateSkinFallbackImages === 'function') hydrateSkinFallbackImages(thumb2PickerList, weapon.img || placeholderSvg(weapon.name, weapon.category));
        };

        const renderThumb2SkinNamePrompt = weaponPayload => {
          pendingThumb2Weapon = weaponPayload;
          document.getElementById('thumb2PickerTitle').textContent = "Use skin's name?";
          thumb2Picker.querySelector('.screen-picker-head p').textContent = 'Choose whether the slot label should use the skin name or the default weapon name.';
          const previewLabel = compactSkinLabel(weaponPayload.skinName || weaponPayload.name, weaponPayload.baseWeapon || weaponPayload.name);
          thumb2PickerList.innerHTML = `
            <button class="screen-picker-back" type="button" data-thumb2-back-skins="true">← Back to Skins</button>
            <div class="thumb-name-question">
              <div class="thumb-name-question-preview">
                <img decoding="async" loading="lazy" src="${weaponPayload.img || placeholderSvg(weaponPayload.name, weaponPayload.category || 'Weapon')}" alt="" draggable="false" />
                <div><strong>${escapeHtml(weaponPayload.skinName || weaponPayload.name)}</strong><small>${escapeHtml(weaponPayload.baseWeapon || weaponPayload.name)} / ${escapeHtml(previewLabel)}</small></div>
              </div>
              <div class="thumb-name-question-actions">
                <button class="mini-btn" type="button" data-thumb2-skin-name-choice="yes">Yes, use skin name</button>
                <button class="mini-btn" type="button" data-thumb2-skin-name-choice="no">No, use weapon name</button>
              </div>
            </div>`;
        };

        const openThumb2Picker = index => {
          activeThumb2Slot = Number(index) || 0;
          renderThumb2WeaponPicker();
          thumb2Picker.classList.add('open');
          thumb2Picker.setAttribute('aria-hidden', 'false');
        };
        const closeThumb2Picker = () => { thumb2Picker.classList.remove('open'); thumb2Picker.setAttribute('aria-hidden', 'true'); };

        const applyThumb2Weapon = weapon => {
          thumb2SlotState[activeThumb2Slot].weapon = weapon;
          renderThumb2Slot(activeThumb2Slot);
          updateThumb2Preview();
          closeThumb2Picker();
        };

        const createCustomThumb2Weapon = async file => {
          const image = await fileToDataUrl(file);
          const name = file.name ? file.name.replace(/\.[^.]+$/, '') : 'Custom Image';
          return { name: name || 'Custom Image', labelName: name || 'Custom Image', category: 'Custom', tier: 'Custom', img: image };
        };

        thumbTemplate1Btn?.addEventListener('click', ()=>setThumbnailTemplate('1'));
        thumbTemplate2Btn?.addEventListener('click', ()=>setThumbnailTemplate('2'));
        setThumbnailTemplate('1');

        thumb2Slots.forEach(slot => slot.addEventListener('click', ()=>openThumb2Picker(slot.dataset.thumb2Slot)));
        thumb2PickerClose?.addEventListener('click', closeThumb2Picker);
        thumb2Picker?.addEventListener('click', event => { if (event.target === thumb2Picker) closeThumb2Picker(); });

        thumb2PickerList?.addEventListener('click', async event => {
          if (event.target.closest('[data-thumb2-clear]')) {
            thumb2SlotState[activeThumb2Slot].weapon = null; renderThumb2Slot(activeThumb2Slot); updateThumb2Preview(); closeThumb2Picker(); return;
          }
          if (event.target.closest('[data-thumb2-back-weapons]')) { renderThumb2WeaponPicker(); return; }
          if (event.target.closest('[data-thumb2-back-skins]')) { if (activeThumb2SkinWeapon) renderThumb2SkinPicker(activeThumb2SkinWeapon); else renderThumb2WeaponPicker(); return; }
          if (event.target.closest('[data-thumb2-custom-upload]')) { thumb2CustomWeaponInput.value=''; thumb2CustomWeaponInput.click(); return; }
          if (event.target.closest('[data-thumb2-default-skin]') && activeThumb2SkinWeapon) {
            applyThumb2Weapon({ ...activeThumb2SkinWeapon, labelName: activeThumb2SkinWeapon.name, skinName: 'Default', baseWeapon: activeThumb2SkinWeapon.name, img: activeThumb2SkinWeapon.img || placeholderSvg(activeThumb2SkinWeapon.name, activeThumb2SkinWeapon.category) }); return;
          }
          const skinBtn = event.target.closest('[data-thumb2-skin-index]');
          if (skinBtn && activeThumb2SkinWeapon) {
            const skins = skinDataByWeapon.get(activeThumb2SkinWeapon.name) || [];
            const skin = skins[Number(skinBtn.dataset.thumb2SkinIndex || skinBtn.dataset.thumb2Skinindex || skinBtn.dataset.thumb2SkinIndex)];
            if (!skin) { const real = skins[Number(skinBtn.getAttribute('data-thumb2-skin-index'))]; if (!real) return; pendingThumb2Weapon = real; }
            const chosen = skins[Number(skinBtn.getAttribute('data-thumb2-skin-index'))]; if (!chosen) return;
            renderThumb2SkinNamePrompt({ ...activeThumb2SkinWeapon, name: chosen.name, skinName: chosen.name, baseWeapon: activeThumb2SkinWeapon.name, tier: chosen.rarity || activeThumb2SkinWeapon.tier, skinFile: chosen.file || '', img: activeThumb2SkinWeapon.img || placeholderSvg(activeThumb2SkinWeapon.name, activeThumb2SkinWeapon.category) }); return;
          }
          const choiceBtn = event.target.closest('[data-thumb2-skin-name-choice]');
          if (choiceBtn && pendingThumb2Weapon) {
            const yes = choiceBtn.dataset.thumb2SkinNameChoice === 'yes';
            applyThumb2Weapon({ ...pendingThumb2Weapon, labelName: yes ? compactSkinLabel(pendingThumb2Weapon.skinName || pendingThumb2Weapon.name, pendingThumb2Weapon.baseWeapon || pendingThumb2Weapon.name) : (pendingThumb2Weapon.baseWeapon || pendingThumb2Weapon.name) }); return;
          }
          const btn = event.target.closest('[data-thumb2-weapon]');
          if (!btn) return;
          const weapon = allWeapons.find(item => item.name === btn.dataset.thumb2Weapon); if (!weapon) return; renderThumb2SkinPicker(weapon);
        });

        thumb2CustomWeaponInput?.addEventListener('change', async ()=>{
          const file = thumb2CustomWeaponInput.files?.[0]; if (!file) return; const customWeapon = await createCustomThumb2Weapon(file); applyThumb2Weapon(customWeapon);
        });
        thumb2CustomBgInput?.addEventListener('change', async ()=>{
          const file = thumb2CustomBgInput.files?.[0]; if (!file) return; thumb2Backgrounds.custom = await fileToDataUrl(file); thumb2Bg = 'custom'; thumb2BgButtons?.querySelectorAll('.thumb-bg-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.thumb2Bg==='custom')); applyThumb2Global(); updateThumb2Preview();
        });
        thumb2UploadFontBtn?.addEventListener('click', ()=> { if (thumb2CustomFontInput) { thumb2CustomFontInput.value=''; thumb2CustomFontInput.click(); } });
        thumb2CustomFontInput?.addEventListener('change', async ()=>{
          const file = thumb2CustomFontInput.files?.[0]; if (!file) return;
          const fontName = `RivalsToolsThumb2Font_${Date.now()}`; const fontUrl = await fileToDataUrl(file); const style = document.createElement('style');
          style.textContent = `@font-face { font-family: '${fontName}'; src: url('${fontUrl}'); font-display: swap; }`; document.head.appendChild(style);
          document.documentElement.style.setProperty('--thumb2-custom-font', `'${fontName}'`); thumb2Canvas?.style.setProperty('--thumb2-custom-font', `'${fontName}'`); currentThumb2Font = 'custom'; applyThumb2Global(); updateThumb2Preview();
        });
        thumb2FontButtons.forEach(btn => btn.addEventListener('click', ()=> { currentThumb2Font = btn.dataset.thumb2FontChoice || 'rubik'; applyThumb2Global(); updateThumb2Preview(); }));
        thumb2BgButtons?.addEventListener('click', event => {
          const btn = event.target.closest('[data-thumb2-bg]'); if (!btn) return; const key = btn.dataset.thumb2Bg;
          if (key === 'custom' && !thumb2Backgrounds.custom) { thumb2CustomBgInput.value=''; thumb2CustomBgInput.click(); return; }
          thumb2Bg = key; thumb2BgButtons.querySelectorAll('.thumb-bg-btn').forEach(b=>b.classList.toggle('active', b===btn)); applyThumb2Global(); updateThumb2Preview();
        });

        const hookThumb2Range = (el, onInput) => { el?.addEventListener('input', event => { showRangeTooltip(el, event); onInput(); updateThumb2Preview(); }); };
        hookThumb2Range(thumb2Saturation, ()=> { thumb2State.saturation = Number(thumb2Saturation.value)||1.3; applyThumb2Global(); });
        hookThumb2Range(thumb2TextX, ()=> { thumb2State.textX = Number(thumb2TextX.value)||0; applyThumb2Global(); });
        hookThumb2Range(thumb2TextY, ()=> { thumb2State.textY = Number(thumb2TextY.value)||0; applyThumb2Global(); });
        hookThumb2Range(thumb2TextScale, ()=> { thumb2State.textScale = Number(thumb2TextScale.value)||1; applyThumb2Global(); });
        hookThumb2Range(thumb2ArrowX, ()=> { thumb2State.arrowX = Number(thumb2ArrowX.value)||0; applyThumb2Global(); });
        hookThumb2Range(thumb2ArrowY, ()=> { thumb2State.arrowY = Number(thumb2ArrowY.value)||0; applyThumb2Global(); });
        hookThumb2Range(thumb2ArrowScale, ()=> { thumb2State.arrowScale = Number(thumb2ArrowScale.value)||1; applyThumb2Global(); });
        hookThumb2Range(thumb2BgZoom, ()=> { thumb2State.bgZoom = Number(thumb2BgZoom.value)||1; applyThumb2Global(); });
        hookThumb2Range(thumb2Brightness, ()=> { thumb2State.brightness = Number(thumb2Brightness.value)||1.3; applyThumb2Global(); });
        hookThumb2Range(thumb2Blur, ()=> { thumb2State.blur = Number(thumb2Blur.value)||0; applyThumb2Global(); });
        hookThumb2Range(thumb2OutlineSize, ()=> { thumb2State.outlineSize = Number(thumb2OutlineSize.value)||0; applyThumb2Global(); });
        thumb2OutlineColor?.addEventListener('input', ()=> { thumb2State.outlineColor = thumb2OutlineColor.value || '#000000'; applyThumb2Global(); updateThumb2Preview(); });
        thumb2ShowText?.addEventListener('change', ()=> { thumb2State.showText = Boolean(thumb2ShowText.checked); applyThumb2Global(); updateThumb2Preview(); });
        thumb2ShowArrow?.addEventListener('change', ()=> { thumb2State.showArrow = Boolean(thumb2ShowArrow.checked); applyThumb2Global(); updateThumb2Preview(); });
        thumb2ShowWeaponText?.addEventListener('change', ()=> { thumb2State.showWeaponText = Boolean(thumb2ShowWeaponText.checked); applyThumb2Global(); updateThumb2Preview(); });
        thumb2ShowKeybinds?.addEventListener('change', ()=> { thumb2State.showKeybinds = Boolean(thumb2ShowKeybinds.checked); applyThumb2Global(); updateThumb2Preview(); });
        thumb2FeaturedSlot?.addEventListener('change', ()=> { thumb2State.featuredSlot = thumb2FeaturedSlot.value === 'none' ? -1 : Number(thumb2FeaturedSlot.value); applyThumb2Global(); updateThumb2Preview(); });
        thumb2Text?.addEventListener('input', ()=> { thumb2State.text = thumb2Text.value || 'ALL FREE'; applyThumb2Global(); updateThumb2Preview(); });

        document.querySelectorAll('.thumb2-image-control').forEach(input => input.addEventListener('input', event => { showRangeTooltip(input, event); const idx = Number(input.dataset.thumb2Slot); const prop = input.dataset.thumb2Prop; if (thumb2SlotState[idx]) { if (prop==='x') thumb2SlotState[idx].imageX = Number(input.value)||0; if (prop==='y') thumb2SlotState[idx].imageY = Number(input.value)||0; renderThumb2Slot(idx); updateThumb2Preview(); } }));
        document.querySelectorAll('.thumb2-scale-control').forEach(input => input.addEventListener('input', event => { showRangeTooltip(input, event); const idx = Number(input.dataset.thumb2Slot); if (thumb2SlotState[idx]) { thumb2SlotState[idx].scale = Number(input.value)||1; renderThumb2Slot(idx); updateThumb2Preview(); } }));
        document.querySelectorAll('.thumb2-label-control').forEach(input => input.addEventListener('input', event => { showRangeTooltip(input, event); const idx = Number(input.dataset.thumb2Slot); const prop = input.dataset.thumb2Label; if (thumb2SlotState[idx]) { if (prop==='x') thumb2SlotState[idx].labelX = Number(input.value)||0; if (prop==='y') thumb2SlotState[idx].labelY = Number(input.value)||0; if (prop==='scale') thumb2SlotState[idx].labelScale = Number(input.value)||1; renderThumb2Slot(idx); updateThumb2Preview(); } }));

        thumb2ClearBtn?.addEventListener('click', ()=> { thumb2SlotState.forEach(s => s.weapon = null); renderAllThumb2Slots(); updateThumb2Preview(); });
        thumb2FullscreenBtn?.addEventListener('click', async ()=> {
          if (!thumb2Stage) return;
          if (document.fullscreenElement === thumb2Stage) await document.exitFullscreen();
          else await thumb2Stage.requestFullscreen();
          setTimeout(updateThumb2LayoutScale, 80);
        });

        window.addEventListener('resize', updateThumb2LayoutScale);
        document.addEventListener('fullscreenchange', () => setTimeout(updateThumb2LayoutScale, 80));
        if (window.ResizeObserver && thumb2Stage) {
          new ResizeObserver(updateThumb2LayoutScale).observe(thumb2Stage);
        }
        updateThumb2LayoutScale();


        const setThumb2InputValue = (input, value) => {
          if (!input) return 0;
          const min = Number(input.min || -Infinity);
          const max = Number(input.max || Infinity);
          const next = Math.max(min, Math.min(max, Number(value) || 0));
          input.value = String(next);
          return next;
        };

        let thumb2Drag = null;
        thumb2Stage?.addEventListener('pointerdown', event => {
          if (event.button !== 0) return;
          if (thumb2Picker?.classList.contains('open')) return;

          const scale = Number(getComputedStyle(thumb2Stage).getPropertyValue('--thumb2-render-scale')) || 1;
          const title = event.target.closest?.('.thumb2-title');
          const arrow = event.target.closest?.('.thumb2-arrow');
          const label = event.target.closest?.('.thumb2-weapon-label');

          if (label) {
            const slot = label.closest('.thumb2-slot');
            const index = Number(slot?.dataset.thumb2Slot);
            if (!thumb2SlotState[index]) return;
            event.preventDefault();
            label.classList.add('is-dragging');
            thumb2Drag = { type: 'label', index, el: label, scale, startX: event.clientX, startY: event.clientY, startValX: Number(thumb2SlotState[index].labelX || 0), startValY: Number(thumb2SlotState[index].labelY || 0), moved: false };
            label.setPointerCapture?.(event.pointerId);
            return;
          }

          if (title) {
            event.preventDefault();
            title.classList.add('is-dragging');
            thumb2Drag = { type: 'title', el: title, scale, startX: event.clientX, startY: event.clientY, startValX: Number(thumb2State.textX || 0), startValY: Number(thumb2State.textY || 0), moved: false };
            title.setPointerCapture?.(event.pointerId);
            return;
          }

          if (arrow) {
            event.preventDefault();
            arrow.classList.add('is-dragging');
            thumb2Drag = { type: 'arrow', el: arrow, scale, startX: event.clientX, startY: event.clientY, startValX: Number(thumb2State.arrowX || 0), startValY: Number(thumb2State.arrowY || 0), moved: false };
            arrow.setPointerCapture?.(event.pointerId);
          }
        }, true);

        thumb2Stage?.addEventListener('pointermove', event => {
          if (!thumb2Drag) return;
          const dx = (event.clientX - thumb2Drag.startX) / (thumb2Drag.scale || 1);
          const dy = (event.clientY - thumb2Drag.startY) / (thumb2Drag.scale || 1);
          if (Math.abs(dx) + Math.abs(dy) > 3) thumb2Drag.moved = true;

          if (thumb2Drag.type === 'title') {
            thumb2State.textX = setThumb2InputValue(thumb2TextX, thumb2Drag.startValX + dx);
            thumb2State.textY = setThumb2InputValue(thumb2TextY, thumb2Drag.startValY + dy);
            applyThumb2Global();
          } else if (thumb2Drag.type === 'arrow') {
            thumb2State.arrowX = setThumb2InputValue(thumb2ArrowX, thumb2Drag.startValX + dx);
            thumb2State.arrowY = setThumb2InputValue(thumb2ArrowY, thumb2Drag.startValY + dy);
            applyThumb2Global();
          } else if (thumb2Drag.type === 'label') {
            const state = thumb2SlotState[thumb2Drag.index];
            if (state) {
              const xInput = document.querySelector(`.thumb2-label-control[data-thumb2-slot="${thumb2Drag.index}"][data-thumb2-label="x"]`);
              const yInput = document.querySelector(`.thumb2-label-control[data-thumb2-slot="${thumb2Drag.index}"][data-thumb2-label="y"]`);
              state.labelX = setThumb2InputValue(xInput, thumb2Drag.startValX + dx);
              state.labelY = setThumb2InputValue(yInput, thumb2Drag.startValY + dy);
              renderThumb2Slot(thumb2Drag.index);
            }
          }
        }, true);

        const finishThumb2Drag = () => {
          if (!thumb2Drag) return;
          const el = thumb2Drag.el;
          const moved = thumb2Drag.moved;
          el?.classList.remove('is-dragging');
          if (moved) {
            el.__kudaDragSuppressClick = true;
            setTimeout(() => { if (el) el.__kudaDragSuppressClick = false; }, 0);
            updateThumb2Preview();
          }
          thumb2Drag = null;
        };
        thumb2Stage?.addEventListener('pointerup', finishThumb2Drag, true);
        thumb2Stage?.addEventListener('pointercancel', finishThumb2Drag, true);
        thumb2Stage?.addEventListener('click', event => {
          const target = event.target.closest?.('.thumb2-title, .thumb2-arrow, .thumb2-weapon-label');
          if (target?.__kudaDragSuppressClick) {
            event.preventDefault();
            event.stopImmediatePropagation();
            target.__kudaDragSuppressClick = false;
          }
        }, true);

        thumb2DownloadBtn?.addEventListener('click', async ()=> {
          const W = 1280, H = 720; const canvas = document.createElement('canvas'); canvas.width=W; canvas.height=H; const ctx = canvas.getContext('2d');
          const loadImg = src => new Promise((resolve,reject)=>{ const i=new Image(); i.decoding='async'; i.onload=()=>resolve(i); i.onerror=reject; i.src=src; });
          const bgSrc = thumb2Backgrounds[thumb2Bg] || thumb2Backgrounds.arena;
          try {
            const bg = await loadImg(bgSrc);
            const zoom = Number(thumb2State.bgZoom)||1; const bw = W*zoom, bh=H*zoom; ctx.filter=`blur(${Number(thumb2State.blur)||0}px)`; ctx.drawImage(bg, (W-bw)/2, (H-bh)/2, bw, bh); ctx.filter='none';
          } catch(err) { ctx.fillStyle='#d7ddec'; ctx.fillRect(0,0,W,H); }
          const overlay = ctx.createRadialGradient(W*0.5,H*0.18,10,W*0.5,H*0.18,W*0.5); overlay.addColorStop(0,'rgba(255,255,255,0.10)'); overlay.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=overlay; ctx.fillRect(0,0,W,H);
          const slotRects = [];
          const rowWidth = 1216, gap = 12, rowLeft = (W - rowWidth) / 2, baseW=(rowWidth-gap*3)/4, baseH=baseW/0.95, rowBottom=H-17;
          let slotBgExport = null;
          try { if (thumb2SlotBgSrc) slotBgExport = await loadImg(thumb2SlotBgSrc); } catch(err) {}
          for (let i=0;i<4;i++) {
            const bigger = Number(thumb2State.featuredSlot) === i;
            const size = bigger ? 1.22 : 1;
            const baseX = rowLeft + i*(baseW+gap);
            const cx = baseX + baseW/2;
            const w = baseW * size;
            const h = baseH * size;
            const x = cx - w/2;
            const y = rowBottom - h;
            slotRects.push({x,y,w,h});
            if (slotBgExport) {
              ctx.save();
              ctx.globalAlpha = 0.58;
              ctx.drawImage(slotBgExport, x, y, w, h);
              ctx.restore();
            } else {
              ctx.save();
              ctx.fillStyle='rgba(70,75,86,0.48)';
              ctx.fillRect(x,y,w,h);
              ctx.restore();
            }
            if (thumb2State.showKeybinds) {
              ctx.save();
              ctx.fillStyle='rgba(35,38,48,0.95)';
              const badgeX=x+8*size,badgeY=y+h-28*size,bw=20*size,bh=20*size,br=5*size;
              ctx.beginPath(); ctx.moveTo(badgeX+br,badgeY); ctx.lineTo(badgeX+bw-br,badgeY); ctx.quadraticCurveTo(badgeX+bw,badgeY,badgeX+bw,badgeY+br); ctx.lineTo(badgeX+bw,badgeY+bh-br); ctx.quadraticCurveTo(badgeX+bw,badgeY+bh,badgeX+bw-br,badgeY+bh); ctx.lineTo(badgeX+br,badgeY+bh); ctx.quadraticCurveTo(badgeX,badgeY+bh,badgeX,badgeY+bh-br); ctx.lineTo(badgeX,badgeY+br); ctx.quadraticCurveTo(badgeX,badgeY,badgeX+br,badgeY); ctx.closePath(); ctx.fill();
              ctx.fillStyle='#fff'; ctx.font=`1000 ${12*size}px Rubik, system-ui, sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(String(i+1), badgeX+bw/2, badgeY+bh/2+0.5); ctx.restore();
            }
          }
          if (thumb2State.showText) {
            const fontFamily = currentThumb2Font==='default' ? 'Bungee, Arial Black, Impact, sans-serif' : (currentThumb2Font==='custom' ? (getComputedStyle(thumb2Canvas).getPropertyValue('--thumb2-custom-font').replace(/'/g,'').trim() || 'Rubik') : 'Rubik, system-ui, sans-serif');
            const x=W*0.955 + Number(thumb2State.textX||0), yText=H*0.03 + Number(thumb2State.textY||0), fontSize=118*(Number(thumb2State.textScale)||1);
            const text=(thumb2State.text||'ALL FREE').trim().toUpperCase(); ctx.lineJoin='round'; ctx.textAlign='right'; ctx.textBaseline='top'; ctx.fillStyle='#fff'; ctx.strokeStyle=thumb2State.outlineColor||'#000'; ctx.lineWidth=Number(thumb2State.outlineSize||6)*2; ctx.font=`1000 ${fontSize}px ${fontFamily}`; ctx.strokeText(text,x,yText); ctx.fillText(text,x,yText);
          }
          if (thumb2State.showArrow) {
            ctx.save();
            try {
              const arrowImg = await loadImg(thumb2ArrowExportSrc);
              const baseX = W * -0.012;
              const baseY = H * 0.084;
              const baseSize = W * 0.265;
              const sc = Number(thumb2State.arrowScale)||1;
              const drawW = baseSize * sc;
              const drawH = baseSize * sc;
              ctx.drawImage(arrowImg, baseX + (Number(thumb2State.arrowX)||0), baseY + (Number(thumb2State.arrowY)||0), drawW, drawH);
            } catch(err) {}
            ctx.restore();
          }
          const slotPromise = thumb2SlotState.map(async (state, i) => {
            if (!state.weapon) return;
            const rect=slotRects[i];
            let imgSrc = state.weapon.img || placeholderSvg(state.weapon.name, state.weapon.category || 'Weapon');
            if (state.weapon.skinFile) imgSrc = skinFileUrl(state.weapon.skinFile);
            const liveImg = thumb2Slots[i]?.querySelector('.thumb2-weapon-img');
            if (liveImg?.currentSrc || liveImg?.src) imgSrc = liveImg.currentSrc || liveImg.src;
            try {
              let img = null;
              if (liveImg && liveImg.complete && liveImg.naturalWidth > 0) img = liveImg;
              else img = await loadImg(imgSrc);
              const scale = Number(state.scale)||1;
              const iw=rect.w*1.24*scale, ih=rect.h*1.16*scale;
              const cx=rect.x+rect.w/2+(Number(state.imageX)||0), cy=rect.y+rect.h*0.44+(Number(state.imageY)||0);
              ctx.save(); ctx.shadowColor='rgba(0,0,0,0.56)'; ctx.shadowBlur=18; ctx.shadowOffsetX=0; ctx.shadowOffsetY=12; ctx.drawImage(img,cx-iw/2,cy-ih/2,iw,ih); ctx.restore();
            } catch(err) { console.warn('Thumbnail 2 export image skipped:', imgSrc, err); }
            if (thumb2State.showWeaponText) {
              const label=getThumb2DisplayName(state.weapon);
              const lx=rect.x+rect.w/2+(Number(state.labelX)||0), ly=rect.y+rect.h-(rect.h*0.055)-(Number(state.labelY)||0), fs=Math.max(24, 34*(Number(state.labelScale)||1));
              const fontFamily = currentThumb2Font==='default' ? 'Bungee, Arial Black, Impact, sans-serif' : (currentThumb2Font==='custom' ? (getComputedStyle(thumb2Canvas).getPropertyValue('--thumb2-custom-font').replace(/'/g,'').trim() || 'Rubik') : 'Rubik, system-ui, sans-serif');
              ctx.textAlign='center'; ctx.textBaseline='alphabetic'; ctx.fillStyle='#fff'; ctx.strokeStyle=thumb2State.outlineColor||'#000'; ctx.lineWidth=5; ctx.font=`1000 ${fs}px ${fontFamily}`; ctx.strokeText(label,lx,ly); ctx.fillText(label,lx,ly);
            }
          });
          await Promise.all(slotPromise);
          const exportCanvas = document.createElement('canvas'); exportCanvas.width = W; exportCanvas.height = H;
          const exportCtx = exportCanvas.getContext('2d');
          exportCtx.filter = `saturate(${Number(thumb2State.saturation)||1.3}) brightness(${Number(thumb2State.brightness)||1.3})`;
          exportCtx.drawImage(canvas, 0, 0);
          exportCtx.filter = 'none';
          try {
            const link=document.createElement('a'); link.download=`kuda-thumbnail-2-${Date.now()}.png`; link.href=exportCanvas.toDataURL('image/png'); link.click();
          } catch(err) {
            console.error(err);
            alert('Download failed because the browser blocked one of the images. Try running the site through localhost or GitHub Pages, and make sure the Weapons/Skins folders are uploaded beside the HTML.');
          }
        });

        thumb2ApplyDefaultPreset();
        applyThumb2Global();
      }



      function setupTierListBuilder(){
        const tierPage = document.getElementById("tierListPage");
        if (!tierPage) return;
        const tierBoard = document.getElementById("tierBoard");
        const tierItemPool = document.getElementById("tierItemPool");
        const tierItemPanel = document.getElementById("tierItemPanel");
        const tierAddItemsBtn = document.getElementById("tierAddItemsBtn");
        const tierDownloadBtn = document.getElementById("tierDownloadBtn");
        const tierClearBoard = document.getElementById("tierClearBoard");
        const tierSearch = document.getElementById("tierSearch");
        const tierPanelTitle = document.getElementById("tierPanelTitle");
        const tierPickerModal = document.getElementById("tierPickerModal");
        const tierPickerClose = document.getElementById("tierPickerClose");
        const tierPickerList = document.getElementById("tierPickerList");
        const tierPickerSearch = document.getElementById("tierPickerSearch");
        const tierAddSelectedBtn = document.getElementById("tierAddSelectedBtn");
        const tierTrashZone = document.getElementById("tierTrashZone");
        const presetButtons = Array.from(tierPage.querySelectorAll("[data-tier-preset]"));
        const dropzones = Array.from(tierPage.querySelectorAll("[data-tier-drop]"));
        let currentPresetItems = [];
        let currentRenderedTierItems = [];
        let lastTierPickerIndex = null;
        let selectedTierItems = new Map();
        let dragged = null;
        let tierItemCounter = 0;
        let activePreset = "weapons";
        let clearSelectionsConfirmTimer = null;

        const normalizeTierItem = item => ({
          name: item.name || "Item",
          category: item.category || item.baseWeapon || "Item",
          tier: item.tier || item.rarity || "Item",
          img: item.img || "",
          skinFile: item.skinFile || "",
          mapFile: item.mapFile || "",
          mapFiles: item.mapFiles || null,
          baseWeapon: item.baseWeapon || "",
          skinName: item.skinName || ""
        });

        const tierItemKey = item => {
          const data = normalizeTierItem(item);
          const mapKey = Array.isArray(data.mapFiles) ? data.mapFiles.join("|") : data.mapFile;
          return `${data.name}::${data.category}::${data.skinFile || mapKey || data.img || ""}`;
        };

        const setTierCardImage = (img, item) => {
          if (!img) return;
          if (item.skinFile) setSkinFileImage(img, item.skinFile, item.img || placeholderSvg(item.name, item.category || "Skin"));
          else if (item.mapFile || item.mapFiles) setMapFileImage(img, item.mapFiles || item.mapFile, item.img || placeholderSvg(item.name, item.category || "Map"));
          else {
            img.onerror = null;
            img.src = item.img || placeholderSvg(item.name, item.category || "Item");
          }
        };

        const updateTierPoolEmptyState = () => {
          const cards = tierItemPool ? Array.from(tierItemPool.querySelectorAll(".tier-item-card")) : [];
          if (!tierItemPool) return;
          const existing = tierItemPool.querySelector(".tier-empty-message");
          if (cards.length) {
            tierItemPool.classList.remove("empty");
            existing?.remove();
          } else {
            tierItemPool.classList.add("empty");
            if (!existing) {
              const msg = document.createElement("div");
              msg.className = "tier-empty-message";
              msg.id = "tierEmptyMessage";
              msg.innerHTML = 'No items added yet. Click <strong>Add Items</strong> to choose weapons or skins.';
              tierItemPool.appendChild(msg);
            }
          }
        };

        const createTierCard = (item, source = "pool") => {
          const data = normalizeTierItem(item);
          const card = document.createElement("div");
          card.className = "tier-item-card";
          card.draggable = true;
          card.dataset.source = source;
          card.dataset.tierCardId = `tier-${Date.now()}-${tierItemCounter++}`;
          card.__tierItem = data;
          card.title = `${data.name}${data.category ? ` • ${data.category}` : ""}`;
          card.innerHTML = `<img decoding="async" loading="lazy" alt="" draggable="false"/><span></span><small></small>`;
          const img = card.querySelector("img");
          const label = card.querySelector("span");
          const meta = card.querySelector("small");
          setTierCardImage(img, data);
          label.textContent = data.name;
          meta.textContent = data.category;

          card.addEventListener("dragstart", event => {
            dragged = { element: card, item: data, source: card.dataset.source };
            card.classList.add("dragging");
            tierTrashZone?.classList.add("visible");
            try {
              event.dataTransfer.effectAllowed = "move";
              event.dataTransfer.setData("text/plain", data.name);
            } catch (err) {}
          });

          card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
            dragged = null;
            dropzones.forEach(zone => zone.classList.remove("drag-over"));
            tierItemPool?.classList.remove("drag-over");
            tierTrashZone?.classList.remove("visible", "drag-over");
            updateTierPoolEmptyState();
          });

          return card;
        };

        const renderAddedItemsSearch = () => {
          if (!tierItemPool) return;
          const query = String(tierSearch?.value || "").trim().toLowerCase();
          Array.from(tierItemPool.querySelectorAll(".tier-item-card")).forEach(card => {
            const data = card.__tierItem || {};
            const hit = !query || `${data.name || ""} ${data.category || ""} ${data.tier || ""}`.toLowerCase().includes(query);
            card.style.display = hit ? "" : "none";
          });
        };

        const addItemsToPool = items => {
          if (!tierItemPool) return;
          const existingKeys = new Set(Array.from(tierItemPool.querySelectorAll(".tier-item-card")).map(card => tierItemKey(card.__tierItem || {})));
          const boardKeys = new Set(dropzones.flatMap(zone => Array.from(zone.querySelectorAll(".tier-item-card")).map(card => tierItemKey(card.__tierItem || {}))));
          items.map(normalizeTierItem).forEach(item => {
            const key = tierItemKey(item);
            if (existingKeys.has(key) || boardKeys.has(key)) return;
            const card = createTierCard(item, "pool");
            tierItemPool.appendChild(card);
            existingKeys.add(key);
          });
          updateTierPoolEmptyState();
          renderAddedItemsSearch();
        };

        const mapFilenameOverrides = {
          "Arena": ["Arena.png", "Arenaicon.png", "ArenaIcon.png", "Arenathumbnail.png", "ArenaThumbnail.png"],
          "Big Arena": ["BigArena.png", "BigArenaicon.png", "BigArenaIcon.png", "BigArenathumbnail.png", "BigArenaThumbnail.png"],
          "Backrooms": ["Backrooms.png", "Backroomsicon.png", "BackroomsIcon.png", "Backroomsthumbnail.png", "BackroomsThumbnail.png"],
          "Big Backrooms": ["BigBackrooms.png", "BigBackroomsicon.png", "BigBackroomsIcon.png", "BigBackroomsthumbnail.png", "BigBackroomsThumbnail.png"],
          "Battleground": ["Battelgroundsicon.png", "Battleground.png", "Battlegroundicon.png", "BattlegroundIcon.png", "Battlegroundthumbnail.png", "BattlegroundThumbnail.png"],
          "Bridge": ["Bridge.png", "Bridgeicon.png", "BridgeIcon.png", "Bridgethumbnail.png", "BridgeThumbnail.png"],
          "Chess": ["chess_map.png", "Chess.png", "Chessicon.png", "ChessIcon.png"],
          "Crossroads": ["Crossroads.png", "Crossroadsicon.png", "CrossroadsIcon.png", "Crossroadsthumbnail.png", "CrossroadsThumbnail.png"],
          "Big Crossroads": ["BigCrossroads.png", "BigCrossroadsicon.png", "BigCrossroadsIcon.png", "BigCrossroadsthumbnail.png", "BigCrossroadsThumbnail.png"],
          "Construction": ["Construction.png", "Constructionicon.png", "ConstructionIcon.png", "Constructionthumbnail.png", "ConstructionThumbnail.png"],
          "Dimension": ["Dimension.png", "Dimensionicon.png", "DimensionIcon.png", "Dimensionthumbnail.png", "DimensionThumbnail.png"],
          "Docks": ["Docks.png", "Docksicon.png", "DocksIcon.png", "Docksthumbnail.png", "DocksThumbnail.png"],
          "Graveyard": ["Graveyard.png", "Graveyardicon.png", "GraveyardIcon.png", "Graveyardthumbnail.png", "GraveyardThumbnail.png"],
          "Big Graveyard": ["BigGraveyard.png", "BigGraveyardicon.png", "BigGraveyardIcon.png", "BigGraveyardthumbnail.png", "BigGraveyardThumbnail.png"],
          "Iceberg": ["Iceberg.png", "Icebergicon.png", "IcebergIcon.png", "Icebergthumbnail.png", "IcebergThumbnail.png"],
          "Onyx": ["Onyx.png", "Onyxicon.png", "OnyxIcon.png", "Onyxthumbnail.png", "OnyxThumbnail.png"],
          "Big Onyx": ["BigOnyx.png", "BigOnyxicon.png", "BigOnyxIcon.png", "BigOnyxthumbnail.png", "BigOnyxThumbnail.png"],
          "Playground": ["Playground.png", "Playgroundicon.png", "PlaygroundIcon.png", "Playgroundthumbnail.png", "PlaygroundThumbnail.png"],
          "Sandbox": ["Sandbox.png", "Sandboxicon.png", "SandboxIcon.png", "Sandboxthumbnail.png", "SandboxThumbnail.png"],
          "Splash": ["Splash.png", "Splashicon.png", "SplashIcon.png", "Splashthumbnail.png", "SplashThumbnail.png"],
          "Big Splash": ["BigSplash.png", "BigSplashicon.png", "BigSplashIcon.png", "BigSplashthumbnail.png", "BigSplashThumbnail.png"],
          "Station": ["Station.png", "Stationicon.png", "StationIcon.png", "Stationthumbnail.png", "StationThumbnail.png"],
          "Big Station": ["BigStation.png", "BigStationicon.png", "BigStationIcon.png", "BigStationthumbnail.png", "BigStationThumbnail.png"],
          "Shooting Range": ["ShootingRange.png", "ShootingRangeicon.png", "ShootingRangeIcon.png", "ShootingRangethumbnail.png", "ShootingRangeThumbnail.png"],
          "Village": ["Villagethumbnail.png", "Village.png", "Villageicon.png", "VillageIcon.png", "VillageThumbnail.png"],
          "Legacy Backrooms": ["LegacyBackrooms.png", "LegacyBackroomsicon.png", "LegacyBackroomsIcon.png"],
          "Legacy Battleground": ["Legacybattlegroundsicon.png", "LegacyBattleground.png", "LegacyBattlegroundicon.png", "LegacyBattlegroundIcon.png"],
          "Legacy Big Splash": ["Legacybigdocksicon.png", "LegacyBigSplash.png", "LegacyBigSplashicon.png", "LegacyBigSplashIcon.png"],
          "Legacy Crossroads": ["LegacyCrossroads.png", "LegacyCrossroadsicon.png", "LegacyCrossroadsIcon.png"],
          "Legacy Docks": ["LegacyDocks.png", "LegacyDocksicon.png", "LegacyDocksIcon.png"],
          "Legacy Onyx": ["LegacyOnyx.png", "LegacyOnyxicon.png", "LegacyOnyxIcon.png"],
          "Legacy Splash": ["LegacySplash.png", "LegacySplashicon.png", "LegacySplashIcon.png"]
        };

        const mapFilenameCandidates = name => {
          const clean = String(name || "").trim();
          const compact = clean.replace(/\s+/g, "");
          const underscored = clean.replace(/\s+/g, "_");
          const dashed = clean.replace(/\s+/g, "-");
          const lower = clean.toLowerCase();
          const lowerCompact = lower.replace(/\s+/g, "");
          const lowerUnderscore = lower.replace(/\s+/g, "_");
          const bases = [clean, compact, underscored, dashed, `${clean}icon`, `${compact}icon`, `${clean}Icon`, `${compact}Icon`, `${clean}_Icon`, `${compact}_Icon`, `${clean}thumbnail`, `${compact}thumbnail`, `${clean}Thumbnail`, `${compact}Thumbnail`, `${clean}_thumbnail`, `${compact}_thumbnail`, `${clean}_map`, `${compact}_map`, lower, lowerCompact, lowerUnderscore, `${lowerCompact}icon`, `${lowerCompact}thumbnail`, `${lowerUnderscore}_icon`, `${lowerUnderscore}_thumbnail`, `${lowerUnderscore}_map`];
          const exts = ["png", "webp", "jpg", "jpeg"];
          const generated = bases.flatMap(base => exts.map(ext => `${base}.${ext}`));
          return [...new Set([...(mapFilenameOverrides[clean] || []), ...generated])];
        };

        const rivalsMapNames = ["Arena", "Big Arena", "Backrooms", "Big Backrooms", "Battleground", "Bridge", "Chess", "Crossroads", "Big Crossroads", "Construction", "Dimension", "Docks", "Graveyard", "Big Graveyard", "Iceberg", "Onyx", "Big Onyx", "Playground", "Sandbox", "Splash", "Big Splash", "Station", "Big Station", "Shooting Range", "Village", "Legacy Backrooms", "Legacy Battleground", "Legacy Big Splash", "Legacy Crossroads", "Legacy Docks", "Legacy Onyx", "Legacy Splash"];

        const getPresetItems = async preset => {
          if (preset === "skins") {
            try { await loadSkinData(); } catch (err) {}
            const skinItems = [];
            for (const [weaponName, skins] of skinDataByWeapon.entries()) {
              const baseWeapon = allWeapons.find(w => w.name === weaponName) || { name: weaponName, category: "Skin", tier: "Skin", img: "" };
              skins.forEach(skin => {
                skinItems.push({
                  name: skin.name || `${weaponName} Skin`,
                  category: `${weaponName} Skin`,
                  tier: skin.rarity || "Skin",
                  img: baseWeapon.img || placeholderSvg(weaponName, baseWeapon.category || "Skin"),
                  skinFile: skin.file || "",
                  baseWeapon: weaponName,
                  skinName: skin.name || "Skin"
                });
              });
            }
            return skinItems;
          }
          if (preset === "maps") {
            return rivalsMapNames.map(name => normalizeTierItem({
              name,
              category: "Map",
              tier: "Rivals Map",
              mapFile: `${name}.png`,
              mapFiles: mapFilenameCandidates(name),
              img: placeholderSvg(name, "Map")
            }));
          }
          if (preset === "weapons") return allWeapons.map(normalizeTierItem);
          if (weaponsBySlot[preset]) return weaponsBySlot[preset].map(normalizeTierItem);
          return allWeapons.map(normalizeTierItem);
        };

        const presetLabels = {
          weapons: "All Weapons",
          skins: "All Skins",
          maps: "All Maps",
          Primary: "All Primaries",
          Secondary: "All Secondaries",
          Melee: "All Melees",
          Utility: "All Utilities"
        };

        const renderTierPicker = () => {
          const query = String(tierPickerSearch?.value || "").trim().toLowerCase();
          const filtered = currentPresetItems.filter(item => !query || `${item.name} ${item.category} ${item.tier}`.toLowerCase().includes(query));
          currentRenderedTierItems = filtered;
          const filteredIndexByKey = new Map();
          filtered.forEach((item, index) => filteredIndexByKey.set(tierItemKey(item), index));
          tierPickerList.innerHTML = filtered.length ? "" : `<div class="screen-picker-message">No items match your search.</div>`;
          const byCategory = new Map();
          filtered.forEach(item => {
            const group = item.category || "Items";
            if (!byCategory.has(group)) byCategory.set(group, []);
            byCategory.get(group).push(item);
          });

          for (const [category, items] of byCategory.entries()) {
            const section = document.createElement("div");
            section.className = "screen-picker-category";
            section.innerHTML = `<strong>${escapeHtml(category)}</strong><div class="screen-picker-grid tier-picker-grid"></div>`;
            const grid = section.querySelector(".tier-picker-grid");
            items.forEach(item => {
              const btn = document.createElement("button");
              const key = tierItemKey(item);
              btn.className = `screen-picker-weapon tier-picker-option${selectedTierItems.has(key) ? " selected" : ""}`;
              btn.type = "button";
              btn.dataset.tierItemKey = key;
              btn.dataset.tierItemIndex = String(filteredIndexByKey.get(key) ?? 0);
              btn.__tierItem = item;
              btn.innerHTML = `<img decoding="async" loading="lazy" alt="" draggable="false"/><span></span><small></small>`;
              setTierCardImage(btn.querySelector("img"), item);
              btn.querySelector("span").textContent = item.name;
              btn.querySelector("small").textContent = item.tier || item.category || "Item";
              grid.appendChild(btn);
            });
            tierPickerList.appendChild(section);
          }

          tierAddSelectedBtn.disabled = selectedTierItems.size === 0;
          tierAddSelectedBtn.textContent = selectedTierItems.size ? `Add Selected (${selectedTierItems.size})` : "Add Selected";
        };

        const applyPreset = async preset => {
          activePreset = preset || "weapons";
          presetButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.tierPreset === activePreset));
          if (tierPickerSearch) tierPickerSearch.value = "";
          currentPresetItems = (await getPresetItems(activePreset)).map(normalizeTierItem);
          lastTierPickerIndex = null;
          renderTierPicker();
        };

        const openTierPicker = async () => {
          selectedTierItems.clear();
          lastTierPickerIndex = null;
          tierPickerModal?.classList.add("open");
          tierPickerModal?.setAttribute("aria-hidden", "false");
          await applyPreset(activePreset || "weapons");
        };

        const closeTierPicker = () => {
          tierPickerModal?.classList.remove("open");
          tierPickerModal?.setAttribute("aria-hidden", "true");
          selectedTierItems.clear();
          lastTierPickerIndex = null;
        };

        presetButtons.forEach(btn => {
          btn.addEventListener("click", () => applyPreset(btn.dataset.tierPreset));
        });

        tierPickerList?.addEventListener("click", event => {
          const option = event.target.closest(".tier-picker-option");
          if (!option) return;
          const key = option.dataset.tierItemKey;
          const item = option.__tierItem;
          const clickedIndex = Number(option.dataset.tierItemIndex);
          if (!key || !item) return;

          if (event.shiftKey && lastTierPickerIndex !== null && Number.isFinite(clickedIndex)) {
            const start = Math.min(lastTierPickerIndex, clickedIndex);
            const end = Math.max(lastTierPickerIndex, clickedIndex);
            for (let i = start; i <= end; i++) {
              const rangeItem = currentRenderedTierItems[i];
              if (!rangeItem) continue;
              selectedTierItems.set(tierItemKey(rangeItem), rangeItem);
            }
            renderTierPicker();
          } else {
            if (selectedTierItems.has(key)) selectedTierItems.delete(key);
            else selectedTierItems.set(key, item);
            option.classList.toggle("selected", selectedTierItems.has(key));
          }

          if (Number.isFinite(clickedIndex)) lastTierPickerIndex = clickedIndex;
          tierAddSelectedBtn.disabled = selectedTierItems.size === 0;
          tierAddSelectedBtn.textContent = selectedTierItems.size ? `Add Selected (${selectedTierItems.size})` : "Add Selected";
        });

        tierAddSelectedBtn?.addEventListener("click", () => {
          addItemsToPool(Array.from(selectedTierItems.values()));
          closeTierPicker();
        });

        tierAddItemsBtn?.addEventListener("click", openTierPicker);
        tierPickerClose?.addEventListener("click", closeTierPicker);
        tierPickerModal?.addEventListener("click", event => { if (event.target === tierPickerModal) closeTierPicker(); });
        tierPickerSearch?.addEventListener("input", renderTierPicker);
        tierSearch?.addEventListener("input", renderAddedItemsSearch);

        const moveDraggedInto = zone => {
          if (!dragged?.element) return;
          dragged.element.dataset.source = zone === tierItemPool ? "pool" : "board";
          zone.appendChild(dragged.element);
          updateTierPoolEmptyState();
          renderAddedItemsSearch();
        };

        const handleZoneDrop = (zone, event) => {
          event.preventDefault();
          event.stopPropagation();
          zone.classList.remove("drag-over");
          if (!dragged) return;
          moveDraggedInto(zone);
        };

        dropzones.forEach(zone => {
          zone.addEventListener("dragover", event => { event.preventDefault(); event.stopPropagation(); zone.classList.add("drag-over"); });
          zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
          zone.addEventListener("drop", event => handleZoneDrop(zone, event));
        });

        tierItemPool?.addEventListener("dragover", event => { event.preventDefault(); event.stopPropagation(); tierItemPool.classList.add("drag-over"); });
        tierItemPool?.addEventListener("dragleave", () => tierItemPool.classList.remove("drag-over"));
        tierItemPool?.addEventListener("drop", event => {
          event.preventDefault();
          event.stopPropagation();
          tierItemPool.classList.remove("drag-over");
          if (dragged?.element) moveDraggedInto(tierItemPool);
        });

        const clearAllTierSelections = () => {
          dropzones.forEach(zone => {
            Array.from(zone.querySelectorAll(".tier-item-card")).forEach(card => card.remove());
          });
          Array.from(tierItemPool?.querySelectorAll(".tier-item-card") || []).forEach(card => card.remove());
          updateTierPoolEmptyState();
          renderAddedItemsSearch();
        };

        tierClearBoard?.addEventListener("click", () => {
          if (tierClearBoard.dataset.confirming === "true") {
            clearTimeout(clearSelectionsConfirmTimer);
            tierClearBoard.dataset.confirming = "false";
            tierClearBoard.textContent = "Clear Selections";
            clearAllTierSelections();
            return;
          }

          tierClearBoard.dataset.confirming = "true";
          tierClearBoard.textContent = "Are you sure?";
          clearTimeout(clearSelectionsConfirmTimer);
          clearSelectionsConfirmTimer = setTimeout(() => {
            tierClearBoard.dataset.confirming = "false";
            tierClearBoard.textContent = "Clear Selections";
          }, 2400);
        });

        tierTrashZone?.addEventListener("dragover", event => {
          event.preventDefault();
          event.stopPropagation();
          tierTrashZone.classList.add("drag-over", "visible");
          try { event.dataTransfer.dropEffect = "move"; } catch (err) {}
        });

        tierTrashZone?.addEventListener("dragleave", event => {
          if (!tierTrashZone.contains(event.relatedTarget)) tierTrashZone.classList.remove("drag-over");
        });

        tierTrashZone?.addEventListener("drop", event => {
          event.preventDefault();
          event.stopPropagation();
          if (dragged?.element) dragged.element.remove();
          dragged = null;
          tierTrashZone.classList.remove("visible", "drag-over");
          dropzones.forEach(zone => zone.classList.remove("drag-over"));
          tierItemPool?.classList.remove("drag-over");
          updateTierPoolEmptyState();
          renderAddedItemsSearch();
        });

        const ensureHtml2CanvasForTier = async () => {
          if (window.html2canvas) return window.html2canvas;
          await new Promise((resolve, reject) => {
            const existing = document.getElementById("html2canvasLoader");
            if (existing) {
              existing.addEventListener("load", resolve, { once: true });
              existing.addEventListener("error", reject, { once: true });
              return;
            }
            const script = document.createElement("script");
            script.id = "html2canvasLoader";
            script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
          return window.html2canvas;
        };

        tierDownloadBtn?.addEventListener("click", async () => {
          try {
            const html2canvas = await ensureHtml2CanvasForTier();
            const canvas = await html2canvas(tierBoard, { backgroundColor: null, scale: 2, useCORS: true, logging: false });
            canvas.toBlob(blob => {
              if (!blob) return;
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "kuda-tier-list.png";
              document.body.appendChild(a);
              a.click();
              setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 250);
            }, "image/png");
          } catch (err) {
            alert("Download failed. Try running the site through localhost or GitHub Pages so the browser can export the tier list.");
          }
        });

        updateTierPoolEmptyState();
      }


      function setupChallengeRoadBuilder(){
        const page = document.getElementById("challengeRoadPage");
        if (!page) return;
        const stage = document.getElementById("challengeStage");
        const baseImg = document.getElementById("challengeBaseImg");
        const layer = document.getElementById("challengeLayer");
        const controls = document.getElementById("challengeControlPanel");
        const addBtn = document.getElementById("challengeAddBtn");
        const downloadBtn = document.getElementById("challengeDownloadBtn");
        const clearBtn = document.getElementById("challengeClearBtn");
        const picker = document.getElementById("challengePickerModal");
        const pickerList = document.getElementById("challengePickerList");
        const pickerClose = document.getElementById("challengePickerClose");
        const pickerSearch = document.getElementById("challengePickerSearch");
        const customItemInput = document.getElementById("challengeCustomItemInput");
        const customBgInput = document.getElementById("challengeCustomBgInput");
        const bgButtons = Array.from(page.querySelectorAll("[data-challenge-bg]"));
        const presetButtons = Array.from(page.querySelectorAll("[data-challenge-preset], [data-challenge-custom-upload]"));
        const defaultBgSrc = __rtAsset("assets/embedded/img_0010_ecf8cbff283c.jpg");
        const transparentRoadSrc = __rtAsset("assets/embedded/img_0024_8fd104844ae4.png");
        let customBgSrc = "";
        let bgMode = "default";
        let challenges = [];
        let selectedId = null;
        let activeId = null;
        let currentPreset = "weapons";
        let currentItems = [];
        const maxChallenges = 10;

        const challengeMapNames = typeof rivalsMapNames !== "undefined" ? rivalsMapNames : ["Arena", "Big Arena", "Backrooms", "Big Backrooms", "Battleground", "Bridge", "Chess", "Crossroads", "Big Crossroads", "Construction", "Dimension", "Docks", "Graveyard", "Big Graveyard", "Iceberg", "Onyx", "Big Onyx", "Playground", "Sandbox", "Splash", "Big Splash", "Station", "Big Station", "Shooting Range", "Village", "Legacy Backrooms", "Legacy Battleground", "Legacy Big Splash", "Legacy Crossroads", "Legacy Docks", "Legacy Onyx", "Legacy Splash"];
        const challengeMapCandidates = name => typeof mapFilenameCandidates === "function" ? mapFilenameCandidates(name) : [String(name || "").replace(/\s+/g, "") + ".png", String(name || "") + ".png"];
        const fileToData = file => new Promise((resolve, reject) => {
          const r = new FileReader();
          r.onload = () => resolve(String(r.result || ""));
          r.onerror = reject;
          r.readAsDataURL(file);
        });

        const itemKey = item => `${item.category || ""}::${item.name || ""}::${item.skinFile || ""}::${item.mapName || ""}`;

        const getItems = preset => {
          if (preset === "maps") {
            return challengeMapNames.map(name => ({
              name,
              category: "Map",
              tier: "Map",
              mapName: name,
              mapFiles: challengeMapCandidates(name),
              img: placeholderSvg(name, "Map")
            }));
          }
          if (["Primary","Secondary","Melee","Utility"].includes(preset)) return (weaponsBySlot[preset] || []).map(w => ({...w}));
          return allWeapons.map(w => ({...w}));
        };

        const setMapImg = (img, item) => {
          if (item.mapFiles && typeof setMapFileImage === "function") setMapFileImage(img, item.mapFiles, item.img || placeholderSvg(item.name, "Map"));
          else img.src = item.img || placeholderSvg(item.name, item.category || "Challenge");
        };

        const setIconImg = (img, item) => {
          if (!img || !item) return;
          if (item.customSrc) img.src = item.customSrc;
          else if (item.skinFile && typeof setSkinFileImage === "function") setSkinFileImage(img, item.skinFile, item.img || placeholderSvg(item.name, item.category || "Challenge"));
          else if (item.mapFiles) setMapImg(img, item);
          else img.src = item.img || placeholderSvg(item.name || "Challenge", item.category || "Challenge");
        };

        const setBgMode = mode => {
          bgMode = mode;
          bgButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.challengeBg === bgMode));
          stage.style.backgroundImage = "";
          if (bgMode === "transparent") {
            baseImg.src = transparentRoadSrc;
          } else if (bgMode === "custom" && customBgSrc) {
            stage.style.backgroundImage = `url("${customBgSrc}")`;
            baseImg.src = transparentRoadSrc;
          } else {
            baseImg.src = defaultBgSrc;
          }
        };

        const renderChallenges = () => {
          layer.innerHTML = "";
          challenges.forEach(challenge => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "challenge-card";
            if (challenge.blurred) card.classList.add("challenge-blur");
            if (challenge.question) card.classList.add("challenge-question");
            card.classList.add("no-box");
            if (challenge.id === selectedId) card.classList.add("selected");
            card.dataset.challengeId = challenge.id;
            card.style.left = `${challenge.x}%`;
            card.style.top = `${challenge.y}%`;
            card.style.setProperty("--challenge-scale", 1);
            card.style.setProperty("--challenge-image-scale", challenge.scale);
            card.style.setProperty("--challenge-blur", `${challenge.blurAmount || 3}px`);
            card.style.setProperty("--challenge-question-x", `${challenge.questionX || 0}px`);
            card.style.setProperty("--challenge-question-y", `${challenge.questionY || 0}px`);
            if (challenge.item) {
              const img = document.createElement("img");
              img.className = "challenge-icon";
              img.alt = "";
              img.draggable = false;
              setIconImg(img, challenge.item);
              card.appendChild(img);
            } else {
              const plus = document.createElement("span");
              plus.className = "challenge-plus";
              plus.textContent = "+";
              card.appendChild(plus);
            }
            layer.appendChild(card);
          });
          renderControls();
        };

        const renderControls = () => {
          if (!controls) return;
          if (!challenges.length) {
            controls.innerHTML = '<div class="challenge-control-empty">Add a challenge to customize its image, secrecy, size, and position.</div>';
            return;
          }
          controls.innerHTML = challenges.map((challenge, index) => {
            const name = challenge.item?.name || "Empty Challenge";
            const thumb = challenge.item?.customSrc || challenge.item?.img || "";
            return `
              <div class="challenge-control-row" data-challenge-control="${challenge.id}">
                <img decoding="async" loading="lazy" class="challenge-mini-thumb" alt="" src="${thumb || placeholderSvg(String(index + 1), "Challenge")}" />
                <strong>#${index + 1} ${escapeHtml(name)}</strong>
                <button class="challenge-toggle-btn ${challenge.question ? "active" : ""}" type="button" data-challenge-toggle-btn="question">Question Mark</button>
                <button class="challenge-toggle-btn ${challenge.blurred ? "active" : ""}" type="button" data-challenge-toggle-btn="blurred">Blur</button>
                <label>Question Mark Position <input type="range" min="-90" max="90" step="1" value="${challenge.questionY || 0}" data-challenge-question-y></label>
                <label>Blur Amount <input type="range" min="0.5" max="10" step="0.1" value="${challenge.blurAmount || 3}" data-challenge-blur-amount></label>
                <label>Image Size <input type="range" min="0.45" max="3.2" step="0.01" value="${challenge.scale}" data-challenge-scale></label>
                <button class="tier-add-btn secondary" type="button" data-challenge-remove>Remove</button>
              </div>`;
          }).join("");
          controls.querySelectorAll(".challenge-mini-thumb").forEach((img, index) => {
            const item = challenges[index]?.item;
            if (item) setIconImg(img, item);
          });
        };

        const addChallenge = () => {
          if (challenges.length >= maxChallenges) {
            alert("You can add up to 10 challenges for now.");
            return;
          }
          const id = `challenge_${Date.now()}_${Math.random().toString(16).slice(2)}`;
          const position = [
            [28, 25], [52, 22], [73, 30], [66, 50], [44, 50],
            [28, 58], [38, 72], [58, 72], [76, 66], [50, 37]
          ][challenges.length] || [50, 50];
          challenges.push({ id, x: position[0], y: position[1], scale: 1, hidden: false, question: false, questionY: 0, blurred: false, blurAmount: 3, noBox: true, item: null });
          selectedId = id;
          renderChallenges();
        };

        const openPicker = id => {
          activeId = id;
          picker.classList.add("open");
          picker.setAttribute("aria-hidden", "false");
          renderPicker();
        };

        const closePicker = () => {
          picker.classList.remove("open");
          picker.setAttribute("aria-hidden", "true");
        };

        const renderPicker = () => {
          const query = (pickerSearch?.value || "").toLowerCase().trim();
          currentItems = getItems(currentPreset);
          const filtered = currentItems.filter(item => `${item.name} ${item.category || ""}`.toLowerCase().includes(query));
          pickerList.innerHTML = `
            <div class="screen-picker-category">
              <strong>${currentPreset === "maps" ? "Maps" : currentPreset === "weapons" ? "Weapons" : currentPreset}</strong>
              <div class="screen-picker-grid">
                ${filtered.map((item, index) => `
                  <button class="screen-picker-weapon challenge-picker-item" type="button" data-challenge-item-index="${index}">
                    <img decoding="async" loading="lazy" src="${item.img || placeholderSvg(item.name, item.category || "Challenge")}" alt="" draggable="false" />
                    <span>${escapeHtml(item.name)}</span>
                    <small>${escapeHtml(item.category || item.tier || "Challenge")}</small>
                  </button>`).join("")}
              </div>
            </div>`;
          pickerList.querySelectorAll(".challenge-picker-item").forEach((button, index) => {
            const item = filtered[index];
            const img = button.querySelector("img");
            if (item?.mapFiles) setMapImg(img, item);
          });
          pickerList.__challengeFilteredItems = filtered;
        };

        const chooseItem = item => {
          const challenge = challenges.find(c => c.id === activeId);
          if (!challenge) return;
          challenge.item = {...item};
          selectedId = challenge.id;
          renderChallenges();
          closePicker();
        };

        let drag = null;
        layer.addEventListener("pointerdown", event => {
          const card = event.target.closest(".challenge-card");
          if (!card) return;
          event.preventDefault();
          const challenge = challenges.find(c => c.id === card.dataset.challengeId);
          if (!challenge) return;
          selectedId = challenge.id;
          renderChallenges();
          const rect = stage.getBoundingClientRect();
          drag = {
            id: challenge.id,
            offsetX: (event.clientX - rect.left) / rect.width * 100 - challenge.x,
            offsetY: (event.clientY - rect.top) / rect.height * 100 - challenge.y,
            moved: false
          };
          card.setPointerCapture?.(event.pointerId);
        });

        layer.addEventListener("pointermove", event => {
          if (!drag) return;
          event.preventDefault();
          const rect = stage.getBoundingClientRect();
          const challenge = challenges.find(c => c.id === drag.id);
          if (!challenge) return;
          challenge.x = Math.max(2, Math.min(98, (event.clientX - rect.left) / rect.width * 100 - drag.offsetX));
          challenge.y = Math.max(2, Math.min(98, (event.clientY - rect.top) / rect.height * 100 - drag.offsetY));
          drag.moved = true;
          const card = layer.querySelector(`[data-challenge-id="${challenge.id}"]`);
          if (card) {
            card.style.left = `${challenge.x}%`;
            card.style.top = `${challenge.y}%`;
          }
        });

        layer.addEventListener("pointerup", event => {
          const card = event.target.closest(".challenge-card");
          const moved = drag?.moved;
          const id = drag?.id || card?.dataset.challengeId;
          drag = null;
          if (!moved && id) openPicker(id);
        });

        addBtn.addEventListener("click", addChallenge);
        clearBtn.addEventListener("click", () => {
          if (!challenges.length) return;
          if (confirm("Clear all challenges?")) {
            challenges = [];
            selectedId = null;
            renderChallenges();
          }
        });
        pickerClose.addEventListener("click", closePicker);
        picker.addEventListener("click", event => { if (event.target === picker) closePicker(); });
        pickerSearch.addEventListener("input", renderPicker);

        presetButtons.forEach(btn => {
          btn.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            if (btn.hasAttribute("data-challenge-custom-upload")) {
              if (!activeId && challenges.length) activeId = selectedId || challenges[challenges.length - 1].id;
              if (customItemInput) {
                customItemInput.value = "";
                customItemInput.click();
              }
              return;
            }
            currentPreset = btn.dataset.challengePreset || "weapons";
            presetButtons.forEach(b => b.classList.toggle("active", b === btn));
            renderPicker();
          });
        });

        pickerList.addEventListener("click", event => {
          const btn = event.target.closest("[data-challenge-item-index]");
          if (!btn) return;
          const item = pickerList.__challengeFilteredItems?.[Number(btn.dataset.challengeItemIndex)];
          if (item) chooseItem(item);
        });

        customItemInput.addEventListener("change", async () => {
          const file = customItemInput.files?.[0];
          if (!file) return;
          if (!activeId) {
            if (!challenges.length) addChallenge();
            activeId = selectedId || challenges[challenges.length - 1]?.id;
          }
          if (!activeId) return;
          const src = await fileToData(file);
          chooseItem({ name: file.name.replace(/\.[^.]+$/, "") || "Custom Image", category: "Custom", tier: "Custom", customSrc: src, img: src });
        });

        bgButtons.forEach(btn => {
          btn.addEventListener("click", async () => {
            const mode = btn.dataset.challengeBg || "default";
            if (mode === "custom") {
              customBgInput.value = "";
              customBgInput.click();
              return;
            }
            setBgMode(mode);
          });
        });

        customBgInput.addEventListener("change", async () => {
          const file = customBgInput.files?.[0];
          if (!file) return;
          customBgSrc = await fileToData(file);
          setBgMode("custom");
        });

        controls.addEventListener("input", event => {
          const row = event.target.closest("[data-challenge-control]");
          if (!row) return;
          const challenge = challenges.find(c => c.id === row.dataset.challengeControl);
          if (!challenge) return;

          const card = layer.querySelector(`[data-challenge-id="${challenge.id}"]`);

          if (event.target.matches("[data-challenge-scale]")) {
            challenge.scale = Number(event.target.value) || 1;
            card?.style.setProperty("--challenge-image-scale", challenge.scale);
            return;
          }

          if (event.target.matches("[data-challenge-blur-amount]")) {
            challenge.blurAmount = Number(event.target.value) || 3;
            card?.style.setProperty("--challenge-blur", `${challenge.blurAmount}px`);
            return;
          }

          if (event.target.matches("[data-challenge-question-y]")) {
            challenge.questionY = Number(event.target.value) || 0;
            card?.style.setProperty("--challenge-question-y", `${challenge.questionY}px`);
            return;
          }
        });

        controls.addEventListener("click", event => {
          const row = event.target.closest("[data-challenge-control]");
          if (!row) return;
          const challenge = challenges.find(c => c.id === row.dataset.challengeControl);
          if (!challenge) return;
          selectedId = challenge.id;
          const toggleBtn = event.target.closest("[data-challenge-toggle-btn]");
          if (toggleBtn) {
            event.preventDefault();
            event.stopPropagation();
            const key = toggleBtn.dataset.challengeToggleBtn;
            challenge[key] = !challenge[key];
            renderChallenges();
            return;
          }
          if (event.target.closest("[data-challenge-remove]")) {
            event.preventDefault();
            event.stopPropagation();
            challenges = challenges.filter(c => c.id !== challenge.id);
            if (selectedId === challenge.id) selectedId = null;
            renderChallenges();
          }
        });

        const loadImage = src => new Promise((resolve, reject) => {
          const img = new Image();
          if (!String(src).startsWith("data:") && !String(src).startsWith("blob:")) img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });

        const drawCover = (ctx, img, x, y, w, h) => {
          const ir = img.naturalWidth / img.naturalHeight;
          const cr = w / h;
          let dw, dh;
          if (ir > cr) { dh = h; dw = h * ir; } else { dw = w; dh = w / ir; }
          ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
        };

        const getLiveIconSrc = challenge => {
          const card = layer.querySelector(`[data-challenge-id="${challenge.id}"]`);
          const img = card?.querySelector("img.challenge-icon");
          return img?.src || challenge.item?.customSrc || challenge.item?.img || "";
        };

        downloadBtn.addEventListener("click", async () => {
          try {
            const W = 2560, H = 1440;
            const canvas = document.createElement("canvas");
            canvas.width = W; canvas.height = H;
            const ctx = canvas.getContext("2d");
            if (bgMode === "transparent") {
              const road = await loadImage(transparentRoadSrc);
              ctx.drawImage(road, 0, 0, W, H);
            } else if (bgMode === "custom" && customBgSrc) {
              const bg = await loadImage(customBgSrc);
              drawCover(ctx, bg, 0, 0, W, H);
              const road = await loadImage(transparentRoadSrc);
              ctx.drawImage(road, 0, 0, W, H);
            } else {
              const bg = await loadImage(defaultBgSrc);
              ctx.drawImage(bg, 0, 0, W, H);
            }

            for (const challenge of challenges) {
              const cx = challenge.x / 100 * W;
              const cy = challenge.y / 100 * H;
              const size = 104 * (W / stage.getBoundingClientRect().width);
              const iconSize = size * Number(challenge.scale || 1);
              if (false) {
                ctx.save();
                ctx.translate(cx, cy);
                ctx.fillStyle = "rgba(9, 14, 28, 0.42)";
                ctx.strokeStyle = "rgba(255,255,255,0.20)";
                ctx.lineWidth = 2;
                ctx.shadowColor = "rgba(0,0,0,0.28)";
                ctx.shadowBlur = 24;
                const r = size * 0.19;
                const x = -size/2, y = -size/2;
                ctx.beginPath();
                ctx.moveTo(x+r,y); ctx.lineTo(x+size-r,y); ctx.quadraticCurveTo(x+size,y,x+size,y+r);
                ctx.lineTo(x+size,y+size-r); ctx.quadraticCurveTo(x+size,y+size,x+size-r,y+size);
                ctx.lineTo(x+r,y+size); ctx.quadraticCurveTo(x,y+size,x,y+size-r);
                ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
                ctx.fill(); ctx.stroke();
                ctx.restore();
              }

              if (challenge.item) {
                try {
                  const icon = await loadImage(getLiveIconSrc(challenge));
                  ctx.save();
                  if (challenge.blurred) ctx.filter = `blur(${(Number(challenge.blurAmount) || 3) * 2}px)`;
                  ctx.shadowColor = "rgba(0,0,0,0.35)";
                  ctx.shadowBlur = 22;
                  ctx.drawImage(icon, cx - iconSize*0.44, cy - iconSize*0.44, iconSize*0.88, iconSize*0.88);
                  ctx.restore();
                } catch (err) {}
              } else {
                ctx.save();
                ctx.fillStyle = "rgba(255,255,255,0.90)";
                ctx.font = `${size*0.48}px Arial Black, Arial`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("+", cx, cy);
                ctx.restore();
              }

              if (challenge.question) {
                ctx.save();
                ctx.font = `1000 ${size*0.52}px Arial Black, Impact, sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = size*0.05;
                ctx.strokeStyle = "#ffffff";
                ctx.fillStyle = "#ff2626";
                const questionY = (Number(challenge.questionY) || 0) * (W / stage.getBoundingClientRect().width);
                ctx.strokeText("?", cx, cy - size*0.82 + questionY);
                ctx.fillText("?", cx, cy - size*0.82 + questionY);
                ctx.restore();
              }
            }

            canvas.toBlob(blob => {
              if (!blob) throw new Error("No blob");
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "kuda-challenge-road.png";
              document.body.appendChild(a);
              a.click();
              setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 250);
            }, "image/png");
          } catch (err) {
            console.error(err);
            alert("Download failed. Try running the site through localhost or GitHub Pages so the browser can export images.");
          }
        });

        setBgMode("default");
        renderChallenges();
      }


      function setupWeaponFusions(){
        const page = document.getElementById("weaponFusionsPage");
        if (!page) return;

        const slotBtns = [document.getElementById("fusionSlotA"), document.getElementById("fusionSlotB")];
        const resultSlot = document.getElementById("fusionResultSlot");
        const resultImg = resultSlot?.querySelector(".fusion-result-img");
        const resultName = resultSlot?.querySelector(".fusion-result-name");
        const resultRecipe = resultSlot?.querySelector(".fusion-result-recipe");
        const fuseBtn = document.getElementById("fusionFuseBtn");
        const clearBtn = document.getElementById("fusionClearBtn");
        const note = document.getElementById("fusionRecipeNote");
        const modal = document.getElementById("fusionPickerModal");
        const pickerGrid = document.getElementById("fusionPickerGrid");
        const pickerClose = document.getElementById("fusionPickerClose");
        const pickerSearch = document.getElementById("fusionPickerSearch");

        let activeFusionSlot = 0;
        let fusionSelections = [null, null];

        const getWeapon = name => allWeapons.find(w => w.name === name);
        const keyFor = (a, b) => [a, b].map(v => String(v || "").toLowerCase()).sort().join(" + ");

        const fusionRecipes = new Map([
          [keyFor("Assault Rifle", "Freeze Ray"), { result: "Permafrost", reason: "automatic rifle pressure frozen into Permafrost tech" }],
          [keyFor("Handgun", "Spray"), { result: "Uzi", reason: "a compact pistol upgraded into rapid-fire spray control" }],
          [keyFor("Pistol", "Spray"), { result: "Uzi", reason: "a pistol-style sidearm fused with spray fire rate" }],
          [keyFor("Revolver", "Spray"), { result: "Uzi", reason: "sidearm precision mixed with spray fire rate" }],
          [keyFor("Bow", "Crossbow"), { result: "RPG", reason: "projectile weapons fused into a heavier launcher" }],
          [keyFor("Grenade", "RPG"), { result: "Grenade Launcher", reason: "explosive power reshaped for repeat launches" }],
          [keyFor("Energy Rifle", "Freeze Ray"), { result: "Permafrost", reason: "energy tech chilled into a freezing rifle variant" }],
          [keyFor("Energy Rifle", "Energy Pistols"), { result: "Exogun", reason: "energy weapons compressed into a high-tech exo weapon" }],
          [keyFor("Sniper", "Revolver"), { result: "Exogun", reason: "precision damage fused into a futuristic sidearm" }],
          [keyFor("Shotgun", "Shorty"), { result: "Flamethrower", reason: "close-range burst power becomes area pressure" }],
          [keyFor("Katana", "Scythe"), { result: "Battle Axe", reason: "two blades merged into a heavier melee weapon" }],
          [keyFor("Knife", "Daggers"), { result: "Katana", reason: "small blades forged into one stronger blade" }],
          [keyFor("Fists", "Riot Shield"), { result: "Spear", reason: "brawler defense converted into reach and control" }],
          [keyFor("Grappler", "Warpstone"), { result: "Warper", reason: "movement utility turned into full teleport pressure" }],
          [keyFor("Subspace Tripmine", "Grenade"), { result: "Satchel", reason: "trap explosives fused into controlled detonation" }],
          [keyFor("Molotov", "Grenade"), { result: "Flamethrower", reason: "fire explosives refined into constant flame output" }],
          [keyFor("Jump Pad", "Grappler"), { result: "Warpstone", reason: "mobility tools converted into instant repositioning" }],
          [keyFor("Paintball Gun", "Slingshot"), { result: "Bow", reason: "arc projectiles fused into a stronger ranged weapon" }],
          [keyFor("Minigun", "Assault Rifle"), { result: "Burst Rifle", reason: "automatic fire stabilized into burst control" }],
          [keyFor("Scepter", "War Horn"), { result: "Warper", reason: "support magic and sound pressure create battlefield control" }],
          [keyFor("Medkit", "Elixir"), { result: "Scepter", reason: "support items fused into a magical support weapon" }],
          [keyFor("Smoke Grenade", "Flashbang"), { result: "Freeze Ray", reason: "utility disruption hardened into crowd control" }]
        ]);

        const categoryFallbacks = [
          { test: (a,b) => a.category === "Primary" && b.category === "Primary", result: "Burst Rifle", reason: "two primaries balanced into a flexible rifle" },
          { test: (a,b) => a.category === "Secondary" && b.category === "Secondary", result: "Uzi", reason: "two secondaries fused into fast backup pressure" },
          { test: (a,b) => a.category === "Melee" && b.category === "Melee", result: "Battle Axe", reason: "melee power stacked into a heavier blade" },
          { test: (a,b) => a.category === "Utility" && b.category === "Utility", result: "Warpstone", reason: "utility tools fused into stronger mobility control" },
          { test: (a,b) => [a.category,b.category].includes("Primary") && [a.category,b.category].includes("Utility"), result: "Warper", reason: "a weapon plus utility creates map-control pressure" },
          { test: (a,b) => [a.category,b.category].includes("Primary") && [a.category,b.category].includes("Secondary"), result: "Exogun", reason: "main weapon damage mixed with backup flexibility" },
          { test: (a,b) => [a.category,b.category].includes("Melee") && [a.category,b.category].includes("Utility"), result: "Spear", reason: "melee range mixed with utility control" },
          { test: (a,b) => [a.category,b.category].includes("Melee") && [a.category,b.category].includes("Secondary"), result: "Daggers", reason: "close-range pressure becomes quick melee burst" }
        ];

        const setFusionImage = (img, weapon) => {
          if (!img || !weapon) return;
          img.onerror = null;
          img.src = weapon.img || placeholderSvg(weapon.name, weapon.category || "Weapon");
          img.alt = weapon.name;
          img.hidden = false;
        };

        const renderFusionSlot = index => {
          const btn = slotBtns[index];
          if (!btn) return;
          const weapon = fusionSelections[index];
          const img = btn.querySelector(".fusion-weapon-img");
          const plus = btn.querySelector(".fusion-plus");
          const name = btn.querySelector(".fusion-weapon-name");
          btn.classList.toggle("has-weapon", Boolean(weapon));
          if (weapon) {
            setFusionImage(img, weapon);
            if (plus) plus.hidden = true;
            if (name) name.textContent = weapon.name;
          } else {
            if (img) { img.hidden = true; img.removeAttribute("src"); }
            if (plus) plus.hidden = false;
            if (name) name.textContent = "Choose Weapon";
          }
        };

        const pickFusionResult = () => {
          const [a, b] = fusionSelections;
          if (!a || !b) return null;
          const direct = fusionRecipes.get(keyFor(a.name, b.name));
          if (direct && getWeapon(direct.result)) return direct;
          const fallback = categoryFallbacks.find(rule => rule.test(a, b));
          if (fallback && getWeapon(fallback.result)) return fallback;
          const pool = allWeapons.filter(w => w.name !== a.name && w.name !== b.name);
          const seed = (a.name + b.name).split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
          const result = pool[seed % pool.length] || allWeapons[0];
          return { result: result.name, reason: "Rivals RNG stabilized the fusion into a new weapon" };
        };

        const renderResult = (animate = false) => {
          const [a, b] = fusionSelections;
          if (!a || !b) {
            if (resultImg) { resultImg.hidden = true; resultImg.removeAttribute("src"); }
            if (resultName) resultName.textContent = "Select 2 weapons";
            if (resultRecipe) resultRecipe.textContent = "Waiting for ingredients...";
            if (note) note.textContent = "Tip: try combinations like Assault Rifle + Freeze Ray, Handgun + Spray, or Bow + Crossbow.";
            resultSlot?.classList.remove("is-fusing", "has-result");
            return;
          }
          const fusion = pickFusionResult();
          const resultWeapon = getWeapon(fusion.result) || allWeapons[0];
          resultSlot?.classList.toggle("is-fusing", Boolean(animate));
          resultSlot?.classList.add("has-result");
          if (animate) setTimeout(() => resultSlot?.classList.remove("is-fusing"), 650);
          setFusionImage(resultImg, resultWeapon);
          if (resultName) resultName.textContent = resultWeapon.name;
          if (resultRecipe) resultRecipe.textContent = `${a.name} + ${b.name}`;
          if (note) note.textContent = `${a.name} + ${b.name} → ${resultWeapon.name}: ${fusion.reason}.`;
        };

        const renderPicker = () => {
          const q = (pickerSearch?.value || "").toLowerCase().trim();
          const items = allWeapons.filter(w => `${w.name} ${w.category} ${w.tier}`.toLowerCase().includes(q));
          pickerGrid.innerHTML = items.map(weapon => `
            <button class="fusion-picker-card" type="button" data-fusion-pick="${weapon.name}">
              <img src="${weapon.img || placeholderSvg(weapon.name, weapon.category)}" alt="" draggable="false" />
              <span>${escapeHtml(weapon.name)}</span>
              <small>${escapeHtml(weapon.category || "Weapon")}</small>
            </button>
          `).join("");
        };

        const openPicker = index => {
          activeFusionSlot = index;
          modal?.classList.add("open");
          modal?.setAttribute("aria-hidden", "false");
          if (pickerSearch) pickerSearch.value = "";
          renderPicker();
        };
        const closePicker = () => {
          modal?.classList.remove("open");
          modal?.setAttribute("aria-hidden", "true");
        };
        slotBtns.forEach((btn, index) => btn?.addEventListener("click", () => openPicker(index)));
        pickerClose?.addEventListener("click", closePicker);
        modal?.addEventListener("click", event => { if (event.target === modal) closePicker(); });
        pickerSearch?.addEventListener("input", renderPicker);
        pickerGrid?.addEventListener("click", event => {
          const btn = event.target.closest("[data-fusion-pick]");
          if (!btn) return;
          const weapon = getWeapon(btn.dataset.fusionPick);
          if (!weapon) return;
          fusionSelections[activeFusionSlot] = weapon;
          renderFusionSlot(activeFusionSlot);
          renderResult(true);
          closePicker();
        });
        fuseBtn?.addEventListener("click", () => renderResult(true));
        clearBtn?.addEventListener("click", () => {
          fusionSelections = [null, null];
          renderFusionSlot(0);
          renderFusionSlot(1);
          renderResult(false);
        });
        renderFusionSlot(0);
        renderFusionSlot(1);
        renderResult(false);
      }


      setupWeaponFusions();
      setupChallengeRoadBuilder();
      setupTierListBuilder();
      setupThumbnailBuilder();
      renderScreenSlots();
      setActivePage(window.__RIVALS_TOOLS_PAGE__ || "home");
    })();


    (function setupCursorBubble(){
      try {
        const toggleBtn = document.getElementById('cursorBubbleToggle');
        const applyCursorToggleState = () => {
          const disabled = localStorage.getItem('kudaCursorBubbleDisabled') === '1';
          document.body.classList.toggle('cursor-bubble-disabled', disabled);
          toggleBtn?.classList.toggle('disabled', disabled);
          toggleBtn?.setAttribute('aria-pressed', String(!disabled));
          toggleBtn?.setAttribute('title', disabled ? 'Enable cursor bubble' : 'Disable cursor bubble');
        };
        toggleBtn?.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          const disabled = localStorage.getItem('kudaCursorBubbleDisabled') === '1';
          localStorage.setItem('kudaCursorBubbleDisabled', disabled ? '0' : '1');
          applyCursorToggleState();
        });
        applyCursorToggleState();

        if (!window.matchMedia || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';
        bubble.setAttribute('aria-hidden', 'true');
        document.body.appendChild(bubble);

        const hoverSelector = [
          'button',
          'a[href]',
          '.challenge-card',
          '.challenge-picker-item',
          '.home-tool-card',
          '.page-tab',
          '.thumb-template-tab',
          '.screen-picker-weapon',
          '.screen-picker-skin',
          '.thumb-item-slot',
          '.thumb2-slot',
          '.screen-loadout-slot',
          '.bg-option',
          '.thumb-bg-btn',
          '.luck-btn',
          '.mode-toggle',
          '.rarity-filter-btn',
          '.tier-picker-option',
          '.tier-item-card'
        ].join(',');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let hoverEl = null;
        const current = { x: mouseX, y: mouseY, w: 52, h: 52, r: 999, o: 0 };
        const target = { x: mouseX, y: mouseY, w: 52, h: 52, r: 999, o: 0 };

        const lerp = (a, b, t) => a + (b - a) * t;
        const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

        const setButtonTarget = el => {
          const rect = el.getBoundingClientRect();
          const padX = clamp(rect.width * 0.12, 16, 34);
          const padY = clamp(rect.height * 0.24, 14, 28);
          target.x = rect.left + rect.width / 2;
          target.y = rect.top + rect.height / 2;
          target.w = rect.width + padX * 2;
          target.h = rect.height + padY * 2;
          target.r = Math.min(42, target.h / 2 + 16);
          target.o = 1;
          bubble.classList.add('is-hovering');
        };

        const setCursorTarget = () => {
          target.x = mouseX;
          target.y = mouseY;
          target.w = 52;
          target.h = 52;
          target.r = 999;
          target.o = 0.9;
          bubble.classList.remove('is-hovering');
        };

        document.addEventListener('pointermove', event => {
          mouseX = event.clientX;
          mouseY = event.clientY;
          if (hoverEl && document.documentElement.contains(hoverEl)) setButtonTarget(hoverEl);
          else setCursorTarget();
        }, { passive: true });

        document.addEventListener('mouseover', event => {
          const el = event.target && event.target.closest ? event.target.closest(hoverSelector) : null;
          if (!el || bubble.contains(el)) return;
          hoverEl = el;
          setButtonTarget(hoverEl);
        }, true);

        document.addEventListener('mouseout', event => {
          if (!hoverEl) return;
          const next = event.relatedTarget;
          if (next && hoverEl.contains(next)) return;
          hoverEl = null;
          setCursorTarget();
        }, true);

        window.addEventListener('scroll', () => {
          if (hoverEl && document.documentElement.contains(hoverEl)) setButtonTarget(hoverEl);
        }, { passive: true });

        window.addEventListener('resize', () => {
          if (hoverEl && document.documentElement.contains(hoverEl)) setButtonTarget(hoverEl);
        }, { passive: true });

        document.addEventListener('mouseleave', () => {
          hoverEl = null;
          target.o = 0;
        });

        const animate = () => {
          const speed = hoverEl ? 0.24 : 0.17;
          current.x = lerp(current.x, target.x, speed);
          current.y = lerp(current.y, target.y, speed);
          current.w = lerp(current.w, target.w, speed);
          current.h = lerp(current.h, target.h, speed);
          current.r = lerp(current.r, target.r, speed);
          current.o = lerp(current.o, target.o, 0.18);

          bubble.style.width = `${current.w}px`;
          bubble.style.height = `${current.h}px`;
          bubble.style.borderRadius = `${current.r}px`;
          bubble.style.opacity = String(current.o);
          bubble.style.transform = `translate3d(${current.x - current.w / 2}px, ${current.y - current.h / 2}px, 0)`;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      } catch (err) {}
    })();


(function setupSettingResetButtons(){
  const roots = ['#thumbnailBuilderPage', '#loadoutScreenPage'];
  const selector = 'input:not([type="file"]):not([type="hidden"]), select, textarea';

  const closestSettingWrap = input =>
    input.closest('.thumb-mini-control, .zoom-control, .thumb-check, label') || input.parentElement;

  const rememberDefault = input => {
    if (input.dataset.resetReady === '1') return;
    input.dataset.resetReady = '1';
    if (input.type === 'checkbox' || input.type === 'radio') {
      input.dataset.defaultChecked = String(input.defaultChecked);
    } else if (input.tagName === 'SELECT') {
      const selected = Array.from(input.options).find(opt => opt.defaultSelected);
      input.dataset.defaultValue = selected ? selected.value : input.value;
    } else {
      input.dataset.defaultValue = input.defaultValue !== undefined ? input.defaultValue : input.value;
    }
  };

  const addReset = input => {
    if (!input || input.dataset.hasResetButton === '1') return;
    if (input.closest('.setting-reset-ignore')) return;

    rememberDefault(input);

    const wrap = closestSettingWrap(input);
    if (!wrap) return;
    if (wrap.querySelector(':scope > .setting-reset-btn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'setting-reset-btn';
    btn.title = 'Reset this setting';
    btn.setAttribute('aria-label', 'Reset this setting');
    btn.textContent = '↺';
    btn.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = input.dataset.defaultChecked === 'true';
      } else {
        input.value = input.dataset.defaultValue ?? '';
      }

      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    wrap.classList.add('has-reset');
    input.dataset.hasResetButton = '1';
    wrap.appendChild(btn);
  };

  const scan = () => {
    roots.forEach(rootSelector => {
      const root = document.querySelector(rootSelector);
      if (!root) return;
      root.querySelectorAll(selector).forEach(addReset);
    });
  };

  scan();
  setTimeout(scan, 250);
  setTimeout(scan, 1200);
})();


(function protectSite(){
      const blockedKeys = new Set(['F12']);
      const blockedCtrlShift = new Set(['i','j','c','k','e']);
      const blockedCtrl = new Set(['u','s','p']);
      const block = event => {
        event.preventDefault();
        event.stopPropagation();
        return false;
      };

      document.addEventListener('contextmenu', block, { capture: true });
      document.addEventListener('dragstart', event => {
        if (event.target && event.target.closest && (event.target.closest('.tier-item-card') || event.target.closest('.challenge-card'))) return;
        return block(event);
      }, { capture: true });
      document.addEventListener('selectstart', event => {
        if (!['INPUT', 'TEXTAREA'].includes((event.target && event.target.tagName) || '')) block(event);
      }, { capture: true });

      document.addEventListener('keydown', event => {
        const key = String(event.key || '').toLowerCase();
        const code = String(event.code || '').toLowerCase();

        const blockedCombo =
          blockedKeys.has(event.key) ||
          code === 'f12' ||
          (event.ctrlKey && event.shiftKey && blockedCtrlShift.has(key)) ||
          (event.metaKey && event.altKey && blockedCtrlShift.has(key)) ||
          (event.ctrlKey && blockedCtrl.has(key)) ||
          (event.metaKey && blockedCtrl.has(key));

        if (blockedCombo) return block(event);
      }, { capture: true });

      let armed = false;
      let reloading = false;

      const titleImg = document.querySelector('.title-img');
      const titleSrc = titleImg ? titleImg.getAttribute('src') : '';

      const triggerRefresh = () => {
        if (reloading || !armed) return;
        reloading = true;
        document.documentElement.style.filter = 'blur(2px) brightness(0.65)';
        setTimeout(() => location.reload(), 120);
      };

      const verifyProtectedHeader = () => {
        if (!armed) return;

        const currentHeader = document.querySelector('.header');
        const currentTitleImg = document.querySelector('.title-img');
        if (!currentHeader || !currentTitleImg) {
          triggerRefresh();
          return;
        }

        if (
          ![titleSrc, window.__kudaRandomizerTitleSrc, window.__kudaScreenTitleSrc, window.__kudaHomeTitleSrc, window.__kudaThumbnailTitleSrc, window.__kudaTierTitleSrc, window.__kudaChallengeTitleSrc, window.__kudaFusionTitleSrc, window.__kudaChallengeTitleSrc].filter(Boolean).includes(currentTitleImg.getAttribute('src'))
        ) {
          triggerRefresh();
        }
      };

      setTimeout(() => {
        armed = true;
        verifyProtectedHeader();

        const headerObserver = new MutationObserver(() => {
          clearTimeout(window.__kudaHeaderProtectTick);
          window.__kudaHeaderProtectTick = setTimeout(verifyProtectedHeader, 60);
        });

        const header = document.querySelector('.header');
        if (header) {
          headerObserver.observe(header, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeOldValue: true
          });
        }

        const bodyObserver = new MutationObserver(() => {
          clearTimeout(window.__kudaBodyProtectTick);
          window.__kudaBodyProtectTick = setTimeout(() => {
            if (!document.querySelector('.header')) triggerRefresh();
          }, 80);
        });

        bodyObserver.observe(document.body, { childList: true, subtree: false });
        setInterval(verifyProtectedHeader, 1500);
      }, 900);
    })();

  