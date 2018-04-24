import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import _ from 'lodash'

import { PercentileBar, DessaParentWrappper } from './dessaParent.style'

class DessaParent extends Component {
	state = {
		chart: {
			labels: [],
			data: [],
			barColors: []
		},
		overall_score: 0
	}

	componentDidMount() {
		const { scoreData } = this.props;
		let self = this;
		let scoreLabels = Object.getOwnPropertyNames(scoreData.dessa_score)

		_.remove(scoreLabels, function(n) {
		  return n == 'overall_score';
		});
		
		this.setState({
			overall_score: scoreData.dessa_score.overall_score.percentile
		})

		scoreLabels.map((label, idx) => {
			this.setState((prevState) => {
				let color

				prevState.chart.labels.push(label)
				prevState.chart.data.push(scoreData.dessa_score[label].tscore)
				switch (scoreData.dessa_score[label].weight) {
					case 'need':
						color = '#ff5c33'
						break
					case 'typical':
						color = '#e6da00'
						break
					case 'strength':
						color = '#2bd96b'
						break
					default:
						break
				}
				prevState.chart.barColors.push(color)
				console.log(prevState)
				return prevState
			})
		})

		Chart.pluginService.register({
			afterDraw: function (chart, easing) {
				// Plugin code.

				let ctx = chart.ctx;
        ctx.font = "12px Verdana";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        chart.config.data.datasets.forEach(function (dataset, i) {
          var meta = chart.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        })
			}
		})
	}

	renderPercentileBar = (overall_score) => {
		return(
			<PercentileBar score={overall_score}>
				<div className="red">
				</div>
				<div className="yellow">
				</div>
				<div className="green">
				</div>
				<div className="score-bar">
					<div className="bar">
					</div>
					<p>{overall_score}</p>
				</div>
			</PercentileBar>
		)
	}

	render() {
		const { chart, overall_score } = this.state
		
		const options = {
			maintainAspectRatio: false,
      legend: false,
      tooltips: {
		    enabled: false
		  },
      scales: {
	      yAxes: [{
          ticks: {
          	display: false,
            beginAtZero:true,
            min: 0,
            max: 100    
          },
        }],
        xAxes: [{
        	gridLines : {
            display : false
          }
        }]
	    }
		}

		let chartData = {
			labels: chart.labels,
			datasets: [
				{
					backgroundColor: chart.barColors,
					data: chart.data
				}
			]
		}

		return (
			<DessaParentWrappper>
				<div className="percentile-bar">
					{ this.renderPercentileBar(overall_score) }
				</div>
				<Bar
          data={chartData}
          width={100}
          height={50}
         	ref='chart'
          options={options}
        />
			</DessaParentWrappper>
		)
	}
}

export default DessaParent