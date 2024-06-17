// Load the Gujarat map image
const gujaratMapImage = new Image();
gujaratMapImage.src = 'gujarat_map.png';

const layout = d3.layout.cloud()
    .size([700, 700])
    .words(words.map(d => ({ text: d.text, size: d.size })))
    .padding(1)
    .rotate(d => d.size > 30 ? 90 : 0)
    .fontSize(d => d.size * 5)
    .on("end", draw)
    .canvas(() => gujaratMapImage); // Pass the Gujarat map image as a canvas

function draw(words) {
    console.log("Drawing words:", words);

    d3.select("#wordcloud")
        .append("svg")
        .attr("width", gujaratMapImage.width)
        .attr("height", gujaratMapImage.height)
        // ... (rest of the code remains the same)
}





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
// Load the Gujarat GeoJSON data
d3.json("gujarat.geojson", function(error, gujarat) {
  if (error) {
    console.error(error);
  } else {
    // Create an SVG element
    const svg = d3.select("#wordcloud")
     .append("svg")
     .attr("width", 700)
     .attr("height", 700);

    // Render the Gujarat map shape
    svg.append("path")
     .datum(gujarat)
     .attr("d", d3.geoPath())
     .style("fill", "none")
     .style("stroke", "black")
     .style("stroke-width", 2);

    // Create a group element for the word cloud
    const wordCloudGroup = svg.append("g")
     .attr("transform", "translate(350, 350)"); // center the word cloud

    // Create the word cloud layout
    const layout = d3.layout.cloud()
     .size([700, 700])
     .words(words.map(d => ({ text: d.text, size: d.size })))
     .padding(1)
     .rotate(d => d.size > 30? 90 : 0) // Rotate words with size > 30 degrees
     .fontSize(d => d.size * 5)
     .on("end", draw);

    layout.start();

    function draw(words) {
      console.log("Drawing words:", words);

      wordCloudGroup.selectAll("text")
       .data(words)
       .enter().append("text")
       .style("font-size", d => d.size + "px")
       .style("fill", () => `var(${getRandomColor()})`) // Set random color variable
       .attr("text-anchor", "middle")
       .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
       .text(d => d.text)

       .on("mouseover", function(event, d) {
          console.log("Mouseover on:", d.text);
          const currentColor = d3.select(this).style("fill"); // Get the current color

          d3.select(this)
           .style("fill", `var(--hover-color)`) // Change to hover color
            //.attr("data-original-color", currentColor); // Store the original color
          const tooltip = d3.select("body").append("div")
           .attr("class", "tooltip")
           .style("left", (event.pageX + 10) + "px")
           .style("top", (event.pageY - 20) + "px")
           .text(`${d.text}: ${d.size}`)
           .style("display", "block");
        })
       .on("mouseout", function() {
          d3.select(this)
           .style("fill", getRandomColor);
          d3.selectAll(".tooltip").remove();
        });
    }
  }
});
