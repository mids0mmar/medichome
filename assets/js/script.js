
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("patientCategory").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: [
                "Ambulatorios",
                "Crónicos Alta",
                "Crónicos Básica",
                "Crónicos Media",
                "Cuidados Básicos",
                "Procedimientos ambulatorios y exámenes",
                "Rehabilitación"
            ],
            datasets: [
                {
                    data: [1011, 28, 47, 36, 39, 7, 217],
                    borderWidth: 0,
                    hoverBorderWidth: 2,
                    backgroundColor: [
                        "rgb(54, 162, 235)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)"
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "white"
                    }
                }
            },
            scales: {}
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("patientLocalization").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: [
                "II Región",
                "III Región",
                "IV Región",
                "IX Región",
                "RM",
                "V Región",
                "VI Región",
                "VII Región",
                "VIII Región",
                "X Región",
                "XIV Región",
                "XV Región",
                "XVI Región"
            ],
            datasets: [
                {
                    data: [11, 1, 16, 5, 1178, 51, 38, 13, 65, 2, 2, 1, 6],
                    borderWidth: 0,
                    hoverBorderWidth: 2,
                    backgroundColor: [
                        "rgb(54, 162, 235)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(153, 102, 255)"
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "white"
                    }
                }
            },
            scales: {}
        }
    });
});

