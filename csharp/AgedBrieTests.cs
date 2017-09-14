using System.Collections.Generic;
using NUnit.Framework;

namespace csharp
{
    [TestFixture]
    public class AgedBrieTests
    {
        [Test]
        public void IfItemIsAgedBrieGainsQualityIfInDate()
        {
            var items = new List<Item> { new Item() { Name = "Aged Brie", SellIn = 10, Quality = 5 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(6, items[0].Quality);
        }

        [Test]
        public void IfItemIsAgedBrieGainsQualityIfOutOfDate()
        {
            var items = new List<Item> { new Item() { Name = "Aged Brie", SellIn = 0, Quality = 5 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(7, items[0].Quality);
        }

        [Test]
        public void QualityWillNotGoAboveFifty()
        {
            var items = new List<Item> { new Item() { Name = "Aged Brie", SellIn = 0, Quality = 50 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(50, items[0].Quality);
        }




    }
}
