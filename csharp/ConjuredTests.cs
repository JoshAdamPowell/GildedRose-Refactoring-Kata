using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace csharp
{
    [TestFixture]
    class ConjuredTests
    {
        [Test]
        public void ConjuredItemsDegradeTwiceAsFast()
        {
            var items = new List<Item> { new Item() { Name = "Conjured Mana Cake", SellIn = 8, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(8, items[0].Quality);
        }
        [Test]
        public void ConjuredItemsDegradeQuadrupleAsFastIfOutOfDate()
        {
            var items = new List<Item> { new Item() { Name = "Conjured Mana Cake", SellIn = 0, Quality = 10 } };
            GildedRose app = new GildedRose(items);
            app.UpdateQuality();
            Assert.AreEqual(6, items[0].Quality);
        }



    }
}
