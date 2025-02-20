import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import Stepper from './Stepper';

export default {
  component: Stepper,
  title: 'Stepper',
};

export const Basic = () => {
  const activeStep = select('activeStep', [0, 1, 2, 3, 4], 0);
  return (
    <Stepper
      activeStep={activeStep}
      steps={[
        {
          label: 'One',
          onClick() {
            action('You clicked on step 1, which triggered this function, which alerted you.');
          },
        },
        {
          label: 'Two',
          hoverLabel: (
            <>
              <div>
                <strong>Diana Jaramillo</strong>
              </div>
              dianajarm123@gmail.com
            </>
          ),
        },
        { label: 'Recipient' },
        { label: 'Smellification' },
        { label: 'Battle' },
      ]}
    />
  );
};
