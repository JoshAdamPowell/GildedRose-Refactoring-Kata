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

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {

        for (let item of this.items) {
            let identifier = GildedRose.findIdentifier(item.name);
            switch (identifier) {
                case 'Conjured':
                    GildedRose.degradeItemQuality(item, 2);
                    GildedRose.ageItem(item);
                    break;
                case 'Sulfuras':
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    GildedRose.degradeItemQuality(item, GildedRose.backStagepassQualityIncrease(item));
                    break;
                case 'Aged Brie':
                    GildedRose.degradeItemQuality(item, -1);
                    GildedRose.ageItem(item);
                    break;
                default:
                    GildedRose.degradeItemQuality(item, 1);
                    GildedRose.ageItem(item);
            }
        }
        return this.items;

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
        else {return itemName}
    }
}
