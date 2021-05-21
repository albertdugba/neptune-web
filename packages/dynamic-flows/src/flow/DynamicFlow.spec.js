import React from 'react';
import { mount } from 'enzyme';

import DynamicFlow from '.';
import DynamicLayout from '../layout';
import { convertStepToLayout, inlineReferences } from './layoutService';
import { request } from './stepService';
import { wait } from '../test-utils';

jest.mock('./layoutService');
jest.mock('./stepService');
jest.mock('../layout', () => () => <div />);

// We want to use the original implementation so everything continues to function
const layoutService = jest.requireActual('./layoutService');

convertStepToLayout.mockImplementation(layoutService.convertStepToLayout);
inlineReferences.mockImplementation(layoutService.inlineReferences);

describe('Given a component for rendering a dynamic flow', () => {
  let component;
  let onClose;
  let onStepChange;

  const successAction = {
    label: 'Submit',
    method: 'POST',
    url: '/success',
  };

  const failureAction = {
    label: 'Submit',
    method: 'POST',
    url: '/failure',
  };

  const navigateAction = {
    label: 'Skip',
    method: 'GET',
    url: '/next',
  };

  const actions = [successAction, navigateAction, failureAction];

  // const reviewFields = {
  //   title: 'A thing',
  //   fields: [
  //     {
  //       title: 'Label for a',
  //       value: 'Value of a',
  //     },
  //   ],
  // };

  const numberSchema = { type: 'number' };
  const stringSchema = { type: 'string', refreshRequirementsOnChange: true };

  const thingSchema = {
    $id: '#thing',
    type: 'object',
    properties: {
      a: numberSchema,
      b: stringSchema,
    },
    required: ['a'],
  };

  const newSchema = {};
  const newLayout = [{ type: 'form', newSchema }];
  const newStep = { type: 'form', layout: newLayout };

  const formStep = {
    type: 'form',
    key: 'create-thing', // For tracking
    // title: 'Step 1',
    // description: 'Please create a thing',
    layout: [
      {
        type: 'form',
        schema: { $ref: '#thing' },
      },
    ],
    schemas: [thingSchema],
    actions,
    model: { a: 99 },
    refreshFormUrl: '/refresh',
  };

  const formStepNoLayout = { ...formStep };
  delete formStepNoLayout.layout;

  const decisionStep = {
    type: 'decision',
    key: 'decide-thing-type',
    title: 'Thing type',
    description: 'Please choose between types of things',
    options: [
      {
        title: 'Thing one',
        description: 'The first type of thing',
        url: 'https://...',
      },
      {
        title: 'Thing two',
        url: 'https://...',
        enabled: false,
      },
    ],
  };

  const finalStep = {
    type: 'final',
    key: 'thing-final',
    success: true,
    details: {
      image: '/images/1234.png',
      title: 'We create the thing!',
      description: 'You now do stuff with the thing',
      actionTitle: 'Continue',
    },
    result: {
      exitValue: 'value',
    },
  };

  const baseUrl = '';
  const formUrl = '/form'; // eslint-disable-line
  const formNoLayoutUrl = '/formNoLayout'; // eslint-disable-line
  const decisionUrl = '/decision';
  const finalUrl = '/final'; // eslint-disable-line

  const errorResponse = {
    error: "That's not allowed",
    validation: {
      a: 'something wrong with this',
    },
  };

  const resolve = (response) => {
    return new Promise((promiseResolve) => {
      setTimeout(() => {
        promiseResolve(response);
      }, 0);
    });
  };

  const reject = (response) => {
    return new Promise((promiseResolve, promiseReject) => {
      setTimeout(() => {
        promiseReject(response);
      }, 0);
    });
  };

  const mockApi = (action, model) => {
    switch (action.url) {
      case '/form':
        return resolve(formStep);
      case '/formNoLayout':
        return resolve(formStepNoLayout);
      case '/decision':
        return resolve(decisionStep);
      case '/final':
        return resolve(finalStep);
      case '/exit':
        return resolve({});
      case '/navigate':
        return resolve(newStep);
      case '/success':
        return resolve(newStep);
      case '/refresh':
        if (model.failure) {
          return reject(errorResponse);
        }
        return resolve(newStep);
      case '/failure':
        return reject(errorResponse);
      default:
        return reject(errorResponse);
    }
  };

  // eslint-disable-next-line
  function getLayout() {
    return component.find(DynamicLayout);
  }

  function waitBeforeEach() {
    beforeEach(async () => {
      await wait(0);
      component.update();
    });
  }

  beforeEach(async () => {
    request.mockImplementation(mockApi);
    onClose = jest.fn();
    onStepChange = jest.fn();
    convertStepToLayout.mockClear();
    inlineReferences.mockClear();
  });

  describe('when instantiated', () => {
    beforeEach(() => {
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      // Use mount an manually mock, information above
      component = mount(
        <DynamicFlow flowUrl={decisionUrl} onClose={onClose} onStepChange={onStepChange} />,
      );
    });
    it('should load the step specification using the supplied URL', () => {
      expect(request).toHaveBeenCalledWith({ url: decisionUrl, method: 'GET' }, undefined, baseUrl);
    });
  });

  describe('when there is JS step', () => {
    it('should use the DynamicJS component', () => {
      // TODO
    });
  });

  describe('when there is a decision step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow flowUrl={decisionUrl} onClose={onClose} onStepChange={onStepChange} />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', async () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(decisionStep);
    });
  });

  describe('when there is a form step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow flowUrl={formNoLayoutUrl} onClose={onClose} onStepChange={onStepChange} />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(formStepNoLayout);
    });

    it('should inline any schemas referenced by id using the layout service', () => {
      expect(inlineReferences).toHaveBeenCalled();
    });
  });

  describe('when there is a final step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow flowUrl={finalUrl} onClose={onClose} onStepChange={onStepChange} />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(finalStep);
    });
  });

  describe('when there is a step layout', () => {
    const inlineFormLayout = [{ type: 'form', schema: thingSchema }];

    beforeEach(() => {
      component = mount(
        <DynamicFlow flowUrl={formUrl} onClose={onClose} onStepChange={onStepChange} />,
      );
    });

    waitBeforeEach();

    it('should use the DynamicLayout to render it', () => {
      expect(getLayout()).toBeTruthy();
    });

    it('should inline the form schema(s) and pass as the specification as a layout', () => {
      expect(getLayout().prop('components')).toEqual(inlineFormLayout);
    });

    it('should pass the layout the step model', () => {
      expect(getLayout().prop('model')).toEqual(formStep.model);
    });

    describe('when a model update is triggered by a schema with refreshRequirements', () => {
      const newModel = { a: 1, b: 'c' };
      const newStepWithModel = { ...newStep, model: { a: 1, b: 'c' } };

      beforeEach(() => {
        getLayout().invoke('onModelChange')(newModel, thingSchema, newModel.b, stringSchema);
      });

      waitBeforeEach();

      it('should use the model to request a new schema', () => {
        const fakeAction = {
          method: 'POST',
          url: '/refresh',
        };
        expect(request).toHaveBeenCalledWith(fakeAction, newModel, baseUrl);
      });

      it('should pass the new schema to the layout', () => {
        expect(getLayout().prop('components')).toEqual(newLayout);
      });

      it('should pass the new model to the layout', () => {
        expect(getLayout().prop('model')).toEqual(newStepWithModel.model);
      });
    });

    describe('when a refresh requirements call fails', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1, b: 'c' }, thingSchema, 'c', thingSchema);
      });

      it('should continue to render the original step', () => {
        expect(getLayout().prop('components')).toEqual(inlineFormLayout);
      });
    });

    describe('when the layout broadcasts a POST action and the model is valid', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      it('should tell the layout the form is submitted', () => {
        expect(getLayout().prop('submitted')).toBe(true);
      });

      it('should make the corresponding request', () => {
        expect(request).toHaveBeenCalledWith(successAction, { a: 1 }, baseUrl);
      });
    });

    describe('when the layout broadcasts a POST action and the model is invalid', () => {
      beforeEach(() => {
        request.mockClear();

        getLayout().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      it('should tell the layout the form is submitted', () => {
        expect(getLayout().prop('submitted')).toBe(true);
      });

      it('should not make the corresponding request', () => {
        expect(request).not.toHaveBeenCalled();
      });
    });

    describe('when the layout broadcasts a GET action and the model is invalid', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getLayout().invoke('onAction')(navigateAction);
      });

      it('should ignore the invalid model and make the corresponding request', () => {
        expect(request).toHaveBeenCalledWith(navigateAction, undefined, baseUrl);
      });
    });

    describe('when we submit an action but we receive a server error', () => {
      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(failureAction);
      });

      waitBeforeEach();

      it('should pass those errors to the layout', () => {
        expect(getLayout().prop('errors')).toBe(errorResponse.validation);
        // TODO deal with global errors
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action and we receive a new step', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      waitBeforeEach();

      it('should update the flow to use that step', () => {
        expect(getLayout().prop('components')).toBe(newStep.layout);
      });

      it('should trigger the onStepChange callback with the new step', () => {
        expect(onStepChange).toHaveBeenCalledWith(newStep);
      });
    });

    describe('when we submit an action and do not receive an error or valid step ', () => {
      const exitAction = {
        url: '/exit',
        method: 'POST',
        exit: true,
      };

      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(exitAction);
      });

      it('should exit the flow', () => {
        expect(onClose).toHaveBeenCalled();
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action with additional data', () => {
      const dataAction = { ...successAction, data: { a: 2, c: true } };

      beforeEach(() => {
        request.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(dataAction);
      });

      it('should submit the latest model combined with the action data', () => {
        expect(request).toHaveBeenCalledWith(dataAction, { a: 2, c: true }, baseUrl);
      });
    });

    // No such thing at the moment
    // describe('when we recieve a flow termination', () => {
    //   beforeEach(() => {
    //     stepResolve({ exit: true }); // TODO what is the format for exit?
    //   });
    //
    //   it('should exit the flow', () => {
    //     expect(onClose).toHaveBeenCalled();
    //   });
    //
    //   it('should not trigger onStepChange', () => {
    //     expect(onStepChange).not.toHaveBeenCalled();
    //   });
    // });

    describe('when the layout triggers a client side exit action', () => {
      const exitAction = {
        title: 'Exit',
        type: 'delete',
        exit: true,
        data: {
          exitValue: 'value',
        },
      };

      beforeEach(() => {
        getLayout().invoke('onAction')(exitAction);
      });

      it('should trigger the onClose callback with exit data', () => {
        expect(onClose).toHaveBeenCalledWith(exitAction.data);
      });
    });
  });
});
