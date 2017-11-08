import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['First Comment', 'Second Comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an Li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component.find('li')).to.contain('First Comment');
    expect(component.find('li')).to.contain('Second Comment');
  });
});
