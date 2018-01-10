export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
class functionLookup{
    functionName;
    valueModifier;
    constructor(functionName, valueModifier){
        this.functionName = functionName;
        this.valueModifier = valueModifier;
    }
}
export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {

        for (let item of this.items) {
            let identifier = GildedRose.findIdentifier(item.name);
            let functionMap = {
                "Sulfuras": new functionLookup(function() {},0),
                "Backstage pass": new functionLookup(backstagePass,0),
                "Aged Brie": new functionLookup(normalItem,-1),
                "Conjured": new functionLookup(normalItem,2),
                "Normal": new functionLookup(normalItem,1),};
            functionMap[identifier].functionName(item, functionMap[identifier].valueModifier);

        }
        return this.items;

        function backstagePass(item) {
            GildedRose.degradeItemQuality(item, GildedRose.backStagepassQualityIncrease(item))
        }
        function normalItem(item, value) {
            GildedRose.degradeItemQuality(item, value);
            GildedRose.ageItem(item);
        }

    }
    static degradeItemQuality(item, valueToDegradeQuality){
        if (item.sellIn <= 0){valueToDegradeQuality *= 2}
        item.quality -= valueToDegradeQuality;
        if (item.quality < 0){item.quality = 0}
        if (item.quality > 50){item.quality = 50}
        return item;
    }

    static ageItem(item){
        return item.sellIn--
    }

    static backStagepassQualityIncrease(item){
        if (item.sellIn > 10){return -1}
        if (item.sellIn > 5){return -2}
        if (item.sellIn > 0){return -3}
        else {return Infinity}
    }

    static findIdentifier(itemName){
        if (itemName.includes('Sulfuras')){return 'Sulfuras' }
        else if (itemName.includes('Conjured')){return 'Conjured' }
        else if (itemName.includes('Backstage pass')){return 'Backstage pass'}
        else if (itemName === 'Aged Brie'){return 'Aged Brie'}
        else {return 'Normal'}
    }
}