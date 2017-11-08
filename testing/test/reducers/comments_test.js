import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {

  it('handels action with unknown type', () => {
    const state = [];
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  });

});
