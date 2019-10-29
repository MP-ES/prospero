import { wrapIn, lift } from 'prosemirror-commands'
import nodeIsActive from '../core/utils/nodeIsActive'

export default function (type) {
  return (state, dispatch, view) => {
    const isActive = nodeIsActive(state, type)

    if (isActive) {
      return lift(state, dispatch)
    }

    return wrapIn(type)(state, dispatch, view)
  }
}