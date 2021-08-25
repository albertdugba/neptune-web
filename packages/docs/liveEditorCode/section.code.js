() => {
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
  const [isCardExpanded, setIsCardExpanded] = React.useState(false);

  return (
    <>
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
      <Section>This is a section without a header.</Section>
      <Section
        header={{
          title: 'Section with accordion',
        }}
      >
        <Accordion items={items} indexOpen={0} />
      </Section>
      <Section
        header={{
          title: 'Section with navigation options',
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
          <div>
            Hello there!{' '}
            <span role="img" aria-label="smiling face with squinting eyes">
              😊
            </span>
          </div>
        </Card>
      </Section>
    </>
  );
};
