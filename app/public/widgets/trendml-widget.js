(function () {
  console.log("TrendML Widget Loaded");

  const TrendML = {
    apiUrl: "https://your-app-domain.com/api/recommendations",

    getRecommendations: async function (productId) {
      try {
        const response = await fetch(`${this.apiUrl}?productId=${productId}`);
        return await response.json();
      } catch (error) {
        console.error("TrendML Widget Error:", error);
        return [];
      }
    },

    renderWidget: function (productId) {
      const container = document.getElementById("trendml-widget");

      if (!container) {
        console.warn("TrendML Widget container missing.");
        return;
      }

      container.innerHTML = `<div class="trendml-loading">Loading recommendations...</div>`;

      this.getRecommendations(productId).then((data) => {
        if (!data || data.length === 0) {
          container.innerHTML = `<p class="trendml-empty">No recommendations found.</p>`;
          return;
        }

        container.innerHTML = `
          <h3 class="trendml-title">You may also like</h3>
          <div class="trendml-grid">
            ${data
              .map(
                (item) => `
              <div class="trendml-card">
                <img src="${item.image}" alt="${item.title}" />
                <p>${item.title}</p>
                <span>${item.price}</span>
              </div>
            `
              )
              .join("")}
          </div>
        `;
      });
    },
  };

  window.TrendMLWidget = TrendML;
})();