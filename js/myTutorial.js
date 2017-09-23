
$(document).ready(function(){
	alert('df');
	
// chart 1 - Donut chart starts
var chart = echarts.init(document.getElementById('chart1'));

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(10, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)',//The color of the unfinished ring
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#ed8a34'//The color of the unfinished ring
    }
};
option = {
    title: {
        text: 'Good 75%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: "#333"
            
        }
    },
    backgroundColor: '',
    //color: ['#eb644b', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 6,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [80, 90],
            itemStyle: dataStyle,
            hoverAnimation: true,

            data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
			
        }, 
		{
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [100,110],
            itemStyle: dataStyle,
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        emphasis: {
                            color: '#333'
                        }
                    }
                }, {
                    value: 0,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },


    ]
};
chart.setOption(option);
//chart 1 - Donut chart ends

// chart 2 - Donut chart starts
var chart1 = echarts.init(document.getElementById('chart2'));

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(10, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)',//The color of the unfinished ring
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(22,59,70,1)'//The color of the unfinished ring
    }
};
option1 = {
    title: {
        text: 'Average 15%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: "#333"
            
        }
    },
    backgroundColor: '',
    //color: ['#eb644b', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 6,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [80, 90],
            itemStyle: dataStyle,
            hoverAnimation: true,

            data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
			
        }, 
		{
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [100,110],
            itemStyle: dataStyle,
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        emphasis: {
                            color: '#333'
                        }
                    }
                }, {
                    value: 0,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },


    ]
};
chart1.setOption(option1);
//chart 2 - Donut chart ends

// chart 3 - Donut chart starts
var chart2 = echarts.init(document.getElementById('chart3'));

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: '#ccc;',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)',//The color of the unfinished ring
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: ''//The color of the unfinished ring
    }
};
option2 = {
    title: {
        text: 'Bad 10%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: "#333"
            
        }
    },
    backgroundColor: '',
    //color: ['#eb644b', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 6,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [80, 90],
			
            itemStyle: dataStyle,
            hoverAnimation: true,

            data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
			
        }, 
		{
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [100,110],
            itemStyle: dataStyle,
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        emphasis: {
                            color: '#333'
                        }
                    }
                }, {
                    value: 0,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },


    ]
};
chart2.setOption(option2);
//chart 3 - Donut chart ends



$(window).on('resize', function(){
	if(chart != null && chart != undefined){
		chart.resize();
	}
	if(chart1 != null && chart1 != undefined){
		chart1.resize();
	}
	if(chart2 != null && chart2 != undefined){
		chart1.resize();
	}
})

})
