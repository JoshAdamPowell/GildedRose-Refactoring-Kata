import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('All Items', function () {

    it('item names are persistent', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('Items should lose 1 day from sell by date after day passes', function () {
        let gildedRose = new GildedRose([ new Item('testItem', 5, 10) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    });

    it('Items should degrade by 1 after 1 day', function () {
        let gildedRose = new GildedRose([ new Item('testItem', 5, 10) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    it('Items should degrade by 2 after sell by date passed', function () {
        let gildedRose = new GildedRose([ new Item('testItem', -5, 10) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

    it('Sell by date should go into negative', function () {
        let gildedRose = new GildedRose([ new Item('testItem', 0, 10) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
    });

    it('Items should not go into negative quality', function() {
        let gildedRose = new GildedRose([ new Item('testItem', 5, 0) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });
});

describe('Aged Brie', function () {

    it('Aged Brie should retain its name, and SellIn should decrease like normal items.', function () {
        let gildedRose = new GildedRose([ new Item('Aged Brie', 5, 10) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].name).to.equal('Aged Brie');
    });

    it('Aged Brie should increase in quality by one each day', function () {
        let gildedRose = new GildedRose([new Item('Aged Brie', 5, 5)]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    });

    it('Aged Brie sell by date should go into negative', function () {
        let gildedRose = new GildedRose([new Item('Aged Brie', 0, 5)]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
    });

    it('Aged Brie quality should not go above 50', function () {
        let gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('Aged brie quality should increase by 2 after sell by date passes', function () {
        let gildedRose = new GildedRose([new Item('Aged Brie', 0, 30)]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(32);
    });
});

describe('Sulfuras', function () {
    it('Sulfuras should not increase or decrease in sell by date or quality', function () {
        let gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 40)]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(40);
        expect(items[0].sellIn).to.equal(5);
    });
});

describe('Backstage Passes', function () {
    it('Backstage passes quality increase by 1 with more than 10 days left', function() {
        let gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 40) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(41);
    });

    it('Backstage passes quality increase by 2 with between 6 and 10 days left', function() {
        let gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 40) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    it('Backstage passes quality increase by 3 with between 1 and 5 days left', function() {
        let gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 40) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });

    it('Backstage passes quality decrease to 0 when no days left', function() {
        let gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('Backstage passes quality does not increase past 50', function() {
        let gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 49) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

});

describe('Conjured Items', function () {

    it('Conjured items retain their name and age like normal', function() {
        let gildedRose = new GildedRose([new Item('Conjured item',5,10)])
        let items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured item');
        expect(items[0].sellIn).to.equal(4);
    });

    it('Conjured items double their quality decrease', function() {
        let gildedRose = new GildedRose([new Item('Conjured item',5,10)])
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);

    });

});
