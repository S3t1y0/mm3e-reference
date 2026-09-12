/**
 * Mutants & Masterminds 3rd Edition Rules Data
 * Categorized reference for combat, actions, maneuvers, conditions, and hero points.
 */

const SECTIONS_DATA = [
    {
        id: "movement",
        title: "Movement",
        limit: "Limited by Speed rank",
        subtitle: "You can move at your base speed rank as a move action. Accelerated movement (double move) uses two move actions.",
        color: "#f59e0b", // Amber / Flare
        items: [
            {
                title: "Move",
                subtitle: "Distance = Speed rank in distance rank",
                icon: "move",
                type: "Move",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "You can move up to your normal speed rank in a single move action (Speed 0 = 9 meters, Speed 1 = 18 meters, Speed 7 = 1 km/round).",
                    "You may split movement before and after a standard action if desired.",
                    "Moving across difficult terrain halves your effective speed or requires an Acrobatics/Athletics check."
                ]
            },
            {
                title: "Acrobatics / Agile Feat",
                subtitle: "Cross obstacles or balance",
                icon: "acrobatics",
                type: "Move",
                reference: "Hero's Handbook, p. 110",
                bullets: [
                    "Make an Acrobatics check (DC 10 to 20+) to cross narrow surfaces, swing from ropes, or navigate hazardous terrain.",
                    "Failure by 5 or more means you fall or become off-balance (Vulnerable).",
                    "Can be used as a free action if your Acrobatics skill is high enough or with the Agile Feat."
                ]
            },
            {
                title: "Crawl",
                subtitle: "Move while prone (Speed -1)",
                icon: "crawl",
                type: "Move",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "You can crawl up to Speed rank -1 (typically 4.5 meters for normal humans).",
                    "Crawling provokes no additional penalties beyond the normal Prone condition.",
                    "Standing up from prone requires a separate move action."
                ]
            },
            {
                title: "Escape",
                subtitle: "Break free from a grab or restraint",
                icon: "escape",
                type: "Move",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Make an Athletics, Acrobatics, or Sleight of Hand check opposed by the grabber's Strength or grab check.",
                    "Success frees you from the grab and removes Impaired/Immobile or Restrained condition.",
                    "Can also be used to escape physical bonds or ropes."
                ]
            },
            {
                title: "Manipulate Object",
                subtitle: "Interact with equipment or devices",
                icon: "manipulate",
                type: "Move",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Draw or holster a weapon, retrieve a stowed item, open a door, push a lever, or reload a device.",
                    "Minor interactions (like flipping a light switch or dropping an item) are Free actions.",
                    "Complex devices may require a Technology check as a standard or longer action."
                ]
            },
            {
                title: "Stand Up",
                subtitle: "Recover from prone",
                icon: "stand",
                type: "Move",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Stand up from prone or lying down to remove the Prone condition.",
                    "With the Instant Up advantage or an Acrobatics DC 20 check, you can stand as a Free action."
                ]
            }
        ]
    },
    {
        id: "standard",
        title: "Standard Action",
        limit: "1 / turn",
        subtitle: "Main combat actions, attacks, or activating standard-duration powers and effects.",
        color: "#ef4444", // Crimson / Vibrant Red
        items: [
            {
                title: "Attack (Close)",
                subtitle: "d20 + Close Attack vs. Parry",
                icon: "attack-close",
                type: "Standard",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "Roll d20 + Close Combat bonus vs. Target's Parry defense.",
                    "On a hit, the target makes a resistance check (typically Toughness vs. DC 15 + Damage rank).",
                    "Natural 20 is a Critical Hit (+5 to effect DC, or adds an alternate affliction/effect)."
                ]
            },
            {
                title: "Attack (Ranged)",
                subtitle: "d20 + Ranged Attack vs. Dodge",
                icon: "attack-ranged",
                type: "Standard",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "Roll d20 + Ranged Combat bonus vs. Target's Dodge defense.",
                    "Range penalties: Short (no penalty), Medium (-2 to attack), Long (-5 to attack).",
                    "Shooting into close combat imposes a -4 attack penalty unless you have the Precise advantage."
                ]
            },
            {
                title: "Aid",
                subtitle: "+2 or +5 to ally's check",
                icon: "aid",
                type: "Standard",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "Roll d20 + Attack or relevant skill against DC 10.",
                    "Success: Ally gains +2 circumstance bonus on that check.",
                    "Three or more degrees of success (roll 20+): Ally gains +5 circumstance bonus.",
                    "Failure by 2 or more degrees imposes a -2 penalty to ally's check."
                ]
            },
            {
                title: "Charge",
                subtitle: "Move and close attack (+2/-2)",
                icon: "charge",
                type: "Standard",
                reference: "Hero's Handbook, p. 246",
                bullets: [
                    "Combine a standard close attack with your movement into one action.",
                    "You gain a +2 circumstance bonus to the attack check.",
                    "You suffer a -2 circumstance penalty to your active defenses until the start of your next turn."
                ]
            },
            {
                title: "Defend",
                subtitle: "Focus entirely on defense",
                icon: "defend",
                type: "Standard",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Until the start of your next turn, roll d20 + active defense (Dodge/Parry).",
                    "If the roll is 10 or less, treat it as 10 (giving you a minimum result of 10 + defense bonus).",
                    "Excellent tactical maneuver when pinned down or waiting for team support."
                ]
            },
            {
                title: "Disarm",
                subtitle: "Knock item from target's grip",
                icon: "disarm",
                type: "Standard",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Make an attack check vs. target's Parry with a -2 penalty (no penalty with Improved Disarm).",
                    "If successful, make an opposed check of Damage / Strength vs. target's Strength or defense.",
                    "If you win, the target drops the item. If you beat them by 5+, you can snatch the item."
                ]
            },
            {
                title: "Grab",
                subtitle: "Pin or hold opponent",
                icon: "grab",
                type: "Standard",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Make an unarmed attack check vs. target's Dodge or Parry.",
                    "If successful, target makes a Dodge or Strength check vs. your Strength or Grab check.",
                    "Success: Target is Impaired & Vulnerable (or Immobile & Defenseless if you succeed by 2+ degrees).",
                    "Maintaining a grab takes a move action on subsequent turns."
                ]
            },
            {
                title: "Smash",
                subtitle: "Strike an inanimate object",
                icon: "smash",
                type: "Standard",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Attack an inanimate unattended object (automatically hits in close combat, or defense = 10 + size mod).",
                    "Object rolls Toughness check vs. Damage DC.",
                    "Success damages or destroys the object based on its Toughness rank."
                ]
            },
            {
                title: "Trip",
                subtitle: "Knock target prone",
                icon: "trip",
                type: "Standard",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Make an unarmed close attack check vs. target's Parry.",
                    "Opposed check: Your Acrobatics or Athletics vs. target's Acrobatics or Athletics.",
                    "If you win, target falls Prone. (If you fail by 5+, target may trip you instead)."
                ]
            },
            {
                title: "Ready",
                subtitle: "Prepare response to a trigger",
                icon: "ready",
                type: "Standard",
                reference: "Hero's Handbook, p. 247",
                bullets: [
                    "Specify an action and the trigger condition (e.g., 'I will shoot the villain when he opens the blast door').",
                    "When the trigger occurs, you execute your prepared action as a reaction.",
                    "If the trigger does not occur before your next turn, the readied action is lost."
                ]
            }
        ]
    },
    {
        id: "free",
        title: "Free Action",
        limit: "Reasonable amount / turn",
        subtitle: "Minor actions requiring little to no time, performed without impeding standard or move actions.",
        color: "#10b981", // Emerald / Mint Green
        items: [
            {
                title: "Drop Item",
                subtitle: "Release object from hand",
                icon: "drop",
                type: "Free",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Drop an item you are holding into your space or immediately adjacent.",
                    "Does not use any movement or standard actions.",
                    "To throw an item accurately, use an Attack action."
                ]
            },
            {
                title: "Drop Prone",
                subtitle: "Drop to ground (+5 vs range)",
                icon: "prone",
                type: "Free",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Drop flat onto the ground as a free action.",
                    "Grants +5 cover bonus to Dodge against ranged attacks from more than 5 meters away.",
                    "Imposes a -5 penalty against close attacks and makes your melee attacks -5."
                ]
            },
            {
                title: "Speak / Communicate",
                subtitle: "Short phrase or shout",
                icon: "speak",
                type: "Free",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Deliver a short sentence, command, or shout to allies during combat.",
                    "Lengthier monologues or complex negotiations may take a standard action or GM discretion."
                ]
            },
            {
                title: "Cease / Maintain Effect",
                subtitle: "Turn off sustained power",
                icon: "cease",
                type: "Free",
                reference: "Hero's Handbook, p. 248",
                bullets: [
                    "Cease any sustained or continuous power you have active at any time.",
                    "Maintaining a sustained power takes a free action once each round."
                ]
            }
        ]
    },
    {
        id: "reaction",
        title: "Reaction",
        limit: "As triggers occur",
        subtitle: "Instant actions taken in response to another action or environmental trigger, even outside your turn.",
        color: "#06b6d4", // Electric Cyan
        items: [
            {
                title: "Countering",
                subtitle: "Oppose a power with an opposite",
                icon: "counter",
                type: "Reaction",
                reference: "Hero's Handbook, p. 211",
                bullets: [
                    "Use a power to nullify an incoming power with opposing descriptor (e.g. Cold counters Fire, Water counters Electricity).",
                    "Requires a readied action, or a Hero Point / Extra Effort to counter instantly as a reaction.",
                    "Opposed check: Power rank vs. incoming power rank. Highest check wins."
                ]
            },
            {
                title: "Triggered Power",
                subtitle: "Power primed with condition",
                icon: "triggered",
                type: "Reaction",
                reference: "Hero's Handbook, p. 195",
                bullets: [
                    "Powers bought with the Triggered modifier go off automatically when the defined trigger occurs.",
                    "Examples: Minefield traps, reactive force fields, contingency teleports."
                ]
            },
            {
                title: "Deflect / Active Reaction",
                subtitle: "Deflect incoming attacks for allies",
                icon: "deflect",
                type: "Reaction",
                reference: "Hero's Handbook, p. 157",
                bullets: [
                    "Use the Deflect power to protect yourself or an ally within range against ranged attacks.",
                    "Roll d20 + Deflect rank (treat 1-10 as 10) to determine the effective defense against the attack."
                ]
            }
        ]
    },
    {
        id: "maneuvers",
        title: "Combat Maneuvers",
        limit: "Apply to attacks",
        subtitle: "Tactical adjustments to balance offense, defense, accuracy, and sheer superhuman power.",
        color: "#8b5cf6", // Royal Amethyst
        items: [
            {
                title: "Accurate Attack",
                subtitle: "Trade Effect DC for Attack (+1 to +5)",
                icon: "accurate",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 249",
                bullets: [
                    "Trade up to -5 on Effect rank/DC for up to +5 on your Attack check.",
                    "Must choose the modifier before rolling the attack check.",
                    "Cannot increase your attack bonus beyond power level limits unless you possess the Accurate Attack advantage."
                ]
            },
            {
                title: "All-Out Attack",
                subtitle: "Trade Active Defense for Attack (+1 to +5)",
                icon: "all-out",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 249",
                bullets: [
                    "Trade up to -5 on Dodge & Parry active defenses for up to +5 on your Attack check.",
                    "Penalty lasts until the start of your next turn.",
                    "Requires the All-Out Attack advantage to exceed the default trade-off limits."
                ]
            },
            {
                title: "Defensive Attack",
                subtitle: "Trade Attack for Active Defense (+1 to +5)",
                icon: "defensive",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 249",
                bullets: [
                    "Trade up to -5 on your Attack check for up to +5 bonus to Dodge & Parry active defenses.",
                    "Bonus lasts until the start of your next turn.",
                    "Requires the Defensive Attack advantage to exceed default limits."
                ]
            },
            {
                title: "Power Attack",
                subtitle: "Trade Attack for Effect DC (+1 to +5)",
                icon: "power-attack",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 250",
                bullets: [
                    "Trade up to -5 on your Attack check for up to +5 bonus to the Effect rank / Toughness DC.",
                    "The ultimate high-damage maneuver against slow, heavily armored opponents.",
                    "Requires the Power Attack advantage to exceed default limits."
                ]
            },
            {
                title: "Slam Attack",
                subtitle: "Charge slam using speed rank",
                icon: "slam",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 250",
                bullets: [
                    "Fly or run full speed into a target to deliver a devastating slam attack.",
                    "Damage rank = Speed rank (or your Strength rank +1, whichever is higher, up to PL caps).",
                    "You also suffer a resistance check against the target's Toughness -1 or your own momentum!"
                ]
            },
            {
                title: "Surprise Attack",
                subtitle: "Attack while target is unaware",
                icon: "surprise",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 250",
                bullets: [
                    "Attacking a target who cannot perceive you or is caught completely off-guard.",
                    "The target is Vulnerable (halves active defenses) and suffers a -5 circumstance penalty.",
                    "Cannot use active defenses against surprise unless they have Uncanny Dodge."
                ]
            },
            {
                title: "Team Attack",
                subtitle: "Coordinated assault (+2 or +5 DC)",
                icon: "team",
                type: "Maneuver",
                reference: "Hero's Handbook, p. 250",
                bullets: [
                    "Multiple heroes attack the same target in the same round with similar attacks (within 5 ranks).",
                    "Primary attacker rolls attack check. Secondary allies roll attack checks against DC 10.",
                    "1 success: +2 to primary attacker's effect DC. 3+ successes: +5 to effect DC."
                ]
            }
        ]
    },
    {
        id: "conditions",
        title: "Conditions & Afflictions",
        limit: "Status & Penalties",
        subtitle: "Harmful or debilitating status effects imposed by powers, damage, and hazards.",
        color: "#f43f5e", // Rose / Alert Coral
        items: [
            {
                title: "Dazed",
                subtitle: "Limited to free + 1 standard/move action",
                icon: "dazed",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "You can take only a single standard or move action each turn (plus free actions).",
                    "You cannot take both a standard action and a move action in the same round.",
                    "Common 2nd-degree damage and affliction result."
                ]
            },
            {
                title: "Staggered",
                subtitle: "Dazed + can only take standard or move",
                icon: "staggered",
                type: "Condition",
                reference: "Hero's Handbook, p. 258",
                bullets: [
                    "Limited to a single standard or move action each turn (like Dazed).",
                    "If you suffer another Staggered condition from damage while already Staggered, you become Incapacitated!"
                ]
            },
            {
                title: "Defenseless",
                subtitle: "Active defense = 0; vulnerable to Crits",
                icon: "defenseless",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "Your active defense bonuses (Dodge and Parry) are 0.",
                    "Attackers gain a +5 circumstance bonus on attack checks against you in close combat.",
                    "Attacks against a defenseless target can be automatic Critical Hits or Coup de Grace."
                ]
            },
            {
                title: "Vulnerable",
                subtitle: "Active defenses halved",
                icon: "vulnerable",
                type: "Condition",
                reference: "Hero's Handbook, p. 258",
                bullets: [
                    "Your Dodge and Parry defense bonuses are halved (round up).",
                    "Common effect of being caught off-guard, surprised, or grappled."
                ]
            },
            {
                title: "Impaired / Disabled",
                subtitle: "-2 penalty (-5 if Disabled)",
                icon: "impaired",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "Impaired: -2 circumstance penalty on all checks.",
                    "Disabled: -5 circumstance penalty on all checks.",
                    "Affects attack checks, defense checks, and skill checks."
                ]
            },
            {
                title: "Hindered / Immobile",
                subtitle: "Speed halved (or Speed = 0)",
                icon: "hindered",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "Hindered: Your movement speed rank is reduced by 1 (halves distance).",
                    "Immobile: Your movement speed rank is 0, and you cannot move from your current space (though you can still take actions)."
                ]
            },
            {
                title: "Incapacitated",
                subtitle: "Unconscious or paralyzed, defenseless",
                icon: "incapacitated",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "You are defenseless, stunned, and prone (typically unconscious).",
                    "You cannot take any actions. Senses are impaired or nonexistent.",
                    "Subsequent damage while incapacitated can lead to the Dying condition."
                ]
            },
            {
                title: "Compelled / Controlled",
                subtitle: "Mind-controlled by enemy",
                icon: "brain",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "Compelled: You are forced to carry out the controller's orders, limited to standard actions.",
                    "Controlled: Controller has complete command of all your actions, movements, and powers."
                ]
            },
            {
                title: "Blind",
                subtitle: "Cannot see; visual unawareness",
                icon: "blind",
                type: "Condition",
                reference: "Hero's Handbook, p. 257",
                bullets: [
                    "Completely unable to see. Visual skill checks automatically fail.",
                    "All opponents have total concealment (+5 defense against you, or DC 10 flat check to target them).",
                    "You are Hindered (half speed) and have -5 on checks relying on vision."
                ]
            },
            {
                title: "Prone",
                subtitle: "Lying flat; +5 vs ranged, -5 vs melee",
                icon: "prone",
                type: "Condition",
                reference: "Hero's Handbook, p. 258",
                bullets: [
                    "+5 circumstance bonus to Dodge defense against ranged attacks from 5+ meters away.",
                    "-5 circumstance penalty to Dodge and Parry against close combat attacks.",
                    "-5 penalty on your own close attack checks. Must crawl to move."
                ]
            }
        ]
    },
    {
        id: "damage",
        title: "Damage & Toughness Checks",
        limit: "Resistance DC = 15 + Damage rank",
        subtitle: "M&M 3e uses a resistance-based damage system without hit points.",
        color: "#b5179e", // Neon Magenta / Plum
        items: [
            {
                title: "Toughness Check",
                subtitle: "d20 + Toughness vs. DC 15 + Damage",
                icon: "toughness",
                type: "Resistance",
                reference: "Hero's Handbook, p. 244",
                bullets: [
                    "Whenever you are hit by a damaging attack, roll: d20 + Toughness bonus.",
                    "Target DC = 15 + Damage Rank (e.g. against Rank 10 attack, DC is 25).",
                    "Success: No damage suffered!"
                ]
            },
            {
                title: "1st Degree: Bruised",
                subtitle: "Failure by 1-5: -1 to subsequent Toughness",
                icon: "bruised",
                type: "Damage",
                reference: "Hero's Handbook, p. 244",
                bullets: [
                    "The target suffers a cumulative -1 penalty on all future Toughness resistance checks.",
                    "Bruises accumulate over the course of combat until healed or recovered."
                ]
            },
            {
                title: "2nd Degree: Dazed & Bruised",
                subtitle: "Failure by 6-10: Dazed 1 round + -1 penalty",
                icon: "dazed",
                type: "Damage",
                reference: "Hero's Handbook, p. 244",
                bullets: [
                    "The target is Dazed until the end of their next turn (can take only 1 standard or move action).",
                    "Target also gains an additional cumulative -1 penalty to future Toughness checks."
                ]
            },
            {
                title: "3rd Degree: Staggered & Bruised",
                subtitle: "Failure by 11-15: Staggered + -1 penalty",
                icon: "staggered",
                type: "Damage",
                reference: "Hero's Handbook, p. 245",
                bullets: [
                    "Target is Staggered (limited to 1 action per turn, vulnerable).",
                    "Target also gains a cumulative -1 Toughness penalty.",
                    "CRITICAL: If the target is ALREADY Staggered and fails by 3rd degree again, they become Incapacitated!"
                ]
            },
            {
                title: "4th Degree: Incapacitated",
                subtitle: "Failure by 16+: Knocked out or incapacitated",
                icon: "incapacitated",
                type: "Damage",
                reference: "Hero's Handbook, p. 245",
                bullets: [
                    "The target is immediately knocked unconscious, incapacitated, or paralyzed.",
                    "Target is Defenseless, Prone, and Stunned.",
                    "If an incapacitated hero suffers further 3rd or 4th degree damage, they become Dying."
                ]
            }
        ]
    },
    {
        id: "heropoints",
        title: "Hero Points & Extra Effort",
        limit: "Heroic Reserves",
        subtitle: "Spend Hero Points or push beyond limits with Extra Effort for cinematic superhero moments.",
        color: "#eab308", // Superhero Goldenrod
        items: [
            {
                title: "Hero Point: Reroll",
                subtitle: "Reroll d20 (add +10 if result is 1-10)",
                icon: "reroll",
                type: "Hero Point",
                reference: "Hero's Handbook, p. 20",
                bullets: [
                    "Reroll any d20 check you just made and take the better result.",
                    "Heroic Guarantee: If the second roll is 1 through 10, add +10 to it (giving a range of 11 to 20)!"
                ]
            },
            {
                title: "Hero Point: Edit Scene",
                subtitle: "Add convenient detail to narrative",
                icon: "hero-point",
                type: "Hero Point",
                reference: "Hero's Handbook, p. 20",
                bullets: [
                    "Introduce a convenient narrative element or coincidental plot asset with GM approval.",
                    "Examples: Finding a fire extinguisher nearby, having a spare keycard, or an ally arriving on scene."
                ]
            },
            {
                title: "Hero Point: Counter Fatigue",
                subtitle: "Remove Fatigued or Dazed condition",
                icon: "hero-point",
                type: "Hero Point",
                reference: "Hero's Handbook, p. 21",
                bullets: [
                    "Instantly eliminate the Fatigued condition resulting from Extra Effort.",
                    "Or instantly recover from Dazed or Stunned conditions."
                ]
            },
            {
                title: "Extra Effort: Extra Action",
                subtitle: "Gain an additional standard action",
                icon: "extra-effort",
                type: "Extra Effort",
                reference: "Hero's Handbook, p. 19",
                bullets: [
                    "Gain an additional standard action on your turn, allowing two attacks or power activations in one round!",
                    "You become Fatigued at the start of your next turn (unless cleared with a Hero Point)."
                ]
            },
            {
                title: "Extra Effort: Power Stunt",
                subtitle: "Temporarily acquire an alternate effect",
                icon: "power-stunt",
                type: "Extra Effort",
                reference: "Hero's Handbook, p. 19",
                bullets: [
                    "Create an Alternate Effect for one of your existing powers for a single encounter.",
                    "Allows you to use creative stunts (e.g. Flash spinning his arms to make a tornado, or Magneto EMP pulse).",
                    "Cost: Causes Fatigue at the start of your next turn."
                ]
            },
            {
                title: "Extra Effort: Surge / Bonus",
                subtitle: "+1 rank to power or +2 to check",
                icon: "extra-effort",
                type: "Extra Effort",
                reference: "Hero's Handbook, p. 20",
                bullets: [
                    "Temporarily increase a power effect rank by +1 rank, or gain a +2 bonus to any check.",
                    "Or improve a resistance check result by +1 degree.",
                    "Causes Fatigue at the start of your next turn."
                ]
            }
        ]
    },
    {
        id: "ranks",
        title: "Measurements Table (Ranks)",
        limit: "Doubles each +1 rank",
        subtitle: "The universal benchmark of M&M 3e: Each +1 rank doubles the value. Standard benchmark: Rank 0 = 6 seconds / 9 meters / 25 kg / 120 liters.",
        color: "#3b82f6", // Electric Cobalt Blue
        type: "table",
        formulas: [
            { label: "Distance Traveled", formula: "Distance Rank = Speed Rank + Time Rank" },
            { label: "Throwing Distance", formula: "Throw Distance = Strength Rank - Mass Rank" },
            { label: "Time Required", formula: "Time Rank = Distance Rank - Speed Rank" }
        ],
        table: [
            { rank: "-5", time: "1/8 sec", distance: "15 cm", mass: "0.75 kg", volume: "3.5 L" },
            { rank: "-4", time: "1/4 sec", distance: "30 cm", mass: "1.5 kg", volume: "7 L" },
            { rank: "-3", time: "1/2 sec", distance: "1 meter", mass: "3 kg", volume: "15 L" },
            { rank: "-2", time: "1 second", distance: "2 meters", mass: "6 kg", volume: "30 L" },
            { rank: "-1", time: "1.5 seconds", distance: "4.5 meters", mass: "12.5 kg", volume: "60 L" },
            { rank: "0", time: "6 sec (1 round)", distance: "9 meters", mass: "25 kg", volume: "120 L" },
            { rank: "1", time: "12 seconds", distance: "18 meters", mass: "50 kg", volume: "250 L" },
            { rank: "2", time: "24 seconds", distance: "36 meters", mass: "100 kg", volume: "500 L" },
            { rank: "3", time: "1 minute", distance: "75 meters", mass: "200 kg", volume: "1 m³" },
            { rank: "4", time: "2 minutes", distance: "150 meters", mass: "400 kg", volume: "2 m³" },
            { rank: "5", time: "4 minutes", distance: "300 meters", mass: "800 kg", volume: "4 m³" },
            { rank: "6", time: "8 minutes", distance: "600 meters", mass: "1.5 tonnes", volume: "8 m³" },
            { rank: "7", time: "15 minutes", distance: "1 km", mass: "3 tonnes", volume: "15 m³" },
            { rank: "8", time: "30 minutes", distance: "2 km", mass: "6 tonnes", volume: "30 m³" },
            { rank: "9", time: "1 hour", distance: "4 km", mass: "12 tonnes", volume: "60 m³" },
            { rank: "10", time: "2 hours", distance: "8 km", mass: "25 tonnes", volume: "120 m³" },
            { rank: "11", time: "4 hours", distance: "15 km", mass: "50 tonnes", volume: "250 m³" },
            { rank: "12", time: "8 hours", distance: "30 km", mass: "100 tonnes", volume: "500 m³" },
            { rank: "13", time: "16 hours", distance: "60 km", mass: "200 tonnes", volume: "1,000 m³" },
            { rank: "14", time: "1 day", distance: "120 km", mass: "400 tonnes", volume: "2,000 m³" },
            { rank: "15", time: "2 days", distance: "250 km", mass: "800 tonnes", volume: "4,000 m³" },
            { rank: "16", time: "4 days", distance: "500 km", mass: "1,600 tonnes", volume: "8,000 m³" },
            { rank: "17", time: "1 week", distance: "1,000 km", mass: "3,200 tonnes", volume: "15,000 m³" },
            { rank: "18", time: "2 weeks", distance: "2,000 km", mass: "6,000 tonnes", volume: "30,000 m³" },
            { rank: "19", time: "1 month", distance: "4,000 km", mass: "12,500 tonnes", volume: "60,000 m³" },
            { rank: "20", time: "2 months", distance: "8,000 km", mass: "25,000 tonnes", volume: "120,000 m³" },
            { rank: "25", time: "5 years", distance: "250,000 km", mass: "800,000 tonnes", volume: "4 million m³" },
            { rank: "30", time: "150 years", distance: "8 million km", mass: "25 million tonnes", volume: "120 million m³" }
        ]
    }
];
