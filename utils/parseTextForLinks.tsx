import { Fragment, ReactElement } from 'react';

export const parseTextForLinks = (text: string) => {
  const textComponent: (string | ReactElement)[] = text.split('LINK');

  for (let i = 1; i < textComponent.length; i += 2) {
    textComponent[i] = (
      <a
        href={'https://' + textComponent[i]}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        {textComponent[i]}
      </a>
    );
  }

  return textComponent.map((t, index) => <Fragment key={index}>{t}</Fragment>);
};
