using NUnit.Framework;
using System.Collections.Generic;

namespace csharp
{
    [TestFixture]
    public class BasicTests
    {
        [Test]
        public void ItemNamesDontChangeAfterQualityUpdated()
        {
            IList<Item> items = new List<Item> { new Item { Name = "itemName", SellIn = 0, Quality = 0 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual("itemName", items[0].Name);
        }

        public void QualityDegradesByOneEachDay()
        {
            IList<Item> items = new List<Item> { new Item { Name = "itemName", SellIn = 10, Quality = 50 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(49, items[0].Quality);
        }

        public void SellByDateDegradesByOneEachDay()
        {
            IList<Item> items = new List<Item> { new Item { Name = "itemName", SellIn = 10, Quality = 50 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(49, items[0].SellIn);
        }

        [Test]
        public void QualityDegradesTwiceAsFastAfterSellByDate()
        {
            var items = new List<Item> {new Item() {Name = "testItem", SellIn = 0, Quality = 50}};
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(48,items[0].Quality);
        }

        [Test]
        public void QualityWillNotGoNegativeIfInDate()
        {
            var items = new List<Item> { new Item() { Name = "testItem", SellIn = 10, Quality = 0 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(0,items[0].Quality);
        }
        public void QualityWillNotGoNegativeIfOutOfDate()
        {
            var items = new List<Item> { new Item() { Name = "testItem", SellIn = 0, Quality = 0 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(0, items[0].Quality);
        }




    }
}
