/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */
// /* eslint-disable prettier/prettier */
// import { Alert, Link, Sentiment } from '@transferwise/components';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'September Release',
  date: '2021-09-30',
  version: {
    components: '38.0.0',
    css: '11.0.0',
  },
  authors: [
    {
      name: 'Naiara Abaroa',
      githubUsername: 'nabaroa',
    },
    {
      name: 'Mate Bek',
      githubUsername: 'matebek-tw',
    },
    {
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
  ],
  tags: ['Updated Typography', 'Accessible Colors', 'Support for RTL mode'],
};

export default function PageContent(): ReactElement {
  return (
    <>
      <Heading as="h2" className="m-t-3 m-b-1">
        Updated Typography
      </Heading>
      <p>
        Neptune Design System made cross platform alignment and improved consistency for typography
        styles. Learn more about that <a href="https://neptune.wise.com/design/typography/">here</a>
        .
      </p>
      <p>
        We updated styles of components and Neptune CSS: font size, font weight, line height and
        emphasis styles.
      </p>
      <p>We also adding new CSS utility classes that have cross platfrom naming.</p>
      <Heading as="h3" className="m-b-1">
        New Headings Utility Classes.
      </Heading>
      <p className="m-b-1">
        Use <code>.title-1</code>, <code>.title-2</code> ... font styling classes for the headings
        (see <DocumentLink href="styles/core/Typography#headings">full documentation</DocumentLink>
        ).
      </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Usage Example</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>{'<h1 class="title-1">Money without borders</h1>'}</pre>
              <pre>{'<span class="title-1">Money without borders</span>'}</pre>
              <pre>{'<h2 class="title-2">Money without borders</h2>'}</pre>
              <pre>{'<span class="title-2">Money without borders</span>'}</pre>
              <pre>{'<h3 class="title-3">Money without borders</h3>'}</pre>
              <pre>{'<span class="title-3">Money without borders</span>'}</pre>
            </td>
            <td>
              <h1 className="title-1">Money without borders</h1>
              <span className="title-1">Money without borders</span>
              <h1 className="title-2">Money without borders</h1>
              <span className="title-2">Money without borders</span>
              <h1 className="title-3">Money without borders</h1>
              <span className="title-3">Money without borders</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Heading as="h3" className="title-4 m-b-1">
        New Body Utility classes
      </Heading>
      <code>.body-*</code>, <code>.control-*</code>, <code>.value</code>, <code>.label</code>, see{' '}
      <DocumentLink href="styles/core/Typography#body-copy">full documentation</DocumentLink>.
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Usage example</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>
                {`<p class="body-1">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
              </pre>
            </td>
            <td>
              <p className="body-1">
                Body 1<br />
                Were on a mission to bring transparency to finance.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <pre>
                {`<p class="body-2">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
              </pre>
            </td>
            <td>
              <p className="body-2">
                Body 1<br />
                Were on a mission to bring transparency to finance.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <pre>
                {`<p class="body-3">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
              </pre>
            </td>
            <td>
              <p className="body-3">
                Body 1<br />
                Were on a mission to bring transparency to finance.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <pre>
                {`<p class="control-1">Control 1</p>
<span class="control-1">Control 1</span>
<p class="control-2">Control 2</p>
<span class="control-2">Control 2</span>
<p class="control-3">Control 3</p>
<span class="control-3">Control 3</span>`}
              </pre>
            </td>
            <td>
              <p className="control-1">Control 1</p>
              <span className="control-1">Control 1</span>
              <p className="control-2">Control 2</p>
              <span className="control-2">Control 2</span>
              <p className="control-3">Control 3</p>
              <span className="control-3">Control 3</span>
            </td>
          </tr>
          <tr>
            <td>
              <pre>{'<p class="label">Label</p>'}</pre>
            </td>
            <td>
              <p className="label">Label</p>
            </td>
          </tr>
          <tr>
            <td>
              <pre>{'<p class="value">Value</p>'}</pre>
            </td>
            <td>
              <p className="value">Value</p>
            </td>
          </tr>
        </tbody>
      </table>
      <Heading as="h3" className="m-b-1">
        New Typography Tokens
      </Heading>
      <p>
        Please use them instead of old and deprecated ones, they available as CSS custom properties
        as LESS variables, see{' '}
        <DocumentLink href="styles/tokens/Typography">full documentation</DocumentLink>.
      </p>
      <ul>
        <li>
          <code>--font-size-12: 0.75rem;</code>
        </li>
        <li>
          <code>--font-size-14: 0.875rem;</code>
        </li>
        <li>
          <code>--font-size-16: 1rem;</code>
        </li>
        <li>
          <code>--font-size-20: 1.25rem;</code>
        </li>
        <li>
          <code>--font-size-26: 1.625rem;</code>
        </li>
        <li>
          <code>--font-size-32: 2rem;</code>
        </li>
        <li>
          <code>--line-height-title: 1.2;</code>
        </li>
        <li>
          <code>--line-height-body: 1.5;</code>
        </li>
        <li>
          <code>--line-height-control: 1.2;</code>
        </li>
        <li>
          <code>--font-weight-regular: 500;</code>
        </li>
        <li>
          <code>--font-weight-semi-bold: 600;</code>
        </li>
        <li>
          <code>--font-weight-bold: 800;</code>
        </li>
      </ul>
      <Heading as="h3" className="m-b-1">
        Points to have into account:
      </Heading>
      <ul>
        <li>
          Headings{"'"} font size is going to be 2px smaller, 10px for <code>h1</code>.
        </li>
        <li>Headings are going to keep the same size for mobile and desktop.</li>
        <li>
          To keep former <code>h1</code> size, specially in marketing pages, you can use
          `.display-5` utility class.
        </li>
        <li>
          Headings{"'"} line height has changed and you may notice a lack of spacing between the
          heading and the next element. If this is the case you can use spacing utility classes (
          <code>m-b-1</code>,...) to sort it out.
        </li>
      </ul>
      <Heading as="h3" className="m-b-1">
        Best practices
      </Heading>
      <ul>
        <li>
          Use new typography styles and replace existing ones. The old typography styles are going
          to be moved to the deprecation list, which are going to be maintained by now, but
          eventually can be removed.
        </li>
        <li>
          Avoid using headings without a class. Use,{' '}
          <code>
            h2 className={'"'}title-2{'"'}
          </code>{' '}
          instead. This avoids potential specificity issues and it{"'"}s a better practice for
          posible use of CSS modules in future.
        </li>
      </ul>
      <Heading as="h3" className="m-b-1">
        Deprecation list
      </Heading>
      <p>
        Neptune recommends to use new typography utility classes listed in above tables to format
        typography, because some of the typography classes are going to be deprecated:
      </p>
      <ul>
        <li>
          <code>&lt;h6&gt;</code>
        </li>
        <li>
          <code>.h1</code>, <code>.h2</code>, <code>.h3</code>, <code>.h4</code>, <code>.h5</code>,{' '}
          <code>.h6</code>
        </li>
        <li>
          <code>.small</code>,<code> .tiny</code>
        </li>
        <li>
          <code>.lead</code>
        </li>
        <li>
          <code>&lt;small&gt;</code> / <code>.small</code> inside headings
        </li>
        <li>
          <code>.text-danger</code>
        </li>
        <li>
          <code>.text-success</code>
        </li>
      </ul>
      <Heading as="h2" className="m-t-3 m-b-1">
        New and Accessible Colors
      </Heading>
      <Heading as="h2" className="m-t-3 m-b-1">
        Support for RTL mode
      </Heading>
    </>
  );
}
