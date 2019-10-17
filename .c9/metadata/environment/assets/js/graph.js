{"filter":false,"title":"graph.js","tooltip":"/assets/js/graph.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":347,"column":1},"end":{"row":348,"column":0},"action":"insert","lines":["",""],"id":4852}],[{"start":{"row":342,"column":16},"end":{"row":342,"column":17},"action":"remove","lines":["e"],"id":4853},{"start":{"row":342,"column":15},"end":{"row":342,"column":16},"action":"remove","lines":["i"]},{"start":{"row":342,"column":14},"end":{"row":342,"column":15},"action":"remove","lines":["p"]}],[{"start":{"row":342,"column":14},"end":{"row":342,"column":15},"action":"insert","lines":["m"],"id":4854},{"start":{"row":342,"column":15},"end":{"row":342,"column":16},"action":"insert","lines":["o"]},{"start":{"row":342,"column":16},"end":{"row":342,"column":17},"action":"insert","lines":["d"]},{"start":{"row":342,"column":17},"end":{"row":342,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":368,"column":0},"end":{"row":371,"column":15},"action":"remove","lines":["        .on('pretransition', function(chart) {","            chart.selectAll('text.pie-slice').text(function(d) {","                return d.data.key + ' ' + Math.round(dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100)) + '%';","            });"],"id":4855},{"start":{"row":368,"column":0},"end":{"row":371,"column":15},"action":"insert","lines":["        .on('pretransition', function(chart) {","            chart.selectAll('text.pie-slice').text(function(d) {","                return show_pie_percentage(d.data.key, d.endAngle, d.startAngle);","            });"]}],[{"start":{"row":370,"column":30},"end":{"row":370,"column":31},"action":"remove","lines":["e"],"id":4856},{"start":{"row":370,"column":29},"end":{"row":370,"column":30},"action":"remove","lines":["i"]},{"start":{"row":370,"column":28},"end":{"row":370,"column":29},"action":"remove","lines":["p"]}],[{"start":{"row":370,"column":28},"end":{"row":370,"column":29},"action":"insert","lines":["m"],"id":4857},{"start":{"row":370,"column":29},"end":{"row":370,"column":30},"action":"insert","lines":["o"]},{"start":{"row":370,"column":30},"end":{"row":370,"column":31},"action":"insert","lines":["d"]},{"start":{"row":370,"column":31},"end":{"row":370,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":21},"action":"insert","lines":["$(\"#overlay\").show();"],"id":4858}],[{"start":{"row":3,"column":21},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":4859}],[{"start":{"row":22,"column":20},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":4860},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":4},"end":{"row":24,"column":0},"action":"insert","lines":["",""]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":24,"column":4},"end":{"row":29,"column":1},"action":"insert","lines":["    $(\"#overlay\").hide();","","    // Render all charts","    dc.renderAll();","","}"],"id":4861}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["    "],"id":4862},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":["}"],"id":4863},{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":24},"action":"remove","lines":["    // Render all charts"],"id":4864},{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":14},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":4865}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":11},"action":"remove","lines":["overlay"],"id":4866},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["l"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["o"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["a"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["d"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["e"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":15},"action":"remove","lines":["overlay"],"id":4867},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["l"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["o"]},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["a"]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["d"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["e"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":26,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["","    dc.renderAll();",""],"id":4868}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"remove","lines":["r"],"id":4869},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"remove","lines":["e"]}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["i"],"id":4870},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["n"]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["r"],"id":4871},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["e"]}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["i"],"id":4872},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["n"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":235,"column":21},"end":{"row":235,"column":28},"action":"remove","lines":["#1DB954"],"id":4873},{"start":{"row":235,"column":21},"end":{"row":235,"column":28},"action":"insert","lines":["#000000"]}],[{"start":{"row":466,"column":0},"end":{"row":471,"column":0},"action":"remove","lines":["// //   LOADER","","// $(window).load(function() {","//     $('#').addClass('hide');","// });",""],"id":4874},{"start":{"row":465,"column":0},"end":{"row":466,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":100,"column":28},"end":{"row":100,"column":29},"action":"remove","lines":["n"],"id":4876},{"start":{"row":100,"column":27},"end":{"row":100,"column":28},"action":"remove","lines":["o"]},{"start":{"row":100,"column":26},"end":{"row":100,"column":27},"action":"remove","lines":["i"]},{"start":{"row":100,"column":25},"end":{"row":100,"column":26},"action":"remove","lines":["t"]},{"start":{"row":100,"column":24},"end":{"row":100,"column":25},"action":"remove","lines":["u"]},{"start":{"row":100,"column":23},"end":{"row":100,"column":24},"action":"remove","lines":["l"]},{"start":{"row":100,"column":22},"end":{"row":100,"column":23},"action":"remove","lines":["o"]},{"start":{"row":100,"column":21},"end":{"row":100,"column":22},"action":"remove","lines":["s"]},{"start":{"row":100,"column":20},"end":{"row":100,"column":21},"action":"remove","lines":[" "]},{"start":{"row":100,"column":19},"end":{"row":100,"column":20},"action":"remove","lines":["s"]},{"start":{"row":100,"column":18},"end":{"row":100,"column":19},"action":"remove","lines":["i"]},{"start":{"row":100,"column":17},"end":{"row":100,"column":18},"action":"remove","lines":["h"]},{"start":{"row":100,"column":16},"end":{"row":100,"column":17},"action":"remove","lines":["t"]}],[{"start":{"row":100,"column":15},"end":{"row":100,"column":16},"action":"remove","lines":[" "],"id":4877},{"start":{"row":100,"column":14},"end":{"row":100,"column":15},"action":"remove","lines":["r"]},{"start":{"row":100,"column":13},"end":{"row":100,"column":14},"action":"remove","lines":["o"]},{"start":{"row":100,"column":12},"end":{"row":100,"column":13},"action":"remove","lines":["f"]},{"start":{"row":100,"column":11},"end":{"row":100,"column":12},"action":"remove","lines":[" "]}],[{"start":{"row":100,"column":7},"end":{"row":100,"column":8},"action":"remove","lines":["C"],"id":4878}],[{"start":{"row":100,"column":7},"end":{"row":100,"column":8},"action":"insert","lines":["c"],"id":4879}],[{"start":{"row":100,"column":5},"end":{"row":100,"column":6},"action":"remove","lines":["e"],"id":4880}],[{"start":{"row":100,"column":5},"end":{"row":100,"column":6},"action":"insert","lines":["i"],"id":4891},{"start":{"row":100,"column":6},"end":{"row":100,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":105,"column":75},"end":{"row":106,"column":0},"action":"insert","lines":["",""],"id":4892},{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":106,"column":4},"end":{"row":106,"column":55},"action":"insert","lines":["minutes + \":\" + (seconds < 10 ? '0' : '') + seconds"],"id":4893}],[{"start":{"row":106,"column":3},"end":{"row":106,"column":55},"action":"remove","lines":[" minutes + \":\" + (seconds < 10 ? '0' : '') + seconds"],"id":4894}],[{"start":{"row":106,"column":0},"end":{"row":106,"column":3},"action":"remove","lines":["   "],"id":4895}],[{"start":{"row":105,"column":75},"end":{"row":106,"column":0},"action":"remove","lines":["",""],"id":4896}],[{"start":{"row":95,"column":54},"end":{"row":96,"column":0},"action":"insert","lines":["",""],"id":4920},{"start":{"row":96,"column":0},"end":{"row":96,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":96,"column":4},"end":{"row":96,"column":57},"action":"insert","lines":[" //averageCount.(d3.time.format('%M:%SZ\"')).render();"],"id":4921}],[{"start":{"row":96,"column":4},"end":{"row":96,"column":5},"action":"remove","lines":[" "],"id":4922}],[{"start":{"row":95,"column":41},"end":{"row":95,"column":47},"action":"insert","lines":["%M:%SZ"],"id":4923}],[{"start":{"row":95,"column":44},"end":{"row":95,"column":45},"action":"remove","lines":["%"],"id":4924}],[{"start":{"row":95,"column":41},"end":{"row":95,"column":42},"action":"remove","lines":["%"],"id":4925}],[{"start":{"row":95,"column":41},"end":{"row":95,"column":45},"action":"remove","lines":["M:SZ"],"id":4926}],[{"start":{"row":95,"column":33},"end":{"row":95,"column":34},"action":"insert","lines":["t"],"id":4927},{"start":{"row":95,"column":34},"end":{"row":95,"column":35},"action":"insert","lines":["i"]},{"start":{"row":95,"column":35},"end":{"row":95,"column":36},"action":"insert","lines":["m"]},{"start":{"row":95,"column":36},"end":{"row":95,"column":37},"action":"insert","lines":["e"]},{"start":{"row":95,"column":37},"end":{"row":95,"column":38},"action":"insert","lines":["."]}],[{"start":{"row":95,"column":37},"end":{"row":95,"column":38},"action":"remove","lines":["."],"id":4928},{"start":{"row":95,"column":36},"end":{"row":95,"column":37},"action":"remove","lines":["e"]},{"start":{"row":95,"column":35},"end":{"row":95,"column":36},"action":"remove","lines":["m"]},{"start":{"row":95,"column":34},"end":{"row":95,"column":35},"action":"remove","lines":["i"]},{"start":{"row":95,"column":33},"end":{"row":95,"column":34},"action":"remove","lines":["t"]}],[{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"insert","lines":["    "],"id":4932}],[{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"remove","lines":["    "],"id":4933}],[{"start":{"row":103,"column":44},"end":{"row":104,"column":0},"action":"insert","lines":["",""],"id":4934},{"start":{"row":104,"column":0},"end":{"row":104,"column":4},"action":"insert","lines":["    "]},{"start":{"row":104,"column":4},"end":{"row":104,"column":5},"action":"insert","lines":["c"]},{"start":{"row":104,"column":5},"end":{"row":104,"column":6},"action":"insert","lines":["o"]},{"start":{"row":104,"column":6},"end":{"row":104,"column":7},"action":"insert","lines":["n"]},{"start":{"row":104,"column":7},"end":{"row":104,"column":8},"action":"insert","lines":["s"]},{"start":{"row":104,"column":8},"end":{"row":104,"column":9},"action":"insert","lines":["o"]},{"start":{"row":104,"column":9},"end":{"row":104,"column":10},"action":"insert","lines":["l"]},{"start":{"row":104,"column":10},"end":{"row":104,"column":11},"action":"insert","lines":["e"]},{"start":{"row":104,"column":11},"end":{"row":104,"column":12},"action":"insert","lines":["."]}],[{"start":{"row":104,"column":12},"end":{"row":104,"column":13},"action":"insert","lines":["l"],"id":4935},{"start":{"row":104,"column":13},"end":{"row":104,"column":14},"action":"insert","lines":["o"]},{"start":{"row":104,"column":14},"end":{"row":104,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":104,"column":15},"end":{"row":104,"column":17},"action":"insert","lines":["()"],"id":4936}],[{"start":{"row":104,"column":16},"end":{"row":104,"column":18},"action":"insert","lines":["\"\""],"id":4937}],[{"start":{"row":104,"column":17},"end":{"row":104,"column":18},"action":"remove","lines":["\""],"id":4938},{"start":{"row":104,"column":16},"end":{"row":104,"column":17},"action":"remove","lines":["\""]}],[{"start":{"row":104,"column":16},"end":{"row":104,"column":17},"action":"insert","lines":["§"],"id":4939}],[{"start":{"row":104,"column":16},"end":{"row":104,"column":17},"action":"remove","lines":["§"],"id":4940}],[{"start":{"row":104,"column":16},"end":{"row":104,"column":18},"action":"insert","lines":["``"],"id":4941}],[{"start":{"row":104,"column":17},"end":{"row":104,"column":18},"action":"insert","lines":["m"],"id":4942},{"start":{"row":104,"column":18},"end":{"row":104,"column":19},"action":"insert","lines":["i"]},{"start":{"row":104,"column":19},"end":{"row":104,"column":20},"action":"insert","lines":["l"]},{"start":{"row":104,"column":20},"end":{"row":104,"column":21},"action":"insert","lines":["i"]},{"start":{"row":104,"column":21},"end":{"row":104,"column":22},"action":"insert","lines":["s"]}],[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"insert","lines":[" "],"id":4943}],[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"remove","lines":[" "],"id":4944}],[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"insert","lines":[":"],"id":4945}],[{"start":{"row":104,"column":23},"end":{"row":104,"column":24},"action":"insert","lines":[" "],"id":4946},{"start":{"row":104,"column":24},"end":{"row":104,"column":25},"action":"insert","lines":["$"]},{"start":{"row":104,"column":25},"end":{"row":104,"column":26},"action":"insert","lines":["{"]},{"start":{"row":104,"column":26},"end":{"row":104,"column":27},"action":"insert","lines":["}"]}],[{"start":{"row":104,"column":26},"end":{"row":104,"column":27},"action":"insert","lines":["m"],"id":4947},{"start":{"row":104,"column":27},"end":{"row":104,"column":28},"action":"insert","lines":["i"]},{"start":{"row":104,"column":28},"end":{"row":104,"column":29},"action":"insert","lines":["l"]},{"start":{"row":104,"column":29},"end":{"row":104,"column":30},"action":"insert","lines":["i"]},{"start":{"row":104,"column":30},"end":{"row":104,"column":31},"action":"insert","lines":["s"]}],[{"start":{"row":104,"column":28},"end":{"row":104,"column":29},"action":"insert","lines":["l"],"id":4948}],[{"start":{"row":104,"column":35},"end":{"row":104,"column":36},"action":"insert","lines":[";"],"id":4949}],[{"start":{"row":104,"column":20},"end":{"row":104,"column":21},"action":"insert","lines":["l"],"id":4950}],[{"start":{"row":106,"column":55},"end":{"row":107,"column":0},"action":"insert","lines":["",""],"id":4951},{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"insert","lines":["    "]},{"start":{"row":107,"column":4},"end":{"row":107,"column":5},"action":"insert","lines":["c"]},{"start":{"row":107,"column":5},"end":{"row":107,"column":6},"action":"insert","lines":["o"]},{"start":{"row":107,"column":6},"end":{"row":107,"column":7},"action":"insert","lines":["n"]},{"start":{"row":107,"column":7},"end":{"row":107,"column":8},"action":"insert","lines":["s"]},{"start":{"row":107,"column":8},"end":{"row":107,"column":9},"action":"insert","lines":["o"]}],[{"start":{"row":107,"column":9},"end":{"row":107,"column":10},"action":"insert","lines":["l"],"id":4952},{"start":{"row":107,"column":10},"end":{"row":107,"column":11},"action":"insert","lines":["e"]},{"start":{"row":107,"column":11},"end":{"row":107,"column":12},"action":"insert","lines":["."]},{"start":{"row":107,"column":12},"end":{"row":107,"column":13},"action":"insert","lines":["l"]},{"start":{"row":107,"column":13},"end":{"row":107,"column":14},"action":"insert","lines":["o"]},{"start":{"row":107,"column":14},"end":{"row":107,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":107,"column":15},"end":{"row":107,"column":17},"action":"insert","lines":["()"],"id":4953}],[{"start":{"row":107,"column":16},"end":{"row":107,"column":18},"action":"insert","lines":["\"\""],"id":4954}],[{"start":{"row":107,"column":16},"end":{"row":107,"column":18},"action":"remove","lines":["\"\""],"id":4955}],[{"start":{"row":107,"column":16},"end":{"row":107,"column":18},"action":"insert","lines":["``"],"id":4956}],[{"start":{"row":107,"column":17},"end":{"row":107,"column":18},"action":"insert","lines":["m"],"id":4957},{"start":{"row":107,"column":18},"end":{"row":107,"column":19},"action":"insert","lines":["i"]},{"start":{"row":107,"column":19},"end":{"row":107,"column":20},"action":"insert","lines":["n"]},{"start":{"row":107,"column":20},"end":{"row":107,"column":21},"action":"insert","lines":["u"]},{"start":{"row":107,"column":21},"end":{"row":107,"column":22},"action":"insert","lines":["t"]},{"start":{"row":107,"column":22},"end":{"row":107,"column":23},"action":"insert","lines":["e"]},{"start":{"row":107,"column":23},"end":{"row":107,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":107,"column":24},"end":{"row":107,"column":25},"action":"insert","lines":[" "],"id":4958},{"start":{"row":107,"column":25},"end":{"row":107,"column":26},"action":"insert","lines":["+"]}],[{"start":{"row":107,"column":26},"end":{"row":107,"column":27},"action":"insert","lines":[" "],"id":4959},{"start":{"row":107,"column":27},"end":{"row":107,"column":28},"action":"insert","lines":["s"]},{"start":{"row":107,"column":28},"end":{"row":107,"column":29},"action":"insert","lines":["e"]},{"start":{"row":107,"column":29},"end":{"row":107,"column":30},"action":"insert","lines":["c"]},{"start":{"row":107,"column":30},"end":{"row":107,"column":31},"action":"insert","lines":["o"]},{"start":{"row":107,"column":31},"end":{"row":107,"column":32},"action":"insert","lines":["n"]},{"start":{"row":107,"column":32},"end":{"row":107,"column":33},"action":"insert","lines":["d"]},{"start":{"row":107,"column":33},"end":{"row":107,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":107,"column":34},"end":{"row":107,"column":35},"action":"insert","lines":[":"],"id":4960}],[{"start":{"row":107,"column":35},"end":{"row":107,"column":36},"action":"insert","lines":[" "],"id":4961}],[{"start":{"row":107,"column":36},"end":{"row":107,"column":37},"action":"insert","lines":["$"],"id":4962},{"start":{"row":107,"column":37},"end":{"row":107,"column":38},"action":"insert","lines":["{"]},{"start":{"row":107,"column":38},"end":{"row":107,"column":39},"action":"insert","lines":["}"]}],[{"start":{"row":107,"column":41},"end":{"row":107,"column":42},"action":"insert","lines":[";"],"id":4963}],[{"start":{"row":107,"column":38},"end":{"row":107,"column":101},"action":"insert","lines":["parseFloat(minutes + \".\" + (seconds < 10 ? '0' : '') + seconds)"],"id":4964}],[{"start":{"row":104,"column":0},"end":{"row":105,"column":0},"action":"remove","lines":["    console.log(`millis: ${millis}`);",""],"id":4965}],[{"start":{"row":106,"column":0},"end":{"row":107,"column":0},"action":"remove","lines":["    console.log(`minutes + seconds: ${parseFloat(minutes + \".\" + (seconds < 10 ? '0' : '') + seconds)}`);",""],"id":4966}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"remove","lines":["//const spotifyData = d3.csvParse(d3.select('pre#data').text());",""],"id":4967},{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":432,"column":1},"end":{"row":432,"column":2},"action":"remove","lines":[";"],"id":4968}],[{"start":{"row":46,"column":0},"end":{"row":52,"column":1},"action":"remove","lines":["function unique_count_groupall(group) {","    return {","        value: function() {","            return group.all().length;","        }","    };","}"],"id":4969},{"start":{"row":46,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":["function unique_count_groupall(group) {","  return {","    value: function() {","      return group.all().filter(kv => kv.value).length;","    }","  };","}"]}],[{"start":{"row":47,"column":2},"end":{"row":47,"column":4},"action":"insert","lines":["  "],"id":4970},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":6},"action":"insert","lines":["      "]},{"start":{"row":50,"column":4},"end":{"row":50,"column":8},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":59,"column":3},"end":{"row":59,"column":58},"action":"remove","lines":[" var uniqueArtist = unique_count_groupall(dim.group());"],"id":4971},{"start":{"row":59,"column":3},"end":{"row":59,"column":57},"action":"insert","lines":["var uniqueArtist = unique_count_groupall(dim.group());"]}],[{"start":{"row":59,"column":3},"end":{"row":59,"column":4},"action":"insert","lines":[" "],"id":4972}],[{"start":{"row":62,"column":18},"end":{"row":62,"column":27},"action":"remove","lines":[".render()"],"id":4973},{"start":{"row":62,"column":18},"end":{"row":62,"column":57},"action":"insert","lines":[".formatNumber(d3.format('s')).render();"]}],[{"start":{"row":62,"column":56},"end":{"row":62,"column":57},"action":"remove","lines":[";"],"id":4974}],[{"start":{"row":44,"column":4},"end":{"row":44,"column":50},"action":"remove","lines":["he code for this function was figured out from"],"id":4975},{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"remove","lines":["T"]}],[{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["I"],"id":4976}],[{"start":{"row":44,"column":4},"end":{"row":44,"column":5},"action":"insert","lines":[" "],"id":4977},{"start":{"row":44,"column":5},"end":{"row":44,"column":6},"action":"insert","lines":["r"]},{"start":{"row":44,"column":6},"end":{"row":44,"column":7},"action":"insert","lines":["e"]},{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["c"]},{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["e"]},{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["i"]},{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["v"]},{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["e"]},{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["d"]}],[{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"insert","lines":[" "],"id":4978},{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["h"]},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["e"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["l"]},{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["p"]}],[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":[" "],"id":4979},{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":["f"]},{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["o"]},{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"insert","lines":[" "],"id":4980},{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["t"]},{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"insert","lines":["i"]}],[{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"remove","lines":["i"],"id":4981}],[{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"insert","lines":["h"],"id":4982},{"start":{"row":44,"column":25},"end":{"row":44,"column":26},"action":"insert","lines":["i"]},{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":[" "],"id":4983},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["f"]},{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":["r"]},{"start":{"row":44,"column":30},"end":{"row":44,"column":31},"action":"insert","lines":["o"]},{"start":{"row":44,"column":31},"end":{"row":44,"column":32},"action":"insert","lines":["m"]}],[{"start":{"row":94,"column":0},"end":{"row":94,"column":56},"action":"remove","lines":["    //averageCount.(d3.time.format('%M:%SZ\"')).render();"],"id":4984},{"start":{"row":93,"column":54},"end":{"row":94,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":195,"column":11},"end":{"row":196,"column":0},"action":"remove","lines":["",""],"id":4985}],[{"start":{"row":337,"column":5},"end":{"row":338,"column":0},"action":"remove","lines":["",""],"id":4986}],[{"start":{"row":201,"column":25},"end":{"row":201,"column":30},"action":"remove","lines":["dance"],"id":4990},{"start":{"row":201,"column":25},"end":{"row":202,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":201,"column":25},"end":{"row":202,"column":0},"action":"remove","lines":["",""],"id":4991}],[{"start":{"row":201,"column":25},"end":{"row":201,"column":26},"action":"insert","lines":["d"],"id":4992},{"start":{"row":201,"column":26},"end":{"row":201,"column":27},"action":"insert","lines":["a"]},{"start":{"row":201,"column":27},"end":{"row":201,"column":28},"action":"insert","lines":["n"]},{"start":{"row":201,"column":28},"end":{"row":201,"column":29},"action":"insert","lines":["c"]},{"start":{"row":201,"column":29},"end":{"row":201,"column":30},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":461,"column":0},"end":{"row":461,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":32,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1571317921612,"hash":"0265ff30bbd372be11faa4afaf85064a03d08fc2"}