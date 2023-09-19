// import R from "./ramda.js";

// List of (more common) 5-letter words from: https://games4esl.com/list-of-5-letter-words/
var five_letter_words = ['aback', 'abase', 'abate', 'abide', 'abode', 'abort', 'about', 'abuse', 'abuzz', 'aches', 'achoo', 'acids', 'acidy', 'actor', 'acute', 'adapt', 'added', 'admin', 'admit', 'adobe', 'adopt', 'adorn', 'adult', 'affix', 'afoot', 'afoul', 'after', 'again', 'agent', 'aging', 'aglow', 'agony', 'agree', 'ahead', 'ahold', 'aided', 'aimed', 'aired', 'aisle', 'alarm', 'alert', 'alias', 'alien', 'alike', 'allay', 'allot', 'alloy', 'aloft', 'alone', 'aloof', 'aloud', 'alpha', 'amaze', 'amber', 'amend', 'amino', 'amiss', 'among', 'amour', 'amuse', 'angel', 'anger', 'angle', 'anglo', 'angry', 'anime', 'ankle', 'annul', 'anvil', 'apart', 'apnea', 'apple', 'apply', 'apron', 'areas', 'arena', 'armed', 'armor', 'arose', 'array', 'arson', 'artsy', 'aside', 'asked', 'askew', 'asset', 'atoms', 'atone', 'audio', 'audit', 'aunty', 'avail', 'avert', 'avoid', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke', 'babel', 'babes', 'backs', 'bacon', 'baddy', 'badge', 'badly', 'bagel', 'baggy', 'baked', 'baker', 'bakes', 'baler', 'balky', 'balls', 'balmy', 'bands', 'bandy', 'banks', 'bared', 'barks', 'barmy', 'baron', 'based', 'basic', 'basil', 'basin', 'batch', 'bates', 'baths', 'baton', 'batty', 'beach', 'beads', 'beady', 'beaky', 'beams', 'beamy', 'beans', 'beard', 'bears', 'beast', 'bebop', 'beech', 'beeps', 'beers', 'began', 'begin', 'begot', 'beige', 'belch', 'belle', 'bells', 'belly', 'below', 'belts', 'bench', 'bends', 'bendy', 'berth', 'beset', 'besot', 'bests', 'bibbs', 'bible', 'bicep', 'bides', 'bidet', 'biked', 'biker', 'bikes', 'bills', 'binge', 'bingo', 'bipod', 'birch', 'birds', 'birth', 'bison', 'bites', 'black', 'blade', 'blame', 'blank', 'blaze', 'bleak', 'bleed', 'bleep', 'blend', 'bless', 'blest', 'blimp', 'blind', 'bling', 'blink', 'bliss', 'bloat', 'block', 'blond', 'blood', 'bloom', 'blown', 'blows', 'blowy', 'blues', 'bluff', 'blunt', 'blurs', 'board', 'boast', 'boats', 'bogus', 'boils', 'bombs', 'boned', 'bones', 'books', 'boost', 'booth', 'booze', 'bored', 'borne', 'bound', 'bowel', 'bowls', 'boxed', 'boxer', 'boxes', 'brace', 'braid', 'brail', 'brain', 'brake', 'brand', 'brass', 'brawl', 'bread', 'breed', 'bribe', 'bring', 'broad', 'broke', 'brown', 'brush', 'brute', 'budge', 'built', 'bully', 'bumpy', 'bunch', 'bunny', 'burns', 'burnt', 'bushy', 'butts', 'buyer', 'cabin', 'cable', 'cache', 'caddy', 'cadet', 'caked', 'cakes', 'calve', 'camel', 'cameo', 'camps', 'canal', 'candy', 'canoe', 'canon', 'cards', 'cargo', 'carol', 'carry', 'carts', 'carve', 'cased', 'casts', 'catch', 'cause', 'caved', 'caves', 'cease', 'cedar', 'cello', 'cells', 'celts', 'cents', 'chain', 'chair', 'chalk', 'champ', 'chart', 'chase', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chefs', 'chess', 'chest', 'chews', 'chewy', 'chick', 'chief', 'child', 'chime', 'chips', 'chirp', 'chive', 'choir', 'choke', 'chomp', 'chore', 'chuck', 'churn', 'chute', 'cider', 'cigar', 'claim', 'clasp', 'class', 'clean', 'cleat', 'cliff', 'climb', 'cloak', 'clone', 'close', 'cloth', 'cloud', 'clout', 'clown', 'clubs', 'clues', 'coast', 'coded', 'coils', 'coins', 'colds', 'color', 'combo', 'comes', 'comfy', 'condo', 'cones', 'coral', 'cords', 'corny', 'costs', 'couch', 'cough', 'could', 'count', 'cover', 'covid', 'crabs', 'crack', 'craft', 'crane', 'crawl', 'craze', 'crazy', 'cream', 'cribs', 'cried', 'cries', 'crime', 'crisp', 'croak', 'crowd', 'crown', 'crude', 'crumb', 'cupid', 'cured', 'curly', 'curry', 'curve', 'curvy', 'cutch', 'cuter', 'cysts', 'daddy', 'daily', 'dairy', 'daisy', 'dance', 'dandy', 'darts', 'dated', 'dates', 'deals', 'dealt', 'death', 'debts', 'debut', 'decaf', 'decay', 'decks', 'decor', 'decoy', 'deeds', 'deems', 'deity', 'delay', 'delta', 'delve', 'demon', 'denim', 'dense', 'depth', 'derby', 'desks', 'deter', 'detox', 'diary', 'diced', 'dices', 'diets', 'dingy', 'dirty', 'discs', 'ditch', 'ditto', 'ditty', 'dives', 'docks', 'dodge', 'doggy', 'doing', 'dolls', 'donor', 'doors', 'doped', 'doted', 'dotty', 'dough', 'doves', 'downs', 'dowry', 'dozer', 'dozes', 'draft', 'drags', 'drain', 'drake', 'drama', 'drank', 'drape', 'drawl', 'drawn', 'draws', 'dread', 'dream', 'dress', 'dried', 'drier', 'drill', 'drink', 'drive', 'droid', 'drone', 'drool', 'drops', 'drove', 'drown', 'drugs', 'druid', 'drums', 'drunk', 'dryer', 'duals', 'ducts', 'dudes', 'duets', 'duked', 'dukes', 'dumps', 'dunce', 'dunes', 'duped', 'dusty', 'duvet', 'dwarf', 'dweeb', 'dwell', 'dying', 'eager', 'eagle', 'early', 'earns', 'earth', 'eased', 'easel', 'eaten', 'eater', 'ebony', 'edema', 'edges', 'edits', 'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elite', 'elope', 'elude', 'email', 'embed', 'ember', 'emend', 'emoji', 'emote', 'empty', 'enact', 'ended', 'enema', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'equip', 'erase', 'erect', 'erode', 'error', 'erupt', 'essay', 'ether', 'ethic', 'etude', 'euros', 'event', 'every', 'evils', 'exact', 'exams', 'excel', 'exile', 'exist', 'exits', 'expel', 'extra', 'fable', 'faced', 'faces', 'facet', 'facts', 'fades', 'fails', 'faint', 'fairs', 'fairy', 'fakes', 'falls', 'false', 'famed', 'fancy', 'fangs', 'farce', 'farms', 'fatal', 'fated', 'fatty', 'favor', 'fazed', 'fears', 'feast', 'fecal', 'feeds', 'feels', 'feint', 'feist', 'fella', 'felon', 'fence', 'ferry', 'fetal', 'fetch', 'fever', 'fiber', 'field', 'fiend', 'fifth', 'fifty', 'fight', 'files', 'films', 'filth', 'final', 'finds', 'fined', 'fired', 'fires', 'first', 'fishy', 'fists', 'fitch', 'fiver', 'fives', 'fixed', 'fixer', 'fixes', 'fizzy', 'flags', 'flake', 'flame', 'flank', 'flaps', 'flare', 'flash', 'flask', 'flats', 'fleas', 'fleet', 'flesh', 'flied', 'flies', 'fling', 'flips', 'flirt', 'float', 'flock', 'flood', 'floor', 'flora', 'flour', 'flown', 'fluff', 'fluid', 'fluke', 'flume', 'flush', 'flute', 'flyer', 'foamy', 'focus', 'foggy', 'folks', 'fonts', 'foods', 'fools', 'force', 'forge', 'forgo', 'forks', 'forth', 'forty', 'forum', 'found', 'frail', 'frame', 'frank', 'fraud', 'freak', 'freed', 'fresh', 'fried', 'fries', 'frisk', 'frock', 'frogs', 'front', 'frost', 'frown', 'fruit', 'fryer', 'fudge', 'fuels', 'fully', 'fumed', 'fumes', 'funds', 'funny', 'fused', 'fussy', 'fuzzy', 'gable', 'gaffs', 'gains', 'gales', 'gamed', 'gamer', 'games', 'gangs', 'gases', 'gasps', 'gassy', 'gated', 'gaunt', 'gears', 'geeks', 'geeky', 'genes', 'genie', 'genre', 'gents', 'genus', 'germs', 'ghost', 'giant', 'giddy', 'gifts', 'girls', 'girly', 'given', 'glade', 'glare', 'glass', 'glaze', 'glean', 'glide', 'gloat', 'globe', 'globs', 'gloom', 'glory', 'gloss', 'glove', 'glows', 'glued', 'glues', 'gnarl', 'gnome', 'goads', 'goats', 'going', 'goods', 'goofy', 'goopy', 'goose', 'gored', 'gouge', 'grabs', 'grace', 'grade', 'grain', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grass', 'gravy', 'graze', 'great', 'greed', 'green', 'greet', 'grief', 'grill', 'grind', 'gripe', 'grips', 'groan', 'groom', 'grope', 'gross', 'group', 'grove', 'growl', 'grown', 'grows', 'gruel', 'grunt', 'guard', 'guess', 'guest', 'guide', 'guild', 'guilt', 'gulps', 'gummy', 'gusts', 'gutsy', 'habit', 'hacks', 'hairy', 'halls', 'halve', 'hands', 'handy', 'hangs', 'happy', 'hardy', 'harsh', 'hatch', 'hated', 'hater', 'hates', 'haunt', 'haven', 'havoc', 'hazed', 'heads', 'heard', 'heart', 'heavy', 'heist', 'helps', 'hence', 'herby', 'hides', 'hiked', 'hiker', 'hikes', 'hills', 'hinds', 'hinge', 'hints', 'hippo', 'hippy', 'hired', 'hitch', 'hoard', 'hobby', 'hocus', 'holds', 'holed', 'holes', 'holey', 'homed', 'honor', 'hoods', 'hoots', 'hopes', 'horde', 'horse', 'hosed', 'hoses', 'hosts', 'hound', 'hours', 'hover', 'howdy', 'hubby', 'human', 'humid', 'humor', 'humph', 'humps', 'hurry', 'hurts', 'icier', 'icing', 'icons', 'ideal', 'ideas', 'idiot', 'idles', 'idols', 'igloo', 'image', 'inbox', 'incur', 'index', 'inept', 'inked', 'inlet', 'inner', 'input', 'inset', 'intel', 'intro', 'iodin', 'ionic', 'irate', 'irons', 'irony', 'issue', 'items', 'ivory', 'jacks', 'jaded', 'jades', 'jails', 'janky', 'jaunt', 'jeans', 'jeers', 'jelly', 'jerks', 'jerky', 'jests', 'jewel', 'jiffy', 'jiggy', 'jinks', 'jived', 'jives', 'joins', 'joint', 'joked', 'joker', 'jokes', 'jokey', 'jolly', 'jolts', 'jowls', 'judge', 'juice', 'juicy', 'jumbo', 'jumps', 'jumpy', 'junky', 'juror', 'juvie', 'karat', 'karma', 'kayak', 'kebab', 'keels', 'keeps', 'kefir', 'keyed', 'kicks', 'kiddo', 'kiddy', 'kings', 'kiosk', 'kited', 'kites', 'knack', 'kneel', 'knees', 'knell', 'knife', 'knobs', 'knock', 'known', 'knows', 'knubs', 'koala', 'kooks', 'kraft', 'label', 'labor', 'laced', 'laces', 'lacks', 'lager', 'lairy', 'lakes', 'lambs', 'lamps', 'lands', 'lapse', 'large', 'lasts', 'later', 'laugh', 'lawed', 'lawns', 'layer', 'leach', 'leady', 'leaks', 'leaky', 'leaps', 'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'leeks', 'legal', 'leggy', 'legit', 'lemon', 'lemur', 'lends', 'letch', 'letup', 'level', 'lever', 'lexis', 'liars', 'libel', 'libra', 'lifts', 'light', 'liked', 'likes', 'limit', 'lined', 'linen', 'liner', 'lingo', 'lings', 'links', 'lions', 'lisps', 'lists', 'lived', 'liver', 'lives', 'loads', 'loans', 'loath', 'lobby', 'local', 'locks', 'lodge', 'lofts', 'logic', 'login', 'loner', 'longs', 'looks', 'looms', 'loops', 'loose', 'lords', 'loser', 'loses', 'lossy', 'lotto', 'lotus', 'lousy', 'loved', 'lover', 'loves', 'lower', 'loyal', 'lucid', 'lucks', 'lucky', 'lumpy', 'lunch', 'lungs', 'lurch', 'lured', 'lurks', 'lying', 'lymph', 'lyric', 'macho', 'macro', 'madam', 'madly', 'mafia', 'magic', 'maids', 'mains', 'major', 'maker', 'males', 'males', 'mango', 'mania', 'manic', 'manly', 'maple', 'march', 'marks', 'marry', 'marsh', 'masks', 'mason', 'mates', 'mauls', 'maxim', 'maybe', 'mayor', 'meals', 'means', 'meant', 'meaty', 'medal', 'melon', 'melts', 'mends', 'merch', 'mercy', 'merge', 'merit', 'merry', 'messy', 'metal', 'meter', 'metro', 'micro', 'midst', 'might', 'miles', 'milky', 'mimic', 'mince', 'minds', 'minor', 'mints', 'minty', 'mirky', 'mites', 'mixed', 'mixer', 'mocha', 'mocks', 'modal', 'model', 'modem', 'modes', 'mogul', 'moist', 'mommy', 'month', 'moons', 'moose', 'moral', 'motel', 'motor', 'motto', 'mound', 'mount', 'mourn', 'mouse', 'mouth', 'moved', 'mover', 'moves', 'movie', 'mucky', 'mucus', 'muddy', 'multi', 'mummy', 'music', 'muted', 'myths', 'nacho', 'nails', 'naive', 'naked', 'named', 'names', 'nanny', 'nasal', 'nasty', 'natal', 'navel', 'nears', 'necks', 'needs', 'needy', 'nerds', 'nerdy', 'nerve', 'nervy', 'nests', 'never', 'newly', 'nicer', 'niche', 'niece', 'night', 'nines', 'ninth', 'noble', 'nobly', 'noisy', 'nomad', 'north', 'noses', 'nosey', 'noted', 'notes', 'nouns', 'nudge', 'nuked', 'nurse', 'nutty', 'nylon', 'oasis', 'obese', 'obeys', 'ocean', 'oddly', 'offal', 'offer', 'often', 'oiled', 'older', 'olive', 'omega', 'omens', 'onion', 'onset', 'opens', 'opera', 'opium', 'organ', 'ought', 'ounce', 'ousts', 'outer', 'ovary', 'ovens', 'overt', 'owing', 'owned', 'owner', 'oxide', 'ozone', 'paced', 'pacer', 'pacts', 'paged', 'pager', 'pages', 'pains', 'paint', 'pairs', 'palms', 'panda', 'panel', 'panic', 'pants', 'panty', 'paper', 'parse', 'parts', 'party', 'pasta', 'paste', 'pasty', 'patch', 'paths', 'peace', 'peach', 'pearl', 'pecan', 'pedal', 'peels', 'peers', 'penny', 'peril', 'perky', 'pesto', 'pests', 'petal', 'photo', 'piano', 'piece', 'piled', 'pinch', 'pitch', 'pivot', 'pizza', 'place', 'plain', 'plane', 'plank', 'plans', 'plant', 'plate', 'plays', 'plugs', 'plump', 'plums', 'poach', 'poems', 'poets', 'poked', 'pokes', 'pooch', 'pores', 'pound', 'power', 'prank', 'prays', 'price', 'pride', 'print', 'prior', 'prism', 'privy', 'prize', 'probe', 'props', 'proud', 'prude', 'puffy', 'pulse', 'pumps', 'punch', 'puppy', 'puree', 'purge', 'purse', 'putty', 'pylon', 'quads', 'quake', 'queen', 'query', 'quest', 'queue', 'quick', 'quiet', 'quill', 'quilt', 'quirk', 'quite', 'quits', 'quota', 'quote', 'rabid', 'raced', 'racer', 'races', 'racks', 'radar', 'radio', 'raged', 'rages', 'rails', 'rains', 'rainy', 'raked', 'rally', 'ramen', 'ramps', 'ranch', 'range', 'rapid', 'raspy', 'rated', 'rates', 'ratio', 'raved', 'raven', 'razer', 'razor', 'react', 'ready', 'realm', 'reams', 'rebel', 'rebid', 'rebuy', 'recap', 'recon', 'rehab', 'reign', 'reins', 'relay', 'relic', 'remit', 'remix', 'renal', 'renew', 'repay', 'reply', 'reset', 'resin', 'retro', 'retry', 'reuse', 'rhino', 'rhyme', 'rides', 'ridge', 'rifle', 'rifts', 'right', 'rigid', 'rings', 'rinse', 'riots', 'ripen', 'rises', 'risks', 'risky', 'rites', 'river', 'roads', 'roars', 'roast', 'robot', 'rocks', 'rocky', 'rodeo', 'rogue', 'roles', 'rolls', 'roots', 'roped', 'ropes', 'roses', 'rough', 'round', 'rouse', 'route', 'rover', 'royal', 'ruble', 'rugby', 'ruins', 'ruled', 'ruler', 'rules', 'rumor', 'runny', 'rural', 'rusty', 'saber', 'sacks', 'sadly', 'safer', 'saint', 'salad', 'sales', 'salon', 'salsa', 'salts', 'salty', 'sandy', 'satin', 'sauce', 'saucy', 'sauna', 'saved', 'saver', 'saves', 'savor', 'scald', 'scale', 'scalp', 'scams', 'scare', 'scarf', 'scary', 'scene', 'scent', 'scoff', 'scone', 'scope', 'lives', 'scorn', 'scour', 'scram', 'scrub', 'scuba', 'scuff', 'seats', 'sects', 'seeds', 'seeks', 'seems', 'seize', 'sends', 'sense', 'serve', 'setup', 'seven', 'sever', 'sewer', 'shack', 'shade', 'shaft', 'shake', 'shall', 'shame', 'shape', 'shark', 'shelf', 'shell', 'shift', 'shine', 'shiny', 'ships', 'shirt', 'shock', 'shoot', 'shore', 'shots', 'shout', 'shred', 'shrug', 'sided', 'silky', 'silly', 'since', 'sings', 'sinks', 'sinus', 'sited', 'sites', 'sixth', 'sixty', 'sized', 'sizes', 'skate', 'skies', 'skill', 'slack', 'slang', 'slave', 'sleep', 'sleet', 'slept', 'slick', 'slide', 'slime', 'sling', 'slope', 'slosh', 'sloth', 'slung', 'slurp', 'slush', 'small', 'smart', 'smash', 'smear', 'smell', 'smelt', 'smile', 'smoke', 'smoky', 'snack', 'snail', 'snake', 'snare', 'snoop', 'snore', 'snuff', 'sober', 'socks', 'softy', 'solve', 'sound', 'space', 'spade', 'spare', 'spark', 'speak', 'spear', 'speed', 'speel', 'spicy', 'spied', 'spies', 'spiky', 'spill', 'spine', 'spite', 'split', 'spoil', 'spoke', 'spoof', 'spoon', 'sport', 'spots', 'spout', 'squad', 'squid', 'stack', 'staff', 'stage', 'stair', 'stalk', 'stamp', 'stare', 'stars', 'start', 'stash', 'state', 'steak', 'steal', 'steam', 'steel', 'steep', 'steps', 'stich', 'stick', 'stiff', 'sting', 'stink', 'stint', 'stock', 'stoke', 'stomp', 'stone', 'stood', 'stool', 'stoop', 'store', 'storm', 'story', 'stove', 'straw', 'stray', 'stubs', 'stuck', 'stuff', 'stunt', 'style', 'sugar', 'suite', 'sunny', 'super', 'sushi', 'sweat', 'sweet', 'swell', 'swept', 'swift', 'swing', 'swipe', 'swish', 'sword', 'sworn', 'syrup', 'table', 'taboo', 'taken', 'taker', 'takes', 'tales', 'talon', 'tango', 'tardy', 'taste', 'tasty', 'taxed', 'taxes', 'teach', 'tease', 'teeth', 'tenet', 'tenth', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thigh', 'thing', 'think', 'thorn', 'those', 'three', 'threw', 'throw', 'thugs', 'thumb', 'tibia', 'tiger', 'tight', 'timer', 'tinge', 'tipsy', 'tired', 'tires', 'titan', 'titer', 'title', 'toast', 'token', 'tonic', 'tooth', 'topic', 'torch', 'torso', 'total', 'touch', 'tough', 'towel', 'tower', 'toxic', 'trace', 'tract', 'trade', 'train', 'trait', 'tramp', 'trash', 'tread', 'trend', 'trial', 'trick', 'tried', 'truce', 'truck', 'truly', 'trunk', 'truth', 'tulip', 'tummy', 'tuned', 'tuner', 'turbo', 'tweak', 'tweed', 'twice', 'twirl', 'twist', 'typed', 'ulcer', 'ultra', 'uncle', 'under', 'undue', 'unfit', 'unify', 'union', 'unite', 'unity', 'untie', 'until', 'unzip', 'upend', 'upper', 'upset', 'urban', 'urine', 'usage', 'using', 'usurp', 'vague', 'valet', 'valid', 'value', 'valve', 'vapor', 'vault', 'vegan', 'venom', 'venue', 'verge', 'verve', 'video', 'villa', 'vinyl', 'viola', 'viper', 'viral', 'visit', 'vital', 'vivid', 'vocal', 'voice', 'vomit', 'vouch', 'wacky', 'waded', 'wager', 'wages', 'wagon', 'waist', 'walks', 'walls', 'wants', 'warns', 'warty', 'washy', 'waste', 'watch', 'water', 'waved', 'wavey', 'waxed', 'weary', 'weeks', 'weigh', 'weird', 'wench', 'whack', 'whale', 'wheat', 'wheel', 'where', 'which', 'while', 'whisk', 'white', 'whole', 'whoof', 'whose', 'widen', 'wider', 'widow', 'width', 'wield', 'wimpy', 'wince', 'winch', 'windy', 'wined', 'wiped', 'wiper', 'wipes', 'wispy', 'witch', 'witty', 'wives', 'woken', 'woman', 'women', 'wonky', 'woozy', 'wordy', 'world', 'worst', 'would', 'wound', 'wreak', 'wreck', 'wring', 'wrist', 'write', 'wrong', 'wrote', 'words', 'xebec', 'xeric', 'xenia', 'xenon', 'xians', 'yacht', 'yahoo', 'yappy', 'yarns', 'yearn', 'years', 'yeast', 'yield', 'yikes', 'young', 'yours', 'yucky', 'yummy', 'yuppy', 'yurts', 'zebra', 'zeros', 'zesty', 'zilch', 'zingy', 'zippy', 'zones', 'zonks', 'zooms'];

// Picks a five letter word at random from that list and assigns it to variable chosenword
var chosenword = five_letter_words[Math.floor(Math.random() * five_letter_words.length)];

// console.log("Chosen word:", chosenword);

// creates two variables and assigns start value to them
let playerlives = 7;
let score = 0;


/**
 * This function disables all letters button on the page by checking against the letters array and setting the disabled property to true meaning they no longer can be pressed and interacted with.
 */
function disable_buttons() {
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i = 0; i < letters.length; i++) {
        document.getElementById("letter-" + letters[i]).disabled = true;
    }
}

/**
 * Checks input from the user for which letter button they pressed
 * @param {*} letter The letter that was pressed
 */
function button_clicked(letter) {
    // console.log(letter);

    // Checks that letter against the chosenword
    if (chosenword.includes(letter)) {

        // Updates the colour of the letters button that was pressed respective to its contribution to the chosenword
        // Green if present in word
        document.getElementById("letter-" + letter).style.backgroundColor = "green";
        // console.log("correct letter");
        // Red if not present in word
    } else {
        document.getElementById("letter-" + letter).style.backgroundColor = "red";
    }
    //stops same letter being clicked twice and therefore impacting the lives counter more than once
    document.getElementById("letter-" + letter).disabled = true;



    // lives counter update
    const lives = document.getElementById('livescounter');

    function updatelives() {
        lives.innerHTML = "Lives: " + playerlives;
    }


    // checks if the letters pressed are in the word
    //if yes then it is added to the game cells and (invisible) score goes up respectively to the number of the correct letter in chosen word
    //(invisible score counter is used to track if the whole word has been guessed correctly so the score value is not visible to user)
    //if not the gamecells will remain the same

    // for loop iterates through the gamecell elements and sets the textContent of the gamecell.children element to the letter and updates score by plus one

    const gamecells = document.getElementById("gamecells");
    var failed = true;
    for (var i = 0; i < chosenword.length; i++) {
        if (chosenword[i] == letter) {
            gamecells.children[i].textContent = letter;
            failed = false;
            score++;
        }
    }

    //if letters pressed is not in the chosenword then lives counter will go down by one
    if (failed) {
        if (playerlives > 0) {
            playerlives--;
            updatelives();
        }
    }

    // How to add/update the image respective to lives left: https://stackoverflow.com/questions/73003252/display-image-form-a-file
    var hangmanupdate = "chalk_hangman_" + playerlives + ".png"
    document.getElementById('chalk_hangman').src = hangmanupdate;



    //checks number of attempts using lives counter and if zero:
    //it will disable the letters so they can no longer be pressed, displays lose message and tells you what the chosen word was

    if (playerlives < 1) {
        disable_buttons()
        document.getElementById("Lost").innerHTML = "You lost";
        document.getElementById("Chosen-word").innerHTML = "The word was: " + chosenword;
    }


    //displays win message if all letters guessed correctly
    if (score == 5) {
        document.getElementById("Win").innerHTML = "You Won";
    }
}


// https://stackoverflow.com/questions/49338193/how-to-use-code-from-script-with-type-module
window.button_clicked = button_clicked



/**
 * Updates player lives remaining
 */
function updatelives() {
    const playerlives_ = document.getElementById("livescounter");

    playerlives_.textContent = `Lives: ${playerlives}`;
}


/**
 * Reset button makes the game refresh and choose a new word.
 * It will also reset: the pressed letters, messages, lives counter, hangman image and text in gamecells.
 */
function reset() {
    chosenword = five_letter_words[Math.floor(Math.random() * five_letter_words.length)];
    for (let i = 0; i < 5; i++) {
        gamecells.children[i].textContent = "";
    }
    playerlives = 7;
    updatelives();
    score = 0;
    document.getElementById("chalk_hangman").src = "chalk_hangman_7.png";
    document.getElementById("Chosen-word").innerHTML = "";
    document.getElementById("Lost").innerHTML = "";
    document.getElementById("Win").innerHTML = "";

    const keyboard = document.getElementById("letters").children;
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].style.backgroundColor = ""
        keyboard[i].disabled = false

    }
}

window.reset = reset;

