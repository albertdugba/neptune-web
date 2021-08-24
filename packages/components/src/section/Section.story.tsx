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
    <Section
      header={{
        title: 'Section title',
        action: {
          title: 'Click me!',
          onClick: () => alert('Action!'),
        },
      }}
    >
      Section content
    </Section>
  );
};
