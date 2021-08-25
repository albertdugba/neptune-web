() => {
  const [isCardExpanded, setIsCardExpanded] = React.useState(false);

  return (
    <>
      <Section
        header={{
          title: 'Section with options',
        }}
      >
        <NavigationOption title="Option 1" onClick={() => alert('Option 1')} />
        <NavigationOption title="Option 2" onClick={() => alert('Option 2')} />
      </Section>
      <Section
        header={{
          title: 'Section with card',
        }}
      >
        <Card
          title="What's in the box?!"
          details="Click me to reveal."
          icon={<FastFlagIcon size={24} />}
          isExpanded={isCardExpanded}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          Hello there! 😊
        </Card>
      </Section>
      <Section
        header={{
          title: 'Section with action',
          action: {
            'aria-label': 'Magic',
            title: 'Click me!',
            onClick: () => alert('Action!'),
          },
        }}
      >
        Section content.
      </Section>
      <Section>This is section without a header.</Section>
    </>
  );
};
