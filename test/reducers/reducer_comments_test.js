import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/reducer_comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
  it('unknown type', () => {
    const newState = commentReducer([], { type: 'UNKNOWN' })
    expect(newState).to.eql([])
  });

  it('SAVE_COMMENT', () => {
    const comment = 'New comment'
    const newState = commentReducer([], { type: SAVE_COMMENT, payload: comment })
    expect(newState).to.eql([comment])
  });
});