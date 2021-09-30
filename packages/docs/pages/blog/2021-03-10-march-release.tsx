import { Alert, Image, Sentiment, Link } from '@transferwise/components';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import buttonPriorityMap from '../../public/static/assets/blog/button-release-mar-2021_1.png';
import circularButtons from '../../public/static/assets/blog/button-release-mar-2021_3.png';
import infoButton from '../../public/static/assets/blog/info-button-release-march-2021.png';
import inlineAlert from '../../public/static/assets/blog/inline-alert-release-mar-2021_1.png';
import popoverNew from '../../public/static/assets/blog/popover-release-mar-2021_4.png';
import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'March Release',
  date: '2021-03-10',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
  ],
  version: {
    components: '35.0.0',
    css: '9.0.0',
  },
  tags: ['Popover', 'Button'],
};

const PageContent = (): ReactElement => {
  return (
    <div className="d-flex flex-column">
      <Heading as="h2" className="m-t-4 m-b-1">
        Popover
      </Heading>
      <DocumentLink href="/blog/2021-03-08-popover-upgrade-guide">Upgrade guide</DocumentLink>
      <DocumentLink href="/components/alerts/Popover">Component docs</DocumentLink>
      <p className="m-t-3">
        Popover has been re-written. We’ve made use of the popular library{' '}
        <Link href="https://popper.js.org/react-popper/" target="_blank">
          Popper
        </Link>{' '}
        to better handle positioning, cleaned up the API and improved the transition. It will now
        move to avoid being cut off screen.
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-4">
        <Image src={popoverNew} alt="New Popover" loading="lazy" stretch={false} />
      </div>
      <p>
        There have been quite significant changes to the API. Please refer to the{' '}
        <DocumentLink href="/blog/2021-03-08-popover-upgrade-guide">upgrade guide</DocumentLink> to
        upgrade instances of Popover in your application.
      </p>
      <Heading as="h2" className="m-t-4 m-b-1">
        Button
      </Heading>
      <DocumentLink href="/blog/2021-03-09-button-upgrade-guide">Upgrade guide</DocumentLink>
      <DocumentLink href="/components/inputs/Button">Component docs</DocumentLink>
      <p className="m-t-3">
        We have introduced new{' '}
        <Link href="https://transferwise.github.io/neptune/design/colour/" target="_blank">
          semantic colours
        </Link>
        , replacing the old types and adding a priority prop that controls the button fill. Below
        you can see the three types with decreasing priority left to right.
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-4">
        <Image
          src={buttonPriorityMap}
          alt="Button priority mapping"
          loading="lazy"
          stretch={false}
        />
      </div>
      <p>
        We have mapped the old types to new ones. You may notice that there is no more grey button -
        the old danger button has become a secondary negative button, and now will always be red{' '}
        <span role="img" aria-label="hands raised in celebration">
          🙌
        </span>
      </p>
      <p>
        For now we have deprecated the old types, so you will see warnings but they will continue
        working. <strong>We are trialling an upgrader tool to help with these prop renames</strong>.
        See the{' '}
        <DocumentLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocumentLink> for
        an in-depth guide to the changes and instructions on how to use the tool.
      </p>
      <Heading as="h2">CircularButton</Heading>
      <DocumentLink href="/components/inputs/CircularButton">Component docs</DocumentLink>
      <p className="m-t-3">
        We have introduced circular buttons on web. These use the same types as the above, and there
        are two priorities - primary (filled) and secondary (unfilled).
      </p>
      <div style={{ maxWidth: '250px' }} className="align-self-center m-y-4">
        <Image
          src={circularButtons}
          alt="Circular button variations"
          loading="lazy"
          stretch={false}
        />
      </div>
      <Heading as="h2">Info</Heading>
      <DocumentLink href="/components/content/Info">Component docs</DocumentLink>
      <p className="m-t-3">
        We have exposed the info component, which previously was in use in Summary. You can launch
        content in a modal or a popover, and the component has been built with accessibility in
        mind. Use this instead of custom alternatives to ensure consistency of experience for our
        users.
      </p>
      <div style={{ maxWidth: '100px' }} className="align-self-center m-y-4">
        <Image src={infoButton} alt="Info button" loading="lazy" stretch={false} />
      </div>
      <Heading as="h2">InlineAlert</Heading>
      <DocumentLink href="/components/alerts/InlineAlert">Component docs</DocumentLink>
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-4">
        <Image src={inlineAlert} alt="Inline alert" loading="lazy" stretch={false} />
      </div>
      <p className="m-t-3">
        This component was previously exposed but undocumented. Our intention is to move{' '}
        <Link href="https://transferwise.github.io/neptune-web/lab/Field" target="_blank">
          Field
        </Link>{' '}
        out of the lab and extend it to support more components. That should mean that in all but
        the most custom use cases you would not need to use this component directly. But for now -
        here you go!
      </p>
      <Heading as="h1">Breaking Changes and Deprecations</Heading>
      <Heading as="h2" className="m-t-3">
        Popover
      </Heading>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Popovers.
      </p>
      <p>
        Popover has been re-written and we have changed the API slightly. You must also now wrap
        your trigger in an interactive element if it is not already interactive. See the{' '}
        <DocumentLink href="/blog/2021-03-08-popover-upgrade-guide">upgrade guide</DocumentLink> for
        details of the changes and steps you can take to update.
      </p>
      <Heading as="h2">Button types have been replaced</Heading>
      <Alert className="m-y-2" message="Deprecation" type={Sentiment.WARNING} />
      <p>
        <strong>Relevant for you</strong>: If you use Buttons passing a type prop.
      </p>
      <p>
        <strong>We are trialling an upgrader tool to help with these prop renames.</strong>
        See the{' '}
        <DocumentLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocumentLink> for
        an in depth guide to the changes and instructions on how to use the tool.
      </p>
      <Heading as="h2">Social button styles have been removed from Neptune CSS</Heading>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use the Google or Facebook button or styles. We
        think this only applies to{' '}
        <Link href="https://github.com/transferwise/security-web-components" target="_blank">
          security-web-components
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/transferwise/invite-program-web" target="_blank">
          invite-program-web
        </Link>
        .
      </p>
      <p>
        Social buttons (Google and Facebook) have been moved to a new file, which you will need to
        import separately. See the{' '}
        <DocumentLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocumentLink> for
        details.
      </p>
      <Heading as="h2">Summary now requires an aria-label for info</Heading>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Summary with an info.
      </p>
      <p>
        Because screenreader users may arrive at the info within a summary without the context of
        the outer label, we require an aria-label to be attached to the info button. It should
        describe what the user will find in the info.
      </p>
      <Heading as="h2">Tabs will now not animate by default</Heading>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Tabs (particularly if you’re Send)
      </p>
      <p>
        A new prop has been added to tabs: <code>animatePanelsOnClick</code>. Previously tabs always
        animated, but now you must set this prop to <code>true</code> for this to be the case. The
        rationale here is that in most instances tabs are used for navigation, where animation is a
        distraction (and can sometimes not work well if tabs are nested in a container). Sometimes
        though, animation is important - such as the calculator in the send flow. In this case, the
        animation provides helpful feedback to the user that something has changed.
      </p>
      <br />
    </div>
  );
};

export default PageContent;
