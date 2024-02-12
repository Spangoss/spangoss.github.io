var app = angular.module('tradeSkills', []);

app.filter("unique", function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];
        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

app.controller('tradeSkillsCntrl', function ($scope) {

    $scope.showImportTab = false;
    $scope.toggleImportTab = function () {
        $scope.showImportTab = !$scope.showImportTab;
    }


    $scope.convertExport = function () {
        var arrInput = $scope.tradeSkillsInput.split('\n');
        var arrSkills = [];
        for (var i = 0; i < arrInput.length; i++) {
            var skillString = arrInput[i];
            var idIndex = skillString.indexOf('=', 1);
            var tabIndex = skillString.indexOf('\t');
            var objSkill = {};
            objSkill.id = skillString.substring(idIndex + 1, tabIndex - 1);
            objSkill.name = skillString.slice(tabIndex + 1, -1);
            objSkill.category = getCategory(objSkill.name);
            arrSkills.push(objSkill);
        };
        var output = JSON.stringify(arrSkills);
        document.getElementById('wowProfessions').innerHTML = output;
    }

    // Copy the values to the clipboard
    $scope.copyWowTradeSkills = function (id) {
        var copyText = document.getElementById(id).textContent;
        navigator.clipboard.writeText(copyText);
        alert('Copied to Clipboard!');
    }

    // Clear text area
    $scope.clearTextArea = function (id) {
        document.getElementById(id).value = '';
    }

    $scope.enchantingFormulas = [{ "id": "13695", "name": "Enchant 2H Weapon - Impact", "category": "2H Weapon" }, { "id": "13836", "name": "Enchant Boots - Stamina", "category": "Boots" }, { "id": "13822", "name": "Enchant Bracer - Intellect", "category": "Bracer" }, { "id": "13700", "name": "Enchant Chest - Lesser Stats", "category": "Chest" }, { "id": "13746", "name": "Enchant Cloak - Greater Defense", "category": "Cloak" }, { "id": "13794", "name": "Enchant Cloak - Resistance", "category": "Cloak" }, { "id": "13841", "name": "Enchant Gloves - Advanced Mining", "category": "Gloves" }, { "id": "13815", "name": "Enchant Gloves - Agility", "category": "Gloves" }, { "id": "13702", "name": "Runed Truesilver Rod", "category": "Other" }, { "id": "13661", "name": "Enchant Bracer - Strength", "category": "Bracer" }, { "id": "13663", "name": "Enchant Chest - Greater Mana", "category": "Chest" }, { "id": "13659", "name": "Enchant Shield - Spirit", "category": "Shield" }, { "id": "13693", "name": "Enchant Weapon - Striking", "category": "Weapon" }, { "id": "21931", "name": "Enchant Weapon - Winter's Might", "category": "Weapon" }, { "id": "25126", "name": "Lesser Wizard Oil", "category": "Other" }, { "id": "13637", "name": "Enchant Boots - Lesser Agility", "category": "Boots" }, { "id": "13644", "name": "Enchant Boots - Lesser Stamina", "category": "Boots" }, { "id": "13642", "name": "Enchant Bracer - Spirit", "category": "Bracer" }, { "id": "13648", "name": "Enchant Bracer - Stamina", "category": "Bracer" }, { "id": "13640", "name": "Enchant Chest - Greater Health", "category": "Chest" }, { "id": "13657", "name": "Enchant Cloak - Fire Resistance", "category": "Cloak" }, { "id": "439134", "name": "Greater Mystic Wand", "category": "Wands" }, { "id": "430409", "name": "Blackfathom Mana Oil", "category": "Other" }, { "id": "13529", "name": "Enchant 2H Weapon - Lesser Impact", "category": "2H Weapon" }, { "id": "7793", "name": "Enchant 2H Weapon - Lesser Intellect", "category": "2H Weapon" }, { "id": "13380", "name": "Enchant 2H Weapon - Lesser Spirit", "category": "2H Weapon" }, { "id": "7745", "name": "Enchant 2H Weapon - Minor Impact", "category": "2H Weapon" }, { "id": "7867", "name": "Enchant Boots - Minor Agility", "category": "Boots" }, { "id": "7863", "name": "Enchant Boots - Minor Stamina", "category": "Boots" }, { "id": "13622", "name": "Enchant Bracer - Lesser Intellect", "category": "Bracer" }, { "id": "7859", "name": "Enchant Bracer - Lesser Spirit", "category": "Bracer" }, { "id": "13501", "name": "Enchant Bracer - Lesser Stamina", "category": "Bracer" }, { "id": "13536", "name": "Enchant Bracer - Lesser Strength", "category": "Bracer" }, { "id": "7779", "name": "Enchant Bracer - Minor Agility", "category": "Bracer" }, { "id": "7428", "name": "Enchant Bracer - Minor Deflect", "category": "Bracer" }, { "id": "7418", "name": "Enchant Bracer - Minor Health", "category": "Bracer" }, { "id": "7766", "name": "Enchant Bracer - Minor Spirit", "category": "Bracer" }, { "id": "7457", "name": "Enchant Bracer - Minor Stamina", "category": "Bracer" }, { "id": "7782", "name": "Enchant Bracer - Minor Strength", "category": "Bracer" }, { "id": "7857", "name": "Enchant Chest - Health", "category": "Chest" }, { "id": "13538", "name": "Enchant Chest - Lesser Absorption", "category": "Chest" }, { "id": "7748", "name": "Enchant Chest - Lesser Health", "category": "Chest" }, { "id": "7776", "name": "Enchant Chest - Lesser Mana", "category": "Chest" }, { "id": "13607", "name": "Enchant Chest - Mana", "category": "Chest" }, { "id": "7426", "name": "Enchant Chest - Minor Absorption", "category": "Chest" }, { "id": "7420", "name": "Enchant Chest - Minor Health", "category": "Chest" }, { "id": "7443", "name": "Enchant Chest - Minor Mana", "category": "Chest" }, { "id": "13626", "name": "Enchant Chest - Minor Stats", "category": "Chest" }, { "id": "13635", "name": "Enchant Cloak - Defense", "category": "Cloak" }, { "id": "7861", "name": "Enchant Cloak - Lesser Fire Resistance", "category": "Cloak" }, { "id": "13421", "name": "Enchant Cloak - Lesser Protection", "category": "Cloak" }, { "id": "13522", "name": "Enchant Cloak - Lesser Shadow Resistance", "category": "Cloak" }, { "id": "13419", "name": "Enchant Cloak - Minor Agility", "category": "Cloak" }, { "id": "7771", "name": "Enchant Cloak - Minor Protection", "category": "Cloak" }, { "id": "7454", "name": "Enchant Cloak - Minor Resistance", "category": "Cloak" }, { "id": "13620", "name": "Enchant Gloves - Fishing", "category": "Gloves" }, { "id": "13612", "name": "Enchant Gloves - Mining", "category": "Gloves" }, { "id": "13464", "name": "Enchant Shield - Lesser Protection", "category": "Shield" }, { "id": "13485", "name": "Enchant Shield - Lesser Spirit", "category": "Shield" }, { "id": "13631", "name": "Enchant Shield - Lesser Stamina", "category": "Shield" }, { "id": "13378", "name": "Enchant Shield - Minor Stamina", "category": "Shield" }, { "id": "13503", "name": "Enchant Weapon - Lesser Striking", "category": "Weapon" }, { "id": "7786", "name": "Enchant Weapon - Minor Beastslayer", "category": "Weapon" }, { "id": "7788", "name": "Enchant Weapon - Minor Striking", "category": "Weapon" }, { "id": "14807", "name": "Greater Magic Wand", "category": "Wands" }, { "id": "14293", "name": "Lesser Magic Wand", "category": "Wands" }, { "id": "14809", "name": "Lesser Mystic Wand", "category": "Wands" }, { "id": "25125", "name": "Minor Mana Oil", "category": "Other" }, { "id": "25124", "name": "Minor Wizard Oil", "category": "Other" }, { "id": "7421", "name": "Runed Copper Rod", "category": "Other" }, { "id": "13628", "name": "Runed Golden Rod", "category": "Other" }, { "id": "7795", "name": "Runed Silver Rod", "category": "Other" }];
    $scope.enchantingFormulasCount = $scope.enchantingFormulas.length;
    $scope.tailoringPatterns = [{ "id": "5764", "name": "Green Silk Pack", "category": "Other" }, { "id": "4245", "name": "Small Silk Pack", "category": "Other" }, { "id": "5763", "name": "Red Woolen Bag", "category": "Other" }, { "id": "4241", "name": "Green Woolen Bag", "category": "Other" }, { "id": "4240", "name": "Woolen Bag", "category": "Other" }, { "id": "5762", "name": "Red Linen Bag", "category": "Other" }, { "id": "4238", "name": "Linen Bag", "category": "Other" }, { "id": "217247", "name": "Black Mageweave Leggings", "category": "Other" }, { "id": "217246", "name": "Black Mageweave Vest", "category": "Other" }, { "id": "7054", "name": "Robe of Power", "category": "Other" }, { "id": "7062", "name": "Crimson Silk Pantaloons", "category": "Other" }, { "id": "7058", "name": "Crimson Silk Vest", "category": "Other" }, { "id": "7052", "name": "Azure Silk Belt", "category": "Other" }, { "id": "217255", "name": "Crimson Silk Belt", "category": "Other" }, { "id": "217256", "name": "Earthen Vest", "category": "Other" }, { "id": "4324", "name": "Azure Silk Vest", "category": "Other" }, { "id": "215366", "name": "Invoker's Cord", "category": "Other" }, { "id": "215365", "name": "Invoker's Mantle", "category": "Other" }, { "id": "4319", "name": "Azure Silk Gloves", "category": "Other" }, { "id": "7047", "name": "Hands of Darkness", "category": "Other" }, { "id": "7046", "name": "Azure Silk Pants", "category": "Other" }, { "id": "210795", "name": "Extraplanar Spidersilk Boots", "category": "Other" }, { "id": "5766", "name": "Lesser Wizard's Robe", "category": "Other" }, { "id": "4320", "name": "Spidersilk Boots", "category": "Other" }, { "id": "7050", "name": "Silk Headband", "category": "Other" }, { "id": "4318", "name": "Gloves of Meditation", "category": "Other" }, { "id": "4314", "name": "Double-stitched Woolen Shoulders", "category": "Other" }, { "id": "4316", "name": "Heavy Woolen Pants", "category": "Other" }, { "id": "6787", "name": "White Woolen Dress", "category": "Other" }, { "id": "7048", "name": "Azure Silk Hood", "category": "Other" }, { "id": "2585", "name": "Gray Woolen Robe", "category": "Other" }, { "id": "4311", "name": "Heavy Woolen Cloak", "category": "Other" }, { "id": "6263", "name": "Blue Overalls", "category": "Other" }, { "id": "4313", "name": "Red Woolen Boots", "category": "Other" }, { "id": "2583", "name": "Woolen Boots", "category": "Other" }, { "id": "210781", "name": "Phoenix Bindings", "category": "Other" }, { "id": "5542", "name": "Pearl-clasped Cloak", "category": "Other" }, { "id": "2582", "name": "Green Woolen Vest", "category": "Other" }, { "id": "4310", "name": "Heavy Woolen Gloves", "category": "Other" }, { "id": "4312", "name": "Soft-soled Linen Boots", "category": "Other" }, { "id": "2584", "name": "Woolen Cape", "category": "Other" }, { "id": "10047", "name": "Simple Kilt", "category": "Other" }, { "id": "2578", "name": "Barbaric Linen Vest", "category": "Other" }, { "id": "4309", "name": "Handstitched Linen Britches", "category": "Other" }, { "id": "2569", "name": "Linen Boots", "category": "Other" }, { "id": "4308", "name": "Green Linen Bracers", "category": "Other" }, { "id": "2580", "name": "Reinforced Linen Cape", "category": "Other" }, { "id": "6239", "name": "Red Linen Vest", "category": "Other" }, { "id": "2572", "name": "Red Linen Robe", "category": "Other" }, { "id": "4307", "name": "Heavy Linen Gloves", "category": "Other" }, { "id": "4343", "name": "Brown Linen Pants", "category": "Other" }, { "id": "6238", "name": "Brown Linen Robe", "category": "Other" }, { "id": "6241", "name": "White Linen Robe", "category": "Other" }, { "id": "7026", "name": "Linen Belt", "category": "Other" }, { "id": "10046", "name": "Simple Linen Boots", "category": "Other" }, { "id": "2568", "name": "Brown Linen Vest", "category": "Other" }, { "id": "10045", "name": "Simple Linen Pants", "category": "Other" }, { "id": "2570", "name": "Linen Cloak", "category": "Other" }, { "id": "6796", "name": "Red Swashbuckler's Shirt", "category": "Other" }, { "id": "4334", "name": "Formal White Shirt", "category": "Other" }, { "id": "6795", "name": "White Swashbuckler's Shirt", "category": "Other" }, { "id": "6385", "name": "Stylish Green Shirt", "category": "Other" }, { "id": "4330", "name": "Stylish Red Shirt", "category": "Other" }, { "id": "2587", "name": "Gray Woolen Shirt", "category": "Other" }, { "id": "2579", "name": "Green Linen Shirt", "category": "Other" }, { "id": "2577", "name": "Blue Linen Shirt", "category": "Other" }, { "id": "2575", "name": "Red Linen Shirt", "category": "Other" }, { "id": "6786", "name": "Simple Dress", "category": "Other" }, { "id": "4344", "name": "Brown Linen Shirt", "category": "Other" }, { "id": "2576", "name": "White Linen Shirt", "category": "Other" }, { "id": "4339", "name": "Bolt of Mageweave", "category": "Other" }, { "id": "4305", "name": "Bolt of Silk Cloth", "category": "Other" }, { "id": "2997", "name": "Bolt of Woolen Cloth", "category": "Other" }, { "id": "2996", "name": "Bolt of Linen Cloth", "category": "Other" }];
    $scope.tailoringPatternsCount = $scope.tailoringPatterns.length;
    $scope.cookingRecipes = [{ "id": "3727", "name": "Hot Lion Chops", "category": "Other" }, { "id": "5527", "name": "Goblin Deviled Clams", "category": "Other" }, { "id": "20074", "name": "Heavy Crocolisk Stew", "category": "Other" }, { "id": "3726", "name": "Big Bear Steak", "category": "Other" }, { "id": "5480", "name": "Lean Venison", "category": "Other" }, { "id": "4593", "name": "Bristle Whisker Catfish", "category": "Other" }, { "id": "5478", "name": "Dig Rat Stew", "category": "Other" }, { "id": "6657", "name": "Savory Deviate Delight", "category": "Other" }, { "id": "21072", "name": "Smoked Sagefish", "category": "Other" }, { "id": "2687", "name": "Dry Pork Ribs", "category": "Other" }, { "id": "2683", "name": "Crab Cake", "category": "Other" }, { "id": "5525", "name": "Boiled Clams", "category": "Other" }, { "id": "2684", "name": "Coyote Steak", "category": "Other" }, { "id": "4592", "name": "Longjaw Mud Snapper", "category": "Other" }, { "id": "5095", "name": "Rainbow Fin Albacore", "category": "Other" }, { "id": "6890", "name": "Smoked Bear Meat", "category": "Other" }, { "id": "17198", "name": "Egg Nog", "category": "Other" }, { "id": "2680", "name": "Spiced Wolf Meat", "category": "Other" }, { "id": "12224", "name": "Crispy Bat Wing", "category": "Other" }, { "id": "17197", "name": "Gingerbread Cookie", "category": "Other" }, { "id": "6888", "name": "Herb Baked Egg", "category": "Other" }, { "id": "2681", "name": "Roasted Boar Meat", "category": "Other" }, { "id": "6290", "name": "Brilliant Smallfish", "category": "Other" }, { "id": "2679", "name": "Charred Wolf Meat", "category": "Other" }];
    $scope.cookingRecipesCount = $scope.cookingRecipes.length;

});


function getCategory(spellName) {
    var category = "Other";
    if (spellName.startsWith('Enchant')) {
        var index = spellName.indexOf('-');
        category = spellName.substring(8, index - 1);
    }
    if (spellName.indexOf('Wand') != -1) {
        var index = spellName.indexOf('-');
        category = "Wands";
    }
    return category;

}



