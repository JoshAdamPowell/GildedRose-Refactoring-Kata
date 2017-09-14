using System.Collections.Generic;

namespace csharp
{
    public class GildedRose
    {
        IList<Item> Items;
        public GildedRose(IList<Item> items)
        {
            Items = items;
        }

        public void UpdateQuality()
        {

            foreach (var item in Items)
            {
                int qualityModifier = 0;
                int sellInModifier = 0;


                switch(item.Name)
                {
                    case "Sulfuras, Hand of Ragnaros":
                        break;
                    case "Aged Brie":
                        qualityModifier = -1;
                        break;
                    case "Conjured Mana Cake":
                        qualityModifier = 2;
                        break;
                    case "Backstage passes to a TAFKAL80ETC concert":
                        if (item.SellIn > 10)
                        {
                            qualityModifier = -1;
                        }
                        else if (item.SellIn > 5 && item.SellIn <= 10)
                        {
                            qualityModifier = -2;
                        }
                        else
                        {
                            qualityModifier = -3;
                        }
                        break;
                    default:
                        qualityModifier = 1;
                        sellInModifier = 1;
                        break;
                }

                if (item.SellIn <= 0)
                {
                    qualityModifier= qualityModifier * 2;
                }

                item.Quality = item.Quality - (1 * qualityModifier);

                if (item.Quality < 0)
                {
                    item.Quality = 0;
                }
                if (item.Quality > 50)
                {
                    item.Quality = 50;
                }

                item.SellIn = item.SellIn - (1 * sellInModifier);

                if (item.Name == "Backstage passes to a TAFKAL80ETC concert" && item.SellIn <= 0)
                {
                    item.Quality = 0;
                }


            }
            
        }
    }
}
