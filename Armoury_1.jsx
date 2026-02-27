import { useState, useEffect, useRef } from "react";

const SEED_DATA = {"vallejo_unique":[{"ID Number":70.752,"Color Name":"Infantry Blue","Storage Rack":"A","Row":"A","Slot":1},{"ID Number":70.754,"Color Name":"Continental blue","Storage Rack":"A","Row":"A","Slot":2},{"ID Number":70.763,"Color Name":"Canvas","Storage Rack":"A","Row":"A","Slot":3},{"ID Number":70.771,"Color Name":"Dark Rust","Storage Rack":"A","Row":"A","Slot":4},{"ID Number":70.8,"Color Name":"Gunmetal Blue","Storage Rack":"A","Row":"A","Slot":5},{"ID Number":70.801,"Color Name":"Brass","Storage Rack":"A","Row":"A","Slot":6},{"ID Number":70.805,"Color Name":"German Orange","Storage Rack":"A","Row":"A","Slot":7},{"ID Number":70.816,"Color Name":"Lufftwaffe Uniform","Storage Rack":"A","Row":"A","Slot":8},{"ID Number":70.818,"Color Name":"Red Leather","Storage Rack":"A","Row":"A","Slot":9},{"ID Number":70.819,"Color Name":"Iraqi Sand","Storage Rack":"A","Row":"A","Slot":10},{"ID Number":70.822,"Color Name":"German Camo Black Brown","Storage Rack":"A","Row":"A","Slot":11},{"ID Number":70.83,"Color Name":"German Fieldgray","Storage Rack":"A","Row":"A","Slot":12},{"ID Number":70.841,"Color Name":"Andrea Blue","Storage Rack":"A","Row":"A","Slot":13},{"ID Number":70.861,"Color Name":"Glossy Black","Storage Rack":"A","Row":"A","Slot":14},{"ID Number":70.862,"Color Name":"Black Grey","Storage Rack":"A","Row":"B","Slot":1},{"ID Number":70.863,"Color Name":"Gunmetal Grey","Storage Rack":"A","Row":"B","Slot":2},{"ID Number":70.865,"Color Name":"Oily Steel","Storage Rack":"A","Row":"B","Slot":3},{"ID Number":70.867,"Color Name":"Dark blue Grey","Storage Rack":"A","Row":"B","Slot":4},{"ID Number":70.875,"Color Name":"Beige Browns","Storage Rack":"A","Row":"B","Slot":5},{"ID Number":70.878,"Color Name":"Old Gold","Storage Rack":"A","Row":"B","Slot":6},{"ID Number":70.88,"Color Name":"Khaki Grey","Storage Rack":"A","Row":"B","Slot":7},{"ID Number":70.887,"Color Name":"US Olive Drab","Storage Rack":"A","Row":"B","Slot":8},{"ID Number":70.892,"Color Name":"Yellow Olive","Storage Rack":"A","Row":"B","Slot":9},{"ID Number":70.898,"Color Name":"Dark Sea Blue","Storage Rack":"A","Row":"B","Slot":10},{"ID Number":70.905,"Color Name":"Blue Grey Pale","Storage Rack":"A","Row":"B","Slot":11},{"ID Number":70.919,"Color Name":"Cold White","Storage Rack":"A","Row":"B","Slot":12},{"ID Number":70.93,"Color Name":"Dark Blue","Storage Rack":"A","Row":"B","Slot":13},{"ID Number":70.95,"Color Name":"Black","Storage Rack":"A","Row":"B","Slot":14},{"ID Number":70.953,"Color Name":"Flat Yellow","Storage Rack":"A","Row":"C","Slot":1},{"ID Number":70.955,"Color Name":"Flat Flesh","Storage Rack":"A","Row":"C","Slot":2},{"ID Number":70.965,"Color Name":"Prussian Blue","Storage Rack":"A","Row":"C","Slot":3},{"ID Number":70.976,"Color Name":"Buff","Storage Rack":"A","Row":"C","Slot":4},{"ID Number":70.981,"Color Name":"Orange Brown","Storage Rack":"A","Row":"C","Slot":5},{"ID Number":70.984,"Color Name":"Flat Brown","Storage Rack":"A","Row":"C","Slot":6},{"ID Number":70.985,"Color Name":"Hull Red","Storage Rack":"A","Row":"C","Slot":7},{"ID Number":70.986,"Color Name":"Deck Tan","Storage Rack":"A","Row":"C","Slot":8},{"ID Number":70.988,"Color Name":"Khaki","Storage Rack":"A","Row":"C","Slot":9},{"ID Number":70.991,"Color Name":"Dark Sea Grey","Storage Rack":"A","Row":"C","Slot":10},{"ID Number":70.996,"Color Name":"Gold Metallic","Storage Rack":"A","Row":"C","Slot":11},{"ID Number":70.997,"Color Name":"Silver","Storage Rack":"A","Row":"C","Slot":12},{"ID Number":70.998,"Color Name":"Bronze","Storage Rack":"A","Row":"C","Slot":13},{"ID Number":70.999,"Color Name":"Copper","Storage Rack":"A","Row":"C","Slot":14},{"ID Number":71.003,"Color Name":"Red RLM23","Storage Rack":"A","Row":"D","Slot":1},{"ID Number":71.004,"Color Name":"Blue Azul","Storage Rack":"A","Row":"D","Slot":2},{"ID Number":71.005,"Color Name":"Grey Blue","Storage Rack":"A","Row":"D","Slot":3},{"ID Number":71.007,"Color Name":"Olive Green","Storage Rack":"A","Row":"D","Slot":4},{"ID Number":71.008,"Color Name":"Pale Blue","Storage Rack":"A","Row":"D","Slot":5},{"ID Number":71.009,"Color Name":"Eau de Nil","Storage Rack":"A","Row":"D","Slot":6},{"ID Number":71.011,"Color Name":"Dark Green RLM83","Storage Rack":"A","Row":"D","Slot":7},{"ID Number":71.012,"Color Name":"Dark Green","Storage Rack":"A","Row":"D","Slot":8},{"ID Number":71.014,"Color Name":"Gunship Green","Storage Rack":"A","Row":"D","Slot":9},{"ID Number":71.015,"Color Name":"Dark Green RLM71","Storage Rack":"A","Row":"D","Slot":10},{"ID Number":71.016,"Color Name":"USAF Olive Drab","Storage Rack":"A","Row":"D","Slot":11},{"ID Number":71.017,"Color Name":"Russian Green 4BO","Storage Rack":"A","Row":"D","Slot":12},{"ID Number":71.019,"Color Name":"Camou. Dark Green","Storage Rack":"A","Row":"D","Slot":13},{"ID Number":71.021,"Color Name":"Black Green RLM70","Storage Rack":"A","Row":"D","Slot":14},{"ID Number":71.022,"Color Name":"Light Green RLM82","Storage Rack":"A","Row":"E","Slot":1},{"ID Number":71.023,"Color Name":"Hemp Tan Green","Storage Rack":"A","Row":"E","Slot":2},{"ID Number":71.025,"Color Name":"Dark Yellow","Storage Rack":"A","Row":"E","Slot":3},{"ID Number":71.026,"Color Name":"USA Flat Brown","Storage Rack":"A","Row":"E","Slot":4},{"ID Number":71.027,"Color Name":"Light Brown","Storage Rack":"A","Row":"E","Slot":5},{"ID Number":71.028,"Color Name":"Sand Yellow","Storage Rack":"A","Row":"E","Slot":6},{"ID Number":71.031,"Color Name":"Middle Stone","Storage Rack":"A","Row":"E","Slot":7},{"ID Number":71.033,"Color Name":"Yellow Ochre","Storage Rack":"A","Row":"E","Slot":8},{"ID Number":71.036,"Color Name":"Mahogany","Storage Rack":"A","Row":"E","Slot":9},{"ID Number":71.037,"Color Name":"Mud Brown","Storage Rack":"A","Row":"E","Slot":10},{"ID Number":71.04,"Color Name":"Burnt Umber","Storage Rack":"A","Row":"E","Slot":11},{"ID Number":71.041,"Color Name":"Armour Brown","Storage Rack":"A","Row":"E","Slot":12},{"ID Number":71.042,"Color Name":"Dark Brown RLM61","Storage Rack":"A","Row":"E","Slot":13},{"ID Number":71.043,"Color Name":"US Olive Drab","Storage Rack":"A","Row":"E","Slot":14},{"ID Number":71.044,"Color Name":"Grey RLM02","Storage Rack":"A","Row":"F","Slot":1},{"ID Number":71.045,"Color Name":"Cement Grey","Storage Rack":"A","Row":"F","Slot":2},{"ID Number":71.047,"Color Name":"Grey Gris","Storage Rack":"A","Row":"F","Slot":3},{"ID Number":71.049,"Color Name":"Sea Grey","Storage Rack":"A","Row":"F","Slot":4},{"ID Number":71.05,"Color Name":"Light Grey","Storage Rack":"A","Row":"F","Slot":5},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"A","Row":"F","Slot":6},{"ID Number":71.054,"Color Name":"Dark Grey Blue","Storage Rack":"A","Row":"F","Slot":7},{"ID Number":71.055,"Color Name":"Black Grey","Storage Rack":"A","Row":"F","Slot":8},{"ID Number":71.056,"Color Name":"Panzer Dark Grey","Storage Rack":"A","Row":"F","Slot":9},{"ID Number":71.057,"Color Name":"Black","Storage Rack":"A","Row":"F","Slot":10},{"ID Number":71.062,"Color Name":"Aluminum","Storage Rack":"A","Row":"F","Slot":11},{"ID Number":71.063,"Color Name":"Silver","Storage Rack":"A","Row":"F","Slot":12},{"ID Number":71.066,"Color Name":"Gold","Storage Rack":"A","Row":"F","Slot":13},{"ID Number":71.067,"Color Name":"Bright Brass","Storage Rack":"A","Row":"F","Slot":14},{"ID Number":71.068,"Color Name":"Copper","Storage Rack":"A","Row":"G","Slot":1},{"ID Number":71.071,"Color Name":"Artic Blue","Storage Rack":"A","Row":"G","Slot":2},{"ID Number":71.072,"Color Name":"Gunmetal","Storage Rack":"A","Row":"G","Slot":3},{"ID Number":71.073,"Color Name":"Black Metallic","Storage Rack":"A","Row":"G","Slot":4},{"ID Number":71.075,"Color Name":"Ivory","Storage Rack":"A","Row":"G","Slot":5},{"ID Number":71.077,"Color Name":"Wood Madera","Storage Rack":"A","Row":"G","Slot":6},{"ID Number":71.078,"Color Name":"Yellow RLM04","Storage Rack":"A","Row":"G","Slot":7},{"ID Number":71.08,"Color Name":"Rust","Storage Rack":"A","Row":"G","Slot":8},{"ID Number":71.084,"Color Name":"Fire Red","Storage Rack":"A","Row":"G","Slot":9},{"ID Number":71.092,"Color Name":"Medium Olive","Storage Rack":"A","Row":"G","Slot":10},{"ID Number":71.097,"Color Name":"Med. Gunship Gray","Storage Rack":"A","Row":"G","Slot":11},{"ID Number":71.101,"Color Name":"Light Blue RLM78","Storage Rack":"A","Row":"G","Slot":12},{"ID Number":71.103,"Color Name":"Grey Blue RLM84","Storage Rack":"A","Row":"G","Slot":13},{"ID Number":71.104,"Color Name":"Green RLM62","Storage Rack":"A","Row":"G","Slot":14},{"ID Number":71.107,"Color Name":"US Interior Yellow","Storage Rack":"B","Row":"A","Slot":1},{"ID Number":71.108,"Color Name":"UK Azure Blue","Storage Rack":"B","Row":"A","Slot":2},{"ID Number":71.11,"Color Name":"Dark Grey","Storage Rack":"B","Row":"A","Slot":3},{"ID Number":71.119,"Color Name":"White Grey","Storage Rack":"B","Row":"A","Slot":4},{"ID Number":71.12,"Color Name":"Dark Ghost Gray","Storage Rack":"B","Row":"A","Slot":5},{"ID Number":71.121,"Color Name":"Light Gull Gray","Storage Rack":"B","Row":"A","Slot":6},{"ID Number":71.124,"Color Name":"USAF Green","Storage Rack":"B","Row":"A","Slot":7},{"ID Number":71.125,"Color Name":"USAF Brown","Storage Rack":"B","Row":"A","Slot":8},{"ID Number":71.126,"Color Name":"IDF/IAF Green","Storage Rack":"B","Row":"A","Slot":9},{"ID Number":71.13,"Color Name":"Orange Rust","Storage Rack":"B","Row":"A","Slot":10},{"ID Number":71.137,"Color Name":"US Light Green","Storage Rack":"B","Row":"A","Slot":11},{"ID Number":71.139,"Color Name":"US Field Drab","Storage Rack":"B","Row":"A","Slot":12},{"ID Number":71.14,"Color Name":"US Desert Sand","Storage Rack":"B","Row":"B","Slot":1},{"ID Number":71.277,"Color Name":"Dark Gull Gray","Storage Rack":"B","Row":"B","Slot":2},{"ID Number":71.255,"Color Name":"Light Blue RLM65","Storage Rack":"B","Row":"B","Slot":3},{"ID Number":71.256,"Color Name":"Green RLM73","Storage Rack":"B","Row":"B","Slot":4},{"ID Number":71.257,"Color Name":"Light Blue RLM76","Storage Rack":"B","Row":"B","Slot":5},{"ID Number":71.258,"Color Name":"Grey Green RLM74","Storage Rack":"B","Row":"B","Slot":6},{"ID Number":71.259,"Color Name":"Grey Violet RLM75","Storage Rack":"B","Row":"B","Slot":7},{"ID Number":71.26,"Color Name":"Light Grey RLM63","Storage Rack":"B","Row":"B","Slot":8},{"ID Number":71.263,"Color Name":"Green RLM72","Storage Rack":"B","Row":"B","Slot":9},{"ID Number":71.264,"Color Name":"Brown Violet RLM81","Storage Rack":"B","Row":"B","Slot":10},{"ID Number":71.265,"Color Name":"Olive Green RLM80","Storage Rack":"B","Row":"B","Slot":11},{"ID Number":71.271,"Color Name":"German Red Brown","Storage Rack":"B","Row":"B","Slot":12},{"ID Number":71.274,"Color Name":"Aggressor Gray","Storage Rack":"B","Row":"C","Slot":1},{"ID Number":71.275,"Color Name":"USAF Medium Gray","Storage Rack":"B","Row":"C","Slot":2},{"ID Number":71.276,"Color Name":"USAF Light Gray","Storage Rack":"B","Row":"C","Slot":3},{"ID Number":71.278,"Color Name":"Sand Yellow RLM79","Storage Rack":"B","Row":"C","Slot":4},{"ID Number":71.279,"Color Name":"Insignia White","Storage Rack":"B","Row":"C","Slot":5},{"ID Number":71.289,"Color Name":"US Dark Green","Storage Rack":"B","Row":"C","Slot":6},{"ID Number":71.294,"Color Name":"US Forest Green","Storage Rack":"B","Row":"C","Slot":7},{"ID Number":71.296,"Color Name":"USAAF Light Grey","Storage Rack":"B","Row":"C","Slot":8},{"ID Number":71.299,"Color Name":"Intermediate Blue","Storage Rack":"B","Row":"C","Slot":9},{"ID Number":71.3,"Color Name":"Glossy Sea Blue","Storage Rack":"B","Row":"C","Slot":10},{"ID Number":71.302,"Color Name":"Sky Type-S","Storage Rack":"B","Row":"C","Slot":11},{"ID Number":71.305,"Color Name":"Interior Grey Green","Storage Rack":"B","Row":"C","Slot":12},{"ID Number":71.31,"Color Name":"IJN Deep Dark Green","Storage Rack":"B","Row":"D","Slot":1},{"ID Number":71.311,"Color Name":"IJN AshGrey","Storage Rack":"B","Row":"D","Slot":2},{"ID Number":71.312,"Color Name":"IJN Medium Grey","Storage Rack":"B","Row":"D","Slot":3},{"ID Number":71.315,"Color Name":"Tire Black","Storage Rack":"B","Row":"D","Slot":4},{"ID Number":71.316,"Color Name":"Dark Olive Drab","Storage Rack":"B","Row":"D","Slot":5},{"ID Number":71.317,"Color Name":"AII SV GOL Light Blue","Storage Rack":"B","Row":"D","Slot":6},{"ID Number":71.322,"Color Name":"IJN Black Green","Storage Rack":"B","Row":"D","Slot":7},{"ID Number":71.323,"Color Name":"BS Dark Earth","Storage Rack":"B","Row":"D","Slot":8},{"ID Number":71.324,"Color Name":"BS Dark Green","Storage Rack":"B","Row":"D","Slot":9},{"ID Number":71.325,"Color Name":"IJN Dark Black Green","Storage Rack":"B","Row":"D","Slot":10},{"ID Number":71.329,"Color Name":"Green","Storage Rack":"B","Row":"D","Slot":11},{"ID Number":71.333,"Color Name":"Russian AF Blue","Storage Rack":"B","Row":"D","Slot":12},{"ID Number":71.334,"Color Name":"Flanker Light Blue","Storage Rack":"B","Row":"E","Slot":1},{"ID Number":71.335,"Color Name":"Flanker Light Grey","Storage Rack":"B","Row":"E","Slot":2},{"ID Number":71.337,"Color Name":"Flanker Blue","Storage Rack":"B","Row":"E","Slot":3},{"ID Number":71.343,"Color Name":"Russian AF Grey","Storage Rack":"B","Row":"E","Slot":4},{"ID Number":71.344,"Color Name":"Russian AF Grey Protective Coat","Storage Rack":"B","Row":"E","Slot":5},{"ID Number":71.345,"Color Name":"Russian AF Grey N8","Storage Rack":"B","Row":"E","Slot":6},{"ID Number":71.404,"Color Name":"Duck Egg Blue","Storage Rack":"B","Row":"E","Slot":7},{"ID Number":71.418,"Color Name":"IJN Medium Brown","Storage Rack":"B","Row":"E","Slot":8},{"ID Number":71.419,"Color Name":"Aotake Translucent Blue","Storage Rack":"B","Row":"E","Slot":9},{"ID Number":71.928,"Color Name":"Light Flesh","Storage Rack":"B","Row":"E","Slot":10},{"ID Number":71.988,"Color Name":"Khaki","Storage Rack":"B","Row":"E","Slot":11}],"vallejo_duplicate":[{"ID Number":70.752,"Color Name":"Infantry Blue","Storage Rack":"C","Row":"A","Slot":1},{"ID Number":70.8,"Color Name":"Gunmetal Blue","Storage Rack":"C","Row":"A","Slot":2},{"ID Number":70.801,"Color Name":"Brass","Storage Rack":"C","Row":"A","Slot":3},{"ID Number":70.822,"Color Name":"German Camo Black Brown","Storage Rack":"C","Row":"A","Slot":4},{"ID Number":70.862,"Color Name":"Black Grey","Storage Rack":"C","Row":"A","Slot":5},{"ID Number":70.863,"Color Name":"Gunmetal Grey","Storage Rack":"C","Row":"A","Slot":6},{"ID Number":70.887,"Color Name":"US Olive Drab","Storage Rack":"C","Row":"A","Slot":7},{"ID Number":70.996,"Color Name":"Gold Metallic","Storage Rack":"C","Row":"A","Slot":8},{"ID Number":71.005,"Color Name":"Grey Blue","Storage Rack":"C","Row":"A","Slot":9},{"ID Number":71.005,"Color Name":"Grey Blue","Storage Rack":"C","Row":"A","Slot":10},{"ID Number":71.009,"Color Name":"Eau de Nil","Storage Rack":"C","Row":"A","Slot":11},{"ID Number":71.012,"Color Name":"Dark Green","Storage Rack":"C","Row":"A","Slot":12},{"ID Number":71.016,"Color Name":"USAF Olive Drab","Storage Rack":"C","Row":"B","Slot":1},{"ID Number":71.016,"Color Name":"USAF Olive Drab","Storage Rack":"C","Row":"B","Slot":2},{"ID Number":71.016,"Color Name":"USAF Olive Drab","Storage Rack":"C","Row":"B","Slot":3},{"ID Number":71.031,"Color Name":"Middle Stone","Storage Rack":"C","Row":"B","Slot":4},{"ID Number":71.031,"Color Name":"Middle Stone","Storage Rack":"C","Row":"B","Slot":5},{"ID Number":71.031,"Color Name":"Middle Stone","Storage Rack":"C","Row":"B","Slot":6},{"ID Number":71.042,"Color Name":"Dark Brown RLM61","Storage Rack":"C","Row":"B","Slot":7},{"ID Number":71.044,"Color Name":"Grey RLM02","Storage Rack":"C","Row":"B","Slot":8},{"ID Number":71.049,"Color Name":"Sea Grey","Storage Rack":"C","Row":"B","Slot":9},{"ID Number":71.049,"Color Name":"Sea Grey","Storage Rack":"C","Row":"B","Slot":10},{"ID Number":71.049,"Color Name":"Sea Grey","Storage Rack":"C","Row":"B","Slot":11},{"ID Number":71.05,"Color Name":"Light Grey","Storage Rack":"C","Row":"B","Slot":12},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"C","Row":"C","Slot":1},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"C","Row":"C","Slot":2},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"C","Row":"C","Slot":3},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"C","Row":"C","Slot":4},{"ID Number":71.051,"Color Name":"Neutral Gray","Storage Rack":"C","Row":"C","Slot":5},{"ID Number":71.055,"Color Name":"Black Grey","Storage Rack":"C","Row":"C","Slot":6},{"ID Number":71.057,"Color Name":"Black","Storage Rack":"C","Row":"C","Slot":7},{"ID Number":71.057,"Color Name":"Black","Storage Rack":"C","Row":"C","Slot":8},{"ID Number":71.062,"Color Name":"Aluminum","Storage Rack":"C","Row":"C","Slot":9},{"ID Number":71.062,"Color Name":"Aluminum","Storage Rack":"C","Row":"C","Slot":10},{"ID Number":71.062,"Color Name":"Aluminum","Storage Rack":"C","Row":"C","Slot":11},{"ID Number":71.062,"Color Name":"Aluminum","Storage Rack":"C","Row":"C","Slot":12},{"ID Number":71.097,"Color Name":"Med. Gunship Gray","Storage Rack":"C","Row":"D","Slot":1},{"ID Number":71.097,"Color Name":"Med. Gunship Gray","Storage Rack":"C","Row":"D","Slot":2},{"ID Number":71.107,"Color Name":"US Interior Yellow","Storage Rack":"C","Row":"D","Slot":3},{"ID Number":71.107,"Color Name":"US Interior Yellow","Storage Rack":"C","Row":"D","Slot":4},{"ID Number":71.107,"Color Name":"US Interior Yellow","Storage Rack":"C","Row":"D","Slot":5},{"ID Number":71.108,"Color Name":"UK Azure Blue","Storage Rack":"C","Row":"D","Slot":6},{"ID Number":71.108,"Color Name":"UK Azure Blue","Storage Rack":"C","Row":"D","Slot":7},{"ID Number":71.124,"Color Name":"USAF Green","Storage Rack":"C","Row":"D","Slot":8},{"ID Number":71.124,"Color Name":"USAF Green","Storage Rack":"C","Row":"D","Slot":9},{"ID Number":71.125,"Color Name":"USAF Brown","Storage Rack":"C","Row":"D","Slot":10},{"ID Number":71.125,"Color Name":"USAF Brown","Storage Rack":"C","Row":"D","Slot":11},{"ID Number":71.13,"Color Name":"Orange Rust","Storage Rack":"C","Row":"E","Slot":1},{"ID Number":71.137,"Color Name":"US Light Green","Storage Rack":"C","Row":"E","Slot":2},{"ID Number":71.137,"Color Name":"US Light Green","Storage Rack":"C","Row":"E","Slot":3},{"ID Number":71.137,"Color Name":"US Light Green","Storage Rack":"C","Row":"E","Slot":4},{"ID Number":71.139,"Color Name":"US Field Drab","Storage Rack":"C","Row":"E","Slot":5},{"ID Number":71.139,"Color Name":"US Field Drab","Storage Rack":"C","Row":"E","Slot":6},{"ID Number":71.14,"Color Name":"US Desert Sand","Storage Rack":"C","Row":"E","Slot":7},{"ID Number":71.14,"Color Name":"US Desert Sand","Storage Rack":"C","Row":"E","Slot":8},{"ID Number":71.255,"Color Name":"Light Blue RLM65","Storage Rack":"C","Row":"E","Slot":9},{"ID Number":71.279,"Color Name":"Insignia White","Storage Rack":"C","Row":"E","Slot":10},{"ID Number":71.279,"Color Name":"Insignia White","Storage Rack":"C","Row":"E","Slot":11},{"ID Number":71.294,"Color Name":"US Forest Green","Storage Rack":"C","Row":"E","Slot":12},{"ID Number":71.294,"Color Name":"US Forest Green","Storage Rack":"C","Row":"F","Slot":1},{"ID Number":71.296,"Color Name":"USAAF Light Grey","Storage Rack":"C","Row":"F","Slot":2},{"ID Number":71.296,"Color Name":"USAAF Light Grey","Storage Rack":"C","Row":"F","Slot":3},{"ID Number":71.31,"Color Name":"IJN Deep Dark Green","Storage Rack":"C","Row":"F","Slot":4},{"ID Number":71.311,"Color Name":"IJN AshGrey","Storage Rack":"C","Row":"F","Slot":5},{"ID Number":71.312,"Color Name":"IJN Medium Grey","Storage Rack":"C","Row":"F","Slot":6},{"ID Number":71.315,"Color Name":"Tire Black","Storage Rack":"C","Row":"F","Slot":7},{"ID Number":71.316,"Color Name":"Dark Olive Drab","Storage Rack":"C","Row":"F","Slot":8},{"ID Number":71.316,"Color Name":"Dark Olive Drab","Storage Rack":"C","Row":"F","Slot":9},{"ID Number":71.316,"Color Name":"Dark Olive Drab","Storage Rack":"C","Row":"F","Slot":10},{"ID Number":71.322,"Color Name":"IJN Black Green","Storage Rack":"C","Row":"F","Slot":11},{"ID Number":71.325,"Color Name":"IJN Dark Black Green","Storage Rack":"C","Row":"F","Slot":12},{"ID Number":71.344,"Color Name":"Russian AF Grey Protective Coat","Storage Rack":"C","Row":"G","Slot":1},{"ID Number":71.418,"Color Name":"IJN Medium Brown","Storage Rack":"C","Row":"G","Slot":2},{"ID Number":71.419,"Color Name":"Aotake Translucent Blue","Storage Rack":"C","Row":"G","Slot":3}],"tamiya":[{"Color Code":"X-1","Color Name":"Black","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":1},{"Color Code":"X-2","Color Name":"White","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":2},{"Color Code":"X-3","Color Name":"Royal Blue","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":3},{"Color Code":"X-4","Color Name":"Blue","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":4},{"Color Code":"X-5","Color Name":"Green","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":5},{"Color Code":"X-6","Color Name":"Orange","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":6},{"Color Code":"X-7","Color Name":"Red","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":7},{"Color Code":"X-8","Color Name":"Lemon Yellow","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":1,"Slot":8},{"Color Code":"X-9","Color Name":"Brown","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":1},{"Color Code":"X-10","Color Name":"Gunmetal","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":2},{"Color Code":"X-11","Color Name":"Chrome Silver","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":3},{"Color Code":"X-12","Color Name":"Gold Leaf","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":4},{"Color Code":"X-13","Color Name":"Metallic Blue","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":5},{"Color Code":"X-14","Color Name":"Sky Blue","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":6},{"Color Code":"X-15","Color Name":"Light Green","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":7},{"Color Code":"X-16","Color Name":"Purple","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":2,"Slot":8},{"Color Code":"X-17","Color Name":"Pink","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":1},{"Color Code":"X-18","Color Name":"Semi-Gloss Black","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":2},{"Color Code":"X-19","Color Name":"Smoke","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":3},{"Color Code":"X-21","Color Name":"Flat Base","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":4},{"Color Code":"X-22","Color Name":"Clear","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":5},{"Color Code":"X-28","Color Name":"Park Green","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":6},{"Color Code":"X-31","Color Name":"Titanium Gold","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":7},{"Color Code":"X-32","Color Name":"Titanium Silver","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":3,"Slot":8},{"Color Code":"X-33","Color Name":"Bronze","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":1},{"Color Code":"X-34","Color Name":"Metallic Brown","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":2},{"Color Code":"XF-1","Color Name":"Flat Black","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":3},{"Color Code":"XF-2","Color Name":"Flat White","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":4},{"Color Code":"XF-3","Color Name":"Flat Yellow","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":5},{"Color Code":"XF-4","Color Name":"Yellow Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":6},{"Color Code":"XF-5","Color Name":"Flat Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":7},{"Color Code":"XF-6","Color Name":"Copper","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":4,"Slot":8},{"Color Code":"XF-7","Color Name":"Flat Red","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":1},{"Color Code":"XF-8","Color Name":"Flat Blue","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":2},{"Color Code":"XF-9","Color Name":"Hull Red","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":3},{"Color Code":"XF-10","Color Name":"Flat Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":4},{"Color Code":"XF-11","Color Name":"JN Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":5},{"Color Code":"XF-12","Color Name":"JN Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":6},{"Color Code":"XF-13","Color Name":"JA Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":7},{"Color Code":"XF-14","Color Name":"JA Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":5,"Slot":8},{"Color Code":"XF-15","Color Name":"Flat Flesh","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":1},{"Color Code":"XF-16","Color Name":"Flat Aluminum","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":2},{"Color Code":"XF-17","Color Name":"Sea Blue","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":3},{"Color Code":"XF-18","Color Name":"Medium Blue","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":4},{"Color Code":"XF-19","Color Name":"Sky Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":5},{"Color Code":"XF-20","Color Name":"Medium Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":6},{"Color Code":"XF-21","Color Name":"Sky","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":7},{"Color Code":"XF-22","Color Name":"RLM Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":6,"Slot":8},{"Color Code":"XF-23","Color Name":"Light Blue","Series":"XF","Size":"10ml","Quantity":1,"Rack":"D","Row":7,"Slot":1},{"Color Code":"XF-24","Color Name":"Dark Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":1},{"Color Code":"XF-25","Color Name":"Light Sea Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":2},{"Color Code":"XF-26","Color Name":"Deep Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":3},{"Color Code":"XF-27","Color Name":"Black Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":4},{"Color Code":"XF-28","Color Name":"Dark Copper","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":5},{"Color Code":"XF-49","Color Name":"Khaki","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":6},{"Color Code":"XF-50","Color Name":"Field Blue","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":7},{"Color Code":"XF-51","Color Name":"Khaki Drab","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":1,"Slot":8},{"Color Code":"XF-52","Color Name":"Flat Earth","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":1},{"Color Code":"XF-53","Color Name":"Neutral Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":2},{"Color Code":"XF-54","Color Name":"Dark Sea Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":3},{"Color Code":"XF-55","Color Name":"Deck Tan","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":4},{"Color Code":"XF-56","Color Name":"Metallic Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":5},{"Color Code":"XF-57","Color Name":"Buff","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":6},{"Color Code":"XF-58","Color Name":"Olive Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":7},{"Color Code":"XF-59","Color Name":"Desert Yellow","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":2,"Slot":8},{"Color Code":"XF-60","Color Name":"Dark Yellow","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":1},{"Color Code":"XF-61","Color Name":"Dark Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":2},{"Color Code":"XF-62","Color Name":"Olive Drab","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":3},{"Color Code":"XF-63","Color Name":"German Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":4},{"Color Code":"XF-64","Color Name":"Red Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":5},{"Color Code":"XF-65","Color Name":"Field Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":6},{"Color Code":"XF-66","Color Name":"Light Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":7},{"Color Code":"XF-67","Color Name":"NATO Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":3,"Slot":8},{"Color Code":"XF-68","Color Name":"NATO Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":1},{"Color Code":"XF-69","Color Name":"NATO Black","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":2},{"Color Code":"XF-70","Color Name":"Dark Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":3},{"Color Code":"XF-71","Color Name":"Cockpit Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":4},{"Color Code":"XF-72","Color Name":"Brown JGSDF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":5},{"Color Code":"XF-73","Color Name":"Green JGSDF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":6},{"Color Code":"XF-74","Color Name":"Olive Drab JGSDF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":7},{"Color Code":"XF-75","Color Name":"IJN Gray Kure","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":4,"Slot":8},{"Color Code":"XF-76","Color Name":"Gray-Green IJN","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":1},{"Color Code":"XF-77","Color Name":"IJN Gray Sasebo","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":2},{"Color Code":"XF-78","Color Name":"Wooden Deck Tan","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":3},{"Color Code":"XF-79","Color Name":"Linoleum Deck Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":4},{"Color Code":"XF-80","Color Name":"British Navy Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":5},{"Color Code":"XF-81","Color Name":"Dark Green 2 RAF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":6},{"Color Code":"XF-82","Color Name":"Ocean Gray 2 RAF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":7},{"Color Code":"XF-83","Color Name":"Medium Sea Gray 2 RAF","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":5,"Slot":8},{"Color Code":"XF-84","Color Name":"Dark Iron","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":1},{"Color Code":"XF-85","Color Name":"Rubber Black","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":2},{"Color Code":"XF-87","Color Name":"IJN Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":3},{"Color Code":"XF-88","Color Name":"Dark Yellow","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":4},{"Color Code":"XF-89","Color Name":"Dark Green","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":5},{"Color Code":"XF-90","Color Name":"Red Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":6},{"Color Code":"XF-91","Color Name":"IJN Gray","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":7},{"Color Code":"XF-92","Color Name":"DAK Yellow Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":6,"Slot":8},{"Color Code":"XF-93","Color Name":"DAK Light Brown","Series":"XF","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":1},{"Color Code":"LP-11","Color Name":"Silver","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":2},{"Color Code":"LP-35","Color Name":"Insignia White","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":3},{"Color Code":"LP-36","Color Name":"Dark Ghost Gray","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":4},{"Color Code":"LP-37","Color Name":"Light Ghost Gray","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":5},{"Color Code":"LP-38","Color Name":"Flat Aluminum","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":6},{"Color Code":"LP-54","Color Name":"Dark Iron","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":7},{"Color Code":"LP-60","Color Name":"NATO Black","Series":"LP","Size":"10ml","Quantity":1,"Rack":"E","Row":7,"Slot":8},{"Color Code":"X-24","Color Name":"Clear Yellow","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":7,"Slot":2},{"Color Code":"X-25","Color Name":"Clear Green","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":7,"Slot":3},{"Color Code":"X-26","Color Name":"Clear Orange","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":7,"Slot":4},{"Color Code":"X-27","Color Name":"Clear Red","Series":"X","Size":"10ml","Quantity":1,"Rack":"D","Row":7,"Slot":5}],"primers":[{"Brand":"Vallejo","Color Code":"71.613","Color Name":"Desert Tan","Quantity":1,"Rack":"F","Row":"A","Slot":1},{"Brand":"Vallejo","Color Code":"74.602","Color Name":"Black","Quantity":1,"Rack":"F","Row":"A","Slot":2},{"Brand":"Vallejo","Color Code":"74.660","Color Name":"Gloss Black","Quantity":1,"Rack":"F","Row":"A","Slot":3},{"Brand":"Vallejo","Color Code":"63.061","Color Name":"White","Quantity":1,"Rack":"F","Row":"A","Slot":4},{"Brand":"Vallejo","Color Code":"74.615","Color Name":"USN Light Ghost Grey","Quantity":1,"Rack":"F","Row":"A","Slot":5},{"Brand":"Vallejo","Color Code":"74.601","Color Name":"Grey","Quantity":1,"Rack":"F","Row":"A","Slot":6},{"Brand":"Vallejo","Color Code":"74.605","Color Name":"German Red Brown","Quantity":1,"Rack":"F","Row":"A","Slot":7},{"Brand":"Vallejo","Color Code":"73.612","Color Name":"Nato Green","Quantity":1,"Rack":"F","Row":"A","Slot":8},{"Brand":"Vallejo","Color Code":"61.73","Color Name":"IDF Israeli Sand Grey","Quantity":1,"Rack":"","Row":"","Slot":""},{"Brand":"Vallejo","Color Code":"","Color Name":"Earth Green Early","Quantity":1,"Rack":"","Row":"","Slot":""},{"Brand":"Vallejo","Color Code":"","Color Name":"Parched Grass Late","Quantity":1,"Rack":"","Row":"","Slot":""},{"Brand":"Vallejo","Color Code":"","Color Name":"UK Bronze Green","Quantity":1,"Rack":"","Row":"","Slot":""},{"Brand":"Vallejo","Color Code":"","Color Name":"German Dark Yellow","Quantity":1,"Rack":"","Row":"","Slot":""}],"varnish":[{"Brand":"Vallejo","Color Code":"27.701","Color Name":"Gloss Varnish","Quantity":1,"Rack":"F","Row":"B","Slot":1},{"Brand":"Vallejo","Color Code":"63.064","Color Name":"Gloss Varnish","Quantity":1,"Rack":"F","Row":"B","Slot":2},{"Brand":"Vallejo","Color Code":"63.062","Color Name":"Matt Varnish","Quantity":1,"Rack":"F","Row":"B","Slot":3},{"Brand":"Vallejo","Color Code":"26.652","Color Name":"Satin Varnish","Quantity":1,"Rack":"F","Row":"B","Slot":4},{"Brand":"Vallejo","Color Code":"26.657","Color Name":"Gloss Varnish","Quantity":1,"Rack":"F","Row":"B","Slot":5}],"pigments":[{"Brand":"Vallejo","Color Code":"73.120","Color Name":"Old Rust","Quantity":1,"Rack":"G","Row":"A","Slot":1},{"Brand":"Vallejo","Color Code":"73.116","Color Name":"Carbon Black","Quantity":1,"Rack":"G","Row":"A","Slot":2},{"Brand":"Vallejo","Color Code":"73.109","Color Name":"Natural Umber","Quantity":2,"Rack":"G","Row":"A","Slot":3},{"Brand":"Vallejo","Color Code":"73.101","Color Name":"Titanium White","Quantity":1,"Rack":"G","Row":"A","Slot":4},{"Brand":"Vallejo","Color Code":"73.108","Color Name":"Brown Iron Oxide","Quantity":1,"Rack":"G","Row":"A","Slot":5},{"Brand":"Vallejo","Color Code":"73.104","Color Name":"Light Sienna","Quantity":3,"Rack":"G","Row":"A","Slot":6},{"Brand":"Vallejo","Color Code":"73.113","Color Name":"Light Slate Grey","Quantity":2,"Rack":"G","Row":"A","Slot":7},{"Brand":"Vallejo","Color Code":"73.102","Color Name":"Light Yellow Ochre","Quantity":2,"Rack":"G","Row":"A","Slot":8},{"Brand":"Vallejo","Color Code":"73.114","Color Name":"Dark Slate Grey","Quantity":1,"Rack":"G","Row":"A","Slot":9},{"Brand":"Vallejo","Color Code":"73.117","Color Name":"Rust","Quantity":2,"Rack":"G","Row":"A","Slot":10},{"Brand":"Vallejo","Color Code":"73.121","Color Name":"Desert Dust","Quantity":2,"Rack":"G","Row":"A","Slot":11},{"Brand":"Vallejo","Color Code":"73.105","Color Name":"Natural Sienna","Quantity":1,"Rack":"G","Row":"A","Slot":12},{"Brand":"Vallejo","Color Code":"73.118","Color Name":"New Rust","Quantity":1,"Rack":"G","Row":"A","Slot":13}],"weathering":[{"Brand":"AK","Color Code":"AK046","Color Name":"Light Rust","Quantity":1,"Rack":"G","Row":"B","Slot":1},{"Brand":"AK","Color Code":"AK026","Color Name":"Fuel Stains","Quantity":1,"Rack":"G","Row":"B","Slot":2},{"Brand":"AK","Color Code":"AK075","Color Name":"Nato Camo Vehicles Wash","Quantity":1,"Rack":"G","Row":"B","Slot":3},{"Brand":"AK","Color Code":"AK912","Color Name":"Streaking Grime","Quantity":1,"Rack":"G","Row":"B","Slot":4},{"Brand":"AK","Color Code":"AK027","Color Name":"Slimy Grime Light","Quantity":1,"Rack":"G","Row":"B","Slot":5},{"Brand":"AK","Color Code":"AK017","Color Name":"Earth Effects","Quantity":1,"Rack":"G","Row":"B","Slot":6},{"Brand":"AK","Color Code":"AK089","Color Name":"Heavy Chipping","Quantity":1,"Rack":"G","Row":"B","Slot":7},{"Brand":"AK","Color Code":"AK013","Color Name":"Rust Streaks","Quantity":1,"Rack":"G","Row":"B","Slot":8},{"Brand":"AK","Color Code":"AK2029","Color Name":"Landing Gear Wash","Quantity":1,"Rack":"G","Row":"B","Slot":9},{"Brand":"AK","Color Code":"AK016","Color Name":"Fresh Mud","Quantity":1,"Rack":"G","Row":"B","Slot":10},{"Brand":"AK","Color Code":"AK088","Color Name":"Worn Effects","Quantity":1,"Rack":"G","Row":"B","Slot":11},{"Brand":"AK","Color Code":"AK070","Color Name":"Browns Blue Wash","Quantity":1,"Rack":"G","Row":"B","Slot":12},{"Brand":"AK","Color Code":"AK2019","Color Name":"Aircraft Engine Oil","Quantity":1,"Rack":"G","Row":"C","Slot":1},{"Brand":"AK","Color Code":"AK045","Color Name":"Dark Brown Wash","Quantity":1,"Rack":"G","Row":"C","Slot":2},{"Brand":"AK","Color Code":"AK093","Color Name":"Wash Interior","Quantity":1,"Rack":"G","Row":"C","Slot":3},{"Brand":"AK","Color Code":"AK2040","Color Name":"Exhaust Wash","Quantity":1,"Rack":"G","Row":"C","Slot":4},{"Brand":"AK","Color Code":"AK677","Color Name":"Neutral Grey","Quantity":1,"Rack":"G","Row":"C","Slot":5},{"Brand":"Vallejo","Color Code":"76.516","Color Name":"Off Grey","Quantity":1,"Rack":"G","Row":"C","Slot":6},{"Brand":"Vallejo","Color Code":"76.501","Color Name":"White","Quantity":1,"Rack":"G","Row":"C","Slot":7},{"Brand":"Vallejo","Color Code":"76.515","Color Name":"Light Grey","Quantity":1,"Rack":"G","Row":"C","Slot":8},{"Brand":"Vallejo","Color Code":"76.506","Color Name":"Rust","Quantity":1,"Rack":"G","Row":"C","Slot":9},{"Brand":"Vallejo","Color Code":"76.519","Color Name":"Olive Green","Quantity":1,"Rack":"G","Row":"C","Slot":10},{"Brand":"Vallejo","Color Code":"73.824","Color Name":"Streaking Grime","Quantity":2,"Rack":"G","Row":"C","Slot":11},{"Brand":"Vallejo","Color Code":"73.821","Color Name":"Rust Texture","Quantity":1,"Rack":"G","Row":"C","Slot":12},{"Brand":"Vallejo","Color Code":"76.512","Color Name":"Dark Green","Quantity":1,"Rack":"G","Row":"D","Slot":1},{"Brand":"Vallejo","Color Code":"73.815","Color Name":"Engine Grime","Quantity":1,"Rack":"G","Row":"D","Slot":2},{"Brand":"Vallejo","Color Code":"76.520","Color Name":"Desert Dust","Quantity":1,"Rack":"G","Row":"D","Slot":3},{"Brand":"Vallejo","Color Code":"76.518","Color Name":"Black","Quantity":1,"Rack":"G","Row":"D","Slot":4},{"Brand":"Tamiya","Color Code":"87079","Color Name":"Sand","Quantity":1,"Rack":"G","Row":"D","Slot":5},{"Brand":"Tamiya","Color Code":"87079","Color Name":"Light Sand","Quantity":1,"Rack":"G","Row":"D","Slot":6},{"Brand":"Tamiya","Color Code":"87079","Color Name":"Mud","Quantity":1,"Rack":"G","Row":"D","Slot":7},{"Brand":"Tamiya","Color Code":"87080","Color Name":"Snow","Quantity":1,"Rack":"G","Row":"D","Slot":8},{"Brand":"Tamiya","Color Code":"87080","Color Name":"Soot","Quantity":1,"Rack":"G","Row":"D","Slot":9},{"Brand":"Tamiya","Color Code":"87080","Color Name":"Rust","Quantity":1,"Rack":"G","Row":"D","Slot":10},{"Brand":"Tamiya","Color Code":"87085","Color Name":"Orange Rust","Quantity":1,"Rack":"G","Row":"D","Slot":11},{"Brand":"Tamiya","Color Code":"87085","Color Name":"Gun Metal","Quantity":1,"Rack":"G","Row":"D","Slot":12},{"Brand":"Tamiya","Color Code":"87085","Color Name":"Silver","Quantity":1,"Rack":"G","Row":"E","Slot":1},{"Brand":"Tamiya","Color Code":"87088","Color Name":"Burnt Blue","Quantity":1,"Rack":"G","Row":"E","Slot":2},{"Brand":"Tamiya","Color Code":"87088","Color Name":"Burnt Red","Quantity":1,"Rack":"G","Row":"E","Slot":3},{"Brand":"Tamiya","Color Code":"87088","Color Name":"Oil Stain","Quantity":1,"Rack":"G","Row":"E","Slot":4},{"Brand":"Tamiya","Color Code":"87098","Color Name":"Yellow","Quantity":1,"Rack":"G","Row":"E","Slot":5},{"Brand":"Tamiya","Color Code":"87098","Color Name":"Gray","Quantity":1,"Rack":"G","Row":"E","Slot":6},{"Brand":"Tamiya","Color Code":"87098","Color Name":"Green","Quantity":1,"Rack":"G","Row":"E","Slot":7},{"Brand":"Tamiya","Color Code":"87123","Color Name":"Titanium","Quantity":1,"Rack":"G","Row":"E","Slot":8},{"Brand":"Tamiya","Color Code":"87123","Color Name":"Light Gun Metal","Quantity":1,"Rack":"G","Row":"E","Slot":9},{"Brand":"Tamiya","Color Code":"87123","Color Name":"Copper","Quantity":1,"Rack":"G","Row":"E","Slot":10}],"kits":[{"Brand":"Academy","Name":"USAF F-15E","Item Number":"12478","Scale":"1:72","Type":"Aircraft"},{"Brand":"Academy","Name":"USN EA-18G","Item Number":"12560","Scale":"1:72","Type":"Aircraft"},{"Brand":"Academy","Name":"USAF F-35 A","Item Number":"12507","Scale":"1:72","Type":"Aircraft"},{"Brand":"Tamiya","Name":"F-16CN","Item Number":"61106","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"Kawasaki Ki-61-Id","Item Number":"25424","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"Tiger 1 Late Production","Item Number":"32575","Scale":"1:48","Type":"Armor"},{"Brand":"Tamiya","Name":"Supermarine Spitfire Mk.I","Item Number":"61119","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"Ilyushin IL-2 Shturmovik & GAZ-67B","Item Number":"","Scale":"1:48","Type":"Aircraft"},{"Brand":"Hasegawa","Name":"F-86F-30 Sabre","Item Number":"7213","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"Supermarine Spitfire Mk.Vb","Item Number":"61033","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"F16CJ Block 50 Fighting Falcon","Item Number":"61098","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"P-51D Mustang","Item Number":"25205","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"DeHavilland Mosquito B Mk.IV/PR Mk.IV","Item Number":"61066","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"A-10A Thunderbolt II","Item Number":"61028","Scale":"1:48","Type":"Aircraft"},{"Brand":"Tamiya","Name":"M26 Pershing T26EF","Item Number":"35254","Scale":"1:35","Type":"Armor"},{"Brand":"Tamiya","Name":"German King Tiger Production Turret","Item Number":"35164","Scale":"1:35","Type":"Armor"},{"Brand":"Tamiya","Name":"German Tiger I Mid Production","Item Number":"35194","Scale":"1:35","Type":"Armor"},{"Brand":"Tamiya","Name":"Supermarine Spitfire Mk.VIII","Item Number":"60320","Scale":"1:32","Type":"Aircraft"},{"Brand":"Tamiya","Name":"McDonnell F-4C/D","Item Number":"60305","Scale":"1:32","Type":"Aircraft"},{"Brand":"Tamiya","Name":"Grumman F-14A Tomcat Black Knights","Item Number":"60313","Scale":"1:32","Type":"Aircraft"},{"Brand":"Tamiya","Name":"McDonnell Douglas F15C Eagle","Item Number":"60304","Scale":"1:32","Type":"Aircraft"},{"Brand":"Hasegawa","Name":"P-40E Warhawk","Item Number":"8879","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"Messerschmitt BF 109F-4","Item Number":"2292","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"TBD-1 Devastator","Item Number":"2226","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"Junkers Ju 87G-2 Stuka","Item Number":"3218","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"Russian MiG-29SMT Fulcrum","Item Number":"3225","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"Sukhoi Su-27 Flanker B","Item Number":"2224","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"Mitsubishi A6M2b Model 21 Fighter","Item Number":"2405","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"SBD-3 Dauntless Midway Clear Edition","Item Number":"2244","Scale":"1:32","Type":"Aircraft"},{"Brand":"Trumpeter","Name":"P51D Mustang","Item Number":"2275","Scale":"1:32","Type":"Aircraft"},{"Brand":"Eduard","Name":"Messerschmitt Bf109E-4","Item Number":"EDU03003","Scale":"1:32","Type":"Aircraft"},{"Brand":"Eduard","Name":"F6F-3 Hellcat PROFIPACK","Item Number":"EDU08227","Scale":"1:48","Type":"Aircraft"},{"Brand":"Eduard","Name":"Spitfire Mk.XVI High Back PROFIPACK","Item Number":"EDU08286","Scale":"1:48","Type":"Aircraft"}]};

const STORAGE_KEY = "modeling-inventory-v4";

const RACK_G_PIGMENTS = [
  {"Brand":"Vallejo","Color Code":"73.101","Color Name":"Titanium White","Quantity":1,"Rack":"G","Row":"A","Slot":1,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.102","Color Name":"Light Yellow Ochre","Quantity":1,"Rack":"G","Row":"A","Slot":2,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.104","Color Name":"Light Sienna","Quantity":1,"Rack":"G","Row":"A","Slot":3,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.105","Color Name":"Natural Sienna","Quantity":1,"Rack":"G","Row":"A","Slot":4,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.108","Color Name":"Brown Iron Oxide","Quantity":1,"Rack":"G","Row":"A","Slot":5,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.109","Color Name":"Natural Umber","Quantity":1,"Rack":"G","Row":"A","Slot":6,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.113","Color Name":"Light Slate Grey","Quantity":1,"Rack":"G","Row":"A","Slot":7,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.114","Color Name":"Dark Slate Grey","Quantity":1,"Rack":"G","Row":"A","Slot":8,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.116","Color Name":"Carbon Black","Quantity":1,"Rack":"G","Row":"B","Slot":1,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.117","Color Name":"Rust","Quantity":1,"Rack":"G","Row":"B","Slot":2,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.118","Color Name":"New Rust","Quantity":1,"Rack":"G","Row":"B","Slot":3,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.120","Color Name":"Old Rust","Quantity":1,"Rack":"G","Row":"B","Slot":4,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.121","Color Name":"Desert Dust","Quantity":1,"Rack":"G","Row":"B","Slot":5,"Note":""},
  {"Brand":"Vallejo","Color Code":"73.117","Color Name":"Rust","Quantity":1,"Rack":"G","Row":"B","Slot":6,"Note":"DUPLICATE of G·A·B2"},
  {"Brand":"Vallejo","Color Code":"73.113","Color Name":"Light Slate Grey","Quantity":1,"Rack":"G","Row":"B","Slot":7,"Note":"DUPLICATE of G·Row A·Slot 7"},
  {"Brand":"Vallejo","Color Code":"73.109","Color Name":"Natural Umber","Quantity":1,"Rack":"G","Row":"B","Slot":8,"Note":"DUPLICATE of G·Row A·Slot 6"},
  {"Brand":"Vallejo","Color Code":"73.102","Color Name":"Light Yellow Ochre","Quantity":1,"Rack":"G","Row":"C","Slot":1,"Note":"DUPLICATE of G·Row A·Slot 2"},
  {"Brand":"Vallejo","Color Code":"73.121","Color Name":"Desert Dust","Quantity":1,"Rack":"G","Row":"C","Slot":2,"Note":"DUPLICATE of G·Row B·Slot 5"},
  {"Brand":"Vallejo","Color Code":"73.104","Color Name":"Light Sienna","Quantity":1,"Rack":"G","Row":"C","Slot":3,"Note":"DUPLICATE of G·Row A·Slot 3"},
  {"Brand":"Vallejo","Color Code":"73.104","Color Name":"Light Sienna","Quantity":1,"Rack":"G","Row":"C","Slot":4,"Note":"DUPLICATE of G·Row A·Slot 3"},
];

const METAL_COLOR = [
  {"ID Number":"77.701","Color Name":"Aluminum","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":1},
  {"ID Number":"77.702","Color Name":"Magnesium","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":2},
  {"ID Number":"77.703","Color Name":"Dark Aluminum","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":3},
  {"ID Number":"77.704","Color Name":"Brass","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":4},
  {"ID Number":"77.706","Color Name":"Gold","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":5},
  {"ID Number":"77.707","Color Name":"Chrome","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":6},
  {"ID Number":"77.710","Color Name":"Copper","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":7},
  {"ID Number":"77.711","Color Name":"Duraluminum","Brand":"Vallejo Metal Color","Rack":"F","Row":"A","Slot":8},
  {"ID Number":"77.712","Color Name":"Steel","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":1},
  {"ID Number":"77.713","Color Name":"Jet Exhaust","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":2},
  {"ID Number":"77.716","Color Name":"Semi Matt Aluminum","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":3},
  {"ID Number":"77.717","Color Name":"Gunmetal","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":4},
  {"ID Number":"77.720","Color Name":"Metal Gray","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":5},
  {"ID Number":"77.721","Color Name":"Burnt Iron","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":6},
  {"ID Number":"77.723","Color Name":"Exhaust Manifold","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":7},
  {"ID Number":"77.724","Color Name":"Silver","Brand":"Vallejo Metal Color","Rack":"F","Row":"B","Slot":8},
  {"ID Number":"77.725","Color Name":"Gold (Light)","Brand":"Vallejo Metal Color","Rack":"F","Row":"C","Slot":1},
];

const LIQUID_METAL = [
  {"ID Number":"70.750","Color Name":"Silver","Brand":"Vallejo Liquid Metal","Rack":"F","Row":"C","Slot":2},
  {"ID Number":"70.792","Color Name":"Old Gold","Brand":"Vallejo Liquid Metal","Rack":"F","Row":"C","Slot":3},
];

const VALLEJO_WASHES_F = [
  {"ID Number":"76.512","Color Name":"Dark Green","Brand":"Vallejo","Rack":"F","Row":"C","Slot":4},
  {"ID Number":"76.519","Color Name":"Olive Green","Brand":"Vallejo","Rack":"F","Row":"C","Slot":5},
  {"ID Number":"76.506","Color Name":"Rust","Brand":"Vallejo","Rack":"F","Row":"C","Slot":6},
  {"ID Number":"73.824","Color Name":"Streaking Grime","Brand":"Vallejo","Rack":"F","Row":"C","Slot":7},
  {"ID Number":"76.518","Color Name":"Black","Brand":"Vallejo","Rack":"F","Row":"C","Slot":8},
  {"ID Number":"73.821","Color Name":"Rust Texture","Brand":"Vallejo","Rack":"F","Row":"D","Slot":1},
  {"ID Number":"73.815","Color Name":"Engine Grime","Brand":"Vallejo","Rack":"F","Row":"D","Slot":2},
  {"ID Number":"76.522","Color Name":"Desert Dust","Brand":"Vallejo","Rack":"F","Row":"D","Slot":3},
  {"ID Number":"76.501","Color Name":"White","Brand":"Vallejo","Rack":"F","Row":"D","Slot":4},
  {"ID Number":"76.516","Color Name":"Off Grey","Brand":"Vallejo","Rack":"F","Row":"D","Slot":5},
];

const AK_WASHES_F = [
  {"ID Number":"AK046","Color Name":"Light Rust","Brand":"AK Interactive","Rack":"F","Row":"D","Slot":7},
  {"ID Number":"AK025","Color Name":"Fuel Stains","Brand":"AK Interactive","Rack":"F","Row":"D","Slot":8},
  {"ID Number":"AK075","Color Name":"Nato Camo Vehicles Wash","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":1},
  {"ID Number":"AK012","Color Name":"Streaking Grime","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":2},
  {"ID Number":"AK027","Color Name":"Slimy Grime Light","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":3},
  {"ID Number":"AK017","Color Name":"Earth Effects","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":4},
  {"ID Number":"AK677","Color Name":"Neutral Grey","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":5},
  {"ID Number":"AK013","Color Name":"Rust Streaks","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":6},
  {"ID Number":"AK2029","Color Name":"Landing Gear Wash","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":7},
  {"ID Number":"AK016","Color Name":"Fresh Mud","Brand":"AK Interactive","Rack":"F","Row":"E","Slot":8},
  {"ID Number":"AK070","Color Name":"Brown Blue Wash","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":1},
  {"ID Number":"AK045","Color Name":"Dark Brown Wash","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":2},
  {"ID Number":"AK2019","Color Name":"Aircraft Engine Oil","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":3},
  {"ID Number":"AK093","Color Name":"Wash Interior","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":4},
  {"ID Number":"AK2040","Color Name":"Exhaust Wash","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":5},
  {"ID Number":"AK088","Color Name":"Worn Effects","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":6},
  {"ID Number":"AK089","Color Name":"Heavy Chipping","Brand":"AK Interactive","Rack":"F","Row":"F","Slot":7},
];

const AIRBRUSHES = [
  {Brand:"Harder & Steenbeck",Model:"Ultra",Type:"Gravity Feed",NozzleSize:"0.2mm / 0.4mm",Notes:"Dual nozzle set, fine detail work"},
  {Brand:"Harder & Steenbeck",Model:"Evolution",Type:"Gravity Feed",NozzleSize:"0.2mm / 0.4mm",Notes:"Workhorse airbrush, basecoating & general use"},
  {Brand:"Harder & Steenbeck",Model:"Infinity",Type:"Gravity Feed",NozzleSize:"0.15mm / 0.4mm",Notes:"Fine detail & precision work"},
];

const CONSUMABLES = [
  {Category:"Adhesive",Brand:"Generic",Name:"CA Glue (Thin)",Notes:"For photo etch, small parts"},
  {Category:"Adhesive",Brand:"Generic",Name:"CA Glue (Thick)",Notes:"Gap filling, larger joins"},
  {Category:"Adhesive",Brand:"Tamiya",Name:"Extra Thin Cement",Notes:"Standard plastic to plastic"},
];

const TABS = ["Kits","Vallejo","Tamiya","Metal Color","Primers","Varnish","Pigments","Weathering","Search","Workflows","Tools","Add Item"];

const DEVASTATOR_WORKFLOW = {
  kit: "TBD-1 Devastator (Trumpeter 1:32)",
  scheme: "Pre-War Tricolor",
  preferences: "Tamiya-first. Mix required → nearest single Vallejo. Spray can as last resort only.",
  stages: [
    {
      title: "Stage 1 — Paint Before Gluing",
      note: "Parts that will be inaccessible after assembly",
      steps: [
        "Prime all cockpit components → Vallejo White 63.061 (Rack F · Row A · Slot 4) — white base for brighter Interior Yellow",
        "Cockpit tub, seat, instrument panel, rudder pedals → Vallejo 71.107 US Interior Yellow (Rack B · Row A · Slot 1)",
        "Instrument panel details → XF-1 Flat Black (Rack D · Row 4 · Slot 3), drybrush XF-16 Flat Aluminum (Rack D · Row 6 · Slot 2)",
        "Cockpit wash → AK093 Wash Interior (Rack G · Row C · Slot 3)",
        "Wheel well interiors → prime white 63.061 then Vallejo 71.107 US Interior Yellow",
        "Pilot figure if included — paint now while fully accessible",
      ]
    },
    {
      title: "Stage 2 — Sub-Assembly Gluing",
      note: "Glue these as complete units before priming",
      steps: [
        "Close fuselage halves with cockpit installed",
        "Attach horizontal stabilizers and elevators",
        "Attach vertical stabilizer",
        "Assemble engine and cowl as one unit — leave off model for now",
        "Assemble landing gear legs — do not attach to model yet",
        "Leave upper wing separate from fuselage if kit allows (spray access needed)",
      ]
    },
    {
      title: "Stage 3 — Prime",
      note: "",
      steps: [
        "Prime entire fuselage + lower wing assembly → Vallejo Grey 74.601 (Rack F · Row A · Slot 6)",
        "Prime engine/cowl unit separately",
        "Prime landing gear separately",
      ]
    },
    {
      title: "Stage 4 — Chrome Yellow Wings",
      note: "Spray can application",
      steps: [
        "Mask fuselage at upper wing join line",
        "Apply Vallejo TS Chrome Yellow spray — two light coats on upper wing surfaces",
        "Allow full cure minimum 2 hours before masking over",
      ]
    },
    {
      title: "Stage 5 — Main Scheme Colors",
      note: "",
      steps: [
        "Mask yellow wing surfaces carefully",
        "Undersides → XF-19 Sky Gray (Rack D · Row 6 · Slot 5)",
        "Fuselage + upper surfaces → Vallejo 71.054 Dark Grey Blue (Rack A · Row F · Slot 7)",
        "Engine cowl → XF-16 Flat Aluminum (Rack D · Row 6 · Slot 2)",
        "Exhaust stacks → XF-84 Dark Iron (Rack E · Row 6 · Slot 1)",
      ]
    },
    {
      title: "Stage 6 — Attach Major Components",
      note: "",
      steps: [
        "Glue wings to fuselage",
        "Glue engine/cowl unit to fuselage",
        "Touch up join lines and seams with appropriate colors",
        "Glue canopy — mask or use Micro Mask beforehand",
      ]
    },
    {
      title: "Stage 7 — Gloss Coat & Markings",
      note: "Always gloss before decals",
      steps: [
        "Full model gloss coat → Vallejo Gloss Varnish 27.701 (Rack F · Row B · Slot 1)",
        "National insignia → XF-2 Flat White (Rack D), XF-7 Flat Red (Rack D), Vallejo 71.299 Intermediate Blue (Rack B · Row C · Slot 9)",
        "Apply kit decals over gloss coat",
      ]
    },
    {
      title: "Stage 8 — Weathering",
      note: "Work in this order",
      steps: [
        "Panel line wash Blue Gray areas → AK070 Browns Blue Wash (Rack G · Row B · Slot 12)",
        "Panel line wash undersides → AK677 Neutral Grey (Rack G · Row C · Slot 5)",
        "Fuel staining around engine cowl → AK026 Fuel Stains (Rack G · Row B · Slot 2)",
        "Engine faces + exhausts → AK2019 Aircraft Engine Oil (Rack G · Row C · Slot 1)",
        "Exhaust stacks → AK2040 Exhaust Wash (Rack G · Row C · Slot 4)",
        "Fabric wing seams — light touch → AK013 Rust Streaks (Rack G · Row B · Slot 8)",
        "Vertical fuselage streaks → Vallejo 73.824 Streaking Grime (Rack G · Row C · Slot 11)",
      ]
    },
    {
      title: "Stage 9 — Final Assembly",
      note: "",
      steps: [
        "Landing gear wheels → XF-85 Rubber Black (Rack E · Row 6 · Slot 2)",
        "Landing gear hubs → XF-16 Flat Aluminum (Rack D · Row 6 · Slot 2)",
        "Propeller → XF-1 Flat Black with XF-16 tip highlight",
        "Attach all remaining small parts — pitot tubes, antennae",
      ]
    },
    {
      title: "Stage 10 — Final Varnish",
      note: "Seals and unifies everything",
      steps: [
        "Full model matt coat → Vallejo Matt Varnish 63.062 (Rack F · Row B · Slot 3)",
      ]
    },
  ]
};

const RACK_COLORS = {A:"#4e9af1",B:"#7b6cf6",C:"#f16b4e",D:"#4ecf8a",E:"#f1c84e",F:"#e05de0",G:"#e05d8a"};

function badge(text, color) {
  return <span style={{background:color+"22",color,border:`1px solid ${color}55`,borderRadius:4,padding:"1px 7px",fontSize:12,fontWeight:700,letterSpacing:.5}}>{text}</span>;
}

function LocationBadge({rack,row,slot}) {
  const r = (rack||"").toUpperCase();
  const c = RACK_COLORS[r]||"#888";
  return <span style={{background:c+"22",color:c,border:`1px solid ${c}55`,borderRadius:4,padding:"2px 8px",fontSize:11,fontWeight:700,fontFamily:"monospace",whiteSpace:"nowrap"}}>
    {rack&&<>Rack {rack.toUpperCase()}</>}{row&&<> · Row {String(row).toUpperCase()}</>}{slot&&<> · Slot {slot}</>}
  </span>;
}

function Table({cols, rows, emptyMsg="No items"}) {
  if(!rows||!rows.length) return <div style={{color:"#888",padding:"24px 0",textAlign:"center",fontStyle:"italic"}}>{emptyMsg}</div>;
  return <div style={{overflowX:"auto"}}>
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
      <thead>
        <tr>{cols.map(c=><th key={c.key||c.label} style={{textAlign:"left",padding:"8px 10px",color:"#aaa",fontWeight:600,fontSize:11,letterSpacing:.8,textTransform:"uppercase",borderBottom:"1px solid #2a2a2a",whiteSpace:"nowrap"}}>{c.label}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row,i)=><tr key={i} style={{borderBottom:"1px solid #1e1e1e",transition:"background .15s"}} onMouseEnter={e=>e.currentTarget.style.background="#1a1a1a"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
          {cols.map(c=><td key={c.key||c.label} style={{padding:"8px 10px",color:"#ddd",verticalAlign:"middle"}}>{c.render?c.render(row):row[c.key]}</td>)}
        </tr>)}
      </tbody>
    </table>
  </div>;
}

export default function App() {
  const [tab, setTab] = useState("Kits");
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState({loading:true,msg:""});
  const [addForm, setAddForm] = useState({type:"kit",brand:"",name:"",itemNumber:"",scale:"1:32",kitType:"Aircraft",colorCode:"",colorName:"",series:"XF",size:"10ml",quantity:1,rack:"",row:"",slot:"",paintBrand:"Vallejo",paintCategory:"vallejo_unique"});
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(()=>{
    async function load() {
      try {
        const res = await window.storage.get(STORAGE_KEY);
        if(res && res.value) {
          const parsed = JSON.parse(res.value);
          if(!parsed.metal_color) parsed.metal_color = METAL_COLOR;
          if(!parsed.liquid_metal) parsed.liquid_metal = LIQUID_METAL;
          if(!parsed.vallejo_washes_f) parsed.vallejo_washes_f = VALLEJO_WASHES_F;
          if(!parsed.ak_washes_f) parsed.ak_washes_f = AK_WASHES_F;
          if(!parsed.rack_g_pigments) parsed.rack_g_pigments = RACK_G_PIGMENTS;
          if(!parsed.airbrushes) parsed.airbrushes = AIRBRUSHES;
          if(!parsed.consumables) parsed.consumables = CONSUMABLES;
          setData(parsed);
          setStatus({loading:false,msg:"Loaded from persistent storage"});
        } else {
          const seedWithMetal = {...SEED_DATA, metal_color: METAL_COLOR, liquid_metal: LIQUID_METAL, vallejo_washes_f: VALLEJO_WASHES_F, ak_washes_f: AK_WASHES_F, rack_g_pigments: RACK_G_PIGMENTS, airbrushes: AIRBRUSHES, consumables: CONSUMABLES};
          await window.storage.set(STORAGE_KEY, JSON.stringify(seedWithMetal));
          setData(seedWithMetal);
          setStatus({loading:false,msg:"Initialized from your spreadsheet"});
        }
      } catch(e) {
        setData(SEED_DATA);
        setStatus({loading:false,msg:"Using local data"});
      }
    }
    load();
  },[]);

  async function save(newData) {
    setData(newData);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(newData));
      setSaveMsg("✓ Saved");
      setTimeout(()=>setSaveMsg(""),2000);
    } catch(e) {
      setSaveMsg("⚠ Save failed");
    }
  }

  function handleAdd() {
    if(!data) return;
    const nd = JSON.parse(JSON.stringify(data));
    const f = addForm;
    if(f.type==="kit") {
      if(!f.name||!f.brand) return;
      nd.kits.push({Brand:f.brand,Name:f.name,"Item Number":f.itemNumber,Scale:f.scale,Type:f.kitType});
    } else {
      const item = {Brand:f.paintBrand,"Color Name":f.colorName,Quantity:Number(f.quantity)};
      if(f.rack) item.Rack = f.rack.toUpperCase();
      if(f.rack) item["Storage Rack"] = f.rack.toUpperCase();
      if(f.row) item.Row = f.row.toUpperCase();
      if(f.slot) item.Slot = Number(f.slot);
      if(f.type==="vallejo") {
        item["ID Number"] = f.colorCode;
        nd[f.paintCategory].push(item);
      } else if(f.type==="tamiya") {
        item["Color Code"] = f.colorCode;
        item.Series = f.series;
        item.Size = f.size;
        nd.tamiya.push(item);
      } else if(f.type==="primer") {
        item["Color Code"] = f.colorCode;
        nd.primers.push(item);
      } else if(f.type==="varnish") {
        item["Color Code"] = f.colorCode;
        nd.varnish.push(item);
      } else if(f.type==="pigment") {
        item["Color Code"] = f.colorCode;
        nd.pigments.push(item);
      } else if(f.type==="weathering") {
        item["Color Code"] = f.colorCode;
        nd.weathering.push(item);
      }
    }
    save(nd);
    setSaveMsg("✓ Item added & saved!");
    setTimeout(()=>setSaveMsg(""),3000);
  }

  function allItems() {
    if(!data) return [];
    const items = [];
    const addGroup = (arr, group, nameKey, codeKey, rackKey) => {
      (arr||[]).forEach(i=>{
        const rack = i[rackKey]||i.Rack||"";
        items.push({group, name: i[nameKey]||"", code: i[codeKey]||"", brand: i.Brand||"", rack, row: i.Row||"", slot: i.Slot||"", raw:i});
      });
    };
    addGroup(data.kits,"Kits","Name","Item Number","Rack");
    addGroup(data.vallejo_unique,"Vallejo","Color Name","ID Number","Storage Rack");
    addGroup(data.vallejo_duplicate,"Vallejo Dupes","Color Name","ID Number","Storage Rack");
    addGroup(data.tamiya,"Tamiya","Color Name","Color Code","Rack");
    addGroup(data.primers,"Primers","Color Name","Color Code","Rack");
    addGroup(data.varnish,"Varnish","Color Name","Color Code","Rack");
    addGroup(data.pigments,"Pigments","Color Name","Color Code","Rack");
    addGroup(data.weathering,"Weathering","Color Name","Color Code","Rack");
    addGroup(data.metal_color||[],"Metal Color","Color Name","ID Number","Rack");
    addGroup(data.liquid_metal||[],"Liquid Metal","Color Name","ID Number","Rack");
    addGroup(data.vallejo_washes_f||[],"Vallejo Washes","Color Name","ID Number","Rack");
    addGroup(data.ak_washes_f||[],"AK Washes","Color Name","ID Number","Rack");
    addGroup(data.rack_g_pigments||[],"Pigments","Color Name","Color Code","Rack");
    return items;
  }

  const inp = (style={}) => ({
    background:"#1a1a1a",border:"1px solid #333",borderRadius:6,color:"#eee",padding:"7px 10px",fontSize:13,outline:"none",...style
  });
  const sel = (style={}) => ({...inp(),cursor:"pointer",...style});

  if(status.loading) return <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#111",color:"#888",fontFamily:"monospace"}}>Loading inventory...</div>;

  const s = search.toLowerCase();
  const filtered = s.length>1 ? allItems().filter(i=>
    i.name.toLowerCase().includes(s)||
    String(i.code).toLowerCase().includes(s)||
    i.brand.toLowerCase().includes(s)||
    i.group.toLowerCase().includes(s)
  ) : [];

  const totalItems = (data.kits||[]).length + (data.vallejo_unique||[]).length + (data.vallejo_duplicate||[]).length + (data.tamiya||[]).length + (data.primers||[]).length + (data.varnish||[]).length + (data.rack_g_pigments||[]).length + (data.weathering||[]).length + (data.metal_color||[]).length + (data.liquid_metal||[]).length + (data.vallejo_washes_f||[]).length + (data.ak_washes_f||[]).length;

  return (
    <div style={{minHeight:"100vh",background:"#0d0d0d",color:"#e0e0e0",fontFamily:"'Courier New', monospace"}}>
      {/* Header */}
      <div style={{background:"#111",borderBottom:"1px solid #222",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <div>
          <div style={{fontSize:18,fontWeight:700,letterSpacing:2,color:"#fff",textTransform:"uppercase"}}>⚙ Armoury</div>
          <div style={{fontSize:11,color:"#555",letterSpacing:1}}>Scale Model Inventory — {totalItems} items across 7 racks</div>
        </div>
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          {saveMsg && <span style={{color:"#4ecf8a",fontSize:12,fontWeight:700}}>{saveMsg}</span>}
          <span style={{fontSize:11,color:"#444"}}>Persistent storage active</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:0,borderBottom:"1px solid #1e1e1e",background:"#111",overflowX:"auto"}}>
        {TABS.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"10px 18px",background:"transparent",border:"none",borderBottom:tab===t?"2px solid #4e9af1":"2px solid transparent",color:tab===t?"#4e9af1":"#666",cursor:"pointer",fontSize:12,fontWeight:600,letterSpacing:.8,textTransform:"uppercase",whiteSpace:"nowrap",transition:"color .2s"}}>{t}</button>)}
      </div>

      <div style={{padding:"20px 24px",maxWidth:1100,margin:"0 auto"}}>

        {tab==="Kits" && <div>
          <div style={{marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{color:"#888",fontSize:12}}>{(data.kits||[]).length} kits in collection</div>
          </div>
          <Table cols={[
            {label:"Brand",key:"Brand"},
            {label:"Kit Name",key:"Name",render:r=><span style={{color:"#fff",fontWeight:600}}>{r.Name}</span>},
            {label:"#",key:"Item Number"},
            {label:"Scale",render:r=>badge(r.Scale,"#4e9af1")},
            {label:"Type",render:r=>badge(r.Type,r.Type==="Aircraft"?"#7b6cf6":"#f16b4e")},
          ]} rows={data.kits||[]} />
        </div>}

        {tab==="Vallejo" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>{(data.vallejo_unique||[]).length} unique + {(data.vallejo_duplicate||[]).length} duplicates</div>
          <div style={{marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>Unique (Racks A & B)</div>
          <Table cols={[
            {label:"ID",key:"ID Number",render:r=><span style={{color:"#4e9af1",fontFamily:"monospace"}}>{r["ID Number"]}</span>},
            {label:"Color Name",key:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r["Storage Rack"]} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.vallejo_unique||[]} />
          <div style={{marginTop:24,marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>Duplicates (Rack C)</div>
          <Table cols={[
            {label:"ID",key:"ID Number",render:r=><span style={{color:"#f16b4e",fontFamily:"monospace"}}>{r["ID Number"]}</span>},
            {label:"Color Name",key:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r["Storage Rack"]} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.vallejo_duplicate||[]} />
        </div>}

        {tab==="Tamiya" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>{(data.tamiya||[]).length} paints across Racks D & E</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#4ecf8a",fontFamily:"monospace",fontWeight:700}}>{r["Color Code"]}</span>},
            {label:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Series",render:r=>badge(r.Series,r.Series==="XF"?"#4ecf8a":r.Series==="LP"?"#f1c84e":"#7b6cf6")},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.tamiya||[]} />
        </div>}

        {tab==="Metal Color" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>{(data.metal_color||[]).length} Metal Color · {(data.liquid_metal||[]).length} Liquid Metal · {(data.vallejo_washes_f||[]).length} Vallejo Washes · {(data.ak_washes_f||[]).length} AK Washes — Rack F</div>
          <div style={{marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>Vallejo Metal Color</div>
          <Table cols={[
            {label:"ID",render:r=><span style={{color:"#f1c84e",fontFamily:"monospace",fontWeight:700}}>{r["ID Number"]}</span>},
            {label:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.metal_color||[]} />
          <div style={{marginTop:20,marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>Vallejo Liquid Metal</div>
          <Table cols={[
            {label:"ID",render:r=><span style={{color:"#f1c84e",fontFamily:"monospace",fontWeight:700}}>{r["ID Number"]}</span>},
            {label:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.liquid_metal||[]} />
          <div style={{marginTop:20,marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>Vallejo Washes</div>
          <Table cols={[
            {label:"ID",render:r=><span style={{color:"#f1c84e",fontFamily:"monospace",fontWeight:700}}>{r["ID Number"]}</span>},
            {label:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.vallejo_washes_f||[]} />
          <div style={{marginTop:20,marginBottom:8,color:"#aaa",fontSize:13,fontWeight:700}}>AK Interactive Enamel Washes</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#f16b4e",fontFamily:"monospace",fontWeight:700}}>{r["ID Number"]}</span>},
            {label:"Color Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.ak_washes_f||[]} />
        </div>}

        {tab==="Primers" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>Rack F · Row A</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#e05de0",fontFamily:"monospace"}}>{r["Color Code"]}</span>},
            {label:"Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Brand",key:"Brand"},
            {label:"Qty",key:"Quantity"},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.primers||[]} />
        </div>}

        {tab==="Varnish" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>Rack F · Row B</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#e05de0",fontFamily:"monospace"}}>{r["Color Code"]}</span>},
            {label:"Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Brand",key:"Brand"},
            {label:"Qty",key:"Quantity"},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.varnish||[]} />
        </div>}

        {tab==="Pigments" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>Rack G · 20 pigments · Rows A–C · sorted by location</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#e05d8a",fontFamily:"monospace"}}>{r["Color Code"]}</span>},
            {label:"Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
            {label:"Note",render:r=>r.Note?<span style={{color:"#f1c84e",fontSize:11}}>{r.Note}</span>:<span style={{color:"#333"}}>—</span>},
          ]} rows={data.rack_g_pigments||[]} />
        </div>}

        {tab==="Weathering" && <div>
          <div style={{marginBottom:12,color:"#888",fontSize:12}}>Rack G · Rows B–E</div>
          <Table cols={[
            {label:"Code",render:r=><span style={{color:"#e05d8a",fontFamily:"monospace"}}>{r["Color Code"]}</span>},
            {label:"Name",render:r=><span style={{color:"#fff"}}>{r["Color Name"]}</span>},
            {label:"Brand",key:"Brand"},
            {label:"Qty",key:"Quantity"},
            {label:"Location",render:r=><LocationBadge rack={r.Rack} row={r.Row} slot={r.Slot}/>},
          ]} rows={data.weathering||[]} />
        </div>}

        {tab==="Search" && <div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name, code, brand..." style={{...inp(),width:"100%",fontSize:15,padding:"10px 14px",marginBottom:20,boxSizing:"border-box"}} />
          {s.length<2 && <div style={{color:"#555",textAlign:"center",padding:"32px 0",fontSize:13}}>Type at least 2 characters to search all {totalItems} items</div>}
          {s.length>=2 && <div>
            <div style={{color:"#888",fontSize:12,marginBottom:12}}>{filtered.length} results</div>
            <Table cols={[
              {label:"Category",render:r=>badge(r.group,"#7b6cf6")},
              {label:"Name",render:r=><span style={{color:"#fff",fontWeight:600}}>{r.name}</span>},
              {label:"Code/Brand",render:r=><span style={{color:"#aaa",fontSize:12}}>{r.code||""}{r.code&&r.brand?" · ":""}{r.brand}</span>},
              {label:"Location",render:r=>r.rack?<LocationBadge rack={r.rack} row={r.row} slot={r.slot}/>:<span style={{color:"#555",fontSize:11}}>—</span>},
            ]} rows={filtered} emptyMsg="No matches found" />
          </div>}
        </div>}

        {tab==="Workflows" && <div>
          <div style={{marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:4}}>Build Workflows</div>
              <div style={{fontSize:12,color:"#555"}}>Custom glue-first workflows tailored to your inventory</div>
            </div>
            <span style={{background:"#4e9af122",color:"#4e9af1",border:"1px solid #4e9af155",borderRadius:4,padding:"2px 10px",fontSize:11,fontWeight:700}}>1 workflow saved</span>
          </div>
          <div style={{background:"#111",border:"1px solid #222",borderRadius:10,overflow:"hidden",marginBottom:16}}>
            <div style={{background:"#1a1a2e",padding:"16px 20px",borderBottom:"1px solid #222",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:6}}>{DEVASTATOR_WORKFLOW.kit}</div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {badge(DEVASTATOR_WORKFLOW.scheme,"#f1c84e")}
                  {badge("Aircraft","#7b6cf6")}
                  {badge("1:32","#4e9af1")}
                </div>
              </div>
              <div style={{fontSize:11,color:"#555",maxWidth:280,fontStyle:"italic"}}>{DEVASTATOR_WORKFLOW.preferences}</div>
            </div>
            <div style={{padding:"16px 20px"}}>
              {DEVASTATOR_WORKFLOW.stages.map((stage,si)=>{
                const stageColors=["#4e9af1","#7b6cf6","#4ecf8a","#f1c84e","#f16b4e","#4e9af1","#e05de0","#e05d8a","#4ecf8a","#f1c84e"];
                const c=stageColors[si]||"#888";
                return <div key={si} style={{marginBottom:16,paddingBottom:16,borderBottom:si<DEVASTATOR_WORKFLOW.stages.length-1?"1px solid #1e1e1e":"none"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                    <div style={{width:24,height:24,borderRadius:"50%",background:c+"22",border:`1px solid ${c}55`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:c,flexShrink:0}}>{si+1}</div>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{stage.title.replace(/Stage \d+ — /,"")}</div>
                      {stage.note&&<div style={{fontSize:11,color:"#555",fontStyle:"italic"}}>{stage.note}</div>}
                    </div>
                  </div>
                  <div style={{paddingLeft:34}}>
                    {stage.steps.map((step,i)=>{
                      const parts=step.split("→");
                      return <div key={i} style={{fontSize:12,color:"#aaa",marginBottom:5,lineHeight:1.6}}>
                        <span style={{color:"#444",marginRight:6}}>›</span>
                        {parts.length>1
                          ?<>{parts[0].trim()} <span style={{color:"#444"}}>→</span> <span style={{color:"#ddd",fontWeight:600}}>{parts[1].trim()}</span></>
                          :step}
                      </div>;
                    })}
                  </div>
                </div>;
              })}
            </div>
          </div>
          <div style={{color:"#444",fontSize:12,textAlign:"center",padding:"8px 0"}}>Future build workflows will appear here as you plan new kits</div>
        </div>}

        {tab==="Tools" && <div>
          <div style={{marginBottom:20}}>
            <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:4}}>Airbrushes</div>
            <div style={{fontSize:12,color:"#555",marginBottom:12}}>Harder &amp; Steenbeck collection</div>
            <Table cols={[
              {label:"Model",render:r=><span style={{color:"#fff",fontWeight:700}}>{r.Model}</span>},
              {label:"Brand",key:"Brand"},
              {label:"Type",render:r=><span style={{color:"#aaa"}}>{r.Type}</span>},
              {label:"Nozzle",render:r=><span style={{color:"#f1c84e",fontFamily:"monospace",fontSize:12}}>{r.NozzleSize}</span>},
              {label:"Notes",render:r=><span style={{color:"#666",fontSize:12,fontStyle:"italic"}}>{r.Notes}</span>},
            ]} rows={data.airbrushes||[]} />
          </div>
          <div style={{marginTop:28}}>
            <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:4}}>Consumables &amp; Adhesives</div>
            <div style={{fontSize:12,color:"#555",marginBottom:12}}>Glues and other consumables</div>
            <Table cols={[
              {label:"Category",render:r=><span style={{background:"#4ecf8a22",color:"#4ecf8a",border:"1px solid #4ecf8a55",borderRadius:4,padding:"1px 7px",fontSize:11,fontWeight:700}}>{r.Category}</span>},
              {label:"Name",render:r=><span style={{color:"#fff",fontWeight:600}}>{r.Name}</span>},
              {label:"Brand",key:"Brand"},
              {label:"Notes",render:r=><span style={{color:"#666",fontSize:12,fontStyle:"italic"}}>{r.Notes}</span>},
            ]} rows={data.consumables||[]} />
          </div>
        </div>}

        {tab==="Add Item" && <div style={{maxWidth:560}}>
          <div style={{marginBottom:20,color:"#888",fontSize:12}}>Items are saved immediately to persistent storage and available in future sessions.</div>

          <div style={{marginBottom:16}}>
            <label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Item Type</label>
            <select value={addForm.type} onChange={e=>setAddForm({...addForm,type:e.target.value})} style={sel({width:"100%"})}>
              <option value="kit">Model Kit</option>
              <option value="vallejo">Vallejo Paint</option>
              <option value="tamiya">Tamiya Paint</option>
              <option value="primer">Primer</option>
              <option value="varnish">Varnish</option>
              <option value="pigment">Pigment</option>
              <option value="weathering">Weathering Product</option>
            </select>
          </div>

          {addForm.type==="kit" && <>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Brand</label>
                <input value={addForm.brand} onChange={e=>setAddForm({...addForm,brand:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="Tamiya" /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Scale</label>
                <select value={addForm.scale} onChange={e=>setAddForm({...addForm,scale:e.target.value})} style={sel({width:"100%"})}>
                  <option>1:72</option><option>1:48</option><option>1:35</option><option>1:32</option><option>1:24</option>
                </select></div>
            </div>
            <div style={{marginBottom:12}}><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Kit Name</label>
              <input value={addForm.name} onChange={e=>setAddForm({...addForm,name:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="Spitfire Mk.IX" /></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Item #</label>
                <input value={addForm.itemNumber} onChange={e=>setAddForm({...addForm,itemNumber:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="61032" /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Type</label>
                <select value={addForm.kitType} onChange={e=>setAddForm({...addForm,kitType:e.target.value})} style={sel({width:"100%"})}>
                  <option>Aircraft</option><option>Armor</option><option>Ship</option><option>Vehicle</option><option>Figure</option>
                </select></div>
            </div>
          </>}

          {["vallejo","tamiya","primer","varnish","pigment","weathering"].includes(addForm.type) && <>
            {addForm.type==="vallejo" && <div style={{marginBottom:12}}>
              <label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Category</label>
              <select value={addForm.paintCategory} onChange={e=>setAddForm({...addForm,paintCategory:e.target.value})} style={sel({width:"100%"})}>
                <option value="vallejo_unique">Unique (Rack A/B)</option>
                <option value="vallejo_duplicate">Duplicate (Rack C)</option>
              </select>
            </div>}
            {addForm.type==="tamiya" && <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Series</label>
                <select value={addForm.series} onChange={e=>setAddForm({...addForm,series:e.target.value})} style={sel({width:"100%"})}>
                  <option>XF</option><option>X</option><option>LP</option>
                </select></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Size</label>
                <input value={addForm.size} onChange={e=>setAddForm({...addForm,size:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="10ml" /></div>
            </div>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Code / ID</label>
                <input value={addForm.colorCode} onChange={e=>setAddForm({...addForm,colorCode:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="71.052" /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Color Name</label>
                <input value={addForm.colorName} onChange={e=>setAddForm({...addForm,colorName:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="Light Sea Grey" /></div>
            </div>
            {!["primer","varnish","pigment","weathering"].includes(addForm.type) && <div style={{marginBottom:12}}>
              <label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Brand</label>
              <input value={addForm.paintBrand} onChange={e=>setAddForm({...addForm,paintBrand:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} />
            </div>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:16}}>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Rack</label>
                <input value={addForm.rack} onChange={e=>setAddForm({...addForm,rack:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="A" maxLength={1} /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Row</label>
                <input value={addForm.row} onChange={e=>setAddForm({...addForm,row:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="A" maxLength={2} /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Slot</label>
                <input value={addForm.slot} onChange={e=>setAddForm({...addForm,slot:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} placeholder="1" /></div>
              <div><label style={{color:"#aaa",fontSize:11,letterSpacing:.8,textTransform:"uppercase",display:"block",marginBottom:6}}>Qty</label>
                <input type="number" min={1} value={addForm.quantity} onChange={e=>setAddForm({...addForm,quantity:e.target.value})} style={inp({width:"100%",boxSizing:"border-box"})} /></div>
            </div>
          </>}

          <button onClick={handleAdd} style={{background:"#4e9af1",color:"#000",border:"none",borderRadius:6,padding:"10px 28px",fontWeight:700,fontSize:13,letterSpacing:1,textTransform:"uppercase",cursor:"pointer",transition:"opacity .2s"}} onMouseEnter={e=>e.target.style.opacity=.85} onMouseLeave={e=>e.target.style.opacity=1}>
            Add to Inventory
          </button>
          {saveMsg && <span style={{marginLeft:16,color:"#4ecf8a",fontSize:13,fontWeight:700}}>{saveMsg}</span>}
        </div>}

      </div>
    </div>
  );
}
