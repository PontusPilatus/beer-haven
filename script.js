document.addEventListener('DOMContentLoaded', function () {
  const beerList = [
    { name: 'Golden Ale', price: 100, description: "Light, smooth, mildly hoppy and malty. Refreshing with a golden hue."},
    { name: 'Classic Lager', price: 100, description: "Clean, crisp, and smooth. Light and refreshing with a mild flavor." },
    { name: 'Stout', price: 100, description: "Dark, rich with roasted malt. Notes of chocolate and coffee. Thick and creamy." },
    { name: 'Pilsner', price: 100, description: "Bright, straw-colored. Crisp, clean taste with a bitter finish. Refreshing." },
    { name: 'IPA', price: 100, description: "Hoppy and bitter. Golden to amber color. Citrus and pine notes." },
    { name: 'Porter', price: 100, description: "Deep brown, malty sweetness. Hints of chocolate and caramel. Smooth." },
    { name: 'Wheat Beer', price: 100, description: "Cloudy, pale. Light, refreshing with a subtle fruit and spice flavor." },
    { name: 'Saison', price: 100, description: "Rustic, slightly fruity. Golden-orange, with a spicy and earthy taste." },
    { name: 'Pale Ale', price: 100, description: "Balanced, hoppy flavor. Copper-colored. Often with citrus or floral notes." },
    { name: 'Bock', price: 100, description: "Strong, dark lager. Robust malt character. Sweet with a hearty finish." },
  ];

  function displayBeers() {
    const beerListElement = document.getElementById('beerList');
    beerListElement.innerHTML = '';

    beerList.forEach((beer, index) => {
      const beerElement = document.createElement('div');
      beerElement.className = 'beer';
      beerElement.innerHTML = `
        <img src="images/${beer.name.toLowerCase().replace(' ', '-')}.png" alt="${beer.name}" class="beer-image">
        <div class="beer-details">
            <h2>${beer.name}</h2>
            <p>${beer.description}</p>
            <p>Price: ${beer.price.toFixed(2)} kr</p>
            <button class="button" onclick="buyBeer(${index})">Buy</button>
        </div>
    `;
      beerListElement.appendChild(beerElement);
    });
  }

  function buyBeer(index) {
    const maxPrice = 120;
    const minPrice = 80;

    beerList[index].price *= 1.01;
    beerList[index].price = Math.min(beerList[index].price, maxPrice);

    beerList.forEach((beer, i) => {
      if (i !== index) {
        beer.price *= 0.998;
        beer.price = Math.max(beer.price, minPrice);
      }
    });

    displayBeers();
  }



  window.buyBeer = buyBeer;
  displayBeers();
});
