/* global $*/
/* global dc*/

queue()
    .defer(d3.csv, "assets/data/top2018.csv")
    .await(makeGraphs);

function makeGraphs(error, spotifyData) {
    var ndx = crossfilter(spotifyData);

    totalSongs(ndx);
    totalArtists(ndx);
    averageSongLength(ndx);
    showSongFilter(ndx);
    showEnergy(ndx);
    showDanceability(ndx);
    showKey(ndx);
    showMode(ndx);
    topArtists(ndx);
    show_energy_val_danceability_correlation(ndx);
    // addXAxis(rowChart, displayText);
}

// Function to get total songs

function totalSongs(ndx) {
    var dim = ndx.dimension(dc.pluck("name"));
    var individualSongs = dim.group().all().length;
    $("#all-songs").text(individualSongs);
}

// Function to get total artists

function totalArtists(ndx) {
    // Select the artists
    var dim = ndx.dimension(dc.pluck("artists"));
    // Count them
    var uniqueArtists = dim.group().all().length;
    // Use jQuery to display the value on the page
    $("#unique-artists").text(uniqueArtists);
}

// Function to get average song length 

function averageSongLength(ndx) {
    var dim = ndx.dimension(dc.pluck("duration_ms"));
    // Count them
    var songLengths = dim.group().all();
    var songCount = songLengths.length;

    var summedLength = 0;

    songLengths.forEach(function(songLength) {
        summedLength += parseFloat(songLength.key);
    });
    var avg = summedLength / songCount;
    var averageMins = millisToMinutesAndSeconds(avg);
    $("#AverageLengthCard").text(averageMins);
};

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

//Filter for Artists 

function showSongFilter(ndx) {
    let dim = ndx.dimension(dc.pluck("artists"));
    let group = dim.group();

    var selectionMenu = dc.selectMenu("#artist-selection");

    selectionMenu
        .dimension(dim)
        .group(group)
        .promptText("All Artists")
        .multiple(false)
        .title(function(d) {
            return d.key;
        })
        .render();
}

//Line Chart - Energy

function showEnergy(ndx) {
    var chart = dc.lineChart("#energy");
    var dim = ndx.dimension(function(data) {
        return parseFloat(data.energy).toFixed(1);
    });

    var group = dim.group();

    console.log(group);

    chart
        .width(500)
        .height(300)
        // .y(d3.scale.linear().domain([0,1]))
        .x(d3.scale.linear().domain([0.30, 1.00]))
        // .clipPadding(50)
        .brushOn(false)
        .xAxisLabel("Energy Level")
        .margins({ top: 10, right: 50, bottom: 75, left: 80 })
        .dimension(dim)
        .group(group)
        .elasticY(true)
        .on('renderlet', function(chart) {
            chart.selectAll('rect').on('click', function(d) {
                console.log('click!', d);
            });
        });

    chart.render();
}

// Line Chart - Danceability

function showDanceability(ndx) {
    var chart = dc.lineChart("#danceability");

    var dim = ndx.dimension(function(data) {
        return parseFloat(data.danceability).toFixed(1);
    });

    var group = dim.group();

    console.log(group);

    chart.width(430)
        .height(300)
        .x(d3.scale.linear().domain([0.30, 1.00]))
        .brushOn(false)
        .xAxisLabel("Danceability")
        .margins({ top: 10, right: 2, bottom: 75, left: 80 })
        .dimension(dim)
        .group(group)
        .elasticY(true)
        .on('renderlet', function(chart) {
            chart.selectAll('rect').on('click', function(d) {
                console.log('click!', d);
            });
        });

    chart.render();
}

// Scatter Plot - Valence w/ Danceability and Energy

// function show_energy_val_danceability_correlation(ndx) {
    //     var dim = ndx.dimension(dc.pluck('id')),
    //         grp1 = dim.group().dc.pluck('danceability'),
    //         grp2 = dim.group().dc.pluck('energy'),
    //         grp3 = dim.group().dc.pluck('valence');

    //     var composite = dc.compositeChart("#energy_to_danceability_to_valence");

    //     composite
    //         .width(768)
    //         .height(480)
    //         .x(d3.scaleLinear().domain([0, 20]))
    //         .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
    //         .renderHorizontalGridLines(true)
    //         .compose([
    //             dc.lineChart(composite)
    //             .dimension(dim)
    //             .colors('red')
    //             .group(grp1, "Danceability")
    //             .dashStyle([2, 2]),
    //             dc.lineChart(composite)
    //             .dimension(dim)
    //             .colors('blue')
    //             .group(grp2, "Valence")
    //             .dashStyle([5, 5])
    //             dc.lineChart(composite)
    //             .dimension(dim)
    //             .colors('orange')
    //             .group(grp3, "Valence")
    //             .dashStyle([2, 2]),
    //         ])
    //         .brushOn(false)
    //         .render();

    // }


//Pie Chart - Key

function show_pie_percentage(key, endAngle, startAngle) {
    var percent = dc.utils.printSingleValue((endAngle - startAngle) / (2 * Math.PI) * 100);
    if (percent > 0) {
        return key + ' ' + Math.round(percent) + '%';
    }
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
        .width(535)
        .height(400)
        .innerRadius(100)
        .dimension(keyDimension)
        .group(group)
        .renderLabel(true)
        .legend(dc.legend().itemHeight(13).gap(5))
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return show_pie_percentage(d.data.key, d.endAngle, d.startAngle);
            });
        })

    chart.render();
}

// Function to transform the number scale for music key to letters

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

//Pie Chart - Mode

function showMode(ndx) {
    var chart = dc.pieChart("#mode");

    // Transform the numbers into mode in letters
    var modeDimension = ndx.dimension(function(data) {
        return transformMode(parseInt(data.mode));
    });

    var group = modeDimension.group();

    // Create the chart
    chart
        .width(470)
        .height(400)
        .innerRadius(100)
        .dimension(modeDimension)
        .group(group)
        .legend(dc.legend())
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return d.data.key + ' ' + Math.round(dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100)) + '%';
            });
        });

    chart.render();
}

// Function to transform the number scale for mode to Minor and Major

function transformMode(mode) {
    var modeString;

    switch (mode) {
        case 0:
            modeString = "Minor";
            break;
        case 1:
            modeString = "Major";
            break;
    }
    return modeString;
}

//Row Chart of Top 18 Artists 

function topArtists(ndx) {
    var dim = ndx.dimension(dc.pluck("artists"));
    var allArtists = dim.group();
    var chart = dc.rowChart("#topArtistsChart");

    chart
        .width(768)
        .height(480)
        .dimension(dim)
        .group(allArtists)
        //We only want to get the top 18 artists on the chart, these are the artists with more than 2 Top 100 songs 
        .data(function(group) { return group.top(18); });

    chart.render();
};



// function show_energy_val_danceability_correlation(ndx) {
//     var dim = ndx.dimension(dc.pluck('')),
//         grp1 = dim.group().dc.pluck('danceability'),
//         grp2 = dim.group().dc.pluck('energy'),
//         grp3 = dim.group().dc.pluck('valence');

//     var composite = dc.compositeChart("#energy_to_danceability_to_valence");

//     composite
//         .width(768)
//         .height(480)
//         .x(d3.scaleLinear().domain([0, 20]))
//         .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
//         .renderHorizontalGridLines(true)
//         .compose([
//             dc.lineChart(composite)
//             .dimension(dim)
//             .colors('red')
//             .group(grp1, "Danceability")
//             .dashStyle([2, 2]),
//             dc.lineChart(composite)
//             .dimension(dim)
//             .colors('blue')
//             .group(grp2, "Valence")
//             .dashStyle([5, 5])
//             dc.lineChart(composite)
//             .dimension(dim)
//             .colors('orange')
//             .group(grp3, "Valence")
//             .dashStyle([2, 2]),
//         ])
//         .brushOn(false)
//         .render();

// }



// // Scatter plot

// function show_energy_to_danceability_correlation(ndx) {
//     var energyDim = ndx.dimension(dc.pluck("energy"));
//     var danceDim = ndx.dimension(function(d) {
//         return [d.energy, d.danceability];
//     });
//     var danceGroup = danceDim.group();
//     var minEnergy = energyDim.bottom(1)[0].energy;
//     var maxEnergy = energyDim.top(1)[0].energy;

//     dc.scatterPlot("#energy_to_danceability")
//         .width(500)
//         .height(350)
//         .x(d3.scale.linear().domain([minEnergy, maxEnergy]))
//         .brushOn(true)
//         .symbolSize(6)
//         .clipPadding(10)
//         //.yAxisLabel("Danceability")
//         // .title(function(d) {
//         //     return "Danceability"
//         .dimension(danceDim)
//         .group(danceGroup);
//     .margins({ top: 10, right: 50, bottom: 75, left: 75 });

// }

// function addXAxis(rowChart, displayText) {
//     rowChart.svg()
//         .append("text")
//         .attr("class", "Number of Times in the Top 100")
//         .attr("text-anchor", "middle")
//         .attr("x", rowChart.width() / 2)
//         .attr("y", rowChart.height() - 3.5)
//         .text(displayText);
// }
// AddXAxis(chart1, "This is the x-axis!");





//Trying to make cards dynamic 

// function totalSongs(ndx) {
//     var totalSongsND = dc.numberDisplay("#all-songs");
//     var dim = ndx.dimension(dc.pluck("name"));
//     var allSongs = dim.group().all().length;

//     totalSongsND
//         .group(allSongs);

// }


// function totalSongs(ndx) {
//     var dim = dataFor2017.dimension(dc.pluck("ref"));
//     let totalAcc = dim.group().reduceSum(dc.pluck("number_of_accidents"));

//     dc.numberDisplay("#accidents-total")
//         .formatNumber(d3.format(".2s"))
//         .group(totalAcc);
// }


// function totalSongs()
// var all = ndx.groupAll();


// dc.dataCount('#all-songs')
//     .crossfilter(ndx)
//     .groupAll(all);
