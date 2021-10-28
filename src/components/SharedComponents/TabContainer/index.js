import React from 'react';
import './style.css';
const TabContainer = ({ title = [], componentList = [] }) => {
  const [activeKey, setActiveKey] = React.useState(0);
  return (
    <section>
      <ul className="Tab-Title">
        {title.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveKey(index);
              }}
              className={activeKey === index ? 'active' : null}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <section className="Tab-Component">
        {componentList.map((item, index) => {
          if (index === activeKey) {
            return <React.Fragment>{item}</React.Fragment>;
          }
        })}
      </section>
    </section>
  );
};

export default TabContainer;
