import { NavigationOption } from '@transferwise/components';
import { shallow } from 'enzyme';

import DynamicDecision from '.';

describe('Given a component for dynamically rendering reviews', () => {
  let component;
  let onAction;
  let spec;

  const option = {
    text: 'More information',
    action: {
      title: 'Option A',
      url: '/example',
      method: 'GET',
    },
  };

  beforeEach(() => {
    spec = {
      component: 'decision',
      options: [option],
      margin: 'md',
    };
    onAction = jest.fn();
    component = shallow(<DynamicDecision component={spec} onAction={onAction} />);
  });

  it('should use the action title for the decision title', () => {
    expect(component.find(NavigationOption).prop('title')).toStrictEqual(option.action.title);
  });

  it('should use the action label for the action link', () => {
    expect(component.find(NavigationOption).prop('content')).toBe(option.text);
  });

  describe('when the an option triggers an action', () => {
    beforeEach(() => {
      component.find(NavigationOption).simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(option.action);
    });
  });
});
