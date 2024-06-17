import { render, screen } from '@testing-library/react';

import Characters from '@/components/Characters';

import { CountWrapper } from '@/context/CountContext';
import { FavoriteWrapper } from '@/context/FavoriteContext';
import { charactersMockData } from '@/data/dataCreator';

describe('Testing the Characters component', () => {
  it('renders all names correctly', () => {
    const firstName = charactersMockData.results[0].name;
    render(
      <FavoriteWrapper>
        <CountWrapper>
          <Characters
            characters={charactersMockData.results}
            count={charactersMockData.count}
          />
        </CountWrapper>
      </FavoriteWrapper>,
    );
    expect(screen.getByText(firstName)).toBeInTheDocument();
  });
});
