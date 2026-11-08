import { useState } from 'react';

export function App() {
  return (
    <div>
      <TextExpander text="show-more">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        btn="show-text"
        num={25}
        showText="Show text"
        collapseText="Collapse text"
        color="#FFA500"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander text="show-less" expanded={true} backgroundColor="#eee">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  showText = 'Show more',
  collapseText = 'Show less',
  backgroundColor,
  color = '#0000FF',
  num = 15,
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div>
      <p style={{ backgroundColor, padding: '15px 1px' }}>
        {isExpanded
          ? children
          : children.split(' ').slice(0, num).join('') + '.....'}
      </p>
      <button style={{ color }} onClick={() => setIsExpanded((i) => !i)}>
        {!isExpanded ? showText : collapseText}
      </button>
    </div>
  );
}
