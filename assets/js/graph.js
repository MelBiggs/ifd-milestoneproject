queue()
    .defer(d3.csv, "assets/data/top2018.csv")
    .await(makeGraphs);

function makeGraphs(error, spotifyData) {
    var ndx = crossfilter(spotifyData);

    totalSongs(ndx);
    totalArtists(ndx);
    // averageSongLength(ndx);
    showEnergy(ndx);
    showDanceability(ndx);
    showKey(ndx);

}

function totalSongs(ndx) {
    // Select the artists
    var dim = ndx.dimension(dc.pluck("name"));
    // Count them
    var individualSongs = dim.group().all().length;
    // Use jQuery to display the value on the page
    $("#individual-songs").text(individualSongs);
}

function totalArtists(ndx) {
    // Select the artists
    var dim = ndx.dimension(dc.pluck("artists"));
    // Count them
    var uniqueArtists = dim.group().all().length;
    // Use jQuery to display the value on the page
    $("#unique-artists").text(uniqueArtists);
}

// function averageSongLength(ndx) {
    //     var dim = ndx.dimension(dc.pluck("name"));
    //     // Count them
    //     var AverageSongLength = dim.group().all().length;
    //     return parseFloat(data.name).toFixed(1);
    //     let avg = AverageSongLength / values.length;
    //     return avg;
    // });

function showEnergy(ndx) {
    var chart = dc.lineChart("#energy");
    var dim = ndx.dimension(function(data) {
        return parseFloat(data.energy).toFixed(1);
    });

    var group = dim.group();

    console.log(group);

    chart
        .width(400)
        .height(300)
        // .y(d3.scale.linear().domain([0,1]))
        .x(d3.scale.linear().domain([0.30, 1.00]))
        .brushOn(false)
        .yAxisLabel("Song Count")
        .xAxisLabel("Energy")
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

function showKey(ndx) {
    var chart = dc.pieChart("#key");

    // Transform the numbers into musical keys in letters
    var keyDimension = ndx.dimension(function(data) {
        return transformKey(parseInt(data.key));
    });

    var group = keyDimension.group();

    // Create the chart
    chart
        .width(600)
        .height(400)
        .innerRadius(100)
        .dimension(keyDimension)
        .group(group)
        .legend(dc.legend())
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
            });
        });

    chart.render();
}

// function to transfor the number scale for music key to letters
function transformKey(key) {
    var keyString;

    switch (key) {
        case 0:
            keyString = "C";
            break;
        case 1:
            keyString = "C♯/D♭";
            break;
        case 2:
            keyString = "D";
            break;
        case 3:
            keyString = "D♯/E♭";
            break;
        case 4:
            keyString = "E";
            break;
        case 5:
            keyString = "F";
            break;
        case 6:
            keyString = "F♯/G♭";
            break;
        case 7:
            keyString = "G";
            break;
        case 8:
            keyString = "G♯/A♭";
            break;
        case 9:
            keyString = "A";
            break;
        case 10:
            keyString = "A♯/B♭";
            break;
        case 11:
            keyString = "B";
            break;
    }

    return keyString;
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
