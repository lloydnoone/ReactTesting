import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
    )
})

afterEach(() => {
  wrapped.unmount()
})

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('allows user to enter text', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('allows users to submit comments and clear textarea', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    wrapped.update()
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
