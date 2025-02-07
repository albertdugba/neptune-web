import { Alert, Image, Link } from '@transferwise/components';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import popover1 from '../../public/static/assets/blog/popover-release-mar-2021_1.png';
import popover2 from '../../public/static/assets/blog/popover-release-mar-2021_2.png';
import popover3 from '../../public/static/assets/blog/popover-release-mar-2021_3.png';

export const meta = {
  name: 'Popover Upgrade guide',
  date: '2021-03-08',
  authors: [
    {
      name: 'Andrea Piras',
      githubUsername: 'andreapiras',
    },
  ],
  hidden: true,
};

const PageContent = (): ReactElement => {
  return (
    <div>
      <Alert message="These changes will be released in components v35. See the Popover designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@34.2.16-beta.48" />
      <p>
        We refactored Popover to make it more robust and accessible. The positioning engine has also
        been replaced with a more sophisticated tool called{' '}
        <Link href="https://popper.js.org/" target="_blank">
          Popper
        </Link>
        .
      </p>
      <Heading as="h2">Changes</Heading>
      <table className="docs-table table">
        <thead>
          <tr>
            <th>Old API</th>
            <th>New API</th>
            <th>Change type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>children: Types.element | Types.string</code>
            </td>
            <td>
              <code>children: Types.node</code>
            </td>
            <td>
              BREAKING CHANGE: Internal logic has changed. Elements will not be wrapped in focusable
              elements
            </td>
          </tr>
          <tr>
            <td>
              <code>classNames: Types.string</code>
            </td>
            <td>
              <code>className: Types.string</code>
            </td>
            <td>BREAKING CHANGE: prop name</td>
          </tr>
          <tr>
            <td>
              <code>
                content:
                <br />
                Types.element | Types.string | Types.func
              </code>
            </td>
            <td>
              <code>content: Types.node</code>
            </td>
            <td>BREAKING CHANGE: Removed type function support</td>
          </tr>
          <tr>
            <td>
              <code>containsFocusableElement</code>
            </td>
            <td>-</td>
            <td>Deleted this property</td>
          </tr>
          <tr>
            <td>
              <code>
                {`preferredPlacement: `}
                <br />
                Popover.Placement.TOP | Popover.Placement.RIGHT |
                <br />
                Popover.Placement.BOTTOM | Popover.Placement.LEFT | Popover.Placement.LEFT_TOP |
                <br />
                Popover.Placement.RIGHT_TOP | Popover.Placement.BOTTOM_RIGHT |
                <br />
                Popover.Placement.BOTTOM_LEFT
              </code>
            </td>
            <td>
              <code>
                preferredPlacement:
                <br />
                Popover.Placement.TOP | Popover.Placement.RIGHT | Popover.Placement.BOTTOM |
                Popover.Placement.LEFT
              </code>
            </td>
            <td />
          </tr>
          <tr>
            <td>
              <code>title: Types.element | Types.string</code>
            </td>
            <td>
              <code>title: Types.node</code>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
      <ul>
        <li>
          <b>className</b>
        </li>
      </ul>
      <Alert type="warning" message="Breaking change" />
      <p>
        ClassNames has been renamed to ClassName and To be consistent with the rest of our API now
        accepts only strings “class1 class2 …”
      </p>
      <ul>
        <li>
          <b>containsFocusableElement</b>
        </li>
      </ul>
      <Alert type="warning" message="Breaking change" />
      <p>
        containsFocusableElement was introduced in this{' '}
        <Link
          href="https://github.com/transferwise/neptune-web/commit/e0787fe3ed0dc1af48a3296129cda4f479219da6#diff-d4f3b771644287c2d339aea614ebe1e12841586ca1d3c421e21d98f2bb7f877a"
          target="_blank"
        >
          PR
        </Link>{' '}
        to allow Popover to be opened by multiple triggers and attach focus props.
      </p>
      <p>Example: Avatar + choose an icons</p>
      <Image src={popover1} alt="Avatar + choose an icons" loading="lazy" stretch={false} shrink />
      <p>To achieve the same behavior you can do something similar:</p>
      <pre>
        {`// This is not the cleanest solution but still better to embed this logic in Popover for one use case.
const simulateTriggerClick = () => {
  // Do your stuff here
  triggerRef.current.click();
};
<Popover content={<IconElement onClick={()=>simulateTriggerClick()} …>
  <button ref={triggerRef} ...>
    <Avatar ...>
      🧜🏼
    </Avatar>
    Choose an icon
  </button>
</Popover>`}
      </pre>
      <ul>
        <li>
          <b>preferredPlacement</b>
        </li>
      </ul>
      <Alert type="warning" message="**DEPRECATION**" />
      <p>We deprecated some of the preferredPlacement</p>
      <table className="docs-table table">
        <thead>
          <tr>
            <th>Deprecated</th>
            <th>Supported</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>Popover.Position.LEFT_TOP</code>
            </td>
            <td>
              <code>Popover.Position.TOP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>Popover.Position.RIGHT_TOP</code>
            </td>
            <td>
              <code>Popover.Position.TOP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>Popover.Position.BOTTOM_LEFT</code>
            </td>
            <td>
              <code>Popover.Position.BOTTOM</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>Popover.Position.BOTTOM_RIGHT</code>
            </td>
            <td>
              <code>Popover.Position.BOTTOM</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The only supported position will be TOP, RIGHT, BOTTOM, LEFT. Please note that Popper engine
        is going to determine the best position for your popover based on the space available on
        screen if the one provided is not suitable.
      </p>
      <ul>
        <li>
          <b>content</b>
        </li>
      </ul>
      <Alert type="warning" message="Breaking change" />
      <p>The old API used to accept</p>
      <ul>
        <li>Types.element</li>
        <li>Types.string</li>
        <li>Types.func</li>
      </ul>
      <p>
        Now it will accept only nodes.
        <br />
        Popover content should accept only a restricted set of html (see docs) and translatable
        string.
      </p>
      <ul>
        <li>
          <b>Markup</b>
        </li>
      </ul>
      <Alert type="warning" message="Breaking change" />
      <p>
        Although we don’t provide official support for user relying on html and css internal
        implementation, it’s worth mention that the both html structure and css have changed.
      </p>
      <Heading as="h2">Migration Example</Heading>
      <Heading as="h3">Old API</Heading>
      <pre>
        {`<Popover
  containsFocusableElement={containsFocusableElement}
  content="You’ll get this rate as long..."
  preferredPlacement={Popover.Placement.BOTTOM_RIGHT}
  title="Guaranteed rate"
>
  <Icon> / <span> / string
</Popover>`}
      </pre>
      <Heading as="h3">New API</Heading>
      <pre>
        {`<Popover
  content={You’ll get this rate as long...}
  preferredPlacement={Popover.Placement.BOTTOM}
  title="Guaranteed rate"
>
  <button ...>
      <Icon> / string
  </button>
</Popover>`}
      </pre>
      <Heading as="h2">Adaptive Positioning</Heading>
      <Alert type="warning" message="**VISUAL CHANGE**" />
      <p>
        At the moment Popover doesn’t change its placements when reaching the windows boundaries.
        Its position gets recalculated only on open/close. The new version adapts to the container
        and calculates automatically the best placement on screen for both content and arrow
      </p>
      <Image src={popover2} alt="Popover Adaptive Positioning" loading="lazy" stretch={false} />
      <Heading as="h2">Mobile Behaviour</Heading>
      <Alert type="warning" message="**VISUAL CHANGE**" />
      <p>
        In order to align mobile web with mobile behaviour, Popover will now open in a bottomSheet
        on Mobile size devices.
      </p>
      <Image
        src={popover3}
        alt="Popover example of mobile behaviour"
        loading="lazy"
        stretch={false}
      />
      <Heading as="h2">Dependency requirements</Heading>
      <pre>
        {'@transferwise/components >= 35.x.x'}
        <br />
        {'@transferwise/neptune-css >= 9.x.x'}
      </pre>
    </div>
  );
};

export default PageContent;
