import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component
  beforeEach(() => {
    component = renderComponent(CommentBox)
  });

  it('has the class comment-box', () => {
    expect(component).to.have.class('comment-box')
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist
  })

  describe('entering some text', () => {
    let textarea
    let inputText = 'new comment'
    beforeEach(() => {
      textarea = component.find('textarea')
      textarea.simulate('change', inputText)
    });

    it('shows that text in the textarea', () => {
      expect(textarea).to.have.value(inputText)
    })
  
    it('when submitted, clears the input', () => {
      
    });
  });
})

