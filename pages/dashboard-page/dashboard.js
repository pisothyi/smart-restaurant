var ctx = document.getElementById("overall-chart").getContext("2d");

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgb(41, 98, 255, 0.4)",
        borderColor: "rgb(41, 98, 255, 0.4)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
var ctx1 = document.getElementById("revenue-chart").getContext("2d");
var myDoughnutChart = new Chart(ctx1, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#1e88e5", "#1976d2", "#1565c0"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Food", "Drinks", "Dessert"],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
