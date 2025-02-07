import { useState } from 'react';

import { Size, Width } from '../common';

import Tabs from './Tabs';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const Basic = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Size.MEDIUM}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};

export const AutoTabHeaderWidth = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Size.MEDIUM}
      headerWidth={Width.AUTO}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};

export const NoPanelAnimation = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      animatePanels={false}
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Size.MEDIUM}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};
