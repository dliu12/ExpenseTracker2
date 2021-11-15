import React from 'react';
import * as d3 from 'd3';
import './style.css';

const DataVisualizer = ({ data }) => {
  const d3Container = React.useRef(null);
  React.useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      var color = ['#cc4cf7', '#6e9c0b'];
      let pie = d3.pie();
      var dataConvert = pie(data.map((item) => item.value));

      var arc = d3.arc().innerRadius(50).outerRadius(120);

      let g = svg.append('g');

      var arcs = g.selectAll('arc').data(dataConvert).enter().append('g');
      arcs
        .append('path')
        .attr('fill', (data, i) => {
          console.log(i);
          return color[i];
        })
        .classed('graph', (d) => d)
        .attr('d', arc);

      arcs.on('mouseenter', (event, value) => {
        arcs.append('text');
        d3.select('text').text((item) => {
          return `${data[item.index].label}:$${value.data}`;
        });
      });

      arcs.on('mouseout', () => {
        d3.select('text').remove();
      });
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
