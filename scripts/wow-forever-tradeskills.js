var app = angular.module('tradeSkills', []);
app.controller('tradeSkillsCtrl', function ($scope) {

    // Enchanting Categories
    $scope.enchantingCategories = [
        //{ "name": "Camping", "id": "" },
        { "name": "Shield", "id": "" },
        { "name": "Chest", "id": "" },
        { "name": "Bracers", "id": "" },
        { "name": "Weapons", "id": "" },
        { "name": "Gloves", "id": "" },
        { "name": "Cloak", "id": "" },
        { "name": "Two-handed weapon", "id": "" },
        { "name": "Boots", "id": "" },
        { "name": "Neck", "id": "" },
        { "name": "Off Hand", "id": "" },
        { "name": "Reagents", "id": "" },
        { "name": "Wands", "id": "" },
        { "name": "Runed Enchanting Rods", "id": "" }
    ]

    // Enchanting Recipes
    $scope.enchantingRecipies = [
        {
            "name": "Runed Copper Rod",
            "id": "7421",
            "category": "Runed Enchanting Rods"
        },
        {
            "name": "Dust to Motes",
            "id": "1245320",
            "category": "Reagents"
        },
        {
            "name": "Novice's Practice Wand",
            "id": "1245321",
            "category": "Wands"
        },
        {
            "name": "Enchant Bracer - Inferior Stamina",
            "id": "7418",
            "category": "Bracers"
        },
        {
            "name": "Enchant Bracer - Minor Deflect",
            "id": "7428",
            "category": "Bracers"
        }
    ]


    // Tailoring Categories
    $scope.tailoringCategories = [
        { "name": "Head", "id": "" },
        { "name": "Shoulder", "id": "" },
        { "name": "Chest", "id": "" },
        { "name": "Wrists", "id": "" },
        { "name": "Gloves", "id": "" },
        { "name": "Waist", "id": "" },
        { "name": "Legs", "id": "" },
        { "name": "Boots", "id": "" },
        { "name": "Cloaks", "id": "" },
        { "name": "Bags", "id": "" },
        { "name": "Shirts", "id": "" },
        { "name": "Cloth rolls", "id": "" },
        // { "name": "Camping", "id": "" }
    ]

    // Enchanting Recipes
    $scope.tailoringRecipies = [
        { "name": "Bolt of Linen Cloth", "id": "2996", "category": "Cloth rolls" },
        { "name": "Linen Bag", "id": "4238", "category": "Bags" },
        { "name": "Linen Cloak", "id": "2570", "category": "Cloaks" },
        { "name": "Brown Linen Shirt", "id": "4344", "category": "Chest" },
        { "name": "Simple Linen Pants", "id": "10045", "category": "Legs" }
    ]
});