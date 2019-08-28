queue()
    .defer(d3.csv, "assets/data/top2018.csv")
    .await(makeGraphs);
    
function makeGraphs(error, spotifyData) {
    var ndx = crossfilter(spotifyData);
    
    show_danceability(ndx);
    
    dc.renderAll();
}

function show_danceability(ndx) {
    var dim = ndx.dimension(dc.pluck('danceability'));
    var group = dim.group();
    
    dc.barChart("#danceability-chart")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("danceability")
        .yAxis().ticks(20);
}