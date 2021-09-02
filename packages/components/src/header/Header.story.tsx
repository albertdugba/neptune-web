import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const Basic = () => {
  return <Header as="h3" title="Header title" />;
};

export const WithAction = () => {
  return (
    <Header
      title="Header title"
      action={{
        'aria-label': 'Magic',
        title: 'Click me!',
        onClick: () => alert('Action!'),
      }}
    />
  );
};
