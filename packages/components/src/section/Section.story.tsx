import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import Accordion from '../accordion';
import Card from '../card';
import NavigationOption from '../navigationOption';

import Section from './Section';

export default {
  component: Section,
  title: 'Section',
};

export const Basic = () => {
  return (
    <>
      <Section>Section 1 content</Section>
      <Section>Section 2 content</Section>
    </>
  );
};

export const WithHeader = () => {
  return (
    <>
      <Section
        header={{
          title: 'Section 1 title',
        }}
      >
        Section 1 content
      </Section>
      <Section
        header={{
          title: 'Section 2 title',
        }}
      >
        Section 2 content
      </Section>
    </>
  );
};

export const WithHeaderAction = () => {
  return (
    <>
      <Section
        header={{
          title: 'Section 1 title',
          action: {
            'aria-label': 'Magic 1',
            title: 'Click me!',
            onClick: () => alert('Action 1!'),
          },
        }}
      >
        Section 1 content
      </Section>
      <Section
        header={{
          title: 'Section 2 title',
          action: {
            'aria-label': 'Magic 2',
            title: 'Click me!',
            onClick: () => alert('Action 2!'),
          },
        }}
      >
        Section 2 content
      </Section>
    </>
  );
};

export const withAccordion = () => {
  const items = [
    {
      title: 'If you have a deadline, set up your transfer early',
      content:
        'Most large transfers take around 2–4 working days from start to finish. So set up your transfer early if you have a deadline coming up.',
      id: 'Item 1',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Have documents on hand to speed things up',
      content:
        'When you set up your transfer, we might ask for documents that show where your money comes from. Documents you might need (opens in a new tab)',
      id: 'Item 2',
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque velit nec ex rutrum efficitur sit amet at enim. Nam a neque magna. Nullam est urna, dignissim nec erat id, euismod aliquet nulla.',
      id: 'Item 3',
    },
  ];
  return (
    <Section
      header={{
        title: 'Section with accordion',
      }}
    >
      <Accordion items={items} indexOpen={0} />
    </Section>
  );
};

export const WithNavigationOptions = () => {
  return (
    <Section
      header={{
        title: 'Section with options',
      }}
    >
      <NavigationOption title="Option 1" onClick={() => alert('Option 1')} />
      <NavigationOption title="Option 2" onClick={() => alert('Option 2')} />
    </Section>
  );
};

export const WithCard = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <Section
      header={{
        title: 'Section with card',
      }}
    >
      {/* @ts-expect-error TODO: remove once Card is migrated to TypeScript */}
      <Card
        title="What's in the box?!"
        details="Click me to reveal."
        icon={<FastFlagIcon size={24} />}
        isExpanded={isCardExpanded}
        onClick={() => setIsCardExpanded(!isCardExpanded)}
      >
        <div>
          Hello there!{' '}
          <span role="img" aria-label="smiling face with squinting eyes">
            😊
          </span>
        </div>
      </Card>
    </Section>
  );
};
