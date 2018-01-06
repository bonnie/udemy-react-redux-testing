import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let component
  beforeEach(() => {
    component = renderComponent(CommentList)
  });
  it('has the class comment-list', () => {
    expect(component).to.have.class('comment-list')
  });
});