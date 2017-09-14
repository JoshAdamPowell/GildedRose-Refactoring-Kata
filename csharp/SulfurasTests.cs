using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using NUnit.Framework.Internal;

namespace csharp
{
    [TestFixture]
    public class SulfurasTests
    {
        [Test]
        public void SulfurasDontDegradeInQualityIfInDate()
        {
            var items = new List<Item> { new Item() { Name = "Sulfuras, Hand of Ragnaros", SellIn = 10, Quality = 5 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(5, items[0].Quality);
        }
        [Test]
        public void SulfurasDontDegradeInQualityIfOutOfDate()
        {
            var items = new List<Item> { new Item() { Name = "Sulfuras, Hand of Ragnaros", SellIn = 0, Quality = 5 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(5, items[0].Quality);
        }
        [Test]
        public void SulfurasSellByDateDoesntDecrease()
        {
            var items = new List<Item> { new Item() { Name = "Sulfuras, Hand of Ragnaros", SellIn = 10, Quality = 5 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(10, items[0].SellIn);
        }


    }
}
