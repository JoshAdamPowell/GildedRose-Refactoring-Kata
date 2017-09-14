using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace csharp
{
    [TestFixture]
    public class BackstagePassesTest
    {
        [Test]
        public void BPassQualityIncreasesByOneIfSellByDateMoreThanTenDays()
        {
            var items = new List<Item> { new Item() { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 20, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(11, items[0].Quality);
        }
        [Test]
        public void BPassQualityIncreasesByTwoIfSellByDateLessThanTenDays()
        {
            var items = new List<Item> { new Item() { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 8, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(12, items[0].Quality);
        }
        [Test]
        public void BPassQualityIncreasesByThreeIfSellByDateLessThanFiveDays()
        {
            var items = new List<Item> { new Item() { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 3, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(13, items[0].Quality);
        }
        [Test]
        public void BPassWorthlessAfterConcert()
        {
            var items = new List<Item> { new Item() { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 0, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(0, items[0].Quality);
        }

    }
}
