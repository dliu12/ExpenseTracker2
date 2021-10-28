import React from 'react';
import * as d3 from 'd3';
import './style.css';

const DataVisualizer = ({ data }) => {
  const d3Container = React.useRef(null);
  React.useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      var color = ['#cc4cf7', '#6e9c0b'];
      const text = ['Expense', 'Income'];
      let pie = d3.pie();
      var dataConvert = pie(data);

      var arc = d3.arc().innerRadius(50).outerRadius(120);

      let g = svg.append('g').attr('transform', 'translate(200, 150)');

      var arcs = g.selectAll('arc').data(dataConvert).enter().append('g');

      arcs
        .append('path')
        .attr('fill', (data, i) => {
          return color[i];
        })
        .classed('graph', (d) => d)
        .attr('d', arc);
    }
  }, [data, d3Container.current]);
  return (
    <svg
      className="dataVisualization"
      width={500}
      height={500}
      ref={d3Container}
    />
  );
};

export default DataVisualizer;
