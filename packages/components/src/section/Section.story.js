import Section from './Section';

export default {
  component: Section,
  title: 'Section',
};

export const Basic = () => {
  return <Section header={{ title: 'Section title' }}>Section content</Section>;
};
