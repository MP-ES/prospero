import {
  chainCommands,
  deleteSelection,
  joinBackward,
  selectNodeBackward,
  joinForward,
  selectNodeForward,
  joinUp,
  joinDown,
  lift,
  newlineInCode,
  exitCode,
  createParagraphNear,
  liftEmptyBlock,
  splitBlock,
  splitBlockKeepMarks,
  selectParentNode,
  selectAll,
  wrapIn,
  setBlockType,
  toggleMark,
  autoJoin,
  baseKeymap,
  pcBaseKeymap,
  macBaseKeymap,
} from 'prosemirror-commands'

import {
  addListNodes,
  wrapInList,
  splitListItem,
  liftListItem,
  sinkListItem,
} from 'prosemirror-schema-list'

import {
  wrappingInputRule,
  textblockTypeInputRule,
} from 'prosemirror-inputrules'

import insertText from './insertText'
import markInputRule from './markInputRule'
import nodeInputRule from './nodeInputRule'
import pasteRule from './pasteRule'
import markPasteRule from './markPasteRule'
import removeMark from './removeMark'
import replaceText from './replaceText'
import setInlineBlockType from './setInlineBlockType'
import splitToDefaultListItem from './splitToDefaultListItem'
import toggleBlockType from './toggleBlockType'
import toggleList from './toggleList'
import toggleWrap from './toggleWrap'
import updateMark from './updateMark'

export {
  // prosemirror-commands
  chainCommands,
  deleteSelection,
  joinBackward,
  selectNodeBackward,
  joinForward,
  selectNodeForward,
  joinUp,
  joinDown,
  lift,
  newlineInCode,
  exitCode,
  createParagraphNear,
  liftEmptyBlock,
  splitBlock,
  splitBlockKeepMarks,
  selectParentNode,
  selectAll,
  wrapIn,
  setBlockType,
  toggleMark,
  autoJoin,
  baseKeymap,
  pcBaseKeymap,
  macBaseKeymap,

  // prosemirror-schema-list
  addListNodes,
  wrapInList,
  splitListItem,
  liftListItem,
  sinkListItem,

  // prosemirror-inputrules
  wrappingInputRule,
  textblockTypeInputRule,

  // custom
  insertText,
  markInputRule,
  markPasteRule,
  nodeInputRule,
  pasteRule,
  removeMark,
  replaceText,
  setInlineBlockType,
  splitToDefaultListItem,
  toggleBlockType,
  toggleList,
  toggleWrap,
  updateMark,
}
