console.log("Script loaded");

const words = [
 {'text': 'પર્યાવરણ', 'size': 30},
 {'text': 'વિશ્વ', 'size': 22},
 {'text': 'બેઠક', 'size': 11},
 {'text': 'દિવસ', 'size': 9},
 {'text': 'ફાયર', 'size': 9},
 {'text': 'વૃક્ષારોપણ', 'size': 9},
 {'text': 'વન', 'size': 8},
 {'text': 'દિવસ', 'size': 7},
 {'text': 'ઉજવણી', 'size': 6},
 {'text': 'લોકસભા', 'size': 6},
 {'text': 'ભવ્ય', 'size': 6},
 {'text': 'આવ્યું', 'size': 6},
 {'text': 'આરોપી', 'size': 6},
 {'text': 'દિવસ', 'size': 5},
 {'text': 'રાજકોટ', 'size': 5},
 {'text': 'ભાજપ', 'size': 5},
 {'text': 'મત', 'size': 5},
 {'text': 'આગ', 'size': 5},
 {'text': 'ચોરી', 'size': 5},
 {'text': 'પોલીસે', 'size': 5},
 {'text': 'પોલીસ', 'size': 5},
 {'text': 'વિભાગ', 'size': 5},
 {'text': 'કાર્યક્રમ', 'size': 5},
 {'text': 'યોજાયો', 'size': 5},
 {'text': 'ઝડપાયો', 'size': 5},
 {'text': 'સવારે', 'size': 4},
 {'text': 'લાખ', 'size': 4},
 {'text': 'જીત', 'size': 4},
 {'text': 'વિરોધ', 'size': 4},
 {'text': 'રેકોર્ડ', 'size': 4},
 {'text': 'વડોદરા', 'size': 4},
 {'text': 'પાટણ', 'size': 4},
 {'text': 'ઉજવણી', 'size': 4},
 {'text': 'રીક્ષા', 'size': 4},
 {'text': 'ફરાર', 'size': 4},
 {'text': 'ગુજરાત', 'size': 3},
 {'text': 'વરસાદ', 'size': 3},
 {'text': 'જીત', 'size': 3},
 {'text': 'કલાક', 'size': 3},
 {'text': 'નિ:શુલ્ક', 'size': 3},
 {'text': 'સાંસદ', 'size': 3},
 {'text': 'વિધાનસભા', 'size': 3},
 {'text': 'જંગી', 'size': 3},
 {'text': 'લીડ', 'size': 3},
 {'text': 'વલસાડ', 'size': 3},
 {'text': 'જીત', 'size': 3},
 {'text': 'વૃક્ષો', 'size': 3},
 {'text': 'કાર', 'size': 3},
 {'text': 'અમદાવાદ', 'size': 3},
 {'text': 'અમદાવાદ', 'size': 3},
 {'text': 'કેન્દ્ર', 'size': 3},
 {'text': 'રેલવે', 'size': 3},
 {'text': 'બુલેટ', 'size': 3},
 {'text': 'ફોન', 'size': 3},
 {'text': 'પાણી', 'size': 3},
 {'text': 'ગામ', 'size': 3},
 {'text': 'વર્ષ', 'size': 3},
 {'text': 'દર', 'size': 3},
 {'text': 'કાર', 'size': 3},
 {'text': 'દ્વારકા', 'size': 3},
 {'text': 'બાઈક', 'size': 3},
 {'text': 'દિન', 'size': 3},
 {'text': 'ગામે', 'size': 3},
 {'text': 'ઝડપી', 'size': 3},
 {'text': 'આગાહી', 'size': 2},
 {'text': 'જિલ્લાઓ', 'size': 2},
 {'text': 'વાતાવરણ', 'size': 2},
 {'text': 'શહેર', 'size': 2},
 {'text': 'જિલ્લા', 'size': 2},
 {'text': 'લોકો', 'size': 2},
 {'text': 'જૂન', 'size': 2},
 {'text': 'વલસાડ', 'size': 2},
 {'text': 'વ્યવહાર', 'size': 2},
 {'text': 'ઓટોમેટિક', 'size': 2},
 {'text': 'સમય', 'size': 2},
 {'text': 'એનાલિસિસ', 'size': 2},
 {'text': 'લીડ', 'size': 2},
 {'text': 'રસાકસી', 'size': 2},
 {'text': 'અગ્નિકાંડ', 'size': 2},
 {'text': 'બિલ્ડિંગ', 'size': 2},
 {'text': 'NOC', 'size': 2},
 {'text': 'ગુજરાત', 'size': 2},
 {'text': 'અમિત', 'size': 2},
 {'text': 'શરૂ', 'size': 2},
 {'text': 'સીટ', 'size': 2},
 {'text': 'વિધાનસભા', 'size': 2},
 {'text': 'રૂપાલા', 'size': 2},
 {'text': 'વર્ષે', 'size': 2},
 {'text': 'લીડ', 'size': 2},
 {'text': 'ભાજપે', 'size': 2},
 {'text': 'સંપૂર્ણ', 'size': 2},
 {'text': 'રિઝલ્ટ', 'size': 2},
 {'text': 'કોંગ્રેસ', 'size': 2},
 {'text': 'સુખરામ', 'size': 2},
 {'text': 'સંતવાણી', 'size': 2},
 {'text': 'સંસ્કાર', 'size': 2},
 {'text': 'ક્ષત્રિયો', 'size': 2},
 {'text': 'પાસ', 'size': 2},
 {'text': 'બારડોલી', 'size': 2},
 {'text': 'મત', 'size': 2}
];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Load the Gujarat map shape data
d3.json("shape.json").then(shapeData => {
    const layout = d3.layout.cloud()
        .size([700, 700])
        .words(words.map(d => ({ text: d.text, size: d.size })))
        .padding(1)
        .rotate(d => d.size > 30 ? 90 : 0) // Rotate words with size > 30 degrees
        .fontSize(d => d.size * 5)
        .on("end", draw);

    layout.start();

    function draw(words) {
        console.log("Drawing words:", words);

        // Create the svg element
        const svg = d3.select("#wordcloud")
            .append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1]);

        // Create a clip path for the Gujarat map shape
        const clipPath = svg.append("clipPath")
            .attr("id", "shapeClipPath");

        // Use the correct projection and scale
        const projection = d3.geo.mercator()
            .center([72.57, 22.30]) // Gujarat map center coordinates
            .scale(1000); // adjust the scale to fit your map

        clipPath.append("path")
            .datum(shapeData)
            .attr("d", d3.geo.path().projection(projection));

        svg.append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .attr("clip-path", "url(#shapeClipPath)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", d => d.size + "px")
            .style("fill", () => getRandomColor())
            .attr("text-anchor", "middle")
            .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
            .text(d => d.text)
            .on("mouseover", function (event, d) {
                // your mouseover event handler remains the same
            })
            .on("mouseout", function () {
                // your mouseout event handler remains the same
            });
    }
});
});
