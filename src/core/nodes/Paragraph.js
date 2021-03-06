import {setBlockType} from 'prosemirror-commands'
import Node from '../Node'

export default class Paragraph extends Node {

  get name() {
    return 'paragraph'
  }

  get schema() {
    return {
      content: 'inline*',
      group: 'block',
      draggable: false,
      parseDOM: [{
        tag: 'p',
      }],
      toDOM: () => ['p', 0],
    }
  }

  commands({ type }) {
    return () => setBlockType(type)
  }

}
