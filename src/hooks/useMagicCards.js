import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const MagicCards = ()=>{
  const cards = useStaticQuery(graphql`
  query MagicCards {
    magic: allRestApiV1Cards(sort: {fields: cards___name, order: ASC}) {
      nodes {
        final: cards {
          id
          colors
          name
          text
          colors
          imageUrl
        }
      }
    }
  }
  `)

  let { final } = cards.magic.nodes[0];
  console.log(final);

  return (
    <div>
      {
        final.map((card, i) =>
          <li key={i}>
            {card.name}
            <img src={card.imageUrl} alt={card.name} />
          </li>
        )
      }
    </div>
  )
}

export default MagicCards