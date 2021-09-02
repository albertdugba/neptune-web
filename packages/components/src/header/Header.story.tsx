import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const Basic = () => {
  return <Header title="Header title" />;
};

export const WithAction = () => {
  return (
    <Header
      title="Header title"
      action={{
        'aria-label': 'Magic 1',
        title: 'Click me!',
        onClick: () => alert('Action 1!'),
      }}
    />
  );
};
