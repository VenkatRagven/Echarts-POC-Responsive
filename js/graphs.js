// chart 1 - Bar chart starts

var chart = echarts.init(document.getElementById('chart1'));
	//chart.showLoading();
	// setTimeout(function () {
    // chart.showLoading();   
    // }, 2000)
$.getJSON('resources/testData.json', function (data) {
    chart.hideLoading();

    option = { 
		title:{
			text: data.barTitle
		},
        tooltip : {
            trigger: 'axis',
        },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true,title:'mark'},
                dataView : {show: true, readOnly: false,title:'View',lang: ['view', 'close', 'refresh']},
                magicType: {show: true, type: ['line','bar'],title:{line: 'line chart',bar: 'bar chart'}},
                restore :  {show: true,title: 'refresh'},
                saveAsImage : {show: true,title: 'save'}
            }
        },
        calculable : true,
        legend: {
            data:data.testData,
            // itemGap: 5
        },
        xAxis: [
            {
                //type : 'category',
                data : data.names
            }
        ],
        yAxis: [
            {
                //type : 'value',
                name : 'Budget (million USD)'
            }
        ],
        
        series : [
            {
                name: 'Data 1',
                type: 'bar',
                data: data.data1
            },
            {
                name: 'Data 2',
                type: 'bar',
                data: data.data2
            }
        ]
    };
    chart.setOption(option);
});
//chart 1 - Bar chart ends

//chart 2 starts
var chart2 = echarts.init(document.getElementById('chart2'));
$.getJSON('resources/testData.json', function (data) {
    chart.hideLoading();

    option = { 
		title:{
			text: data.pieTitle
		},
        tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true,title:'mark'},
                dataView : {show: true, readOnly: false,title:'View',lang: ['view', 'close', 'refresh']},
                magicType: {show: true, type: ['line','bar'],title:{line: 'line chart',bar: 'bar chart'}},
                restore :  {show: true,title: 'refresh'},
                saveAsImage : {show: true,title: 'save'}
            }
        },
        calculable : true,
        legend: {
			orient:'horizontal',
			center:'center',
			bottom:'bottom',
            data:data.pieData,
            // itemGap: 5
        },
        
        series : [
            {
                name: 'Month',
                type: 'pie',
				radius: '55%',
				center: ['25%','58%'],
                data:
				[
					//{value:data1.pieValue, name:data1.testData}
					{value:335, name:'Jan'},
					{value:310, name:'Feb'},
					{value:234, name:'Mar'},
					{value:135, name:'April'},
					{value:1548, name:'May'}
				],
            
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}	
        ]
    };
    chart2.setOption(option);
});
//chart 2 ends

// chart 3 - simple Bar chart starts
var chart3 = echarts.init(document.getElementById('chart3'));

$.getJSON('resources/testData.json', function (data) {
    chart.hideLoading();

    option = { 
		title:{
			text: data.simplebarTitle
		},
        tooltip : {
            trigger: 'axis',
        },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true,title:'mark'},
                dataView : {show: true, readOnly: false,title:'View',lang: ['view', 'close', 'refresh']},
                magicType: {show: true, type: ['line','bar'],title:{line: 'line chart',bar: 'bar chart'}},
                restore :  {show: true,title: 'refresh'},
                saveAsImage : {show: true,title: 'save'}
            }
        },
        calculable : true,
        legend: {
            data:['Callouts'],
			center:'center',
			bottom:'bottom'
           
        },
        xAxis: [
            {
                //type : 'category',
                data : data.months
            }
        ],
        yAxis:{},
        
        series : [
            {
                name: 'Callouts',
                type: 'bar',
                data: data.callouts
            }
        ]
    };
    chart3.setOption(option);
});
//chart 3 - simple Bar chart ends

// chart 4 - line chart starts
var chart4 = echarts.init(document.getElementById('chart4'));

$.getJSON('resources/bubbleData.json',function (data) {
	
	option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        //text: '1990 与 2015 年各国家人均寿命与 GDP'
		text: data[0][0]
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};
	
    chart4.setOption(option);
});
//chart 4 - line chart ends


// chart 5 - colored pie chart starts
var chart5 = echarts.init(document.getElementById('chart5'));

$.getJSON('resources/bubbleData.json',function (data) {
	
	option = {
    backgroundColor: '#fff',
    title: {
        text: data[2],
        //subtext: '2016',
        // x: 'center',
        // y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['data1', 'data2', 'data3', 'data4', 'data5']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        //radius: ['25%', '50%'],
		radius: ['75%','50%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data[4]
    }]
};
	
    chart5.setOption(option);
});
//chart 5 - colored pie chart ends

//chart 6 - coountries chart starts

var chart6 = echarts.init(document.getElementById('chart6'));

$.getJSON('resources/countries.json',function (data) {
console.log('data',data);

option = {
    title: {
        text: 'World Population (2010)',
        subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
        sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 0,
        max: 1000000,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue','yellow', 'orangered']
        }
    },
    series: [
        {
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:data
        }
    ]
};


chart6.setOption(option);
});
//chart 6 - coountries chart ends