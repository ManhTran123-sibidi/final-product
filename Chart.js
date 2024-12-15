function drawPieChart(canvasId, data, colors) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const total = data.reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(100, 100); // Center of the pie chart
        ctx.arc(100, 100, 100, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();
        startAngle += sliceAngle;
    });
}

// Data for each chart
const data1 = [30, 70];
const data2 = [20, 30, 50];
const data3 = [15, 25, 35, 25];

// Colors for each slice
const colors1 = ['#ff5a5f', '#2d87b0'];
const colors2 = ['#ff5a5f', '#2d87b0', '#ffc400'];
const colors3 = ['#ff5a5f', '#2d87b0', '#ffc400', '#a1c45a'];

// Draw the charts
drawPieChart('chart1', data1, colors1);
drawPieChart('chart2', data2, colors2);
drawPieChart('chart3', data3, colors3);
