queue()
    .defer(d3.csv, "assets/data/top2018.csv")
    .await(makeGraphs);

function makeGraphs(error, spotifyData) {
    var ndx = crossfilter(spotifyData);

    showEnergy(ndx);
    showDanceability(ndx);


}

function showEnergy(ndx) {
    var chart = dc.lineChart("#energy");
    var dim = ndx.dimension(function(data) {
        return parseFloat(data.energy).toFixed(1);
    });

    var group = dim.group();

    console.log(group);

    chart.width(400)
        .height(300)
        // .y(d3.scale.linear().domain([0,1]))
        .x(d3.scale.linear().domain([0.30, 1.00]))
        .brushOn(false)
        .yAxisLabel("Frequency")
        .xAxisLabel("energy")
        .dimension(dim)
        .group(group)
        .on('renderlet', function(chart) {
            chart.selectAll('rect').on('click', function(d) {
                console.log('click!', d);
            });
        });
    chart.render();
}

function showDanceability(ndx) {
    var chart = dc.lineChart("#danceability");

    var dim = ndx.dimension(function(data) {
        return parseFloat(data.danceability).toFixed(1);
    });

    var group = dim.group();

    console.log(group);

    chart.width(400)
        .height(300)
        // .y(d3.scale.linear().domain([0,1]))
        .x(d3.scale.linear().domain([0.30, 1.00]))
        .brushOn(false)
        .yAxisLabel("Frequency")
        .xAxisLabel("Danceability")
        .dimension(dim)
        .group(group)
        .on('renderlet', function(chart) {
            chart.selectAll('rect').on('click', function(d) {
                console.log('click!', d);
            });
        });

    chart.render();
}


// function show_valence(ndx) {
//     var dim = ndx.dimension(dc.pluck('valence'));
//     var group = dim.group();

//     dc.barChart("#valence-chart")
//         .width(400)
//         .height(300)
//         .margins({top: 10, right: 50, bottom: 30, left: 50})
//         .dimension(dim)
//         .group(group)
//         .transitionDuration(500)
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .elasticY(true)
//         .xAxisLabel("Valence")
//         .yAxis().ticks(5);
// }
